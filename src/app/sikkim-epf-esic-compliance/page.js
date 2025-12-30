import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSikkim,
  sectionsSikkim,
  faqSikkim,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Sikkim EPF & ESIC Compliance: Pharmaceutical Units, Industrial Estates & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance for Sikkim pharmaceutical manufacturers, Rangpo & Mamring industrial estates, contract manufacturing MSMEs and logistics-linked employers. SRO Gangtok audit defence, wage code compliance and PE liability handled.",

  alternates: {
    canonical: "https://epfdesk.com/sikkim-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Sikkim EPF & ESIC Compliance | Pharmaceutical & Industrial Hub",
    description:
      "PF & ESIC specialists for Sikkim pharmaceutical manufacturers, industrial estates and MSMEs governed by SRO Gangtok.",
    url: "https://epfdesk.com/sikkim-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sikkim EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sikkim EPF & ESIC Compliance | Pharmaceutical Hub",
    description:
      "Expert PF & ESIC compliance for Sikkim pharmaceutical units and industrial estates.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META (GANGTOK) ========= */}
      <Script id="sikkim-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-SK">
            <meta name="geo.placename" content="Gangtok">
            <meta name="geo.position" content="27.3389;88.6065">
            <meta name="ICBM" content="27.3389, 88.6065">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/sikkim-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/sikkim-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-sikkim"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/sikkim-epf-esic-compliance#organization",

          name:
            "Sikkim EPF & ESIC Compliance – Pharmaceutical & Industrial Estates | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Sikkim Pharmaceutical & MSME Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/sikkim-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-BASED ADDRESS (GANGTOK) */
          address: {
            "@type": "PostalAddress",
            streetAddress: "MG Marg",
            addressLocality: "Gangtok",
            addressRegion: "Sikkim",
            postalCode: "737101",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 27.3389,
            longitude: 88.6065,
          },

          areaServed: [
            { "@type": "City", name: "Gangtok" },
            { "@type": "Place", name: "Rangpo Industrial Estate" },
            { "@type": "Place", name: "Mamring Industrial Area" },
            { "@type": "Place", name: "Majitar" },
            { "@type": "Place", name: "Melli" },
            { "@type": "Place", name: "Jorethang" },
            { "@type": "AdministrativeArea", name: "East Sikkim" },
            { "@type": "AdministrativeArea", name: "South Sikkim" },
          ],

          description:
            "EPF & ESIC compliance services for Sikkim pharmaceutical manufacturers, industrial estates and MSMEs. Expertise includes SRO Gangtok audits, New Wage Code 50% rule implementation, contractor PF audits, PE liability defence and statutory workforce management.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "42",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSikkim} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSikkim} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSikkim} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-sikkim" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'sikkim',
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
                    event_label: 'sikkim',
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
                  event_label: 'sikkim',
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
