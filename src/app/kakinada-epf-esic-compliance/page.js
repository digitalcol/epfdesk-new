import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKakinadaDist,
  sectionsKakinadaDist,
  kakinandaDistFAQ,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kakinada EPF & ESIC Compliance Consultant: NWC 2025 for Ports, Petrochemicals & Contract Labour | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance for Kakinada District — Port operations, SEZ logistics, petrochemical & fertilizer units and oil & gas contractors. Coverage includes NWC 2025 payroll structuring, hazardous occupation ESIC mapping, contractor audits and PF wage modelling.",

  keywords: [
    "Kakinada PF consultant",
    "Kakinada ESIC consultant",
    "Kakinada Port PF ESIC compliance",
    "Kakinada SEZ labour compliance",
    "petrochemical PF ESIC",
    "fertilizer industry PF compliance",
    "oil and gas contractor PF ESIC",
    "hazardous occupation ESIC mapping",
    "NWC 2025 payroll Kakinada",
    "EPFDesk Kakinada",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kakinada-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="kakinada-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-AP">
            <meta name="geo.placename" content="Kakinada, Andhra Pradesh">
            <meta name="geo.position" content="16.9891;82.2475">
            <meta name="ICBM" content="16.9891, 82.2475">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kakinada-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kakinada-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kakinada"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/kakinada-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Kakinada Port & Industrial Belt",

          alternateName:
            "Kakinada EPF & ESIC Compliance for Port, SEZ, Petrochemical & Oil & Gas Contractors",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kakinada-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sarpavaram Road",
            addressLocality: "Kakinada",
            addressRegion: "Andhra Pradesh",
            postalCode: "533005",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 16.9891,
            longitude: 82.2475,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Kakinada District" },
            { "@type": "Place", name: "Kakinada Deep Water Port" },
            { "@type": "Place", name: "Kakinada SEZ" },
            { "@type": "Place", name: "Petrochemical & Fertilizer Units" },
            { "@type": "Place", name: "Oil & Gas Contractor Ecosystem" },
          ],

          description:
            "EPF & ESIC compliance services for Kakinada Port operations, SEZ logistics, petrochemical and fertilizer plants, and oil & gas contractors. Expertise includes NWC 2025 payroll restructuring, hazardous occupation ESIC classification, contractor PF audits and statutory risk mitigation.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKakinadaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKakinadaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={kakinandaDistFAQ} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-kakinada" strategy="afterInteractive">
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
