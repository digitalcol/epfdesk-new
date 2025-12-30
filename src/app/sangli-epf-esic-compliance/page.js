import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSangliDistrict,
  sectionsSangliDistrict,
  faqSangliDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Sangli EPF & ESIC Compliance for Sugar Mills, Kupwad Foundries & Agro Processing | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Sangli sugar factories, PF liability on Retention Allowance, mandatory ESIC for Kupwad foundry and casting units, and turmeric processing compliance. Specialists in PE liability and RO Solapur liaison.",

  alternates: {
    canonical: "https://epfdesk.com/sangli-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Sangli EPF & ESIC Compliance | Sugar Mills & Foundry Sector",
    description:
      "PF & ESIC specialists for Sangli sugar factories, Kupwad foundries and agro-processing industries.",
    url: "https://epfdesk.com/sangli-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sangli EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sangli EPF & ESIC Compliance | Sugar & Foundry Industry",
    description:
      "High-risk EPF & ESIC compliance for Sangli sugar mills, retention allowance audits and Kupwad foundry units.",
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
      <Script id="sangli-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Sangli">
            <meta name="geo.position" content="16.8524;74.5815">
            <meta name="ICBM" content="16.8524, 74.5815">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/sangli-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/sangli-epf-esic-compliance">
            
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-sangli"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/sangli-epf-esic-compliance#organization",

          name:
            "Sangli EPF & ESIC Compliance – Sugar Mills & Foundry Industry | EPFDesk",

          alternateName:
            "EPFDesk – Sangli PF & ESIC Consultant for Sugar Factories & Kupwad Foundries",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/sangli-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kupwad MIDC Industrial Area",
            addressLocality: "Sangli",
            addressRegion: "Maharashtra",
            postalCode: "416416",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 16.8524,
            longitude: 74.5815,
          },

          areaServed: [
            { "@type": "City", name: "Sangli" },
            {
              "@type": "AdministrativeArea",
              name: "Sangli District",
            },
            {
              "@type": "AdministrativeArea",
              name: "Western Maharashtra",
            },
          ],

          description:
            "EPF & ESIC compliance services for Sangli sugar mills, PF applicability on Retention Allowance, hazardous ESIC coverage for Kupwad foundries, and agro-processing units including turmeric processing. Expertise includes Principal Employer liability management and RO Solapur enforcement handling.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "64",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSangliDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSangliDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSangliDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-sangli" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'sangli',
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
                    event_label: 'sangli',
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
                  event_label: 'sangli',
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
