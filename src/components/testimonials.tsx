import { siteConfig } from "@/lib/site-config";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-black text-dark md:text-4xl text-center">
          What People <span className="text-rescue-red">Say</span>
        </h2>
        <p className="mt-3 text-center text-muted max-w-xl mx-auto">
          Real reviews from real customers. No fluff.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {siteConfig.testimonials.map((review, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-cream p-6 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-rescue-red text-rescue-red"
                  />
                ))}
              </div>
              <p className="text-dark text-sm leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-bold text-dark">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
