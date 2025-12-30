import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataHyderabadDist, sectionsHyderabadDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Hyderabad EPF & ESIC Consultant: NWC 2025 Ready Compliance for HITEC City & Financial District | EPFDesk",

  description:
    "Specialized EPF & ESIC compliance for Hyderabad IT & ITeS companies in HITEC City, Gachibowli and the Financial District. Experts in NWC 2025 payroll restructuring, PF/ESI registration, monthly ECR filings, audit defence and corporate statutory compliance.",

  keywords: [
    "Hyderabad PF consultant",
    "Hyderabad ESIC consultant",
    "HITEC City PF ESIC compliance",
    "Gachibowli labour law advisor",
    "Financial District PF compliance",
    "NWC 2025 payroll Hyderabad",
    "IT ITeS PF ESIC consultant",
    "corporate compliance Hyderabad",
    "PF audit support Hyderabad",
    "EPFDesk Hyderabad",
  ],

  alternates: {
    canonical: "https://epfdesk.com/hyderabad-epf-esic-compliance",
  },

  openGraph: {
    title: "Hyderabad EPF & ESIC Compliance | HITEC City & Financial District",
    description:
      "PF & ESIC specialists for Hyderabad IT/ITeS companies. NWC 2025 payroll structuring, audit defence and monthly compliance handled.",
    url: "https://epfdesk.com/hyderabad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hyderabad PF ESIC Compliance",
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
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="hyderabad-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TS">
            <meta name="geo.placename" content="Hyderabad, Telangana">
            <meta name="geo.position" content="17.3850;78.4867">
            <meta name="ICBM" content="17.3850, 78.4867">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/hyderabad-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/hyderabad-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-hyderabad"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/hyderabad-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Hyderabad IT & Corporate Sector",

          alternateName:
            "Hyderabad EPF & ESIC Compliance Experts for HITEC City & Financial District",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/hyderabad-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ CITY-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "HITEC City",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500081",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.385,
            longitude: 78.4867,
          },

          areaServed: [
            { "@type": "City", name: "Hyderabad" },
            { "@type": "Place", name: "HITEC City" },
            { "@type": "Place", name: "Gachibowli" },
            { "@type": "Place", name: "Financial District" },
            { "@type": "Place", name: "IT Parks & Corporate Offices" },
          ],

          description:
            "EPFDesk provides NWC 2025–ready EPF & ESIC compliance services for Hyderabad IT/ITeS companies. Coverage includes payroll restructuring, PF & ESIC registration, monthly ECR filing, audit defence, contractor compliance and statutory risk management for tech parks and corporate offices.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="schema-hyderabad-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for IT and ITES companies in Hyderabad?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPF and ESIC are mandatory for eligible IT, ITES and corporate establishments in Hyderabad, including companies operating in HITEC City, Gachibowli and the Financial District. Authorities closely monitor payroll structures and contribution compliance.",
              },
            },
            {
              "@type": "Question",
              name: "What are the major EPF and ESIC risks for Hyderabad corporates under NWC 2025?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Key risks include non-compliance with the 50% basic wage rule, incorrect allowance structuring, exclusion of contractor wages and EPFO Section 7A inquiries. Hyderabad IT companies face heightened scrutiny due to high salary packages and outsourcing models.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk handle EPFO audits and contractor compliance in Hyderabad?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end support for EPFO audits, Section 7A proceedings, contractor compliance, CLRA obligations and monthly PF & ESIC filings for IT and corporate establishments across Hyderabad.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHyderabadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <ThreeStepSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHyderabadDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-hyderabad" strategy="afterInteractive">
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

          document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
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
