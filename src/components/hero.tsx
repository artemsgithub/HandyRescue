import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark text-white">
      {/* Diagonal red accent stripe */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-[600px] w-[600px] rotate-12 bg-rescue-red/10 rounded-3xl" />
        <div className="absolute -left-10 bottom-0 h-[400px] w-[400px] -rotate-6 bg-rescue-red/5 rounded-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Urgency badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-rescue-red/20 px-4 py-1.5 text-sm font-semibold text-rescue-red">
            <span className="h-2 w-2 rounded-full bg-rescue-red animate-pulse" />
            Fast Response — Most Jobs Quoted Same Day
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Something Broke?
            <br />
            <span className="text-rescue-red">We&apos;re On Our Way.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 md:text-xl leading-relaxed">
            {siteConfig.description} Serving {siteConfig.city} and surrounding areas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#quote">Get a Free Quote</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={siteConfig.phoneHref} className="gap-2">
                <Phone className="h-5 w-5" />
                Call Now — {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>

        {/* Van visual placeholder — hero imagery area */}
        <div className="mt-16 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-1/2">
          <div className="relative mx-auto aspect-[16/10] max-w-lg rounded-2xl border-2 border-rescue-red/30 bg-rescue-red/5 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🚐</div>
              <p className="text-sm text-gray-400 font-medium">
                THE VAN — 1999 Toyota Hiace
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Replace with hero van photo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
