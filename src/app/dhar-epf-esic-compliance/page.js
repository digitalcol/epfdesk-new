import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataDharDistrict,
  sectionsDharDistrict,
  faqDharDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Dhar Pithampur EPF & ESIC Compliance 2025: Auto Hub PE Liability, EEC-2025 & ESIC Amnesty | EPFDesk",

  description:
    "Specialized EPF & ESIC compliance for Pithampur auto-component units, Dhar pharma MNCs and MSMEs. Experts in RO Indore audits, Principal Employer liability, EEC-2025 regularization and ESIC Amnesty settlements in MP’s DMIC auto hub.",

  keywords: [
    "Pithampur PF consultant",
    "Dhar EPF ESIC compliance",
    "Pithampur auto component PF audit",
    "ESIC registration Pithampur pharma",
    "Principal Employer liability Pithampur",
    "RO Indore EPF 7A defense",
    "EEC 2025 Dhar",
    "ESIC Amnesty 2025 MP",
    "DMIC auto hub compliance",
    "EPFDesk Pithampur",
  ],

  alternates: {
    canonical: "https://epfdesk.com/dhar-epf-esic-compliance",
  },

  openGraph: {
    title: "Dhar Pithampur EPF & ESIC Compliance | Auto & Pharma Hub",
    description:
      "PF & ESIC specialists for Pithampur auto, pharma, SEZ and DMIC manufacturing clusters governed by RO Indore.",
    url: "https://epfdesk.com/dhar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dhar Pithampur EPF ESIC Compliance",
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
   PAGE COMPONENT
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="dhar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MP">
            <meta name="geo.placename" content="Dhar Pithampur">
            <meta name="geo.position" content="22.6206;75.6822">
            <meta name="ICBM" content="22.6206, 75.6822">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/dhar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/dhar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-dhar-pithampur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/dhar-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Dhar & Pithampur",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/dhar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sector 1",
            addressLocality: "Pithampur",
            addressRegion: "Madhya Pradesh",
            postalCode: "454775",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.6206,
            longitude: 75.6822,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Dhar District" },
            { "@type": "Place", name: "Pithampur Industrial Area" },
            { "@type": "Place", name: "Pithampur SEZ" },
            { "@type": "Place", name: "PDMIR (DMIC)" },
            { "@type": "Place", name: "Mhow" },
            { "@type": "Place", name: "Dhar City" },
          ],

          description:
            "EPF & ESIC compliance services for Dhar district’s Pithampur auto hub, pharma MNCs, SEZ units and Tier-2/3 vendors. Expertise in Principal Employer liability, EPFO inspections, EEC-2025 enrolment and ESIC Amnesty settlements under RO Indore.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "75",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDharDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDharDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDharDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-dhar" strategy="afterInteractive">
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
