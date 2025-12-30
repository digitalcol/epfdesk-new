import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRaigarhDistrict,
  sectionsRaigarhDistrict,
  faqRaigarhDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Raigarh EPF & ESIC Compliance: Steel Hub PE Liability, Sponge Iron Audits & EEC-2025 | EPFDesk",

  description:
    "Specialized EPF & ESIC defense for Raigarh steel plants, sponge iron units and power hubs. Navigate RO Bilaspur audits, EEC-2025 voluntary disclosure and hazardous process compliance.",

  alternates: {
    canonical: "https://epfdesk.com/raigarh-epf-esic-compliance",
  },

  openGraph: {
    title: "Raigarh EPF & ESIC Compliance | Steel, Power & Metal Clusters",
    description:
      "PF & ESIC specialists for Raigarh steel belts, sponge iron units and power plants.",
    url: "https://epfdesk.com/raigarh-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Raigarh EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Raigarh EPF & ESIC Compliance | Steel & Power Hub",
    description:
      "High-risk PF & ESIC compliance for Raigarh’s steel, sponge iron and power sectors.",
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
      <Script id="raigarh-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-CG">
            <meta name="geo.placename" content="Raigarh">
            <meta name="geo.position" content="21.8974;83.3950">
            <meta name="ICBM" content="21.8974, 83.3950">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/raigarh-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/raigarh-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-raigarh"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/raigarh-epf-esic-compliance#organization",

          name: "EPFDesk – Raigarh EPF & ESIC Compliance for Steel, Power & Metal Clusters",

          alternateName:
            "PF & ESIC Consultant for Raigarh Steel Plants, Sponge Iron Units & Power Projects",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/raigarh-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Chakradhar Nagar",
            addressRegion: "Chhattisgarh",
            postalCode: "496001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.8974,
            longitude: 83.395,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Raigarh District" },
            { "@type": "Place", name: "Punjipathra Industrial Area" },
            { "@type": "Place", name: "Tamnar" },
            { "@type": "Place", name: "Kharsia" },
            { "@type": "Place", name: "Raigarh Industrial Area" },
          ],

          description:
            "EPF & ESIC compliance specialists for Raigarh’s steel plants, sponge iron units, power projects and hazardous industrial operations governed by RO Bilaspur, including PE liability, EEC-2025 disclosures and ESIC hazardous process coverage.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "78",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRaigarhDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRaigarhDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqRaigarhDistrict} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-raigarh" strategy="afterInteractive">
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
