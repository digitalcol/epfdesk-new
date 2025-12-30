import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataIndoreDistrict,
  sectionsIndoreDistrict,
  faqIndoreDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Indore EPF & ESIC Compliance: Pithampur SEZ Liability, EEC-2025 Enrolment & Pharma Export Audits | EPFDesk",

  description:
    "Specialized EPF & ESIC compliance defence for Indore MNCs, Pithampur SEZ units and pharma exporters. Navigate RO Indore audits, EEC-2025 voluntary enrolment, New Labour Code wage rules and Principal Employer liability.",

  keywords: [
    "Indore PF consultant",
    "Indore EPF compliance",
    "Pithampur SEZ EPF ESIC",
    "EEC 2025 enrolment Indore",
    "RO Indore EPF 7A defence",
    "ESIC compliance pharma units Indore",
    "Principal Employer liability Indore",
    "New Labour Code salary structure Indore",
  ],

  alternates: {
    canonical: "https://epfdesk.com/indore-epf-esic-compliance",
  },

  openGraph: {
    title: "Indore EPF & ESIC Compliance | Pithampur SEZ & Pharma Clusters",
    description:
      "PF & ESIC specialists for Indore’s Pithampur SEZ, pharma exporters, MNCs and manufacturing clusters under RO Indore.",
    url: "https://epfdesk.com/indore-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Indore EPF ESIC Compliance",
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
      <Script id="indore-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MP">
            <meta name="geo.placename" content="Indore, Madhya Pradesh">
            <meta name="geo.position" content="22.7196;75.8577">
            <meta name="ICBM" content="22.7196, 75.8577">
             <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/indore-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/indore-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-indore"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/indore-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Indore & Pithampur",

          alternateName:
            "Indore EPF & ESIC Compliance Experts for SEZ, Pharma & Manufacturing Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/indore-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Vijay Nagar",
            addressLocality: "Indore",
            addressRegion: "Madhya Pradesh",
            postalCode: "452010",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.7196,
            longitude: 75.8577,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Indore District" },
            { "@type": "Place", name: "Pithampur Industrial Area" },
            { "@type": "Place", name: "Indore SEZ" },
            { "@type": "Place", name: "Super Corridor" },
            { "@type": "Place", name: "Dewas Naka Industrial Belt" },
          ],

          description:
            "EPF & ESIC compliance services for Indore’s Pithampur SEZ, pharma exporters, auto units, IT parks and manufacturing clusters. Expertise includes RO Indore inspections, EPF 7A proceedings, EEC-2025 enrolment, New Labour Code wage restructuring and Principal Employer liability defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "74",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataIndoreDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsIndoreDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqIndoreDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-indore" strategy="afterInteractive">
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
