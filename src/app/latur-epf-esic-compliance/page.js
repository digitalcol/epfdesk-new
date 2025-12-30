import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataLaturDistrict,
  sectionsLaturDistrict,
  faqLaturDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Latur EPF & ESIC Compliance for Dal Mills, Oilseed Processing & Educational Institutions | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Latur Dal and Oilseed Mills, PF liability for seasonal agro-processing workers, and mandatory ESIC compliance for educational institutions and MIDC MSMEs. Specialists in piece-rate wage audits and Principal Employer liability.",

  keywords: [
    "Latur PF consultant",
    "Dal mill EPF compliance Latur",
    "Oilseed processing ESIC Latur",
    "Piece rate wages PF ESIC Marathwada",
    "Educational institution ESIC Latur",
    "Latur EPFO 7A defence",
  ],

  alternates: {
    canonical: "https://epfdesk.com/latur-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title: "Latur EPF & ESIC Compliance | Dal Mills & Education Sector",
    description:
      "PF & ESIC specialists for Latur Dal Mills, oilseed processing units, seasonal agro labour and educational institutions.",
    url: "https://epfdesk.com/latur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Latur EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Latur EPF & ESIC Compliance | Dal Mills & Agro Processing",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Latur Dal Mills, agro-processing units and educational institutions.",
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
      <Script id="latur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Latur, Latur District, Maharashtra">
            <meta name="geo.position" content="18.4088;76.5604">
            <meta name="ICBM" content="18.4088, 76.5604">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/latur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/latur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-latur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/latur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Latur District",

          alternateName:
            "Latur EPF & ESIC Compliance for Dal Mills, Agro Processing & Educational Institutions",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/latur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Barshi Road, Near Ausa Chowk",
            addressLocality: "Latur",
            addressRegion: "Maharashtra",
            postalCode: "413512",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 18.4088,
            longitude: 76.5604,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Latur District" },
            { "@type": "Place", name: "Dal Mills & Oilseed Processing Units" },
            { "@type": "Place", name: "Latur MIDC" },
            { "@type": "Place", name: "Educational Institutions" },
          ],

          description:
            "EPF & ESIC compliance services for Latur Dal Mills, oilseed processing units, seasonal agro labour, MIDC MSMEs and educational institutions. Expertise includes piece-rate wage audits, Principal Employer liability and EPFO Section 7A defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "71",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataLaturDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsLaturDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqLaturDistrict} />

      {/* ========= CONVERSION TRACKING (LOCKED) ========= */}
      <Script id="conversion-tracking-latur" strategy="afterInteractive">
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
