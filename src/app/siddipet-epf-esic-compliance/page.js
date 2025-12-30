import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataSiddipetDist, sectionsSiddipetDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Siddipet EPF & ESIC Consultant | Genome Valley, Nangnoor Industrial Park & Gajwel Agri-Units | NWC 2025 Compliance – EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services in Siddipet for Mulugu Biotech Park, Nangnoor Industrial Park, Gajwel agri-processing units and MSMEs. Expertise includes NWC 2025 payroll restructuring, contractor compliance, seasonal labour PF/ESI coverage and audit defence.",

  alternates: {
    canonical: "https://epfdesk.com/siddipet-epf-esic-compliance",
  },

  openGraph: {
    title: "Siddipet EPF & ESIC Compliance | Genome Valley, Nangnoor & Gajwel",
    description:
      "PF & ESIC compliance for Siddipet’s biotech parks, industrial estates and agro-processing units. NWC 2025 payroll, contractor audits and statutory defence handled.",
    url: "https://epfdesk.com/siddipet-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Siddipet EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Siddipet EPF & ESIC Consultant | Industrial & Agro Compliance",
    description:
      "NWC 2025–ready EPF & ESIC compliance for Siddipet biotech, agro and industrial clusters.",
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
      <Script id="siddipet-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TG">
            <meta name="geo.placename" content="Siddipet">
            <meta name="geo.position" content="18.1048;78.8486">
            <meta name="ICBM" content="18.1048, 78.8486">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/siddipet-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/siddipet-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-siddipet"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/siddipet-epf-esic-compliance#organization",

          name: "Siddipet EPF & ESIC Compliance – Genome Valley, Industrial Parks & Agro Units | EPFDesk",

          alternateName:
            "EPFDesk – Siddipet PF & ESIC Consultants for Biotech, Agro & MSME Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/siddipet-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Nangnoor Industrial Park",
            addressLocality: "Siddipet",
            addressRegion: "Telangana",
            postalCode: "502103",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 18.1048,
            longitude: 78.8486,
          },

          areaServed: [
            { "@type": "City", name: "Siddipet" },
            {
              "@type": "AdministrativeArea",
              name: "Siddipet District",
            },
            {
              "@type": "AdministrativeArea",
              name: "North Telangana",
            },
          ],

          description:
            "EPF & ESIC compliance services for Siddipet biotech parks, agro-processing units, cotton ginning factories and industrial estates. Expertise includes NWC 2025 payroll restructuring, contractor PF liability, seasonal labour ESIC applicability and audit defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="faq-schema-siddipet"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for biotech and industrial units in Siddipet?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Biotech, pharma, engineering and manufacturing units in Siddipet must register under EPF once they employ 20 or more workers. Units in Nangnoor Industrial Park and Mulugu Biotech Park are commonly covered due to contractor-based manpower.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to agro-processing and cotton ginning units in Siddipet district?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ESIC applies to agro-processing, cotton ginning and food units employing 10 or more workers with wages up to ₹21,000 per month. Seasonal and migrant labour engaged during peak periods must also be included.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF compliance risks for Siddipet MSMEs?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include non-inclusion of contract labour, suppression of basic wages, incorrect allowance structuring, non-registration of contractors, and mismatch between ECR filings and wage registers.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 impact Siddipet industrial units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the New Wage Code 2025, basic wages must constitute at least 50% of total remuneration. Siddipet units using high allowances must restructure payrolls to avoid retrospective EPF liabilities and inspection penalties.",
              },
            },
            {
              "@type": "Question",
              name: "Can EPFDesk handle contractor and seasonal labour compliance in Siddipet?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk manages end-to-end contractor compliance including PF/ESIC registration validation, principal employer liability audits, seasonal labour coverage, inspection handling and statutory defence for Siddipet units.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSiddipetDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSiddipetDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-siddipet" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'siddipet',
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
                    event_label: 'siddipet',
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
                  event_label: 'siddipet',
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
