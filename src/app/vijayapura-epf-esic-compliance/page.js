import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataVijayapuraDist,
  sectionsVijayapuraDist,
  faqVijayapura,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Vijayapura EPF & ESIC Compliance for Sugar Mills, Grape Processing & Educational Trusts | EPFDesk",

  description:
    "EPF & ESIC compliance for Vijayapura sugar mills, grape and pomegranate processing units, wineries, dal mills and private educational institutions. Specialists in seasonal labour PF, ESIC for colleges and wage audit defence.",

  alternates: {
    canonical: "https://epfdesk.com/vijayapura-epf-esic-compliance",
  },

  openGraph: {
    title: "Vijayapura EPF & ESIC Compliance | Sugar Mills & Agro Processing",
    description:
      "PF & ESIC experts for Vijayapura’s sugar mills, grape processing units and private educational institutions.",
    url: "https://epfdesk.com/vijayapura-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vijayapura EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vijayapura EPF & ESIC Compliance | Sugar & Education Sector",
    description:
      "PF/ESIC compliance for Vijayapura sugar mills, agro processors and educational trusts.",
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
      <Script id="vijayapura-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Vijayapura, Karnataka">
            <meta name="geo.position" content="16.8302;75.7100">
            <meta name="ICBM" content="16.8302, 75.7100">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/vijayapura-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/vijayapura-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-vijayapura"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/vijayapura-epf-esic-compliance#organization",

          name: "Vijayapura EPF & ESIC Compliance for Sugar Mills, Agro Processing & Educational Trusts | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Sugar Mills & Education in Vijayapura",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/vijayapura-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Solapur Road",
            addressLocality: "Vijayapura",
            addressRegion: "Karnataka",
            postalCode: "586101",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 16.8302,
            longitude: 75.71,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Vijayapura District" },
            { "@type": "Place", name: "Aliabad Industrial Estate" },
            { "@type": "Place", name: "Mahalbagayat Industrial Area" },
            { "@type": "Place", name: "Sugar Mills Belt" },
            { "@type": "Place", name: "Grape & Pomegranate Processing Units" },
          ],

          description:
            "EPF & ESIC compliance services for Vijayapura sugar mills, grape and pomegranate processing units, wineries, dal mills and private educational institutions. Expertise includes seasonal labour PF coverage, ESIC applicability for colleges and hospitals, wage audit defence and statutory onboarding.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "53",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataVijayapuraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVijayapuraDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqVijayapura} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-vijayapura" strategy="afterInteractive">
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
