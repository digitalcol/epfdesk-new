import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataThaneDistrict,
  sectionsThaneDistrict,
  faqThaneDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Thane EPF & ESIC Compliance for Bhiwandi Warehouses, MIDC Factories & Principal Employer Liability | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Thane MIDC factories, PF liability for Bhiwandi logistics hubs, and ESIC compliance for warehouse and loading staff. Specialists in Mathadi Act and CLRA compliance.",

  alternates: {
    canonical: "https://epfdesk.com/thane-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Thane EPF & ESIC Compliance | Warehousing, MIDC Factories & Logistics",
    description:
      "PF & ESIC specialists for Thane Bhiwandi warehouses, MIDC factories and high-risk contract labour environments.",
    url: "https://epfdesk.com/thane-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Thane EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Thane EPF & ESIC Compliance | Bhiwandi Warehouses & MIDC",
    description:
      "High-risk PF & ESIC compliance and EPFO 7A defence for Thane logistics hubs and MIDC factories.",
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
      <Script id="thane-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Thane">
            <meta name="geo.position" content="19.2183;72.9781">
            <meta name="ICBM" content="19.2183, 72.9781">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/thane-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/thane-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-thane"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/thane-epf-esic-compliance#organization",

          name:
            "Thane EPF & ESIC Compliance – Warehousing, MIDC & Contract Labour | EPFDesk",

          alternateName:
            "EPFDesk – Thane PF & ESIC Consultants for Bhiwandi Warehouses & MIDC Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/thane-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Wagle Estate",
            addressLocality: "Thane",
            addressRegion: "Maharashtra",
            postalCode: "400604",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.2183,
            longitude: 72.9781,
          },

          areaServed: [
            { "@type": "City", name: "Thane" },
            { "@type": "Place", name: "Bhiwandi Warehouse Hub" },
            { "@type": "Place", name: "Ambernath MIDC" },
            { "@type": "Place", name: "Dombivli MIDC" },
            { "@type": "Place", name: "Badlapur MIDC" },
            { "@type": "Place", name: "Taloja MIDC" },
          ],

          description:
            "EPF & ESIC compliance services for Thane district warehousing, logistics and MIDC manufacturing units. Expertise includes PF liability for Bhiwandi warehouses, Mathadi Act coverage, CLRA compliance, contractor audits and EPFO 7A defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "96",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataThaneDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsThaneDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqThaneDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-thane" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'thane',
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
                    event_label: 'thane',
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
                  event_label: 'thane',
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
