import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataPanipat, sectionsPanipat, faqPanipat } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Panipat EPF & ESIC Compliance: Textile Exporters, IOCL Refinery Vendors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Panipat — handloom and powerloom units, textile exporters, IOCL Refinery contractors and dyeing/processing houses. Experts in RO Karnal enforcement, hazardous process ESIC coverage, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Panipat PF consultant",
    "Panipat ESIC consultant",
    "Panipat textile exporter PF ESIC",
    "Handloom powerloom labour compliance Panipat",
    "IOCL Panipat refinery contractor PF ESIC",
    "Textile dyeing unit PF audits Panipat",
    "Principal Employer liability Panipat",
    "RO Karnal EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/panipat-epf-esic-compliance",
  },

  openGraph: {
    title: "Panipat EPF & ESIC Compliance | Textile & Refinery Industrial Hub",
    description:
      "PF & ESIC specialists for Panipat textile exporters, handloom units and IOCL Refinery contractors.",
    url: "https://epfdesk.com/panipat-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Panipat PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Panipat EPF & ESIC Compliance | Textile & Refinery Hub | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Panipat textile exporters and IOCL Refinery vendors.",
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
      <Script id="panipat-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-HR">
            <meta name="geo.placename" content="Panipat">
            <meta name="geo.position" content="29.3909;76.9635">
            <meta name="ICBM" content="29.3909, 76.9635">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/panipat-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/panipat-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-panipat"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/panipat-epf-esic-compliance#organization",

          name: "EPFDesk – Panipat EPF & ESIC Compliance for Textile & Refinery Industries",

          alternateName:
            "PF & ESIC Consultant for Panipat Handloom, Powerloom & IOCL Refinery Contractors",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/panipat-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Sector 17",
            addressRegion: "Haryana",
            postalCode: "134109",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 29.3909,
            longitude: 76.9635,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Panipat District" },
            { "@type": "Place", name: "Old Industrial Area" },
            { "@type": "Place", name: "Sector 25" },
            { "@type": "Place", name: "Sector 29" },
            { "@type": "Place", name: "Samalkha" },
            { "@type": "Place", name: "Israna" },
            { "@type": "Place", name: "Baholi" },
          ],

          description:
            "EPF & ESIC compliance specialists for Panipat textile exporters, handloom and powerloom clusters, IOCL Refinery contractors, dyeing and processing units, with expertise in hazardous process ESIC coverage, Principal Employer liability and RO Karnal proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "84",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPanipat} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPanipat} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqPanipat} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-panipat" strategy="afterInteractive">
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
