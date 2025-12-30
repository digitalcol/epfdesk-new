import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataDhanbad, sectionsDhanbad, faqDhanbad } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Dhanbad EPF & ESIC Compliance 2025: BCCL Coal Mines, Mining Contractors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Dhanbad’s BCCL coal mines, mining contractors, coal transporters and coke oven units. Experts in RO Dhanbad enforcement, Principal Employer liability, hazardous industry ESIC and New Wage Code restructuring.",

  keywords: [
    "Dhanbad PF consultant",
    "Dhanbad ESIC consultant",
    "BCCL coal mine PF ESIC",
    "Dhanbad mining contractor compliance",
    "Coal transporter PF ESIC Dhanbad",
    "Coke oven PF ESIC Dhanbad",
    "Principal Employer liability mining",
    "RO Dhanbad EPFO jurisdiction",
    "NWC 2025 wage restructuring Dhanbad",
    "EPFDesk Dhanbad",
  ],

  alternates: {
    canonical: "https://epfdesk.com/dhanbad-epf-esic-compliance",
  },

  openGraph: {
    title: "Dhanbad EPF & ESIC Compliance | Coal Mining & PSU Contractors",
    description:
      "PF & ESIC specialists for BCCL contractors, coal transporters, coke oven units and mining-linked MSMEs in Dhanbad.",
    url: "https://epfdesk.com/dhanbad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dhanbad EPF ESIC Compliance",
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
      <Script id="dhanbad-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-JH">
            <meta name="geo.placename" content="Dhanbad">
            <meta name="geo.position" content="23.7957;86.4304">
            <meta name="ICBM" content="23.7957, 86.4304">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/dhanbad-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/dhanbad-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-dhanbad"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/dhanbad-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Dhanbad District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/dhanbad-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bank More",
            addressLocality: "Dhanbad",
            addressRegion: "Jharkhand",
            postalCode: "826001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.7957,
            longitude: 86.4304,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Dhanbad District" },
            { "@type": "Place", name: "Jharia Coalfields" },
            { "@type": "Place", name: "Katras" },
            { "@type": "Place", name: "Govindpur" },
            { "@type": "Place", name: "Nirsa Industrial Belt" },
            { "@type": "Place", name: "Barwadda" },
            { "@type": "Place", name: "Mugma" },
          ],

          description:
            "EPF & ESIC compliance services for BCCL coal mines, mining contractors, coal transporters and coke oven units in Dhanbad. Specialists in Principal Employer liability, hazardous industry ESIC, EPFO inspections and New Wage Code payroll restructuring under RO Dhanbad.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "71",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDhanbad} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDhanbad} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDhanbad} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-dhanbad" strategy="afterInteractive">
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
