import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataChamarajanagarDist,
  sectionsChamarajanagarDist,
  faqChamarajanagar,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Chamarajanagar EPF & ESIC Compliance for Textiles, Turmeric Processing & Kollegal MSMEs | EPFDesk",

  description:
    "Expert PF & ESIC defense for Chamarajanagar textile units, turmeric processing clusters and MSMEs in Kollegal and Gundlupet. Specialists in piece-rate PF audits, agro-labour compliance and ESIC for rural health institutions.",

  keywords: [
    "Chamarajanagar PF consultant",
    "Kollegal ESIC registration",
    "Textile PF compliance Karnataka",
    "Turmeric processing PF ESIC",
    "Gundlupet MSME PF compliance",
    "EPFDesk Chamarajanagar",
  ],

  alternates: {
    canonical: "https://epfdesk.com/chamarajanagar-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Chamarajanagar EPF & ESIC Compliance | Textiles & Agro Sector | EPFDesk",
    description:
      "PF & ESIC specialists for textile units, turmeric processing, silk reeling and MSMEs in Chamarajanagar district.",
    url: "https://epfdesk.com/chamarajanagar-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chamarajanagar PF ESIC Compliance",
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
      <Script id="chamarajanagar-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Chamarajanagar">
            <meta name="geo.position" content="11.9231;76.9395">
            <meta name="ICBM" content="11.9231, 76.9395">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/chamarajanagar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/chamarajanagar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-chamarajanagar-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/chamarajanagar-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Chamarajanagar Textile & Agro MSMEs",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/chamarajanagar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "MG Road",
            addressLocality: "Chamarajanagar",
            addressRegion: "Karnataka",
            postalCode: "571313",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 11.9231,
            longitude: 76.9395,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Chamarajanagar District",
            containedIn: {
              "@type": "State",
              name: "Karnataka",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Textile, Agro & MSME Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Textile & Piece-Rate PF Compliance",
                  description:
                    "PF wage audits and compliance for piece-rate textile and silk reeling units",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Turmeric & Agro-Processing ESIC Coverage",
                  description:
                    "ESIC applicability, contractor coverage and accident liability for agro units",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Kollegal & Gundlupet MSME PF Advisory",
                  description:
                    "PF registration, inspections and Principal Employer liability defense",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "42",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-chamarajanagar" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WMNLTE5RKQ', {
            page_location: window.location.href,
            page_title: document.title
          });

          gtag('event', 'page_view', {
            district: 'Chamarajanagar',
            state: 'Karnataka',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataChamarajanagarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChamarajanagarDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqChamarajanagar} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script
        id="conversion-tracking-chamarajanagar"
        strategy="afterInteractive"
      >
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
