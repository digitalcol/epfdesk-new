import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataTiruvallurDist, sectionsTiruvallurDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Tiruvallur EPF & ESIC Compliance | Gummidipoondi SIPCOT, Ennore Port & Heavy Engineering | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Tiruvallur district covering Gummidipoondi SIPCOT, Ennore Port, Kattupalli logistics corridor and heavy engineering clusters. NWC 2025 payroll restructuring, contractor compliance, PF/ESI audits and PE liability handled.",

  alternates: {
    canonical: "https://epfdesk.com/tiruvallur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Tiruvallur EPF & ESIC Compliance | SIPCOT, Ports & Heavy Engineering",
    description:
      "PF & ESIC specialists for Tiruvallur SIPCOT industries, Ennore Port labour and heavy engineering units.",
    url: "https://epfdesk.com/tiruvallur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Tiruvallur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tiruvallur EPF & ESIC Compliance | SIPCOT & Port Industries",
    description:
      "Expert PF & ESIC compliance for Tiruvallur SIPCOT units, port labour and engineering industries.",
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
      <Script id="tiruvallur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Tiruvallur">
            <meta name="geo.position" content="13.1439;79.9089">
            <meta name="ICBM" content="13.1439, 79.9089">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/tiruvallur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/tiruvallur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-tiruvallur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/tiruvallur-epf-esic-compliance#organization",

          name: "Tiruvallur EPF & ESIC Compliance – SIPCOT, Ports & Heavy Engineering | EPFDesk",

          alternateName:
            "EPFDesk – Tiruvallur SIPCOT, Ennore Port & Engineering Compliance Consultants",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/tiruvallur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "J.N. Road",
            addressLocality: "Tiruvallur",
            addressRegion: "Tamil Nadu",
            postalCode: "602001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.1439,
            longitude: 79.9089,
          },

          areaServed: [
            { "@type": "City", name: "Tiruvallur" },
            { "@type": "Place", name: "Gummidipoondi SIPCOT" },
            { "@type": "Place", name: "Ennore Port" },
            { "@type": "Place", name: "Kattupalli Port Logistics Zone" },
            { "@type": "Place", name: "Heavy Engineering Corridor" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Tiruvallur SIPCOT industries, Ennore and Kattupalli port-linked logistics employers and heavy engineering units. Services include NWC 2025 payroll restructuring, contractor PF audits, ESIC applicability for port labour and Principal Employer liability mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "49",
          },
        })}
      </Script>
      <Script
        id="faq-schema-tiruvallur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for units in Gummidipoondi SIPCOT, Tiruvallur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Manufacturing, engineering, automobile, and logistics units in Gummidipoondi SIPCOT must register under EPF once they employ 20 or more workers. Contract labour engaged through multiple vendors must also be included under Principal Employer responsibility.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to Ennore Port and Kattupalli port-linked labour?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ESIC applies to port, stevedoring, warehousing, and logistics operations employing 10 or more workers with wages up to ₹21,000 per month. Contract workers involved in loading, unloading, transport, and yard operations must be covered.",
              },
            },
            {
              "@type": "Question",
              name: "What are the major EPF compliance risks for Tiruvallur heavy engineering units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Key risks include non-inclusion of contract labour, improper allowance structuring to suppress basic wages, non-registration of contractors, mismatch between attendance registers and ECR filings, and lapses in Principal Employer liability compliance.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 impact Tiruvallur SIPCOT employers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the New Wage Code 2025, basic wages must constitute at least 50% of total remuneration. Tiruvallur SIPCOT employers using high allowances must restructure payrolls to avoid retrospective EPF demands during inspections.",
              },
            },
            {
              "@type": "Question",
              name: "Can EPFDesk handle contractor audits and Principal Employer liability in Tiruvallur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end support including contractor compliance audits, Principal Employer liability mitigation, EPF/ESIC registration validation, RO Chennai inspection handling, and statutory defence for Tiruvallur industries.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTiruvallurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTiruvallurDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tiruvallur" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'tiruvallur',
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
                    event_label: 'tiruvallur',
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
                  event_label: 'tiruvallur',
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
