/**
 * Site Configuration — swap this file to clone for a new niche.
 * Every component reads from here so a single edit rebrands the entire site.
 */

export const siteConfig = {
  // ── Brand ─────────────────────────────────────────────────────────
  name: "Handy Rescue",
  tagline: "We Show Up. We Fix It. Done.",
  description:
    "Fast, reliable handyman and contracting services. Licensed professionals who actually pick up the phone.",
  url: "https://handyrescue.com",

  // ── Palette (cream + red, inspired by the 1999 Toyota Hiace ambulance) ──
  colors: {
    primary: "#C62828", // deep rescue red
    primaryDark: "#8E0000",
    accent: "#FFF8E1", // warm cream
    accentDark: "#F5E6C8",
    dark: "#1A1A1A",
    muted: "#6B7280",
    white: "#FFFFFF",
  },

  // ── Contact ───────────────────────────────────────────────────────
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "jobs@handyrescue.com",
  address: "Serving the Greater Metro Area",

  // ── Service area ──────────────────────────────────────────────────
  city: "[CITY]",
  region: "Greater [CITY] Metro Area",
  serviceAreas: [
    "[CITY]",
    "Surrounding Suburbs",
    "Nearby County",
  ],

  // ── Social ────────────────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/handyrescue",
    facebook: "https://facebook.com/handyrescue",
    google: "https://g.page/handyrescue",
  },

  // ── License ───────────────────────────────────────────────────────
  license: "Licensed & Insured — Lic. #XXXXXXX",

  // ── Services (modular — add/remove per niche clone) ───────────────
  services: [
    {
      id: "handyman",
      title: "Handyman Services",
      description:
        "Drywall, fixtures, doors, shelves, furniture assembly — whatever needs fixing, we handle it.",
      icon: "Wrench",
    },
    {
      id: "painting",
      title: "Painting",
      description:
        "Interior & exterior painting. Clean lines, proper prep, no shortcuts.",
      icon: "Paintbrush",
    },
    {
      id: "contracting",
      title: "General Contracting",
      description:
        "Renovations, build-outs, and remodels done right. Permitted and inspected.",
      icon: "HardHat",
    },
    {
      id: "mold",
      title: "Mold Remediation",
      description:
        "Safe, thorough mold removal. We find the source, fix it, and make sure it stays gone.",
      icon: "ShieldCheck",
    },
    {
      id: "moving",
      title: "Moving & Hauling",
      description:
        "Local moves, junk removal, and heavy lifting. The van shows up, your stuff gets there.",
      icon: "Truck",
    },
    {
      id: "custom",
      title: "Custom Builds",
      description:
        "Shelving, workbenches, storage solutions — built to spec, built to last.",
      icon: "Hammer",
    },
  ],

  // ── Testimonials (placeholder slots for Google reviews) ────────────
  testimonials: [
    {
      name: "Mike R.",
      text: "Called at 8 AM, they were at my door by noon. Fixed the leak, patched the drywall, and cleaned up. No BS.",
      rating: 5,
    },
    {
      name: "Sarah T.",
      text: "Finally a handyman who actually shows up when they say they will. Fair price, great work.",
      rating: 5,
    },
    {
      name: "James L.",
      text: "Hired them for a full bathroom remodel. On time, on budget, and the work is solid. Already booked them for the kitchen.",
      rating: 5,
    },
  ],

  // ── Why Us bullets ────────────────────────────────────────────────
  whyUs: [
    {
      title: "Fast Response",
      description: "We pick up the phone. Most jobs quoted within hours, started within days.",
      icon: "Zap",
    },
    {
      title: "Licensed & Insured",
      description: "Fully licensed, fully insured. Your property is protected.",
      icon: "ShieldCheck",
    },
    {
      title: "We Actually Show Up",
      description: "No ghosting, no endless rescheduling. We set a time and we're there.",
      icon: "Clock",
    },
    {
      title: "Fair Pricing",
      description: "Honest quotes, no surprise charges. You know the price before we start.",
      icon: "DollarSign",
    },
  ],

  // ── Form config ───────────────────────────────────────────────────
  urgencyLevels: [
    { value: "flexible", label: "Flexible" },
    { value: "this-week", label: "This Week" },
    { value: "emergency", label: "Emergency" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
