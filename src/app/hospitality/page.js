import React from "react";

import {
  heroSlides,
  horizontalCardsHosp,
  hospFaq,
  largeCardsHosp,
  pastelCardsHosp,
  slidesLandingHosp,
  verticalCardsHosp,
} from "../../utils/data";
import HeroSection from "@/components/linksHeroSection";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import VerticalAndHorizontalCards from "@/components/verticalAndHorizontalCards";
import LargeCardSlider from "@/components/largeCards";
import PastelCardSlider from "@/components/pastelCardSlider";
import CustomerCarousel from "@/components/customerCarousel";
import FaqAccordion from "@/components/faqAccordian";
import LimitedOnboardingCTA from "@/components/LimitedOnboardingCTA";
import CostComparison from "@/components/CostComparison";

export const metadata = {
  title: `Hospitality Compliance: The Hidden 
Cost of Guest Experience`,
  description:
    "Workforce Limited offers specialized compliance for restaurants & hotels. Master EPF, ESIC, POSH & labor laws. We protect your brand and manage high attrition, from a single outlet to a national chain.",
  alternates: { canonical: "https://epfdesk.com/hospitality" },
  openGraph: {
    title: `Hospitality Compliance: The Hidden 
Cost of Guest Experience`,
    url: "https://epfdesk.com/hospitality",
  },
};

function Hero() {
  return (
 <div
  style={{
    backgroundImage: `url("https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?_gl=1*1r2b55l*_ga*MTQ2OTkzMDg1My4xNzQ5NTY3ODA4*_ga_8JE65Q40S6*czE3NTYyMDYwOTYkbzE2JGcxJHQxNzU2MjA2MTA4JGo0OCRsMCRoMA..")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative flex items-center justify-center h-screen text-white flex-col max-w-5xl m-auto px-4">
    <h1 className="text-5xl text-center mb-5">
      Hospitality Compliance: The Hidden Cost of Guest Experience
    </h1>
    <p className="text-center text-2xl">
      Workforce Limited offers specialized compliance for restaurants & hotels.
      Master EPF, ESIC, POSH & labor laws. We protect your brand and manage high
      attrition, from a single outlet to a national chain.
    </p>
  </div>
</div>

  );
}

const Posh = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <VerticalAndHorizontalCards
          horizontalCards={horizontalCardsHosp}
          verticalCards={verticalCardsHosp}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <LargeCardSlider cardsData={largeCardsHosp} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl px-2 sm:text-5xl mt-16 font-extrabold text-center text-gray-800 mb-10">
            Exactly What We Handle (No Corporate Fluff)
          </h1>
          <p className="max-w-5xl mx-auto mt-6 text-center px-4 text-[1.4rem] mb-10 text-gray-600 font-bold">
            Workforce Limited transforms your compliance chaos into a strategic
            advantage. It frees your team to focus on what they do best:
            delivering an exceptional guest experience, managing your brand, and
            building the future of your organization.
          </p>
        </div>
        <PastelCardSlider cardsData={pastelCardsHosp} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CustomerCarousel slides={slidesLandingHosp} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CostComparison />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={hospFaq} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <LimitedOnboardingCTA />
      </FadeInWhenVisible> */}
    </>
  );
};

export default Posh;
