import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJajpurDistrict,
  sectionsJajpurDistrict,
  faqJajpurDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Jajpur EPF & ESIC Compliance: Kalinganagar Steel Hub Audits & Expert Consultants | EPFDesk",

  description:
    "Specialized EPF & ESIC compliance defence for Jajpur steel plants, Kalinganagar MSMEs and mining ancillaries. Navigate RO Keonjhar audits, EEC-2025 and Principal Employer liability in Odisha’s steel hub.",

  keywords: [
    "Jajpur PF consultant",
    "Kalinganagar EPF ESIC compliance",
    "Tata Steel contractor PF audit",
    "JSL vendor ESIC registration",
    "RO Keonjhar EPF 7A defence",
    "EEC 2025 Jajpur",
    "Principal Employer liability Kalinganagar",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jajpur-epf-esic-compliance",
  },

  openGraph: {
    title: "Jajpur EPF & ESIC Compliance | Kalinganagar Steel Ecosystem",
    description:
      "PF & ESIC specialists for Kalinganagar steel plants, mining vendors and MSMEs governed by RO Keonjhar.",
    url: "https://epfdesk.com/jajpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jajpur EPF ESIC Compliance",
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
      <Script id="jajpur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-OD">
            <meta name="geo.placename" content="Jajpur, Odisha">
            <meta name="geo.position" content="20.8480;86.3380">
            <meta name="ICBM" content="20.8480, 86.3380">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/jajpur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/jajpur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-jajpur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/jajpur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Jajpur & Kalinganagar Steel Hub",

          alternateName:
            "Jajpur EPF & ESIC Compliance Experts for Steel, Mining & MSME Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jajpur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-CORRECT ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bypass Road",
            addressLocality: "Jajpur",
            addressRegion: "Odisha",
            postalCode: "755001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 20.848,
            longitude: 86.338,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Jajpur District" },
            { "@type": "Place", name: "Kalinganagar Industrial Area" },
            { "@type": "Place", name: "Jajpur Road" },
            { "@type": "Place", name: "Duburi" },
            { "@type": "Place", name: "Sukinda" },
          ],

          description:
            "EPF & ESIC compliance services for Jajpur steel plants, Kalinganagar MSMEs, chromite mining vendors and fabrication units. Coverage includes RO Keonjhar inspections, EPF Section 7A proceedings, EEC-2025 voluntary enrolment and Principal Employer liability defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "69",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJajpurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJajpurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJajpurDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-jajpur" strategy="afterInteractive">
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
