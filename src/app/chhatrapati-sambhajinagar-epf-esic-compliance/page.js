import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataSambhajinagarDistrict,
  sectionsSambhajinagarDistrict,
  faqSambhajinagarDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Aurangabad (Chhatrapati Sambhajinagar) EPF & ESIC Compliance for Waluj Auto MIDC & DMIC | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance for Waluj Auto MIDC, Shendra–Bidkin DMIC factories, engineering MSMEs and tourism sector employers. Experts in Principal Employer liability, EPFO 7A defence and hazardous industry ESIC.",

  keywords: [
    "Aurangabad PF consultant",
    "Chhatrapati Sambhajinagar ESIC consultant",
    "Waluj MIDC PF compliance",
    "Shendra Bidkin DMIC PF ESIC",
    "Auto MSME EPFO 7A Aurangabad",
    "Hotel ESIC compliance Sambhajinagar",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/chhatrapati-sambhajinagar-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Aurangabad EPF & ESIC Compliance | Waluj Auto & DMIC Industrial Corridor | EPFDesk",
    description:
      "PF & ESIC specialists for Waluj Auto MIDC, Shendra–Bidkin DMIC factories and Chhatrapati Sambhajinagar manufacturing hubs.",
    url:
      "https://epfdesk.com/chhatrapati-sambhajinagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aurangabad EPF ESIC Compliance",
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
      <Script id="sambhajinagar-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Chhatrapati Sambhajinagar">
            <meta name="geo.position" content="19.8762;75.3433">
            <meta name="ICBM" content="19.8762, 75.3433">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/chhatrapati-sambhajinagar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/chhatrapati-sambhajinagar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-sambhajinagar-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/chhatrapati-sambhajinagar-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Waluj Auto MIDC & DMIC Corridor",
          image: "https://epfdesk.com/images/logo.jpg",
          url:
            "https://epfdesk.com/chhatrapati-sambhajinagar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Jalna Road",
            addressLocality: "Chhatrapati Sambhajinagar",
            addressRegion: "Maharashtra",
            postalCode: "431001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.8762,
            longitude: 75.3433,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Chhatrapati Sambhajinagar District",
            containedIn: {
              "@type": "State",
              name: "Maharashtra",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Auto, Manufacturing & DMIC Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Auto & Engineering PF ESIC Compliance",
                  description:
                    "EPFO 7A defence, contractor audits and PE liability for Waluj & Chikalthana MIDC units",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "DMIC Factory & Contractor Compliance",
                  description:
                    "PF ESIC coverage, CLRA audits and wage restructuring for Shendra–Bidkin DMIC projects",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Hospitality & Tourism ESIC Compliance",
                  description:
                    "Mandatory ESIC coverage and inspection defence for hotels and service establishments",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "86",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSambhajinagarDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSambhajinagarDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqSambhajinagarDistrict} />
       <Script id="conversion-tracking-chhatrapati-sambhajinagar" strategy="afterInteractive">
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
