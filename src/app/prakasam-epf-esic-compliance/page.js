import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPrakasamDist,
  sectionsPrakasamDist,
  prakasamFAQ,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Prakasam EPF & ESIC Compliance Consultant: Granite Mining, Stone Processing & Aqua Units | EPFDesk",

  description:
    "EPFDesk provides PF & ESIC compliance services across Prakasam District, including Chimakurthy’s granite mining belt, stone processing zones, aquaculture units, and tobacco curing facilities. Expertise includes hazardous occupation PF/ESI coverage, seasonal labour applicability, contractor PF enforcement, and audit-ready documentation for PF 7A and ESIC inspections.",

  alternates: {
    canonical: "https://epfdesk.com/prakasam-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Prakasam EPF & ESIC Consultant | Granite Mining, Stone Processing & Aqua Units | EPFDesk",
    description:
      "Compliance support for granite (Chimakurthy), stone processing, aquaculture and tobacco units in Prakasam district. PF/ESI for hazardous occupations, seasonal workers and contract labour.",
    url: "https://epfdesk.com/prakasam-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Prakasam PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Prakasam EPF & ESIC Compliance | Granite, Aquaculture & Seasonal Labour | EPFDesk",
    description:
      "PF & ESIC compliance for Chimakurthy granite units, stone processing, aquaculture and tobacco industries.",
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
      <Script id="prakasam-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-AP">
            <meta name="geo.placename" content="Prakasam">
            <meta name="geo.position" content="15.5057;80.0499">
            <meta name="ICBM" content="15.5057, 80.0499">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/prakasam-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/prakasam-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-prakasam"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/prakasam-epf-esic-compliance#organization",

          name: "EPFDesk – Prakasam EPF & ESIC Compliance for Granite, Aqua & Seasonal Labour",

          alternateName:
            "PF & ESIC Consultant for Chimakurthy Granite & Prakasam Agro Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/prakasam-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Ongole Bypass Road",
            addressRegion: "Andhra Pradesh",
            postalCode: "523001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 15.5057,
            longitude: 80.0499,
          },

          areaServed: [
            { "@type": "City", name: "Ongole" },
            { "@type": "Place", name: "Chimakurthy Granite Belt" },
            { "@type": "Place", name: "Singarayakonda Aqua Processing Zone" },
            { "@type": "Place", name: "Kothapatnam Coastal Belt" },
            { "@type": "AdministrativeArea", name: "Prakasam District" },
          ],

          description:
            "EPF & ESIC compliance specialists for Prakasam District covering Chimakurthy granite mining, stone processing, aquaculture clusters, tobacco curing units and seasonal labour-intensive industries, with expertise in hazardous occupation coverage, contractor PF liability, PF 7A and ESIC audit defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPrakasamDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPrakasamDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={prakasamFAQ} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-prakasam" strategy="afterInteractive">
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
