import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKurnoolDist,
  sectionsKurnoolDist,
  kurnoolFAQ,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kurnool EPF & ESIC Consultant: Cement Plants, Limestone Quarries & Renewable Energy Compliance | EPFDesk",

  description:
    "EPFDesk delivers PF & ESIC compliance services for Kurnool’s cement plants, limestone quarries, and renewable energy projects including solar and wind farms. Expertise spans OHS compliance, contractor workforce audits, migrant labour documentation, and NWC 2025 payroll restructuring for high-risk industrial sites.",

  keywords: [
    "Kurnool PF consultant",
    "Kurnool ESIC consultant",
    "cement plant PF ESIC",
    "Nandyal cement cluster compliance",
    "limestone quarry PF ESIC",
    "Kolimigundla quarry labour compliance",
    "solar park PF ESIC Andhra Pradesh",
    "wind energy PF ESIC compliance",
    "contractor compliance Kurnool",
    "NWC 2025 payroll Kurnool",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kurnool-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Kurnool EPF & ESIC Consultant | Cement, Quarrying & Renewable Energy Compliance",
    description:
      "PF & ESIC compliance for Kurnool’s cement manufacturing hubs, limestone mining belts, solar parks and wind energy sites. Contractor audits, NWC 2025 payroll, OHS compliance and migrant workforce documentation.",
    url: "https://epfdesk.com/kurnool-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kurnool EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title:
      "Kurnool EPF & ESIC Consultant | Cement, Limestone & Renewable Energy Sectors",
    description:
      "Advanced PF & ESIC compliance for cement plants, quarrying operations, solar parks, and wind energy projects in Kurnool. OHS compliance, contractor audits and NWC 2025 payroll experts.",
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
      <Script id="kurnool-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-AP">
            <meta name="geo.placename" content="Kurnool, Kurnool District, Andhra Pradesh">
            <meta name="geo.position" content="15.8281;78.0373">
            <meta name="ICBM" content="15.8281, 78.0373">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kurnool-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kurnool-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kurnool"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/kurnool-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Kurnool District",

          alternateName:
            "Kurnool EPF & ESIC Compliance for Cement, Quarrying & Renewable Energy Projects",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kurnool-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Ballary Road",
            addressLocality: "Kurnool",
            addressRegion: "Andhra Pradesh",
            postalCode: "518002",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 15.8281,
            longitude: 78.0373,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Kurnool District" },
            { "@type": "Place", name: "Nandyal Cement Cluster" },
            { "@type": "Place", name: "Kolimigundla Limestone Belt" },
            { "@type": "Place", name: "Kurnool Ultra Mega Solar Park" },
            { "@type": "Place", name: "Wind Energy Project Sites" },
          ],

          description:
            "EPF & ESIC compliance services for Kurnool cement plants, limestone quarries and renewable energy projects. Expertise includes OHS compliance, contractor liability audits, migrant workforce documentation and NWC 2025 payroll restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "52",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKurnoolDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKurnoolDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={kurnoolFAQ} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-kurnool" strategy="afterInteractive">
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
        `}
      </Script>
    </>
  );
}
