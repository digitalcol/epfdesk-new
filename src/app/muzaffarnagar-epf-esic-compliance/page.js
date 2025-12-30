import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMuzaffarnagarDist,
  sectionsMuzaffarnagarDist,
  faqMuzaffarnagar,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Muzaffarnagar EPF & ESIC Compliance: Sugar Seasonal PF, Paper Mill Hazard & Agro PE Liability | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Muzaffarnagar Sugar Mills, Paper & Chemical factories and agro-processors. Experts in RO Meerut liaison, Retaining Allowance PF audits and ESIC hazard liability across Western UP.",

  keywords: [
    "Muzaffarnagar PF consultant",
    "Muzaffarnagar ESIC registration",
    "Sugar mill PF retaining allowance Muzaffarnagar",
    "Paper mill ESIC hazard liability",
    "RO Meerut PF jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/muzaffarnagar-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Muzaffarnagar EPF & ESIC Compliance | Sugar, Paper & Agro Processing | EPFDesk",
    description:
      "PF & ESIC specialists for Muzaffarnagar Sugar Mills, Paper factories and agro-processing units under RO Meerut.",
    url: "https://epfdesk.com/muzaffarnagar-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Muzaffarnagar EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Muzaffarnagar EPF & ESIC Compliance | Sugar & Paper Mills | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Muzaffarnagar Sugar Mills, Paper & Chemical industries.",
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
      <Script id="muzaffarnagar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Muzaffarnagar, Uttar Pradesh, India">
            <meta name="geo.position" content="29.4727;77.7085">
            <meta name="ICBM" content="29.4727, 77.7085">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/muzaffarnagar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/muzaffarnagar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-muzaffarnagar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/muzaffarnagar-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Muzaffarnagar District",

          alternateName:
            "Muzaffarnagar EPF & ESIC Compliance for Sugar, Paper & Agro Industries",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/muzaffarnagar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressRegion: "Uttar Pradesh",
            postalCode: "251001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 29.4727,
            longitude: 77.7085,
          },

          areaServed: [
            { "@type": "City", name: "Muzaffarnagar" },
            {
              "@type": "AdministrativeArea",
              name: "Western Uttar Pradesh",
            },
          ],

          description:
            "EPF & ESIC compliance services for Muzaffarnagar Sugar Mills, Paper & Chemical factories and agro-processing units. Expertise includes seasonal PF audits (Retaining Allowance), ESIC hazardous process compliance and RO Meerut enforcement.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "73",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMuzaffarnagarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMuzaffarnagarDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMuzaffarnagar} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script
        id="conversion-tracking-muzaffarnagar"
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
