import { siteConfig } from "@/lib/site-config";
import { Zap, ShieldCheck, Clock, DollarSign } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  ShieldCheck,
  Clock,
  DollarSign,
};

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-black md:text-4xl text-center">
          Why <span className="text-rescue-red">{siteConfig.name}</span>
        </h2>
        <p className="mt-3 text-center text-gray-400 max-w-xl mx-auto">
          No corporate runaround. Just a tradesman who picks up the phone and gets it done.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.whyUs.map((item) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-rescue-red/20 text-rescue-red">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
