import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataKrishnaDist, sectionsKrishnaDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Krishna (Vijayawada) EPF & ESIC Consultant: NWC 2025 for Logistics, Infrastructure & Commercial Establishments | EPFDesk",

  description:
    "EPFDesk provides PF & ESIC compliance services in Krishna District (Vijayawada), covering logistics hubs, warehousing parks, construction sites, transport operators and commercial establishments. Expertise includes migrant labour PF/ESI onboarding, NWC 2025 payroll restructuring, BOCW cess handling, contractor audits and OSH/night shift compliance.",

  keywords: [
    "Vijayawada PF consultant",
    "Vijayawada ESIC consultant",
    "Krishna district PF ESIC",
    "logistics PF ESIC Vijayawada",
    "warehousing labour compliance AP",
    "transport PF ESIC Andhra Pradesh",
    "construction PF ESIC Vijayawada",
    "BOCW cess compliance AP",
    "NWC 2025 payroll Vijayawada",
    "EPFDesk Krishna district",
  ],

  alternates: {
    canonical: "https://epfdesk.com/krishna-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Vijayawada EPF & ESIC Consultant | Logistics, Warehousing, Construction & Commercial Compliance",
    description:
      "PF & ESIC compliance services for logistics corridors, warehousing, construction companies, banks and commercial establishments in Krishna District. Migrant workforce PF/ESI, NWC 2025 payroll and contractor audits.",
    url: "https://epfdesk.com/krishna-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vijayawada EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title:
      "Vijayawada EPF & ESIC Consultant | Logistics, Construction & Commercial Establishments",
    description:
      "EPFDesk helps Vijayawada’s logistics operators, warehouses, construction contractors and commercial establishments navigate PF, ESIC, BOCW and NWC 2025 compliance.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="krishna-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-AP">
            <meta name="geo.placename" content="Vijayawada, Krishna District, Andhra Pradesh">
            <meta name="geo.position" content="16.5062;80.6480">
            <meta name="ICBM" content="16.5062, 80.6480">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/krishna-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/krishna-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-krishna"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/krishna-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Krishna District (Vijayawada)",

          alternateName:
            "Vijayawada EPF & ESIC Compliance for Logistics, Construction & Commercial Establishments",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/krishna-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Benz Circle",
            addressLocality: "Vijayawada",
            addressRegion: "Andhra Pradesh",
            postalCode: "520010",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 16.5062,
            longitude: 80.648,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Krishna District" },
            { "@type": "Place", name: "Vijayawada" },
            { "@type": "Place", name: "NH Logistics Corridors" },
            { "@type": "Place", name: "Warehousing Parks" },
            { "@type": "Place", name: "Construction Zones" },
            { "@type": "Place", name: "Commercial Establishments & Banks" },
          ],

          description:
            "EPF & ESIC compliance services for logistics hubs, warehousing parks, construction sites, transport operators and commercial establishments in Krishna District (Vijayawada). Expertise includes migrant workforce onboarding, BOCW cess management, NWC 2025 payroll restructuring and OSH compliance.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="faq-krishna"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for logistics and transport companies in Vijayawada?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Logistics operators, transport companies, warehouses and fleet owners in Vijayawada must comply with EPF and ESIC if employee thresholds are met. Contractor and driver coverage is a key audit focus in Krishna District.",
              },
            },
            {
              "@type": "Question",
              name: "How does NWC 2025 impact payroll structuring in Krishna District?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under NWC 2025, basic wages must form at least 50% of total remuneration. EPFDesk helps Vijayawada establishments restructure salaries to remain compliant while controlling PF and ESIC cost impact.",
              },
            },
            {
              "@type": "Question",
              name: "Are construction contractors in Vijayawada required to pay BOCW cess along with EPF and ESIC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Construction contractors in Krishna District must comply with EPF, ESIC and BOCW cess provisions. Non-payment often results in retrospective assessments during labour inspections.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk support PF and ESIC audits in Vijayawada?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides audit defence, Section 7A representation, contractor verification and documentation support for EPF and ESIC inspections in Vijayawada and across Krishna District.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKrishnaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKrishnaDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-krishna" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: el.getAttribute('href'),
                  value: 5
                });
              }
            });
          });
        `}
      </Script>
    </>
  );
}
