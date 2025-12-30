import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { faqNE, heroDataNE, sectionsNE } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Northeast India EPF & ESIC Compliance: Infrastructure Projects, Border Industries & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Northeast India — Tripura rubber and agro units, Nagaland trade hubs, Arunachal Pradesh hydropower projects, Manipur border industries and Mizoram MSMEs. Experts in SRO enforcement, NEIDS compliance, contractor audits, hazardous-process coverage and Principal Employer liability.",

  keywords: [
    "Northeast India PF consultant",
    "Northeast India ESIC consultant",
    "Tripura rubber PF ESIC",
    "Nagaland trade hub labour compliance",
    "Arunachal hydropower contractor PF ESIC",
    "Manipur border industry compliance",
    "NEIDS labour law compliance",
    "Principal Employer liability Northeast India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/northeast-india-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Northeast India EPF & ESIC Compliance | Infrastructure & Frontier States",
    description:
      "PF & ESIC specialists for Northeast India’s infrastructure projects, border industries and industrial hubs.",
    url: "https://epfdesk.com/northeast-india-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Northeast India PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Northeast India EPF & ESIC Compliance | Infrastructure & Border Industries | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Northeast India infrastructure projects, border industries and MSMEs.",
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
      <Script id="ne-india-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-NER">
            <meta name="geo.placename" content="Northeast India">
            <meta name="geo.position" content="26.2006;92.9376">
            <meta name="ICBM" content="26.2006, 92.9376">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/northeast-india-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/northeast-india-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-northeast-india"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/northeast-india-epf-esic-compliance#organization",

          name: "EPFDesk – Northeast India EPF & ESIC Compliance for Infrastructure & Border Industries",

          alternateName:
            "PF & ESIC Consultant for Tripura, Nagaland, Arunachal Pradesh, Manipur & Mizoram",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/northeast-india-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "GS Road",
            addressRegion: "Northeast India",
            postalCode: "793001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.2006,
            longitude: 92.9376,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Tripura" },
            { "@type": "AdministrativeArea", name: "Nagaland" },
            { "@type": "AdministrativeArea", name: "Arunachal Pradesh" },
            { "@type": "AdministrativeArea", name: "Manipur" },
            { "@type": "AdministrativeArea", name: "Mizoram" },
            { "@type": "Place", name: "Agartala" },
            { "@type": "Place", name: "Dimapur" },
            { "@type": "Place", name: "Itanagar" },
            { "@type": "Place", name: "Imphal" },
            { "@type": "Place", name: "Aizawl" },
            { "@type": "Place", name: "Moreh Border Trade Point" },
            { "@type": "Place", name: "Zokhawthar Border Trade Zone" },
          ],

          description:
            "EPF & ESIC compliance specialists for Northeast India covering infrastructure projects, border trade zones, agro-processing, hydropower, logistics and MSME clusters, with expertise in NEIDS compliance, contractor audits, hazardous industry coverage and Principal Employer liability.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "83",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNE} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNE} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqNE} />
      </FadeInWhenVisible>
      <Script
        id="conversion-tracking-northeast-india"
        strategy="afterInteractive"
      >
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
