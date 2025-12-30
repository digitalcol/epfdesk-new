import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPuneDistrict,
  sectionsPuneDistrict,
  faqPuneDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Pune EPF & ESIC Compliance for Auto MIDC, Hinjewadi IT Park & Principal Employer Liability | EPFDesk",

  description:
    "Expert EPF & ESIC defence for Pimpri-Chinchwad auto clusters, PF liability for Hinjewadi IT contractors, and ESIC compliance for Bhosari MIDC factory workers. Specialists in CLRA, IT allowance audits and EPFO 7A defence.",

  alternates: {
    canonical: "https://epfdesk.com/pune-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Pune EPF & ESIC Compliance | Auto, IT & Manufacturing Hubs | EPFDesk",
    description:
      "PF & ESIC specialists for Pune auto OEMs, IT parks, and MIDC manufacturing units.",
    url: "https://epfdesk.com/pune-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pune EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pune EPF & ESIC Compliance | Auto MIDC & Hinjewadi IT | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance and EPFO 7A defence for Pune auto and IT sectors.",
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
      <Script id="pune-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Pune">
            <meta name="geo.position" content="18.5204;73.8567">
            <meta name="ICBM" content="18.5204, 73.8567">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/pune-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/pune-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-pune"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/pune-epf-esic-compliance#organization",

          name: "EPFDesk – Pune EPF & ESIC Compliance for Auto, IT & Manufacturing Hubs",

          alternateName:
            "PF & ESIC Consultant for Pune Auto MIDC, Hinjewadi IT Park & PE Liability",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/pune-epf-esic-compliance",
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
            latitude: 18.5204,
            longitude: 73.8567,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Pune District" },
            { "@type": "Place", name: "Pimpri-Chinchwad Auto Cluster" },
            { "@type": "Place", name: "Chakan MIDC" },
            { "@type": "Place", name: "Hinjewadi IT Park" },
            { "@type": "Place", name: "Bhosari MIDC" },
            { "@type": "Place", name: "Ranjangaon MIDC" },
          ],

          description:
            "EPF & ESIC compliance specialists for Pune covering auto OEM clusters, MIDC manufacturing units, IT parks and large contractor ecosystems. Expertise includes PF on allowances, CLRA Principal Employer liability, contractor audits and EPFO 7A proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "104",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPuneDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPuneDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqPuneDistrict} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-pune" strategy="afterInteractive">
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
