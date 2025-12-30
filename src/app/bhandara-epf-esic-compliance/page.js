import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBhandaraDistrict,
  sectionsBhandaraDistrict,
  faqBhandaraDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Bhandara EPF & ESIC Compliance for Rice Mills & Tendu Leaf Processing | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Bhandara Rice Mills, Tendu Leaf processing units and seasonal agro-workers. Minimum Wages Act, piece-rate audits and RO Nagpur defence.",
  keywords: [
    "Bhandara EPF consultant",
    "Rice mill PF compliance Bhandara",
    "Tendu leaf contractor EPF ESIC",
    "Minimum wages rice mill Maharashtra",
    "RO Nagpur EPFO defence",
  ],
  alternates: {
    canonical: "https://epfdesk.com/bhandara-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bhandara EPF & ESIC Compliance | Rice Mills & Seasonal Workers | EPFDesk",
    description:
      "Statutory EPF & ESIC compliance for Bhandara rice mills, agro-processing and seasonal labour.",
    url: "https://epfdesk.com/bhandara-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bhandara EPF ESIC Compliance",
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
      <Script id="bhandara-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Bhandara">
            <meta name="geo.position" content="21.1702;79.6482">
            <meta name="ICBM" content="21.1702, 79.6482">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/bhandara-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/bhandara-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-bhandara-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/bhandara-epf-esic-compliance#organization",

          name: "EPFDesk - EPF & ESIC Consultants Bhandara",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/bhandara-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Bhandara",
            addressRegion: "Maharashtra",
            postalCode: "441904",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.1702,
            longitude: 79.6482,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Bhandara District",
            containedIn: {
              "@type": "State",
              name: "Maharashtra",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Agro & Rice Mill Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Rice Mill EPF & ESIC Compliance",
                  description:
                    "PF, ESIC and Minimum Wages compliance for rice mills including piece-rate and seasonal labour audits",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Tendu Leaf & Agro-Processing Labour Compliance",
                  description:
                    "PF & ESIC compliance for tendu leaf processing units and seasonal agro-workers",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "RO Nagpur EPFO Audit & 7A Defence",
                  description:
                    "Inspection handling, contractor liability management and Section 7A proceedings",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "41",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-bhandara" strategy="afterInteractive">
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
            district: 'Bhandara',
            state: 'Maharashtra',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBhandaraDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBhandaraDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBhandaraDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-bhandara" strategy="afterInteractive">
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
