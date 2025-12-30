import React from "react";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataWashimDistrict,
  sectionsWashimDistrict,
  faqWashimDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Washim EPF & ESIC Compliance for Cotton Ginning & Oil Mills | EPFDesk",

  description:
    "EPF & ESIC compliance for Washim cotton ginning factories, oil mills and agro-processing units. Expertise in Zone-3 minimum wage audits, seasonal labour PF risk and RO Akola enforcement defence.",

  alternates: {
    canonical: "https://epfdesk.com/washim-epf-esic-compliance",
  },

  openGraph: {
    title: "Washim EPF & ESIC Compliance | Cotton & Agro-Processing",
    description:
      "Statutory EPF & ESIC compliance for Washim cotton ginning, oil mills and seasonal agro-labour.",
    url: "https://epfdesk.com/washim-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Washim EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Washim EPF & ESIC Compliance | Cotton Ginning & Agro Units | EPFDesk",
    description:
      "PF & ESIC services for Washim cotton ginning factories, oil mills and seasonal agro-processing units.",
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
      <Script id="washim-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Washim, Maharashtra">
            <meta name="geo.position" content="20.1110;77.1327">
            <meta name="ICBM" content="20.1110, 77.1327">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/washim-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/washim-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-washim"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/washim-epf-esic-compliance#organization",

          name: "Washim EPF & ESIC Compliance for Cotton Ginning & Oil Mills | EPFDesk",

          alternateName:
            "EPFDesk – Cotton Ginning, Oil Mill & Agro-Processing PF ESIC Consultants in Washim",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/washim-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Patni Chowk Area",
            addressLocality: "Washim",
            addressRegion: "Maharashtra",
            postalCode: "444505",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 20.111,
            longitude: 77.1327,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Washim District" },
            { "@type": "Place", name: "Washim City" },
            { "@type": "Place", name: "Mangrulpir" },
            { "@type": "Place", name: "Karanja Lad" },
          ],

          description:
            "Washim’s compliance risks arise from cotton ginning factories, oil mills and seasonal agro-processing units operating under Zone-3 minimum wages. EPFDesk manages PF & ESIC coverage, seasonal labour audits, wage-structure scrutiny and RO Akola enforcement defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "32",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataWashimDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsWashimDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqWashimDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-washim" strategy="afterInteractive">
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
