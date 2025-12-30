import Script from "next/script";
import React from "react";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataRanchi, sectionsRanchi, faqRanchi } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Ranchi EPF & ESIC Compliance: IT Firms, Hospitals, Educational Institutions & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Ranchi — IT startups, private hospitals, educational institutions, Tupudana industrial MSMEs and service-sector employers. Experts in RO Ranchi enforcement, New Wage Code compliance, contractor audits and Principal Employer liability.",

  alternates: {
    canonical: "https://epfdesk.com/ranchi-epf-esic-compliance",
  },

  openGraph: {
    title: "Ranchi EPF & ESIC Compliance | IT, Healthcare & Education Hub",
    description:
      "PF & ESIC specialists for Ranchi IT firms, hospitals, educational institutions and industrial MSMEs.",
    url: "https://epfdesk.com/ranchi-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ranchi PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ranchi EPF & ESIC Compliance | IT, Healthcare & Education | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Ranchi IT firms, hospitals, educational institutions and MSMEs.",
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
      <Script id="ranchi-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-JH">
            <meta name="geo.placename" content="Ranchi">
            <meta name="geo.position" content="23.3441;85.3096">
            <meta name="ICBM" content="23.3441, 85.3096">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/ranchi-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/ranchi-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-ranchi"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/ranchi-epf-esic-compliance#organization",

          name: "EPFDesk – Ranchi EPF & ESIC Compliance for IT, Healthcare & Education",

          alternateName:
            "PF & ESIC Consultant for Ranchi IT Firms, Hospitals & Educational Institutions",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/ranchi-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Main Road",
            addressRegion: "Jharkhand",
            postalCode: "834001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.3441,
            longitude: 85.3096,
          },

          areaServed: [
            { "@type": "City", name: "Ranchi" },
            { "@type": "Place", name: "Namkum Industrial Area" },
            { "@type": "Place", name: "Tupudana Industrial Area" },
            { "@type": "Place", name: "Tatisilwai Industrial Area" },
            { "@type": "City", name: "Khunti" },
          ],

          description:
            "EPF & ESIC compliance services for Ranchi IT startups, private hospitals, educational institutions, Tupudana and Tatisilwai industrial MSMEs, and Jharkhand service-sector employers. Expertise in RO Ranchi proceedings, New Wage Code restructuring, contractor audits and Principal Employer liability.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "76",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRanchi} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRanchi} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqRanchi} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-ranchi" strategy="afterInteractive">
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
