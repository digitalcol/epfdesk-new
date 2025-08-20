import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import Hero from "@/components/hero";
import LargeCardSlider from "@/components/largeCards";

import LimitedCapacitySection from "@/components/limitedCapacitySection";
import MazeEscapeSection from "@/components/mazeEscapeSection";
import StackedCards from "@/components/scrollCards";
import ServiceCards from "@/components/serviceCards";
import CustomerCarousel from "@/components/customerCarousel";
import { largeCardsLanding } from "@/utils/data";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <LargeCardSlider cardsData={largeCardsLanding} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ServiceCards />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <StackedCards />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CustomerCarousel/>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <LimitedCapacitySection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <MazeEscapeSection />
      </FadeInWhenVisible>
    </>
  );
}
