import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataUjjainDistrict,
  sectionsUjjainDistrict,
  faqUjjainDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Ujjain EPF & ESIC Compliance: Vikram Udyogpuri Smart City PE Liability, EEC-2025 & ESIC Amnesty 2025 | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Ujjain industrial units, Vikram Udyogpuri Smart City investors and MSMEs. RO Ujjain audits, EEC-2025 enrolment, ESIC Amnesty 2025 and Principal Employer liability handled.",

  alternates: {
    canonical: "https://epfdesk.com/ujjain-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Ujjain EPF & ESIC Compliance | Vikram Udyogpuri Smart City",
    description:
      "PF & ESIC specialists for Ujjain’s Vikram Udyogpuri DMIC node, pharma, food and chemical clusters.",
    url: "https://epfdesk.com/ujjain-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ujjain EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ujjain EPF & ESIC Compliance | Vikram Udyogpuri",
    description:
      "Expert PF & ESIC compliance for Ujjain Smart City, pharma and food processing units.",
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
      <Script id="ujjain-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MP">
            <meta name="geo.placename" content="Ujjain">
            <meta name="geo.position" content="23.1765;75.7885">
            <meta name="ICBM" content="23.1765, 75.7885">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/ujjain-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/ujjain-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-ujjain"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/ujjain-epf-esic-compliance#organization",

          name:
            "Ujjain EPF & ESIC Compliance – Vikram Udyogpuri Smart City | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Ujjain & Vikram Udyogpuri",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/ujjain-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Freeganj Road",
            addressLocality: "Ujjain",
            addressRegion: "Madhya Pradesh",
            postalCode: "456010",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.1765,
            longitude: 75.7885,
          },

          areaServed: [
            { "@type": "City", name: "Ujjain" },
            { "@type": "Place", name: "Vikram Udyogpuri" },
            { "@type": "Place", name: "Nagda" },
            { "@type": "Place", name: "Maksi Road Industrial Area" },
            { "@type": "Place", name: "Bharatpuri" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Ujjain’s Vikram Udyogpuri Smart City, medical device park, pharma, food processing and chemical units. Services include RO Ujjain audit defence, EEC-2025 enrolment, ESIC Amnesty 2025 settlement and Principal Employer liability mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "72",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataUjjainDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsUjjainDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqUjjainDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-ujjain" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'ujjain',
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
                    event_label: 'ujjain',
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
                  event_label: 'ujjain',
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
