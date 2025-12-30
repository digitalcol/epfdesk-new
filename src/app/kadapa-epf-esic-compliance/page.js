import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKadapaDist,
  sectionsKadapaDist,
  kadapaFAQ,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kadapa EPF & ESIC Consultant: Temple Trust Staff, Barytes Mining & Groundnut Oil Mills | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance for Kadapa (YSR District) — Barytes mining units, limestone quarries, temple trust employees and seasonal groundnut oil mills. Coverage includes occupational disease classification, PF applicability for religious institutions, contractor audits and NWC-2025 alignment.",

  keywords: [
    "Kadapa PF consultant",
    "Kadapa ESIC consultant",
    "Barytes mining PF ESIC",
    "Proddatur mining labour compliance",
    "Yerraguntla quarry PF ESIC",
    "temple trust PF applicability",
    "seasonal factory ESIC compliance",
    "groundnut oil mill PF ESIC",
    "NWC 2025 Kadapa compliance",
    "EPFDesk Kadapa",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kadapa-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="kadapa-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-AP">
            <meta name="geo.placename" content="Kadapa, YSR District, Andhra Pradesh">
            <meta name="geo.position" content="14.4673;78.8242">
            <meta name="ICBM" content="14.4673, 78.8242">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kadapa-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kadapa-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kadapa"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/kadapa-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Kadapa (YSR District)",

          alternateName:
            "Kadapa EPF & ESIC Compliance for Mining, Temple Trust & Agri-Processing Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kadapa-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "RS Road",
            addressLocality: "Kadapa",
            addressRegion: "Andhra Pradesh",
            postalCode: "516001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 14.4673,
            longitude: 78.8242,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "YSR Kadapa District" },
            { "@type": "Place", name: "Proddatur Mining Belt" },
            { "@type": "Place", name: "Yerraguntla Quarry Cluster" },
            { "@type": "Place", name: "Devuni Kadapa Temple Trust Area" },
            { "@type": "Place", name: "Groundnut & Cotton Oil Mills" },
          ],

          description:
            "EPF & ESIC compliance services for Kadapa Barytes mining units, limestone quarries, temple trust employees and seasonal agro-processing factories. Expertise includes occupational disease mapping, PF applicability for religious institutions, contractor liability and ESIC seasonality assessments.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "44",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKadapaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKadapaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={kadapaFAQ} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-kadapa" strategy="afterInteractive">
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
