import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKodaguDist,
  sectionsKodaguDist,
  faqKodagu,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kodagu EPF & ESIC Compliance for Coffee Plantations, Resorts & Madikeri Tourism | EPFDesk",

  description:
    "Expert PF & ESIC defense for Kodagu Coffee Estates, seasonal plantation workers, resorts, homestays, and hotels. Specialists in plantation PF rules, ESIC hospitality compliance and audit defence.",

  keywords: [
    "Kodagu PF consultant",
    "Coorg plantation PF compliance",
    "ESIC for Madikeri resorts",
    "PF for coffee estate workers",
    "ESIC compliance homestays Kodagu",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kodagu-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="kodagu-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Madikeri, Kodagu District, Karnataka">
            <meta name="geo.position" content="12.3375;75.8069">
            <meta name="ICBM" content="12.3375, 75.8069">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kodagu-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kodagu-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kodagu"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/kodagu-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Kodagu District",

          alternateName:
            "Kodagu EPF & ESIC Compliance for Coffee Estates, Resorts & Homestays",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kodagu-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "College Road",
            postalCode: "571201",
            addressLocality: "Madikeri",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 12.3375,
            longitude: 75.8069,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Kodagu District" },
            { "@type": "Place", name: "Madikeri" },
            { "@type": "Place", name: "Virajpet" },
            { "@type": "Place", name: "Kushalnagar" },
            { "@type": "Place", name: "Somwarpet" },
            { "@type": "Place", name: "Coffee Plantations of Coorg" },
          ],

          description:
            "EPF & ESIC compliance services for Coffee Plantations, seasonal agricultural workers, resorts, homestays, hotels and agro-processing units in Kodagu district. Expertise includes plantation PF applicability, ESIC hospitality coverage and audit defense.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "58",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKodaguDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKodaguDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKodagu} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-kodagu" strategy="afterInteractive">
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
