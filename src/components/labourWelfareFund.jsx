import React from "react";

import FadeInWhenVisible from "./fadeInWhenVisible";
import LWFServicesSection from "./lwfServicesSection";

import FaqAccordion from "./faqAccordian";
import { heroSlides, lwfFaq } from "../../utils/data";
import HeroSection from "./linksHeroSection";

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
