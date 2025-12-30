import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataTrivandrum,
  sectionsTrivandrum,
  faqTrivandrum,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Thiruvananthapuram EPF & ESIC Compliance | Technopark IT Firms & Space-Tech Vendors | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Thiruvananthapuram Technopark IT companies, KINFRA aerospace & electronics vendors, ISRO contractors and service-sector employers. RO Trivandrum audits, NWC 2025 and Principal Employer liability handled.",

  alternates: {
    canonical:
      "https://epfdesk.com/thiruvananthapuram-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Thiruvananthapuram EPF & ESIC Compliance | IT & Space-Tech Hub",
    description:
      "PF & ESIC specialists for Technopark IT firms, aerospace vendors and electronics manufacturers in Thiruvananthapuram.",
    url:
      "https://epfdesk.com/thiruvananthapuram-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Thiruvananthapuram EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Thiruvananthapuram EPF & ESIC Compliance | IT & Space-Tech",
    description:
      "Expert PF & ESIC compliance for Technopark IT firms, aerospace vendors and electronics units in Thiruvananthapuram.",
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
      <Script id="thiruvananthapuram-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KL">
            <meta name="geo.placename" content="Thiruvananthapuram">
            <meta name="geo.position" content="8.5241;76.9366">
            <meta name="ICBM" content="8.5241, 76.9366">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/thiruvananthapuram-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/thiruvananthapuram-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-thiruvananthapuram"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/thiruvananthapuram-epf-esic-compliance#organization",

          name:
            "Thiruvananthapuram EPF & ESIC Compliance – IT, Aerospace & Electronics | EPFDesk",

          alternateName:
            "EPFDesk – Technopark & Space-Tech Compliance Consultants",

          image: "https://epfdesk.com/images/logo.jpg",
          url:
            "https://epfdesk.com/thiruvananthapuram-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CITY ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Technopark Road",
            addressLocality: "Kazhakkoottam",
            addressRegion: "Kerala",
            postalCode: "695581",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 8.5241,
            longitude: 76.9366,
          },

          areaServed: [
            { "@type": "City", name: "Thiruvananthapuram" },
            { "@type": "City", name: "Trivandrum" },
            { "@type": "Place", name: "Technopark" },
            { "@type": "Place", name: "KINFRA Aerospace Park" },
            { "@type": "Place", name: "KINFRA Video Park" },
            { "@type": "Place", name: "ISRO & Space-Tech Vendor Zone" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Technopark IT firms, aerospace and electronics vendors, ISRO contractors and service-sector employers in Thiruvananthapuram. Expertise in RO Trivandrum enforcement, NWC 2025 wage restructuring and Principal Employer liability.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "52",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTrivandrum} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTrivandrum} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqTrivandrum} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-thiruvananthapuram" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: 'thiruvananthapuram',
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
                    event_label: 'thiruvananthapuram',
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
                  event_label: 'thiruvananthapuram',
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
