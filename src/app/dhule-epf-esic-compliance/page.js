import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataDhuleDistrict,
  sectionsDhuleDistrict,
  faqDhuleDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Dhule EPF & ESIC Compliance 2025: Cotton Ginning, Textile Powerlooms, MIDC MSMEs & PE Liability | EPFDesk",

  description:
    "Expert EPF & ESIC compliance defence for Dhule cotton ginning units, textile powerlooms, piece-rate wage PF exposure, seasonal and migrant labour compliance, and MIDC contractor Principal Employer liability. SRO Jalgaon jurisdiction specialists.",

  keywords: [
    "Dhule PF consultant",
    "Dhule ESIC consultant",
    "Cotton ginning PF compliance Dhule",
    "Textile powerloom ESIC Dhule",
    "Piece rate PF audit Dhule",
    "Seasonal labour PF liability Dhule",
    "MIDC contractor PF ESIC Dhule",
    "Principal Employer liability Dhule",
    "EPFO SRO Jalgaon 7A defence",
    "EPFDesk Dhule",
  ],

  alternates: {
    canonical: "https://epfdesk.com/dhule-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Dhule EPF & ESIC Compliance | Cotton Ginning & Textile Powerloom Hub",
    description:
      "PF & ESIC specialists for Dhule textile powerlooms, cotton ginning units, MIDC MSMEs and seasonal labour-intensive industries.",
    url: "https://epfdesk.com/dhule-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dhule EPF ESIC Compliance",
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
      <Script id="dhule-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Dhule">
            <meta name="geo.position" content="20.9042;74.7749">
            <meta name="ICBM" content="20.9042, 74.7749">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/dhule-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/dhule-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-dhule"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/dhule-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Dhule District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/dhule-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Agra Road",
            addressLocality: "Dhule",
            addressRegion: "Maharashtra",
            postalCode: "424001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 20.9042,
            longitude: 74.7749,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Dhule District" },
            { "@type": "Place", name: "Dhule MIDC" },
            { "@type": "Place", name: "Shirpur MIDC" },
            { "@type": "Place", name: "Sakri" },
            { "@type": "Place", name: "Sindkheda" },
          ],

          description:
            "EPF & ESIC compliance services for Dhule cotton ginning factories, textile powerloom units, MIDC manufacturing MSMEs and seasonal labour-intensive industries. Expertise includes piece-rate wage PF audits, Principal Employer liability for contractors, EPFO Section 7A defence and compliance under SRO Jalgaon jurisdiction.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "41",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDhuleDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDhuleDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDhuleDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-dhule" strategy="afterInteractive">
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
