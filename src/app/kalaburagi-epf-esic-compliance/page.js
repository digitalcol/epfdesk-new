import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKalaburagiDist,
  sectionsKalaburagiDist,
  faqKalaburagi,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kalaburagi EPF & ESIC Compliance for Cement Plants, Dal Mills & Educational Institutions | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance for Kalaburagi District — cement plants, dal mills, piece-rate agro units and educational institutions. Coverage includes hazardous industry ESIC enforcement, PF wage audits and contractor liability management.",

  keywords: [
    "Kalaburagi PF consultant",
    "Kalaburagi ESIC consultant",
    "cement industry PF ESIC",
    "dal mill PF ESIC",
    "piece rate PF calculation",
    "Kalaburagi educational institution PF ESIC",
    "Sedam cement compliance",
    "EPFDesk Kalaburagi",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kalaburagi-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="kalaburagi-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Kalaburagi, Karnataka">
            <meta name="geo.position" content="17.3297;76.8343">
            <meta name="ICBM" content="17.3297, 76.8343">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kalaburagi-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kalaburagi-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kalaburagi"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/kalaburagi-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Kalaburagi Industries",

          alternateName:
            "Kalaburagi EPF & ESIC Compliance for Cement Plants, Dal Mills & Educational Institutions",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kalaburagi-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sedam Road",
            addressLocality: "Kalaburagi",
            addressRegion: "Karnataka",
            postalCode: "585105",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.3297,
            longitude: 76.8343,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Kalaburagi District" },
            { "@type": "Place", name: "Sedam Cement Cluster" },
            { "@type": "Place", name: "Chittapur Industrial Belt" },
            { "@type": "Place", name: "Dal Mill Processing Units" },
            { "@type": "Place", name: "Educational Institutions" },
          ],

          description:
            "EPF & ESIC compliance services for Kalaburagi cement plants, dal mills, piece-rate agro units and private educational institutions. Expertise includes hazardous industry ESIC enforcement, PF wage audits, contractor liability and inspection defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKalaburagiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKalaburagiDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKalaburagi} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-kalaburagi" strategy="afterInteractive">
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
