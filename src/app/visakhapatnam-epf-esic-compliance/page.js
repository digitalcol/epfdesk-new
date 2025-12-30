import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataVisakhapatnamDist,
  sectionsVisakhapatnamDist,
  vizagDistFAQ,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Visakhapatnam EPF & ESIC Consultant | NWC 2025 for Port Logistics, Pharma, Heavy Engineering & IT | EPFDesk",

  description:
    "EPF & ESIC compliance for Visakhapatnam port logistics, Pharma City, heavy engineering, naval supply chain and IT/ITES sectors. Expertise in contractor audits, OSH–ESIC integration and NWC 2025 payroll modelling.",

  alternates: {
    canonical: "https://epfdesk.com/visakhapatnam-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Visakhapatnam EPF & ESIC Compliance | Port, Pharma & Heavy Engineering",
    description:
      "PF & ESIC specialists for Vizag Port Logistics, Pharma City, Heavy Engineering and IT/ITES sectors.",
    url: "https://epfdesk.com/visakhapatnam-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Visakhapatnam EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Visakhapatnam EPF & ESIC Compliance | Port, Pharma & Heavy Engineering",
    description:
      "PF/ESIC compliance for Vizag Port Logistics, Pharma City, Steel, Heavy Engineering and IT sectors.",
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
      <Script id="visakhapatnam-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-AP">
            <meta name="geo.placename" content="Visakhapatnam, Andhra Pradesh">
            <meta name="geo.position" content="17.6868;83.2185">
            <meta name="ICBM" content="17.6868, 83.2185">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/visakhapatnam-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/visakhapatnam-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-visakhapatnam"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/visakhapatnam-epf-esic-compliance#organization",

          name: "Visakhapatnam EPF & ESIC Compliance for Port Logistics, Pharma City, Heavy Engineering & IT | EPFDesk",

          alternateName:
            "EPFDesk – Vizag EPF & ESIC Consultants for Port, Pharma & Industrial Sectors",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/visakhapatnam-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Dwaraka Nagar",
            addressLocality: "Visakhapatnam",
            addressRegion: "Andhra Pradesh",
            postalCode: "530001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.6868,
            longitude: 83.2185,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Visakhapatnam District" },
            { "@type": "Place", name: "Visakhapatnam Port & Logistics Zone" },
            { "@type": "Place", name: "APIIC Pharma City" },
            { "@type": "Place", name: "Vizag Steel & Heavy Engineering Belt" },
            { "@type": "Place", name: "Naval Dockyard & Defence Supply Chain" },
          ],

          description:
            "Visakhapatnam is a strategic industrial hub covering port logistics, naval defence supply chains, pharma manufacturing, heavy engineering and IT/ITES. EPFDesk provides EPF & ESIC compliance covering contractor audits, OSH–ESIC integration, high-salary payroll modelling under NWC 2025 and end-to-end ECR filing.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="faq-schema-visakhapatnam"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for port logistics and cargo handling contractors in Visakhapatnam?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Port logistics operators and cargo handling contractors in Visakhapatnam must register under EPF once the employee threshold is met. Principal Employers at ports are liable for EPF compliance of all engaged contractors.",
              },
            },
            {
              "@type": "Question",
              name: "Does ESIC apply to port labour, shipyard workers and dock employees?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ESIC coverage is mandatory for eligible dock workers, shipyard labour and logistics staff earning up to ₹21,000 per month. High-risk operational zones are closely scrutinized during ESIC inspections.",
              },
            },
            {
              "@type": "Question",
              name: "What are the EPF compliance risks for Pharma City units in Visakhapatnam?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include exclusion of contract chemists, misuse of consultant classifications, allowance-heavy salary structures and non-alignment with New Wage Code 2025 requirements.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 affect high-salary employees in Vizag IT and engineering sectors?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under NWC 2025, basic wages must form at least 50% of total remuneration. IT, PSU and engineering employers in Visakhapatnam must restructure CTC models to prevent retrospective EPF liabilities.",
              },
            },
            {
              "@type": "Question",
              name: "Are defence supply chain and naval contractors required to follow EPF and ESIC norms?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Naval dockyard contractors and defence supply chain vendors are fully subject to EPF, ESIC and CLRA compliance. Principal Employer liability applies strictly in defence-linked establishments.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk support EPF and ESIC audits conducted by RO Visakhapatnam?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides complete audit defence for RO Visakhapatnam inspections, including contractor mapping, wage reconciliation, OSH–ESIC alignment and statutory representation.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataVisakhapatnamDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsVisakhapatnamDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={vizagDistFAQ} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script
        id="conversion-tracking-visakhapatnam"
        strategy="afterInteractive"
      >
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
