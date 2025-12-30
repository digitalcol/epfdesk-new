import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataDharashivDistrict,
  sectionsDharashivDistrict,
  faqDharashivDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Dharashiv (Osmanabad) EPF & ESIC Compliance 2025: Sugar Factories, Dal Mills & Piece-Rate Wage Audits | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Dharashiv (Osmanabad) sugar factories, PF on retention allowance, dal mill seasonal workers and textile/garment piece-rate staff. Specialists in RO Aurangabad inspections, contractor liability and New Wage Code audits.",

  keywords: [
    "Dharashiv PF consultant",
    "Osmanabad EPF ESIC compliance",
    "Sugar factory PF retention allowance",
    "Dal mill seasonal labour PF ESIC",
    "Textile garment piece rate PF",
    "EPFO 7A defence Dharashiv",
    "RO Aurangabad EPF audits",
    "NWC 2025 wage restructuring Dharashiv",
    "Contractor PF liability sugar mills",
    "EPFDesk Dharashiv",
  ],

  alternates: {
    canonical: "https://epfdesk.com/dharashiv-osmanabad-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Dharashiv (Osmanabad) EPF & ESIC Compliance | Sugar, Dal & Textile Units",
    description:
      "High-risk PF & ESIC compliance for Dharashiv sugar factories, dal mills and textile/garment units with piece-rate wage exposure.",
    url: "https://epfdesk.com/dharashiv-osmanabad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dharashiv EPF ESIC Compliance",
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
      <Script id="dharashiv-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Dharashiv (Osmanabad)">
            <meta name="geo.position" content="18.1861;76.0419">
            <meta name="ICBM" content="18.1861, 76.0419">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/dharashiv-osmanabad-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/dharashiv-osmanabad-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-dharashiv"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/dharashiv-osmanabad-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Dharashiv (Osmanabad)",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/dharashiv-osmanabad-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Barshi Road",
            addressLocality: "Dharashiv",
            addressRegion: "Maharashtra",
            postalCode: "413501",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 18.1861,
            longitude: 76.0419,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Dharashiv District" },
            { "@type": "Place", name: "Osmanabad MIDC" },
            { "@type": "Place", name: "Tuljapur" },
            { "@type": "Place", name: "Paranda" },
            { "@type": "Place", name: "Lohara" },
          ],

          description:
            "EPF & ESIC compliance services for Dharashiv (Osmanabad) sugar factories, dal mills and textile/garment units. Expertise includes PF on retention allowance, piece-rate wage audits, contractor compliance, EPFO 7A defence and RO Aurangabad inspections.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "63",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDharashivDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDharashivDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDharashivDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-dharashiv" strategy="afterInteractive">
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
