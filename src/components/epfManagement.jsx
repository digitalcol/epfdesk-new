import React from "react";
import EPFManagementCarousel from "./epfmanagementCarousel";
import EPFServicesSection from "./epfServicesSection";
import EPFComplianceROI from "./epfComplianceROI";
import FadeInWhenVisible from "./fadeInWhenVisible";
import FaqAccordion from "./faqAccordian";
import {
  dummyCards,
  epfManagementFaq,
  epfoCards,
  epfServices,
  heroSlides,
  plans,
} from "../../utils/data";
import LatticeTabs from "./latticeTabs";
import HeroSection from "./linksHeroSection";

function Hero() {
  return <HeroSection slide={heroSlides[4]} />;
}

const EPFManagement = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div>
          <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">
            Complete EPF Services We Provide
          </h2>
          <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
            Our end-to-end EPF management solution eliminates administrative
            burdens while ensuring 100% regulatory compliance and audit
            readiness.
          </p>
          <LatticeTabs cards={epfoCards} />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <EPFServicesSection />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <EPFComplianceROI />
      </FadeInWhenVisible> */}
      <FadeInWhenVisible>
        <FaqAccordion faqs={epfManagementFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default EPFManagement;
