import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataErodeDist, sectionsErodeDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Erode EPF & ESIC Compliance 2025: Powerloom, Processing Mills & Handloom Cooperatives | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Erode’s decentralized textile ecosystem including powerloom clusters, handloom cooperatives, textile processing mills and yarn dyeing units. Specialists in NWC 2025 wage formalization, cooperative society compliance, contractor verification and monthly PF/ESI management.",

  keywords: [
    "Erode PF consultant",
    "Erode ESIC consultant",
    "Powerloom PF ESIC compliance",
    "Handloom cooperative PF compliance",
    "Textile processing mills ESIC",
    "Yarn dyeing unit PF ESIC",
    "NWC 2025 textile compliance",
    "Contractor compliance Erode",
    "Weaving industry PF ESIC",
    "EPFDesk Erode",
  ],

  alternates: {
    canonical: "https://epfdesk.com/erode-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Erode EPF & ESIC Compliance | Powerloom, Handloom & Textile Processing",
    description:
      "PF & ESIC specialists for Erode’s powerloom clusters, handloom cooperatives, textile processing mills and dyeing units. NWC 2025 wage structuring and contractor compliance support.",
    url: "https://epfdesk.com/erode-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Erode EPF ESIC Compliance",
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
      <Script id="erode-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Erode">
            <meta name="geo.position" content="11.3410;77.7172">
            <meta name="ICBM" content="11.3410, 77.7172">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/erode-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/erode-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-erode"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/erode-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Erode District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/erode-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Perundurai Road",
            addressLocality: "Erode",
            addressRegion: "Tamil Nadu",
            postalCode: "638001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 11.341,
            longitude: 77.7172,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Erode District" },
            { "@type": "City", name: "Erode" },
            { "@type": "Place", name: "Powerloom Clusters" },
            { "@type": "Place", name: "Handloom Cooperatives" },
            { "@type": "Place", name: "Textile Processing & Dyeing Units" },
          ],

          description:
            "EPF & ESIC compliance services for Erode’s decentralized textile economy including powerloom clusters, handloom cooperatives, textile processing mills and yarn dyeing units. Expertise in NWC 2025 wage formalization, cooperative society PF compliance, contractor verification and monthly PF/ESI management.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="schema-erode-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for powerloom and handloom units in Erode?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPF and ESIC are mandatory for eligible powerloom units, handloom cooperatives, textile processing mills and dyeing units in Erode. Authorities closely monitor wage records, worker classification and contribution compliance in the textile sector.",
              },
            },
            {
              "@type": "Question",
              name: "What are the key PF and ESIC risks for Erode textile units under NWC 2025?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Major risks include improper basic wage calculation under the 50% rule, exclusion of piece-rate and seasonal workers, cooperative society payroll gaps and contractor non-compliance. Textile units in Erode face frequent inspections due to decentralized workforce structures.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk support cooperative societies and contractors in Erode?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides PF, ESIC and contractor compliance support for powerloom units, handloom cooperatives and textile processing mills in Erode, including monthly filings, inspections handling and NWC 2025 wage alignment.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataErodeDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsErodeDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-erode" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              gtag('event', 'phone_click', {
                event_category: 'conversion',
                event_label: el.getAttribute('href'),
                value: 5
              });
            });
          });

          document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
            el.addEventListener('click', () => {
              gtag('event', 'whatsapp_click', {
                event_category: 'conversion',
                event_label: window.location.pathname,
                value: 5
              });
            });
          });

          document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
              gtag('event', 'form_submission', {
                event_category: 'lead',
                event_label: window.location.pathname,
                value: 10
              });
            });
          });
        `}
      </Script>
    </>
  );
}
