import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataDavanagereDist,
  sectionsDavanagereDist,
  faqDavanagere,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Davanagere EPF & ESIC Compliance 2025: Textile Mills, Agro-Processing & Education | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Davanagere textile mills, gherkin & maize processing units, and private schools/colleges. Specialists in piece-rate PF audits, ESIC enforcement and contractor liability management.",

  keywords: [
    "Davanagere PF consultant",
    "Davanagere ESIC consultant",
    "textile mill PF ESIC Davanagere",
    "gherkin processing PF compliance",
    "private college PF ESIC Davanagere",
  ],

  alternates: {
    canonical: "https://epfdesk.com/davanagere-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Davanagere EPF & ESIC Compliance | Textile, Agro-Processing & Education",
    description:
      "PF & ESIC specialists for Davanagere’s textile mills, agro-processing clusters and private educational institutions.",
    url: "https://epfdesk.com/davanagere-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Davanagere EPF ESIC Compliance",
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
      {/* ========= GEO META (DAVANAGERE) ========= */}
      <Script id="davanagere-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Davanagere">
            <meta name="geo.position" content="14.4664;75.9200">
            <meta name="ICBM" content="14.4664, 75.9200">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/davanagere-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/davanagere-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-davanagere"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/davanagere-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Davanagere District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/davanagere-epf-esic-compliance",
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
            latitude: 14.4664,
            longitude: 75.92,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Davanagere District" },
            { "@type": "City", name: "Davanagere" },
            { "@type": "Place", name: "Harihara" },
            { "@type": "Place", name: "Channagiri" },
            { "@type": "Place", name: "Textile & Ginning Clusters" },
          ],

          description:
            "EPF & ESIC compliance services for Davanagere textile mills, spinning and power-loom units, gherkin & maize processing plants, and private educational institutions. Specialists in piece-rate PF audits, ESIC enforcement and contractor labour compliance.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "41",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDavanagereDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDavanagereDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDavanagere} />
       <Script id="conversion-tracking-davanagere" strategy="afterInteractive">
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
