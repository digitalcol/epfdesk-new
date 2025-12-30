import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataChandrapurDistrict,
  sectionsChandrapurDistrict,
  faqChandrapurDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Chandrapur EPF & ESIC Compliance for WCL, CSTPS & Mining Contractors | EPFDesk",

  description:
    "Critical EPF & ESIC compliance for Chandrapur coal mining, CSTPS power plant contractors, cement factories and PSU vendors. Specialists in CLRA PE liability, BOCW cess, hazardous industry ESIC and RO Nagpur audits.",

  keywords: [
    "Chandrapur PF consultant",
    "WCL mining PF ESIC",
    "CSTPS contractor compliance",
    "Power plant CLRA liability",
    "Cement factory ESIC hazard",
    "RO Nagpur EPFO defence",
  ],

  alternates: {
    canonical: "https://epfdesk.com/chandrapur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Chandrapur EPF & ESIC Compliance | Power, Mining & PSU Contractors | EPFDesk",
    description:
      "PF & ESIC specialists for Chandrapur coal mines, CSTPS power plant, cement and heavy industrial contractors.",
    url: "https://epfdesk.com/chandrapur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chandrapur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ===========================
   PAGE COMPONENT
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO + EXTRA META ========= */}
      <Script id="chandrapur-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Chandrapur">
            <meta name="geo.position" content="19.9615;79.2961">
            <meta name="ICBM" content="19.9615, 79.2961">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/chandrapur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/chandrapur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-chandrapur-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/chandrapur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Chandrapur Mining & Power Contractors",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/chandrapur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Chandrapur",
            addressRegion: "Maharashtra",
            postalCode: "442401",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.9615,
            longitude: 79.2961,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Chandrapur District",
            containedIn: {
              "@type": "State",
              name: "Maharashtra",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Mining, Power & PSU Contractor Compliance",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Coal Mining & WCL Contractor PF ESIC",
                  description:
                    "PF, ESIC, CLRA and BOCW compliance for WCL coal mine contractors",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "CSTPS Power Plant Contractor Compliance",
                  description:
                    "Principal Employer liability, contractor audits and ESIC hazard compliance",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cement & Hazardous Industry ESIC",
                  description:
                    "ESIC accident liability, inspection defence and wage audits",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "53",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataChandrapurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChandrapurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqChandrapurDistrict} />
      <Script id="conversion-tracking-chandrapur" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              gtag('event', 'phone_click', {
                event_category: 'conversion',
                event_label: el.getAttribute('href'),
                value: 5
              });
            });
          });

          document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
            el.addEventListener('click', () => {
              gtag('event', 'whatsapp_click', {
                event_category: 'conversion',
                event_label: window.location.pathname,
                value: 5
              });
            });
          });

          document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
              gtag('event', 'form_submission', {
                event_category: 'lead',
                event_label: window.location.pathname,
                value: 10
              });
            });
          });
        `}
      </Script>
    </>
  );
}
