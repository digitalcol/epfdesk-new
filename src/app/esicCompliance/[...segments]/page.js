import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import HeroSection from "@/components/linksHeroSection";
import LatticeTabs from "@/components/latticeTabs";
import EPFServicesSection from "@/components/epfServicesSection";
import FaqAccordion from "@/components/faqAccordian";
import {
  heroSlides,
  epfoCards,
  epfManagementFaq,
  cityData,
  standalonePagesEsic,
  esicBangaloreCardData,
  largeCardsEsicBangalore,
  pastelCardsEsicBangalore,
  esicManagementFaqBangalore,
  esicBangaloreRegistrationCardData,
  largeCardsEsicRegistrationBangalore,
  pastelCardsEsicRegistrationBangalore,
  esicRegistrationFaqBangalore,
} from "@/utils/data";
import { PerformanceSection } from "@/components/PerformanceSection";
import PerformanceCard from "@/components/PerformanceCard";
import LargeCardSlider from "@/components/largeCards";
import PastelCardSlider from "@/components/pastelCardSlider";
import Script from "next/script";

export default async function EPFPage({ params }) {
  const { segments = [] } = await params;

  // CASE 1: /epf
  if (segments.length === 0) {
    return (
      <>
        <FadeInWhenVisible>
          <HeroSection slide={heroSlides[4]} />l
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
    const data = standalonePagesEsic[slug];

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
    // const data = cityData[city]?.esic;

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
      // "pf-consultants-in-bangalore": "pf",
      "esic-registration-bangalore": "esicRegistration",
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
    if (slug === "esic-consultants-bangalore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Bangalore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bangalore/esic-consultants-bangalore/",
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
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <PerformanceCard slug={slug} data={esicBangaloreCardData} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <LargeCardSlider cardsData={largeCardsEsicBangalore} />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <PastelCardSlider cardsData={pastelCardsEsicBangalore} />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
                 Workforce: End-to-End EPF Management for Modern Businesses
               </h2>
               <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-registration-bangalore") {
      return (
        <>
        <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Registration Bangalore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bangalore/esic-registration-bangalore/",
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
            <PerformanceSection data={data} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <PerformanceCard
              slug={slug}
              data={esicBangaloreRegistrationCardData}
            />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <LargeCardSlider
                cardsData={largeCardsEsicRegistrationBangalore}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <PastelCardSlider
                cardsData={pastelCardsEsicRegistrationBangalore}
              />
            </FadeInWhenVisible>
            {/* <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
                 Workforce: End-to-End EPF Management for Modern Businesses
               </h2>
               <StickyScrollSections items={epfManagementBangalore} /> */}
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicRegistrationFaqBangalore} />
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
