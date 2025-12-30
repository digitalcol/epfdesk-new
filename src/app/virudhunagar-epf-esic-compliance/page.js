import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import {
  heroDataVirudhunagarDist,
  sectionsVirudhunagarDist,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Virudhunagar EPF & ESIC Compliance | Fireworks, Match Industries & PM MITRA Mega Textile Park – EPFDesk",

  description:
    "EPF & ESIC compliance for Virudhunagar’s Fireworks & Match industries and the PM MITRA Mega Textile Park. Expertise in hazardous industry ESIC, contractor compliance, and NWC 2025 wage restructuring.",

  alternates: {
    canonical: "https://epfdesk.com/virudhunagar-epf-esic-compliance",
  },

  openGraph: {
    title: "Virudhunagar EPF & ESIC Compliance | Fireworks & Mega Textile Park",
    description:
      "PF & ESIC specialists for Virudhunagar’s fireworks, match factories and PM MITRA Mega Textile Park.",
    url: "https://epfdesk.com/virudhunagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Virudhunagar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Virudhunagar EPF & ESIC Compliance | Fireworks & Textile Park",
    description:
      "PF/ESIC compliance for fireworks, match industries and PM MITRA Mega Textile Park in Virudhunagar.",
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
      <Script id="virudhunagar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Virudhunagar, Tamil Nadu">
            <meta name="geo.position" content="9.5680;77.9624">
            <meta name="ICBM" content="9.5680, 77.9624">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/virudhunagar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/virudhunagar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-virudhunagar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/virudhunagar-epf-esic-compliance#organization",

          name: "Virudhunagar EPF & ESIC Compliance for Fireworks, Match Industries & PM MITRA Mega Textile Park | EPFDesk",

          alternateName:
            "EPFDesk – Virudhunagar Fireworks, Match & Mega Textile Park Compliance Experts",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/virudhunagar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Madurai Road",
            addressLocality: "Virudhunagar",
            addressRegion: "Tamil Nadu",
            postalCode: "626001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 9.568,
            longitude: 77.9624,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Virudhunagar District" },
            { "@type": "Place", name: "Fireworks & Match Industry Cluster" },
            {
              "@type": "Place",
              name: "PM MITRA Mega Textile Park (E. Kumaralingapuram)",
            },
            { "@type": "Place", name: "Emerging Textile & Industrial Units" },
          ],

          description:
            "Virudhunagar is historically known for its Fireworks and Matchbox industries and is emerging as a major textile manufacturing zone through the PM MITRA Mega Textile Park. EPFDesk provides EPF & ESIC compliance for hazardous industries, large-scale textile workforce onboarding, contractor audits, and NWC 2025 wage restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="faq-schema-virudhunagar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for fireworks and match factories in Virudhunagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Fireworks and match manufacturing units in Virudhunagar must register under EPF once they employ 20 or more workers. Both permanent and contract labour engaged in production, packing, and loading operations are required to be covered.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to hazardous fireworks and chemical-based industries?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ESIC coverage is mandatory for hazardous industries employing 10 or more workers with wages up to ₹21,000 per month. Workers exposed to chemicals, explosives, and high-risk processes must be enrolled under ESIC.",
              },
            },
            {
              "@type": "Question",
              name: "How are seasonal and contract workers treated for EPF compliance in Virudhunagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Seasonal and contract workers must be included under EPF if statutory thresholds are met. Non-inclusion of short-term or migrant labour is a common audit issue in Virudhunagar’s fireworks and match industries.",
              },
            },
            {
              "@type": "Question",
              name: "What are the major EPF audit risks for fireworks and match units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Key risks include non-registration of contractors, under-reporting of worker strength, suppression of basic wages, mismatch between muster rolls and ECR filings, and failure to meet Principal Employer obligations.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 impact Virudhunagar industries?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under the New Wage Code 2025, basic wages must constitute at least 50% of total remuneration. Fireworks, match, and textile units using allowance-heavy wage structures must realign payrolls to avoid retrospective EPF liabilities.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk support compliance for PM MITRA Mega Textile Park units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk assists PM MITRA Mega Textile Park employers with large-scale workforce onboarding, EPF/ESIC registration, contractor audits, wage restructuring under NWC 2025, and statutory inspection handling.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataVirudhunagarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVirudhunagarDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-virudhunagar" strategy="afterInteractive">
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
