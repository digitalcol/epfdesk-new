import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKeonjharDistrict,
  sectionsKeonjharDistrict,
  faqKeonjharDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Keonjhar EPF & ESIC Compliance: Mining Sector Audits & Expert Consultants | EPFDesk",

  description:
    "Specialized EPF & ESIC consultancy for Keonjhar iron ore mines, crusher units and mining vendors. Navigate RO Keonjhar audits, i3MS integration and Principal Employer liability in Odisha’s mineral hub.",

  keywords: [
    "Keonjhar PF consultant",
    "EPF compliance for iron ore mines",
    "ESIC registration Barbil crusher units",
    "RO Keonjhar EPF 7A defense",
    "i3MS PF compliance Keonjhar",
    "Mining contractor ESIC Odisha",
  ],

  alternates: {
    canonical: "https://epfdesk.com/keonjhar-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="keonjhar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-OD">
            <meta name="geo.placename" content="Keonjhar, Odisha">
            <meta name="geo.position" content="21.6280;85.5817">
            <meta name="ICBM" content="21.6280, 85.5817">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/keonjhar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/keonjhar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-keonjhar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/keonjhar-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Keonjhar Mining Sector",

          alternateName:
            "Keonjhar EPF & ESIC Compliance for Iron Ore Mines & Crusher Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/keonjhar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mining Road",
            addressLocality: "Keonjhar",
            addressRegion: "Odisha",
            postalCode: "758001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.628,
            longitude: 85.5817,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Keonjhar District" },
            { "@type": "Place", name: "Barbil Mining Belt" },
            { "@type": "Place", name: "Joda Iron Ore Zone" },
            { "@type": "Place", name: "Koira Mining Circle" },
            { "@type": "Place", name: "Banspani" },
            { "@type": "Place", name: "Gandhamardan Hills" },
          ],

          description:
            "EPF & ESIC compliance services for Keonjhar iron ore mines, crusher units, mineral processing plants and transport contractors. Expertise includes RO Keonjhar audits, i3MS-linked PF compliance, CLRA Principal Employer liability and ESIC coverage for hazardous mining operations.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "76",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKeonjharDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKeonjharDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqKeonjharDistrict} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-keonjhar" strategy="afterInteractive">
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
