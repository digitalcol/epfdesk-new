import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataTumakuruDist,
  sectionsTumakuruDist,
  faqTumakuru,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Tumakuru EPF & ESIC Compliance | VNA Industrial Area, Cement & Auto Component Factories | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Tumakuru covering VNA Industrial Area, cement plants, auto component factories and CBIC corridor units. NWC 2025 payroll restructuring, ESIC accident claims, contractor audits and Principal Employer liability handled.",

  alternates: {
    canonical: "https://epfdesk.com/tumakuru-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Tumakuru EPF & ESIC Compliance | VNA Industrial Area & Manufacturing Hub",
    description:
      "PF & ESIC specialists for Tumakuru manufacturing units including VNA Industrial Area, cement factories and auto component clusters.",
    url: "https://epfdesk.com/tumakuru-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Tumakuru EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tumakuru EPF & ESIC Compliance | VNA Industrial Area & Factories",
    description:
      "Expert PF & ESIC compliance for Tumakuru’s cement plants, auto component units and CBIC industrial corridor.",
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
      <Script id="tumakuru-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Tumakuru">
            <meta name="geo.position" content="13.3409;77.1010">
            <meta name="ICBM" content="13.3409, 77.1010">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/tumakuru-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/tumakuru-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-tumakuru"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/tumakuru-epf-esic-compliance#organization",

          name:
            "Tumakuru EPF & ESIC Compliance – VNA Industrial Area & Manufacturing | EPFDesk",

          alternateName:
            "EPFDesk – Tumakuru PF ESIC Consultants for Cement, Auto & CBIC Industries",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/tumakuru-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "B.H. Road",
            addressLocality: "Tumakuru",
            addressRegion: "Karnataka",
            postalCode: "572101",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.3409,
            longitude: 77.1010,
          },

          areaServed: [
            { "@type": "City", name: "Tumakuru" },
            { "@type": "Place", name: "VNA Industrial Area" },
            { "@type": "Place", name: "KIADB Industrial Areas" },
            { "@type": "Place", name: "CBIC Industrial Corridor" },
            { "@type": "Place", name: "Cement Manufacturing Units" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Tumakuru’s industrial ecosystem including VNA Industrial Area, cement factories, auto component units and CBIC corridor establishments. Services include New Wage Code 2025 payroll restructuring, ESIC accident claim handling, contractor audits and Principal Employer liability mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "53",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTumakuruDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTumakuruDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqTumakuru} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tumakuru" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'tumakuru',
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
                    event_label: 'tumakuru',
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
                  event_label: 'tumakuru',
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
