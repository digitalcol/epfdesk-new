import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataLudhiana, sectionsLudhiana, faqLudhiana } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Ludhiana EPF & ESIC Compliance: Hosiery Exporters, Cycle Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Ludhiana hosiery exporters, cycle part manufacturers, dyeing houses and engineering MSMEs. Experts in RO Ludhiana enforcement, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Ludhiana PF consultant",
    "Ludhiana ESIC consultant",
    "Hosiery exporter PF ESIC Ludhiana",
    "Cycle industry labour compliance Ludhiana",
    "Textile dyeing unit PF audits",
    "Engineering MSME PF ESIC Ludhiana",
    "Principal Employer liability Ludhiana",
    "RO Ludhiana EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/ludhiana-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title: "Ludhiana EPF & ESIC Compliance | Textile & Engineering Hub",
    description:
      "PF & ESIC specialists for Ludhiana hosiery exporters, cycle units, dyeing houses and engineering MSMEs.",
    url: "https://epfdesk.com/ludhiana-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ludhiana EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Ludhiana EPF & ESIC Compliance | Hosiery & Cycle Industry",
    description:
      "Expert PF & ESIC compliance for Ludhiana hosiery exporters, cycle manufacturers and engineering units.",
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
      <Script id="ludhiana-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-PB">
            <meta name="geo.placename" content="Ludhiana, Punjab, India">
            <meta name="geo.position" content="30.9010;75.8573">
            <meta name="ICBM" content="30.9010, 75.8573">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/ludhiana-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/ludhiana-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-ludhiana"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/ludhiana-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Ludhiana District",

          alternateName:
            "Ludhiana EPF & ESIC Compliance for Hosiery, Cycle & Engineering Industries",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/ludhiana-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Ferozepur Road",
            addressLocality: "Ludhiana",
            addressRegion: "Punjab",
            postalCode: "141001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 30.901,
            longitude: 75.8573,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Ludhiana District" },
            { "@type": "Place", name: "Focal Point Industrial Area" },
            { "@type": "Place", name: "Gill Road Industrial Belt" },
            { "@type": "Place", name: "Miller Ganj" },
            { "@type": "Place", name: "Rahon Road" },
            { "@type": "Place", name: "Bahadur Ke Road" },
            { "@type": "Place", name: "Dhandari Kalan" },
          ],

          description:
            "EPF & ESIC compliance services for Ludhiana’s hosiery exporters, cycle part manufacturers, textile dyeing houses and engineering MSMEs. Expertise includes contractor PF audits, allowance restructuring under the New Wage Code and Principal Employer liability defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "88",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataLudhiana} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsLudhiana} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqLudhiana} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-ludhiana" strategy="afterInteractive">
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
