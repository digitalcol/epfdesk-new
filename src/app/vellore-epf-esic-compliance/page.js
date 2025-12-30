import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataVelloreDist, sectionsVelloreDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Vellore EPF & ESIC Compliance | NWC 2025 for Leather, Tanning & Footwear Export Units – EPFDesk",

  description:
    "EPF & ESIC compliance for Vellore’s leather manufacturing ecosystem including Ambur and Ranipet. Experts in piece-rate wage restructuring under NWC 2025, chemical-zone ESIC applicability and contractor audits.",

  alternates: {
    canonical: "https://epfdesk.com/vellore-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Vellore EPF & ESIC Compliance | Leather, Tanning & Footwear Export Units",
    description:
      "PF & ESIC specialists for Ambur and Ranipet leather clusters. Piece-rate wage audits, NWC 2025 payroll restructuring and chemical-zone compliance.",
    url: "https://epfdesk.com/vellore-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vellore EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vellore EPF & ESIC Compliance | Leather & Footwear Export Sector",
    description:
      "Expert EPF & ESIC compliance for leather, tanning and footwear export units in Vellore, Ambur and Ranipet.",
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
      <Script id="vellore-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Vellore, Tamil Nadu">
            <meta name="geo.position" content="12.9165;79.1325">
            <meta name="ICBM" content="12.9165, 79.1325">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/vellore-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/vellore-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-vellore"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/vellore-epf-esic-compliance#organization",

          name: "Vellore EPF & ESIC Compliance for Leather, Tanning & Footwear Export Units | EPFDesk",

          alternateName:
            "EPFDesk – Leather & Footwear Industry PF ESIC Consultants in Vellore",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/vellore-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* 🔒 HQ ADDRESS – SAME ACROSS SITE */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Katpadi Road",
            addressLocality: "Vellore",
            addressRegion: "Tamil Nadu",
            postalCode: "632004",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 12.9165,
            longitude: 79.1325,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Vellore District" },
            { "@type": "Place", name: "Ambur Leather Cluster" },
            { "@type": "Place", name: "Ranipet Tanning Belt" },
            { "@type": "Place", name: "Footwear Export Units" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Vellore’s leather manufacturing ecosystem, including Ambur and Ranipet. Specialized in piece-rate wage conversion under NWC 2025, ESIC compliance in chemical processing units, PF audits and contractor statutory control.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="faq-schema-vellore"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for leather and tanning units in Vellore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Leather manufacturing, tanning, and footwear units in Vellore, Ambur, and Ranipet must register under EPF once they employ 20 or more workers. This includes piece-rate workers and contract labour engaged in processing and finishing operations.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to chemical tanning and leather processing units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ESIC applies to leather and chemical processing units employing 10 or more workers with wages up to ₹21,000 per month. Workers exposed to chemicals, effluent treatment plants, and finishing sections must be covered.",
              },
            },
            {
              "@type": "Question",
              name: "How should piece-rate wages be treated for EPF compliance in leather units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Piece-rate wages must be converted into a notional monthly wage for EPF contribution purposes. Excluding piece-rate earnings is a common audit issue in Vellore leather and footwear export units.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF audit risks for Ambur and Ranipet leather clusters?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Major risks include non-inclusion of contract labour, suppression of basic wages through allowances, incorrect handling of piece-rate pay, non-registration of contractors, and mismatch between wage registers and ECR filings.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 impact leather and footwear exporters in Vellore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the New Wage Code 2025, basic wages must form at least 50% of total remuneration. Leather and footwear exporters using allowance-heavy salary structures must restructure payrolls to avoid retrospective EPF liabilities.",
              },
            },
            {
              "@type": "Question",
              name: "Can EPFDesk handle contractor compliance and inspections for Vellore leather units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk supports Vellore leather manufacturers with contractor audits, EPF/ESIC registration checks, piece-rate wage validation, inspection handling, and statutory defence.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataVelloreDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVelloreDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-vellore" strategy="afterInteractive">
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
