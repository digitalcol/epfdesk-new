import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataUttaraKannadaDist,
  sectionsUttaraKannadaDist,
  faqUttaraKannada,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Uttara Kannada EPF & ESIC Compliance for Kaiga Power, Dandeli Paper Mill & Naval Contractors | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Uttara Kannada — Kaiga Nuclear Power contractors, INS Kadamba Naval Base vendors, Dandeli Paper Mill units, and Arecanut Plantation employers.",

  alternates: {
    canonical: "https://epfdesk.com/uttara-kannada-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Uttara Kannada EPF & ESIC Compliance | Kaiga, Naval Base & Paper Mill",
    description:
      "PF & ESIC specialists for Kaiga Power Station contractors, INS Kadamba Naval Base vendors, Dandeli Paper Mill and plantation employers.",
    url: "https://epfdesk.com/uttara-kannada-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Uttara Kannada EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Uttara Kannada EPF & ESIC Compliance | Kaiga • Naval Base • Paper Mill",
    description:
      "PF & ESIC compliance experts for nuclear, naval, paper mill and plantation sectors in Uttara Kannada.",
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
      <Script id="uttara-kannada-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Karwar, Uttara Kannada">
            <meta name="geo.position" content="14.8130;74.1290">
            <meta name="ICBM" content="14.8130, 74.1290">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/uttara-kannada-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/uttara-kannada-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-uttara-kannada"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/uttara-kannada-epf-esic-compliance#organization",

          name: "Uttara Kannada EPF & ESIC Compliance for Kaiga, Naval Base & Heavy Industry | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Kaiga Nuclear, Naval Base & Dandeli Industry",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/uttara-kannada-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "MG Road",
            addressLocality: "Karwar",
            addressRegion: "Karnataka",
            postalCode: "581301",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 14.813,
            longitude: 74.129,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Uttara Kannada District" },
            { "@type": "Place", name: "Kaiga Nuclear Power Station" },
            { "@type": "Place", name: "INS Kadamba Naval Base" },
            { "@type": "Place", name: "Dandeli Paper Mill Zone" },
            { "@type": "Place", name: "Arecanut Plantation Belt" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Uttara Kannada’s high-risk employment zones including Kaiga Nuclear Power Station contractors, Naval Base vendors, Dandeli paper manufacturing units and plantation employers.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "71",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataUttaraKannadaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsUttaraKannadaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqUttaraKannada} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-uttara-kannada" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'uttara_kannada',
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
                    event_label: 'uttara_kannada',
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
                  event_label: 'uttara_kannada',
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
