import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { faqHP, heroDataHP, sectionsHP } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Himachal EPF & ESIC Compliance: Una FMCG Units, Kangra MSMEs & Tourism Labour PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Himachal Pradesh’s balance districts — Una Tahliwal FMCG & agro units, Kangra border MSMEs, and Shimla–Kullu tourism & hospitality sector. Experts in SRO Dharamshala enforcement, seasonal labour compliance, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Himachal PF consultant",
    "Himachal ESIC consultant",
    "Una Tahliwal PF ESIC compliance",
    "Kangra MSME labour compliance",
    "Shimla hotel PF ESIC",
    "Kullu tourism labour laws",
    "seasonal worker PF ESIC Himachal",
    "Principal Employer liability Himachal",
    "SRO Dharamshala EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/himachal-final-balance-epf-esic-compliance",
  },

  openGraph: {
    title: "Himachal EPF & ESIC Compliance | FMCG, MSMEs & Tourism Hubs",
    description:
      "PF & ESIC specialists for Una FMCG units, Kangra MSMEs and Himachal’s hill tourism & hospitality sector.",
    url: "https://epfdesk.com/himachal-final-balance-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Himachal EPF ESIC Compliance",
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
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="hp-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-HP">
            <meta name="geo.placename" content="Himachal Pradesh">
            <meta name="geo.position" content="31.1048;77.1734">
            <meta name="ICBM" content="31.1048, 77.1734">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/himachal-final-balance-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/himachal-final-balance-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-himachal-balance"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/himachal-final-balance-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Himachal FMCG, MSMEs & Tourism Sector",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/himachal-final-balance-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ STATE-CENTRIC ADDRESS */
          aaddress: {
            "@type": "PostalAddress",
            streetAddress: "Mall Road",
            addressLocality: "Shimla",
            addressRegion: "Himachal Pradesh",
            postalCode: "171001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 31.1048,
            longitude: 77.1734,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Himachal Pradesh" },
            { "@type": "Place", name: "Una – Tahliwal Industrial Area" },
            { "@type": "Place", name: "Kangra Border MSME Belt" },
            { "@type": "Place", name: "Shimla Hospitality Sector" },
            { "@type": "Place", name: "Kullu–Manali Tourism Circuit" },
            { "@type": "Place", name: "Mandi & Bilaspur MSMEs" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Himachal Pradesh’s FMCG units, MSMEs and tourism-driven hospitality employers. Expertise in seasonal labour PF/ESIC, Principal Employer liability, and New Wage Code 2025 restructuring under SRO Dharamshala enforcement.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "58",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHP} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHP} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqHP} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-himachal" strategy="afterInteractive">
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
