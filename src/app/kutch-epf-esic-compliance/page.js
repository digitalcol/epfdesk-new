import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataKutchDist, sectionsKutchDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kutch's Top EPF & ESIC Consultant: NWC 2025 Ready Compliance for Kandla Port, Mundra SEZ & Gandhidham | EPFDesk",

  description:
    "EPFDesk provides PF & ESIC compliance services in Kutch for port logistics, SEZ enterprises, marine trade and large contractor ecosystems across Kandla Port, Mundra SEZ and Gandhidham. Services include NWC 2025 payroll structuring, ESIC rollout advisory, contractor liability audits and statutory filing support.",

  keywords: [
    "Kutch PF consultant",
    "Kutch ESIC consultant",
    "Kandla Port PF ESIC",
    "Mundra SEZ labour compliance",
    "Gandhidham logistics PF ESIC",
    "Deen Dayal Port Trust compliance",
    "port contractor PF ESIC Gujarat",
    "marine trade PF ESIC",
    "NWC 2025 Gujarat payroll",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kutch-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Kutch EPF & ESIC Consultant | Kandla Port, Mundra SEZ & Gandhidham Compliance",
    description:
      "PF & ESIC compliance support for Kandla Port, Mundra SEZ, Gandhidham logistics hubs and contractor networks. NWC 2025 payroll modeling, ESIC implementation and statutory compliance.",
    url: "https://epfdesk.com/kutch-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kutch EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kutch EPF & ESIC Consultant | Port, SEZ & Logistics Compliance",
    description:
      "Compliance experts for Kandla Port, Mundra SEZ, Gandhidham logistics and marine trade. PF/ESI audits, contractor compliance and NWC 2025 statutory alignment.",
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
      <Script id="kutch-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-GJ">
            <meta name="geo.placename" content="Kutch, Gujarat, India">
            <meta name="geo.position" content="23.7337;69.8597">
            <meta name="ICBM" content="23.7337, 69.8597">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kutch-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kutch-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kutch"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/kutch-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Kutch District",

          alternateName:
            "Kutch EPF & ESIC Compliance for Ports, SEZs & Logistics",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kutch-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Tagore Road",
            addressLocality: "Gandhidham",
            addressRegion: "Gujarat",
            postalCode: "370201",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.7337,
            longitude: 69.8597,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Kutch District" },
            { "@type": "Place", name: "Kandla Port" },
            { "@type": "Place", name: "Mundra SEZ" },
            { "@type": "Place", name: "Gandhidham" },
            { "@type": "Place", name: "Deen Dayal Port Trust" },
          ],

          description:
            "EPF & ESIC compliance services for Kutch port logistics, SEZ enterprises, marine trade and contractor-heavy operations. Expertise includes NWC 2025 payroll structuring, ESIC rollout, contractor liability audits and statutory filings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="faq-kutch"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for contractors working at Kandla Port and Mundra SEZ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Contractors and subcontractors engaged at Kandla Port, Mundra SEZ and Gandhidham logistics hubs are mandatorily covered under EPF and ESIC if they meet employee and wage thresholds. Principal Employers are jointly liable for non-compliance.",
              },
            },
            {
              "@type": "Question",
              name: "How does Principal Employer liability apply in Kutch port and SEZ operations?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "In Kutch, port authorities, SEZ developers and large logistics firms are treated as Principal Employers. They are legally responsible for PF and ESIC compliance of all on-roll and contract labour, even if the contractor defaults.",
              },
            },
            {
              "@type": "Question",
              name: "Is ESIC applicable for port, shipping and marine trade workers in Kutch?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ESIC applies to port handling staff, warehouse workers, transport labour, marine service crews and logistics employees earning within the ESIC wage ceiling. Coverage is closely audited in port-linked establishments.",
              },
            },
            {
              "@type": "Question",
              name: "What are the common EPF and ESIC audit risks in Mundra SEZ and Gandhidham?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include unregistered contractors, wage splitting to suppress PF, non-enrollment of temporary port labour, and incorrect ESIC applicability assumptions in SEZ units. These frequently trigger inspections and Section 7A proceedings.",
              },
            },
            {
              "@type": "Question",
              name: "How does NWC 2025 impact payroll structures for Kutch port and logistics companies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Under NWC 2025, at least 50% of total wages must be treated as basic wages for PF calculation. Port contractors and logistics firms in Kutch must restructure allowances to avoid retrospective PF demands and penalties.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk handle contractor audits and compliance for Kutch SEZ units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk specializes in contractor compliance audits, Principal Employer risk mitigation, EPF/ESIC registrations, payroll restructuring and inspection defense for Kutch SEZs, ports and logistics-heavy establishments.",
              },
            },
          ],
        })}
      </Script>
      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKutchDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKutchDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING (LOCKED) ========= */}
      <Script id="conversion-tracking-kutch" strategy="afterInteractive">
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
