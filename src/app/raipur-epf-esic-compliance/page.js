import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataRaipurDistrict,
  sectionsRaipurDistrict,
  faqRaipurDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Raipur EPF & ESIC Compliance: Urla-Siltara Steel Hub Audits, EEC-2025 & PE Liability | EPFDesk",

  description:
    "Expert EPF & ESIC defense for Raipur steel plants, sponge iron units and MSMEs. Navigate RO Raipur audits, EEC-2025 enrolment and Principal Employer liability.",

  alternates: {
    canonical: "https://epfdesk.com/raipur-epf-esic-compliance",
  },

  openGraph: {
    title: "Raipur EPF & ESIC Compliance | Steel, Power & Manufacturing",
    description:
      "PF & ESIC specialists for Raipur steel clusters, sponge iron units and industrial MSMEs.",
    url: "https://epfdesk.com/raipur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Raipur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Raipur EPF & ESIC Compliance | Steel & Industrial Hub",
    description:
      "High-risk PF & ESIC compliance for Raipur’s steel and manufacturing clusters.",
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
      <Script id="raipur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-CG">
            <meta name="geo.placename" content="Raipur">
            <meta name="geo.position" content="21.2514;81.6296">
            <meta name="ICBM" content="21.2514, 81.6296">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/raipur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/raipur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-raipur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/raipur-epf-esic-compliance#organization",

          name: "EPFDesk – Raipur EPF & ESIC Compliance for Steel & Industrial Clusters",

          alternateName:
            "PF & ESIC Consultant for Urla, Siltara, Birgaon & Nava Raipur",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/raipur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Pandri",
            addressRegion: "Chhattisgarh",
            postalCode: "492004",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.2514,
            longitude: 81.6296,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Raipur District" },
            { "@type": "Place", name: "Urla Industrial Area" },
            { "@type": "Place", name: "Siltara Industrial Area" },
            { "@type": "Place", name: "Birgaon" },
            { "@type": "Place", name: "Bhanpuri" },
            { "@type": "Place", name: "Nava Raipur" },
          ],

          description:
            "EPF & ESIC compliance specialists for Raipur’s steel plants, sponge iron units, chemical factories and MSMEs governed by RO Raipur, including EEC-2025 enrolment and Principal Employer liability defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "84",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataRaipurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsRaipurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqRaipurDistrict} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-raipur" strategy="afterInteractive">
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
