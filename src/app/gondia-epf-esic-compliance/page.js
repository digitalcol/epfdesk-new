import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGondiaDistrict,
  sectionsGondiaDistrict,
  faqGondiaDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Gondia EPF & ESIC Compliance 2025: Rice Mills, Interstate Workers & Agro Labour | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Gondia rice mills, interstate migrant workers, tendu leaf contractors and seasonal agro labour. Specialists in RO Nagpur audits, ISMW Act compliance and Principal Employer liability.",

  keywords: [
    "Gondia PF consultant",
    "Gondia ESIC consultant",
    "Rice mill PF ESIC Gondia",
    "Interstate migrant labour compliance Gondia",
    "Tendu leaf contractor PF ESIC",
    "RO Nagpur EPFO defence",
    "Seasonal agro labour PF ESIC",
    "Principal Employer liability Gondia",
    "EPFDesk Gondia",
  ],

  alternates: {
    canonical: "https://epfdesk.com/gondia-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Gondia EPF & ESIC Compliance | Rice Mills & Interstate Labour",
    description:
      "PF & ESIC specialists for Gondia rice mills, agro-processing units and interstate seasonal workers.",
    url: "https://epfdesk.com/gondia-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gondia EPF ESIC Compliance",
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
      <Script id="gondia-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Gondia">
            <meta name="geo.position" content="21.4549;80.1961">
            <meta name="ICBM" content="21.4549, 80.1961">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/gondia-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/gondia-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-gondia"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/gondia-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Gondia District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/gondia-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Gondia",
            addressRegion: "Maharashtra",
            postalCode: "441601",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.4549,
            longitude: 80.1961,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Gondia District" },
            { "@type": "City", name: "Gondia" },
            { "@type": "Place", name: "Tirora" },
            { "@type": "Place", name: "Arjuni Morgaon" },
            { "@type": "Place", name: "Deori" },
          ],

          description:
            "EPF & ESIC compliance services for Gondia rice mills, tendu leaf processing units, interstate migrant labour and seasonal agro workers. Expertise in ISMW Act compliance, Minimum Wages audits, Principal Employer liability and RO Nagpur inspections.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "38",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGondiaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGondiaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGondiaDistrict} />
       <Script id="conversion-tracking-gondia" strategy="afterInteractive">
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
