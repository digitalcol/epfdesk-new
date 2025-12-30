import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSundargarhDistrict,
  sectionsSundargarhDistrict,
  faqSundargarhDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Rourkela EPF & ESIC Compliance: SAIL Vendor Audits & Expert Consultants in Sundargarh | EPFDesk",

  description:
    "Specialized EPF & ESIC compliance for Rourkela Steel Plant (SAIL) contractors, Kalunga MSMEs and Rajgangpur cement units. Coverage includes RO Rourkela audits, EEC-2025 and Principal Employer liability.",

  alternates: {
    canonical: "https://epfdesk.com/sundargarh-rourkela-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Rourkela EPF & ESIC Compliance | SAIL & Heavy Industry Hub",
    description:
      "PF & ESIC specialists for SAIL vendors, cement plants and MSMEs in Sundargarh district governed by RO Rourkela.",
    url: "https://epfdesk.com/sundargarh-rourkela-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Rourkela EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Rourkela EPF & ESIC Consultants | Sundargarh District",
    description:
      "High-risk PF & ESIC compliance for SAIL vendors and heavy industries in Rourkela.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META (ROURKELA) ========= */}
      <Script id="rourkela-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-OD">
            <meta name="geo.placename" content="Rourkela">
            <meta name="geo.position" content="22.2604;84.8536">
            <meta name="ICBM" content="22.2604, 84.8536">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/sundargarh-rourkela-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/sundargarh-rourkela-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-rourkela"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/sundargarh-rourkela-epf-esic-compliance#organization",

          name:
            "Rourkela EPF & ESIC Compliance – SAIL Vendors & Heavy Industry | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Rourkela Steel Plant (SAIL) & Sundargarh MSMEs",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/sundargarh-rourkela-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-BASED ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Township",
            addressLocality: "Rourkela",
            addressRegion: "Odisha",
            postalCode: "769004",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.2604,
            longitude: 84.8536,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Sundargarh District" },
            { "@type": "Place", name: "Rourkela Steel Plant (SAIL)" },
            { "@type": "Place", name: "Kalunga Industrial Estate" },
            { "@type": "Place", name: "Rajgangpur Cement Cluster" },
          ],

          description:
            "EPF & ESIC compliance services for Rourkela Steel Plant (SAIL) contractors, Kalunga MSMEs, Rajgangpur cement units and heavy industries across Sundargarh district. Expertise includes PF wage audits, ESIC applicability, RO Rourkela inspections, 7A proceedings and Principal Employer liability.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "91",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSundargarhDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSundargarhDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSundargarhDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-rourkela" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'rourkela',
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
                    event_label: 'rourkela',
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
                  event_label: 'rourkela',
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
