import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import HeroSection from "@/components/linksHeroSection";
import LatticeTabs from "@/components/latticeTabs";
import EPFServicesSection from "@/components/epfServicesSection";
import FaqAccordion from "@/components/faqAccordian";
import StickyScrollSections from "../../../components/scrollSyncComponent";
import {
  heroSlides,
  epfoCards,
  epfManagementFaq,
  cityData,
  standalonePages,
  epfManagementBangalore,
  epfManagementFaqBangalore,
  largeCardsEpfoBangalore,
  pastelCardsEpfoBangalore,
  epfBangaloreCardData,
  epfBangaloreRegistrationCardData,
  largeCardsEpfoBangaloreRegistration,
  pastelCardsEpfoBangaloreRegistration,
  epfManagementFaqBangaloreRegistration,
} from "@/utils/data";
import LargeCardSlider from "@/components/largeCards";
import PastelCardSlider from "@/components/pastelCardSlider";

import { PerformanceSection } from "@/components/PerformanceSection";
import PerformanceCard from "@/components/PerformanceCard";
import SliderCards from "@/components/SliderCards";
import Script from "next/script";

export const metadata = {
  title: `PF Consultant in Bangalore | EPF Registration, Returns & Inspections | Workforce`,
  description:
    "Leading PF consultants in Bangalore for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
  alternates: {
    canonical: "https://epfdesk.com/epf/bangalore/pf-consultants-in-bangalore",
  },
  openGraph: {
    title: `Leading PF consultants in Bangalore for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
    url: "https://epfdesk.com/epf/bangalore/pf-consultants-in-bangalore",
  },
};

export default async function EPFPage({ params }) {
  const { segments = [] } = await params;

  // CASE 1: /epf
  if (segments.length === 0) {
    return (
      <>
        <FadeInWhenVisible>
          <HeroSection slide={heroSlides[4]} />
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
  }

  // CASE 2: /epf/:slug
  if (segments.length === 1) {
    const [slug] = segments;
    const data = standalonePages[slug];

    if (!data)
      return (
        <div className="p-10 text-center text-red-500">
          No page found for “{slug}”
        </div>
      );

    return (
      <>
        <FadeInWhenVisible>
          <HeroSection slide={heroSlides[4]} slug={slug} data={data} />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div>
            <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">
              {data.title}
            </h2>
            <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
              {data.description}
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
  }

  // CASE 3: /epf/:city/:slug
  if (segments.length === 2) {
    // const [city, slug] = segments;
    // const data = cityData[city]?.pf;
    const [city, slug] = segments;
    const cityPages = cityData[city];
    console.log(cityPages);

    if (!cityPages)
      return (
        <div className="p-10 text-center text-red-500">
          No data found for city “{city}”
        </div>
      );

    const slugMap = {
      "pf-consultants-in-bangalore": "pf",
      "epf-registration-bangalore": "pfRegistration",
      "esic-consultants-bangalore": "esic",
    };

    const key = slugMap[slug];
    const data = key ? cityPages[key] : null;

    if (!data)
      return (
        <div className="p-10 text-center text-red-500">
          No data found for “{slug}” in {city}
        </div>
      );
    if (slug === "pf-consultants-in-bangalore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Bangalore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bangalore/pf-consultants-in-bangalore/",
                telephone: "+91-9945933333",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Church Street",
                  addressLocality: "Bangalore",
                  addressRegion: "Karnataka",
                  postalCode: "560001",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <PerformanceCard slug={slug} data={epfBangaloreCardData} />
          </FadeInWhenVisible>
          {/* <SliderCards /> */}
          {/* <FadeInWhenVisible>
          <div>
            <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">{data.title}</h2>
            <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
              {data.description}
            </p>
            <LatticeTabs cards={epfoCards} />
          </div>
        </FadeInWhenVisible> */}

          {/* <FadeInWhenVisible>
          <EPFServicesSection />
        </FadeInWhenVisible> */}
          <FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            PF Consultants in Bangalore — End-to-End EPF Compliance by Workforce
          </h2> */}

            <FadeInWhenVisible>
              <LargeCardSlider cardsData={largeCardsEpfoBangalore} />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <PastelCardSlider cardsData={pastelCardsEpfoBangalore} />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-bangalore") {
      return (
        <>
        <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Bangalore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bangalore/epf-registration-bangalore/",
                telephone: "+91-9945933333",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Church Street",
                  addressLocality: "Bangalore",
                  addressRegion: "Karnataka",
                  postalCode: "560001",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 12.9716,
                  longitude: 77.5946,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                priceRange: "₹₹",
                areaServed: [
                  { "@type": "City", name: "Bangalore" },
                  { "@type": "Place", name: "Peenya" },
                  { "@type": "Place", name: "Whitefield" },
                  { "@type": "Place", name: "Electronic City" },
                  { "@type": "Place", name: "Koramangala" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />
          <FadeInWhenVisible>
            {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <PerformanceCard
              slug={slug}
              data={epfBangaloreRegistrationCardData}
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <PastelCardSlider
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={epfManagementFaqBangaloreRegistration} />
          </FadeInWhenVisible>
        </>
      );
    }
  }

  // Invalid path fallback
  return (
    <div className="p-10 text-center text-red-500">
      Invalid route: /epf/{segments.join("/")}
    </div>
  );
}
