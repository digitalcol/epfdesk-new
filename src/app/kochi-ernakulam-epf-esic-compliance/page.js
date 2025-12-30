import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { faqKochi, heroDataKochi, sectionsKochi } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kochi EPF & ESIC Compliance: IT Parks, Cochin Port Contractors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Kochi (Ernakulam) — InfoPark & SmartCity IT companies, KINFRA industrial units, Cochin Port contractors and maritime service providers. Experts in RO Kochi enforcement, Principal Employer liability, New Wage Code restructuring and Kerala labour-law reconciliation.",

  keywords: [
    "Kochi PF consultant",
    "Ernakulam ESIC consultant",
    "InfoPark PF ESIC compliance",
    "SmartCity Kochi labour laws",
    "Cochin Port contractor PF ESIC",
    "KINFRA industrial unit compliance Kerala",
    "Principal Employer liability Kochi",
    "RO Kochi EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kochi-ernakulam-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="ernakulam-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KL">
            <meta name="geo.placename" content="Kochi, Ernakulam District, Kerala">
            <meta name="geo.position" content="9.9312;76.2673">
            <meta name="ICBM" content="9.9312, 76.2673">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kochi-ernakulam-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kochi-ernakulam-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-ernakulam"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/kochi-ernakulam-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Kochi & Ernakulam District",

          alternateName:
            "Kochi EPF & ESIC Compliance for IT Parks, Ports & Industrial Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kochi-ernakulam-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "MG Road",
            postalCode: "682016",
            addressLocality: "Kochi",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 9.9312,
            longitude: 76.2673,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Ernakulam District" },
            { "@type": "Place", name: "Kochi" },
            { "@type": "Place", name: "Kakkanad" },
            { "@type": "Place", name: "InfoPark Kochi" },
            { "@type": "Place", name: "SmartCity Kochi" },
            { "@type": "Place", name: "Cochin Port" },
            { "@type": "Place", name: "KINFRA Industrial Areas" },
            { "@type": "Place", name: "Kalamassery" },
            { "@type": "Place", name: "Eloor–Edayar Industrial Belt" },
          ],

          description:
            "EPF & ESIC compliance services for Kochi IT parks, SEZ units, Cochin Port contractors, logistics operators and KINFRA industrial establishments. Specialised expertise in RO Kochi audits, Principal Employer liability management, contractor compliance and New Wage Code payroll restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "92",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKochi} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKochi} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKochi} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-ernakulam" strategy="afterInteractive">
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

          document
            .querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]')
            .forEach(el => {
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
