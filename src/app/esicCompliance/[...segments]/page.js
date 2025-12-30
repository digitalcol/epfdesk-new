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
  pastelCardsEsicBangalore,
  esicManagementFaqBangalore,
  pastelCardsEsicRegistrationBangalore,
  esicRegistrationFaqBangalore,
  sectionsESICConsultant,
  sectionsESICRegistration,
  sectionsESICompliance,
  pastelCardsEsicComplianceBangalore,
  esicComplianceFaqBangalore,
  sectionsESICConsultantMumbai,
  pastelCardsEsicMumbai,
  esicManagementFaqMumbai,
  sectionsESICConsultantDelhi,
  esicManagementFaqDelhi,
  sectionsESICConsultantChennai,
  esicManagementFaqChennai,
  sectionsESICConsultantHyderabad,
  esicManagementFaqHyderabad,
  sectionsESICConsultantPune,
  esicManagementFaqPune,
  sectionsESICConsultantKolkata,
  esicManagementFaqKolkata,
  sectionsESICConsultantAhmedabad,
  esicManagementFaqAhmedabad,
  sectionsESICConsultantSurat,
  esicManagementFaqSurat,
  sectionsESICConsultantGurgaon,
  esicManagementFaqGurgaon,
  sectionsESICConsultantNoida,
  esicManagementFaqNoida,
  sectionsESICConsultantJaipur,
  esicManagementFaqJaipur,
  sectionsESICConsultantLucknow,
  esicManagementFaqLucknow,
  sectionsESICConsultantIndore,
  esicManagementFaqIndore,
  sectionsESICConsultantCoimbatore,
  esicManagementFaqCoimbatore,
  sectionsESICConsultantVadodara,
  esicManagementFaqVadodara,
  sectionsESICConsultantVisakhapatnam,
  esicManagementFaqVisakhapatnam,
  sectionsESICConsultantNagpur,
  esicManagementFaqNagpur,
  sectionsESICConsultantBhopal,
  esicManagementFaqBhopal,
  sectionsESICConsultantKanpur,
  esicManagementFaqKanpur,
} from "@/utils/data";
import { PerformanceSection } from "@/components/PerformanceSection";

