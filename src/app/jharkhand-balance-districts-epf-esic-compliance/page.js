import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJharkhandBalance,
  sectionsJharkhandBalance,
  faqJharkhandBalance,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Jharkhand EPF & ESIC Compliance: Mining Belts, Sponge Iron Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Jharkhand’s balance districts — Ramgarh sponge iron units, Hazaribagh mining vendors, Deoghar MSMEs and logistics corridors. Coverage includes RO Dhanbad/Ranchi enforcement, mining Principal Employer liability, contractor audits and New Wage Code restructuring.",

  keywords: [
    "Jharkhand PF consultant",
    "Jharkhand ESIC compliance",
    "Ramgarh sponge iron PF ESIC",
    "Hazaribagh mining contractor compliance",
    "Deoghar MSME PF audits",
    "Mining Principal Employer liability Jharkhand",
    "RO Dhanbad EPFO jurisdiction",
    "RO Ranchi EPFO jurisdiction",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="jharkhand-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-JH">
            <meta name="geo.placename" content="Jharkhand">
            <meta name="geo.position" content="23.6102;85.2799">
            <meta name="ICBM" content="23.6102, 85.2799">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-jharkhand-balance"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Jharkhand Balance Districts",

          alternateName:
            "Jharkhand EPF & ESIC Compliance for Mining, Sponge Iron & MSMEs",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jharkhand-balance-districts-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ STATE-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Main Road",
            addressLocality: "Ranchi",
            addressRegion: "Jharkhand",
            postalCode: "834001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.6102,
            longitude: 85.2799,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Ramgarh District" },
            { "@type": "AdministrativeArea", name: "Hazaribagh District" },
            { "@type": "AdministrativeArea", name: "Giridih District" },
            { "@type": "AdministrativeArea", name: "Koderma District" },
            { "@type": "AdministrativeArea", name: "Deoghar District" },
            { "@type": "AdministrativeArea", name: "Dumka District" },
            { "@type": "AdministrativeArea", name: "Sahibganj District" },
            { "@type": "AdministrativeArea", name: "Palamu District" },
            { "@type": "AdministrativeArea", name: "Garhwa District" },
            { "@type": "AdministrativeArea", name: "Latehar District" },
          ],

          description:
            "EPF & ESIC compliance services for Jharkhand’s balance districts covering sponge iron units, mining contractors, logistics hubs and MSMEs. Expertise includes mining Principal Employer liability, contractor audits, PF wage restructuring and enforcement defence under RO Dhanbad and RO Ranchi.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "81",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJharkhandBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJharkhandBalance} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJharkhandBalance} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script
        id="conversion-tracking-jharkhand-balance"
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
