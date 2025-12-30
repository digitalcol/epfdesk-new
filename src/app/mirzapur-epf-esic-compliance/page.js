import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMirzapurDistrict,
  sectionsMirzapurDistrict,
  faqMirzapurDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Mirzapur EPF & ESIC Compliance: Carpet Industry Piece-Rate PF, Brassware Hazard & RO Varanasi Audits 2025 | EPFDesk",

  description:
    "Specialized EPF & ESIC defense for Mirzapur carpet exporters, brassware manufacturers and stone mining units. Navigate RO Varanasi audits, 2025 piece-rate PF mandates and ESIC hazard liability in the Purvanchal carpet belt.",

  keywords: [
    "Mirzapur PF consultant",
    "Piece rate PF carpet industry",
    "ESIC registration brassware Mirzapur",
    "RO Varanasi EPF audit defense",
    "Silicosis ESIC liability Mirzapur",
    "Carpet exporter PF compliance UP",
  ],

  alternates: {
    canonical: "https://epfdesk.com/mirzapur-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title: "Mirzapur EPF & ESIC Compliance | Carpet, Brass & Mining",
    description:
      "PF & ESIC specialists for Mirzapur carpet exporters, brassware units and sandstone mining clusters under RO Varanasi.",
    url: "https://epfdesk.com/mirzapur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mirzapur EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Mirzapur EPF & ESIC Compliance | Carpet & Brass Industry",
    description:
      "High-risk PF & ESIC compliance for Mirzapur’s carpet, brassware and mining sectors.",
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
      <Script id="mirzapur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Mirzapur, Uttar Pradesh, India">
            <meta name="geo.position" content="25.1337;82.5644">
            <meta name="ICBM" content="25.1337, 82.5644">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/mirzapur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/mirzapur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-mirzapur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/mirzapur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Mirzapur District",

          alternateName:
            "Mirzapur Carpet, Brassware & Mining EPF/ESIC Compliance",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/mirzapur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "MG Road",
            addressRegion: "Uttar Pradesh",
            postalCode: "226001",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.1337,
            longitude: 82.5644,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Mirzapur District" },
            { "@type": "Place", name: "Bhadohi–Mirzapur Carpet Belt" },
            { "@type": "Place", name: "Chunar" },
            { "@type": "Place", name: "Ahraura" },
            { "@type": "Place", name: "Sandstone & Mining Clusters" },
          ],

          description:
            "EPF & ESIC compliance services for Mirzapur’s carpet exporters, brassware manufacturing units and mining operations. Specialized handling of piece-rate wage PF exposure, ESIC hazard liability (silicosis), Principal Employer risk and RO Varanasi enforcement.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "67",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMirzapurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMirzapurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMirzapurDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-mirzapur" strategy="afterInteractive">
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
