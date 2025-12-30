import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSolapurDistrict,
  sectionsSolapurDistrict,
  faqSolapurDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Solapur EPF & ESIC Compliance for Powerloom, Textile Mills & Sugar Contractors | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Solapur powerloom units, textile mills and sugar factory contractors. Coverage includes piece-rate PF liability, ESIC applicability for hazardous units, RO Solapur audits and Principal Employer exposure.",

  alternates: {
    canonical: "https://epfdesk.com/solapur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Solapur EPF & ESIC Compliance | Powerloom & Textile Industry",
    description:
      "High-risk PF & ESIC compliance for Solapur powerloom, textile processing and sugar industries.",
    url: "https://epfdesk.com/solapur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Solapur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Solapur EPF & ESIC Compliance | Powerloom & Textile Sector",
    description:
      "PF & ESIC audit defence for Solapur powerloom units, textile mills and sugar contractors.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META (SOLAPUR) ========= */}
      <Script id="solapur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Solapur">
            <meta name="geo.position" content="17.6599;75.9064">
            <meta name="ICBM" content="17.6599, 75.9064">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/solapur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/solapur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-solapur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/solapur-epf-esic-compliance#organization",

          name:
            "Solapur EPF & ESIC Compliance – Powerloom, Textile & Sugar Industry | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Solapur Powerloom & Textile Sector",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/solapur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ CITY-BASED ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "MIDC Akkalkot Road",
            addressLocality: "Solapur",
            addressRegion: "Maharashtra",
            postalCode: "413006",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.6599,
            longitude: 75.9064,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Solapur District" },
            { "@type": "City", name: "Solapur" },
            { "@type": "Place", name: "Powerloom Clusters" },
            { "@type": "Place", name: "Textile Processing Units" },
            { "@type": "Place", name: "Sugar Factories" },
          ],

          description:
            "EPF & ESIC compliance services for Solapur powerloom and textile industries, sugar factory contractors and piece-rate workforce. Expertise includes PF wage audits, hazardous industry ESIC coverage, RO Solapur inspections and Principal Employer liability mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "71",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSolapurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSolapurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSolapurDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-solapur" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'solapur',
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
                    event_label: 'solapur',
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
                  event_label: 'solapur',
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
