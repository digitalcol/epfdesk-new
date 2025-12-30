import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGanjamDistrict,
  sectionsGanjamDistrict,
  faqGanjamDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Ganjam EPF & ESIC Compliance 2025: Gopalpur SEZ, Port Contractors & Berhampur MSMEs | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Ganjam district covering Gopalpur Port & SEZ contractors, Tata Steel SEZ units and Berhampur MSMEs. Specialists in RO Berhampur audits, EEC-2025 enrolment and SEZ labour compliance.",

  keywords: [
    "Ganjam PF consultant",
    "Ganjam ESIC consultant",
    "Berhampur EPF ESIC compliance",
    "Gopalpur SEZ PF audit",
    "Port contractor ESIC Odisha",
    "RO Berhampur EPFO jurisdiction",
    "SEZ labour law compliance Odisha",
    "EEC 2025 EPF enrolment Ganjam",
    "EPFDesk Ganjam",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/ganjam-berhampur-gopalpur-epf-esic-compliance",
  },

  openGraph: {
    title: "Ganjam EPF & ESIC Compliance | Gopalpur SEZ, Port & MSME Hub",
    description:
      "PF & ESIC specialists for Ganjam’s Gopalpur SEZ, port logistics contractors and Berhampur MSMEs.",
    url: "https://epfdesk.com/ganjam-berhampur-gopalpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ganjam EPF ESIC Compliance",
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
      <Script id="ganjam-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-OD">
            <meta name="geo.placename" content="Ganjam">
            <meta name="geo.position" content="19.3149;84.7941">
            <meta name="ICBM" content="19.3149, 84.7941">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/ganjam-berhampur-gopalpur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/ganjam-berhampur-gopalpur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-ganjam"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/ganjam-berhampur-gopalpur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Ganjam District & Gopalpur SEZ",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/ganjam-berhampur-gopalpur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gandhi Nagar",
            addressLocality: "Berhampur",
            addressRegion: "Odisha",
            postalCode: "760001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.3149,
            longitude: 84.7941,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Ganjam District" },
            { "@type": "Place", name: "Berhampur" },
            { "@type": "Place", name: "Gopalpur SEZ" },
            { "@type": "Place", name: "Gopalpur Port" },
            { "@type": "Place", name: "Chatrapur" },
          ],

          description:
            "EPF & ESIC compliance services for Ganjam district including Gopalpur Port & SEZ contractors, Tata Steel SEZ units and Berhampur MSMEs. Expertise in RO Berhampur inspections, EEC-2025 enrolment, SEZ labour law compliance and Principal Employer liability.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "81",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGanjamDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGanjamDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGanjamDistrict} />
      <Script id="conversion-tracking-ganjam" strategy="afterInteractive">
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
