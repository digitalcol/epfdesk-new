import React from "react";

import FadeInWhenVisible from "./fadeInWhenVisible";

import PFServicesSection from "./pfServicesSection";
import FaqAccordion from "./faqAccordian";
import { heroSlides, ptFaq } from "../../utils/data";

import HeroSection from "./linksHeroSection";

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
