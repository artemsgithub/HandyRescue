import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { ServiceArea } from "@/components/service-area";
import { Testimonials } from "@/components/testimonials";
import { QuoteForm } from "@/components/quote-form";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <ServiceArea />
      <Testimonials />
      <QuoteForm />
    </>
  );
}
