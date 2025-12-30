import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRaigadDistrict,
  sectionsRaigadDistrict,
  faqRaigadDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Raigad EPF & ESIC Compliance for JNPT Contractors, Patalganga MIDC & Chemical Factory Liability | EPFDesk",

  description:
    "Expert EPF & ESIC defence for JNPT Port and Uran contractors, PF liability for Patalganga and Taloja MIDC chemical factories, and mandatory ESIC for hazardous industry workers. Specialists in Dock Workers Act and Principal Employer liability.",

  alternates: {
    canonical: "https://epfdesk.com/raigad-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Raigad EPF & ESIC Compliance | JNPT Port & Hazardous Industries | EPFDesk",
    description:
      "PF & ESIC specialists for Raigad JNPT port operations, chemical MIDC factories, and high-risk contract labour environments.",
    url: "https://epfdesk.com/raigad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Raigad EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Raigad EPF & ESIC Compliance | JNPT & MIDC Chemical Units | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for JNPT port contractors and Raigad chemical factories.",
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
      <Script id="raigad-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Raigad">
            <meta name="geo.position" content="18.5158;73.1822">
            <meta name="ICBM" content="18.5158, 73.1822">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/raigad-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/raigad-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-raigad"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/raigad-epf-esic-compliance#organization",

          name: "EPFDesk – Raigad EPF & ESIC Compliance for JNPT Port & MIDC Chemical Industries",

          alternateName:
            "PF & ESIC Consultant for JNPT, Patalganga MIDC & Taloja MIDC",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/raigad-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Pen Road",
            addressRegion: "Maharashtra",
            postalCode: "402107",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 18.5158,
            longitude: 73.1822,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Raigad District" },
            { "@type": "Place", name: "Jawaharlal Nehru Port Trust (JNPT)" },
            { "@type": "Place", name: "Patalganga MIDC" },
            { "@type": "Place", name: "Taloja MIDC" },
            { "@type": "Place", name: "Panvel Logistics Hub" },
            { "@type": "Place", name: "Dighi Port" },
          ],

          description:
            "EPF & ESIC compliance specialists for Raigad’s port-linked and hazardous industries including JNPT contractors, Patalganga and Taloja chemical MIDCs, Dock Workers Act applicability, and Principal Employer liability under CLRA.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "92",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRaigadDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRaigadDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqRaigadDistrict} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-raigad" strategy="afterInteractive">
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
