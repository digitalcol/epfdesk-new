import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataSurendranagarDist,
  sectionsSurendranagarDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Surendranagar EPF & ESIC Consultant | Wadhwan GIDC, Thangadh Ceramics & Textile Mills | NWC 2025 Compliance – EPFDesk",

  description:
    "EPFDesk delivers EPF & ESIC compliance for Surendranagar ceramics, textile mills, salt-processing units, Wadhwan GIDC, Thangadh ceramic clusters and Dhrangadhra industrial belts. Expertise includes NWC 2025 payroll restructuring, PF/ESI registration, audits, piece-rate wage compliance and seasonal labour alignment.",

  alternates: {
    canonical: "https://epfdesk.com/surendranagar-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Surendranagar EPF & ESIC Compliance | Ceramics, Textiles & GIDC Industries",
    description:
      "PF & ESIC specialists for Surendranagar ceramics, textile mills, salt industries and GIDC clusters.",
    url: "https://epfdesk.com/surendranagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Surendranagar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Surendranagar EPF & ESIC Consultant | Ceramics & Textile Compliance",
    description:
      "NWC 2025–ready EPF & ESIC compliance for Surendranagar ceramics, textile mills and salt-processing industries.",
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
      <Script id="surendranagar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-GJ">
            <meta name="geo.placename" content="Surendranagar">
            <meta name="geo.position" content="22.7272;71.6376">
            <meta name="ICBM" content="22.7272, 71.6376">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/surendranagar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/surendranagar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-surendranagar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/surendranagar-epf-esic-compliance#organization",

          name: "Surendranagar EPF & ESIC Compliance – Ceramics, Textiles & Salt Industries | EPFDesk",

          alternateName:
            "EPFDesk – Surendranagar Ceramics, Textile & GIDC Compliance Experts",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/surendranagar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-BASED ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Wadhwan Road",
            addressLocality: "Surendranagar",
            addressRegion: "Gujarat",
            postalCode: "363001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.7272,
            longitude: 71.6376,
          },

          areaServed: [
            { "@type": "City", name: "Surendranagar" },
            { "@type": "Place", name: "Wadhwan GIDC" },
            { "@type": "Place", name: "Thangadh Ceramics Cluster" },
            { "@type": "Place", name: "Dhrangadhra Industrial Belt" },
            { "@type": "Place", name: "Salt Processing Units" },
          ],

          description:
            "EPF & ESIC compliance services for Surendranagar ceramics, textile mills and salt-processing industries. Coverage includes NWC 2025 payroll restructuring, PF & ESI registration, piece-rate wage audits, contractor compliance and seasonal labour statutory alignment.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="faq-schema-surendranagar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for ceramic and textile units in Surendranagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Ceramic manufacturing units, textile mills, and allied industries in Surendranagar must register under EPF once they employ 20 or more workers. Units operating in Wadhwan GIDC and Thangadh clusters are frequently covered due to contractor and piece-rate labour.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to Thangadh ceramic clusters and salt-processing units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ESIC applies to ceramic, salt-processing, and industrial units employing 10 or more workers with wages up to ₹21,000 per month. Seasonal and migrant workers engaged in kilns, packing, and loading must also be covered.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF compliance risks for Surendranagar industries?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Key risks include non-inclusion of contract labour, improper basic wage structuring, incorrect handling of piece-rate wages, non-registration of contractors, and mismatches between wage registers and monthly ECR filings.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 impact ceramic and textile units in Surendranagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the New Wage Code 2025, basic wages must constitute at least 50% of total remuneration. Ceramic and textile units using high allowances or piece-rate pay structures must restructure payrolls to avoid retrospective EPF liabilities.",
              },
            },
            {
              "@type": "Question",
              name: "Can EPFDesk manage contractor and seasonal labour compliance in Surendranagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end contractor compliance support including PF/ESIC registration checks, principal employer liability audits, piece-rate wage validation, seasonal labour coverage, and inspection defence for Surendranagar industries.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSurendranagarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSurendranagarDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-surendranagar" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'surendranagar',
                  value: 5
                });
              }
            });
          });

          document
            .querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]')
            .forEach(el => {
              el.addEventListener('click', () => {
                if (typeof gtag === 'function') {
                  gtag('event', 'whatsapp_click', {
                    event_category: 'conversion',
                    event_label: 'surendranagar',
                    value: 5
                  });
                }
              });
            });

          document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'form_submission', {
                  event_category: 'lead',
                  event_label: 'surendranagar',
                  value: 10
                });
              }
            });
          });
        `}
      </Script>
    </>
  );
}
