import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSJAN,
  sectionsSJAN,
  faqSJAN,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Rajasthan EPF & ESIC Compliance 2025: Sikar Education Hub, Ajmer Manufacturing & RO Ajmer Audits | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Sikar coaching institutes, Jhunjhunu industrial units, Ajmer MSMEs, Beawar cement plants and Nagaur mineral processors. RO Ajmer audit defence, PE liability and EEC-2025 handled.",

  alternates: {
    canonical:
      "https://epfdesk.com/sikar-jhunjhunu-ajmer-nagaur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Rajasthan EPF & ESIC Compliance | Sikar, Jhunjhunu, Ajmer & Nagaur",
    description:
      "PF & ESIC specialists for Rajasthan’s education hubs, cement plants and central industrial districts governed by RO Ajmer.",
    url:
      "https://epfdesk.com/sikar-jhunjhunu-ajmer-nagaur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sikar Ajmer EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Rajasthan EPF & ESIC Compliance | Education & Cement Hubs",
    description:
      "High-risk PF & ESIC compliance for Sikar education sector, Ajmer manufacturing, Beawar cement and Nagaur mineral belts.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META (PRIMARY = AJMER) ========= */}
      <Script id="ajmer-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-RJ">
            <meta name="geo.placename" content="Ajmer">
            <meta name="geo.position" content="26.4499;74.6399">
            <meta name="ICBM" content="26.4499, 74.6399">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/sikar-jhunjhunu-ajmer-nagaur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/sikar-jhunjhunu-ajmer-nagaur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-sjan"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/sikar-jhunjhunu-ajmer-nagaur-epf-esic-compliance#organization",

          name:
            "Rajasthan EPF & ESIC Compliance – Sikar, Jhunjhunu, Ajmer & Nagaur | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Central & Shekhawati Rajasthan",

          image: "https://epfdesk.com/images/logo.jpg",
          url:
            "https://epfdesk.com/sikar-jhunjhunu-ajmer-nagaur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-BASED ADDRESS (AJMER) */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Ajmer",
            addressRegion: "Rajasthan",
            postalCode: "305001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.4499,
            longitude: 74.6399,
          },

          areaServed: [
            { "@type": "City", name: "Ajmer" },
            { "@type": "City", name: "Sikar" },
            { "@type": "City", name: "Jhunjhunu" },
            { "@type": "City", name: "Nagaur" },
            { "@type": "Place", name: "Beawar Cement Cluster" },
            { "@type": "AdministrativeArea", name: "Shekhawati Region" },
          ],

          description:
            "EPF & ESIC compliance services for Rajasthan’s education hubs, cement plants, MSMEs and mineral belts. Expertise includes RO Ajmer audit defence, PF 7A proceedings, Principal Employer liability, EEC-2025 amnesty and wage code restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "81",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSJAN} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSJAN} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSJAN} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-sjan" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'sikar-ajmer-nagaur',
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
                    event_label: 'sikar-ajmer-nagaur',
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
                  event_label: 'sikar-ajmer-nagaur',
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
