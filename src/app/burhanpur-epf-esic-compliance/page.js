import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBurhanpurDistrict,
  sectionsBurhanpurDistrict,
  faqBurhanpurDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Burhanpur EPF & ESIC Compliance: Textile Power Loom PF, Migrant Labor PE Liability & RO Indore Audits 2025 | EPFDesk",

  description:
    "Expert EPF & ESIC defense for Burhanpur textile mills, power looms and agro-processors. Navigate RO Indore audits, EEC-2025 amnesty and migrant labour statutory compliance in MP’s textile heartland.",

  keywords: [
    "Burhanpur PF consultant",
    "EPF ESIC compliance Burhanpur",
    "Power loom PF audit Burhanpur",
    "ESIC registration textile mills MP",
    "Migrant labour PF ESI Burhanpur",
    "RO Indore EPF 7A defense",
  ],

  alternates: {
    canonical: "https://epfdesk.com/burhanpur-epf-esic-compliance",
  },

  openGraph: {
    title: "Burhanpur EPF & ESIC Compliance | Textile & Power Loom Hub",
    description:
      "PF & ESIC specialists for Burhanpur textile mills, power looms and sugar units governed by RO Indore.",
    url: "https://epfdesk.com/burhanpur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Burhanpur EPF ESIC Compliance",
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
      <Script id="burhanpur-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MP">
            <meta name="geo.placename" content="Burhanpur">
            <meta name="geo.position" content="21.3145;76.2180">
            <meta name="ICBM" content="21.3145, 76.2180">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/burhanpur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/burhanpur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-burhanpur-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/burhanpur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Burhanpur Textile & Power Loom Units",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/burhanpur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Shahpur Road",
            addressLocality: "Burhanpur",
            addressRegion: "Madhya Pradesh",
            postalCode: "450331",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.3145,
            longitude: 76.218,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Burhanpur District",
            containedIn: {
              "@type": "State",
              name: "Madhya Pradesh",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Textile & Migrant Labour Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Power Loom & Textile PF Compliance",
                  description:
                    "Seasonal PF audits, wage structuring and contractor liability defense for power looms",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Migrant Labour PF & ESIC Coverage",
                  description:
                    "Inter-state migrant labour ESIC registration, accident liability and PE risk mitigation",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "RO Indore Audit & 7A Defense",
                  description:
                    "Representation and compliance strategy for RO Indore inspections and EPF 7A proceedings",
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
      <Script id="ga-burhanpur" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WMNLTE5RKQ', {
            page_location: window.location.href,
            page_title: document.title
          });

          gtag('event', 'page_view', {
            district: 'Burhanpur',
            state: 'Madhya Pradesh',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBurhanpurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBurhanpurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBurhanpurDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-burhanpur" strategy="afterInteractive">
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
