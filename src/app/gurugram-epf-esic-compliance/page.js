import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGurugram,
  sectionsGurugram,
  faqGurugram,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Gurugram EPF & ESIC Compliance: IT MNCs, IMT Manesar Auto Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Gurugram IT MNCs, Cyber City offices, IMT Manesar auto units and Haryana corporates. Experts in RO Gurugram enforcement, New Wage Code 50% rule and contractor PF liability.",

  keywords: [
    "Gurugram PF consultant",
    "Gurugram ESIC consultant",
    "IT company PF ESIC Gurugram",
    "IMT Manesar auto unit labour compliance",
    "Cyber City PF audits",
    "Principal Employer liability Gurugram",
    "RO Gurugram EPFO jurisdiction",
    "NWC 2025 wage restructuring Gurugram",
  ],

  alternates: {
    canonical: "https://epfdesk.com/gurugram-epf-esic-compliance",
  },

  openGraph: {
    title: "Gurugram EPF & ESIC Compliance | IT & Automotive Powerhouse",
    description:
      "PF & ESIC specialists for Gurugram IT MNCs, Cyber City startups, IMT Manesar auto suppliers and corporates.",
    url: "https://epfdesk.com/gurugram-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gurugram EPF ESIC Compliance",
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
      <Script id="gurugram-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-HR">
            <meta name="geo.placename" content="Gurugram">
            <meta name="geo.position" content="28.4595;77.0266">
            <meta name="ICBM" content="28.4595, 77.0266">
             <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/gurugram-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/gurugram-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-gurugram"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/gurugram-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Gurugram District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/gurugram-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "MG Road",
            addressLocality: "Gurugram",
            addressRegion: "Haryana",
            postalCode: "122001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.4595,
            longitude: 77.0266,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Gurugram District" },
            { "@type": "Place", name: "Cyber City" },
            { "@type": "Place", name: "Udyog Vihar" },
            { "@type": "Place", name: "IMT Manesar" },
            { "@type": "Place", name: "Golf Course Road" },
            { "@type": "Place", name: "Sohna Road" },
          ],

          description:
            "EPF & ESIC compliance services for Gurugram IT MNCs, startups, IMT Manesar automotive suppliers and Haryana corporates. Expertise in New Wage Code 50% rule implementation, contractor PF liability, CLRA compliance and RO Gurugram proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "92",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGurugram} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGurugram} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqGurugram} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-gurugram" strategy="afterInteractive">
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

          document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
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
