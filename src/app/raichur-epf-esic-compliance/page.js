import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRaichurDist,
  sectionsRaichurDist,
  faqRaichur,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Raichur EPF & ESIC Compliance for RTPS Thermal Power, Hutti Gold Mines & Rice Mills | EPFDesk",

  description:
    "Expert PF & ESIC compliance for Raichur’s RTPS power plant contractors, Hutti Gold Mines labour and Sindhanur rice mills. Specialists in PF Principal Employer liability, seasonal worker ESIC coverage and hazardous industry compliance.",

  alternates: {
    canonical: "https://epfdesk.com/raichur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Raichur EPF & ESIC Consultant | Thermal Power, Gold Mining & Rice Mills | EPFDesk",
    description:
      "PF & ESIC compliance for Raichur’s high-risk sectors — RTPS, Hutti Gold Mines, agro-processing and KPCL contractors.",
    url: "https://epfdesk.com/raichur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Raichur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Raichur EPF & ESIC Compliance | RTPS, Hutti Gold Mines & Rice Mills | EPFDesk",
    description:
      "Specialised PF/ESI solutions for hazardous industries, power plants and agro-processing units in Raichur.",
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
      <Script id="raichur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Raichur">
            <meta name="geo.position" content="16.2055;77.3557">
            <meta name="ICBM" content="16.2055, 77.3557">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/raichur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/raichur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-raichur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/raichur-epf-esic-compliance#organization",

          name: "EPFDesk – Raichur EPF & ESIC Compliance for Thermal Power, Mining & Agro Processing",

          alternateName:
            "PF & ESIC Consultant for RTPS Shaktinagar, Hutti Gold Mines & Sindhanur Rice Mills",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/raichur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Station Road",
            addressRegion: "Karnataka",
            postalCode: "584101",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 16.2055,
            longitude: 77.3557,
          },

          areaServed: [
            { "@type": "City", name: "Raichur" },
            { "@type": "Place", name: "RTPS Shaktinagar" },
            { "@type": "Place", name: "Hutti Gold Mines" },
            { "@type": "Place", name: "Sindhanur Rice Milling Cluster" },
          ],

          description:
            "EPF & ESIC compliance specialists for Raichur’s high-risk industries including RTPS thermal power contractors, Hutti Gold Mines, KPCL vendors and seasonal agro-processing units. Expertise includes Principal Employer liability, hazardous-process ESIC coverage, seasonal worker PF applicability and EPFO 7A defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "38",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRaichurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRaichurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqRaichur} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-raichur" strategy="afterInteractive">
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
