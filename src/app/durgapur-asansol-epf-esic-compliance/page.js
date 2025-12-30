import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPaschimBardhaman,
  sectionsPaschimBardhaman,
  faqPaschimBardhaman,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Durgapur & Asansol EPF & ESIC Compliance 2025: Steel Plants, Coal Contractors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for the Durgapur–Asansol industrial belt covering Durgapur Steel Plant (DSP) vendors, ECL coal contractors, sponge iron units and hazardous process industries. Specialists in RO Durgapur enforcement, Principal Employer liability and New Wage Code 2025 restructuring.",

  keywords: [
    "Durgapur PF consultant",
    "Asansol ESIC consultant",
    "Durgapur Steel Plant PF ESIC",
    "ECL coal contractor compliance",
    "Paschim Bardhaman steel PF audits",
    "Sponge iron ESIC compliance",
    "Principal Employer liability Durgapur Asansol",
    "RO Durgapur EPFO jurisdiction",
    "NWC 2025 wage restructuring West Bengal",
    "EPFDesk Paschim Bardhaman",
  ],

  alternates: {
    canonical: "https://epfdesk.com/durgapur-asansol-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Durgapur & Asansol EPF & ESIC Compliance | Steel & Coal Industrial Belt",
    description:
      "PF & ESIC specialists for Durgapur Steel Plant vendors, ECL coal contractors, sponge iron and hazardous process units across Paschim Bardhaman.",
    url: "https://epfdesk.com/durgapur-asansol-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Durgapur Asansol EPF ESIC Compliance",
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
      <Script id="paschim-bardhaman-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-WB">
            <meta name="geo.placename" content="Durgapur, Asansol">
            <meta name="geo.position" content="23.5204;87.3119">
            <meta name="ICBM" content="23.5204, 87.3119">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/durgapur-asansol-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/durgapur-asansol-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-paschim-bardhaman"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/durgapur-asansol-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Paschim Bardhaman District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/durgapur-asansol-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "City Centre",
            addressLocality: "Durgapur",
            addressRegion: "West Bengal",
            postalCode: "713201",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.5204,
            longitude: 87.3119,
          },

          areaServed: [
            {
              "@type": "AdministrativeArea",
              name: "Paschim Bardhaman District",
            },
            { "@type": "City", name: "Durgapur" },
            { "@type": "City", name: "Asansol" },
            { "@type": "Place", name: "Raniganj Coal Belt" },
            { "@type": "Place", name: "Jamuria Industrial Area" },
          ],

          description:
            "EPF & ESIC compliance services for Paschim Bardhaman’s Durgapur–Asansol industrial belt, including Durgapur Steel Plant contractors, ECL coal mining vendors, sponge iron units and hazardous process industries. Expertise in Principal Employer liability, EPFO inspections, ESIC enforcement and New Wage Code 2025 payroll restructuring under RO Durgapur jurisdiction.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "72",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPaschimBardhaman} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPaschimBardhaman} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqPaschimBardhaman} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script
        id="conversion-tracking-paschim-bardhaman"
        strategy="afterInteractive"
      >
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
