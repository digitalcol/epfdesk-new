import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMathuraDist,
  sectionsMathuraDist,
  faqMathura,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Mathura EPF & ESIC Compliance: IOCL Refinery PE Liability, Petrochemical Hazard & Tourism Audits | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Mathura IOCL refinery contractors, dairy units and hotels. Experts in RO Agra liaison, catastrophic ESIC hazard mitigation and CLRA/Principal Employer liability defense.",

  keywords: [
    "Mathura PF consultant",
    "Mathura ESIC registration",
    "IOCL refinery PF compliance",
    "Petrochemical ESIC hazard Mathura",
    "Mathura PE liability contractors",
    "RO Agra EPFO Mathura jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/mathura-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Mathura EPF & ESIC Compliance | IOCL Refinery, Petrochemical & Tourism",
    description:
      "PF & ESIC specialists for Mathura refinery contractors, petrochemical units, dairy plants and hotels.",
    url: "https://epfdesk.com/mathura-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mathura EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Mathura EPF & ESIC Compliance | IOCL Refinery & Hazard Defence",
    description:
      "Expert PF/ESIC compliance for Mathura refinery contractors, dairy and tourism sectors.",
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
      <Script id="mathura-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Mathura, Uttar Pradesh, India">
            <meta name="geo.position" content="27.4924;77.6737">
            <meta name="ICBM" content="27.4924, 77.6737">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/mathura-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/mathura-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-mathura"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/mathura-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Mathura District",

          alternateName:
            "Mathura IOCL Refinery, Petrochemical & Tourism EPF/ESIC Compliance",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/mathura-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Holi Gate Road",
            addressLocality: "Mathura",
            addressRegion: "Uttar Pradesh",
            postalCode: "281001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 27.4924,
            longitude: 77.6737,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Mathura District" },
            { "@type": "Place", name: "IOCL Mathura Refinery" },
            { "@type": "Place", name: "Petrochemical Units" },
            { "@type": "Place", name: "Dairy Processing Units" },
            { "@type": "Place", name: "Hotels & Tourism Establishments" },
            { "@type": "Place", name: "Govardhan" },
            { "@type": "Place", name: "Vrindavan" },
          ],

          description:
            "Specialized EPF & ESIC compliance services for Mathura IOCL refinery contractors, petrochemical units, dairy plants and tourism establishments. Expertise includes catastrophic ESIC hazard mitigation, CLRA/Principal Employer liability defense and RO Agra inspection handling.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "82",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMathuraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMathuraDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMathura} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-mathura" strategy="afterInteractive">
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
