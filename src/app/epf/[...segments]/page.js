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
  standalonePages,
  epfManagementFaqBangalore,
  pastelCardsEpfoBangalore,
  pastelCardsEpfoBangaloreRegistration,
  epfManagementFaqBangaloreRegistration,
  sectionsPFConsultants,
  sectionsPFRegsitration,
  sectionsPFMonthlyFiling,
  pastelCardsEpfoBangaloreMonthlyFiling,
  epfManagementFaqBangaloreMonthlyFiling,
  sectionsPFCompliance,
  pastelCardsEpfoBangalorePFCompliance,
  epfManagementFaqBangalorePFCompliance,
  sectionsPFConsultantsMumbai,
  epfManagementFaqMumbai,
  sectionsPFConsultantsDelhi,
  epfManagementFaqDelhi,
  sectionsPFConsultantsChennai,
  epfManagementFaqChennai,
  sectionsPFConsultantsHyderabad,
  epfManagementFaqHyderabad,
  sectionsPFConsultantsPune,
  epfManagementFaqPune,
  sectionsPFConsultantsKolkata,
  sectionsPFConsultantsAhmedabad,
  sectionsPFConsultantsSurat,
  sectionsPFConsultantsGurgaon,
  sectionsPFConsultantsNoida,
  sectionsPFConsultantsJaipur,
  sectionsPFConsultantsLucknow,
  sectionsPFConsultantsIndore,
  sectionsPFConsultantsCoimbatore,
  sectionsPFConsultantsVadodara,
  sectionsPFConsultantsVisakhapatnam,
  sectionsPFConsultantsNagpur,
  sectionsPFConsultantsBhopal,
  sectionsPFConsultantsKanpur,
  sectionsPFComplianceMumbai,
  sectionsPFComplianceDelhi,
  sectionsPFComplianceChennai,
  sectionsPFComplianceHyderabad,
  sectionsPFCompliancePune,
  sectionsPFComplianceKolkata,
  sectionsPFComplianceAhmedabad,
  sectionsPFComplianceSurat,
  sectionsPFComplianceGurgaon,
  sectionsPFComplianceNoida,
  sectionsPFComplianceJaipur,
  sectionsPFComplianceLucknow,
  sectionsPFComplianceIndore,
  sectionsPFComplianceCoimbatore,
  sectionsPFComplianceVadodara,
  sectionsPFComplianceVisakhapatnam,
  sectionsPFComplianceNagpur,
  sectionsPFComplianceBhopal,
  sectionsPFComplianceKanpur,
} from "@/utils/data";
import { PerformanceSection } from "@/components/PerformanceSection";
import Script from "next/script";
import ThreeStepSection from "@/components/ThreeStepSection";
import CodeOfConduct from "@/components/CodeOfConduct";
import { cityAddress } from "@/utils/data";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const segments = resolvedParams.segments || [];

  const slug = segments[segments.length - 1] || "";
  const city = slug.split("-").pop();

  if (!city) {
    return {
      title: "PF Consultants | Workforce",
      description:
        "Expert PF & ESIC compliance services across India. Get stress-free EPF registration, filing, and inspection support.",
    };
  }

  const cityTitle = city.charAt(0).toUpperCase() + city.slice(1);

  return {
    title: `${cityTitle} | EPF Registration, Returns & Inspections | Workforce`,
    description: `Leading PF consultants in ${cityTitle} for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
    alternates: {
      canonical: `https://epfdesk.com/epf/${city}/pf-compliance-in-${city}`,
    },
    openGraph: {
      title: `PF Consultant in ${cityTitle} | EPF Registration, Returns & Inspections | Workforce`,
      url: `https://epfdesk.com/epf/${city}/pf-compliance-in-${city}`,
    },
  };
}

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
    const [city, slug] = segments;
    const cityPages = cityData[city];

    const titleCase = (s = "") =>
      s ? s.charAt(0).toUpperCase() + s.slice(1) : "";

    const addressFaq = (city, address) => ({
      question: `What is the office address for ${titleCase(city)}?`,
      answer: address || "Address not available",
    });

    const citySplit = slug.split("-").pop();
    const address = cityAddress[citySplit];

    const generalFaqWithAddress = [
      ...epfManagementFaqBangalore,
      addressFaq(citySplit, address),
    ];

    const registrationFaqWithAddress = [
      ...epfManagementFaqBangaloreRegistration,
      addressFaq(citySplit, address),
    ];

    const monthlyFilingFaqWithAddress = [
      ...epfManagementFaqBangaloreMonthlyFiling,
      addressFaq(citySplit, address),
    ];

    const complianceFaqWithAddress = [
      ...epfManagementFaqBangalorePFCompliance,
      addressFaq(citySplit, address),
    ];

    if (!cityPages)
      return (
        <div className="p-10 text-center text-red-500">
          No data found for city “{city}”
        </div>
      );

    const slugMap = {
      // PF Consultants
      "pf-consultants-in-bangalore": "pfBangalore",
      "esic-consultants-bangalore": "esicBangalore",
      "pf-consultants-in-hyderabad": "pfHyderabad",
      "pf-consultants-in-mumbai": "pfMumbai",
      "pf-consultants-in-chennai": "pfChennai",
      "pf-consultants-in-visakhapatnam": "pfVisakhapatnam",
      "pf-consultants-in-delhi": "pfDelhi",
      "pf-consultants-in-pune": "pfPune",
      "pf-consultants-in-kolkata": "pfKolkata",
      "pf-consultants-in-ahmedabad": "pfAhmedabad",
      "pf-consultants-in-surat": "pfSurat",
      "pf-consultants-in-gurgaon": "pfGurgaon",
      "pf-consultants-in-noida": "pfNoida",
      "pf-consultants-in-jaipur": "pfJaipur",
      "pf-consultants-in-lucknow": "pfLucknow",
      "pf-consultants-in-indore": "pfIndore",
      "pf-consultants-in-coimbatore": "pfCoimbatore",
      "pf-consultants-in-vadodara": "pfVadodara",
      "pf-consultants-in-nagpur": "pfNagpur",
      "pf-consultants-in-bhopal": "pfBhopal",
      "pf-consultants-in-kanpur": "pfKanpur",
      // EPF Registration
      "epf-registration-bangalore": "pfRegistrationBangalore",
      "epf-registration-hyderabad": "pfRegistrationHyderabad",
      "epf-registration-goa": "pfRegistrationGoa",
      "epf-registration-mumbai": "pfRegistrationMumbai",
      "epf-registration-chennai": "pfRegistrationChennai",
      "epf-registration-visakhapatnam": "pfRegistrationVisakhapatnam",
      "epf-registration-delhi": "pfRegistrationDelhi",
      "epf-registration-pune": "pfRegistrationPune",
      "epf-registration-kolkata": "pfRegistrationKolkata",
      "epf-registration-ahmedabad": "pfRegistrationAhmedabad",
      "epf-registration-surat": "pfRegistrationSurat",
      "epf-registration-gurgaon": "pfRegistrationGurgaon",
      "epf-registration-noida": "pfRegistrationNoida",
      "epf-registration-jaipur": "pfRegistrationJaipur",
      "epf-registration-lucknow": "pfRegistrationLucknow",
      "epf-registration-indore": "pfRegistrationIndore",
      "epf-registration-coimbatore": "pfRegistrationCoimbatore",
      "epf-registration-vadodara": "pfRegistrationVadodara",
      "epf-registration-nagpur": "pfRegistrationNagpur",
      "epf-registration-bhopal": "pfRegistrationBhopal",
      "epf-registration-kanpur": "pfRegistrationKanpur",
      // Monthly Filing
      "pf-monthly-filing-in-bangalore": "pfMonthlyFilingBangalore",
      "pf-monthly-filing-in-hyderabad": "pfMonthlyFilingHyderabad",
      "pf-monthly-filing-in-mumbai": "pfMonthlyFilingMumbai",
      "pf-monthly-filing-in-chennai": "pfMonthlyFilingChennai",
      "pf-monthly-filing-in-visakhapatnam": "pfMonthlyFilingVisakhapatnam",
      "pf-monthly-filing-in-delhi": "pfMonthlyFilingDelhi",
      "pf-monthly-filing-in-pune": "pfMonthlyFilingPune",
      "pf-monthly-filing-in-kolkata": "pfMonthlyFilingKolkata",
      "pf-monthly-filing-in-ahmedabad": "pfMonthlyFilingAhmedabad",
      "pf-monthly-filing-in-surat": "pfMonthlyFilingSurat",
      "pf-monthly-filing-in-gurgaon": "pfMonthlyFilingGurgaon",
      "pf-monthly-filing-in-noida": "pfMonthlyFilingNoida",
      "pf-monthly-filing-in-jaipur": "pfMonthlyFilingJaipur",
      "pf-monthly-filing-in-lucknow": "pfMonthlyFilingLucknow",
      "pf-monthly-filing-in-indore": "pfMonthlyFilingIndore",
      "pf-monthly-filing-in-coimbatore": "pfMonthlyFilingCoimbatore",
      "pf-monthly-filing-in-vadodara": "pfMonthlyFilingVadodara",
      "pf-monthly-filing-in-nagpur": "pfMonthlyFilingNagpur",
      "pf-monthly-filing-in-bhopal": "pfMonthlyFilingBhopal",
      "pf-monthly-filing-in-kanpur": "pfMonthlyFilingKanpur",

      // PF Compliance
      "pf-compliance-in-bangalore": "pfComplianceBangalore",
      "pf-compliance-in-hyderabad": "pfComplianceHyderabad",
      "pf-compliance-in-mumbai": "pfComplianceMumbai",
      "pf-compliance-in-chennai": "pfComplianceChennai",
      "pf-compliance-in-visakhapatnam": "pfComplianceVisakhapatnam",
      "pf-compliance-in-delhi": "pfComplianceDelhi",
      "pf-compliance-in-pune": "pfCompliancePune",
      "pf-compliance-in-kolkata": "pfComplianceKolkata",
      "pf-compliance-in-ahmedabad": "pfComplianceAhmedabad",
      "pf-compliance-in-surat": "pfComplianceSurat",
      "pf-compliance-in-gurgaon": "pfComplianceGurgaon",
      "pf-compliance-in-noida": "pfComplianceNoida",
      "pf-compliance-in-jaipur": "pfComplianceJaipur",
      "pf-compliance-in-lucknow": "pfComplianceLucknow",
      "pf-compliance-in-indore": "pfComplianceIndore",
      "pf-compliance-in-coimbatore": "pfComplianceCoimbatore",
      "pf-compliance-in-vadodara": "pfComplianceVadodara",
      "pf-compliance-in-nagpur": "pfComplianceNagpur",
      "pf-compliance-in-bhopal": "pfComplianceBhopal",
      "pf-compliance-in-kanpur": "pfComplianceKanpur",
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
            <PerformanceSection
              data={data}
              image={"/images/EPF-bangalore.png"}
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultants} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ThreeStepSection cardsData={pastelCardsEpfoBangalore} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-hyderabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Hyderabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/hyderabad/pf-consultants-in-hyderabad/",
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
            <PerformanceSection data={data} image={"/images/hyderabad.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsHyderabad} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-mumbai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Mumbai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/mumbai/pf-consultants-in-mumbai/",
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
            <PerformanceSection data={data} image={"/images/mumbai.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsMumbai} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-chennai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Chennai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/chennai/pf-consultants-in-chennai/",
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
            <PerformanceSection data={data} image={"/images/chennai.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsChennai} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-visakhapatnam") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Visakhapatnam",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/visakhapatnam/pf-consultants-in-visakhapatnam/",
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
            <PerformanceSection
              data={data}
              image={"/images/visakhapatnam.png"}
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsVisakhapatnam} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-delhi") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants delhi",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/delhi/pf-consultants-in-delhi/",
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
            <PerformanceSection data={data} image={"/images/abstract.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsDelhi} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-pune") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Pune",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/pune/pf-consultants-in-pune/",
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
            <PerformanceSection data={data} image={"/images/abstract.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsPune} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-kolkata") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Kolkata",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/kolkata/pf-consultants-in-kolkata/",
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
            <PerformanceSection data={data} image={"/images/kolkata.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsKolkata} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-ahmedabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Ahmedabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/ahmedabad/pf-consultants-in-ahmedabad/",
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
            <PerformanceSection data={data} image={"/images/abstract.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsAhmedabad} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-surat") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Surat",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/surat/pf-consultants-in-surat/",
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
            <PerformanceSection data={data} image={"/images/abstract.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsSurat} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-gurgaon") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Gurgaon",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/gurgaon/pf-consultants-in-gurgaon/",
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
            <PerformanceSection data={data} image={"/images/gurgaon.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsGurgaon} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-noida") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Noida",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/noida/pf-consultants-in-noida/",
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
            <PerformanceSection data={data} image={"/images/abstract.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsNoida} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-jaipur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Jaipur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/jaipur/pf-consultants-in-jaipur/",
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
            <PerformanceSection data={data} image={"/images/jaipur.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsJaipur} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-lucknow") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Lucknow",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/lucknow/pf-consultants-in-lucknow/",
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
            <PerformanceSection data={data} image={"/images/lucknow.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsLucknow} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-indore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Indore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/indore/pf-consultants-in-indore/",
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
            <PerformanceSection data={data} image={"/images/abstract.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsIndore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-coimbatore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Coimbatore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/coimbatore/pf-consultants-in-coimbatore/",
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
            <PerformanceSection data={data} image={"/images/coimbatore.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsCoimbatore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-vadodara") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Vadodara",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/vadodara/pf-consultants-in-vadodara/",
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
            <PerformanceSection data={data} image={"/images/vadodara.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsVadodara} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-nagpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Nagpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/nagpur/pf-consultants-in-nagpur/",
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
            <PerformanceSection data={data} image={"/images/nagpur.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsNagpur} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-bhopal") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Bhopal",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bhopal/pf-consultants-in-bhopal/",
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
            <PerformanceSection data={data} image={"/images/bhopal.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsBhopal} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-consultants-in-kanpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Consultants Kanpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/kanpur/pf-consultants-in-kanpur/",
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
            <PerformanceSection data={data} image={"/images/kanpur.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFConsultantsKanpur} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={generalFaqWithAddress} />
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
            <PerformanceSection
              data={data}
              image={"/images/EPF-bangalore.png"}
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ThreeStepSection
              cardsData={pastelCardsEpfoBangaloreRegistration}
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-hyderabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Hyderabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/hyderabad/epf-registration-hyderabad/",
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
            <PerformanceSection data={data} image={"/images/mumbai.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-mumbai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Mumbai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/mumbai/epf-registration-mumbai/",
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
            <PerformanceSection data={data} image={"/images/hyderabad.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-delhi") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Delhi",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/delhi/epf-registration-delhi/",
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
            <PerformanceSection data={data} image={"/images/lucknow.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-chennai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Chennai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/chennai/epf-registration-chennai/",
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
            <PerformanceSection data={data} image={"/images/chennai.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-pune") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Pune",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/pune/epf-registration-pune/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-kolkata") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Kolkata",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/kolkata/epf-registration-kolkata/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-ahmedabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Ahmedabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/ahmedabad/epf-registration-ahmedabad/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-surat") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Surat",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/surat/epf-registration-surat/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-gurgaon") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration gurgaon",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/gurgaon/epf-registration-gurgaon/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-noida") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Noida",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/noida/epf-registration-noida/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-jaipur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Jaipur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/jaipur/epf-registration-jaipur/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-lucknow") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Lucknow",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/lucknow/epf-registration-lucknow/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-indore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Indore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/indore/epf-registration-indore/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-coimbatore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Coimbatore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/coimbatore/epf-registration-coimbatore/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-vadodara") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Vadodara",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/vadodara/epf-registration-vadodara/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-visakhapatnam") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Visakhapatnam",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/visakhapatnam/epf-registration-visakhapatnam/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-nagpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Nagpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/nagpur/epf-registration-nagpur/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-bhopal") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Bhopal",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bhopal/epf-registration-bhopal/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "epf-registration-kanpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Registration Kanpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/kanpur/epf-registration-kanpur/",
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
            <CodeOfConduct sections={sectionsPFRegsitration} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreRegistration}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={registrationFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-bangalore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Bangalore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bangalore/pf-monthly-filing-in-bangalore/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-mumbai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Mumbai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/mumbai/pf-monthly-filing-in-mumbai/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-delhi") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Delhi",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/delhi/pf-monthly-filing-in-delhi/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-chennai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Chennai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/chennai/pf-monthly-filing-in-chennai/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-hyderabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Hyderabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/hyderabad/pf-monthly-filing-in-hyderabad/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-pune") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Pune",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/pune/pf-monthly-filing-in-pune/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-kolkata") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Kolkata",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/kolkata/pf-monthly-filing-in-kolkata/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-ahmedabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Ahmedabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/ahmedabad/pf-monthly-filing-in-ahmedabad/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-surat") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Surat",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/surat/pf-monthly-filing-in-surat/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-gurgaon") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Gurgaon",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/gurgaon/pf-monthly-filing-in-gurgaon/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-noida") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Noida",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/noida/pf-monthly-filing-in-noida/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-jaipur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Jaipur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/jaipur/pf-monthly-filing-in-jaipur/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-lucknow") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Lucknow",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/lucknow/pf-monthly-filing-in-lucknow/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-indore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Indore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/indore/pf-monthly-filing-in-indore/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-coimbatore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Coimbatore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/coimbatore/pf-monthly-filing-in-coimbatore/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-vadodara") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Vadodara",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/vadodara/pf-monthly-filing-in-vadodara/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-visakhapatnam") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Visakhapatnam",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/visakhapatnam/pf-monthly-filing-in-visakhapatnam/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-nagpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Nagpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/nagpur/pf-monthly-filing-in-nagpur/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-bhopal") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Bhopal",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bhopal/pf-monthly-filing-in-bhopal/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-monthly-filing-in-kanpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Monthly Filing Kanpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/kanpur/pf-monthly-filing-in-kanpur/",
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
            <CodeOfConduct sections={sectionsPFMonthlyFiling} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangaloreMonthlyFiling}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={monthlyFilingFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-bangalore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Bangalore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bangalore/pf-compliance-in-bangalore/",
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
            <PerformanceSection
              data={data}
              image={"/images/EPF-bangalore.png"}
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFCompliance} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FadeInWhenVisible>
              <ThreeStepSection
                cardsData={pastelCardsEpfoBangalorePFCompliance}
              />
            </FadeInWhenVisible>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-mumbai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Mumbai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/mumbai/pf-compliance-in-mumbai/",
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
            <PerformanceSection data={data} image={"/images/mumbai.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceMumbai} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-delhi") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Delhi",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/delhi/pf-compliance-in-delhi/",
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
            <PerformanceSection data={data} image={"/images/abstract.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceDelhi} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-chennai") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Chennai",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/chennai/pf-compliance-in-chennai/",
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
            <PerformanceSection data={data} image={"/images/chennai.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceChennai} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-hyderabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Hyderabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/hyderabad/pf-compliance-in-hyderabad/",
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
            <PerformanceSection data={data} image={"/images/hyderabad.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceHyderabad} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-pune") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Pune",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/pune/pf-compliance-in-pune/",
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
            <PerformanceSection data={data} image={"/images/abstract.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFCompliancePune} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-kolkata") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Kolkata",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/kolkata/pf-compliance-in-kolkata/",
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
            <PerformanceSection data={data} image={"/images/kolkata.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceKolkata} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-ahmedabad") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Ahmedabad",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/ahmedabad/pf-compliance-in-ahmedabad/",
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
            <PerformanceSection data={data} image={"/images/abstract.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceAhmedabad} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-surat") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Surat",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/surat/pf-compliance-in-surat/",
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
            <PerformanceSection data={data} image={"/images/abstract.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceSurat} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-gurgaon") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Gurgaon",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/gurgaon/pf-compliance-in-gurgaon/",
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
            <PerformanceSection data={data} image={"/images/gurgaon.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceGurgaon} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-noida") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Noida",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/noida/pf-compliance-in-noida/",
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
            <PerformanceSection data={data} image={"/images/abstract.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceNoida} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-jaipur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Jaipur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/jaipur/pf-compliance-in-jaipur/",
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
            <PerformanceSection data={data} image={"/images/jaipur.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceJaipur} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-lucknow") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Lucknow",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/lucknow/pf-compliance-in-lucknow/",
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
            <PerformanceSection data={data} image={"/images/lucknow.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceLucknow} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-indore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Indore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/indore/pf-compliance-in-indore/",
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
            <PerformanceSection data={data} image={"/images/abstract.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceIndore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-coimbatore") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Coimbatore",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/coimbatore/pf-compliance-in-coimbatore/",
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
            <PerformanceSection data={data} image={"/images/coimbatore.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceCoimbatore} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-vadodara") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Vadodara",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/vadodara/pf-compliance-in-vadodara/",
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
            <PerformanceSection data={data} image={"/images/vadodara.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceVadodara} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-visakhapatnam") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Visakhapatnam",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/visakhapatnam/pf-compliance-in-visakhapatnam/",
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
            <PerformanceSection
              data={data}
              image={"/iamges/visakhapatnam.png"}
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceVisakhapatnam} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-nagpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Nagpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/nagpur/pf-compliance-in-nagpur/",
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
            <PerformanceSection data={data} image={"/images/nagpur.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceNagpur} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-bhopal") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Bhopal",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/bhopal/pf-compliance-in-bhopal/",
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
            <PerformanceSection data={data} image={"/images/bhopal.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceBhopal} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
          </FadeInWhenVisible>
        </>
      );
    } else if (slug === "pf-compliance-in-kanpur") {
      return (
        <>
          <Script
            id="schema-pf-esic"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "EPFdesk - PF Compliance Kanpur",
                image: "https://epfdesk.com/images/logo.jpg",
                url: "https://epfdesk.com/epf/kanpur/pf-compliance-in-kanpur/",
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
            <PerformanceSection data={data} image={"/images/kanpur.png"} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <CodeOfConduct sections={sectionsPFComplianceKanpur} />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <FaqAccordion faqs={complianceFaqWithAddress} />
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
