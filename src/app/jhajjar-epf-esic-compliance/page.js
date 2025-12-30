import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataJhajjar, sectionsJhajjar, faqJhajjar } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Jhajjar EPF & ESIC Compliance: Bahadurgarh Footwear Units, MET City & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Jhajjar district — Bahadurgarh footwear manufacturing clusters, MET City industrial units and MSMEs. RO Rohtak audits, contractor PF liability, PE exposure and New Wage Code restructuring handled.",

  keywords: [
    "Jhajjar PF consultant",
    "Jhajjar ESIC compliance",
    "Bahadurgarh footwear PF ESIC",
    "MET City Jhajjar labour compliance",
    "Footwear factory PF audits Haryana",
    "Principal Employer liability Jhajjar",
    "RO Rohtak EPFO jurisdiction",
    "NWC 2025 wage restructuring Jhajjar",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jhajjar-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="jhajjar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-HR">
            <meta name="geo.placename" content="Jhajjar, Haryana">
            <meta name="geo.position" content="28.6931;76.9310">
            <meta name="ICBM" content="28.6931, 76.9310">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/jhajjar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/jhajjar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-jhajjar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/jhajjar-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Jhajjar Industries",

          alternateName:
            "Jhajjar EPF & ESIC Compliance for Bahadurgarh Footwear & MET City Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jhajjar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Bahadurgarh Road",
            addressLocality: "Jhajjar",
            addressRegion: "Haryana",
            postalCode: "124103",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.6931,
            longitude: 76.931,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Jhajjar District" },
            { "@type": "Place", name: "Bahadurgarh" },
            { "@type": "Place", name: "MET City" },
            { "@type": "Place", name: "Badli" },
            { "@type": "Place", name: "MIE Bahadurgarh" },
          ],

          description:
            "EPF & ESIC compliance services for Jhajjar district footwear manufacturers, MET City vendors and MSMEs. Expertise includes RO Rohtak audits, contractor PF liability, Principal Employer exposure and wage restructuring under the New Wage Code.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "64",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJhajjar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJhajjar} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJhajjar} />

      {/* ========= CONVERSION TRACKING (VERBATIM) ========= */}
      <Script id="conversion-tracking-jhajjar" strategy="afterInteractive">
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
