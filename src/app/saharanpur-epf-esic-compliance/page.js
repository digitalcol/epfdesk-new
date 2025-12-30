import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataSaharanpurDist,
  sectionsSaharanpurDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Saharanpur EPF & ESIC Compliance: Wood Carving Piece-Rate, Paper Mill Hazard & Sugar Seasonal PF | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Saharanpur wood carving exporters, paper mills and sugar manufacturers. Experts in RO Saharanpur liaison, piece-rate PF audits, ESIC hazard liability and seasonal compliance.",

  alternates: {
    canonical: "https://epfdesk.com/saharanpur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Saharanpur EPF & ESIC Compliance | Wood, Paper & Sugar Industries",
    description:
      "PF & ESIC specialists for Saharanpur wood carving, paper mills and sugar factories.",
    url: "https://epfdesk.com/saharanpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Saharanpur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Saharanpur EPF & ESIC Compliance | Wood, Paper & Sugar",
    description:
      "Expert PF/ESIC compliance for Saharanpur wood carving exporters, paper mills and sugar factories.",
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
      <Script id="saharanpur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Saharanpur">
            <meta name="geo.position" content="29.9679;77.5452">
            <meta name="ICBM" content="29.9679, 77.5452">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/saharanpur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/saharanpur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-saharanpur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/saharanpur-epf-esic-compliance#organization",

          name:
            "Saharanpur EPF & ESIC Compliance – Wood, Paper & Sugar Industries | EPFDesk",

          alternateName:
            "EPFDesk – Saharanpur PF & ESIC Consultant for Wood Carving, Paper Mills & Sugar Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/saharanpur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS (FIXED) */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Delhi Road Industrial Area",
            addressLocality: "Saharanpur",
            addressRegion: "Uttar Pradesh",
            postalCode: "247001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 29.9679,
            longitude: 77.5452,
          },

          areaServed: [
            { "@type": "City", name: "Saharanpur" },
            {
              "@type": "AdministrativeArea",
              name: "Saharanpur District",
            },
            {
              "@type": "AdministrativeArea",
              name: "Western Uttar Pradesh",
            },
          ],

          description:
            "EPF & ESIC compliance services for Saharanpur wood carving exporters, paper & pulp mills and sugar factories. Expertise includes piece-rate PF audits, ESIC hazardous process coverage, seasonal workforce compliance and RO Saharanpur enforcement handling.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "78",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSaharanpurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSaharanpurDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-saharanpur" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'saharanpur',
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
                    event_label: 'saharanpur',
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
                  event_label: 'saharanpur',
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
