import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMumbaiCity,
  sectionsMumbaiCity,
  faqMumbaiCity,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Mumbai EPF & ESIC Compliance for BFSI, IT Services, Stock Exchanges & Port Logistics | EPFDesk",

  description:
    "Expert EPF & ESIC defence for BFSI & FinTech firms, PF liability for contract staffing agencies in BKC, and ESIC compliance for support staff in corporate offices and Mumbai Port operations. Specialists in NWC wage rules & PE liability.",

  keywords: [
    "Mumbai PF consultant",
    "Mumbai ESIC registration",
    "PF on special allowance Mumbai",
    "EPFO 7A defence BFSI",
    "BKC contract staffing PF",
    "Mumbai Port contractor PF ESIC",
  ],

  alternates: {
    canonical: "https://epfdesk.com/mumbai-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Mumbai EPF & ESIC Compliance | BFSI, IT & Port Operations | EPFDesk",
    description:
      "PF & ESIC specialists for Mumbai BFSI, IT services, corporate offices, and Mumbai Port contractors.",
    url: "https://epfdesk.com/mumbai-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mumbai EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title:
      "Mumbai EPF & ESIC Compliance | BFSI, IT & Corporate Sector | EPFDesk",
    description:
      "High-stakes PF & ESIC compliance and EPFO 7A defence for Mumbai BFSI, IT firms, and port contractors.",
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
      <Script id="mumbai-city-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Mumbai City, Maharashtra, India">
            <meta name="geo.position" content="19.0760;72.8777">
            <meta name="ICBM" content="19.0760, 72.8777">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/mumbai-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/mumbai-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-mumbai-city"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/mumbai-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Mumbai BFSI & Corporate Sector",

          alternateName:
            "Mumbai EPF & ESIC Compliance for BFSI, IT Services & Port Contractors",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/mumbai-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Nariman Point",
            addressRegion: "Maharashtra",
            postalCode: "400021",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.076,
            longitude: 72.8777,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Mumbai City" },
            { "@type": "Place", name: "Bandra Kurla Complex (BKC)" },
            { "@type": "Place", name: "Nariman Point" },
            { "@type": "Place", name: "Lower Parel" },
            { "@type": "Place", name: "Mumbai Port Trust Area" },
          ],

          description:
            "EPF & ESIC compliance services for Mumbai City BFSI, IT services, corporate offices, contract staffing agencies and Mumbai Port contractors. Specialized handling of PF on special allowance, Section 7A proceedings, Principal Employer liability and NWC 2025 wage structuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "112",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMumbaiCity} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMumbaiCity} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMumbaiCity} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-mumbai" strategy="afterInteractive">
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
