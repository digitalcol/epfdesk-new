import React from "react";
import FadeInWhenVisible from "./fadeInWhenVisible";

import ESCIServicesSection from "./esciServicesSection";
import { plans, esicFaq, heroSlides } from "../../utils/data";
import FaqAccordion from "./faqAccordian";
import StickyScrollSections from "./scrollSyncComponent";
import HeroSection from "./linksHeroSection";

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