import CodeOfConduct from "@/components/CodeOfConduct";
import Script from "next/script";
import ThreeStepSection from "@/components/ThreeStepSection";

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
      // ESIC Conbsultants
      "esic-consultants-bangalore": "esicBangalore",
      "esic-consultants-mumbai": "esicMumbai",
      "esic-consultants-delhi": "esicDelhi",
      "esic-consultants-chennai": "esicChennai",
      "esic-consultants-hyderabad": "esicHyderabad",
      "esic-consultants-pune": "esicPune",
      "esic-consultants-kolkata": "esicKolkata",
      "esic-consultants-ahmedabad": "esicAhmedabad",
      "esic-consultants-surat": "esicSurat",
      "esic-consultants-gurgaon": "esicGurgaon",
      "esic-consultants-noida": "esicNoida",
      "esic-consultants-jaipur": "esicJaipur",
      "esic-consultants-lucknow": "esicLucknow",
      "esic-consultants-indore": "esicIndore",
      "esic-consultants-coimbatore": "esicCoimbatore",
      "esic-consultants-vadodara": "esicVadodara",
      "esic-consultants-visakhapatnam": "esicVisakhapatnam",
      "esic-consultants-nagpur": "esicNagpur",
      "esic-consultants-bhopal": "esicBhopal",
      "esic-consultants-kanpur": "esicKanpur",
      // ESIC Compliance
      "esic-compliance-bangalore": "esicComplianceBangalore",
      "esic-compliance-hyderabad": "esicComplianceHyderabad",
      "esic-compliance-mumbai": "esicComplianceMumbai",
      "esic-compliance-chennai": "esicComplianceChennai",
      "esic-compliance-visakhapatnam": "esicComplianceVisakhapatnam",
      "esic-compliance-delhi": "esicComplianceDelhi",
      "esic-compliance-pune": "esicCompliancePune",
      "esic-compliance-kolkata": "esicComplianceKolkata",
      "esic-compliance-ahmedabad": "esicComplianceAhmedabad",
      "esic-compliance-surat": "esicComplianceSurat",
      "esic-compliance-gurgaon": "esicComplianceGurgaon",
      "esic-compliance-noida": "esicComplianceNoida",
      "esic-compliance-jaipur": "esicComplianceJaipur",
      "esic-compliance-lucknow": "esicComplianceLucknow",
      "esic-compliance-indore": "esicComplianceIndore",
      "esic-compliance-coimbatore": "esicComplianceCoimbatore",
      "esic-compliance-vadodara": "esicComplianceVadodara",
      "esic-compliance-nagpur": "esicComplianceNagpur",
      "esic-compliance-bhopal": "esicComplianceBhopal",
      "esic-compliance-kanpur": "esicComplianceKanpur",

      // ESIC Registration
      "esic-registration-bangalore": "esicRegistration",
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
            <PerformanceSection data={data} image={"/images/EPF-bangalore.png"}/>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultant} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEsicBangalore} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-mumbai") {
      return (
        <>
          <Script
            id="schema-pf-esic-mumbai"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Mumbai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/mumbai/esic-consultants-mumbai/",
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
                  { "@type": "City", name: "Mumbai" },
                  { "@type": "Place", name: "Andheri" },
                  { "@type": "Place", name: "Bandra" },
                  { "@type": "Place", name: "Navi Mumbai" },
                  { "@type": "Place", name: "Thane" },
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
            <PerformanceSection data={data} image={'/images/mumbai.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantMumbai} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection cardsData={pastelCardsEsicMumbai} />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqMumbai} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-delhi") {
      return (
        <>
          <Script
            id="schema-pf-esic-delhi"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Delhi",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/delhi/esic-consultants-delhi/",
                telephone: "+91-9945933333",

                // ❗ As requested, address remains EXACTLY the same
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
                  { "@type": "City", name: "Delhi" },
                  { "@type": "Place", name: "Dwarka" },
                  { "@type": "Place", name: "Saket" },
                  { "@type": "Place", name: "Karol Bagh" },
                  { "@type": "Place", name: "Connaught Place" },
                ],

                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          {/* Components remain exactly as they are  */}
          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/abstract.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantDelhi} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqDelhi} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-chennai") {
      return (
        <>
          <Script
            id="schema-esic-chennai"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Chennai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/chennai/esic-consultants-chennai/",
                telephone: "+91-9945933333",

                // ADDRESS MUST REMAIN SAME – AS PER YOUR INSTRUCTION
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
                  { "@type": "City", name: "Chennai" },
                  { "@type": "Place", name: "T Nagar" },
                  { "@type": "Place", name: "Velachery" },
                  { "@type": "Place", name: "Ambattur" },
                  { "@type": "Place", name: "Anna Nagar" },
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
            <PerformanceSection data={data} image={'/images/chennai.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantChennai} />
          </FadeInWhenVisible>

         

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqChennai} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-hyderabad") {
      return (
        <>
          <Script
            id="schema-esic-hyd"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Hyderabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/hyderabad/esic-consultants-hyderabad/",
                telephone: "+91-9945933333",

                // ⭐ ADDRESS — unchanged
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
                  { "@type": "City", name: "Hyderabad" },
                  { "@type": "Place", name: "Hitech City" },
                  { "@type": "Place", name: "Gachibowli" },
                  { "@type": "Place", name: "Kukatpally" },
                  { "@type": "Place", name: "Jubilee Hills" },
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
            <PerformanceSection data={data} image={'/images/hyderabad.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantHyderabad} />
          </FadeInWhenVisible>

         

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqHyderabad} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-pune") {
      return (
        <>
          <Script
            id="schema-esic-pune"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Pune",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/pune/esic-consultants-pune/",
                telephone: "+91-9945933333",

                // ⭐ KEEP ADDRESS SAME AS BANGALORE JUST LIKE YOU ASKED
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
                  latitude: 18.5204,
                  longitude: 73.8567,
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
                  { "@type": "City", name: "Pune" },
                  { "@type": "Place", name: "Hinjawadi" },
                  { "@type": "Place", name: "Baner" },
                  { "@type": "Place", name: "Kothrud" },
                  { "@type": "Place", name: "Viman Nagar" },
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
            <PerformanceSection data={data} image={'/images/abstract.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantPune} />
          </FadeInWhenVisible>

         

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqPune} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-kolkata") {
      return (
        <>
          <Script
            id="schema-esic-kolkata"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Kolkata",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/kolkata/esic-consultants-kolkata/",
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
                  { "@type": "City", name: "Kolkata" },
                  { "@type": "Place", name: "Salt Lake" },
                  { "@type": "Place", name: "New Town" },
                  { "@type": "Place", name: "Howrah" },
                  { "@type": "Place", name: "Park Street" },
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
            <PerformanceSection data={data} image={'/images/kolkata.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantKolkata} />
          </FadeInWhenVisible>

       

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqKolkata} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-ahmedabad") {
      return (
        <>
          <Script
            id="schema-esic-ahmedabad"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Ahmedabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/ahmedabad/esic-consultants-ahmedabad/",
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
                  latitude: 23.0225,
                  longitude: 72.5714,
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
                  { "@type": "City", name: "Ahmedabad" },
                  { "@type": "Place", name: "SG Highway" },
                  { "@type": "Place", name: "Navrangpura" },
                  { "@type": "Place", name: "Maninagar" },
                  { "@type": "Place", name: "Bopal" },
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
            <PerformanceSection data={data} image={'/images/abstract.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantAhmedabad} />
          </FadeInWhenVisible>

       

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqAhmedabad} />

          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-surat") {
      return (
        <>
          <Script
            id="schema-esic-surat"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Surat",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/surat/esic-consultants-surat/",
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
                  latitude: 21.1702,
                  longitude: 72.8311,
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
                  { "@type": "City", name: "Surat" },
                  { "@type": "Place", name: "Adajan" },
                  { "@type": "Place", name: "Vesu" },
                  { "@type": "Place", name: "Katargam" },
                  { "@type": "Place", name: "Varachha" },
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
            <PerformanceSection data={data} image={'/images/abstract.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantSurat} />
          </FadeInWhenVisible>

     

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqSurat} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-gurgaon") {
      return (
        <>
          <Script
            id="schema-esic-gurgaon"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Gurgaon",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/gurgaon/esic-consultants-gurgaon/",
                telephone: "+91-9945933333",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Church Street",
                  addressLocality: "Gurgaon",
                  addressRegion: "Haryana",
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
                  { "@type": "City", name: "Gurgaon" },
                  { "@type": "Place", name: "Cyber City" },
                  { "@type": "Place", name: "Udyog Vihar" },
                  { "@type": "Place", name: "MG Road" },
                  { "@type": "Place", name: "Sohna Road" },
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
            <PerformanceSection data={data} image={'/images/gurgaon.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantGurgaon} />
          </FadeInWhenVisible>

         

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqGurgaon} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-noida") {
      return (
        <>
          <Script
            id="schema-esic-noida"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Noida",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/noida/esic-consultants-noida/",
                telephone: "+91-9945933333",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Church Street",
                  addressLocality: "Noida",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "560001",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 28.5355,
                  longitude: 77.391,
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
                  { "@type": "City", name: "Noida" },
                  { "@type": "Place", name: "Sector 62" },
                  { "@type": "Place", name: "Sector 18" },
                  { "@type": "Place", name: "Greater Noida" },
                  { "@type": "Place", name: "Noida Extension" },
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
            <PerformanceSection data={data} image={'/images/abstract.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantNoida} />
          </FadeInWhenVisible>

         

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqNoida} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-jaipur") {
      return (
        <>
          <Script
            id="schema-esic-jaipur"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Jaipur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/jaipur/esic-consultants-jaipur/",
                telephone: "+91-9945933333",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Church Street",
                  addressLocality: "Jaipur",
                  addressRegion: "Rajasthan",
                  postalCode: "560001",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 26.9124,
                  longitude: 75.7873,
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
                  { "@type": "City", name: "Jaipur" },
                  { "@type": "Place", name: "Vaishali Nagar" },
                  { "@type": "Place", name: "Mansarovar" },
                  { "@type": "Place", name: "Tonk Road" },
                  { "@type": "Place", name: "Malviya Nagar" },
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
            <PerformanceSection data={data} image={'/images/jaipur.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantJaipur} />
          </FadeInWhenVisible>

         
          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqJaipur} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-lucknow") {
      return (
        <>
          <Script
            id="schema-esic-lucknow"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Lucknow",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/lucknow/esic-consultants-lucknow/",
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
                  { "@type": "City", name: "Lucknow" },
                  { "@type": "Place", name: "Gomti Nagar" },
                  { "@type": "Place", name: "Hazratganj" },
                  { "@type": "Place", name: "Indira Nagar" },
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
            <PerformanceSection data={data} image={'/images/lucknow.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantLucknow} />
          </FadeInWhenVisible>

        

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqLucknow} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-indore") {
      return (
        <>
          <Script
            id="schema-esic-indore"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Indore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/indore/esic-consultants-indore/",
                telephone: "+91-9945933333",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Church Street",
                  addressLocality: "Indore",
                  addressRegion: "Madhya Pradesh",
                  postalCode: "560001",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 22.7196,
                  longitude: 75.8577,
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
                  { "@type": "City", name: "Indore" },
                  { "@type": "Place", name: "Vijay Nagar" },
                  { "@type": "Place", name: "MR10" },
                  { "@type": "Place", name: "Palasia" },
                  { "@type": "Place", name: "Rau" },
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
            <PerformanceSection data={data} image={'/images/abstract.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantIndore} />
          </FadeInWhenVisible>

          

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqIndore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-coimbatore") {
      return (
        <>
          <Script
            id="schema-esic-coimbatore"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Coimbatore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/coimbatore/esic-consultants-coimbatore/",
                telephone: "+91-9945933333",

                // SAME ADDRESS — you asked to keep this same
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Church Street",
                  addressLocality: "Coimbatore",
                  addressRegion: "Tamil Nadu",
                  postalCode: "560001",
                  addressCountry: "IN",
                },

                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 11.0168,
                  longitude: 76.9558,
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
                  { "@type": "City", name: "Coimbatore" },
                  { "@type": "Place", name: "Gandhipuram" },
                  { "@type": "Place", name: "Peelamedu" },
                  { "@type": "Place", name: "RS Puram" },
                  { "@type": "Place", name: "Singanallur" },
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
            <PerformanceSection data={data} image={'/images/coimbatore.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantCoimbatore} />
          </FadeInWhenVisible>

         

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqCoimbatore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-vadodara") {
      return (
        <>
          {/* --- SCHEMA.ORG FOR VADODARA --- */}
          <Script
            id="schema-esic-vadodara"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Vadodara",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/vadodara/esic-consultants-vadodara/",
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
                  latitude: 22.3072,
                  longitude: 73.1812,
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
                  { "@type": "City", name: "Vadodara" },
                  { "@type": "Place", name: "Akota" },
                  { "@type": "Place", name: "Alkapuri" },
                  { "@type": "Place", name: "Gotri" },
                  { "@type": "Place", name: "Manjalpur" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          {/* DO NOT CHANGE VARIABLES — EXACTLY AS YOU WANT */}
          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/vadodara.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantVadodara} />
          </FadeInWhenVisible>

          

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqVadodara} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-visakhapatnam") {
      return (
        <>
          <Script
            id="schema-esic-visakhapatnam"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Visakhapatnam",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/visakhapatnam/esic-consultants-visakhapatnam/",
                telephone: "+91-9945933333",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Church Street",
                  addressLocality: "Visakhapatnam",
                  addressRegion: "Andhra Pradesh",
                  postalCode: "530001",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 17.6868,
                  longitude: 83.2185,
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
                areaServed: [{ "@type": "City", name: "Visakhapatnam" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/visakhapatnam.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantVisakhapatnam} />
          </FadeInWhenVisible>

          

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqVisakhapatnam} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-nagpur") {
      return (
        <>
          <Script
            id="schema-esic-nagpur"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Nagpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/nagpur/esic-consultants-nagpur/",
                telephone: "+91-9945933333",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Church Street",
                  addressLocality: "Nagpur",
                  addressRegion: "Maharashtra",
                  postalCode: "440001",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 21.1458,
                  longitude: 79.0882,
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
                  { "@type": "City", name: "Nagpur" },
                  { "@type": "Place", name: "Sitabuldi" },
                  { "@type": "Place", name: "Hingna" },
                  { "@type": "Place", name: "Mahal" },
                  { "@type": "Place", name: "Dhantoli" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          {/* DO NOT CHANGE ANY VARIABLES — EXACT SAME FOR ALL CITIES */}
          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/nagpur.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantNagpur} />
          </FadeInWhenVisible>

          

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqNagpur} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-bhopal") {
      return (
        <>
          <Script
            id="schema-esic-bhopal"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Bhopal",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/bhopal/esic-consultants-bhopal/",
                telephone: "+91-9945933333",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Church Street",
                  addressLocality: "Bhopal",
                  addressRegion: "Madhya Pradesh",
                  postalCode: "560001",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 23.2599,
                  longitude: 77.4126,
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
                  { "@type": "City", name: "Bhopal" },
                  { "@type": "Place", name: "MP Nagar" },
                  { "@type": "Place", name: "Arera Colony" },
                  { "@type": "Place", name: "Kolar Road" },
                  { "@type": "Place", name: "Bairagarh" },
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
            <PerformanceSection data={data} image={'/images/bhopal.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantBhopal} />
          </FadeInWhenVisible>

       

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqBhopal} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-consultants-kanpur") {
      return (
        <>
          <Script
            id="schema-esic-kanpur"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Consultant Kanpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/kanpur/esic-consultants-kanpur/",
                telephone: "+91-9945933333",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Church Street",
                  addressLocality: "Kanpur",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "208001",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 26.4499,
                  longitude: 80.3319,
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
                  { "@type": "City", name: "Kanpur" },
                  { "@type": "Place", name: "Kidwai Nagar" },
                  { "@type": "Place", name: "Shastri Nagar" },
                  { "@type": "Place", name: "Swaroop Nagar" },
                  { "@type": "Place", name: "Kakadeo" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          {/* DO NOT CHANGE COMPONENTS OR VARIABLES */}
          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/kanpur.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICConsultantKanpur} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicManagementFaqKanpur} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-bangalore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Bangalore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/bangalore/esic-compliance-bangalore/",
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
            <PerformanceSection data={data} image={'/images/EPF-bangalore.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-mumbai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Mumbai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/mumbai/esic-compliance-mumbai/",
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
                areaServed: [{ "@type": "City", name: "Mumbai" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/mumbai.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-delhi") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Delhi",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/delhi/esic-compliance-delhi/",
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
                areaServed: [{ "@type": "City", name: "Delhi" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/abstract.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-chennai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Chennai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/chennai/esic-compliance-chennai/",
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
                areaServed: [{ "@type": "City", name: "Chennai" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/chennai.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-hyderabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Hyderabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/hyderabad/esic-compliance-hyderabad/",
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
                areaServed: [{ "@type": "City", name: "Hyderabad" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/hyderabad.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-pune") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Pune",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/pune/esic-compliance-pune/",
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
                areaServed: [{ "@type": "City", name: "Pune" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/abstract.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-kolkata") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Kolkata",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/kolkata/esic-compliance-kolkata/",
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
                areaServed: [{ "@type": "City", name: "Kolkata" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/kolkata.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-ahmedabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Ahmedabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/ahmedabad/esic-compliance-ahmedabad/",
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
                areaServed: [{ "@type": "City", name: "Ahmedabad" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/abstract.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-surat") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Surat",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/surat/esic-compliance-surat/",
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
                areaServed: [{ "@type": "City", name: "Surat" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/abstract.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-gurgaon") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Gurgaon",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/gurgaon/esic-compliance-gurgaon/",
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
                areaServed: [{ "@type": "City", name: "Gurgaon" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/gurgaon.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-noida") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Noida",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/noida/esic-compliance-noida/",
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
                areaServed: [{ "@type": "City", name: "Noida" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/abstract.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-jaipur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Jaipur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/jaipur/esic-compliance-jaipur/",
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
                areaServed: [{ "@type": "City", name: "Jaipur" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/jaipur.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-lucknow") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Lucknow",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/lucknow/esic-compliance-lucknow/",
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
                areaServed: [{ "@type": "City", name: "Lucknow" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/lucknow.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-indore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Indore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/indore/esic-compliance-indore/",
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
                areaServed: [{ "@type": "City", name: "Indore" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/abstract.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-coimbatore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Coimbatore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/coimbatore/esic-compliance-coimbatore/",
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
                areaServed: [{ "@type": "City", name: "Coimbatore" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/coimbatore.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-vadodara") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Vadodara",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/vadodara/esic-compliance-vadodara/",
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
                areaServed: [{ "@type": "City", name: "Vadodara" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/vadodara.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-visakhapatnam") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Visakhapatnam",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/visakhapatnam/esic-compliance-visakhapatnam/",
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
                areaServed: [{ "@type": "City", name: "Visakhapatnam" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/visakhapatnam.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-nagpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Nagpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/nagpur/esic-compliance-nagpur/",
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
                areaServed: [{ "@type": "City", name: "Nagpur" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/nagpur.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-bhopal") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Bhopal",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/bhopal/esic-compliance-bhopal/",
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
                areaServed: [{ "@type": "City", name: "Bhopal" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/bhopal.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "esic-compliance-kanpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - ESIC Compliance Service in Kanpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/esicCompliance/kanpur/esic-compliance-kanpur/",
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
                areaServed: [{ "@type": "City", name: "Kanpur" }],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "47",
                },
              }),
            }}
          />

          <FadeInWhenVisible>
            <PerformanceSection data={data} image={'/images/kanpur.png'}/>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsESICompliance} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEsicComplianceBangalore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={esicComplianceFaqBangalore} />
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
            <CodeOfConduct sections={sectionsESICRegistration} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEsicRegistrationBangalore}
              />
            </FadeInWhenVisible>
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
