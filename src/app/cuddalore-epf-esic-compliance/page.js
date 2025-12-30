import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataCuddaloreDist, sectionsCuddaloreDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Cuddalore EPF & ESIC Compliance 2025: SIPCOT Chemical, Pharma & Heavy Industry | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Cuddalore SIPCOT chemical, petrochemical, pharma and fertilizer units. Specialists in Principal Employer liability reduction, contractor compliance and NWC 2025 payroll alignment for high-risk industrial zones.",

  keywords: [
    "Cuddalore PF consultant",
    "Cuddalore ESIC consultant",
    "SIPCOT Cuddalore PF compliance",
    "Chemical industry ESIC compliance",
    "Pharma PF ESIC Cuddalore",
    "Fertilizer industry PF ESIC",
    "Principal Employer liability PF ESIC",
    "Contractor compliance Cuddalore",
    "NWC 2025 payroll chemical sector",
  ],

  alternates: {
    canonical: "https://epfdesk.com/cuddalore-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Cuddalore EPF & ESIC Compliance | SIPCOT Chemical, Pharma & Heavy Industry",
    description:
      "PF & ESIC specialists for chemical, petrochemical, pharma and fertilizer units in Cuddalore SIPCOT. Reduce PE liability and align payroll with NWC 2025.",
    url: "https://epfdesk.com/cuddalore-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Cuddalore EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ===========================
   PAGE COMPONENT
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META (CUDDALORE) ========= */}
      <Script id="cuddalore-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Cuddalore">
            <meta name="geo.position" content="11.7480;79.7714">
            <meta name="ICBM" content="11.7480, 79.7714">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/cuddalore-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/cuddalore-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-cuddalore"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/cuddalore-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Cuddalore SIPCOT Industries",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/cuddalore-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "OT Road",
            addressLocality: "Cuddalore",
            addressRegion: "Tamil Nadu",
            postalCode: "607001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 11.748,
            longitude: 79.7714,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Cuddalore District" },
            { "@type": "City", name: "Cuddalore" },
            { "@type": "Place", name: "Cuddalore SIPCOT Industrial Park" },
            { "@type": "Place", name: "Chemical & Petrochemical Units" },
            {
              "@type": "Place",
              name: "Pharma & Fertilizer Manufacturing Belt",
            },
          ],

          description:
            "EPF & ESIC compliance services for Cuddalore SIPCOT chemical, petrochemical, pharma and fertilizer units, including Principal Employer liability mitigation, contractor audits and NWC 2025 payroll restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="schema-cuddalore-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for chemical and pharma units in Cuddalore SIPCOT?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPF and ESIC are mandatory for eligible chemical, petrochemical, pharmaceutical and fertilizer units operating in Cuddalore SIPCOT. These industries are categorised as high-risk and are closely monitored for PF coverage, ESIC registration and contractor compliance.",
              },
            },
            {
              "@type": "Question",
              name: "What are the major Principal Employer risks in Cuddalore SIPCOT?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Principal Employers in Cuddalore SIPCOT face risks related to unpaid PF and ESIC contributions of contractors, incorrect wage structuring, hazardous process coverage under ESIC and non-compliance with CLRA provisions. Audits frequently focus on contractor wage records and deployment.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk handle PF, ESIC and contractor audits for SIPCOT units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end PF, ESIC and CLRA compliance support for SIPCOT units in Cuddalore, including contractor audits, PE liability mitigation, ESIC inspections and NWC 2025 payroll alignment.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataCuddaloreDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsCuddaloreDist} />
      </FadeInWhenVisible>
      <Script id="conversion-tracking-cuddalore" strategy="afterInteractive">
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
