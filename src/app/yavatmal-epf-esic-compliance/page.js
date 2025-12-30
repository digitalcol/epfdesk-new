import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataYavatmalDist,
  sectionsYavatmalDist,
  faqYavatmal,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Yavatmal EPF & ESIC Compliance for Cotton Ginning, Oil Mills & Seasonal Piece-Rate Wages | EPFDesk",

  description:
    "Expert PF & ESIC compliance support for Yavatmal Cotton Ginning, Oil Mills, Dal Mills and Agro-Processing units. Specialists in seasonal and piece-rate PF liability, Zone-3 minimum wages and RO Nagpur audit defence.",

  alternates: {
    canonical: "https://epfdesk.com/yavatmal-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Yavatmal EPF & ESIC Compliance | Cotton, Agro-Processing & Seasonal Labour",
    description:
      "PF & ESIC specialists for Yavatmal cotton ginning factories, oil mills, dal mills and MSMEs. Seasonal workforce and piece-rate wage audits handled.",
    url: "https://epfdesk.com/yavatmal-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Yavatmal EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Yavatmal EPF & ESIC Compliance | Cotton & Seasonal Labour | EPFDesk",
    description:
      "PF/ESIC compliance experts for Yavatmal cotton ginning, oil mills and seasonal agro-processing employers.",
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
      <Script id="yavatmal-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Yavatmal, Maharashtra">
            <meta name="geo.position" content="20.3890;78.1307">
            <meta name="ICBM" content="20.3890, 78.1307">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/yavatmal-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/yavatmal-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-yavatmal"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/yavatmal-epf-esic-compliance#organization",

          name:
            "Yavatmal EPF & ESIC Compliance | Cotton Ginning, Oil Mills & Agro-Processing | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Cotton Ginning, Oil Mills & MSMEs in Yavatmal",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/yavatmal-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            addressLocality: "Yavatmal",
            addressRegion: "Maharashtra",
            postalCode: "445001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 20.3890,
            longitude: 78.1307,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Yavatmal District" },
            { "@type": "City", name: "Yavatmal" },
            { "@type": "City", name: "Pusad" },
            { "@type": "City", name: "Umarkhed" },
            { "@type": "City", name: "Darwha" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Yavatmal cotton ginning factories, oil mills, dal mills and agro-processing units. Expertise in seasonal labour PF, piece-rate wage structuring, Zone-3 minimum wages and EPFO RO Nagpur audits.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "71",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataYavatmalDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsYavatmalDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqYavatmal} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-yavatmal" strategy="afterInteractive">
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
