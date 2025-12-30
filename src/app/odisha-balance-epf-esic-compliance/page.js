import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataOdishaBalance,
  sectionsOdishaBalance,
  faqOdishaBalance,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Odisha EPF & ESIC Compliance: Agri-Processing, Mineral Belts & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Odisha’s balance districts — Western Odisha agri-processing hubs (Bargarh, Balangir), Southern mineral belts (Koraput, Rayagada, Kalahandi) and regional MSMEs. Experts in RO Sambalpur & RO Berhampur enforcement, mining Principal Employer liability, contractor audits and Labour Code transitions.",

  keywords: [
    "Odisha PF consultant",
    "Odisha ESIC consultant",
    "Bargarh agro processing PF ESIC",
    "Koraput mining labour compliance",
    "Rayagada mineral belt PF audits",
    "Mining Principal Employer liability Odisha",
    "RO Sambalpur EPFO jurisdiction",
    "RO Berhampur EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/odisha-balance-epf-esic-compliance",
  },

  openGraph: {
    title: "Odisha EPF & ESIC Compliance | Agri & Mineral Belts",
    description:
      "PF & ESIC specialists for Odisha’s agri-processing districts and southern mineral belts governed by RO Sambalpur and RO Berhampur.",
    url: "https://epfdesk.com/odisha-balance-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Odisha PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Odisha EPF & ESIC Compliance | Agri & Mineral Belts | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Odisha agri-processing hubs and mineral districts.",
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
      <Script id="odisha-balance-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-OD">
            <meta name="geo.placename" content="Odisha">
            <meta name="geo.position" content="20.9517;85.0985">
            <meta name="ICBM" content="20.9517, 85.0985">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/odisha-balance-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/odisha-balance-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-odisha-balance"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/odisha-balance-epf-esic-compliance#organization",

          name: "EPFDesk – Odisha EPF & ESIC Compliance for Agri-Processing & Mineral Belts",

          alternateName:
            "PF & ESIC Consultant for Western & Southern Odisha Districts",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/odisha-balance-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Janpath Road",
            addressRegion: "Odisha",
            postalCode: "751001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 20.9517,
            longitude: 85.0985,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Koraput District" },
            { "@type": "AdministrativeArea", name: "Rayagada District" },
            { "@type": "AdministrativeArea", name: "Kalahandi District" },
            { "@type": "AdministrativeArea", name: "Bargarh District" },
            { "@type": "AdministrativeArea", name: "Balangir District" },
            { "@type": "AdministrativeArea", name: "Sambalpur District" },
            { "@type": "AdministrativeArea", name: "Dhenkanal District" },
            { "@type": "AdministrativeArea", name: "Nayagarh District" },
            { "@type": "AdministrativeArea", name: "Puri District" },
          ],

          description:
            "EPF & ESIC compliance specialists for Odisha’s western agri-processing hubs and southern mineral belt, with expertise in mining contractor audits, Principal Employer liability, RO Sambalpur & RO Berhampur proceedings and Labour Code readiness.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "81",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataOdishaBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsOdishaBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqOdishaBalance} />
      </FadeInWhenVisible>
      <Script id="conversion-tracking-odisha" strategy="afterInteractive">
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
