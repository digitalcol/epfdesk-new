import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBudaunDist,
  sectionsBudaunDist,
  faqBudaun,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Budaun EPF & ESIC Compliance: Agro-Processing Seasonal PF, Trading MSME Coverage & PE Liability Defense | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Budaun Dal Mills, Cold Storages and Trading MSMEs. Experts in RO Bareilly liaison, seasonal PF audits and MSME coverage risk mitigation.",

  keywords: [
    "Budaun PF consultant",
    "Budaun ESIC registration",
    "Dal mill PF compliance Budaun",
    "Cold storage ESIC Budaun",
    "RO Bareilly PF jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/budaun-epf-esic-compliance",
  },

  openGraph: {
    title: "Budaun EPF & ESIC Compliance | Agro-Processing & MSME",
    description:
      "PF & ESIC specialists for Budaun Agro-Processing units, Cold Storages and Trading MSMEs.",
    url: "https://epfdesk.com/budaun-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Budaun PF ESIC Compliance",
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
      <Script id="budaun-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Budaun">
            <meta name="geo.position" content="28.0362;79.1267">
            <meta name="ICBM" content="28.0362, 79.1267">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/budaun-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/budaun-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-budaun-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/budaun-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants Budaun",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/budaun-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Budaun",
            addressRegion: "Uttar Pradesh",
            postalCode: "243601",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.0362,
            longitude: 79.1267,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Budaun District",
            containedIn: {
              "@type": "State",
              name: "Uttar Pradesh",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Agro-Processing & MSME Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Dal Mill & Agro-Processing PF Compliance",
                  description:
                    "Seasonal PF audits, contractor liability and wage structuring for dal mills and agro units",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cold Storage ESIC Coverage",
                  description:
                    "ESIC applicability, accident liability and inspection handling for cold storages",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Trading MSME PE Liability Defense",
                  description:
                    "MSME headcount audits, PE liability mitigation and RO Bareilly representation",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "64",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-budaun" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WMNLTE5RKQ', {
            page_location: window.location.href,
            page_title: document.title,
            custom_map: {
              dimension1: 'district',
              dimension2: 'state'
            }
          });

          gtag('event', 'page_view', {
            district: 'Budaun',
            state: 'Uttar Pradesh',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBudaunDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBudaunDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBudaun} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-budaun" strategy="afterInteractive">
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
