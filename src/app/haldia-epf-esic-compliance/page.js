import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataHaldia, sectionsHaldia, faqHaldia } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Haldia EPF & ESIC Compliance: Petrochemical Units, IOCL & Port Contractors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Haldia petrochemical units, IOCL refinery contractors, port and logistics operators. Experts in RO Haldia enforcement, hazardous process ESIC, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Haldia PF consultant",
    "Haldia ESIC consultant",
    "Haldia Petrochemical PF ESIC",
    "IOCL Haldia refinery contractor compliance",
    "Port labour compliance Haldia",
    "Logistics contractor PF ESIC Haldia",
    "Principal Employer liability Haldia",
    "RO Haldia EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/haldia-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Haldia EPF & ESIC Compliance | Petrochemical & Port Industrial Hub",
    description:
      "PF & ESIC specialists for Haldia petrochemical units, IOCL refinery vendors, port operators and logistics contractors.",
    url: "https://epfdesk.com/haldia-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldia PF ESIC Compliance",
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
      <Script id="haldia-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-WB">
            <meta name="geo.placename" content="Haldia">
            <meta name="geo.position" content="22.0667;88.0698">
            <meta name="ICBM" content="22.0667, 88.0698">
             <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/haldia-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/haldia-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-haldia"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/haldia-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Haldia Petrochemical & Port Industries",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/haldia-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Township Area",
            addressLocality: "Haldia",
            addressRegion: "West Bengal",
            postalCode: "721657",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.0667,
            longitude: 88.0698,
          },

          areaServed: [
            { "@type": "Place", name: "Haldia Industrial Area" },
            { "@type": "Place", name: "Haldia Dock Complex" },
            { "@type": "Place", name: "IOCL Haldia Refinery Zone" },
            { "@type": "Place", name: "Tamluk" },
            {
              "@type": "AdministrativeArea",
              name: "Purba Medinipur District",
            },
          ],

          description:
            "EPF & ESIC compliance services for Haldia petrochemical complexes, IOCL refinery contractors, port labour, logistics operators and hazardous process industries. Expertise in RO Haldia audits, ESIC hazard exposure, Principal Employer liability and New Wage Code payroll restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "66",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHaldia} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHaldia} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqHaldia} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-haldia" strategy="afterInteractive">
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

          document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
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
