import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRajasthanThrustZones,
  sectionsRajasthanThrustZones,
  faqRajasthanThrustZones,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Rajasthan EPF & ESIC Compliance 2025: Jodhpur Solar Hub, Balotra Refinery & Udaipur Mineral Audits | EPFDesk",

  description:
    "Expert EPF & ESIC defense for Rajasthan’s energy and mineral hubs. Navigate RO Jodhpur/Udaipur audits, Balotra HRRL refinery PE liability and Bhilwara textile EEC-2025 amnesty.",

  alternates: {
    canonical:
      "https://epfdesk.com/rajasthan-energy-mineral-textile-epf-esic-compliance",
  },

  openGraph: {
    title: "Rajasthan EPF & ESIC Compliance | Energy, Mineral & Textile Hubs",
    description:
      "PF & ESIC specialists for Jodhpur solar parks, Balotra refinery, Udaipur mining belt and Bhilwara textiles.",
    url: "https://epfdesk.com/rajasthan-energy-mineral-textile-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Rajasthan EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajasthan EPF & ESIC Compliance | Energy & Textile Thrust Zones",
    description:
      "High-risk PF & ESIC compliance for Rajasthan’s refinery, mining and textile clusters.",
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
      <Script id="rajasthan-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-RJ">
            <meta name="geo.placename" content="Rajasthan">
            <meta name="geo.position" content="26.9124;75.7873">
            <meta name="ICBM" content="26.9124, 75.7873">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/rajasthan-energy-mineral-textile-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/rajasthan-energy-mineral-textile-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-rajasthan-thrust-zones"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/rajasthan-energy-mineral-textile-epf-esic-compliance#organization",

          name: "EPFDesk – Rajasthan EPF & ESIC Compliance for Energy, Mineral & Textile Zones",

          alternateName:
            "PF & ESIC Consultant for Jodhpur, Balotra, Udaipur & Bhilwara",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/rajasthan-energy-mineral-textile-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "RIICO Industrial Area",
            addressRegion: "Rajasthan",
            postalCode: "302022",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.9124,
            longitude: 75.7873,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Jodhpur District" },
            { "@type": "AdministrativeArea", name: "Balotra District" },
            { "@type": "AdministrativeArea", name: "Udaipur District" },
            { "@type": "AdministrativeArea", name: "Bhilwara District" },
            { "@type": "Place", name: "Pachpadra Refinery (HRRL)" },
            { "@type": "Place", name: "Phalodi Solar Park" },
            { "@type": "Place", name: "Rajsamand Mining Belt" },
          ],

          description:
            "EPF & ESIC compliance specialists for Rajasthan’s solar energy parks, HRRL refinery contractors, mining belts and textile clusters governed by RO Jodhpur and RO Udaipur, including EEC-2025 and Principal Employer liability defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "82",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRajasthanThrustZones} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRajasthanThrustZones} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqRajasthanThrustZones} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-rajasthan" strategy="afterInteractive">
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
