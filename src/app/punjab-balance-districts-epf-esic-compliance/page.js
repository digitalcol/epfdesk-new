import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPunjabBalance,
  sectionsPunjabBalance,
  faqPunjabBalance,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Punjab EPF & ESIC Compliance: Energy Hubs, Export Clusters & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Punjab’s balance districts — Bathinda refinery and power corridor, Amritsar border trade exporters, Patiala–Rajpura pharma and logistics hubs, and regional MSMEs. Experts in RO Bathinda & RO Amritsar enforcement, contractor audits, Principal Employer liability and EEC-2025 compliance.",

  alternates: {
    canonical:
      "https://epfdesk.com/punjab-balance-districts-epf-esic-compliance",
  },

  openGraph: {
    title: "Punjab EPF & ESIC Compliance | Energy, Export & Pharma Hubs",
    description:
      "PF & ESIC specialists for Punjab’s energy corridor, export clusters, pharma hubs and logistics districts.",
    url: "https://epfdesk.com/punjab-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Punjab PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Punjab EPF & ESIC Compliance | Energy & Export Hubs | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Punjab energy corridors, exporters and pharma clusters.",
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
      <Script id="punjab-balance-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-PB">
            <meta name="geo.placename" content="Punjab">
            <meta name="geo.position" content="31.1471;75.3412">
            <meta name="ICBM" content="31.1471, 75.3412">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/punjab-balance-districts-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/punjab-balance-districts-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-punjab-balance"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/punjab-balance-districts-epf-esic-compliance#organization",

          name: "EPFDesk – Punjab EPF & ESIC Compliance for Energy, Export & Pharma Districts",

          alternateName:
            "PF & ESIC Consultant for Bathinda, Amritsar, Patiala & Punjab Industrial Hubs",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/punjab-balance-districts-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Ferozepur Road",
            addressRegion: "Punjab",
            postalCode: "141001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 31.1471,
            longitude: 75.3412,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Bathinda District" },
            { "@type": "AdministrativeArea", name: "Mansa District" },
            { "@type": "AdministrativeArea", name: "Barnala District" },
            { "@type": "AdministrativeArea", name: "Amritsar District" },
            { "@type": "AdministrativeArea", name: "Gurdaspur District" },
            { "@type": "AdministrativeArea", name: "Pathankot District" },
            { "@type": "AdministrativeArea", name: "Patiala District" },
            { "@type": "AdministrativeArea", name: "Fatehgarh Sahib District" },
            { "@type": "Place", name: "Rajpura Industrial Area" },
            { "@type": "Place", name: "Mandi Gobindgarh Steel Cluster" },
          ],

          description:
            "EPF & ESIC compliance specialists for Punjab’s energy corridors, border trade exporters, pharma manufacturing hubs, steel clusters and logistics-driven MSMEs. Expertise includes contractor PF audits, Principal Employer liability, RO Bathinda & RO Amritsar proceedings and Labour Code readiness.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "96",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPunjabBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPunjabBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqPunjabBalance} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-punjab" strategy="afterInteractive">
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
