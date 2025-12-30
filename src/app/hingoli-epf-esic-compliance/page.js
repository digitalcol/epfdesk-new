import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataHingoliDistrict,
  sectionsHingoliDistrict,
  faqHingoliDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Hingoli EPF & ESIC Compliance for Cotton Ginning, Oil Mills & Newly Notified Areas | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Hingoli cotton ginning units, oil mills and agro-processing industries. Specialists in PF liability for seasonal and piece-rate workers, ESIC applicability in newly notified areas, EPFO 7A defence and inspection readiness.",

  keywords: [
    "Hingoli PF consultant",
    "Hingoli ESIC consultant",
    "Cotton ginning PF piece rate Hingoli",
    "Newly notified ESIC area Hingoli",
    "Seasonal worker PF liability Hingoli",
    "EPFO 7A defence Hingoli",
    "Agro processing labour compliance Hingoli",
  ],

  alternates: {
    canonical: "https://epfdesk.com/hingoli-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Hingoli EPF & ESIC Compliance | Cotton Ginning & Newly Notified Areas",
    description:
      "High-risk PF & ESIC compliance for Hingoli agro-processing units, cotton ginning mills and newly ESIC-notified establishments.",
    url: "https://epfdesk.com/hingoli-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hingoli EPF ESIC Compliance",
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
      <Script id="hingoli-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Hingoli District, Maharashtra">
            <meta name="geo.position" content="19.7191;77.1485">
            <meta name="ICBM" content="19.7191, 77.1485">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/hingoli-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/hingoli-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-hingoli"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/hingoli-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Hingoli Cotton Ginning & Agro Industries",

          alternateName:
            "Hingoli PF ESIC Compliance Experts for Piece-Rate & Seasonal Workforce",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/hingoli-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-LEVEL ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Hingoli",
            addressRegion: "Maharashtra",
            postalCode: "431513",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.7191,
            longitude: 77.1485,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Hingoli District" },
            { "@type": "Place", name: "Hingoli MIDC" },
            { "@type": "Place", name: "Cotton Ginning Clusters" },
            { "@type": "Place", name: "Oil & Dal Mills" },
            { "@type": "Place", name: "Newly ESIC-Notified Commercial Areas" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Hingoli cotton ginning units, oil mills, dal mills and agro-processing MSMEs. Expertise in PF on piece-rate and seasonal labour, ESIC applicability in newly notified areas, EPFO 7A proceedings and inspection defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "44",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHingoliDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHingoliDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqHingoliDistrict} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-hingoli" strategy="afterInteractive">
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
