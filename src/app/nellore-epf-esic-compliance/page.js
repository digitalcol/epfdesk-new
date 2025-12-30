import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNelloreDist,
  sectionsNelloreDist,
  nelloreFAQ,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Nellore EPF & ESIC Consultant: Krishnapatnam Port, Aquaculture Processing & Thermal Power Projects | EPFDesk",

  description:
    "EPFDesk delivers EPF & ESIC compliance solutions for Nellore’s Krishnapatnam Port operators, aquaculture and seafood processing units, and EPC contractors in major thermal power projects. Expertise in contract labour audits, BOCW compliance, ESIC coverage for food-processing units, and NWC 2025 payroll restructuring.",

  keywords: [
    "Nellore PF consultant",
    "Nellore ESIC consultant",
    "Krishnapatnam Port PF ESIC",
    "aquaculture EPF ESIC Andhra Pradesh",
    "seafood processing compliance AP",
    "thermal power plant contractor PF",
    "Sembcorp PF ESIC compliance",
    "SDSTPS EPF ESIC",
    "BOCW compliance Nellore",
    "NWC 2025 payroll AP",
    "EPFDesk Nellore",
  ],

  alternates: {
    canonical: "https://epfdesk.com/nellore-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Nellore EPF & ESIC Consultant | Krishnapatnam Port, Aquaculture & Thermal Power Compliance | EPFDesk",
    description:
      "PF & ESIC services for Krishnapatnam Port, Gudur–Kavali aquaculture units, seafood processing units and thermal power plant contractors. Includes BOCW compliance, NWC 2025 payroll and labour documentation systems.",
    url: "https://epfdesk.com/nellore-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Nellore PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Nellore EPF & ESIC Compliance | Krishnapatnam Port, Aquaculture & Power Projects | EPFDesk",
    description:
      "Compliance experts for aquaculture, seafood processing, Krishnapatnam Port, EPC contractors and thermal power plant projects in Nellore.",
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
      <Script id="nellore-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-AP">
            <meta name="geo.placename" content="Nellore, Andhra Pradesh, India">
            <meta name="geo.position" content="14.4426;79.9865">
            <meta name="ICBM" content="14.4426, 79.9865">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/nellore-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/nellore-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-nellore"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/nellore-epf-esic-compliance#organization",

          name: "EPFDesk – Nellore EPF & ESIC Compliance for Ports, Aquaculture & Power Projects",

          alternateName:
            "Nellore EPF & ESIC Consultant for Krishnapatnam Port, Aquaculture & Thermal Power",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/nellore-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Magunta Layout",
            addressRegion: "Andhra Pradesh",
            postalCode: "524003",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 14.4426,
            longitude: 79.9865,
          },

          areaServed: [
            { "@type": "City", name: "Nellore" },
            { "@type": "Place", name: "Krishnapatnam Port" },
            { "@type": "Place", name: "Gudur–Kavali Aquaculture Belt" },
            {
              "@type": "Place",
              name: "Thermal Power Projects (SDSTPS, Sembcorp)",
            },
            { "@type": "Place", name: "BOCW Construction Zones" },
          ],

          description:
            "EPF & ESIC compliance services for Nellore district covering Krishnapatnam Port operators, aquaculture and seafood processing units, thermal power project EPC contractors, BOCW construction labour, and NWC 2025 payroll restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "48",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNelloreDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNelloreDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={nelloreFAQ} />
      </FadeInWhenVisible>
      <Script id="conversion-tracking-nellore" strategy="afterInteractive">
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
