import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataHowrah, sectionsHowrah, faqHowrah } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Howrah EPF & ESIC Compliance: Jute Mills, Engineering Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Howrah jute mills, engineering units, foundries and industrial MSMEs. Specialists in RO Howrah enforcement, Section 14B penalty mitigation, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Howrah PF consultant",
    "Howrah ESIC consultant",
    "Jute mill PF ESIC Howrah",
    "Engineering unit labour compliance Howrah",
    "Foundry PF ESIC Howrah",
    "Section 14B PF waiver Howrah",
    "Principal Employer liability Howrah",
    "RO Howrah EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/howrah-epf-esic-compliance",
  },

  openGraph: {
    title: "Howrah EPF & ESIC Compliance | Jute & Engineering Industrial Hub",
    description:
      "PF & ESIC specialists for Howrah jute mills, engineering units, foundries and manufacturing clusters.",
    url: "https://epfdesk.com/howrah-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Howrah PF ESIC Compliance",
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
      <Script id="howrah-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-WB">
            <meta name="geo.placename" content="Howrah District, West Bengal">
            <meta name="geo.position" content="22.5958;88.2636">
            <meta name="ICBM" content="22.5958, 88.2636">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/howrah-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/howrah-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-howrah"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/howrah-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Howrah Jute & Engineering Industries",

          alternateName:
            "Howrah PF ESIC Compliance Experts for Jute Mills, Foundries & MSMEs",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/howrah-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Dobson Road",
            addressLocality: "Howrah",
            addressRegion: "West Bengal",
            postalCode: "711101",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.5958,
            longitude: 88.2636,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Howrah District" },
            { "@type": "Place", name: "Howrah Industrial Belt" },
            { "@type": "Place", name: "Liluah" },
            { "@type": "Place", name: "Belur" },
            { "@type": "Place", name: "Salkia" },
            { "@type": "Place", name: "Ankurhati" },
          ],

          description:
            "EPF & ESIC compliance consultancy for Howrah jute mills, engineering units, foundries, logistics operators and industrial MSMEs. Expertise in RO Howrah inspections, Section 14B damages mitigation, contractor PF liability and wage restructuring under the New Wage Code.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "72",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHowrah} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHowrah} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqHowrah} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-howrah" strategy="afterInteractive">
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
