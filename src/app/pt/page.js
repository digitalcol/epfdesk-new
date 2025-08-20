import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import FaqAccordion from "@/components/faqAccordian";
import HeroSection from "@/components/linksHeroSection";
import PFServicesSection from "@/components/pfServicesSection";
import { heroSlides, ptFaq } from "@/utils/data";


function Hero() {
  return (
    <HeroSection slide={heroSlides[3]} />
    
  );
}

const ProfessionalTax = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <PFCarousel />
      </FadeInWhenVisible> */}
      <FadeInWhenVisible>
        <PFServicesSection />
      </FadeInWhenVisible>
      {/* <PastelCards /> */}
      <FadeInWhenVisible>
        <FaqAccordion faqs={ptFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default ProfessionalTax;
