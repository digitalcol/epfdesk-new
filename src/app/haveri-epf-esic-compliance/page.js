import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataHaveriDist,
  sectionsHaveriDist,
  faqHaveri,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Haveri EPF & ESIC Compliance for Textile Mills, Cotton Ginning & Seasonal Agro-Processing | EPFDesk",

  description:
    "Expert PF & ESIC compliance for Haveri’s textile mills, cotton ginning units and agro-processing industries. Specialists in PF for piece-rate workers, ESIC for seasonal labour and NWC 2025 wage definition compliance.",

  keywords: [
    "Haveri PF consultant",
    "Haveri ESIC consultant",
    "textile mill PF ESIC Haveri",
    "cotton ginning PF ESIC",
    "piece-rate wage PF Karnataka",
    "seasonal worker PF ESI Haveri",
    "agro-processing compliance Haveri",
    "EPFDesk Haveri",
  ],

  alternates: {
    canonical: "https://epfdesk.com/haveri-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Haveri EPF & ESIC Compliance | Textile, Cotton Ginning & Agro-Processing",
    description:
      "PF & ESIC specialists for Haveri’s textile mills, cotton ginning clusters and seasonal agro-processing industries.",
    url: "https://epfdesk.com/haveri-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haveri EPF ESIC Compliance",
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
      <Script id="haveri-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Haveri">
            <meta name="geo.position" content="14.7951;75.3975">
            <meta name="ICBM" content="14.7951, 75.3975">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/haveri-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/haveri-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-haveri"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/haveri-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Haveri Textile & Agro Industries",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/haveri-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "PB Road",
            addressLocality: "Haveri",
            addressRegion: "Karnataka",
            postalCode: "581110",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 14.7951,
            longitude: 75.3975,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Haveri District" },
            { "@type": "Place", name: "Cotton Ginning Clusters" },
            { "@type": "Place", name: "Textile Mills" },
            { "@type": "Place", name: "Agro-Processing Units" },
            { "@type": "Place", name: "Seasonal Labour Belt" },
          ],

          description:
            "EPF & ESIC compliance services for Haveri district covering textile mills, cotton ginning units and agro-processing industries. Expertise in PF for piece-rate wages, ESIC for seasonal workers, and New Wage Code 2025 compliance.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "42",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHaveriDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHaveriDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqHaveri} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-haveri" strategy="afterInteractive">
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
