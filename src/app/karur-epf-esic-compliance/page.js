import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataKarurDist, sectionsKarurDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Karur EPF & ESIC Compliance: NWC 2025 for Home Textiles, Export Units & Paper Manufacturing | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Karur’s home textile exporters, paper mills and bus body building units. Coverage includes NWC 2025 payroll alignment, migrant & contract labour PF/ESI applicability and export-linked statutory audits.",

  keywords: [
    "Karur PF consultant",
    "Karur ESIC consultant",
    "home textile PF ESIC Karur",
    "export textile compliance Karur",
    "paper mill PF ESIC Tamil Nadu",
    "bus body building PF ESIC",
    "NWC 2025 payroll Karur",
    "contract labour compliance Karur",
    "migrant worker PF ESIC",
  ],

  alternates: {
    canonical: "https://epfdesk.com/karur-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="karur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Karur, Tamil Nadu">
            <meta name="geo.position" content="10.9601;78.0766">
            <meta name="ICBM" content="10.9601, 78.0766">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/karur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/karur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-karur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/karur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Karur Home Textile & Export Industries",

          alternateName:
            "Karur EPF & ESIC Compliance for Home Textiles, Paper Mills & Bus Body Building Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/karur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jawahar Bazaar",
            addressLocality: "Karur",
            addressRegion: "Tamil Nadu",
            postalCode: "639001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 10.9601,
            longitude: 78.0766,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Karur District" },
            { "@type": "Place", name: "Home Textile Export Cluster" },
            { "@type": "Place", name: "Paper Manufacturing Belt" },
            { "@type": "Place", name: "Bus Body Building Units" },
          ],

          description:
            "EPF & ESIC compliance services for Karur home textile exporters, paper manufacturing units and bus body building industries. Expertise includes export-linked wage structuring, PF/ESI applicability for migrant & contract labour, and NWC 2025 payroll alignment.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="schema-karur-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for home textile exporters and units in Karur?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPF and ESIC are mandatory for eligible home textile exporters, weaving units and processing units in Karur. Authorities closely monitor wage structures, migrant labour deployment and contractor compliance in export-linked industries.",
              },
            },
            {
              "@type": "Question",
              name: "What are the major PF and ESIC risks for Karur textile and paper industries under NWC 2025?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Key risks include improper basic wage calculation under the 50% rule, exclusion of migrant and contract labour wages, piece-rate payment issues and EPFO audits. Export-oriented units face heightened scrutiny due to compliance documentation requirements.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk handle PF, ESIC and contractor compliance for Karur industries?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end EPF, ESIC and CLRA compliance support for Karur home textile exporters, paper mills and bus body building units, including monthly filings, inspections handling and NWC 2025 payroll alignment.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKarurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKarurDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-karur" strategy="afterInteractive">
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
