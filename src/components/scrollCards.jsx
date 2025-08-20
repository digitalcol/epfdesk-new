import React from "react";

import { pastelCardsLanding } from "../utils/data";
import PastelCardSlider from "./pastelCardSlider";

const StackedCards = () => {
  return (
    <>
      <section className="text-center mb-12 w-full md:w-[75%] lg:w-[75%] mx-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center  text-center">
          {/* Heading */}
          <h2 className="text-5xl sm:text-5xl font-bold tracking-tight leading-tight text-gray-900">
            The EPFDesk.com Advantage: Authority, Expertise, Trust
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-[1.4rem] mt-6 text-gray-600">
            When you partner with EPFDesk.com, you gain more than a service
            provider; you gain a strategic ally. Our advantage is defined by the
            unparalleled knowledge of our teams, our expansive reach, and a
            client-first approach designed for your ultimate peace of mind.
          </p>
        </div>
      </section>

      <p className="text-4xl sm:text-4xl text-center w-full md:w-[75%] lg:w-[75%] mx-auto font-bold mt-6 sm:mt-16 text-black">
        Unmatched Compliance Expertise & Strategic Insights.
      </p>
      <PastelCardSlider cardsData={pastelCardsLanding} />
    </>
  );
};

export default StackedCards;
