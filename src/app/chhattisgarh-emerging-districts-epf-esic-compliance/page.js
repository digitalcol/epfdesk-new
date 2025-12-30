import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataCGEmergingDistricts,
  sectionsCGEmergingDistricts,
  faqCGEmergingDistricts,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Chhattisgarh EPF & ESIC Compliance 2025: Dhamtari, Mahasamund & Emerging Districts | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Chhattisgarh’s emerging districts including Dhamtari, Mahasamund, Kanker and Gariaband. Specialists in RO Raipur audits, EEC-2025 filings and MSME statutory risk mitigation.",

  keywords: [
    "Chhattisgarh PF consultant",
    "Dhamtari rice mill PF compliance",
    "Mahasamund agro industry ESIC",
    "RO Raipur EPF audit support",
    "EEC 2025 Chhattisgarh filing",
    "Labour law consultant Raipur",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/chhattisgarh-emerging-districts-epf-esic-compliance",
  },

  openGraph: {
    title: "Chhattisgarh EPF & ESIC Compliance | Emerging Districts | EPFDesk",
    description:
      "PF & ESIC specialists for food processing, agri-logistics and emerging industrial districts in Chhattisgarh.",
    url: "https://epfdesk.com/chhattisgarh-emerging-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chhattisgarh EPF ESIC Compliance",
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
      <Script id="cg-emerging-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-CG">
            <meta name="geo.placename" content="Raipur">
            <meta name="geo.position" content="21.2514;81.6296">
            <meta name="ICBM" content="21.2514, 81.6296">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/chhattisgarh-emerging-districts-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/chhattisgarh-emerging-districts-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-chhattisgarh-emerging"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/chhattisgarh-emerging-districts-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Emerging Districts of Chhattisgarh",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/chhattisgarh-emerging-districts-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Pandri",
            addressLocality: "Raipur",
            addressRegion: "Chhattisgarh",
            postalCode: "492001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.2514,
            longitude: 81.6296,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Dhamtari District" },
            { "@type": "AdministrativeArea", name: "Mahasamund District" },
            { "@type": "AdministrativeArea", name: "Kanker District" },
            { "@type": "AdministrativeArea", name: "Gariaband District" },
          ],

          description:
            "EPF & ESIC compliance services for food processing units, agro-logistics hubs, MSMEs and emerging industrial districts governed by RO Raipur.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "69",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataCGEmergingDistricts} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsCGEmergingDistricts} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqCGEmergingDistricts} />
      <Script
        id="conversion-tracking-chhattisgarh-emerging"
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
