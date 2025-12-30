import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataChikkaballapurDist,
  sectionsChikkaballapurDist,
  faqChikkaballapur,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Chikkaballapur EPF & ESIC Compliance 2025: Pharma SEZ, Garments & Sericulture | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for Pharma SEZ units, Garment factories, Sericulture MSMEs and seasonal agro-processing units in Chikkaballapur district. Specialists in PF for piece-rate labour and ESIC coverage audits.",

  keywords: [
    "Chikkaballapur PF ESIC consultant",
    "Pharma SEZ PF registration Karnataka",
    "Garment factory ESIC Chikkaballapur",
    "Sericulture PF compliance",
    "Seasonal agro labour PF Karnataka",
  ],

  alternates: {
    canonical: "https://epfdesk.com/chikkaballapur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Chikkaballapur EPF & ESIC Compliance | Pharma SEZ • Garments • Sericulture",
    description:
      "PF & ESIC specialists for Pharma SEZ units, Garment factories, Sericulture and agro-processing industries in Chikkaballapur.",
    url: "https://epfdesk.com/chikkaballapur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chikkaballapur PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ===========================
   PAGE COMPONENT
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META (KARNATAKA) ========= */}
      <Script id="chikkaballapur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Chikkaballapur">
            <meta name="geo.position" content="13.4358;77.7275">
            <meta name="ICBM" content="13.4358, 77.7275">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/chikkaballapur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/chikkaballapur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-chikkaballapur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/chikkaballapur-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Chikkaballapur District",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/chikkaballapur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Church Street",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            postalCode: "560001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.4358,
            longitude: 77.7275,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Chikkaballapur District" },
            { "@type": "City", name: "Chintamani" },
            { "@type": "City", name: "Sidlaghatta" },
            { "@type": "City", name: "Gowribidanur" },
            { "@type": "City", name: "Bagepalli" },
            { "@type": "City", name: "Gudibande" },
          ],

          description:
            "EPF & ESIC compliance services for Pharma SEZ units, garment factories, sericulture MSMEs and seasonal agro-processing units across Chikkaballapur district.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "64",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataChikkaballapurDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsChikkaballapurDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqChikkaballapur} />
       <Script id="conversion-tracking-chikkaballapur" strategy="afterInteractive">
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
