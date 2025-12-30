import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataSuratDist, sectionsSuratDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Surat EPF & ESIC Consultant | Sachin GIDC, Hazira Port & Diamond Industry | NWC 2025 Compliance – EPFDesk",

  description:
    "EPFDesk delivers EPF & ESIC compliance for Surat’s textile & powerloom units, diamond processing hubs, Pandesara, Sachin GIDC and Hazira Port industries. Expertise includes NWC 2025 payroll restructuring, contractor audits, PF/ESI registration and workforce formalization.",

  alternates: {
    canonical: "https://epfdesk.com/surat-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Surat EPF & ESIC Compliance | Textile, Diamond & Port Industries",
    description:
      "PF & ESIC specialists for Surat textile & powerloom units, diamond processing clusters and Hazira Port industries.",
    url: "https://epfdesk.com/surat-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Surat EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Surat EPF & ESIC Consultant | Textile, Diamond & Port Compliance",
    description:
      "NWC 2025–ready EPF & ESIC compliance for Surat’s textile, diamond and Hazira Port industries.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META (SURAT) ========= */}
      <Script id="surat-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-GJ">
            <meta name="geo.placename" content="Surat">
            <meta name="geo.position" content="21.1702;72.8311">
            <meta name="ICBM" content="21.1702, 72.8311">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/surat-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/surat-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-surat"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/surat-epf-esic-compliance#organization",

          name:
            "Surat EPF & ESIC Compliance – Textile, Diamond & Port Industries | EPFDesk",

          alternateName:
            "EPFDesk – Surat Textile, Diamond & Hazira Port Compliance Experts",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/surat-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-BASED ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ring Road",
            addressLocality: "Surat",
            addressRegion: "Gujarat",
            postalCode: "395002",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.1702,
            longitude: 72.8311,
          },

          areaServed: [
            { "@type": "City", name: "Surat" },
            { "@type": "Place", name: "Sachin GIDC" },
            { "@type": "Place", name: "Pandesara Industrial Estate" },
            { "@type": "Place", name: "Hazira Port" },
            { "@type": "Place", name: "Diamond Processing Cluster" },
          ],

          description:
            "EPF & ESIC compliance services for Surat’s textile and powerloom units, diamond polishing and processing clusters, Pandesara and Sachin GIDC industries, and Hazira Port contractors. Coverage includes NWC 2025 payroll restructuring, PF/ESI audits, contractor compliance and Principal Employer liability.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSuratDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSuratDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-surat" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'surat',
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
                    event_label: 'surat',
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
                  event_label: 'surat',
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
