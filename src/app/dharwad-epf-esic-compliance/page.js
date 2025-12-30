import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataDharwadDist,
  sectionsDharwadDist,
  faqDharwad,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Dharwad EPF & ESIC Compliance 2025: Educational Trusts, IIT Dharwad Contractors, ESDM Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Dharwad educational trusts, private colleges, IIT Dharwad contractors, ESDM clusters and auto ancillary MSMEs. Experts in ESIC applicability for education sector, teaching/non-teaching staff audits and New Wage Code 2025 restructuring.",

  keywords: [
    "Dharwad PF consultant",
    "Dharwad ESIC consultant",
    "Educational trust PF ESIC Dharwad",
    "Private college PF compliance Dharwad",
    "IIT Dharwad contractor PF ESIC",
    "ESDM labour compliance Dharwad",
    "Auto ancillary PF ESIC Dharwad",
    "Principal Employer liability Dharwad",
    "NWC 2025 wage restructuring Dharwad",
    "EPFDesk Dharwad",
  ],

  alternates: {
    canonical: "https://epfdesk.com/dharwad-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Dharwad EPF & ESIC Compliance | Education, IIT Dharwad & ESDM Clusters",
    description:
      "PF & ESIC specialists for Dharwad educational institutions, IIT Dharwad contractors, ESDM units and auto ancillary MSMEs.",
    url: "https://epfdesk.com/dharwad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dharwad EPF ESIC Compliance",
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
      <Script id="dharwad-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Dharwad">
            <meta name="geo.position" content="15.4589;75.0078">
            <meta name="ICBM" content="15.4589, 75.0078">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/dharwad-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/dharwad-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-dharwad"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/dharwad-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Dharwad District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/dharwad-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          adaddress: {
            "@type": "PostalAddress",
            streetAddress: "Court Circle",
            addressLocality: "Dharwad",
            addressRegion: "Karnataka",
            postalCode: "580001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 15.4589,
            longitude: 75.0078,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Dharwad District" },
            { "@type": "Place", name: "Hubballi–Dharwad" },
            { "@type": "Place", name: "IIT Dharwad Campus" },
            { "@type": "Place", name: "ESDM Manufacturing Clusters" },
            { "@type": "Place", name: "Navalgund" },
            { "@type": "Place", name: "Kalghatgi" },
          ],

          description:
            "EPF & ESIC compliance services for Dharwad educational trusts, private colleges, IIT Dharwad contractors, ESDM manufacturing units and auto ancillary MSMEs. Expertise includes ESIC applicability for education sector, teaching and non-teaching staff audits, contractor PF liability, Principal Employer exposure and New Wage Code 2025 payroll restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "71",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDharwadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDharwadDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDharwad} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-dharwad" strategy="afterInteractive">
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
