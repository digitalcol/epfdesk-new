import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataJPUB, sectionsJPUB, faqJPUB } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Rajasthan EPF & ESIC Compliance 2025: Jodhpur Solar, Udaipur Mining & Bhilwara Textile Audits | EPFDesk",

  description:
    "Expert EPF & ESIC compliance defence for Rajasthan’s mining, textile and solar hubs. Coverage includes RO Jodhpur/Udaipur audits, JPMIA Principal Employer liability and Bhilwara textile EEC-2025 exposure.",

  keywords: [
    "Jodhpur EPF consultant",
    "Pali solar PF compliance",
    "Bhilwara textile ESIC",
    "Udaipur mining EPF audit",
    "RO Jodhpur EPF 7A defense",
    "RO Udaipur ESIC compliance",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/jodhpur-pali-udaipur-bhilwara-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="rajasthan-jpub-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-RJ">
            <meta name="geo.placename" content="Jodhpur, Pali, Udaipur, Bhilwara, Rajasthan">
            <meta name="geo.position" content="26.2389;73.0243">
            <meta name="ICBM" content="26.2389, 73.0243">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/jodhpur-pali-udaipur-bhilwara-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/jodhpur-pali-udaipur-bhilwara-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-rajasthan-jpub"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/jodhpur-pali-udaipur-bhilwara-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Rajasthan Industrial Hubs",

          alternateName:
            "Rajasthan EPF & ESIC Compliance for Jodhpur Solar, Udaipur Mining & Bhilwara Textiles",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jodhpur-pali-udaipur-bhilwara-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ CLUSTER-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "MI Road",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            postalCode: "302001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.2389,
            longitude: 73.0243,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Jodhpur District" },
            { "@type": "AdministrativeArea", name: "Pali District" },
            { "@type": "AdministrativeArea", name: "Udaipur District" },
            { "@type": "AdministrativeArea", name: "Bhilwara District" },
            { "@type": "Place", name: "JPMIA – Jodhpur Pali Industrial Area" },
            { "@type": "Place", name: "Phalodi Solar Belt" },
            { "@type": "Place", name: "Rajsamand Mining Belt" },
          ],

          description:
            "EPF & ESIC compliance services for Rajasthan’s solar parks, handicraft exporters, marble & mining belts and textile clusters. Expertise includes Principal Employer liability, contractor audits, EEC-2025 disclosure strategy and RO Jodhpur/Udaipur enforcement defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "85",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJPUB} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJPUB} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJPUB} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-jpub" strategy="afterInteractive">
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
