import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import FaqAccordion from "@/components/faqAccordian";
import HeroSection from "@/components/linksHeroSection";
import LWFServicesSection from "@/components/lwfServicesSection";
import { heroSlides, lwfFaq } from "@/utils/data";

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
