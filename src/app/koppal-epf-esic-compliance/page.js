import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKoppalDist,
  sectionsKoppalDist,
  faqKoppal,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Koppal EPF & ESIC Compliance for Rice Mills, Agro-Processing & Gangavathi MSME Units | EPFDesk",

  description:
    "EPFDesk provides PF & ESIC compliance for Koppal’s rice mills, agro-processing belts and MSME units in Gangavathi. Specialised in PF for seasonal and piece-rate workers, ESIC for mill labour, and statutory registration for unorganised sector MSMEs.",

  keywords: [
    "Koppal PF consultant",
    "Koppal ESIC consultant",
    "rice mill PF ESIC",
    "Gangavathi MSME PF ESIC",
    "piece-rate PF calculation",
    "seasonal worker PF ESIC Karnataka",
    "KSSIDC Gangavathi compliance",
  ],

  alternates: {
    canonical: "https://epfdesk.com/koppal-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Koppal EPF & ESIC Consultant | Rice Mills, Agro-Processing & MSME Units",
    description:
      "Expert PF & ESIC compliance services for Koppal’s rice mills, agro-processing units and industrial estates in Gangavathi.",
    url: "https://epfdesk.com/koppal-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Koppal EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Koppal EPF & ESIC Compliance | Rice Mills, Agro & MSME Cluster",
    description:
      "PF/ESI compliance for seasonal and piece-rate workforce in Koppal rice mills, agro-processing units and Gangavathi MSME clusters.",
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
      <Script id="koppal-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Koppal, Koppal District, Karnataka">
            <meta name="geo.position" content="15.3455;76.1551">
            <meta name="ICBM" content="15.3455, 76.1551">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/koppal-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/koppal-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-koppal"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/koppal-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Koppal District",

          alternateName:
            "Koppal EPF & ESIC Compliance for Rice Mills & Agro-Processing Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/koppal-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Hospet Road",
            postalCode: "583231",
            addressLocality: "Koppal",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 15.3455,
            longitude: 76.1551,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Koppal District" },
            { "@type": "Place", name: "Gangavathi" },
            { "@type": "Place", name: "Gangavathi Rice Mills" },
            { "@type": "Place", name: "KSSIDC Industrial Estate" },
            { "@type": "Place", name: "Agro-Processing Units" },
          ],

          description:
            "EPF & ESIC compliance services for Koppal rice mills, agro-processing belts and MSME units in Gangavathi. Expertise includes PF for seasonal and piece-rate labour, ESIC coverage for mill workers and statutory registrations for MSMEs.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "41",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKoppalDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKoppalDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKoppal} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-koppal" strategy="afterInteractive">
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
        `}
      </Script>
    </>
  );
}
