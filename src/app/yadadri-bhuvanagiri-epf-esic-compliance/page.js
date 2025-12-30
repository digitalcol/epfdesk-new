import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataYadadriDist, sectionsYadadriDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Yadadri EPF & ESIC Compliance | NWC 2025 for Pochampally Handloom, Bhongir IP Chemicals & Dandumalkapur MSME Park | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services in Yadadri Bhuvanagiri, covering Pochampally Handloom Cluster, Bhongir Industrial Park, Chemicals, Pharma & Dandumalkapur MSME Park. NWC 2025 payroll restructuring, PF audits, ESIC registration and contractor compliance.",

  alternates: {
    canonical: "https://epfdesk.com/yadadri-bhuvanagiri-epf-esic-compliance",
  },

  openGraph: {
    title: "Yadadri EPF & ESIC Compliance | Handloom, Chemicals & MSME Park",
    description:
      "Specialized EPF & ESIC compliance for Yadadri Bhuvanagiri handloom clusters, chemical/pharma units and MSMEs.",
    url: "https://epfdesk.com/yadadri-bhuvanagiri-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Yadadri EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Yadadri EPF & ESIC Compliance | Handloom, Chemicals & MSMEs | EPFDesk",
    description:
      "NWC 2025 ready EPF & ESIC compliance for Yadadri Bhuvanagiri handloom, chemical, pharma and MSME sectors.",
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
      <Script id="yadadri-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TG">
            <meta name="geo.placename" content="Yadadri Bhuvanagiri, Telangana">
            <meta name="geo.position" content="17.5449;78.9416">
            <meta name="ICBM" content="17.5449, 78.9416">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/yadadri-bhuvanagiri-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/yadadri-bhuvanagiri-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-yadadri"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/yadadri-bhuvanagiri-epf-esic-compliance#organization",

          name: "Yadadri EPF & ESIC Compliance | Handloom, Chemicals & MSME Park | EPFDesk",

          alternateName:
            "EPFDesk – PF & ESIC Consultants for Yadadri Bhuvanagiri Handloom & Industrial Clusters",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/yadadri-bhuvanagiri-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Bhongir Road",
            addressLocality: "Bhuvanagiri",
            addressRegion: "Telangana",
            postalCode: "508116",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.5449,
            longitude: 78.9416,
          },

          areaServed: [
            {
              "@type": "AdministrativeArea",
              name: "Yadadri Bhuvanagiri District",
            },
            { "@type": "Place", name: "Pochampally Handloom Cluster" },
            { "@type": "Place", name: "Bhongir Industrial Park" },
            { "@type": "Place", name: "Dandumalkapur MSME Park" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Yadadri Bhuvanagiri covering handloom piece-rate workers, chemical and pharma units, and MSMEs. Expertise in NWC 2025 wage restructuring, PF audits, ESIC registration, contractor compliance and PE liability.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "49",
          },
        })}
      </Script>
      <Script
        id="faq-schema-yadadri"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF mandatory for Pochampally handloom and piece-rate workers in Yadadri?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPF applies to Pochampally handloom units once the statutory threshold is met. Piece-rate workers must be covered by converting wages into EPF-compliant basic pay structures as per applicable norms.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to handloom and dyeing units in Yadadri Bhuvanagiri?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ESIC coverage is mandatory for eligible employees in handloom dyeing, weaving and processing units earning up to ₹21,000 per month, especially where chemical processes or wet work is involved.",
              },
            },
            {
              "@type": "Question",
              name: "What are the EPF and ESIC compliance risks for chemical and pharma units in Bhongir Industrial Park?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include non-enrolment of contract workers, incorrect wage splitting, exclusion of allowances from EPF and non-alignment with New Wage Code 2025 requirements.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 affect MSMEs in Dandumalkapur MSME Park?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under NWC 2025, basic wages must constitute at least 50% of total remuneration. MSMEs must restructure payroll to avoid retrospective EPF liabilities and inspection objections.",
              },
            },
            {
              "@type": "Question",
              name: "Are Principal Employers liable for contractor PF and ESIC compliance in Yadadri district?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Principal Employers are fully liable for EPF and ESIC compliance of contractors operating within their premises, including handloom units, chemical plants and MSMEs.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk handle EPF and ESIC inspections and audits in Yadadri Bhuvanagiri?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides complete audit defence including wage reconciliation, contractor mapping, inspection response drafting and statutory representation before EPFO and ESIC authorities.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataYadadriDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsYadadriDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-yadadri" strategy="afterInteractive">
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
