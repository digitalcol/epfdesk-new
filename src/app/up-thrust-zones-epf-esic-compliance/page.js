import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataUPThrustZones,
  sectionsUPThrustZones,
  faqUPThrustZones,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "UP EPF & ESIC Compliance 2025: Raebareli MSME Hub, Ambedkar Nagar Textiles & Kushinagar Agro-Processing | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Uttar Pradesh’s new Industrial Thrust Zones. Coverage includes Raebareli MSMEs, Ambedkar Nagar textile clusters and Kushinagar agro-processing units under EEC-2025 and New Labour Codes.",

  alternates: {
    canonical: "https://epfdesk.com/up-thrust-zones-epf-esic-compliance",
  },

  openGraph: {
    title:
      "UP EPF & ESIC Compliance 2025 | New Industrial Thrust Zones",
    description:
      "Statutory PF & ESIC compliance for UP’s emerging industrial corridors – Raebareli, Ambedkar Nagar and Kushinagar.",
    url: "https://epfdesk.com/up-thrust-zones-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "UP EPF ESIC Compliance 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "UP EPF & ESIC Compliance 2025 | New Industrial Zones",
    description:
      "PF & ESIC specialists for Uttar Pradesh’s MSME, textile and agro-processing corridors.",
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
      <Script id="up-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Lucknow, Uttar Pradesh">
            <meta name="geo.position" content="26.8467;80.9462">
            <meta name="ICBM" content="26.8467, 80.9462">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/up-thrust-zones-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/up-thrust-zones-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-up-thrust-zones"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/up-thrust-zones-epf-esic-compliance#organization",

          name:
            "UP EPF & ESIC Compliance for New Industrial Thrust Zones | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Raebareli, Ambedkar Nagar & Kushinagar",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/up-thrust-zones-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ STATE-CORRECT ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gomti Nagar",
            addressLocality: "Lucknow",
            addressRegion: "Uttar Pradesh",
            postalCode: "226010",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.8467,
            longitude: 80.9462,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
            { "@type": "AdministrativeArea", name: "Raebareli District" },
            { "@type": "AdministrativeArea", name: "Ambedkar Nagar District" },
            { "@type": "AdministrativeArea", name: "Kushinagar District" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Uttar Pradesh’s emerging industrial thrust zones. Services include EEC-2025 enrolment, New Wage Code implementation, ESIC applicability analysis and Principal Employer liability management for MSME, textile and agro-processing clusters.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "72",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataUPThrustZones} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsUPThrustZones} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqUPThrustZones} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-up-thrust-zones" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'up_thrust_zones',
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
                    event_label: 'up_thrust_zones',
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
                  event_label: 'up_thrust_zones',
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
