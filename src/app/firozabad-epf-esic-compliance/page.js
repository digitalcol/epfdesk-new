import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataFirozabadDist,
  sectionsFirozabadDist,
  faqFirozabad,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Firozabad EPF & ESIC Compliance 2025: Glass & Bangle Piece-Rate PF, Furnace Hazard ESIC & MSME PE Liability | EPFDesk",

  description:
    "Critical EPF & ESIC compliance defence for Firozabad glass factories, bangle units and furnace-based MSMEs. Experts in RO Agra audits, piece-rate PF exposure, hazardous process ESIC liability and Principal Employer risk management.",

  keywords: [
    "Firozabad PF consultant",
    "Firozabad ESIC consultant",
    "Glass industry PF compliance Firozabad",
    "Bangle factory ESIC hazard",
    "Piece rate PF audit glass industry",
    "Hazardous process ESIC furnace",
    "RO Agra EPFO jurisdiction",
    "Principal Employer liability Firozabad",
    "EPFDesk Firozabad",
  ],

  alternates: {
    canonical: "https://epfdesk.com/firozabad-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Firozabad EPF & ESIC Compliance | Glass & Bangle Industry Hub",
    description:
      "PF & ESIC specialists for Firozabad glass factories, bangle units and furnace-based hazardous industries.",
    url: "https://epfdesk.com/firozabad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Firozabad EPF ESIC Compliance",
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
      <Script id="firozabad-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Firozabad">
            <meta name="geo.position" content="27.1591;78.3957">
            <meta name="ICBM" content="27.1591, 78.3957">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/firozabad-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/firozabad-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-firozabad"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/firozabad-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Firozabad Glass & Bangle Industry",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/firozabad-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Suhag Nagar",
            addressLocality: "Firozabad",
            addressRegion: "Uttar Pradesh",
            postalCode: "283203",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 27.1591,
            longitude: 78.3957,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Firozabad District" },
            { "@type": "Place", name: "Firozabad Glass Cluster" },
            { "@type": "Place", name: "Bangle Manufacturing Units" },
            { "@type": "Place", name: "Furnace-Based MSMEs" },
            { "@type": "Place", name: "Shikohabad" },
            { "@type": "Place", name: "Tundla" },
          ],

          description:
            "EPF & ESIC compliance services for Firozabad glass factories, bangle units and furnace-based hazardous industries. Expertise in piece-rate PF audits, ESIC hazardous process liability, Principal Employer risk, RO Agra inspections and New Wage Code 2025 exposure.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "69",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataFirozabadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsFirozabadDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqFirozabad} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-firozabad" strategy="afterInteractive">
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
