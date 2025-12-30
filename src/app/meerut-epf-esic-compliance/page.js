import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMeerutDist,
  sectionsMeerutDist,
  faqMeerut,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Meerut EPF & ESIC Compliance: Sports Goods Piece-Rate, Engineering PE Liability & Sugar Seasonal Risk | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Meerut sports goods manufacturers, engineering factories and sugar mills. Experts in RO Meerut liaison, combating piece-rate wage suppression, managing seasonal PF liability, and mitigating Principal Employer risk across Western UP.",

  keywords: [
    "Meerut PF consultant",
    "Meerut ESIC registration",
    "Sports goods piece rate PF Meerut",
    "Sugar mill retaining allowance PF",
    "Engineering PE liability Meerut",
    "RO Meerut EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/meerut-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Meerut EPF & ESIC Compliance | Sports Goods, Engineering & Sugar Mills",
    description:
      "PF & ESIC specialists for Meerut sports goods units, engineering MSMEs and sugar mills. Piece-rate audits, seasonal PF risk and RO Meerut enforcement handled.",
    url: "https://epfdesk.com/meerut-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Meerut EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Meerut EPF & ESIC Compliance | Sports Goods & Seasonal Risk",
    description:
      "Expert PF/ESIC compliance for Meerut sports goods, engineering and sugar sectors.",
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
      <Script id="meerut-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Meerut, Uttar Pradesh, India">
            <meta name="geo.position" content="28.9845;77.7064">
            <meta name="ICBM" content="28.9845, 77.7064">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/meerut-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/meerut-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-meerut"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/meerut-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Meerut",

          alternateName:
            "Meerut Sports Goods, Engineering & Sugar Industry EPF/ESIC Compliance",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/meerut-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Garh Road",
            addressLocality: "Meerut",
            addressRegion: "Uttar Pradesh",
            postalCode: "250002",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.9845,
            longitude: 77.7064,
          },

          areaServed: [
            { "@type": "City", name: "Meerut" },
            { "@type": "Place", name: "Meerut Sports Goods Cluster" },
            { "@type": "Place", name: "Engineering & MSME Industrial Areas" },
            { "@type": "Place", name: "Sugar Mills of Western Uttar Pradesh" },
          ],

          description:
            "EPF & ESIC compliance services for Meerut sports goods manufacturers, engineering MSMEs and sugar mills. Specialized handling of piece-rate wage audits, seasonal PF liability including retaining allowance, Principal Employer liability under CLRA and RO Meerut proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "87",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMeerutDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMeerutDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMeerut} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-meerut" strategy="afterInteractive">
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
