import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Specialties } from "@/components/specialties";
import { About } from "@/components/about";
import { PainPoints } from "@/components/pain-points";
import { Testimonials } from "@/components/testimonials";
import { Differentials } from "@/components/differentials";
import { Journey } from "@/components/journey";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <About />
        <PainPoints />
        <Testimonials />
        <Differentials />
        <Journey />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
