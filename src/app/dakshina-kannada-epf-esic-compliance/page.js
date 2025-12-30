import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataDakshinaKannadaDist,
  sectionsDakshinaKannadaDist,
  faqDakshinaKannada,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Mangaluru EPF & ESIC Compliance 2025: Port, Banking, Education & Petrochemicals | EPFDesk",

  description:
    "Expert EPF & ESIC compliance for New Mangalore Port contractors, MRPL petrochemical units, hospitals, colleges and banks in Dakshina Kannada. Specialists in ESIC applicability defence and PF wage structuring for financial services.",

  keywords: [
    "Mangaluru PF consultant",
    "Dakshina Kannada ESIC consultant",
    "New Mangalore Port PF ESIC",
    "banking PF compliance Mangaluru",
    "hospital ESIC applicability Mangaluru",
    "MRPL petrochemical PF ESIC",
    "educational institution PF ESIC Mangaluru",
  ],

  alternates: {
    canonical: "https://epfdesk.com/dakshina-kannada-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Dakshina Kannada EPF & ESIC Compliance | Port, Banking, Education & Petrochemicals",
    description:
      "PF & ESIC specialists for New Mangalore Port, MRPL petrochemical units, hospitals, colleges and banks across Dakshina Kannada.",
    url: "https://epfdesk.com/dakshina-kannada-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dakshina Kannada EPF ESIC Compliance",
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
      {/* ========= GEO META (DAKSHINA KANNADA) ========= */}
      <Script id="dk-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Mangaluru">
            <meta name="geo.position" content="12.9141;74.8560">
            <meta name="ICBM" content="12.9141, 74.8560">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/dakshina-kannada-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/dakshina-kannada-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-dk"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/dakshina-kannada-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Dakshina Kannada (Mangaluru)",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/dakshina-kannada-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

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
            latitude: 12.9141,
            longitude: 74.8560,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Dakshina Kannada District" },
            { "@type": "City", name: "Mangaluru" },
            { "@type": "Place", name: "New Mangalore Port" },
            { "@type": "Place", name: "MRPL Petrochemical Units" },
            { "@type": "Place", name: "Coastal Banking & Education Sector" },
          ],

          description:
            "EPF & ESIC compliance services for Dakshina Kannada covering New Mangalore Port contractors, MRPL petrochemical units, hospitals, colleges and banks. Expertise in ESIC applicability defence, PF wage structuring and contractor liability management.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "57",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataDakshinaKannadaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsDakshinaKannadaDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqDakshinaKannada} />
       <Script id="conversion-tracking-dakshina-kannada" strategy="afterInteractive">
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
