import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMainpuriDistrict,
  sectionsMainpuriDistrict,
  faqMainpuriDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Mainpuri EPF & ESIC Compliance: Agro-Industrial PF, MSME Liability & New ESIC Extension Defense | EPFDesk",

  description:
    "Specialized EPF & ESIC advisory for Mainpuri rice mills, cold storages and MSMEs. Manage RO Agra audits, ESIC expansion compliance, retaining allowance PF exposure and Principal Employer liability.",

  keywords: [
    "Mainpuri PF consultant",
    "ESIC registration Mainpuri",
    "Rice mill PF compliance Mainpuri",
    "Cold storage retaining allowance PF",
    "RO Agra EPFO audit defense",
    "Mainpuri MSME EPF ESIC",
  ],

  alternates: {
    canonical: "https://epfdesk.com/mainpuri-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title: "Mainpuri EPF & ESIC Compliance | Agro-Industry & MSMEs",
    description:
      "PF & ESIC specialists for Mainpuri rice mills, cold storages and MSMEs under RO Agra jurisdiction.",
    url: "https://epfdesk.com/mainpuri-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mainpuri EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Mainpuri EPF & ESIC Compliance | Agro & MSME Risk",
    description:
      "Critical PF & ESIC compliance for Mainpuri agro-industrial units and MSMEs after ESIC expansion.",
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
      <Script id="mainpuri-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Mainpuri, Uttar Pradesh, India">
            <meta name="geo.position" content="27.2285;79.0280">
            <meta name="ICBM" content="27.2285, 79.0280">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/mainpuri-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/mainpuri-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-mainpuri"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/mainpuri-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Mainpuri District",

          alternateName: "Mainpuri Agro-Industrial & MSME EPF/ESIC Compliance",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/mainpuri-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Station Road",
            addressLocality: "Mainpuri",
            addressRegion: "Uttar Pradesh",
            postalCode: "205001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 27.2285,
            longitude: 79.028,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Mainpuri District" },
            { "@type": "Place", name: "Rice Mills" },
            { "@type": "Place", name: "Cold Storage Units" },
            { "@type": "Place", name: "Agro-Processing MSMEs" },
            { "@type": "Place", name: "Kishni" },
            { "@type": "Place", name: "Karhal" },
            { "@type": "Place", name: "Bewar" },
          ],

          description:
            "EPF & ESIC compliance services for Mainpuri rice mills, cold storages and MSMEs following ESIC expansion. Expertise includes retaining allowance PF exposure, seasonal workforce audits, Principal Employer liability and RO Agra proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "64",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMainpuriDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMainpuriDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMainpuriDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-mainpuri" strategy="afterInteractive">
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
