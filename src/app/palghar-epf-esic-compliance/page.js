import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPalgharDistrict,
  sectionsPalgharDistrict,
  faqPalgharDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Palghar EPF & ESIC Compliance for Tarapur MIDC, Boisar Pharma & Hazardous Factory Liability | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Tarapur MIDC chemical and pharma factories, PF liability for Boisar engineering units, and mandatory ESIC for hazardous industry workers. Specialists in Factory Act and Principal Employer liability.",

  keywords: [
    "Palghar PF consultant",
    "Tarapur MIDC ESIC compliance",
    "Boisar Pharma PF ESIC",
    "Hazardous factory ESIC Palghar",
    "Principal Employer liability Tarapur",
    "EPFO 7A defence Palghar",
  ],

  alternates: {
    canonical: "https://epfdesk.com/palghar-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Palghar EPF & ESIC Compliance | Tarapur MIDC & Hazardous Industries | EPFDesk",
    description:
      "PF & ESIC specialists for Palghar Tarapur MIDC chemical, pharma, and heavy manufacturing units.",
    url: "https://epfdesk.com/palghar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Palghar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Palghar EPF & ESIC Compliance | Tarapur MIDC & Pharma | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and audit defence for Tarapur MIDC hazardous factories.",
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
      <Script id="palghar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Palghar">
            <meta name="geo.position" content="19.6967;72.7699">
            <meta name="ICBM" content="19.6967, 72.7699">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/palghar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/palghar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-palghar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/palghar-epf-esic-compliance#organization",

          name: "EPFDesk – Palghar EPF & ESIC Compliance for Tarapur MIDC & Hazardous Industries",

          alternateName:
            "PF & ESIC Consultant for Tarapur MIDC, Boisar Pharma & Palghar Industrial Belt",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/palghar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "CIDCO",
            addressRegion: "Maharashtra",
            postalCode: "431003",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.6967,
            longitude: 72.7699,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Palghar District" },
            { "@type": "Place", name: "Tarapur MIDC" },
            { "@type": "Place", name: "Boisar Industrial Area" },
            { "@type": "Place", name: "Wada Industrial Belt" },
            { "@type": "Place", name: "Palghar MIDC" },
          ],

          description:
            "EPF & ESIC compliance specialists for Palghar district covering Tarapur MIDC chemical and pharma factories, hazardous manufacturing units, Factory Act obligations, ESIC coverage, and Principal Employer liability management.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "88",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPalgharDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPalgharDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqPalgharDistrict} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-palghar" strategy="afterInteractive">
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
