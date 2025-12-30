import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJalgaonDistrict,
  sectionsJalgaonDistrict,
  faqJalgaonDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Jalgaon EPF & ESIC Compliance for Banana Processing, PVC MIDC & Agro Units | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Jalgaon banana processing units, PVC/Chemical MIDC factories, dal mills and seasonal agro labour. Coverage includes SRO Jalgaon inspections, piece-rate wage audits and contractor PF liability.",

  keywords: [
    "Jalgaon PF consultant",
    "Jalgaon ESIC registration",
    "Banana processing PF compliance",
    "PVC MIDC ESIC Jalgaon",
    "Dal mill piece rate PF",
    "EPFO SRO Jalgaon 7A defence",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jalgaon-epf-esic-compliance",
  },

  openGraph: {
    title: "Jalgaon EPF & ESIC Compliance | Banana Processing & PVC MIDC",
    description:
      "High-risk PF & ESIC compliance for Jalgaon agro-processing units, PVC MIDC factories and seasonal labour.",
    url: "https://epfdesk.com/jalgaon-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jalgaon EPF ESIC Compliance",
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
      <Script id="jalgaon-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Jalgaon, Maharashtra">
            <meta name="geo.position" content="21.0077;75.5626">
            <meta name="ICBM" content="21.0077, 75.5626">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/jalgaon-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/jalgaon-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-jalgaon"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/jalgaon-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Jalgaon Industries",

          alternateName:
            "Jalgaon EPF & ESIC Compliance Experts for Banana Processing, PVC MIDC & Agro Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jalgaon-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-CORRECT ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ring Road",
            addressLocality: "Jalgaon",
            addressRegion: "Maharashtra",
            postalCode: "425001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.0077,
            longitude: 75.5626,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Jalgaon District" },
            { "@type": "Place", name: "Jalgaon MIDC" },
            { "@type": "Place", name: "Bhusawal MIDC" },
            { "@type": "Place", name: "Banana Processing Belt" },
            { "@type": "Place", name: "Dal Mill Cluster" },
          ],

          description:
            "EPF & ESIC compliance services for Jalgaon banana processing units, PVC MIDC factories, dal mills and seasonal agro-processing labour. Expertise includes SRO Jalgaon inspections, EPF Section 7A proceedings, contractor PF liability and New Wage Code payroll alignment.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "48",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJalgaonDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJalgaonDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJalgaonDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-jalgaon" strategy="afterInteractive">
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
