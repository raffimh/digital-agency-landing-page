import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { TrustSection } from "@/components/sections/trust";
import { ServicesSection } from "@/components/sections/services";
import { PortfolioSection } from "@/components/sections/portfolio";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TrustSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}