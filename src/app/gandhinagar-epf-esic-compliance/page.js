import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataGandhinagarDist, sectionsGandhinagarDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Gandhinagar EPF & ESIC Compliance 2025: GIFT City, IT/ITES SEZs, FinTech & Electronics Units | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Gandhinagar’s GIFT City firms, IT/ITES SEZs, fintech companies and Kalol electronics units. Specialists in NWC 2025 payroll structuring, fixed-term employment, startup compliance and SEZ labour regulations.",

  keywords: [
    "Gandhinagar PF consultant",
    "Gandhinagar ESIC consultant",
    "GIFT City PF ESIC compliance",
    "IT SEZ labour compliance Gujarat",
    "Fintech PF ESIC advisory",
    "Kalol electronics PF ESIC",
    "Fixed term employment PF rules",
    "Startup labour law compliance Gujarat",
    "NWC 2025 payroll structuring",
    "EPFDesk Gandhinagar",
  ],

  alternates: {
    canonical: "https://epfdesk.com/gandhinagar-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Gandhinagar EPF & ESIC Compliance | GIFT City, IT SEZ & Electronics Hub",
    description:
      "PF & ESIC specialists for GIFT City, IT/ITES SEZs, fintech firms and electronics manufacturers in Gandhinagar.",
    url: "https://epfdesk.com/gandhinagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gandhinagar EPF ESIC Compliance",
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
      <Script id="gandhinagar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-GJ">
            <meta name="geo.placename" content="Gandhinagar">
            <meta name="geo.position" content="23.2156;72.6369">
            <meta name="ICBM" content="23.2156, 72.6369">
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/gandhinagar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/gandhinagar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-gandhinagar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/gandhinagar-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for GIFT City & Gandhinagar District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/gandhinagar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sector 11",
            addressLocality: "Gandhinagar",
            addressRegion: "Gujarat",
            postalCode: "382010",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.2156,
            longitude: 72.6369,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Gandhinagar District" },
            { "@type": "Place", name: "GIFT City" },
            { "@type": "Place", name: "IT/ITES SEZs" },
            { "@type": "Place", name: "Kalol Electronics Manufacturing Belt" },
            { "@type": "Place", name: "Infotech & FinTech Zone" },
          ],

          description:
            "EPF & ESIC compliance services for Gandhinagar covering GIFT City financial institutions, IT/ITES SEZs, fintech startups and electronics manufacturing units. Expertise includes NWC 2025 payroll restructuring, fixed-term employment compliance, startup labour advisory and SEZ-specific statutory requirements.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="schema-gandhinagar-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for companies operating in GIFT City and IT SEZs in Gandhinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPF and ESIC are mandatory for eligible establishments operating in GIFT City, IT/ITES SEZs and fintech hubs in Gandhinagar. Authorities closely monitor PF coverage, fixed-term employment compliance and SEZ labour regulations.",
              },
            },
            {
              "@type": "Question",
              name: "What are the key EPF and ESIC compliance risks for fintech and startup companies in Gandhinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include incorrect wage structuring under the 50% basic rule, non-compliance in fixed-term employment contracts, contractor coverage gaps and EPFO Section 7A proceedings. Startups in GIFT City face focused scrutiny due to high salary structures.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk handle PF, ESIC and contractor audits for GIFT City and SEZ units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end PF, ESIC and CLRA compliance support for GIFT City firms, IT/ITES SEZ units and electronics manufacturers in Gandhinagar, including audits, inspections handling and NWC 2025 payroll alignment.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGandhinagarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGandhinagarDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-gandhinagar" strategy="afterInteractive">
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
