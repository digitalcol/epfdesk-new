import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataNashikDistrict,
  sectionsNashikDistrict,
  faqNashikDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Nashik EPF & ESIC Compliance for Satpur/Ambad MIDC, Auto Component & Wine Industry | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Nashik auto and pharma factories (Satpur, Ambad, Sinnar MIDC), PF liability for MIDC contract labour, and mandatory ESIC for grape and wine processing units. Specialists in SRO Satpur liaison and Principal Employer liability.",

  keywords: [
    "Nashik PF consultant",
    "Satpur MIDC EPF compliance",
    "Ambad MIDC ESIC registration",
    "Wine industry ESIC Nashik",
    "Sinnar MIDC PF liability",
    "EPFO SRO Satpur 7A defence",
  ],

  alternates: {
    canonical: "https://epfdesk.com/nashik-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Nashik EPF & ESIC Compliance | MIDC, Auto & Wine Industry | EPFDesk",
    description:
      "PF & ESIC specialists for Nashik MIDC factories, auto and pharma units, and grape/wine processing industry.",
    url: "https://epfdesk.com/nashik-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nashik EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Nashik EPF & ESIC Compliance | Satpur MIDC & Wine Industry | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Nashik MIDC factories and wine processing units.",
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
      <Script id="nashik-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Nashik, Maharashtra, India">
            <meta name="geo.position" content="19.9975;73.7898">
            <meta name="ICBM" content="19.9975, 73.7898">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/nashik-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/nashik-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-nashik"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/nashik-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Nashik District",

          alternateName:
            "Nashik EPF & ESIC Compliance for MIDC, Auto & Wine Industry",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/nashik-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Shivaji Nagar",
            addressRegion: "Maharashtra",
            postalCode: "411005",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.9975,
            longitude: 73.7898,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Nashik District" },
            { "@type": "Place", name: "Satpur MIDC" },
            { "@type": "Place", name: "Ambad MIDC" },
            { "@type": "Place", name: "Sinnar MIDC" },
            { "@type": "Place", name: "Nashik Wine Industry Belt" },
          ],

          description:
            "Expert EPF & ESIC compliance services for Nashik MIDC factories (Satpur, Ambad, Sinnar), auto and pharma manufacturing units, wine and grape processing industry, and Principal Employer liability management under SRO Satpur jurisdiction.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "89",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNashikDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNashikDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqNashikDistrict} />

      {/* ========= CONVERSION TRACKING (LOCKED) ========= */}
      <Script id="conversion-tracking-nashik" strategy="afterInteractive">
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
