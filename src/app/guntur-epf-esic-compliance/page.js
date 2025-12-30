import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  gunturDistFAQ,
  heroDataGunturDist,
  sectionsGunturDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Guntur EPF & ESIC Consultant: NWC 2025 Seasonal & Agri-Processing Compliance | EPFDesk",

  description:
    "EPFDesk provides PF & ESIC compliance services for Guntur’s agro-processing hubs, cold storage facilities, tobacco units, and chilli/turmeric markets. Experts in NWC 2025 seasonal payroll structuring and statutory compliance.",

  keywords: [
    "Guntur PF consultant",
    "Guntur ESIC consultant",
    "agro-processing PF ESIC compliance",
    "tobacco industry PF ESIC Guntur",
    "cold storage PF compliance",
    "warehousing ESIC compliance",
    "seasonal labour PF ESIC",
    "NWC 2025 Guntur payroll",
    "chilli market PF ESIC",
    "EPFDesk Guntur",
  ],

  alternates: {
    canonical: "https://epfdesk.com/guntur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Guntur EPF & ESIC Consultant | Agro-Processing & Seasonal Labour Compliance | EPFDesk",
    description:
      "PF & ESIC compliance for Guntur agro-processing clusters, warehousing, cold storage and seasonal labour ecosystems.",
    url: "https://epfdesk.com/guntur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Guntur EPF ESIC Compliance",
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
      <Script id="guntur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-AP">
            <meta name="geo.placename" content="Guntur">
            <meta name="geo.position" content="16.3067;80.4365">
            <meta name="ICBM" content="16.3067, 80.4365">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/guntur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/guntur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-guntur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/guntur-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Guntur District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/guntur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Brodipet",
            addressLocality: "Guntur",
            addressRegion: "Andhra Pradesh",
            postalCode: "522002",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 16.3067,
            longitude: 80.4365,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Guntur District" },
            { "@type": "Place", name: "Guntur City" },
            { "@type": "Place", name: "Chilli & Turmeric Markets" },
            { "@type": "Place", name: "Agro-Processing & Warehousing Zones" },
            { "@type": "Place", name: "Cold Storage Clusters" },
          ],

          description:
            "EPF & ESIC compliance services for Guntur district covering agro-processing hubs, tobacco units, cold storage facilities, warehousing operations and seasonal labour markets. Expertise in NWC 2025 seasonal payroll structuring, unorganised workforce onboarding and statutory filings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGunturDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGunturDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={gunturDistFAQ} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-guntur" strategy="afterInteractive">
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
