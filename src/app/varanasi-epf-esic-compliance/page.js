import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataVaranasiDist,
  sectionsVaranasiDist,
  faqVaranasi,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Varanasi EPF & ESIC Compliance: Handloom Piece-Rate Evasion, Tourism PE Liability & Service Sector Audits | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Varanasi silk merchants, handloom exporters, hotels and hospitals. Experts in RO Varanasi liaison, piece-rate wage audits and Principal Employer liability control.",

  alternates: {
    canonical: "https://epfdesk.com/varanasi-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Varanasi EPF & ESIC Compliance | Handloom, Tourism & Service Sector",
    description:
      "PF & ESIC specialists for Varanasi handloom exporters, hotels, hospitals and educational institutions.",
    url: "https://epfdesk.com/varanasi-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Varanasi EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Varanasi EPF & ESIC Compliance | Handloom & Tourism Risk | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Varanasi silk, handloom and tourism sectors.",
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
      <Script id="varanasi-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Varanasi, Uttar Pradesh">
            <meta name="geo.position" content="25.3176;82.9739">
            <meta name="ICBM" content="25.3176, 82.9739">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/varanasi-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/varanasi-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-varanasi"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/varanasi-epf-esic-compliance#organization",

          name: "Varanasi EPF & ESIC Compliance for Handloom, Tourism & Service Sector | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Handloom Exporters & Hotels in Varanasi",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/varanasi-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* 🔒 HQ ADDRESS – SAME AS ALL OTHER PAGES */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sigra–Mahmoorganj Road",
            addressLocality: "Varanasi",
            addressRegion: "Uttar Pradesh",
            postalCode: "221010",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.3176,
            longitude: 82.9739,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Varanasi District" },
            { "@type": "Place", name: "Ramnagar" },
            { "@type": "Place", name: "Lanka" },
            { "@type": "Place", name: "Sigra" },
            { "@type": "Place", name: "Cantt Area" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Varanasi handloom and silk exporters, hotels, hospitals and educational institutions. Specialized in piece-rate wage suppression audits, Principal Employer liability under CLRA, ESIC service-sector enforcement and RO Varanasi proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "88",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataVaranasiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVaranasiDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqVaranasi} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-varanasi" strategy="afterInteractive">
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
