import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataHaryanaBalance,
  sectionsHaryanaBalance,
  faqHaryanaBalance,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Haryana EPF & ESIC Compliance: Sonipat Food Parks, Bawal Auto Hubs & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Haryana’s balance districts — Sonipat food processing parks, Bawal auto & EV hubs, Rewari MSMEs and Yamunanagar plywood clusters. Experts in RO Karnal/Gurugram enforcement, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Haryana PF consultant",
    "Haryana ESIC consultant",
    "Sonipat food park PF ESIC",
    "Bawal auto hub labour compliance",
    "Rewari MSME PF audits",
    "Yamunanagar plywood PF ESIC",
    "Principal Employer liability Haryana",
    "RO Karnal EPFO jurisdiction",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/haryana-balance-districts-epf-esic-compliance",
  },

  openGraph: {
    title: "Haryana EPF & ESIC Compliance | Food, Auto & Industrial Clusters",
    description:
      "PF & ESIC specialists for Sonipat food parks, Bawal auto suppliers, Rewari MSMEs and Yamunanagar plywood manufacturers.",
    url: "https://epfdesk.com/haryana-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haryana PF ESIC Compliance",
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
      <Script id="haryana-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-HR">
            <meta name="geo.placename" content="Haryana">
            <meta name="geo.position" content="29.0588;76.0856">
            <meta name="ICBM" content="29.0588, 76.0856">
              <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/haryana-balance-districts-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/haryana-balance-districts-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-haryana-balance"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/haryana-balance-districts-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Haryana Food, Auto & MSME Clusters",
          image: "https://epfdesk.com/images/logo.jpg",
          url:
            "https://epfdesk.com/haryana-balance-districts-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ STATE-SPECIFIC ADDRESS (HARYANA) */
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
            latitude: 29.0588,
            longitude: 76.0856,
          },

          areaServed: [
            { "@type": "Place", name: "Sonipat Food Parks" },
            { "@type": "Place", name: "Kundli Industrial Area" },
            { "@type": "Place", name: "Rai Industrial Estate" },
            { "@type": "Place", name: "Rewari MSME Clusters" },
            { "@type": "Place", name: "Bawal Auto & EV Hub" },
            { "@type": "Place", name: "Dharuhera Manufacturing Belt" },
            { "@type": "Place", name: "Yamunanagar Plywood Cluster" },
            {
              "@type": "AdministrativeArea",
              name: "Haryana",
            },
          ],

          description:
            "EPF & ESIC compliance services for Haryana’s balance districts covering Sonipat food parks, Bawal auto & EV suppliers, Rewari MSMEs and Yamunanagar plywood manufacturers. Expertise in RO Karnal & Gurugram inspections, Principal Employer liability and New Wage Code payroll restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "86",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHaryanaBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHaryanaBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqHaryanaBalance} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-haryana" strategy="afterInteractive">
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
