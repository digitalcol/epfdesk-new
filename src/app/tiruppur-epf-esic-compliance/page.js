import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataTiruppurDist, sectionsTiruppurDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Tiruppur EPF & ESIC Compliance | Knitwear, Garment Exports & Piece-Rate Payroll | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Tiruppur knitwear manufacturers, garment exporters, MSMEs and piece-rate workforce. NWC 2025 payroll restructuring, migrant labour documentation, contractor compliance and PF/ESI audits handled.",

  alternates: {
    canonical: "https://epfdesk.com/tiruppur-epf-esic-compliance",
  },

  openGraph: {
    title: "Tiruppur EPF & ESIC Compliance | Knitwear & Garment Export Hub",
    description:
      "PF & ESIC specialists for Tiruppur knitwear units, garment exporters and piece-rate wage systems.",
    url: "https://epfdesk.com/tiruppur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Tiruppur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tiruppur EPF & ESIC Compliance | Knitwear & Garment Export Sector",
    description:
      "Expert PF & ESIC compliance for Tiruppur knitwear, garment exporters and piece-rate labour systems.",
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
      <Script id="tiruppur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Tiruppur">
            <meta name="geo.position" content="11.1085;77.3411">
            <meta name="ICBM" content="11.1085, 77.3411">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/tiruppur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/tiruppur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-tiruppur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/tiruppur-epf-esic-compliance#organization",

          name: "Tiruppur EPF & ESIC Compliance – Knitwear, Garment Exports & Piece-Rate Workforce | EPFDesk",

          alternateName:
            "EPFDesk – Tiruppur Knitwear & Garment Export Compliance Consultants",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/tiruppur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avinashi Road",
            addressLocality: "Tiruppur",
            addressRegion: "Tamil Nadu",
            postalCode: "641602",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 11.1085,
            longitude: 77.3411,
          },

          areaServed: [
            { "@type": "City", name: "Tiruppur" },
            { "@type": "Place", name: "Knitwear Cluster" },
            { "@type": "Place", name: "Garment Export Units" },
            { "@type": "Place", name: "Dyeing & Processing Units" },
            { "@type": "Place", name: "TEA Member Units" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Tiruppur knitwear manufacturers, garment exporters and MSMEs. Expertise includes piece-rate wage integration, migrant labour documentation, contractor compliance, RO Coimbatore audits and NWC 2025 payroll restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "51",
          },
        })}
      </Script>
      <Script
        id="faq-schema-tiruppur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for knitwear and garment units in Tiruppur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Knitwear manufacturers, garment exporters, and allied processing units in Tiruppur must register under EPF once they employ 20 or more workers. Contract labour and job-work employees engaged through multiple units must also be included.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to Tiruppur garment exporters and dyeing units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ESIC applies to garment, knitting, dyeing, and processing units employing 10 or more workers with wages up to ₹21,000 per month. Helpers, packers, checking staff, and utility workers must be covered.",
              },
            },
            {
              "@type": "Question",
              name: "How should piece-rate wages be handled for EPF compliance in Tiruppur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Piece-rate wages must be converted into a notional monthly wage to determine EPF contributions. Incorrect exclusion of piece-rate earnings is a common audit issue in Tiruppur knitwear units.",
              },
            },
            {
              "@type": "Question",
              name: "What are the main EPF audit risks for Tiruppur garment exporters?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Major risks include non-inclusion of contract labour, improper handling of piece-rate wages, suppression of basic wages through allowances, mismatch between ECR filings and production records, and Principal Employer liability gaps.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 impact Tiruppur knitwear units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the New Wage Code 2025, basic wages must form at least 50% of total remuneration. Tiruppur units using high allowances to manage PF costs must restructure payrolls to avoid retrospective EPF liabilities.",
              },
            },
            {
              "@type": "Question",
              name: "Can EPFDesk manage migrant labour and contractor compliance in Tiruppur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk supports Tiruppur units with migrant labour UAN/KYC onboarding, contractor compliance audits, Principal Employer liability management, RO Coimbatore inspection handling, and statutory defence.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTiruppurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTiruppurDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tiruppur" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'tiruppur',
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
                    event_label: 'tiruppur',
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
                  event_label: 'tiruppur',
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
