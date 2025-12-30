import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJalandhar,
  sectionsJalandhar,
  faqJalandhar,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Jalandhar EPF & ESIC Compliance: Sports Goods Exporters, Hand Tools & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Jalandhar sports goods exporters, hand tool manufacturers, leather complex units and engineering MSMEs. Navigate RO Jalandhar audits, Principal Employer liability, export-unit wage scrutiny and New Wage Code restructuring.",

  keywords: [
    "Jalandhar PF consultant",
    "Jalandhar ESIC consultant",
    "Sports goods PF ESIC Jalandhar",
    "Hand tool manufacturer labour compliance",
    "Leather complex PF ESIC Jalandhar",
    "Export unit PF audits Jalandhar",
    "Principal Employer liability Jalandhar",
    "RO Jalandhar EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jalandhar-epf-esic-compliance",
  },

  openGraph: {
    title: "Jalandhar EPF & ESIC Compliance | Sports Goods & Engineering Hub",
    description:
      "PF & ESIC specialists for Jalandhar sports goods exporters, hand tool units, leather manufacturers and engineering MSMEs.",
    url: "https://epfdesk.com/jalandhar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jalandhar PF ESIC Compliance",
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
      <Script id="jalandhar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-PB">
            <meta name="geo.placename" content="Jalandhar, Punjab">
            <meta name="geo.position" content="31.3260;75.5762">
            <meta name="ICBM" content="31.3260, 75.5762">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/jalandhar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/jalandhar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-jalandhar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/jalandhar-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Jalandhar Industries",

          alternateName:
            "Jalandhar EPF & ESIC Compliance Experts for Sports Goods, Hand Tools & Export Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jalandhar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-CORRECT ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Model Town",
            addressLocality: "Jalandhar",
            addressRegion: "Punjab",
            postalCode: "144003",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 31.326,
            longitude: 75.5762,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Jalandhar District" },
            { "@type": "Place", name: "Sports Goods Complex" },
            { "@type": "Place", name: "Leather Complex Jalandhar" },
            { "@type": "Place", name: "Focal Point Jalandhar" },
            { "@type": "Place", name: "Gadaipur Industrial Area" },
            { "@type": "Place", name: "Dada Colony" },
          ],

          description:
            "EPF & ESIC compliance services for Jalandhar sports goods exporters, hand tool manufacturers, leather complex units and engineering MSMEs. Coverage includes RO Jalandhar inspections, EPF Section 7A proceedings, export-unit wage audits, Principal Employer liability and New Wage Code payroll restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "78",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJalandhar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJalandhar} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJalandhar} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-jalandhar" strategy="afterInteractive">
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
