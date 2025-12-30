import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNorthEastRajasthan,
  sectionsNorthEastRajasthan,
  faqNorthEastRajasthan,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Rajasthan EPF & ESIC Compliance 2025: Bikaner Agro-Hub, Bharatpur Manufacturing & RO Jaipur/Ajmer Audits | EPFDesk",

  description:
    "Expert EPF & ESIC defense for Rajasthan’s northern and eastern hubs. Navigate RO Ajmer/Jaipur audits, Sri Ganganagar agro-logistics PE liability and Bharatpur foundry EEC-2025 amnesty.",

  keywords: [
    "Bikaner EPF consultant",
    "Sri Ganganagar PF compliance",
    "Bharatpur foundry ESIC",
    "Dholpur glass industry PF",
    "RO Ajmer EPF 7A defense",
    "RO Jaipur ESIC audits",
  ],

  alternates: {
    canonical: "https://epfdesk.com/north-east-rajasthan-epf-esic-compliance",
  },

  openGraph: {
    title: "Rajasthan EPF & ESIC Compliance | Agro, Foundry & Gateway Zones",
    description:
      "PF & ESIC specialists for Bikaner agro hubs, Sri Ganganagar logistics, Bharatpur foundries and Dholpur manufacturing.",
    url: "https://epfdesk.com/north-east-rajasthan-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "North & East Rajasthan EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajasthan EPF & ESIC Compliance | Agro & Manufacturing Hubs",
    description:
      "High-risk PF & ESIC compliance for Rajasthan’s agro-logistics and foundry clusters.",
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
      <Script id="ne-rajasthan-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-RJ">
            <meta name="geo.placename" content="North & East Rajasthan, India">
            <meta name="geo.position" content="27.0238;74.2179">
            <meta name="ICBM" content="27.0238, 74.2179">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/north-east-rajasthan-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/north-east-rajasthan-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-north-east-rajasthan"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/north-east-rajasthan-epf-esic-compliance#organization",

          name: "EPFDesk – Rajasthan EPF & ESIC Compliance for Agro & Manufacturing Zones",

          alternateName:
            "PF & ESIC Consultant for Bikaner, Sri Ganganagar, Bharatpur & Dholpur",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/north-east-rajasthan-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "MI Road",
            addressRegion: "Rajasthan",
            postalCode: "302001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 27.0238,
            longitude: 74.2179,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Bikaner District" },
            { "@type": "AdministrativeArea", name: "Sri Ganganagar District" },
            { "@type": "AdministrativeArea", name: "Bharatpur District" },
            { "@type": "AdministrativeArea", name: "Dholpur District" },
            { "@type": "Place", name: "Hanumangarh" },
          ],

          description:
            "EPF & ESIC compliance specialists for Rajasthan’s agro-processing, logistics, foundry and manufacturing clusters governed by RO Ajmer and RO Jaipur, with expertise in PE liability, wage audits and EEC-2025 filings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "79",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNorthEastRajasthan} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNorthEastRajasthan} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqNorthEastRajasthan} />
      </FadeInWhenVisible>
      <Script
        id="conversion-tracking-north-east-rajasthan"
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
