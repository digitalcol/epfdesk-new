import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataFaridabad,
  sectionsFaridabad,
  faqFaridabad,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Faridabad EPF & ESIC Compliance 2025: Engineering Units, IMT Vendors & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance for Faridabad engineering units, IMT Faridabad vendors, tractor ancillaries and manufacturing MSMEs. Specialists in RO Faridabad audits, Principal Employer liability, hazardous industry ESIC and New Wage Code 2025 restructuring.",

  keywords: [
    "Faridabad PF consultant",
    "Faridabad ESIC consultant",
    "IMT Faridabad PF ESIC compliance",
    "Engineering unit labour compliance Faridabad",
    "Tractor ancillary PF ESIC Faridabad",
    "Principal Employer liability Faridabad",
    "RO Faridabad EPFO jurisdiction",
    "Hazardous industry ESIC Faridabad",
    "NWC 2025 wage restructuring Faridabad",
    "EPFDesk Faridabad",
  ],

  alternates: {
    canonical: "https://epfdesk.com/faridabad-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Faridabad EPF & ESIC Compliance | Engineering & IMT Industrial Hub",
    description:
      "PF & ESIC specialists for Faridabad engineering units, IMT vendors, tractor ancillaries and manufacturing MSMEs.",
    url: "https://epfdesk.com/faridabad-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Faridabad EPF ESIC Compliance",
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
      <Script id="faridabad-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-HR">
            <meta name="geo.placename" content="Faridabad">
            <meta name="geo.position" content="28.4089;77.3178">
            <meta name="ICBM" content="28.4089, 77.3178">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/faridabad-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/faridabad-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-faridabad"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/faridabad-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Faridabad District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/faridabad-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "NIT Faridabad",
            addressLocality: "Faridabad",
            addressRegion: "Haryana",
            postalCode: "121001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.4089,
            longitude: 77.3178,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Faridabad District" },
            { "@type": "Place", name: "IMT Faridabad" },
            { "@type": "Place", name: "Ballabgarh" },
            { "@type": "Place", name: "NIT Faridabad" },
            { "@type": "Place", name: "Sector 24" },
            { "@type": "Place", name: "Sector 25" },
            { "@type": "Place", name: "Sector 58" },
          ],

          description:
            "EPF & ESIC compliance services for Faridabad engineering units, IMT Faridabad vendors, tractor ancillaries and manufacturing MSMEs. Expertise in Principal Employer liability, hazardous industry ESIC compliance, EPFO inspections and New Wage Code 2025 restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "74",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataFaridabad} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsFaridabad} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqFaridabad} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-faridabad" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              gtag('event', 'phone_click', {
                event_category: 'conversion',
                event_label: el.getAttribute('href'),
                value: 5
              });
            });
          });

          document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
            el.addEventListener('click', () => {
              gtag('event', 'whatsapp_click', {
                event_category: 'conversion',
                event_label: window.location.pathname,
                value: 5
              });
            });
          });

          document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
              gtag('event', 'form_submission', {
                event_category: 'lead',
                event_label: window.location.pathname,
                value: 10
              });
            });
          });
        `}
      </Script>
    </>
  );
}
