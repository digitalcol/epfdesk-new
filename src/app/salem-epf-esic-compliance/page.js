import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataSalemDist, sectionsSalemDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Salem Labour Law Compliance: Risk Profile for Steel Plants, Powerlooms & Sago Factories | EPFDesk",

  description:
    "EPFDesk delivers labour law risk analysis and compliance frameworks for Salem’s steel plants, powerloom clusters, and sago/tapioca factories. Services include EPF & ESIC applicability reviews, contractor audits, informal workforce formalization and NWC 2025 readiness.",

  alternates: {
    canonical: "https://epfdesk.com/salem-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Salem EPF & ESIC Compliance | Steel Plants, Powerlooms & Sago Factories",
    description:
      "Labour compliance risk analysis for Salem’s steel industry, powerloom sector and sago/tapioca factories. EPF/ESI audits, contractor compliance and NWC 2025 readiness.",
    url: "https://epfdesk.com/salem-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Salem EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Salem EPF & ESIC Compliance | Steel, Powerloom & Sago Industry",
    description:
      "Compliance risk profiling for Salem steel plants, powerloom clusters and sago factories. EPF, ESIC and NWC 2025 readiness handled.",
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
      <Script id="salem-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Salem">
            <meta name="geo.position" content="11.6643;78.1460">
            <meta name="ICBM" content="11.6643, 78.1460">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/salem-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/salem-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-salem"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/salem-epf-esic-compliance#organization",

          name: "Salem Labour Law Compliance – Steel, Powerloom & Sago Industries | EPFDesk",

          alternateName:
            "EPFDesk – Salem Steel Plant, Powerloom & Sago Factory Compliance Experts",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/salem-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* 🔒 ADDRESS — STANDARDIZED */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Steel Plant Road",
            addressRegion: "Tamil Nadu",
            postalCode: "636005",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 11.6643,
            longitude: 78.146,
          },

          areaServed: [
            { "@type": "City", name: "Salem" },
            { "@type": "AdministrativeArea", name: "Salem District" },
            { "@type": "AdministrativeArea", name: "Western Tamil Nadu" },
          ],

          description:
            "EPF & ESIC compliance and labour law risk analysis for Salem’s steel plants, powerloom clusters and sago/tapioca factories. Services include contractor PF audits, informal workforce formalization, piece-rate wage risk analysis and NWC 2025 readiness strategies.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="faq-schema-salem"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for steel plants and rolling mills in Salem?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Steel plants, rolling mills, and allied engineering units in Salem must register under EPF once they employ 20 or more workers. Contract labour engaged in loading, furnace operations, maintenance, and logistics must also be included.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to Salem powerloom and textile units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Powerloom and textile units employing 10 or more workers with wages up to ₹21,000 per month are covered under ESIC. Salem units are frequently audited for exclusion of helpers, winders, cleaners, and piece-rate workers.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF compliance risks for sago and tapioca factories in Salem?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include non-coverage of seasonal and migrant workers, incorrect basic wage structuring, non-registration of contractors, and mismatch between wage registers and ECR filings.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 impact Salem manufacturing units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the New Wage Code 2025, basic wages must form at least 50% of total remuneration. Salem manufacturing units using high allowances must restructure payrolls to avoid retrospective EPF liabilities and inspection penalties.",
              },
            },
            {
              "@type": "Question",
              name: "Can EPFDesk manage contractor compliance for Salem industrial units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end contractor compliance management including principal employer liability audits, PF/ESIC registration validation, ECR reconciliation, inspection handling, and statutory defence for Salem industries.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSalemDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSalemDist} />
      </FadeInWhenVisible>
      <Script id="conversion-salem" strategy="afterInteractive">
        {`
    document.querySelectorAll('a[href^="tel:"]').forEach(el => {
      el.addEventListener('click', () => {
        if (typeof gtag === 'function') {
          gtag('event', 'phone_click', {
            event_category: 'conversion',
            event_label: 'salem',
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
              event_label: 'salem',
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
            event_label: 'salem',
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
