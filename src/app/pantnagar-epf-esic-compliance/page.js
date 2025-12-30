import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  faqPantnagar,
  heroDataPantnagar,
  sectionsPantnagar,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Pantnagar EPF & ESIC Consultants: Auto-Hub & SIDCUL Compliance | EPFDesk",

  description:
    "Specialized EPF & ESIC consultancy for Pantnagar auto units, Rudrapur MSMEs, and Sitarganj SIDCUL clusters. Navigate RO Haldwani audits, EEC-2025, and Principal Employer liability.",

  alternates: {
    canonical: "https://epfdesk.com/pantnagar-epf-esic-compliance",
  },

  openGraph: {
    title: "Pantnagar EPF & ESIC Compliance | Automotive & Industrial Hub",
    description:
      "Statutory PF & ESIC compliance for Pantnagar auto OEM vendors, Rudrapur engineering MSMEs, and Sitarganj industrial parks.",
    url: "https://epfdesk.com/pantnagar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pantnagar EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Pantnagar EPF & ESIC Compliance | Auto & SIDCUL Industries | EPFDesk",
    description:
      "PF & ESIC services for Pantnagar auto OEM vendors, SIDCUL industries and MSMEs.",
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
      <Script id="pantnagar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UK">
            <meta name="geo.placename" content="Pantnagar">
            <meta name="geo.position" content="28.9845;79.4141">
            <meta name="ICBM" content="28.9845, 79.4141">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/pantnagar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/pantnagar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-pantnagar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/pantnagar-epf-esic-compliance#organization",

          name: "EPFDesk – Pantnagar EPF & ESIC Compliance for Auto & SIDCUL Industries",

          alternateName:
            "PF & ESIC Consultant for Pantnagar Auto OEM Vendors & SIDCUL Clusters",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/pantnagar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Rajpur Road",
            addressRegion: "Uttarakhand",
            postalCode: "248001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.9845,
            longitude: 79.4141,
          },

          areaServed: [
            {
              "@type": "AdministrativeArea",
              name: "Udham Singh Nagar District",
            },
            { "@type": "Place", name: "Pantnagar SIDCUL" },
            { "@type": "Place", name: "Rudrapur" },
            { "@type": "Place", name: "Sitarganj" },
            { "@type": "Place", name: "Gadarpur" },
            { "@type": "Place", name: "Kashipur" },
          ],

          description:
            "EPF & ESIC compliance specialists for Pantnagar auto OEM vendors, Rudrapur and Sitarganj SIDCUL industries, engineering MSMEs and contractor-driven manufacturing units, with expertise in RO Haldwani audits, Principal Employer liability and Labour Code readiness.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "71",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPantnagar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPantnagar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqPantnagar} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-pantnagar" strategy="afterInteractive">
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
