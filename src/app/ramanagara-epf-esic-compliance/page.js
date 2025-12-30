import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRamanagaraDist,
  sectionsRamanagaraDist,
  faqRamanagara,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Ramanagara EPF & ESIC Compliance: Bidadi Auto Cluster, Sericulture & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Ramanagara — Bidadi Toyota & Coca-Cola contractors, silk sericulture units, Channapatna toy MSMEs, Harohalli industrial estates and hospitality employers. Specialists in piece-rate audits, NWC wage restructuring, contractor PF liability and Principal Employer exposure.",

  alternates: {
    canonical: "https://epfdesk.com/ramanagara-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Ramanagara EPF & ESIC Compliance | Auto • Sericulture • MSME Clusters",
    description:
      "PF & ESIC specialists for Bidadi auto OEM vendors, silk sericulture units, Channapatna toy makers and Harohalli MSMEs.",
    url: "https://epfdesk.com/ramanagara-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ramanagara PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ramanagara EPF & ESIC Compliance | Auto & Sericulture Clusters | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Bidadi auto vendors, silk sericulture workers, Harohalli MSMEs and resort staff.",
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
      <Script id="ramanagara-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Ramanagara">
            <meta name="geo.position" content="12.7969;77.3996">
            <meta name="ICBM" content="12.7969, 77.3996">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/ramanagara-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/ramanagara-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-ramanagara"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/ramanagara-epf-esic-compliance#organization",

          name: "EPFDesk – Ramanagara EPF & ESIC Compliance for Auto, Sericulture & MSMEs",

          alternateName:
            "PF & ESIC Consultant for Bidadi Auto Cluster, Silk Sericulture & Harohalli MSMEs",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/ramanagara-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Bangalore–Mysore Road",
            addressRegion: "Karnataka",
            postalCode: "562159",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 12.7969,
            longitude: 77.3996,
          },

          areaServed: [
            { "@type": "City", name: "Ramanagara" },
            { "@type": "City", name: "Bidadi" },
            { "@type": "City", name: "Channapatna" },
            { "@type": "City", name: "Kanakapura" },
            { "@type": "City", name: "Harohalli" },
          ],

          description:
            "EPF & ESIC compliance services for Ramanagara district covering Bidadi auto OEM vendors, silk sericulture and reeling units, Channapatna toy MSMEs, Harohalli industrial estates and hospitality employers. Expertise in piece-rate labour audits, contractor PF liability, NWC wage restructuring and Principal Employer exposure.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "71",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRamanagaraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRamanagaraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqRamanagara} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-ramanagara" strategy="afterInteractive">
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
