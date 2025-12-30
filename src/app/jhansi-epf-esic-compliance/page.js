import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJhansiDist,
  sectionsJhansiDist,
  faqJhansi,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Jhansi EPF & ESIC Compliance: Railway & Defence PE Liability, Agro-Processing Audits | EPFDesk",

  description:
    "Critical EPF & ESIC compliance defence for Jhansi Railway contractors, Defence units, agro-processing factories and MSMEs. Coverage includes RO Jhansi inspections, CLRA Principal Employer liability and seasonal PF audits across Bundelkhand.",

  keywords: [
    "Jhansi PF consultant",
    "Jhansi ESIC compliance",
    "Railway contractor PF compliance Jhansi",
    "Defence PE liability Jhansi",
    "Agro processing PF audits Jhansi",
    "RO Jhansi EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jhansi-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="jhansi-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Jhansi, Uttar Pradesh">
            <meta name="geo.position" content="25.4484;78.5685">
            <meta name="ICBM" content="25.4484, 78.5685">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/jhansi-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/jhansi-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-jhansi"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/jhansi-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Jhansi Industries",

          alternateName:
            "Jhansi EPF & ESIC Compliance for Railway, Defence & Agro Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jhansi-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Jhansi",
            addressRegion: "Uttar Pradesh",
            postalCode: "284001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.4484,
            longitude: 78.5685,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Jhansi District" },
            { "@type": "AdministrativeArea", name: "Bundelkhand Region" },
            { "@type": "Place", name: "Jhansi Railway Division" },
            { "@type": "Place", name: "Defence Establishments Jhansi" },
          ],

          description:
            "EPF & ESIC compliance services for Jhansi Railway contractors, Defence establishments, agro-processing units and MSMEs. Expertise includes CLRA Principal Employer liability, seasonal PF audits, inspection defence and RO Jhansi enforcement handling.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "72",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJhansiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJhansiDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJhansi} />

      {/* ========= CONVERSION TRACKING (VERBATIM) ========= */}
      <Script id="conversion-tracking-jhansi" strategy="afterInteractive">
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
