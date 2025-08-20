import EPFdeskServices from "@/components/epfDeskServices";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import FaqAccordion from "@/components/faqAccordian";
import LargeCardSlider from "@/components/largeCards";
import HeroSection from "@/components/linksHeroSection";
import PastelCardSlider from "@/components/pastelCardSlider";
import VerticalAndHorizontalCards from "@/components/verticalAndHorizontalCards";
import {
  epfDeskFaq,
  heroSlides,
  horizontalCardsDesk,
  largeCardsDesk,
  pastelCardsDesk,
  plansEpfDesk,
  verticalCardsDesk,
} from "@/utils/data";
import React from "react";

export const metadata = {
  title: "EPFDesk: Your Direct Line to Effortless EPF Solutions & Support",
  description:
    "EPFDesk empowers your employees with instant EPF query resolution. Check balance, track claims, update KYC & more – all issues handled by our experts. Free your HR team from daily EPF queries.",
  alternates: { canonical: "https://epfdesk-next.vercel.app/epfdesk" },
  openGraph: {
    title: "EPFDesk: Your Direct Line to Effortless EPF Solutions & Support",
    url: "https://epfdesk-next.vercel.app/epfdesk",
  },
};

function Hero() {
  return <HeroSection slide={heroSlides[1]} />;
}

const EPFDesk = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <VerticalAndHorizontalCards
          horizontalCards={horizontalCardsDesk}
          verticalCards={verticalCardsDesk}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <LargeCardSlider cardsData={largeCardsDesk} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <PastelCardSlider cardsData={pastelCardsDesk} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <EPFdeskServices plans={plansEpfDesk} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={epfDeskFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default EPFDesk;
