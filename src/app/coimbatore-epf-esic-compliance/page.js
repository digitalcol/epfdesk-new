import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataCoimbatoreDist, sectionsCoimbatoreDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Coimbatore EPF & ESIC Compliance 2025: Spinning Mills, Pumps & IT SEZs | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Coimbatore spinning mills, pump manufacturing units, engineering MSMEs and IT/ITES SEZs. Specialists in NWC 2025 payroll restructuring, EPFO 7A defense, contractor compliance and statutory audits for SIMA & CODISSIA members.",

  keywords: [
    "Coimbatore PF consultant",
    "Coimbatore ESIC consultant",
    "SIMA spinning mills PF compliance",
    "CODISSIA industrial estate ESIC",
    "Pump manufacturing PF ESIC",
    "IT SEZ compliance Coimbatore",
    "NWC 2025 payroll Coimbatore",
    "EPFO 7A defense Coimbatore",
  ],

  alternates: {
    canonical: "https://epfdesk.com/coimbatore-epf-esic-compliance",
  },

  openGraph: {
    title: "Coimbatore EPF & ESIC Compliance | Spinning Mills, Pumps & IT SEZs",
    description:
      "PF & ESIC specialists for Coimbatore spinning mills, pump manufacturers, engineering MSMEs and IT SEZ operations.",
    url: "https://epfdesk.com/coimbatore-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Coimbatore EPF ESIC Compliance",
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
      {/* ========= GEO META (COIMBATORE) ========= */}
      <Script id="coimbatore-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Coimbatore">
            <meta name="geo.position" content="11.0168;76.9558">
            <meta name="ICBM" content="11.0168, 76.9558">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/coimbatore-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/coimbatore-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-coimbatore"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/coimbatore-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Coimbatore Industries",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/coimbatore-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          aaddress: {
            "@type": "PostalAddress",
            streetAddress: "Avinashi Road",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            postalCode: "641018",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 11.0168,
            longitude: 76.9558,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Coimbatore District" },
            { "@type": "City", name: "Coimbatore" },
            { "@type": "Place", name: "SIMA Spinning Mills" },
            { "@type": "Place", name: "CODISSIA Industrial Estate" },
            { "@type": "Place", name: "Pump & Motor Manufacturing Cluster" },
            { "@type": "Place", name: "IT SEZs & Tech Parks" },
          ],

          description:
            "EPF & ESIC compliance services for Coimbatore spinning mills, pump manufacturing units, engineering MSMEs and IT/ITES SEZs, including NWC 2025 payroll restructuring, EPFO Section 7A defense and contractor compliance.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="schema-coimbatore-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for spinning mills and manufacturing units in Coimbatore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPF and ESIC are mandatory for eligible spinning mills, pump manufacturing units, engineering MSMEs and factories in Coimbatore. Units associated with SIMA and CODISSIA are regularly audited for PF coverage, ESIC registration and contractor compliance.",
              },
            },
            {
              "@type": "Question",
              name: "What are the common PF and ESIC compliance risks for Coimbatore industries under NWC 2025?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Major risks include incorrect allowance structuring under the 50% basic wage rule, exclusion of contract labour wages, overtime misclassification and EPFO Section 7A inquiries. Textile and engineering units in Coimbatore face high scrutiny due to large workforce strength.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk handle EPFO 7A notices and contractor audits in Coimbatore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end support for EPFO Section 7A proceedings, contractor audits, CLRA compliance and ESIC inspections for spinning mills, manufacturing units and IT SEZs across Coimbatore.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataCoimbatoreDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsCoimbatoreDist} />
      </FadeInWhenVisible>
      <Script id="conversion-tracking-coimbatore" strategy="afterInteractive">
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
