import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGorakhpurDist,
  sectionsGorakhpurDist,
  faqGorakhpur,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Gorakhpur EPF & ESIC Compliance 2025: Sugar Seasonal PF, Fertilizer PE Liability & Agro Audits | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Gorakhpur sugar mills, fertilizer plants, agro-processing factories and PSU contractors. Specialists in seasonal PF on retaining allowance, CLRA/Principal Employer liability, ESIC hazard exposure and RO Gorakhpur audits.",

  keywords: [
    "Gorakhpur PF consultant",
    "Gorakhpur ESIC consultant",
    "Sugar mill seasonal PF Gorakhpur",
    "Retaining allowance PF sugar mills",
    "Fertilizer plant PE liability",
    "Agro processing PF ESIC Gorakhpur",
    "RO Gorakhpur EPFO defence",
    "Principal Employer liability Gorakhpur",
    "EPFDesk Gorakhpur",
  ],

  alternates: {
    canonical: "https://epfdesk.com/gorakhpur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Gorakhpur EPF & ESIC Compliance | Sugar, Fertilizer & Agro-Processing",
    description:
      "PF & ESIC specialists for Gorakhpur sugar mills, fertilizer plants, agro-processing units and PSU contractors.",
    url: "https://epfdesk.com/gorakhpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gorakhpur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE COMPONENT
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="gorakhpur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Gorakhpur">
            <meta name="geo.position" content="26.7606;83.3732">
            <meta name="ICBM" content="26.7606, 83.3732">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/gorakhpur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/gorakhpur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-gorakhpur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/gorakhpur-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Gorakhpur District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/gorakhpur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Golghar",
            addressLocality: "Gorakhpur",
            addressRegion: "Uttar Pradesh",
            postalCode: "273001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.7606,
            longitude: 83.3732,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Gorakhpur District" },
            { "@type": "City", name: "Gorakhpur" },
            { "@type": "Place", name: "Gorakhpur Industrial Area" },
            { "@type": "Place", name: "Northeast UP Agro Belt" },
            { "@type": "Place", name: "Sugar Mill Clusters" },
          ],

          description:
            "EPF & ESIC compliance services for Gorakhpur sugar mills, fertilizer plants, agro-processing factories and PSU contractors. Expertise in seasonal PF on retaining allowance, ESIC hazard exposure, CLRA Principal Employer liability and RO Gorakhpur inspections.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "79",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGorakhpurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGorakhpurDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGorakhpur} />
       <Script id="conversion-tracking-gorakhpur" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              gtag('event', 'phone_click', {
                event_category: 'conversion',
                event_label: el.getAttribute('href'),
                value: 5
              });
            });
          });

          document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
            el.addEventListener('click', () => {
              gtag('event', 'whatsapp_click', {
                event_category: 'conversion',
                event_label: window.location.pathname,
                value: 5
              });
            });
          });

          document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
              gtag('event', 'form_submission', {
                event_category: 'lead',
                event_label: window.location.pathname,
                value: 10
              });
            });
          });
        `}
      </Script>
    </>
  );
}
