import { siteConfig } from "@/lib/site-config";
import {
  Wrench,
  Paintbrush,
  HardHat,
  ShieldCheck,
  Truck,
  Hammer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Paintbrush,
  HardHat,
  ShieldCheck,
  Truck,
  Hammer,
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-black text-dark md:text-4xl text-center">
          What We <span className="text-rescue-red">Fix</span>
        </h2>
        <p className="mt-3 text-center text-muted max-w-xl mx-auto">
          From quick repairs to full renovations — one call covers it all.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <div
                key={service.id}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-rescue-red/30 transition-all"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-rescue-red/10 text-rescue-red group-hover:bg-rescue-red group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-dark">{service.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
