import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import FaqAccordion from "@/components/faqAccordian";
import HeroSection from "@/components/linksHeroSection";
import PFServicesSection from "@/components/pfServicesSection";
import { heroSlides, ptFaq } from "@/utils/data";

export const metadata = {
  title: `Professional Tax Compliance: Master Multi-State Nuances, Ensure Flawless Adherence`,
  description:
    "Master Professional Tax compliance across India with EPFDesk.com. We handle state-specific calculations, precise filings, and ensure timely adherence. Avoid penalties, achieve 100% accuracy for PT.",
  alternates: { canonical: "https://epfdesk.com/pt" },
  openGraph: {
    title: `Professional Tax Compliance: Master Multi-State Nuances, Ensure Flawless Adherence`,
    url: "https://epfdesk.com/pt",
  },
};

function Hero() {
  return <HeroSection slide={heroSlides[3]} />;
}

const ProfessionalTax = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <PFServicesSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={ptFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default ProfessionalTax;
