import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataKhammamDist, sectionsKhammamDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Khammam EPF & ESIC Consultant: NWC 2025 for Mining Contractors, Rice Mills & Transport Logistics | EPFDesk",

  description:
    "EPFDesk provides PF & ESIC compliance services in Khammam for SCCL mining contractors, rice mills, agro-processing units and logistics companies. Expertise includes NWC 2025 wage restructuring, contractor audits, PF/ESI applicability checks and statutory filing support.",

  keywords: [
    "Khammam PF consultant",
    "Khammam ESIC consultant",
    "SCCL contractor PF ESIC",
    "mining logistics PF compliance",
    "rice mill PF ESIC Telangana",
    "agro processing PF ESIC",
    "transport logistics PF compliance",
    "NWC 2025 payroll Telangana",
    "contractor PF ESIC audits",
    "EPFDesk Khammam",
  ],

  alternates: {
    canonical: "https://epfdesk.com/khammam-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="khammam-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TG">
            <meta name="geo.placename" content="Khammam, Telangana">
            <meta name="geo.position" content="17.2473;80.1514">
            <meta name="ICBM" content="17.2473, 80.1514">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/khammam-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/khammam-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-khammam"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/khammam-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Khammam District",

          alternateName:
            "Khammam EPF & ESIC Compliance for SCCL Contractors, Rice Mills & Logistics",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/khammam-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Wyra Road",
            addressLocality: "Khammam",
            addressRegion: "Telangana",
            postalCode: "507001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.2473,
            longitude: 80.1514,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Khammam District" },
            { "@type": "Place", name: "SCCL Mining Supply Chain" },
            { "@type": "Place", name: "Madhira Rice Mills Cluster" },
            { "@type": "Place", name: "Wyra Agro-Processing Belt" },
            { "@type": "Place", name: "Transport & Logistics Corridors" },
          ],

          description:
            "EPF & ESIC compliance services for Khammam’s SCCL mining contractors, rice mills, agro-processing units and transport logistics companies. Specialization includes NWC 2025 wage restructuring, PF/ESI applicability audits, contractor compliance under CLRA and statutory filing support.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "51",
          },
        })}
      </Script>
      <Script
        id="faq-khammam"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for SCCL mining contractors in Khammam?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. SCCL mining contractors in Khammam are mandatorily covered under EPF and ESIC. Principal Employer liability applies to manpower supplied for mining, transportation, loading, and allied services.",
              },
            },
            {
              "@type": "Question",
              name: "Are rice mills in Khammam required to register under ESIC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Rice mills employing 10 or more workers and located in ESIC-notified areas of Khammam must register under ESIC. Coverage includes permanent, temporary, and seasonal workers.",
              },
            },
            {
              "@type": "Question",
              name: "How does NWC 2025 impact Khammam transport and logistics companies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under NWC 2025, at least 50% of wages must be treated as basic pay. Khammam transport and logistics companies must restructure driver and helper salaries to avoid PF and ESIC assessment risks.",
              },
            },
            {
              "@type": "Question",
              name: "Do agro-processing units in Wyra and Madhira need PF compliance?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Agro-processing units in Wyra, Madhira, and surrounding mandals must comply with EPF once employment thresholds are crossed, including contract and migrant labour.",
              },
            },
            {
              "@type": "Question",
              name: "Can EPFDesk represent employers during PF or ESIC inspections in Khammam?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end inspection handling, notice replies, wage reconciliation, and audit defence for EPF and ESIC inspections conducted by Khammam enforcement authorities.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKhammamDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKhammamDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-khammam" strategy="afterInteractive">
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
