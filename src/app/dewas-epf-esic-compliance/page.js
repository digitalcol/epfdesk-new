import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataDewasDistrict,
  sectionsDewasDistrict,
  faqDewasDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Dewas EPF & ESIC Compliance 2025: Auto-Ancillary PE Liability, EEC-2025 & Engineering Audits | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Dewas engineering firms, auto-ancillaries and soya processing units. Specialists in RO Ujjain audits, Principal Employer liability, EEC-2025 enrolment and ESIC Amnesty settlements.",

  keywords: [
    "Dewas PF consultant",
    "Dewas ESIC consultant",
    "EPF compliance Dewas",
    "ESIC compliance Dewas",
    "Dewas auto ancillary PF audit",
    "Engineering industry PF ESIC Dewas",
    "Soya processing PF ESIC",
    "RO Ujjain EPF 7A defense",
    "EEC 2025 Dewas",
    "Principal Employer liability Dewas",
    "EPFDesk Dewas",
  ],

  alternates: {
    canonical: "https://epfdesk.com/dewas-epf-esic-compliance",
  },

  openGraph: {
    title: "Dewas EPF & ESIC Compliance | Engineering & Auto Hub",
    description:
      "PF & ESIC specialists for Dewas engineering, auto-ancillary and agro-processing units governed by RO Ujjain.",
    url: "https://epfdesk.com/dewas-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dewas EPF ESIC Compliance",
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
      <Script id="dewas-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MP">
            <meta name="geo.placename" content="Dewas">
            <meta name="geo.position" content="22.9623;76.0508">
            <meta name="ICBM" content="22.9623, 76.0508">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/dewas-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/dewas-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-dewas"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/dewas-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Dewas District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/dewas-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          aaddress: {
            "@type": "PostalAddress",
            streetAddress: "AB Road",
            addressLocality: "Dewas",
            addressRegion: "Madhya Pradesh",
            postalCode: "455001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.9623,
            longitude: 76.0508,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Dewas District" },
            { "@type": "Place", name: "Dewas Industrial Area" },
            { "@type": "Place", name: "Bagli" },
            { "@type": "Place", name: "Sonkatch" },
          ],

          description:
            "EPF & ESIC compliance services for Dewas engineering firms, auto-ancillaries, textile mills and soya processing units. Expertise in Principal Employer liability, EPFO 7A defense, EEC-2025 enrolment and ESIC amnesty settlements under RO Ujjain.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "68",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDewasDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDewasDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDewasDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-dewas" strategy="afterInteractive">
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
