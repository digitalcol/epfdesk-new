import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataVijayanagaraDist,
  sectionsVijayanagaraDist,
  faqVijayanagara,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Vijayanagara EPF & ESIC Compliance for JSW Steel, Mining Contractors & Hosapete Industry | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for JSW Steel vendors, mining contractors and hazardous industry units in Vijayanagara. Specialists in Principal Employer liability, ESIC for hazardous processes and BOCW Cess compliance.",

  alternates: {
    canonical: "https://epfdesk.com/vijayanagara-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Vijayanagara EPF & ESIC Compliance | JSW Steel & Mining Sector",
    description:
      "PF & ESIC experts for JSW Steel contractors, mining CLRA vendors and heavy industry units in Vijayanagara.",
    url: "https://epfdesk.com/vijayanagara-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vijayanagara EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vijayanagara EPF & ESIC Compliance | JSW Steel & Mining",
    description:
      "EPF & ESIC compliance for JSW Steel vendors, mining contractors and hazardous industries in Vijayanagara.",
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
      <Script id="vijayanagara-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Hosapete, Vijayanagara">
            <meta name="geo.position" content="15.2689;76.3909">
            <meta name="ICBM" content="15.2689, 76.3909">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/vijayanagara-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/vijayanagara-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-vijayanagara"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/vijayanagara-epf-esic-compliance#organization",

          name:
            "Vijayanagara EPF & ESIC Compliance for JSW Steel & Mining Contractors | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for JSW Steel Vendors & Mining Contractors",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/vijayanagara-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Vidyanagar",
            addressLocality: "Hosapete",
            addressRegion: "Karnataka",
            postalCode: "583201",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 15.2689,
            longitude: 76.3909,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Vijayanagara District" },
            { "@type": "Place", name: "JSW Steel Toranagallu" },
            { "@type": "Place", name: "Sandur Mining Belt" },
            { "@type": "Place", name: "Vidyanagar Industrial Area" },
            { "@type": "Place", name: "Hosapete" },
          ],

          description:
            "EPF & ESIC compliance services for JSW Steel contractors, mining CLRA vendors and hazardous industry units in Vijayanagara. Expertise includes Principal Employer liability mitigation, ESIC compliance for hazardous processes, BOCW Cess management and audit defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "58",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataVijayanagaraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVijayanagaraDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqVijayanagara} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script
        id="conversion-tracking-vijayanagara"
        strategy="afterInteractive"
      >
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
