import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJabalpurDistrict,
  sectionsJabalpurDistrict,
  faqJabalpurDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Jabalpur EPF & ESIC Compliance: Cement & Mining PE Liability, EEC-2025 Amnesty & ESIC Amnesty Scheme 2025 | EPFDesk",

  description:
    "Expert EPF & ESIC compliance defence for Jabalpur mining units, cement factories and government contractors. Navigate RO Jabalpur audits, EEC-2025 amnesty, ESIC Amnesty Scheme 2025 and Principal Employer liability in MP’s mineral belt.",

  keywords: [
    "Jabalpur PF consultant",
    "Jabalpur EPF compliance",
    "Mining contractor EPF compliance Jabalpur",
    "Cement plant ESIC compliance MP",
    "EEC 2025 amnesty Jabalpur",
    "RO Jabalpur EPF 7A defence",
    "ESIC Amnesty Scheme 2025 MP",
    "Principal Employer liability Jabalpur",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jabalpur-epf-esic-compliance",
  },

  openGraph: {
    title: "Jabalpur EPF & ESIC Compliance | Mining & Cement Sector",
    description:
      "PF & ESIC specialists for Jabalpur mining, cement and heavy industrial units under RO Jabalpur jurisdiction.",
    url: "https://epfdesk.com/jabalpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jabalpur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="jabalpur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MP">
            <meta name="geo.placename" content="Jabalpur, Madhya Pradesh">
            <meta name="geo.position" content="23.1815;79.9864">
            <meta name="ICBM" content="23.1815, 79.9864">
              <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/jabalpur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/jabalpur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-jabalpur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/jabalpur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Jabalpur Mining & Cement Units",

          alternateName:
            "Jabalpur EPF & ESIC Compliance Experts for Mining Contractors, Cement Plants & PSU Vendors",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jabalpur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Wright Town",
            addressLocality: "Jabalpur",
            addressRegion: "Madhya Pradesh",
            postalCode: "482002",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.1815,
            longitude: 79.9864,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Jabalpur District" },
            { "@type": "Place", name: "Sihora" },
            { "@type": "Place", name: "Gosalpur" },
            { "@type": "Place", name: "Richhai Industrial Area" },
            { "@type": "Place", name: "Vijay Nagar" },
            { "@type": "Place", name: "Panagar Industrial Belt" },
          ],

          description:
            "EPF & ESIC compliance services for Jabalpur mining clusters, cement plants, stone crushers and government contractors. Coverage includes RO Jabalpur inspections, EPF Section 7A proceedings, EEC-2025 voluntary enrolment, ESIC Amnesty Scheme 2025 settlements and Principal Employer liability defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "71",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJabalpurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJabalpurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJabalpurDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-jabalpur" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: el.getAttribute('href'),
                  value: 5
                });
              }
            });
          });

          document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'whatsapp_click', {
                  event_category: 'conversion',
                  event_label: window.location.pathname,
                  value: 5
                });
              }
            });
          });

          document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'form_submission', {
                  event_category: 'lead',
                  event_label: window.location.pathname,
                  value: 10
                });
              }
            });
          });
        `}
      </Script>
    </>
  );
}
