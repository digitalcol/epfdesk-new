import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSindhudurgDistrict,
  sectionsSindhudurgDistrict,
  faqSindhudurgDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Sindhudurg EPF & ESIC Compliance for Resorts, Cashew Processing & Tourism | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Sindhudurg hotels, beach resorts, cashew & mango processing units and tourism contractors. Seasonal labour PF liability, ESIC applicability and RO Kolhapur audit defence handled end-to-end.",

  alternates: {
    canonical: "https://epfdesk.com/sindhudurg-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Sindhudurg EPF & ESIC Compliance | Resorts, Cashew & Tourism Sector",
    description:
      "High-risk PF & ESIC compliance for Sindhudurg hospitality sector, cashew processing units and seasonal coastal workforce.",
    url: "https://epfdesk.com/sindhudurg-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sindhudurg EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sindhudurg EPF & ESIC Compliance | Resorts & Cashew Processing",
    description:
      "PF & ESIC services for Sindhudurg hotels, resorts, cashew processing units and tourism contractors.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META (SINDHUDURG) ========= */}
      <Script id="sindhudurg-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Sindhudurg">
            <meta name="geo.position" content="16.3492;73.5594">
            <meta name="ICBM" content="16.3492, 73.5594">
             <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/sindhudurg-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/sindhudurg-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-sindhudurg"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/sindhudurg-epf-esic-compliance#organization",

          name:
            "Sindhudurg EPF & ESIC Compliance – Resorts, Cashew Processing & Tourism | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Sindhudurg Hospitality & Agro Processing",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/sindhudurg-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ CITY-BASED ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Malvan Road",
            addressLocality: "Sindhudurg",
            addressRegion: "Maharashtra",
            postalCode: "416812",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 16.3492,
            longitude: 73.5594,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Sindhudurg District" },
            { "@type": "City", name: "Malvan" },
            { "@type": "City", name: "Kankavli" },
            { "@type": "City", name: "Sawantwadi" },
            { "@type": "Place", name: "Coastal Resort Belt" },
          ],

          description:
            "EPF & ESIC compliance services for Sindhudurg hotels, beach resorts, cashew & mango processing units and tourism contractors. Expertise includes seasonal labour PF coverage, ESIC applicability for hospitality staff, contractor audits and RO Kolhapur enforcement defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "41",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSindhudurgDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSindhudurgDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSindhudurgDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-sindhudurg" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'sindhudurg',
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
                    event_label: 'sindhudurg',
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
                  event_label: 'sindhudurg',
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
