import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKolkataRajarhat,
  sectionsKolkataRajarhat,
  faqKolkataRajarhat,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kolkata & Rajarhat EPF & ESIC Compliance: IT Parks, Sector V & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Kolkata metropolitan region — Salt Lake Sector V IT firms, Rajarhat startups, FinTech companies and service-sector MSMEs. Experts in RO Kolkata enforcement, 50% Wage Rule implementation, Principal Employer liability and EEC-2025 filings.",

  keywords: [
    "Kolkata PF consultant",
    "Kolkata ESIC consultant",
    "Sector V PF ESIC compliance",
    "Rajarhat IT startup labour compliance",
    "IT company PF wage audit Kolkata",
    "50 percent wage rule PF Kolkata",
    "Principal Employer liability Kolkata",
    "RO Kolkata EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title: "Kolkata & Rajarhat EPF & ESIC Compliance | IT & Service Sector Hub",
    description:
      "PF & ESIC specialists for Sector V IT parks, Rajarhat startups and Kolkata service-sector employers.",
    url: "https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kolkata & Rajarhat EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Kolkata & Rajarhat EPF & ESIC Compliance | IT & Startups",
    description:
      "Expert PF & ESIC compliance for Kolkata IT firms, Rajarhat startups and service-sector employers.",
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
      <Script id="kolkata-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-WB">
            <meta name="geo.placename" content="Kolkata, West Bengal">
            <meta name="geo.position" content="22.5726;88.3639">
            <meta name="ICBM" content="22.5726, 88.3639">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kolkata-rajarhat"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Kolkata & Rajarhat",

          alternateName:
            "Kolkata & Rajarhat EPF & ESIC Compliance for IT & Service Sector",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kolkata-rajarhat-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Park Street",
            postalCode: "700016",
            addressLocality: "Kolkata",
            addressRegion: "West Bengal",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.5726,
            longitude: 88.3639,
          },

          areaServed: [
            {
              "@type": "AdministrativeArea",
              name: "Kolkata Metropolitan Area",
            },
            { "@type": "Place", name: "Salt Lake Sector V" },
            { "@type": "Place", name: "Rajarhat" },
            { "@type": "Place", name: "New Town Kolkata" },
          ],

          description:
            "EPF & ESIC compliance services for Kolkata IT parks, Sector V technology firms, Rajarhat startups, FinTech companies and service-sector MSMEs. Expertise includes RO Kolkata audits, 50% wage rule implementation and Principal Employer liability management.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "76",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKolkataRajarhat} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKolkataRajarhat} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKolkataRajarhat} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-kolkata" strategy="afterInteractive">
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
