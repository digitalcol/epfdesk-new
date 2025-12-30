import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataLucknowDist,
  sectionsLucknowDist,
  faqLucknow,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Lucknow EPF & ESIC Compliance: HAL/BEL PE Liability, Service Sector Allowance Audits & Educational PF | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Lucknow HAL/BEL contractors, IT/ITeS firms, private schools and hospitals. Experts in RO Lucknow liaison, high-stakes allowance suppression audits and Principal Employer liability under CLRA.",

  keywords: [
    "Lucknow PF consultant",
    "Lucknow ESIC registration",
    "HAL BEL contractor PF compliance",
    "Service sector allowance audit Lucknow",
    "Educational institution PF compliance Lucknow",
    "RO Lucknow EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/lucknow-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Lucknow EPF & ESIC Compliance | Government Contractors & Service Sector",
    description:
      "PF & ESIC specialists for Lucknow defence contractors, IT services, private schools and hospitals.",
    url: "https://epfdesk.com/lucknow-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Lucknow EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Lucknow EPF & ESIC Compliance | HAL/BEL & Service Sector",
    description:
      "Expert PF/ESIC compliance for Lucknow government contractors, IT firms and educational institutions.",
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
      <Script id="lucknow-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Lucknow, Uttar Pradesh, India">
            <meta name="geo.position" content="26.8467;80.9462">
            <meta name="ICBM" content="26.8467, 80.9462">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/lucknow-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/lucknow-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-lucknow"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/lucknow-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Lucknow District",

          alternateName:
            "Lucknow EPF & ESIC Compliance for HAL/BEL Contractors, IT & Education Sector",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/lucknow-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Hazratganj Main Road",
            addressLocality: "Lucknow",
            addressRegion: "Uttar Pradesh",
            postalCode: "226001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.8467,
            longitude: 80.9462,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Lucknow District" },
            { "@type": "Place", name: "HAL Lucknow" },
            { "@type": "Place", name: "BEL Units" },
            { "@type": "Place", name: "IT & ITeS Establishments" },
            { "@type": "Place", name: "Educational Institutions" },
          ],

          description:
            "EPF & ESIC compliance services for Lucknow government contractors, defence PSUs (HAL/BEL), IT/ITeS firms, private schools and hospitals. Expertise includes allowance suppression audits, CLRA Principal Employer liability and RO Lucknow proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "95",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataLucknowDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsLucknowDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqLucknow} />

      {/* ========= CONVERSION TRACKING (LOCKED) ========= */}
      <Script id="conversion-tracking-lucknow" strategy="afterInteractive">
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
