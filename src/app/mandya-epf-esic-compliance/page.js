import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMandyaDist,
  sectionsMandyaDist,
  faqMandya,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Mandya EPF & ESIC Compliance for Sugar Mills, Distilleries, Textiles & Plantation Workers | EPFDesk",

  description:
    "Expert PF & ESIC compliance for Mandya sugar mills (Mysugar, Pandavapura), distilleries, textile units and plantation workers. Specialists in seasonal workforce PF, ESIC factory compliance and Principal Employer liability management.",

  keywords: [
    "Mandya PF consultant",
    "Mandya ESIC consultant",
    "Sugar mill PF Mandya",
    "Distillery ESIC Mandya",
    "Plantation worker PF Karnataka",
    "EPFDesk Mandya",
  ],

  alternates: {
    canonical: "https://epfdesk.com/mandya-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Mandya EPF & ESIC Compliance | Sugar Mills, Distilleries & Textiles",
    description:
      "PF & ESIC experts for Mandya sugar mills, distilleries, textile factories and plantation-based industries.",
    url: "https://epfdesk.com/mandya-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mandya EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Mandya EPF & ESIC Compliance | Sugar Mills & Distilleries",
    description:
      "PF/ESI compliance for Mandya sugar factories, distilleries, plantations and textile units.",
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
      <Script id="mandya-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Mandya, Karnataka, India">
            <meta name="geo.position" content="12.5223;76.8970">
            <meta name="ICBM" content="12.5223, 76.8970">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/mandya-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/mandya-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-mandya"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/mandya-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Mandya District",

          alternateName:
            "Mandya Sugar Mills, Distilleries & Plantation EPF/ESIC Compliance",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/mandya-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Bangalore–Mysore Road",
            addressLocality: "Mandya",
            addressRegion: "Karnataka",
            postalCode: "571401",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 12.5223,
            longitude: 76.897,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Mandya District" },
            { "@type": "Place", name: "Mandya Sugar Mills (MSCL)" },
            { "@type": "Place", name: "Pandavapura Sugar Factory" },
            { "@type": "Place", name: "Distilleries" },
            { "@type": "Place", name: "Textile Units" },
            { "@type": "Place", name: "Plantation Workforce" },
            { "@type": "Place", name: "Srirangapatna" },
            { "@type": "Place", name: "Krishnarajpet" },
          ],

          description:
            "EPF & ESIC compliance services for Mandya sugar mills, distilleries, textile units and plantation-based industries. Expertise includes seasonal workforce PF coverage, ESIC factory applicability, Principal Employer liability control and audit readiness.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "38",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMandyaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMandyaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMandya} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-mandya" strategy="afterInteractive">
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
