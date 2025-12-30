import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataShivamoggaDist,
  sectionsShivamoggaDist,
  faqShivamogga,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Shivamogga EPF & ESIC Compliance for Foundries, Rice Mills, Arecanut Processing & VISL Contractors | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Shivamogga foundries, VISL/MPM contractors, rice mills and arecanut processing units. Specialists in hazardous industry ESIC, PF wage audits, contractor liability and NWC 2025 compliance.",

  alternates: {
    canonical: "https://epfdesk.com/shivamogga-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Shivamogga EPF & ESIC Compliance | Foundries, Agro-Processing & VISL",
    description:
      "PF & ESIC specialists for Shivamogga foundries, heavy engineering, rice mills and VISL-linked contract labour.",
    url: "https://epfdesk.com/shivamogga-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Shivamogga EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Shivamogga EPF & ESIC Compliance | Foundries & Agro-Processing",
    description:
      "High-risk PF & ESIC compliance for Shivamogga foundries, VISL contractors and agro-processing units.",
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
      <Script id="shivamogga-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Shivamogga">
            <meta name="geo.position" content="13.9299;75.5681">
            <meta name="ICBM" content="13.9299, 75.5681">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/shivamogga-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/shivamogga-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-shivamogga"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/shivamogga-epf-esic-compliance#organization",

          name:
            "Shivamogga EPF & ESIC Compliance – Foundries, VISL & Agro-Processing | EPFDesk",

          alternateName:
            "EPFDesk – Shivamogga PF & ESIC Consultants for Foundries & VISL Contractors",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/shivamogga-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Machenahalli Industrial Area",
            addressLocality: "Shivamogga",
            addressRegion: "Karnataka",
            postalCode: "577222",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.9299,
            longitude: 75.5681,
          },

          areaServed: [
            { "@type": "City", name: "Shivamogga" },
            {
              "@type": "AdministrativeArea",
              name: "Shivamogga District",
            },
            {
              "@type": "AdministrativeArea",
              name: "Malnad Karnataka",
            },
          ],

          description:
            "EPF & ESIC compliance services for Shivamogga foundries, heavy engineering units, VISL/MPM contractors, rice mills and arecanut processing clusters. Expertise includes hazardous industry ESIC coverage, PF wage audits, contractor liability mitigation and NWC 2025 compliance.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "36",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataShivamoggaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsShivamoggaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqShivamogga} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-shivamogga" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'shivamogga',
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
                    event_label: 'shivamogga',
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
                  event_label: 'shivamogga',
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
