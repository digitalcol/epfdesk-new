import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataWestBengal,
  sectionsWestBengal,
  faqWestBengal,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "West Bengal EPF & ESIC Compliance: North Bengal Tea Estates, Siliguri Logistics & Agri-Industrial Audits | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for West Bengal — North Bengal tea estates, Siliguri logistics hubs, Hooghly–Nadia agri-industries, jute mills and MSMEs. Experts in RO Jalpaiguri / RO Kolkata audits, EEC-2025 filings, contractor audits and Principal Employer liability.",

  alternates: {
    canonical: "https://epfdesk.com/west-bengal-epf-esic-compliance",
  },

  openGraph: {
    title:
      "West Bengal EPF & ESIC Compliance | Tea Estates, Logistics & Agri-Industries",
    description:
      "PF & ESIC specialists for North Bengal tea estates, Siliguri logistics hubs, jute mills, rice mills and agri-processing units across West Bengal.",
    url: "https://epfdesk.com/west-bengal-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "West Bengal EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "West Bengal EPF & ESIC Compliance | Tea Estates & Agri-Industries | EPFDesk",
    description:
      "Expert PF & ESIC compliance for West Bengal tea estates, logistics hubs, jute mills, rice mills and agri-processing units.",
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
      <Script id="west-bengal-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-WB">
            <meta name="geo.placename" content="West Bengal, India">
            <meta name="geo.position" content="22.9868;87.8550">
            <meta name="ICBM" content="22.9868, 87.8550">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/west-bengal-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/west-bengal-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-west-bengal"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/west-bengal-epf-esic-compliance#organization",

          name: "West Bengal EPF & ESIC Compliance Consultants | Tea Estates, Logistics & Agri-Industries | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for North Bengal Tea Estates & West Bengal Industries",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/west-bengal-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "B.B.D. Bagh Area",
            addressLocality: "Kolkata",
            addressRegion: "West Bengal",
            postalCode: "700001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.9868,
            longitude: 87.855,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "West Bengal" },
            { "@type": "Place", name: "Siliguri" },
            { "@type": "Place", name: "Jalpaiguri" },
            { "@type": "Place", name: "Darjeeling" },
            { "@type": "Place", name: "Alipurduar" },
            { "@type": "Place", name: "Hooghly" },
            { "@type": "Place", name: "Nadia" },
            { "@type": "Place", name: "Murshidabad" },
          ],

          description:
            "EPF & ESIC compliance consultancy for West Bengal’s high-risk labour sectors including North Bengal tea estates, Siliguri logistics and warehousing hubs, Hooghly–Nadia agri-industries, jute mills and MSMEs. Expertise in RO Jalpaiguri and RO Kolkata enforcement, EEC-2025 filings, contractor audits and Principal Employer liability.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "76",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataWestBengal} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsWestBengal} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqWestBengal} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-west-bengal" strategy="afterInteractive">
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
