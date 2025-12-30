import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataVadodaraDist, sectionsVadodaraDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Vadodara EPF & ESIC Compliance: GSFC, Nandesari GIDC & Petrochemical Corridor | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Vadodara petrochemical, refinery, PSU and heavy engineering clusters — GSFC, Nandesari GIDC and PCC Corridor. Experts in RO Vadodara audits, NWC-2025 payroll restructuring and Principal Employer liability.",

  alternates: {
    canonical: "https://epfdesk.com/vadodara-epf-esic-compliance",
  },

  openGraph: {
    title: "Vadodara EPF & ESIC Compliance | Petrochemical & Engineering Hub",
    description:
      "PF & ESIC specialists for GSFC, Nandesari GIDC, refinery and heavy engineering units across Vadodara.",
    url: "https://epfdesk.com/vadodara-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vadodara EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vadodara EPF & ESIC Compliance | Petrochemical & Engineering | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Vadodara petrochemical, refinery and engineering units.",
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
      <Script id="vadodara-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-GJ">
            <meta name="geo.placename" content="Vadodara, Gujarat">
            <meta name="geo.position" content="22.3072;73.1812">
            <meta name="ICBM" content="22.3072, 73.1812">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/vadodara-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/vadodara-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-vadodara"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/vadodara-epf-esic-compliance#organization",

          name: "Vadodara EPF & ESIC Compliance for Petrochemical & Engineering Units | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for GSFC, Nandesari GIDC & PCC Corridor",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/vadodara-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Alkapuri Main Road",
            addressLocality: "Vadodara",
            addressRegion: "Gujarat",
            postalCode: "390001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.3072,
            longitude: 73.1812,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Vadodara District" },
            { "@type": "Place", name: "Nandesari GIDC" },
            { "@type": "Place", name: "GSFC Industrial Zone" },
            {
              "@type": "Place",
              name: "PCC (Petrochemical Corridor)",
            },
            { "@type": "Place", name: "Refinery & PSU Clusters" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Vadodara petrochemical, refinery, PSU and heavy engineering employers. Specialized in RO Vadodara audits, New Wage Code 2025 payroll restructuring, contractor compliance and Principal Employer liability management.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "69",
          },
        })}
      </Script>
      <Script
        id="faq-schema-vadodara"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for petrochemical and PSU units in Vadodara?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Petrochemical plants, PSUs, refineries, and heavy engineering units in Vadodara must register under EPF once they employ 20 or more workers. This includes on-roll employees and all eligible contract labour.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to Nandesari GIDC industries and refinery contractors?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ESIC applies to industrial and chemical units employing 10 or more workers with wages up to ₹21,000 per month. Contract workers engaged in production, utilities, maintenance, security, and logistics must be covered.",
              },
            },
            {
              "@type": "Question",
              name: "What are the key EPF compliance risks for GSFC and petrochemical corridor units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Major risks include non-inclusion of contractor labour, suppression of basic wages through allowances, non-registration of contractors, mismatch between attendance records and ECR filings, and lapses in Principal Employer liability.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 impact Vadodara petrochemical employers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the New Wage Code 2025, basic wages must form at least 50% of total remuneration. Vadodara employers using high allowances must restructure payrolls to avoid retrospective EPF demands during RO Vadodara inspections.",
              },
            },
            {
              "@type": "Question",
              name: "Are Principal Employers liable for contractor EPF and ESIC compliance in Vadodara?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Principal Employers are jointly and severally liable for EPF and ESIC compliance of all contractors operating within their premises, including those engaged for maintenance, shutdowns, and project work.",
              },
            },
            {
              "@type": "Question",
              name: "Can EPFDesk manage RO Vadodara audits and contractor compliance?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end support including contractor audits, Principal Employer liability mitigation, EPF/ESIC registration validation, RO Vadodara inspection handling, and statutory defence.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataVadodaraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVadodaraDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-vadodara" strategy="afterInteractive">
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
