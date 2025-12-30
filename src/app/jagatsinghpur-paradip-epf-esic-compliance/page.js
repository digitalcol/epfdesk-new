import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJagatsinghpurDistrict,
  sectionsJagatsinghpurDistrict,
  faqJagatsinghpurDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Paradip EPF & ESIC Compliance: IOCL & Port Contractor Audits | EPFDesk",

  description:
    "Expert EPF & ESIC compliance defence for Paradip Port contractors, IOCL refinery vendors and PCPIR petrochemical units in Jagatsinghpur district. Navigate RO Bhubaneswar audits, EEC-2025 and maritime Principal Employer liability.",

  keywords: [
    "Paradip PF consultant",
    "Jagatsinghpur EPF ESIC compliance",
    "Paradip Port contractor PF audit",
    "IOCL Paradip ESIC registration",
    "PCPIR Odisha labour compliance",
    "RO Bhubaneswar EPF 7A defence",
    "Principal Employer liability Paradip",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jagatsinghpur-paradip-epf-esic-compliance",
  },

  openGraph: {
    title: "Paradip EPF & ESIC Compliance | Port & Petrochemical Hub",
    description:
      "PF & ESIC specialists for Paradip Port, IOCL refinery and PCPIR contractors governed by RO Bhubaneswar.",
    url: "https://epfdesk.com/jagatsinghpur-paradip-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Paradip EPF ESIC Compliance",
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
      <Script id="jagatsinghpur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-OD">
            <meta name="geo.placename" content="Paradip, Jagatsinghpur, Odisha">
            <meta name="geo.position" content="20.3166;86.6114">
            <meta name="ICBM" content="20.3166, 86.6114">
             <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/jagatsinghpur-paradip-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/jagatsinghpur-paradip-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-jagatsinghpur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/jagatsinghpur-paradip-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Paradip Port & IOCL Contractors",

          alternateName:
            "Paradip EPF & ESIC Compliance Experts for Port, PCPIR & IOCL Vendors",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jagatsinghpur-paradip-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "College Road",
            addressLocality: "Jagatsinghpur",
            addressRegion: "Odisha",
            postalCode: "754103",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 20.3166,
            longitude: 86.6114,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Jagatsinghpur District" },
            { "@type": "Place", name: "Paradip Port" },
            { "@type": "Place", name: "IOCL Paradip Refinery" },
            { "@type": "Place", name: "PCPIR Odisha" },
            { "@type": "Place", name: "Paradeep Industrial Area" },
          ],

          description:
            "EPF & ESIC compliance services for Paradip Port contractors, IOCL refinery vendors, shipping agents and PCPIR petrochemical units in Jagatsinghpur district. Coverage includes RO Bhubaneswar inspections, EPF Section 7A proceedings, EEC-2025 voluntary enrolment and maritime Principal Employer liability defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "91",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJagatsinghpurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJagatsinghpurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJagatsinghpurDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script
        id="conversion-tracking-jagatsinghpur"
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
