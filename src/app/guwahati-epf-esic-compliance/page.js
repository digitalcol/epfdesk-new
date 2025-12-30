import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGuwahati,
  sectionsGuwahati,
  faqGuwahati,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Guwahati EPF & ESIC Compliance: IT Parks, Logistics Contractors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Guwahati IT parks, North Guwahati industrial units, logistics contractors, retail chains and Northeast MSMEs. Experts in RO Guwahati enforcement, NEIDS-linked audits and Principal Employer liability.",

  keywords: [
    "Guwahati PF consultant",
    "Guwahati ESIC consultant",
    "IT park PF ESIC Guwahati",
    "Logistics contractor PF ESIC Assam",
    "North Guwahati industrial labour compliance",
    "Retail chain ESIC compliance Guwahati",
    "Principal Employer liability Guwahati",
    "RO Guwahati EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/guwahati-epf-esic-compliance",
  },

  openGraph: {
    title: "Guwahati EPF & ESIC Compliance | Assam Industrial & Commercial Hub",
    description:
      "PF & ESIC specialists for Guwahati IT parks, logistics contractors, retail chains and Northeast MSMEs.",
    url: "https://epfdesk.com/guwahati-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Guwahati EPF ESIC Compliance",
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
   PAGE COMPONENT
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="guwahati-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-AS">
            <meta name="geo.placename" content="Guwahati">
            <meta name="geo.position" content="26.1445;91.7362">
            <meta name="ICBM" content="26.1445, 91.7362">
              <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/guwahati-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/guwahati-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-guwahati"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/guwahati-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Guwahati & Northeast India",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/guwahati-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "GS Road",
            addressLocality: "Guwahati",
            addressRegion: "Assam",
            postalCode: "781001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.1445,
            longitude: 91.7362,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Kamrup Metropolitan District" },
            { "@type": "Place", name: "North Guwahati" },
            { "@type": "Place", name: "Amingaon" },
            { "@type": "Place", name: "GS Road" },
            { "@type": "Place", name: "Bamunimaidam" },
            { "@type": "Place", name: "Bongora IT Park" },
            { "@type": "Place", name: "Rani" },
            { "@type": "Place", name: "Chaygaon" },
          ],

          description:
            "EPF & ESIC compliance services for Guwahati IT parks, logistics contractors, retail chains and Northeast MSMEs. Expertise in RO Guwahati audits, NEIDS-linked employment reviews, CLRA Principal Employer liability and Labour Code compliance.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "84",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGuwahati} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGuwahati} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqGuwahati} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-guwahati" strategy="afterInteractive">
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
