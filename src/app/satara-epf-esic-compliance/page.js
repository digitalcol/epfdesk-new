import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSataraDistrict,
  sectionsSataraDistrict,
  faqSataraDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Satara EPF & ESIC Compliance for Sugar Mills, Karad MIDC & Seasonal Labour | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Satara and Karad sugar factories, PF liability on Retention Allowance, seasonal harvest workers and mandatory ESIC compliance for MIDC MSMEs.",

  alternates: {
    canonical: "https://epfdesk.com/satara-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Satara EPF & ESIC Compliance | Sugar Mills & MIDC MSMEs",
    description:
      "PF & ESIC specialists for Satara sugar industry, seasonal labour and Karad–Koregaon MIDC factories.",
    url: "https://epfdesk.com/satara-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Satara EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Satara EPF & ESIC Compliance | Sugar & MIDC Sector",
    description:
      "High-risk EPF & ESIC compliance for Satara sugar mills, retention allowance audits and MIDC MSMEs.",
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
      <Script id="satara-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Satara">
            <meta name="geo.position" content="17.6805;74.0183">
            <meta name="ICBM" content="17.6805, 74.0183">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/satara-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/satara-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-satara"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/satara-epf-esic-compliance#organization",

          name:
            "Satara EPF & ESIC Compliance – Sugar Mills & MIDC Industries | EPFDesk",

          alternateName:
            "EPFDesk – Satara PF & ESIC Consultant for Sugar Factories & Karad MIDC",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/satara-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Karad MIDC Industrial Area",
            addressLocality: "Satara",
            addressRegion: "Maharashtra",
            postalCode: "415110",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.6805,
            longitude: 74.0183,
          },

          areaServed: [
            { "@type": "City", name: "Satara" },
            {
              "@type": "AdministrativeArea",
              name: "Satara District",
            },
            {
              "@type": "AdministrativeArea",
              name: "Western Maharashtra",
            },
          ],

          description:
            "EPF & ESIC compliance services for Satara sugar mills, PF applicability on Retention Allowance, seasonal labour engagement, and statutory ESIC coverage for Karad and Koregaon MIDC units. Expertise includes Principal Employer liability management and RO Solapur audit handling.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "66",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSataraDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSataraDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSataraDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-satara" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'satara',
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
                    event_label: 'satara',
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
                  event_label: 'satara',
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
