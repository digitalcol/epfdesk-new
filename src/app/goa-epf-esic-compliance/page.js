import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGoaState,
  sectionsGoaState,
  faqGoa,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Goa EPF & ESIC Compliance 2025: Hotels, Resorts, Pharma Units & Mormugao Port Contractors | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Goa hospitality sector, seasonal hotel staff, Verna MIDC pharma factories, and Mormugao Port contract labour. Specialists in EPFO 7A defence, ESIC inspections and contractor PE liability.",

  keywords: [
    "Goa PF consultant",
    "Goa ESIC consultant",
    "PF for hotel staff Goa",
    "ESIC compliance Verna MIDC",
    "Mormugao Port contractor PF",
    "Goa EPFO 7A defence",
    "Seasonal labour PF ESIC Goa",
    "Hospitality labour compliance Goa",
    "EPFDesk Goa",
  ],

  alternates: {
    canonical: "https://epfdesk.com/goa-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Goa EPF & ESIC Compliance | Tourism, Pharma & Port Labour",
    description:
      "PF & ESIC specialists for Goa hotels, resorts, Verna MIDC pharma units and Mormugao Port contractors.",
    url: "https://epfdesk.com/goa-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Goa EPF ESIC Compliance",
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
      <Script id="goa-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-GA">
            <meta name="geo.placename" content="Goa">
            <meta name="geo.position" content="15.2993;74.1240">
            <meta name="ICBM" content="15.2993, 74.1240">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/goa-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/goa-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-goa"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/goa-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Goa State",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/goa-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ STATE-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Campal Area",
            addressLocality: "Panaji",
            addressRegion: "Goa",
            postalCode: "403001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 15.2993,
            longitude: 74.1240,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Goa" },
            { "@type": "City", name: "Panaji" },
            { "@type": "City", name: "Margao" },
            { "@type": "City", name: "Vasco da Gama" },
            { "@type": "Place", name: "Verna MIDC" },
            { "@type": "Place", name: "Mormugao Port" },
          ],

          description:
            "EPF & ESIC compliance services for Goa’s tourism and hospitality sector, seasonal hotel staff, pharma manufacturing units at Verna MIDC, and Mormugao Port contractors. Expertise in EPFO 7A proceedings, ESIC inspections, Principal Employer liability and seasonal workforce structuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "78",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGoaState} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGoaState} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGoa} />
       <Script id="conversion-tracking-goa" strategy="afterInteractive">
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
