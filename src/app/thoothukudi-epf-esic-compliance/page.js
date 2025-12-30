import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataThoothukudiDist, sectionsThoothukudiDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Thoothukudi EPF & ESIC Compliance | Port Labour, Chemical Units & Salt Pan Workers | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Thoothukudi Port Trust labour, chemical manufacturing units and salt pan seasonal workers. RO Madurai audits, NWC 2025 payroll restructuring, contractor compliance and Principal Employer liability handled.",

  alternates: {
    canonical: "https://epfdesk.com/thoothukudi-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Thoothukudi EPF & ESIC Compliance | Port, Chemical & Salt Pan Labour",
    description:
      "PF & ESIC specialists for Thoothukudi Port Trust workforce, chemical units and salt pan seasonal labour clusters.",
    url: "https://epfdesk.com/thoothukudi-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Thoothukudi EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Thoothukudi EPF & ESIC Compliance | Port & Chemical Industries",
    description:
      "Expert PF & ESIC compliance for Thoothukudi Port Trust labour, chemical units and salt pan workers.",
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
      <Script id="thoothukudi-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Thoothukudi">
            <meta name="geo.position" content="8.7642;78.1348">
            <meta name="ICBM" content="8.7642, 78.1348">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/thoothukudi-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/thoothukudi-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-thoothukudi"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/thoothukudi-epf-esic-compliance#organization",

          name: "Thoothukudi EPF & ESIC Compliance – Port, Chemical & Salt Pan Labour | EPFDesk",

          alternateName:
            "EPFDesk – Thoothukudi Port & Industrial Labour Compliance Experts",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/thoothukudi-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Harbour Estate Road",
            addressLocality: "Thoothukudi",
            addressRegion: "Tamil Nadu",
            postalCode: "628004",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 8.7642,
            longitude: 78.1348,
          },

          areaServed: [
            { "@type": "City", name: "Thoothukudi" },
            { "@type": "Place", name: "Thoothukudi Port Trust" },
            { "@type": "Place", name: "Chemical Manufacturing Belt" },
            { "@type": "Place", name: "Salt Pan Labour Clusters" },
            { "@type": "Place", name: "Industrial & Logistics Zone" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Thoothukudi Port Trust labour, chemical manufacturing units and salt pan seasonal workers. Expertise in RO Madurai audits, NWC 2025 wage restructuring, contractor compliance and Principal Employer liability mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "48",
          },
        })}
      </Script>
      <Script
        id="faq-schema-thoothukudi"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for port labour and stevedoring contractors in Thoothukudi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPF registration is mandatory for port labour contractors and stevedoring agencies in Thoothukudi once 20 or more workers are engaged. Principal Employers operating at Thoothukudi Port Trust are jointly liable for PF compliance of contractors.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to chemical manufacturing units in Thoothukudi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Chemical and process manufacturing units employing 10 or more workers with wages up to ₹21,000 per month are covered under ESIC. This includes contract labour engaged in production, packing, utilities, and maintenance operations.",
              },
            },
            {
              "@type": "Question",
              name: "Are salt pan seasonal workers required to be covered under EPF and ESIC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Salt pan workers engaged on a seasonal or migratory basis are required to be covered under EPF and ESIC if statutory thresholds are met. Non-enrolment of seasonal labour is a major audit trigger in Thoothukudi.",
              },
            },
            {
              "@type": "Question",
              name: "What are the main EPF audit risks for Thoothukudi Port and industrial units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Key risks include non-registration of contractors, exclusion of port handling labour, suppression of basic wages, mismatch between ECR filings and port attendance records, and non-compliance with Principal Employer obligations.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 impact Thoothukudi industrial employers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the New Wage Code 2025, basic wages must constitute at least 50% of total remuneration. Thoothukudi employers using allowances to control PF costs must restructure payrolls to avoid retrospective liabilities during EPF inspections.",
              },
            },
            {
              "@type": "Question",
              name: "Can EPFDesk manage Principal Employer liability and contractor audits in Thoothukudi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end support including contractor compliance audits, Principal Employer liability mitigation, EPF/ESIC registration validation, inspection handling, and statutory defence for Thoothukudi port and industrial units.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataThoothukudiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsThoothukudiDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-thoothukudi" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'thoothukudi',
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
                    event_label: 'thoothukudi',
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
                  event_label: 'thoothukudi',
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
