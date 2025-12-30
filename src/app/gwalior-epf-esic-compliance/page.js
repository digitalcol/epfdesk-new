import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGwaliorDistrict,
  sectionsGwaliorDistrict,
  faqGwaliorDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Gwalior EPF & ESIC Compliance: Stone Cluster PE Liability, EEC-2025 & ESIC Amnesty 2025 Settlement | EPFDesk",

  description:
    "Expert EPF & ESIC defense for Gwalior stone mines, engineering units and food processors. Navigate RO Gwalior audits, EEC-2025 enrolment, SPREE 2025 onboarding and ESIC Amnesty 2025 settlement across the Gwalior–Chambal belt.",

  keywords: [
    "Gwalior PF consultant",
    "Stone industry EPF compliance Gwalior",
    "ESIC registration Banmore industrial area",
    "EEC 2025 enrolment Gwalior",
    "ESIC Amnesty Scheme 2025 MP",
    "SPREE 2025 registration Gwalior MSME",
  ],

  alternates: {
    canonical: "https://epfdesk.com/gwalior-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Gwalior EPF & ESIC Compliance | Stone & Industrial Clusters | EPFDesk",
    description:
      "PF & ESIC specialists for Gwalior stone clusters, engineering units and food processing industries under RO Gwalior.",
    url: "https://epfdesk.com/gwalior-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gwalior EPF ESIC Compliance",
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
      <Script id="gwalior-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MP">
            <meta name="geo.placename" content="Gwalior">
            <meta name="geo.position" content="26.2183;78.1828">
            <meta name="ICBM" content="26.2183, 78.1828">
              <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/gwalior-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/gwalior-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-gwalior"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/gwalior-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Gwalior Stone & MSME Clusters",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/gwalior-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Lashkar",
            addressLocality: "Gwalior",
            addressRegion: "Madhya Pradesh",
            postalCode: "474001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.2183,
            longitude: 78.1828,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Gwalior District" },
            { "@type": "Place", name: "Banmore Industrial Area" },
            { "@type": "Place", name: "Malanpur Industrial Area" },
            { "@type": "Place", name: "Ghatigaon Stone Belt" },
            { "@type": "Place", name: "Dabra" },
            { "@type": "Place", name: "Gwalior–Chambal Industrial Zone" },
          ],

          description:
            "EPF & ESIC compliance services for Gwalior stone mining clusters, engineering MSMEs and food processing units. Expertise in RO Gwalior audits, EEC-2025 enrolment, SPREE 2025 onboarding, ESIC Amnesty 2025 settlement and Principal Employer liability.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "70",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGwaliorDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGwaliorDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqGwaliorDistrict} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-gwalior" strategy="afterInteractive">
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
