import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNandurbarDistrict,
  sectionsNandurbarDistrict,
  faqNandurbarDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Nandurbar EPF & ESIC Compliance for Agro-Processing, Cotton & Newly Notified Areas | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Nandurbar cotton ginning factories, agro-processing units and seasonal tribal labour. Specialists in PF liability, SRO Jalgaon audits and ESIC applicability effective May 2025.",

  keywords: [
    "Nandurbar EPF consultant",
    "Nandurbar ESIC registration",
    "Cotton ginning PF compliance",
    "Tribal labour PF liability",
    "ESIC notification May 2025 Nandurbar",
    "EPFO SRO Jalgaon 7A defence",
  ],

  alternates: {
    canonical: "https://epfdesk.com/nandurbar-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Nandurbar EPF & ESIC Compliance | Agro-Processing & Tribal Labour | EPFDesk",
    description:
      "High-risk PF & ESIC compliance for Nandurbar cotton ginning units, agro-processing industries and newly notified ESIC zones.",
    url: "https://epfdesk.com/nandurbar-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nandurbar EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nandurbar EPF & ESIC Compliance | Agro & Tribal Labour | EPFDesk",
    description:
      "PF & ESIC compliance and audit defence for Nandurbar agro-processing units and seasonal tribal labour.",
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
      <Script id="nandurbar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Nandurbar, Maharashtra, India">
            <meta name="geo.position" content="21.3753;74.2428">
            <meta name="ICBM" content="21.3753, 74.2428">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/nandurbar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/nandurbar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-nandurbar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/nandurbar-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Nandurbar District",

          alternateName:
            "Nandurbar EPF & ESIC Compliance for Cotton, Agro-Processing & Tribal Labour",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/nandurbar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Station Road",
            addressRegion: "Maharashtra",
            postalCode: "425412",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.3753,
            longitude: 74.2428,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Nandurbar District" },
            { "@type": "Place", name: "Nandurbar MIDC" },
            { "@type": "Place", name: "Cotton Ginning & Pressing Units" },
            { "@type": "Place", name: "Tribal Labour Areas" },
            { "@type": "AdministrativeArea", name: "North Maharashtra" },
          ],

          description:
            "EPF & ESIC compliance services for Nandurbar cotton ginning factories, agro-processing units and newly notified ESIC areas effective May 2025. Expertise includes seasonal and tribal labour PF liability, piece-rate wage audits, EPFO Section 7A defence and SRO Jalgaon proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "37",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNandurbarDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNandurbarDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNandurbarDistrict} />

      {/* ========= CONVERSION TRACKING (LOCKED) ========= */}
      <Script id="conversion-tracking-nandurbar" strategy="afterInteractive">
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
