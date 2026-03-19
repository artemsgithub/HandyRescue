# Handy Rescue

Customer-facing lead generation website for a handyman and contracting business. Built as a template for cloning into niche-specific sites.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- **Resend** (email) + **Twilio** (SMS) for form submissions
- Deploy to **Vercel**

## Quick Start

```bash
npm install
cp .env.local.example .env.local   # fill in your keys
npm run dev
```

## Cloning for a New Niche

Edit `src/lib/site-config.ts` — brand name, palette, services, service areas, testimonials, and contact info are all driven from this single config file.

## Environment Variables

See `.env.local.example` for required keys:

- `RESEND_API_KEY` / `RESEND_FROM_EMAIL` — email notifications
- `TWILIO_ACCOUNT_SID` / `TWILIO_AUTH_TOKEN` / `TWILIO_PHONE_NUMBER` — SMS notifications
- `BUSINESS_EMAIL` / `BUSINESS_PHONE_NUMBER` — where notifications go

## Sections

1. Hero with van imagery
2. Services (modular, config-driven)
3. Why Us
4. Service Area
5. Testimonials
6. Quote Request Form (fires email + SMS)
7. Footer with phone, socials, license

## SEO

- Meta tags + Open Graph
- JSON-LD structured data (LocalBusiness schema)
- Mobile-first responsive design
