import ESCIServicesSection from "@/components/esciServicesSection";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import FaqAccordion from "@/components/faqAccordian";
import HeroSection from "@/components/linksHeroSection";
import StickyScrollSections from "@/components/scrollSyncComponent";
import { esicFaq, heroSlides, plans } from "@/utils/data";

export const metadata = {
  title: `ESIC Compliance: Effortless Management for Employee Well-being & Business Protection`,
  description:
    "Master ESIC compliance with EPFDesk.com. We handle registration, accurate contributions, monthly filings & ensure all employee benefits. Avoid penalties, achieve 99.9% accuracy, and empower your HR.",
  alternates: { canonical: "https://epfdesk-next.vercel.app/esic" },
  openGraph: {
    title: `ESIC Compliance: Effortless Management for Employee Well-being & Business Protection`,
    url: "https://epfdesk-next.vercel.app/esic",
  },
};

function Hero() {
  return <HeroSection slide={heroSlides[0]} />;
}

const ESICCompliance = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <ESCIServicesSection plans={plans} />
      </FadeInWhenVisible>
      <StickyScrollSections items={plans} />
      <FadeInWhenVisible>
        <FaqAccordion faqs={esicFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default ESICCompliance;
