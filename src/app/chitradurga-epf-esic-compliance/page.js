import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataChitradurgaDist,
  sectionsChitradurgaDist,
  faqChitradurga,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Chitradurga EPF & ESIC Compliance 2025: Solar & Wind Projects, DRDO Contractors & Agro Units | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Chitradurga solar and wind EPC contractors, DRDO ATR vendors, agro-processing MSMEs and CLRA workforce. Specialists in PF audits, BOCW cess and ESIC coverage.",

  keywords: [
    "Chitradurga PF consultant",
    "Solar project ESIC compliance",
    "Wind farm contractor PF",
    "DRDO ATR PF ESIC",
    "BOCW compliance Karnataka",
  ],

  alternates: {
    canonical: "https://epfdesk.com/chitradurga-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Chitradurga EPF & ESIC Compliance | Renewable Energy & DRDO Contractors",
    description:
      "PF & ESIC specialists for solar & wind EPC contractors, DRDO ATR ancillaries and agro-processing units in Chitradurga district.",
    url: "https://epfdesk.com/chitradurga-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chitradurga PF ESIC Compliance",
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
      {/* ========= GEO META (CHITRADURGA) ========= */}
      <Script id="chitradurga-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Chitradurga">
            <meta name="geo.position" content="14.2251;76.3980">
            <meta name="ICBM" content="14.2251, 76.3980">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/chitradurga-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/chitradurga-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-chitradurga"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/chitradurga-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Chitradurga District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/chitradurga-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Church Street",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            postalCode: "560001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 14.2251,
            longitude: 76.398,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Chitradurga District" },
            { "@type": "City", name: "Chitradurga" },
            { "@type": "City", name: "Challakere" },
            { "@type": "City", name: "Hiriyur" },
            { "@type": "City", name: "Hosadurga" },
          ],

          description:
            "EPF & ESIC compliance services for solar and wind EPC contractors, DRDO ATR vendors, agro-processing units and engineering MSMEs across Chitradurga district.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "57",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataChitradurgaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChitradurgaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqChitradurga} />
       <Script id="conversion-tracking-chitradurga" strategy="afterInteractive">
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
