import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataChikkamagaluruDist,
  sectionsChikkamagaluruDist,
  faqChikkamagaluru,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Chikkamagaluru EPF & ESIC Compliance 2025: Coffee Plantations, Resorts & Agro Units | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for coffee plantations, seasonal plantation labour, resorts, homestays and agro-processing units in Chikkamagaluru district. Specialists in plantation PF rules and hospitality ESIC coverage.",

  keywords: [
    "Chikkamagaluru PF consultant",
    "Coffee plantation PF compliance",
    "Resort ESIC Karnataka",
    "Homestay labour law compliance",
    "Plantation worker EPF Karnataka",
  ],

  alternates: {
    canonical: "https://epfdesk.com/chikkamagaluru-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Chikkamagaluru EPF & ESIC Compliance | Coffee Estates & Tourism Sector",
    description:
      "PF & ESIC specialists for coffee estates, plantation labour, resorts, hotels and agro-processing units in Chikkamagaluru.",
    url: "https://epfdesk.com/chikkamagaluru-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chikkamagaluru PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ===========================
   PAGE COMPONENT
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META (KARNATAKA) ========= */}
      <Script id="chikkamagaluru-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Chikkamagaluru">
            <meta name="geo.position" content="13.3152;75.7735">
            <meta name="ICBM" content="13.3152, 75.7735">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/chikkamagaluru-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/chikkamagaluru-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-chikkamagaluru"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/chikkamagaluru-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Chikkamagaluru District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/chikkamagaluru-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Church Street",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            postalCode: "560001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.3152,
            longitude: 75.7735,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Chikkamagaluru District" },
            { "@type": "City", name: "Chikkamagaluru" },
            { "@type": "City", name: "Mudigere" },
            { "@type": "City", name: "Koppa" },
            { "@type": "City", name: "Aldur" },
          ],

          description:
            "EPF & ESIC compliance services for coffee plantations, plantation labour, resorts, homestays and agro-processing units across Chikkamagaluru district.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "62",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataChikkamagaluruDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChikkamagaluruDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqChikkamagaluru} />
       <Script id="conversion-tracking-chikkamagaluru" strategy="afterInteractive">
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
