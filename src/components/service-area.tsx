import { siteConfig } from "@/lib/site-config";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServiceArea() {
  return (
    <section id="area" className="py-20 bg-cream">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-black text-dark md:text-4xl">
          Service <span className="text-rescue-red">Area</span>
        </h2>
        <p className="mt-3 text-muted max-w-xl mx-auto">
          Proudly serving {siteConfig.region}. If you&apos;re nearby, we&apos;ll be there.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {siteConfig.serviceAreas.map((area) => (
            <div
              key={area}
              className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-5 py-2.5 text-sm font-semibold text-dark shadow-sm"
            >
              <MapPin className="h-4 w-4 text-rescue-red" />
              {area}
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          Not sure if we cover your area? Give us a call — we might surprise you.
        </p>
        <div className="mt-4">
          <Button variant="outline" size="sm" asChild>
            <a href={siteConfig.phoneHref}>Call to Check</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
