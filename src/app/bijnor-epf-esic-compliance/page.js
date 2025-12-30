import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBijnorDist,
  sectionsBijnorDist,
  faqBijnor,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Bijnor EPF & ESIC Compliance: Sugar Seasonal PF, Paper Mill Hazard & Agro-Contractor PE Liability | EPFDesk",
  description:
    "Critical EPF & ESIC compliance defense for Bijnor Sugar Mills, Paper Factories and Agro-Processing units. Experts in RO Moradabad jurisdiction, seasonal PF audits and hazardous industry ESIC liability.",
  keywords: [
    "Bijnor PF consultant",
    "Bijnor ESIC registration",
    "Sugar mill PF compliance Bijnor",
    "Paper mill ESIC hazard Bijnor",
    "RO Moradabad EPFO jurisdiction",
    "Agro contractor PF liability Bijnor",
  ],
  alternates: {
    canonical: "https://epfdesk.com/bijnor-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bijnor EPF & ESIC Compliance | Sugar, Paper & Agro-Processing | EPFDesk",
    description:
      "PF & ESIC specialists for Bijnor Sugar Mills, Paper/Chemical factories and Agro-Processing units.",
    url: "https://epfdesk.com/bijnor-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bijnor PF ESIC Compliance",
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
      <Script id="bijnor-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Bijnor">
            <meta name="geo.position" content="29.3724;78.1358">
            <meta name="ICBM" content="29.3724, 78.1358">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/bijnor-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/bijnor-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-bijnor-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/bijnor-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants Bijnor",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/bijnor-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Bijnor",
            addressRegion: "Uttar Pradesh",
            postalCode: "246701",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 29.3724,
            longitude: 78.1358,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Bijnor District",
            containedIn: {
              "@type": "State",
              name: "Uttar Pradesh",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Sugar, Paper & Agro-Processing Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Sugar Mill Seasonal PF Compliance",
                  description:
                    "Seasonal crushing labour PF audits, retention allowance exposure and PE liability defence for sugar mills",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Paper & Chemical Factory ESIC Compliance",
                  description:
                    "Hazardous industry ESIC coverage, accident liability handling and inspection defence for paper mills",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Agro-Processing & Contractor PE Liability",
                  description:
                    "PF & ESIC compliance for agro processors and labour contractors under RO Moradabad",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "71",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-bijnor" strategy="afterInteractive">
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
            district: 'Bijnor',
            state: 'Uttar Pradesh',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBijnorDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBijnorDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBijnor} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-bijnor" strategy="afterInteractive">
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
