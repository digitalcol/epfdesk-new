import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKotaDistrict,
  sectionsKotaDistrict,
  faqKotaDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kota EPF & ESIC Compliance: Coaching Sector PF, Stone Mining Hazard & RO Kota Audits 2025 | EPFDesk",

  description:
    "Expert EPF & ESIC defense for Kota coaching institutes, Kota stone mines and chemical factories. Navigate RO Kota audits, EEC-2025 amnesty and New Labour Code wage compliance.",

  keywords: [
    "Kota PF consultant",
    "EPF ESIC compliance Kota",
    "Coaching institute PF audit Kota",
    "Kota stone mining ESIC",
    "RO Kota EPF 7A defense",
    "EEC 2025 EPF Kota",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kota-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title: "Kota EPF & ESIC Compliance | Education, Mining & Industry",
    description:
      "PF & ESIC specialists for Kota coaching institutes, stone mining clusters and chemical industries.",
    url: "https://epfdesk.com/kota-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kota EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Kota EPF & ESIC Compliance | Coaching, Mining & MSMEs",
    description:
      "High-risk PF & ESIC compliance for Kota coaching, mining and industrial clusters.",
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
      <Script id="kota-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-RJ">
            <meta name="geo.placename" content="Kota, Kota District, Rajasthan">
            <meta name="geo.position" content="25.2138;75.8648">
            <meta name="ICBM" content="25.2138, 75.8648">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kota-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kota-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kota"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/kota-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Kota District",

          alternateName:
            "Kota EPF & ESIC Compliance for Coaching, Mining & Industrial Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kota-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Jhalawar Road",
            postalCode: "324007",
            addressLocality: "Kota",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.2138,
            longitude: 75.8648,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Kota District" },
            { "@type": "Place", name: "Ramganj Mandi" },
            { "@type": "Place", name: "Indraprastha Industrial Area" },
            { "@type": "Place", name: "Anantpura" },
            { "@type": "Place", name: "Jawahar Nagar" },
            { "@type": "Place", name: "Rajiv Gandhi Nagar" },
          ],

          description:
            "EPF & ESIC compliance services for Kota coaching institutes, stone mining clusters and chemical factories governed by RO Kota. Expertise includes Section 7A defence, EEC-2025 filings and wage restructuring under the New Labour Code.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "68",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKotaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKotaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKotaDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-kota" strategy="afterInteractive">
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
