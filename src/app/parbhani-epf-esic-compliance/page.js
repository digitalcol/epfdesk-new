import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataParbhaniDistrict,
  sectionsParbhaniDistrict,
  faqParbhaniDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Parbhani EPF & ESIC Compliance for Dal Mills, Cotton Ginning & Seasonal Agro-Processing | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Parbhani Dal Mills, PF liability on seasonal cotton ginning workers, and mandatory ESIC for agro-processing factories. Specialists in RO Aurangabad audit defence.",

  alternates: {
    canonical: "https://epfdesk.com/parbhani-epf-esic-compliance",
  },

  openGraph: {
    title: "Parbhani EPF & ESIC Compliance | Dal Mills & Cotton Ginning",
    description:
      "High-risk PF & ESIC compliance for Parbhani Dal Mills, Cotton Ginning units and seasonal agro-processing workers.",
    url: "https://epfdesk.com/parbhani-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Parbhani EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Parbhani EPF & ESIC Compliance | Dal Mills & Cotton Ginning | EPFDesk",
    description:
      "PF & ESIC services for Parbhani dal mills, cotton ginning units and seasonal agro labour.",
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
      <Script id="parbhani-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Parbhani">
            <meta name="geo.position" content="19.2600;76.7748">
            <meta name="ICBM" content="19.2600, 76.7748">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/parbhani-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/parbhani-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-parbhani"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/parbhani-epf-esic-compliance#organization",

          name: "EPFDesk – Parbhani EPF & ESIC Compliance for Dal Mills & Agro Processing",

          alternateName:
            "PF & ESIC Consultant for Parbhani Dal Mills, Cotton Ginning & Seasonal Labour",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/parbhani-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Basmat Road",
            addressRegion: "Maharashtra",
            postalCode: "431401",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.26,
            longitude: 76.7748,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Parbhani District" },
            { "@type": "Place", name: "Parbhani MIDC" },
            { "@type": "Place", name: "Manwat" },
            { "@type": "Place", name: "Jintur" },
            { "@type": "Place", name: "Pathri" },
          ],

          description:
            "EPF & ESIC compliance specialists for Parbhani Dal Mills, cotton ginning factories, seasonal agro-processing units and piece-rate labour employment, with expertise in RO Aurangabad audits, contractor PF liability and Labour Code readiness.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "58",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataParbhaniDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsParbhaniDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqParbhaniDistrict} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-parbhani" strategy="afterInteractive">
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
