import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataTirupatiDist, sectionsTirupatiDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Tirupati EPF & ESIC Compliance | Hospitality, Education & Sri City Electronics | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Tirupati hospitality establishments, educational institutions and Sri City electronics manufacturers. RO Tirupati audits, NWC 2025 payroll restructuring, contractor compliance and fixed-term employment structuring handled.",

  alternates: {
    canonical: "https://epfdesk.com/tirupati-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Tirupati EPF & ESIC Compliance | Hospitality, Education & Electronics",
    description:
      "PF & ESIC specialists for Tirupati hotels, colleges and Sri City electronics manufacturing units.",
    url: "https://epfdesk.com/tirupati-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Tirupati EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tirupati EPF & ESIC Compliance | Hospitality & Sri City Electronics",
    description:
      "Expert PF & ESIC compliance for Tirupati hotels, educational institutions and Sri City electronics manufacturers.",
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
      <Script id="tirupati-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-AP">
            <meta name="geo.placename" content="Tirupati">
            <meta name="geo.position" content="13.6288;79.4192">
            <meta name="ICBM" content="13.6288, 79.4192">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/tirupati-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/tirupati-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-tirupati"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/tirupati-epf-esic-compliance#organization",

          name: "Tirupati EPF & ESIC Compliance – Hospitality, Education & Electronics | EPFDesk",

          alternateName:
            "EPFDesk – Tirupati EPF & ESIC Consultants for Hotels, Colleges & Sri City",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/tirupati-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "AIR Bypass Road",
            addressLocality: "Tirupati",
            addressRegion: "Andhra Pradesh",
            postalCode: "517501",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.6288,
            longitude: 79.4192,
          },

          areaServed: [
            { "@type": "City", name: "Tirupati" },
            { "@type": "Place", name: "Tirupati Temple City" },
            { "@type": "Place", name: "Sri City Electronics SEZ" },
            { "@type": "Place", name: "Hospitality & Tourism Zone" },
            { "@type": "Place", name: "Educational Institutions Belt" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Tirupati hotels, educational institutions and Sri City electronics manufacturers. Expertise in RO Tirupati audits, NWC 2025 payroll restructuring, fixed-term employment, contractor compliance and Principal Employer liability mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "49",
          },
        })}
      </Script>
      <Script
        id="faq-schema-tirupati"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for hotels and hospitality establishments in Tirupati?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Hotels, lodges, choultries, and hospitality establishments in Tirupati must register under EPF once they employ 20 or more workers. Contract staff such as housekeeping, security, kitchen, and transport workers must also be covered.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to educational institutions in Tirupati?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Educational institutions employing 10 or more non-teaching staff with wages up to ₹21,000 per month are covered under ESIC. This includes administrative staff, lab assistants, transport crews, hostel workers, and support services.",
              },
            },
            {
              "@type": "Question",
              name: "Are Sri City electronics manufacturers required to comply with EPF and ESIC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Electronics manufacturing units in Sri City SEZ are fully covered under EPF and ESIC. Fixed-term employees, apprentices not covered under the Apprentices Act, and contract labour must be included as per statutory provisions.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF audit risks for Tirupati employers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include non-inclusion of contract labour, incorrect fixed-term employment structuring, suppression of basic wages, mismatch between ECR filings and attendance records, and Principal Employer liability lapses.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 affect Tirupati hospitality and electronics units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the New Wage Code 2025, basic wages must be at least 50% of total remuneration. Tirupati employers using allowances to control statutory costs must restructure payrolls to avoid retrospective EPF liabilities during inspections.",
              },
            },
            {
              "@type": "Question",
              name: "Can EPFDesk handle contractor compliance and RO Tirupati inspections?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end support including contractor compliance audits, Principal Employer liability management, EPF/ESIC registration validation, RO Tirupati inspection handling, and statutory defence.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTirupatiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTirupatiDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tirupati" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'tirupati',
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
                    event_label: 'tirupati',
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
                  event_label: 'tirupati',
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
