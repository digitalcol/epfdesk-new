import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataHassanDist,
  sectionsHassanDist,
  faqHassan,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Hassan EPF & ESIC Compliance for Coffee Plantations, Food Processing & Arsikere MSMEs | EPFDesk",

  description:
    "EPFDesk provides PF & ESIC compliance expertise for Hassan’s coffee plantations, curing units, food processing factories and MSME engineering clusters in Arsikere and B. Katihalli. Specialists in plantation PF coverage, piece-rate wage compliance and MSME statutory onboarding.",

  keywords: [
    "Hassan PF consultant",
    "Hassan ESIC consultant",
    "coffee plantation PF compliance",
    "food processing PF ESIC",
    "Arsikere MSME labour law",
    "plantation labour PF Karnataka",
    "EPFDesk Hassan",
  ],

  alternates: {
    canonical: "https://epfdesk.com/hassan-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Hassan EPF & ESIC Compliance | Coffee, Food Processing & MSME Engineering",
    description:
      "PF & ESIC specialists for Hassan’s plantations, food processing units and MSME engineering clusters.",
    url: "https://epfdesk.com/hassan-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hassan EPF ESIC Compliance",
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
      <Script id="hassan-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Hassan">
            <meta name="geo.position" content="13.0072;76.0960">
            <meta name="ICBM" content="13.0072, 76.0960">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/hassan-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/hassan-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-hassan"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/hassan-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Hassan Plantations & MSMEs",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/hassan-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS (HASSAN) */
          address: {
            "@type": "PostalAddress",
            streetAddress: "BM Road",
            addressLocality: "Hassan",
            addressRegion: "Karnataka",
            postalCode: "573201",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.0072,
            longitude: 76.0960,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Hassan District" },
            { "@type": "Place", name: "Arsikere Industrial Estate" },
            { "@type": "Place", name: "B. Katihalli KSSIDC Industrial Area" },
            { "@type": "Place", name: "Coffee & Spice Plantation Belt" },
            { "@type": "Place", name: "Food Processing Clusters" },
          ],

          description:
            "EPF & ESIC compliance services for Hassan district covering coffee plantations, curing units, food processing factories and MSME engineering clusters. Expertise in plantation PF applicability, piece-rate wage audits, ESIC factory coverage and statutory onboarding.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "41",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHassanDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHassanDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqHassan} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-hassan" strategy="afterInteractive">
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
