import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataUdupiDist,
  sectionsUdupiDist,
  faqUdupi,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Udupi EPF & ESIC Compliance for Manipal Hospitals, Educational Institutions & Tourism Sector | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Udupi covering Manipal hospitals and educational trusts, tourism establishments, fisheries/cashew units and UPCL contractors. Seasonal labour PF, hospital ESIC enforcement and Principal Employer liability handled.",

  alternates: {
    canonical: "https://epfdesk.com/udupi-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Udupi EPF & ESIC Compliance | Manipal Hospitals & Coastal Economy",
    description:
      "PF & ESIC specialists for Manipal hospitals, Udupi tourism sector, fisheries/cashew units and power contractors.",
    url: "https://epfdesk.com/udupi-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Udupi EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Udupi EPF & ESIC Compliance | Manipal Hospitals & Tourism",
    description:
      "Expert PF & ESIC compliance for Udupi hospitals, resorts, fisheries and power contractors.",
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
      <Script id="udupi-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Udupi">
            <meta name="geo.position" content="13.3409;74.7421">
            <meta name="ICBM" content="13.3409, 74.7421">
             <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/udupi-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/udupi-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-udupi"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/udupi-epf-esic-compliance#organization",

          name:
            "Udupi EPF & ESIC Compliance – Manipal Hospitals, Tourism & Coastal Industry | EPFDesk",

          alternateName:
            "EPFDesk – Udupi PF ESIC Consultants for Hospitals & Tourism Sector",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/udupi-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Court Road",
            addressLocality: "Udupi",
            addressRegion: "Karnataka",
            postalCode: "576101",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.3409,
            longitude: 74.7421,
          },

          areaServed: [
            { "@type": "City", name: "Udupi" },
            { "@type": "Place", name: "Manipal" },
            { "@type": "Place", name: "Karkala" },
            { "@type": "Place", name: "Kundapura" },
            { "@type": "Place", name: "Coastal Tourism Belt" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Udupi’s hospitals, educational trusts, tourism establishments, fisheries and cashew processing units, and UPCL contractors. Services include ESIC enforcement handling for hospitals, seasonal labour PF compliance, contractor audits and Principal Employer liability mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "41",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataUdupiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsUdupiDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqUdupi} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-udupi" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'udupi',
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
                    event_label: 'udupi',
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
                  event_label: 'udupi',
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
