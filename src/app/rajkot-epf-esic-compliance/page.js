import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataRajkotDist, sectionsRajkotDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Rajkot EPF & ESIC Consultant: NWC 2025 Compliance for GIDC Metoda, Shapar Veraval & MSME Engineering Units | EPFDesk",

  description:
    "EPFDesk provides PF & ESIC compliance services in Rajkot, supporting engineering, casting, fabrication and machine component units across GIDC Metoda, Shapar Veraval and the MSME industrial belt. Specialists in NWC 2025 payroll restructuring, contractor audits and workforce formalization.",

  alternates: {
    canonical: "https://epfdesk.com/rajkot-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Rajkot EPF & ESIC Consultant | GIDC Metoda, Shapar Veraval & MSME Engineering Compliance",
    description:
      "PF & ESIC compliance for Rajkot engineering, casting and fabrication MSMEs. GIDC Metoda, Shapar Veraval, NWC 2025 payroll and contractor audits covered.",
    url: "https://epfdesk.com/rajkot-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Rajkot EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Rajkot EPF & ESIC Compliance | Engineering & Casting MSMEs | EPFDesk",
    description:
      "PF & ESIC compliance for Rajkot engineering and casting MSMEs. NWC 2025 payroll, contractor audits and statutory defence.",
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
      <Script id="rajkot-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-GJ">
            <meta name="geo.placename" content="Rajkot">
            <meta name="geo.position" content="22.3039;70.8022">
            <meta name="ICBM" content="22.3039, 70.8022">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/rajkot-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/rajkot-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-rajkot"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/rajkot-epf-esic-compliance#organization",

          name: "EPFDesk – Rajkot EPF & ESIC Compliance for Engineering & Casting MSMEs",

          alternateName:
            "PF & ESIC Consultant for GIDC Metoda & Shapar Veraval MSMEs",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/rajkot-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "GIDC Metoda",
            addressRegion: "Gujarat",
            postalCode: "360021",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.3039,
            longitude: 70.8022,
          },

          areaServed: [
            { "@type": "City", name: "Rajkot" },
            { "@type": "Place", name: "GIDC Metoda" },
            { "@type": "Place", name: "Shapar Veraval" },
            { "@type": "Place", name: "Rajkot MSME Engineering Cluster" },
          ],

          description:
            "EPF & ESIC compliance services for Rajkot engineering, casting and fabrication MSMEs, including NWC 2025 payroll restructuring, PF/ESI registration, contractor audits and statutory inspection defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="faq-schema-rajkot"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for engineering MSMEs in Rajkot?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Engineering, casting, fabrication, and machine component units in Rajkot must register under EPF once they employ 20 or more workers. Many MSMEs in GIDC Metoda and Shapar Veraval are covered due to contractor-based manpower.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to foundries and casting units in Rajkot?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ESIC applies to foundries, casting units, and fabrication workshops employing 10 or more workers with wages up to ₹21,000 per month. Rajkot units are frequently audited for exclusion of helpers, loaders, and contract labour.",
              },
            },
            {
              "@type": "Question",
              name: "What are the main EPF audit risks for GIDC Metoda and Shapar Veraval units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Key EPF risks include suppression of basic wages, improper allowance structuring, non-inclusion of contract labour, and mismatch between ECR filings and GST/vendor records.",
              },
            },
            {
              "@type": "Question",
              name: "How does NWC 2025 impact payroll for Rajkot MSMEs?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the New Wage Code 2025, basic wages must be at least 50% of total remuneration. Rajkot MSMEs using high allowances for cost control must restructure payrolls to avoid retrospective EPF liabilities.",
              },
            },
            {
              "@type": "Question",
              name: "Can EPFDesk handle contractor compliance for Rajkot engineering units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk manages end-to-end contractor compliance including registration validation, monthly ECR reconciliation, principal employer liability audits, and inspection defense for Rajkot engineering and casting units.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRajkotDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRajkotDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-rajkot" strategy="afterInteractive">
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

          document
            .querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]')
            .forEach(el => {
              el.addEventListener('click', () => {
                if (typeof gtag === 'function') {
                  gtag('event', 'whatsapp_click', {
                    event_category: 'conversion',
                    event_label: window.location.pathname,
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
                  event_label: window.location.pathname,
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
