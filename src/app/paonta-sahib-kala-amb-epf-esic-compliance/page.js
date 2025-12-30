import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { faqSirmaur, heroDataSirmaur, sectionsSirmaur } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Paonta Sahib & Kala Amb EPF & ESIC Compliance: Pharma, Chemical Plants & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Sirmaur industrial belt — Paonta Sahib pharma units, Kala Amb steel and chemical plants, and MSMEs. Experts in RO Shimla & SRO Baddi enforcement, hazardous-process ESIC coverage, contractor audits and Principal Employer liability.",

  alternates: {
    canonical: "https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Paonta Sahib & Kala Amb EPF & ESIC Compliance | Sirmaur Industrial Belt",
    description:
      "PF & ESIC specialists for Paonta Sahib pharma units, Kala Amb chemical plants and Sirmaur MSMEs.",
    url: "https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Paonta Sahib Kala Amb PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Paonta Sahib & Kala Amb EPF & ESIC Compliance | Pharma & Chemical Hub | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Paonta Sahib pharma units and Kala Amb chemical plants.",
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
      <Script id="sirmaur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-HP">
            <meta name="geo.placename" content="Paonta Sahib, Kala Amb">
            <meta name="geo.position" content="30.4367;77.6246">
            <meta name="ICBM" content="30.4367, 77.6246">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-sirmaur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance#organization",

          name: "EPFDesk – Paonta Sahib & Kala Amb EPF & ESIC Compliance for Pharma & Chemical Industries",

          alternateName:
            "PF & ESIC Consultant for Sirmaur Industrial Belt (Paonta Sahib & Kala Amb)",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/paonta-sahib-kala-amb-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Kala Amb Industrial Area",
            addressRegion: "Himachal Pradesh",
            postalCode: "173030",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 30.4367,
            longitude: 77.6246,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Sirmaur District" },
            { "@type": "Place", name: "Paonta Sahib" },
            { "@type": "Place", name: "Kala Amb" },
            { "@type": "Place", name: "Nahan" },
            { "@type": "Place", name: "Moginand" },
          ],

          description:
            "EPF & ESIC compliance specialists for Paonta Sahib pharma units, Kala Amb steel and chemical plants, hazardous-process factories and contractor-driven MSMEs, with expertise in RO Shimla & SRO Baddi audits, Principal Employer liability and Labour Code readiness.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "74",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataSirmaur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSirmaur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqSirmaur} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-sirmaur" strategy="afterInteractive">
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
