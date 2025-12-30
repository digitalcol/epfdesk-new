import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNandedDistrict,
  sectionsNandedDistrict,
  faqNandedDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Nanded EPF & ESIC Compliance for Sugar Mills, Textile Powerlooms & Educational Trusts | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Nanded sugar mills, seasonal cane harvest workers, textile powerlooms and educational institutions. Specialists in piece-rate wage audits, ESIC coverage and Principal Employer liability.",

  keywords: [
    "Nanded PF consultant",
    "Sugar mill EPF compliance Nanded",
    "Powerloom ESIC registration Nanded",
    "Piece rate wages PF ESIC Marathwada",
    "Educational trust PF ESIC Nanded",
    "Nanded EPFO 7A defence",
  ],

  alternates: {
    canonical: "https://epfdesk.com/nanded-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Nanded EPF & ESIC Compliance | Sugar, Textile & Education | EPFDesk",
    description:
      "PF & ESIC specialists for Nanded sugar factories, textile powerlooms, seasonal agro labour and educational trusts.",
    url: "https://epfdesk.com/nanded-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nanded EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nanded EPF & ESIC Compliance | Sugar Mills & Powerlooms | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Nanded sugar mills, powerloom units and education sector employers.",
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
      <Script id="nanded-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Nanded, Maharashtra, India">
            <meta name="geo.position" content="19.1383;77.3210">
            <meta name="ICBM" content="19.1383, 77.3210">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/nanded-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/nanded-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-nanded"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/nanded-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Nanded District",

          alternateName:
            "Nanded EPF & ESIC Compliance for Sugar Mills, Powerlooms & Education",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/nanded-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Vazirabad",
            addressRegion: "Maharashtra",
            postalCode: "431601",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.1383,
            longitude: 77.321,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Nanded District" },
            { "@type": "Place", name: "Sugar Mills & Cane Harvesting Areas" },
            { "@type": "Place", name: "Textile Powerloom Clusters" },
            { "@type": "Place", name: "Educational Institutions & Trusts" },
            { "@type": "AdministrativeArea", name: "Marathwada Region" },
          ],

          description:
            "EPF & ESIC compliance services for Nanded sugar mills, seasonal cane harvest workers, textile powerloom units and educational trusts. Expertise includes piece-rate wage PF audits, ESIC applicability, EPFO Section 7A defence and Principal Employer liability.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "74",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNandedDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNandedDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNandedDistrict} />

      {/* ========= CONVERSION TRACKING (LOCKED) ========= */}
      <Script id="conversion-tracking-nanded" strategy="afterInteractive">
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
