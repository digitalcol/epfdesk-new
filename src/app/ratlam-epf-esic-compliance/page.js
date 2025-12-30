import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRatlamDistrict,
  sectionsRatlamDistrict,
  faqRatlamDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Ratlam EPF & ESIC Compliance: DMIC Logistics, Pharma Hazard & RO Ujjain Audit Defense 2025 | EPFDesk",

  description:
    "Expert EPF & ESIC advisory for Ratlam pharma MNCs, logistics hubs and chemical units. Navigate RO Ujjain audits, EEC-2025 amnesty and New Labour Code wage compliance in MP’s strategic rail corridor.",

  alternates: {
    canonical: "https://epfdesk.com/ratlam-epf-esic-compliance",
  },

  openGraph: {
    title: "Ratlam EPF & ESIC Compliance | DMIC Logistics & Pharma Hub",
    description:
      "PF & ESIC specialists for Ratlam pharma, logistics, chemical and agro-processing units governed by RO Ujjain.",
    url: "https://epfdesk.com/ratlam-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ratlam EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ratlam EPF & ESIC Compliance | Logistics & Pharma Hub | EPFDesk",
    description:
      "High-risk PF & ESIC compliance for Ratlam DMIC logistics hubs, pharma and chemical units.",
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
      <Script id="ratlam-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MP">
            <meta name="geo.placename" content="Ratlam">
            <meta name="geo.position" content="23.3315;75.0367">
            <meta name="ICBM" content="23.3315, 75.0367">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/ratlam-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/ratlam-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-ratlam"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/ratlam-epf-esic-compliance#organization",

          name: "EPFDesk – Ratlam EPF & ESIC Compliance for Pharma & Logistics",

          alternateName:
            "PF & ESIC Consultant for Ratlam DMIC Logistics & Pharma Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/ratlam-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Station Road",
            addressRegion: "Madhya Pradesh",
            postalCode: "457001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.3315,
            longitude: 75.0367,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Ratlam District" },
            { "@type": "Place", name: "Industrial Area Namli" },
            { "@type": "Place", name: "Ratlam Dosigaon Industrial Area" },
            { "@type": "Place", name: "DMIC Multi-Modal Logistics Hub Ratlam" },
            { "@type": "City", name: "Jaora" },
          ],

          description:
            "EPF & ESIC compliance services for Ratlam’s DMIC logistics corridor, pharmaceutical manufacturing units, chemical plants and agro-processing industries governed by RO Ujjain. Expertise includes EPF 7A defense, ESIC hazardous process compliance, EEC-2025 amnesty and New Labour Code wage restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "66",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRatlamDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRatlamDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqRatlamDistrict} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-ratlam" strategy="afterInteractive">
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
