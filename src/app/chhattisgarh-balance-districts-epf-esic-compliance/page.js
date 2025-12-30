import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataCGBalanceDistricts,
  sectionsCGBalanceDistricts,
  faqCGBalanceDistricts,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Chhattisgarh EPF & ESIC Compliance 2025: Cement Plants, Agro-Industry & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance for Chhattisgarh cement plants, rice mills, sugar units and mining ancillaries. Experts in RO Raipur/Bilaspur audits, Principal Employer liability and EEC-2025 amnesty handling.",

  keywords: [
    "Chhattisgarh PF consultant",
    "Baloda Bazar cement EPF compliance",
    "Dhamtari rice mill PF ESIC",
    "Kawardha sugar factory labour law",
    "Mahasamund agro industry PF audit",
    "RO Raipur EPF 7A defense",
    "EEC 2025 Chhattisgarh compliance",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/chhattisgarh-balance-districts-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Chhattisgarh EPF & ESIC Compliance | Cement, Agro & Emerging Zones | EPFDesk",
    description:
      "PF & ESIC specialists for cement hubs, agro-processing clusters and emerging industrial belts in Chhattisgarh.",
    url:
      "https://epfdesk.com/chhattisgarh-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chhattisgarh EPF ESIC Compliance",
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
      {/* ========= GEO + EXTRA META ========= */}
      <Script id="cg-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-CG">
            <meta name="geo.placename" content="Raipur">
            <meta name="geo.position" content="21.2514;81.6296">
            <meta name="ICBM" content="21.2514, 81.6296">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/chhattisgarh-balance-districts-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/chhattisgarh-balance-districts-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-chhattisgarh-balance"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/chhattisgarh-balance-districts-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Compliance Consultants for Chhattisgarh",
          image: "https://epfdesk.com/images/logo.jpg",
          url:
            "https://epfdesk.com/chhattisgarh-balance-districts-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            addressLocality: "Raipur",
            addressRegion: "Chhattisgarh",
            postalCode: "492001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.2514,
            longitude: 81.6296,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Baloda Bazar-Bhatapara" },
            { "@type": "AdministrativeArea", name: "Dhamtari District" },
            { "@type": "AdministrativeArea", name: "Mahasamund District" },
            { "@type": "AdministrativeArea", name: "Kabirdham (Kawardha)" },
            { "@type": "AdministrativeArea", name: "Kanker District" },
            { "@type": "AdministrativeArea", name: "Kondagaon District" },
            { "@type": "AdministrativeArea", name: "Gariaband District" },
          ],

          description:
            "EPF & ESIC compliance services for cement manufacturing belts, rice mills, sugar factories, mining ancillaries and agro-industrial clusters governed by RO Raipur and RO Bilaspur.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "76",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataCGBalanceDistricts} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsCGBalanceDistricts} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqCGBalanceDistricts} />
       <Script id="conversion-tracking-chhattisgarh-balance" strategy="afterInteractive">
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
