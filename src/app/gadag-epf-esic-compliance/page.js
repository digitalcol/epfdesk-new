import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGadagDist,
  sectionsGadagDist,
  faqGadag,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Gadag EPF & ESIC Compliance 2025: Cotton Ginning, Piece-Rate PF, Seasonal ESIC & Agro MSME Audits | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Gadag cotton ginning mills, textile units and agro-processing MSMEs. Specialists in piece-rate PF exposure, seasonal ginning labour ESIC coverage and New Wage Code 2025 alignment.",

  keywords: [
    "Gadag PF consultant",
    "Gadag ESIC consultant",
    "Cotton ginning PF Karnataka",
    "Textile PF ESIC Gadag",
    "Piece rate PF audit Gadag",
    "Seasonal labour ESIC ginning",
    "Agro processing PF ESIC Gadag",
    "EPFDesk Gadag",
  ],

  alternates: {
    canonical: "https://epfdesk.com/gadag-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Gadag EPF & ESIC Compliance | Cotton Ginning, Textile & Agro MSMEs",
    description:
      "PF & ESIC specialists for Gadag cotton ginning mills, textile units and agro-processing MSMEs.",
    url: "https://epfdesk.com/gadag-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gadag EPF ESIC Compliance",
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
      <Script id="gadag-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Gadag">
            <meta name="geo.position" content="15.4314;75.6360">
            <meta name="ICBM" content="15.4314, 75.6360">
             <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/gadag-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/gadag-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-gadag"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/gadag-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Gadag Cotton Ginning & Textile Units",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/gadag-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Station Road",
            addressLocality: "Gadag",
            addressRegion: "Karnataka",
            postalCode: "582101",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 15.4314,
            longitude: 75.6360,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Gadag District" },
            { "@type": "Place", name: "Gadag Cotton Ginning Clusters" },
            { "@type": "Place", name: "Textile & Spinning Units" },
            { "@type": "Place", name: "Agro-Processing MSMEs" },
            { "@type": "Place", name: "Mulgund" },
            { "@type": "Place", name: "Laxmeshwar" },
            { "@type": "Place", name: "Naragund" },
          ],

          description:
            "EPF & ESIC compliance services for Gadag cotton ginning mills, textile units, oil mills and agro-processing MSMEs. Expertise in piece-rate PF audits, seasonal labour ESIC coverage, Principal Employer exposure and New Wage Code 2025 compliance.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "37",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGadagDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGadagDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGadag} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-gadag" strategy="afterInteractive">
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
