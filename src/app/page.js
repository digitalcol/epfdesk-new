import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import Hero from "@/components/hero";
import LargeCardSlider from "@/components/largeCards";

import LimitedCapacitySection from "@/components/limitedCapacitySection";
import MazeEscapeSection from "@/components/mazeEscapeSection";
import StackedCards from "@/components/scrollCards";
import ServiceCards from "@/components/serviceCards";
import CustomerCarousel from "@/components/customerCarousel";
import { largeCardsLanding, slidesLandingPage } from "@/utils/data";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

export const metadata = {
  title: "EPF Desk | Simplifying EPF Compliance for Businesses in India",
  description:
    "EPFDesk.com frees your HR and Finance teams to focus on what they do best: driving growth, developing talent, and building the future of your organization. ",
  alternates: { canonical: "https://epfdesk.com" },
  openGraph: {
    title: "EPF Desk | Simplifying EPF Compliance for Businesses in India",
    url: "https://epfdesk.com",
  },
};

export default function Home() {
  return (
    <>
    <Toaster position="top-center" />
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
        <CustomerCarousel slides={slidesLandingPage}/>
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
