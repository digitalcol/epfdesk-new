import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataBidarDist, sectionsBidarDist, faqBidar } from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Bidar EPF & ESIC Compliance for Sugar Mills, Garments, Pulses & Kalyana Karnataka Industries | EPFDesk",
  description:
    "Expert PF & ESIC compliance for Bidar sugar factories, garment MSMEs and agro-processing units. Seasonal labour PF, ESIC garment enforcement and RO Kalaburagi audit defence.",
  keywords: [
    "Bidar PF consultant",
    "Bidar ESIC consultant",
    "Sugar mill PF Karnataka",
    "Garment factory PF ESIC Bidar",
    "Dal mill PF inspection",
    "Kalyana Karnataka labour compliance",
    "EPFDesk Bidar",
  ],
  alternates: {
    canonical: "https://epfdesk.com/bidar-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bidar EPF & ESIC Compliance | Sugar Mills, Garments & Agro-Processing | EPFDesk",
    description:
      "PF & ESIC specialists for Bidar’s sugar factories, garment MSMEs and agro-processing sector.",
    url: "https://epfdesk.com/bidar-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bidar EPF ESIC Compliance",
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
      <Script id="bidar-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Bidar">
            <meta name="geo.position" content="17.9149;77.5040">
            <meta name="ICBM" content="17.9149, 77.5040">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/bidar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/bidar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-bidar-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/bidar-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants Bidar",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/bidar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Udgir Road",
            addressLocality: "Bidar",
            addressRegion: "Karnataka",
            postalCode: "585401",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.9149,
            longitude: 77.504,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Bidar District",
            containedIn: {
              "@type": "State",
              name: "Karnataka",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Sugar, Garment & Agro-Processing Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Sugar Mill PF & Seasonal Labour Compliance",
                  description:
                    "PF liability management for crushing-season labour, contractors and mukadam systems",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Garment Factory ESIC & PF Audits",
                  description:
                    "Strict ESIC coverage, attendance mapping and PF wage audits for garment MSMEs",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Agro-Processing & Dal Mill Compliance",
                  description:
                    "PF, ESIC and Minimum Wages compliance for pulses, oil mills and agro units",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "37",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-bidar" strategy="afterInteractive">
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
            district: 'Bidar',
            state: 'Karnataka',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBidarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBidarDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBidar} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-bidar" strategy="afterInteractive">
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
