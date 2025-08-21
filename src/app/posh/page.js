import React from "react";

import {
  heroSlides,
  horizontalCardsPosh,
  horizontalCardsPoshOne,
  largeCardsPosh,
  largeCardsPoshOne,
  pastelCardsPosh,
  plansPosh,
  poshFaq,
  verticalCardsPosh,
  verticalCardsPoshOne,
} from "../../utils/data";
import HeroSection from "@/components/linksHeroSection";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import VerticalAndHorizontalCards from "@/components/verticalAndHorizontalCards";
import LargeCardSlider from "@/components/largeCards";
import PastelCardSlider from "@/components/pastelCardSlider";
import StickyScrollSections from "@/components/scrollSyncComponent";
import FaqAccordion from "@/components/faqAccordian";

export const metadata = {
  title: `POSH Act Compliance: Fostering Safe Workplaces, Ensuring Legal Integrity`,
  description:
    "EPFdesk.com offers expert POSH Act compliance in India, including a dedicated 3rd-party complaint hotline. Establish IC, conduct training, handle complaints & ensure 100% adherence to POSH Act 2013 for safe workplaces.",
  alternates: { canonical: "https://epfdesk.com/posh" },
  openGraph: {
    title: `POSH Act Compliance: Fostering Safe Workplaces, Ensuring Legal Integrity`,
    url: "https://epfdesk.com/posh",
  },
};


function Hero() {
  return <HeroSection slide={heroSlides[5]} />;
}

const Posh = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <VerticalAndHorizontalCards
          horizontalCards={horizontalCardsPosh}
          verticalCards={verticalCardsPosh}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <LargeCardSlider cardsData={largeCardsPosh} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl px-2 sm:text-5xl mt-16 font-extrabold text-center text-gray-800 mb-10">
            Your Definitive Solution: EPFdesk.com’s POSH Act Compliance Services
          </h1>
        </div>
        <PastelCardSlider cardsData={pastelCardsPosh} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <VerticalAndHorizontalCards
          horizontalCards={horizontalCardsPoshOne}
          verticalCards={verticalCardsPoshOne}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <LargeCardSlider cardsData={largeCardsPoshOne} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <h2 className="text-3xl sm:text-5xl max-w-5xl px-2 mx-auto font-bold mt-16 mb-12 text-center">
          Why EPFdesk.com: Your Definitive Partner for POSH Act Compliance{" "}
        </h2>
        <p className="max-w-5xl mx-auto mt-6 text-center px-4 text-[1.4rem] mb-10 text-gray-600 font-bold">
          EPFdesk.com stands as India&apos;s premier choice for comprehensive POSH
          Act compliance, redefining workplace safety and legal integrity for
          mid-to-large enterprises.
        </p>
        <StickyScrollSections items={plansPosh} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={poshFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default Posh;
