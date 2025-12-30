import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKanpurDist,
  sectionsKanpurDist,
  faqKanpur,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kanpur EPF & ESIC Compliance: Leather Tanning Hazard, Ordnance PE Liability & Textile Allowance Audits | EPFDesk",

  description:
    "Critical EPF & ESIC compliance defence for Kanpur leather tanneries, textile mills and defence/ordnance contractors. Coverage includes RO Kanpur enforcement, catastrophic ESIC hazard exposure in Jajmau, CLRA Principal Employer liability and wage allowance audits.",

  keywords: [
    "Kanpur PF consultant",
    "Kanpur ESIC registration",
    "Leather tanning ESIC hazard Kanpur",
    "Ordnance factory contractor PF compliance",
    "Textile allowance PF audit Kanpur",
    "RO Kanpur EPFO consultant",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kanpur-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="kanpur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Kanpur Nagar, Uttar Pradesh">
            <meta name="geo.position" content="26.4499;80.3319">
            <meta name="ICBM" content="26.4499, 80.3319">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kanpur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kanpur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kanpur-nagar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/kanpur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Kanpur Leather, Defence & Textile Industries",

          alternateName:
            "Kanpur EPF & ESIC Compliance for Leather Tanneries, Ordnance Units & Textile Mills",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kanpur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Kanpur Nagar",
            addressRegion: "Uttar Pradesh",
            postalCode: "208001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.4499,
            longitude: 80.3319,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Kanpur Nagar District" },
            { "@type": "Place", name: "Jajmau Leather Tannery Cluster" },
            { "@type": "Place", name: "Panki Industrial Area" },
            { "@type": "Place", name: "Ordnance Factory Kanpur Zone" },
            { "@type": "Place", name: "Kanpur Textile Belt" },
          ],

          description:
            "EPF & ESIC compliance services for Kanpur leather tanning units, textile mills and defence/ordnance contractors. Expertise includes catastrophic ESIC hazard risk mitigation, Principal Employer liability under CLRA, wage allowance audits and RO Kanpur proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "92",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKanpurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKanpurDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKanpur} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-kanpur" strategy="afterInteractive">
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
