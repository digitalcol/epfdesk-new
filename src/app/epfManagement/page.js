import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import HeroSection from "@/components/linksHeroSection";
import LatticeTabs from "@/components/latticeTabs";
import { epfManagementFaq, epfoCards, heroSlides } from "@/utils/data";
import EPFServicesSection from "@/components/epfServicesSection";
import FaqAccordion from "@/components/faqAccordian";

export const metadata = {
  title: `Employer EPF Management: Streamline Your Compliance & Unleash HR's Potential`,
  description:
    "Master employer EPF compliance with EPFDesk.com. We automate challans, manage filings & mitigate risks, freeing your HR & Finance teams for strategic growth. Expert-led solutions for Indian businesses.",
  alternates: { canonical: "https://epfdesk-next.vercel.app/epfManagement" },
  openGraph: {
    title: `Employer EPF Management: Streamline Your Compliance & Unleash HR's Potential`,
    url: "https://epfdesk-next.vercel.app/epfManagement",
  },
};

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

      <FadeInWhenVisible>
        <FaqAccordion faqs={epfManagementFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default EPFManagement;
