import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNorth24Parganas,
  sectionsNorth24Parganas,
  faqNorth24Parganas,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "North 24 Parganas EPF & ESIC Compliance: Sector V IT Firms, Barrackpore Industries & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for North 24 Parganas — Salt Lake Sector V IT companies, Barrackpore manufacturing units, Barasat logistics hubs and MSMEs. Experts in RO Barrackpore enforcement, IT wage audits, Principal Employer liability and EEC-2025 filings.",

  keywords: [
    "North 24 Parganas PF consultant",
    "North 24 Parganas ESIC consultant",
    "Sector V PF ESIC compliance",
    "Barrackpore industrial labour compliance",
    "Barasat logistics PF audits",
    "IT company wage audit North 24 Parganas",
    "Principal Employer liability West Bengal",
    "RO Barrackpore EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/north-24-parganas-epf-esic-compliance",
  },

  openGraph: {
    title:
      "North 24 Parganas EPF & ESIC Compliance | IT & Industrial Corridor | EPFDesk",
    description:
      "PF & ESIC specialists for Sector V IT firms, Barrackpore industries, logistics hubs and MSMEs in North 24 Parganas.",
    url: "https://epfdesk.com/north-24-parganas-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "North 24 Parganas PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "North 24 Parganas EPF & ESIC Compliance | IT & Industrial Corridor | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Sector V IT companies, Barrackpore industries and logistics hubs.",
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
      <Script id="north24-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-WB">
            <meta name="geo.placename" content="North 24 Parganas, West Bengal, India">
            <meta name="geo.position" content="22.6166;88.4029">
            <meta name="ICBM" content="22.6166, 88.4029">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/north-24-parganas-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/north-24-parganas-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-north-24-parganas"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/north-24-parganas-epf-esic-compliance#organization",

          name: "EPFDesk – North 24 Parganas EPF & ESIC Compliance for IT & Industrial Corridor",

          alternateName:
            "North 24 Parganas PF & ESIC Consultant for Sector V, Barrackpore & Logistics Hubs",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/north-24-parganas-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Barasat Road",
            addressRegion: "West Bengal",
            postalCode: "700124",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.6166,
            longitude: 88.4029,
          },

          areaServed: [
            { "@type": "Place", name: "Salt Lake Sector V" },
            { "@type": "City", name: "Barrackpore" },
            { "@type": "City", name: "Barasat" },
            { "@type": "City", name: "Madhyamgram" },
            {
              "@type": "AdministrativeArea",
              name: "North 24 Parganas District",
            },
          ],

          description:
            "EPF & ESIC compliance services for North 24 Parganas covering Sector V IT companies, Barrackpore manufacturing units, Barasat logistics hubs and MSMEs, with focus on wage audits, Principal Employer liability and RO Barrackpore enforcement.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "88",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNorth24Parganas} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNorth24Parganas} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqNorth24Parganas} />
      </FadeInWhenVisible>
      <Script id="conversion-tracking-north" strategy="afterInteractive">
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
