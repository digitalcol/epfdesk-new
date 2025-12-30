import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataSangareddyDist,
  sectionsSangareddyDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Sangareddy EPF & ESIC Compliance Expert: NWC 2025 Payroll for IDA Bollaram, Pashamylaram & Patancheru | EPFDesk",

  description:
    "EPFDesk delivers EPF & ESIC compliance solutions for Sangareddy’s industrial zones including IDA Bollaram, Pashamylaram and Patancheru. Services include NWC 2025 payroll restructuring, PF/ESI registration, contractor audits and statutory compliance.",

  alternates: {
    canonical: "https://epfdesk.com/sangareddy-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Sangareddy EPF & ESIC Compliance | IDA Bollaram, Pashamylaram & Patancheru",
    description:
      "PF & ESIC compliance for Sangareddy manufacturing, chemical and pharma hubs.",
    url: "https://epfdesk.com/sangareddy-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sangareddy EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sangareddy EPF & ESIC Compliance | Manufacturing & Pharma Zones",
    description:
      "PF & ESIC compliance for IDA Bollaram, Pashamylaram and Patancheru.",
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
      <Script id="sangareddy-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TS">
            <meta name="geo.placename" content="Sangareddy">
            <meta name="geo.position" content="17.6280;78.0867">
            <meta name="ICBM" content="17.6280, 78.0867">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/sangareddy-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/sangareddy-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-sangareddy"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/sangareddy-epf-esic-compliance#organization",

          name:
            "Sangareddy EPF & ESIC Compliance – Manufacturing & Pharma Zones | EPFDesk",

          alternateName:
            "EPFDesk – Sangareddy EPF & ESIC Compliance for IDA Bollaram, Pashamylaram & Patancheru",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/sangareddy-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "IDA Bollaram Road",
            addressLocality: "Sangareddy",
            addressRegion: "Telangana",
            postalCode: "502001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.628,
            longitude: 78.0867,
          },

          areaServed: [
            { "@type": "City", name: "Sangareddy" },
            { "@type": "Place", name: "IDA Bollaram" },
            { "@type": "Place", name: "Pashamylaram" },
            { "@type": "Place", name: "Patancheru" },
            {
              "@type": "AdministrativeArea",
              name: "Sangareddy District",
            },
          ],

          description:
            "EPF & ESIC compliance services for Sangareddy’s manufacturing, chemical and pharma clusters. Coverage includes NWC 2025 payroll restructuring, contractor PF audits, ESIC applicability mapping, statutory filings and inspection readiness.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSangareddyDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSangareddyDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-sangareddy" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'sangareddy',
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
                    event_label: 'sangareddy',
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
                  event_label: 'sangareddy',
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
