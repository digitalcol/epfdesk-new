import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJalnaDistrict,
  sectionsJalnaDistrict,
  faqJalnaDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Jalna EPF & ESIC Compliance for Steel Mills, Seed Processing & Agro-Units | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Jalna steel reroll mills, seed processing seasonal labour, and agro-processing units. Coverage includes EPFO inspections, piece-rate wage audits and Principal Employer liability in Marathwada.",

  keywords: [
    "Jalna PF consultant",
    "Steel reroll mill EPF compliance Jalna",
    "Seed processing ESIC Jalna",
    "Piece rate wages PF ESIC Marathwada",
    "Agro processing EPF Jalna",
    "Jalna EPFO 7A defence",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jalna-epf-esic-compliance",
  },

  openGraph: {
    title: "Jalna EPF & ESIC Compliance | Steel & Seed Processing",
    description:
      "PF & ESIC specialists for Jalna steel reroll mills, seed processing units and agro-industries.",
    url: "https://epfdesk.com/jalna-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jalna EPF ESIC Compliance",
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
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="jalna-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Jalna, Maharashtra">
            <meta name="geo.position" content="19.8297;75.8800">
            <meta name="ICBM" content="19.8297, 75.8800">
             <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/jalna-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/jalna-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-jalna"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/jalna-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Jalna Industries",

          alternateName:
            "Jalna EPF & ESIC Compliance Experts for Steel Mills, Seed Processing & Agro Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jalna-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-CORRECT ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Old Jalna Road",
            addressLocality: "Jalna",
            addressRegion: "Maharashtra",
            postalCode: "431203",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.8297,
            longitude: 75.88,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Jalna District" },
            { "@type": "Place", name: "Jalna MIDC" },
            { "@type": "Place", name: "Steel Reroll & TMT Mills" },
            { "@type": "Place", name: "Seed Processing Units" },
            { "@type": "Place", name: "Agro-Processing Clusters" },
          ],

          description:
            "EPF & ESIC compliance services for Jalna steel reroll mills, seed processing units, agro-processing industries and MIDC MSMEs. Expertise includes EPFO Section 7A defence, PF on piece-rate wages, seasonal labour coverage and Principal Employer liability.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "69",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJalnaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJalnaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJalnaDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-jalna" strategy="afterInteractive">
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
