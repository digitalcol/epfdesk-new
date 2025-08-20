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

export const metadata = {
  title: "EPF Desk | Simplifying EPF Compliance & Payroll Services for Businesses in India",
  description:
    "EPFDesk.com frees your HR and Finance teams to focus on what they do best: driving growth, developing talent, and building the future of your organization. ",
  alternates: { canonical: "https://epfdesk-next.vercel.app/" },
  openGraph: {
    title: "EPF Desk | Simplifying EPF Compliance & Payroll Services for Businesses in India",
    url: "https://epfdesk-next.vercel.app",
  },
};

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
