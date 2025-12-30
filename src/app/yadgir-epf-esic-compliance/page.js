import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataYadgirDist,
  sectionsYadgirDist,
  faqYadgir,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Yadgir EPF & ESIC Compliance for Agro-Processing, Textiles, Cement Ancillaries & MSMEs | EPFDesk",

  description:
    "Expert PF & ESIC compliance support for Yadgir Dal/Cotton Mills, seasonal agro-labour, textile units, cement ancillary MSMEs and KIADB units. Specialists in PF for piece-rate workers and seasonal employment.",

  alternates: {
    canonical: "https://epfdesk.com/yadgir-epf-esic-compliance",
  },

  openGraph: {
    title: "Yadgir EPF & ESIC Compliance | Agro-Processing, Textiles & MSMEs",
    description:
      "PF & ESIC specialists for Dal Mills, Cotton Ginning, Textiles, Cement Ancillaries and MSMEs in Yadgir.",
    url: "https://epfdesk.com/yadgir-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Yadgir EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yadgir EPF & ESIC Compliance | Agro-Processing & MSMEs | EPFDesk",
    description:
      "PF/ESIC compliance experts for seasonal agro-mills, textile workers and MSME factories in Yadgir.",
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
      <Script id="yadgir-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Yadgir, Karnataka">
            <meta name="geo.position" content="16.7702;77.1376">
            <meta name="ICBM" content="16.7702, 77.1376">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/yadgir-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/yadgir-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-yadgir"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/yadgir-epf-esic-compliance#organization",

          name: "Yadgir EPF & ESIC Compliance | Agro-Processing, Textiles & MSMEs | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Dal Mills, Cotton Ginning & MSMEs in Yadgir",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/yadgir-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Shorapur Road",
            addressLocality: "Yadgir",
            addressRegion: "Karnataka",
            postalCode: "585202",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 16.7702,
            longitude: 77.1376,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Yadgir District" },
            { "@type": "City", name: "Yadgir" },
            { "@type": "City", name: "Gurmitkal" },
            { "@type": "City", name: "Surpur" },
            { "@type": "City", name: "Shahapur" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Yadgir’s dal mills, cotton ginning units, textile factories, cement ancillary MSMEs and seasonal agro-processing employers. Expertise in piece-rate PF structuring, ESIC applicability and audit defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "63",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataYadgirDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsYadgirDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqYadgir} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-yadgir" strategy="afterInteractive">
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
