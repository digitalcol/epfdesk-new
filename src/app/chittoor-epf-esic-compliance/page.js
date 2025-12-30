import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataChittoorDist,
  sectionsChittoorDist,
  chittorDistFAQ,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Chittoor EPF & ESIC Compliance 2025: Agro-Processing, Dairy & Textile Industries | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Chittoor agro-processing clusters, dairy units, textile & weaving industries. Specialists in seasonal labour audits, minimum wage compliance, OSH welfare verification and NWC-2025 readiness.",

  keywords: [
    "Chittoor PF consultant",
    "Chittoor ESIC consultant",
    "Agro processing PF compliance Chittoor",
    "Dairy industry ESIC Andhra Pradesh",
    "Textile weaving PF ESIC",
    "Seasonal labour compliance Chittoor",
    "NWC 2025 Andhra Pradesh",
  ],

  alternates: {
    canonical: "https://epfdesk.com/chittoor-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Chittoor EPF & ESIC Compliance | Agro-Processing, Dairy & Textile Units",
    description:
      "PF & ESIC specialists for Chittoor agro-processing, dairy and textile industries. End-to-end statutory compliance, audits and OSH verification.",
    url: "https://epfdesk.com/chittoor-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chittoor PF ESIC Compliance",
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
      {/* ========= GEO META (CHITTOOR) ========= */}
      <Script id="chittoor-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-AP">
            <meta name="geo.placename" content="Chittoor">
            <meta name="geo.position" content="13.2172;79.1003">
            <meta name="ICBM" content="13.2172, 79.1003">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/chittoor-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/chittoor-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-chittoor"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/chittoor-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Chittoor District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/chittoor-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Gandhi Road",
            addressLocality: "Chittoor",
            addressRegion: "Andhra Pradesh",
            postalCode: "517001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.2172,
            longitude: 79.1003,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Chittoor District" },
            { "@type": "City", name: "Chittoor" },
            { "@type": "Place", name: "Agro-Processing Clusters" },
            { "@type": "Place", name: "Textile & Weaving Units" },
            { "@type": "Place", name: "Dairy & Food Processing Units" },
          ],

          description:
            "EPF & ESIC compliance services for Chittoor agro-processing clusters, dairy units, textile & weaving industries, including seasonal workforce audits, minimum wage compliance and OSH welfare verification.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataChittoorDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChittoorDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={chittorDistFAQ} />
      </FadeInWhenVisible>
      <Script id="conversion-tracking-chittoor" strategy="afterInteractive">
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
