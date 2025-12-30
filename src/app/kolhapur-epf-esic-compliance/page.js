import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKolhapurDistrict,
  sectionsKolhapurDistrict,
  faqKolhapurDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kolhapur EPF & ESIC Compliance for Foundries, Sugar Mills & MIDC Contractors | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Kolhapur foundries and casting units, PF liability on sugar mill Retention Allowance, and mandatory ESIC for hazardous MIDC workers. Specialists in RO Kolhapur audit defence.",

  keywords: [
    "Kolhapur PF consultant",
    "Foundry ESIC compliance Kolhapur",
    "Gokul Shirgaon MIDC ESIC",
    "Kagal MIDC PF ESIC",
    "Sugar mill PF retention allowance Kolhapur",
    "RO Kolhapur EPFO 7A defence",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kolhapur-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH (APP ROUTER SAFE) */
  openGraph: {
    title:
      "Kolhapur EPF & ESIC Compliance | Foundries, Sugar Mills & MIDC Units",
    description:
      "PF & ESIC specialists for Kolhapur foundries, sugar factories, retention allowance audits, and hazardous MIDC manufacturing clusters.",
    url: "https://epfdesk.com/kolhapur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kolhapur EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER (OPTIONAL BUT CLEAN) */
  twitter: {
    card: "summary_large_image",
    title: "Kolhapur EPF & ESIC Compliance | Foundry & Sugar Industry",
    description:
      "High-risk EPF & ESIC compliance for Kolhapur foundries, sugar mills and MIDC contractors.",
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
      <Script id="kolhapur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Kolhapur, Kolhapur District, Maharashtra">
            <meta name="geo.position" content="16.7050;74.2433">
            <meta name="ICBM" content="16.7050, 74.2433">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kolhapur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kolhapur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kolhapur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/kolhapur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Kolhapur District",

          alternateName:
            "Kolhapur EPF & ESIC Compliance for Foundries, Sugar Mills & MIDC Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kolhapur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Shahupuri Main Road",
            postalCode: "416001",
            addressLocality: "Kolhapur",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 16.705,
            longitude: 74.2433,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Kolhapur District" },
            { "@type": "Place", name: "Shiroli MIDC" },
            { "@type": "Place", name: "Gokul Shirgaon MIDC" },
            { "@type": "Place", name: "Kagal 5 Star MIDC" },
          ],

          description:
            "EPF & ESIC compliance services for Kolhapur foundries, casting units, sugar factories, retention allowance PF audits and hazardous MIDC manufacturing units.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "68",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKolhapurDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKolhapurDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKolhapurDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-kolhapur" strategy="afterInteractive">
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
