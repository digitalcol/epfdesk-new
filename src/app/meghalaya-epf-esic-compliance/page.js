import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMeghalaya,
  sectionsMeghalaya,
  faqMeghalaya,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Meghalaya EPF & ESIC Compliance: Cement Plants, Byrnihat Steel & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Meghalaya — Byrnihat steel mills, cement plants, Umiam industrial estates and regional MSMEs. Experts in SRO Shillong enforcement, hazardous process compliance, Principal Employer liability, ADC norms and New Wage Code restructuring.",

  keywords: [
    "Meghalaya PF consultant",
    "Meghalaya ESIC consultant",
    "Byrnihat steel plant PF ESIC",
    "Meghalaya cement plant labour compliance",
    "Umiam industrial estate PF audits",
    "Hazardous process ESIC Meghalaya",
    "Principal Employer liability Meghalaya",
    "SRO Shillong EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/meghalaya-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Meghalaya EPF & ESIC Compliance | Cement, Steel & Industrial Corridors",
    description:
      "PF & ESIC specialists for Meghalaya cement plants, Byrnihat steel units, Umiam industrial estates and MSMEs.",
    url: "https://epfdesk.com/meghalaya-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Meghalaya EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Meghalaya EPF & ESIC Compliance | Cement & Steel Industries",
    description:
      "Expert PF & ESIC compliance for Meghalaya cement plants, steel mills and industrial estates.",
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
      <Script id="meghalaya-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-ML">
            <meta name="geo.placename" content="Meghalaya, India">
            <meta name="geo.position" content="25.4670;91.3662">
            <meta name="ICBM" content="25.4670, 91.3662">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/meghalaya-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/meghalaya-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-meghalaya"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/meghalaya-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Meghalaya",

          alternateName:
            "Meghalaya Cement, Steel & Industrial EPF/ESIC Compliance",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/meghalaya-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "GS Road",
            addressRegion: "Meghalaya",
            postalCode: "793001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.467,
            longitude: 91.3662,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Meghalaya" },
            { "@type": "Place", name: "Byrnihat Industrial Area" },
            { "@type": "Place", name: "Umiam Industrial Estate" },
            { "@type": "Place", name: "Ri-Bhoi District" },
            { "@type": "Place", name: "East Khasi Hills" },
            { "@type": "Place", name: "East Jaintia Hills" },
          ],

          description:
            "EPF & ESIC compliance services for Meghalaya’s cement plants, steel mills, ferroalloy units, FMCG factories and MSMEs. Specialized handling of hazardous process ESIC coverage, Principal Employer liability under CLRA, ADC-linked labour norms and SRO Shillong enforcement.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "52",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMeghalaya} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMeghalaya} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMeghalaya} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-meghalaya" strategy="afterInteractive">
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
