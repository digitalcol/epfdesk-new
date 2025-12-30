import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSonbhadraDistrict,
  sectionsSonbhadraDistrict,
  faqSonbhadraDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Sonbhadra EPF & ESIC Compliance: Power & Mining PE Liability, Stone Crusher Risk & NTPC Contractor Audits | EPFDesk",

  description:
    "Specialized EPF & ESIC compliance for Sonbhadra mining units, NTPC/NCL power contractors and stone crushers. Coverage includes hazardous industry ESIC, RO Varanasi audits, 7A proceedings and Principal Employer liability.",

  alternates: {
    canonical: "https://epfdesk.com/sonbhadra-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Sonbhadra EPF & ESIC Compliance | Power, Mining & Heavy Industry",
    description:
      "High-risk PF & ESIC compliance for Sonbhadra power plants, mining contractors and stone crushing units.",
    url: "https://epfdesk.com/sonbhadra-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sonbhadra EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sonbhadra EPF & ESIC Compliance | Mining & Power Sector",
    description:
      "PF & ESIC audit defence for Sonbhadra mining, power and stone crusher industries.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META (SONBHDRA) ========= */}
      <Script id="sonbhadra-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Sonbhadra">
            <meta name="geo.position" content="24.6886;83.0683">
            <meta name="ICBM" content="24.6886, 83.0683">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/sonbhadra-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/sonbhadra-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-sonbhadra"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/sonbhadra-epf-esic-compliance#organization",

          name:
            "Sonbhadra EPF & ESIC Compliance – Mining, Power & Hazardous Industries | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for NTPC, NCL & Mining Contractors in Sonbhadra",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/sonbhadra-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-BASED ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shaktinagar Industrial Area",
            addressLocality: "Sonbhadra",
            addressRegion: "Uttar Pradesh",
            postalCode: "231222",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 24.6886,
            longitude: 83.0683,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Sonbhadra District" },
            { "@type": "Place", name: "Shaktinagar" },
            { "@type": "Place", name: "Anpara" },
            { "@type": "Place", name: "Obra" },
            { "@type": "Place", name: "Renukoot" },
          ],

          description:
            "EPF & ESIC compliance services for Sonbhadra mining operations, NTPC/NCL power plants, stone crushers and hazardous industries. Expertise includes PF wage audits, ESIC applicability, RO Varanasi inspections, 7A proceedings and Principal Employer liability mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "66",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSonbhadraDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSonbhadraDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSonbhadraDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-sonbhadra" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'sonbhadra',
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
                    event_label: 'sonbhadra',
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
                  event_label: 'sonbhadra',
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
