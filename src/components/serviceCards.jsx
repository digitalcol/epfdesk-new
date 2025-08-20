"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import HorizontalCards from "./horizontalCards";
import { horizontalCardsLinks } from "../utils/data";

const ServiceCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleNavigation = (link) => {
    // Scroll to top
    window.scrollTo(0, 0);
    // Navigate in Next.js
    router.push(link);
  };

  return (
    <section className="bg-white py-16 sm:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 w-full md:w-[80%] lg:w-[80%] mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-6 font-bold text-gray-900">
            Transform Compliance Chaos Into Strategic Advantage
          </h2>
          <p className="text-gray-600 mt-3 text-[1.5rem] w-full md:w-[75%] lg:w-[75%] mx-auto">
            EPFDesk.com frees your HR and Finance teams to focus on what they do
            best: driving growth, developing talent, and building the future of
            your organization.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col gap-8">
          <HorizontalCards
            cardsData={horizontalCardsLinks}
            link={handleNavigation}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
