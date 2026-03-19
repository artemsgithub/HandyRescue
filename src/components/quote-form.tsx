"use client";

import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      urgency: (form.elements.namedItem("urgency") as HTMLSelectElement).value,
      description: (form.elements.namedItem("description") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please call us instead.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unexpected error");
    }
  }

  return (
    <section id="quote" className="py-20 bg-dark text-white">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-3xl font-black md:text-4xl text-center">
          Get a <span className="text-rescue-red">Free Quote</span>
        </h2>
        <p className="mt-3 text-center text-gray-400">
          Tell us what you need. We&apos;ll get back to you fast.
        </p>

        {status === "success" ? (
          <div className="mt-10 rounded-xl border border-green-500/30 bg-green-500/10 p-8 text-center">
            <p className="text-lg font-bold text-green-400">Quote Request Sent!</p>
            <p className="mt-2 text-sm text-gray-400">
              We&apos;ll be in touch shortly. For emergencies, call{" "}
              <a href={siteConfig.phoneHref} className="text-rescue-red font-bold">
                {siteConfig.phone}
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1.5">
                  Name *
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-1.5">
                  Phone *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1.5">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-1.5">
                  Service Needed *
                </label>
                <Select id="service" name="service" required>
                  <option value="">Select a service</option>
                  {siteConfig.services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </Select>
              </div>
              <div>
                <label htmlFor="urgency" className="block text-sm font-semibold mb-1.5">
                  Urgency *
                </label>
                <Select id="urgency" name="urgency" required>
                  <option value="">How soon?</option>
                  {siteConfig.urgencyLevels.map((u) => (
                    <option key={u.value} value={u.value}>
                      {u.label}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold mb-1.5">
                Describe the Job
              </label>
              <Textarea
                id="description"
                name="description"
                placeholder="What needs fixing? Any details help us give you a better quote."
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400 bg-red-400/10 rounded-lg px-4 py-2">
                {errorMsg}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Quote Request
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
