import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNagpurDistrict,
  sectionsNagpurDistrict,
  faqNagpurDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Nagpur EPF & ESIC Compliance for MIHAN SEZ, Butibori MIDC & Vidarbha Industrial Hubs | EPFDesk",

  description:
    "Expert EPF & ESIC defence for MIHAN SEZ IT and aviation contractors, PF liability for Butibori & Hingna MIDC factories, and mandatory ESIC for hazardous industries. Specialists in SEZ compliance and Principal Employer liability across Vidarbha.",

  keywords: [
    "Nagpur PF consultant",
    "MIHAN SEZ EPF compliance",
    "Butibori MIDC ESIC registration",
    "Hingna MIDC PF liability",
    "EPFO 7A defence Nagpur",
    "SEZ labour law compliance MIHAN",
  ],

  alternates: {
    canonical: "https://epfdesk.com/nagpur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Nagpur EPF & ESIC Compliance | MIHAN SEZ & MIDC Factories | EPFDesk",
    description:
      "PF & ESIC specialists for Nagpur MIHAN SEZ, Butibori & Hingna MIDC factories, and Vidarbha industrial hubs.",
    url: "https://epfdesk.com/nagpur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nagpur EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Nagpur EPF & ESIC Compliance | MIHAN SEZ & MIDC Factories | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Nagpur MIHAN SEZ and MIDC factories.",
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
      <Script id="nagpur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Nagpur, Maharashtra, India">
            <meta name="geo.position" content="21.1458;79.0882">
            <meta name="ICBM" content="21.1458, 79.0882">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/nagpur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/nagpur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-nagpur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/nagpur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Nagpur District",

          alternateName:
            "Nagpur EPF & ESIC Compliance for MIHAN SEZ, Butibori & Hingna MIDC",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/nagpur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Sitabuldi",
            addressRegion: "Maharashtra",
            postalCode: "440001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.1458,
            longitude: 79.0882,
          },

          areaServed: [
            { "@type": "City", name: "Nagpur" },
            { "@type": "Place", name: "MIHAN SEZ" },
            { "@type": "Place", name: "Butibori MIDC" },
            { "@type": "Place", name: "Hingna MIDC" },
            {
              "@type": "AdministrativeArea",
              name: "Vidarbha Region",
            },
          ],

          description:
            "EPF & ESIC compliance services for Nagpur MIHAN SEZ operations, Butibori and Hingna MIDC factories, including SEZ labour law compliance, EPFO Section 7A defence, hazardous industry ESIC coverage and Principal Employer liability management.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "90",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNagpurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNagpurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNagpurDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-nagpur" strategy="afterInteractive">
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
