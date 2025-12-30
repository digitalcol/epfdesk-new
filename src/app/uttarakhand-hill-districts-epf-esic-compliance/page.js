import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataUKHills, sectionsUKHills, faqUKHills } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Dehradun & Hill Districts EPF & ESIC Compliance: Selaqui Pharma, Hill MSMEs & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Dehradun and Uttarakhand hill districts — Selaqui pharma manufacturers, IT firms, wellness resorts, logistics gateways and hill MSMEs. Experts in RO Dehradun enforcement, EEC-2025 filings and Principal Employer liability.",

  alternates: {
    canonical:
      "https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Dehradun & Hill Districts EPF & ESIC Compliance | Pharma & Hill MSMEs",
    description:
      "PF & ESIC specialists for Selaqui pharma units, Dehradun IT firms, hill MSMEs, wellness resorts and logistics hubs across Uttarakhand.",
    url: "https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Uttarakhand EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Dehradun & Hill Districts EPF & ESIC Compliance | Pharma & MSMEs | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Dehradun Selaqui pharma units, hill MSMEs, wellness resorts and logistics contractors.",
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
      <Script id="uk-hills-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UK">
            <meta name="geo.placename" content="Dehradun, Uttarakhand">
            <meta name="geo.position" content="30.3165;78.0322">
            <meta name="ICBM" content="30.3165, 78.0322">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-uttarakhand-hills"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance#organization",

          name: "Dehradun & Uttarakhand Hill Districts EPF & ESIC Compliance | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Dehradun, Selaqui & Hill MSMEs",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/uttarakhand-hill-districts-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Rajpur Road",
            addressLocality: "Dehradun",
            addressRegion: "Uttarakhand",
            postalCode: "248001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 30.3165,
            longitude: 78.0322,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Dehradun District" },
            { "@type": "Place", name: "Selaqui Industrial Area" },
            { "@type": "Place", name: "Haldwani" },
            { "@type": "Place", name: "Kotdwar" },
            { "@type": "Place", name: "Almora" },
            { "@type": "Place", name: "Tehri Garhwal" },
            { "@type": "Place", name: "Pauri Garhwal" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Dehradun pharma manufacturers, IT firms, logistics hubs, wellness resorts and MSMEs across Uttarakhand hill districts, with focus on RO Dehradun audits, EEC-2025 filings and Principal Employer liability.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "68",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataUKHills} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsUKHills} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqUKHills} />
      <Script
        id="conversion-tracking-uttarakhand-hills"
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
