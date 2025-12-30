import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKhordhaDistrict,
  sectionsKhordhaDistrict,
  faqKhordhaDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Bhubaneswar EPF & ESIC Compliance: IT Sector Audits & Expert Consultants in Khordha | EPFDesk",

  description:
    "Expert EPF & ESIC consultancy for Bhubaneswar IT firms, startups, healthcare units and manufacturing establishments. Navigate RO Bhubaneswar audits, O-Hub compliance and New Labour Code transitions.",

  keywords: [
    "Bhubaneswar PF consultant",
    "EPF ESIC compliance Khordha",
    "IT sector PF audit Bhubaneswar",
    "ESIC registration for startups Odisha",
    "RO Bhubaneswar EPF 7A defense",
    "50% wage rule IT sector Odisha",
  ],

  alternates: {
    canonical: "https://epfdesk.com/khordha-bhubaneswar-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="khordha-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-OD">
            <meta name="geo.placename" content="Bhubaneswar, Khordha District, Odisha">
            <meta name="geo.position" content="20.2961;85.8245">
            <meta name="ICBM" content="20.2961, 85.8245">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/khordha-bhubaneswar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/khordha-bhubaneswar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-khordha"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/khordha-bhubaneswar-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Bhubaneswar & Khordha District",

          alternateName:
            "Bhubaneswar EPF & ESIC Compliance for IT, Startups & Service Sector",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/khordha-bhubaneswar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Janpath Road",
            addressLocality: "Bhubaneswar",
            addressRegion: "Odisha",
            postalCode: "751001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 20.2961,
            longitude: 85.8245,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Khordha District" },
            { "@type": "Place", name: "Bhubaneswar" },
            { "@type": "Place", name: "Infocity Bhubaneswar" },
            { "@type": "Place", name: "Patia IT Corridor" },
            { "@type": "Place", name: "Mancheswar Industrial Area" },
            { "@type": "Place", name: "Chandaka Industrial Estate" },
          ],

          description:
            "EPF & ESIC compliance services for Bhubaneswar IT companies, startups, healthcare units, manufacturing plants and service-sector employers. Expertise includes RO Bhubaneswar audit defense, ESIC applicability for IT sector, New Wage Code restructuring and contractor liability control.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "88",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKhordhaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKhordhaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKhordhaDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-khordha" strategy="afterInteractive">
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
