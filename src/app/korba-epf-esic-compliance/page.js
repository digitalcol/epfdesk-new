import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKorbaDistrict,
  sectionsKorbaDistrict,
  faqKorbaDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Korba EPF & ESIC Compliance: Power Plant PE Liability, BALCO Ancillary Audits & EEC-2025 | EPFDesk",

  description:
    "Specialized EPF & ESIC defense for Korba power plants, aluminium units and coal contractors. Navigate RO Bilaspur audits, EEC-2025 voluntary disclosure and ESIC medical benefits.",

  keywords: [
    "Korba PF consultant",
    "EPF compliance for power plant contractors",
    "BALCO ancillary ESIC registration",
    "SECL transport PF audits",
    "RO Bilaspur EPF 7A defense",
    "EEC 2025 Korba contractors",
  ],

  alternates: {
    canonical: "https://epfdesk.com/korba-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title: "Korba EPF & ESIC Compliance | Power, Aluminum & Mining Hub",
    description:
      "PF & ESIC specialists for Korba power plants, BALCO ancillaries and coal mining contractors.",
    url: "https://epfdesk.com/korba-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Korba EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Korba EPF & ESIC Compliance | Power & Mining Ecosystem",
    description:
      "High-risk PF & ESIC compliance for Korba’s energy, aluminum and coal sectors.",
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
      <Script id="korba-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-CG">
            <meta name="geo.placename" content="Korba, Korba District, Chhattisgarh">
            <meta name="geo.position" content="22.3595;82.7501">
            <meta name="ICBM" content="22.3595, 82.7501">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/korba-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/korba-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-korba"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/korba-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Korba District",

          alternateName:
            "Korba EPF & ESIC Compliance for Power, Aluminum & Mining Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/korba-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Transport Nagar Road",
            postalCode: "495677",
            addressLocality: "Korba",
            addressRegion: "Chhattisgarh",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.3595,
            longitude: 82.7501,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Korba District" },
            { "@type": "Place", name: "NTPC Jamnipali" },
            { "@type": "Place", name: "BALCO Korba" },
            { "@type": "Place", name: "SECL Korba" },
            { "@type": "Place", name: "CSPGCL Korba" },
          ],

          description:
            "EPF & ESIC compliance services for Korba power plants, aluminium smelters, coal mining contractors and hazardous industrial units governed by RO Bilaspur. Expertise includes Principal Employer liability, Section 7A defense and EEC-2025 filings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "82",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKorbaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKorbaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKorbaDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-korba" strategy="afterInteractive">
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
