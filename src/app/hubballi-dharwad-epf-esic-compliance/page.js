import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataHubballiDharwadDist,
  sectionsHubballiDharwadDist,
  faqHubballiDharwad,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Hubballi–Dharwad EPF & ESIC Compliance: SME Manufacturing, Textiles & Electronics SEZ | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Hubballi–Dharwad SME manufacturing units, textile mills, auto ancillaries and Electronics SEZ units. Specialists in ESIC enforcement defence, PF wage restructuring, KIADB compliance and SEZ statutory setup.",

  keywords: [
    "Hubballi PF consultant",
    "Dharwad PF consultant",
    "Hubballi ESIC consultant",
    "SME PF ESIC compliance Hubballi",
    "Textile mill ESIC Hubballi",
    "Auto ancillary PF compliance Dharwad",
    "Electronics SEZ PF ESIC registration",
    "KIADB Belur Industrial Area compliance",
    "EPFDesk Hubballi Dharwad",
  ],

  alternates: {
    canonical: "https://epfdesk.com/hubballi-dharwad-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Hubballi–Dharwad EPF & ESIC Compliance | SME Manufacturing & Electronics SEZ",
    description:
      "PF & ESIC specialists for Hubballi–Dharwad SME factories, textile mills, auto ancillaries and Electronics SEZ units.",
    url: "https://epfdesk.com/hubballi-dharwad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hubballi Dharwad PF ESIC Compliance",
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
      <Script id="hubballi-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Hubballi–Dharwad, Karnataka">
            <meta name="geo.position" content="15.3647;75.1239">
            <meta name="ICBM" content="15.3647, 75.1239">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/hubballi-dharwad-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/hubballi-dharwad-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-hubballi-dharwad"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/hubballi-dharwad-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Hubballi–Dharwad SME & Electronics SEZ",

          alternateName:
            "Hubballi–Dharwad PF ESIC Compliance Experts for SME Manufacturing & Textiles",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/hubballi-dharwad-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Koppikar Road",
            addressLocality: "Hubballi–Dharwad",
            addressRegion: "Karnataka",
            postalCode: "580020",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 15.3647,
            longitude: 75.1239,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Dharwad District" },
            { "@type": "City", name: "Hubballi" },
            { "@type": "City", name: "Dharwad" },
            { "@type": "Place", name: "KIADB Belur Industrial Area" },
            { "@type": "Place", name: "Electronics & ESDM SEZ Dharwad" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Hubballi–Dharwad SME manufacturing units, textile mills, auto ancillaries and Electronics SEZ establishments. Expertise in PF wage audits, ESIC enforcement defence, KIADB statutory compliance and SEZ labour law onboarding.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "44",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHubballiDharwadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHubballiDharwadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqHubballiDharwad} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-hubballi" strategy="afterInteractive">
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
