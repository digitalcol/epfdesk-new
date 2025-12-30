import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBiharBalance,
  sectionsBiharBalance,
  faqBiharBalance,
} from "@/utils/data";

/* ===========================
   METADATA (STATE – BALANCE)
=========================== */
export const metadata = {
  title:
    "Bihar EPF & ESIC Compliance: Bhagalpur Silk, Rohtas Cement, Purnia Ethanol & PE Liability | EPFDesk",
  description:
    "High-risk EPF & ESIC compliance defense for Bihar’s balance districts — Bhagalpur silk & textile units, Rohtas cement plants, Purnia ethanol hubs and agro-processing MSMEs. Experts in RO Patna/Bhagalpur enforcement, Principal Employer liability and New Wage Code restructuring.",
  keywords: [
    "Bihar PF consultant",
    "Bihar ESIC consultant",
    "Bhagalpur silk PF ESIC",
    "Rohtas cement PF compliance",
    "Purnia ethanol ESIC coverage",
    "RO Patna EPFO jurisdiction",
    "Principal Employer liability Bihar",
    "Bihar MSME PF ESIC audits",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/bihar-balance-districts-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bihar EPF & ESIC Compliance | Silk, Cement & Ethanol Clusters | EPFDesk",
    description:
      "PF & ESIC specialists for Bhagalpur silk units, Rohtas cement plants, Purnia ethanol hubs and Bihar’s regional MSMEs.",
    url: "https://epfdesk.com/bihar-balance-districts-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bihar EPF ESIC Compliance",
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
      {/* ========= GEO + META ========= */}
      <Script id="bihar-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-BR">
            <meta name="geo.placename" content="Bihar">
            <meta name="geo.position" content="25.5941;85.1376">
            <meta name="ICBM" content="25.5941, 85.1376">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/bihar-balance-districts-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/bihar-balance-districts-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS / STATE SCHEMA ========= */}
      <Script
        id="schema-bihar-balance-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/bihar-balance-districts-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants Bihar",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/bihar-balance-districts-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Fraser Road",
            addressLocality: "Patna",
            addressRegion: "Bihar",
            postalCode: "800001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.5941,
            longitude: 85.1376,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Bihar",
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Bihar Industrial & MSME Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Silk & Textile Cluster PF ESIC Compliance",
                  description:
                    "PF and ESIC compliance for Bhagalpur silk and textile manufacturing units",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cement & Heavy Industry PE Liability Defence",
                  description:
                    "PF contractor audits and Principal Employer liability management for Rohtas cement belt",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Ethanol & Agro-Processing Compliance",
                  description:
                    "ESIC coverage and PF wage audits for Purnia ethanol plants and agro-processing hubs",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "68",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-bihar-balance" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WMNLTE5RKQ', {
            page_location: window.location.href,
            page_title: document.title,
            custom_map: {
              dimension1: 'state',
              dimension2: 'page_type'
            }
          });

          gtag('event', 'page_view', {
            state: 'Bihar',
            page_type: 'state_balance'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBiharBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBiharBalance} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBiharBalance} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-bihar" strategy="afterInteractive">
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
