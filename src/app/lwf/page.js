import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import FaqAccordion from "@/components/faqAccordian";
import HeroSection from "@/components/linksHeroSection";
import LWFServicesSection from "@/components/lwfServicesSection";
import { heroSlides, lwfFaq } from "@/utils/data";

export const metadata = {
  title: `Labour Welfare Fund (LWF) Compliance: Navigating State Nuances for Flawless Adherence`,
  description:
    "Master LWF compliance across India with EPFDesk.com. We handle state-specific calculations, filings & ensure timely adherence. Avoid penalties, achieve 100% accuracy for LWF.",
  alternates: { canonical: "https://epfdesk-next.vercel.app/lwf" },
  openGraph: {
    title: `Labour Welfare Fund (LWF) Compliance: Navigating State Nuances for Flawless Adherence`,
    url: "https://epfdesk-next.vercel.app/lwf",
  },
};

function Hero() {
  return <HeroSection slide={heroSlides[2]} />;
}

const LabourWelfareFund = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <LWFServicesSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={lwfFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default LabourWelfareFund;
