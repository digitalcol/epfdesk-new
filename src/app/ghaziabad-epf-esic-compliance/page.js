import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGhaziabadDist,
  sectionsGhaziabadDist,
  faqGhaziabad,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Ghaziabad EPF & ESIC Compliance 2025: Sahibabad PE Liability, Hazard Risk & Engineering MSMEs | EPFDesk",

  description:
    "Critical EPF & ESIC compliance defense for Ghaziabad engineering MSMEs and heavy industries in Sahibabad, Loni and Trans-Hindon. Specialists in RO Ghaziabad audits, CLRA Principal Employer liability, ESIC hazard exposure and Minimum Wage enforcement.",

  keywords: [
    "Ghaziabad PF consultant",
    "Ghaziabad ESIC consultant",
    "Sahibabad PE liability PF ESIC",
    "Engineering MSME PF compliance Ghaziabad",
    "ESIC hazard liability heavy industry",
    "RO Ghaziabad EPFO jurisdiction",
    "CLRA contractor compliance Ghaziabad",
    "Minimum Wage audit Ghaziabad",
    "EPFDesk Ghaziabad",
  ],

  alternates: {
    canonical: "https://epfdesk.com/ghaziabad-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Ghaziabad EPF & ESIC Compliance | Engineering, MSME & Hazard Risk",
    description:
      "PF & ESIC specialists for Ghaziabad engineering factories, steel units and MSMEs. PE liability, ESIC hazard exposure and RO Ghaziabad audits handled.",
    url: "https://epfdesk.com/ghaziabad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ghaziabad PF ESIC Compliance",
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
      <Script id="ghaziabad-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Ghaziabad">
            <meta name="geo.position" content="28.6692;77.4538">
            <meta name="ICBM" content="28.6692, 77.4538">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/ghaziabad-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/ghaziabad-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-ghaziabad"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/ghaziabad-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Ghaziabad District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/ghaziabad-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Nehru Nagar",
            addressLocality: "Ghaziabad",
            addressRegion: "Uttar Pradesh",
            postalCode: "201001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.6692,
            longitude: 77.4538,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Ghaziabad District" },
            { "@type": "Place", name: "Sahibabad Industrial Area" },
            { "@type": "Place", name: "Loni" },
            { "@type": "Place", name: "Trans-Hindon Industrial Belt" },
            { "@type": "Place", name: "Ghaziabad City" },
          ],

          description:
            "EPF & ESIC compliance services for Ghaziabad engineering factories, steel units, chemical MSMEs and contractor-driven industries. Expertise in CLRA Principal Employer liability, ESIC hazardous process exposure, Minimum Wage audits and RO Ghaziabad proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "89",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGhaziabadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGhaziabadDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGhaziabad} />
       <Script id="conversion-tracking-ghaziabad" strategy="afterInteractive">
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
