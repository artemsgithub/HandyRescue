import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

interface QuoteRequest {
  name: string;
  phone: string;
  email?: string;
  service: string;
  urgency: string;
  description?: string;
}

export async function POST(request: Request) {
  let body: QuoteRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, phone, email, service, urgency, description } = body;

  if (!name || !phone || !service || !urgency) {
    return NextResponse.json(
      { error: "Name, phone, service, and urgency are required." },
      { status: 400 }
    );
  }

  const serviceName =
    siteConfig.services.find((s) => s.id === service)?.title ?? service;
  const urgencyLabel =
    siteConfig.urgencyLevels.find((u) => u.value === urgency)?.label ?? urgency;

  const summary = [
    `New Quote Request from ${siteConfig.name}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    `Service: ${serviceName}`,
    `Urgency: ${urgencyLabel}`,
    description ? `Description: ${description}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const errors: string[] = [];

  // ── Send email via Resend ──────────────────────────────────────────
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? `quotes@${siteConfig.url.replace("https://", "")}`,
        to: process.env.BUSINESS_EMAIL ?? siteConfig.email,
        subject: `[${urgencyLabel}] Quote Request — ${serviceName} — ${name}`,
        text: summary,
      });
    } catch (err) {
      console.error("Resend email failed:", err);
      errors.push("email");
    }
  }

  // ── Send SMS via Twilio ────────────────────────────────────────────
  if (
    process.env.TWILIO_ACCOUNT_SID &&
    process.env.TWILIO_AUTH_TOKEN &&
    process.env.TWILIO_PHONE_NUMBER &&
    process.env.BUSINESS_PHONE_NUMBER
  ) {
    try {
      const twilio = await import("twilio");
      const client = twilio.default(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );

      const smsBody = `🔧 ${siteConfig.name} — New ${urgencyLabel} Quote\n${name} | ${phone}\nService: ${serviceName}${description ? `\n${description.slice(0, 160)}` : ""}`;

      await client.messages.create({
        body: smsBody,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.BUSINESS_PHONE_NUMBER,
      });
    } catch (err) {
      console.error("Twilio SMS failed:", err);
      errors.push("sms");
    }
  }

  // If neither channel is configured, log it (dev mode)
  if (!process.env.RESEND_API_KEY && !process.env.TWILIO_ACCOUNT_SID) {
    console.log("── QUOTE REQUEST (no channels configured) ──");
    console.log(summary);
    console.log("─────────────────────────────────────────────");
  }

  if (errors.length === 2) {
    return NextResponse.json(
      { error: "Failed to send notification. Please call us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
