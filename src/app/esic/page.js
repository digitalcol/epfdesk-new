import ESCIServicesSection from "@/components/esciServicesSection";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import FaqAccordion from "@/components/faqAccordian";
import HeroSection from "@/components/linksHeroSection";
import StickyScrollSections from "@/components/scrollSyncComponent";
import { esicFaq, heroSlides, plans } from "@/utils/data";

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
