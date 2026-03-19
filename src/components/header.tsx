"use client";

import { siteConfig } from "@/lib/site-config";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#area", label: "Service Area" },
  { href: "#reviews", label: "Reviews" },
  { href: "#quote", label: "Get a Quote" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-rescue-red">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-rescue-red hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Button size="sm" asChild>
            <a href="#quote">Free Quote</a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-700 bg-dark px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-semibold text-gray-300 hover:text-white border-b border-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 py-3 text-sm font-bold text-rescue-red"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
