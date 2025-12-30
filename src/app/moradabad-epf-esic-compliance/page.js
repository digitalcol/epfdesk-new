import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMoradabadDist,
  sectionsMoradabadDist,
  faqMoradabad,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Moradabad EPF & ESIC Compliance: Brassware Piece-Rate Evasion, Export PE Liability & SME Audits | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Moradabad brassware manufacturers, handicraft exporters and MSMEs. Experts in RO Moradabad liaison, piece-rate PF exposure, export house PE liability and ESIC hazard audits.",

  keywords: [
    "Moradabad PF consultant",
    "Moradabad ESIC registration",
    "Brassware piece rate PF Moradabad",
    "Handicraft exporter PF liability",
    "RO Moradabad EPFO consultant",
    "Brass foundry ESIC compliance",
  ],

  alternates: {
    canonical: "https://epfdesk.com/moradabad-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Moradabad EPF & ESIC Compliance | Brassware & Handicraft Export Sector",
    description:
      "PF & ESIC specialists for Moradabad brassware manufacturers, handicraft exporters and MSMEs. Piece-rate audits and RO Moradabad enforcement handled.",
    url: "https://epfdesk.com/moradabad-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Moradabad EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title:
      "Moradabad EPF & ESIC Compliance | Brassware Export Industry | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Moradabad brassware manufacturers and handicraft exporters.",
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
      <Script id="moradabad-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Moradabad, Uttar Pradesh, India">
            <meta name="geo.position" content="28.8386;78.7733">
            <meta name="ICBM" content="28.8386, 78.7733">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/moradabad-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/moradabad-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-moradabad"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/moradabad-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Moradabad Brassware & Export Sector",

          alternateName:
            "Moradabad EPF & ESIC Compliance for Brassware Manufacturers & Handicraft Exporters",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/moradabad-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Hazratganj",
            addressRegion: "Uttar Pradesh",
            postalCode: "226001",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.8386,
            longitude: 78.7733,
          },

          areaServed: [
            { "@type": "City", name: "Moradabad" },
            { "@type": "Place", name: "Moradabad Industrial Areas" },
            { "@type": "Place", name: "Brassware Manufacturing Clusters" },
            { "@type": "Place", name: "Western UP Export Belt" },
          ],

          description:
            "EPF & ESIC compliance services for Moradabad brassware manufacturers, handicraft exporters and MSMEs. Specialized handling of piece-rate wage evasion, export house Principal Employer liability, ESIC hazard compliance and RO Moradabad inspections.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "82",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMoradabadDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMoradabadDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMoradabad} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-moradabad" strategy="afterInteractive">
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
