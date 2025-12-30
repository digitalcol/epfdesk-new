import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMuzaffarpur,
  sectionsMuzaffarpur,
  faqMuzaffarpur,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Muzaffarpur EPF & ESIC Compliance: Apparel Park, Food Park Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Muzaffarpur — Apparel Park exporters, Bela Industrial Area textile and leather units, Motipur Food Park vendors and North Bihar MSMEs. Experts in RO Muzaffarpur enforcement, contractor PF audits and Principal Employer liability.",

  keywords: [
    "Muzaffarpur PF consultant",
    "Muzaffarpur ESIC consultant",
    "Muzaffarpur Apparel Park PF ESIC",
    "Bela Industrial Area labour compliance",
    "Motipur Food Park PF audits",
    "Leather unit PF ESIC Muzaffarpur",
    "Principal Employer liability Muzaffarpur",
    "RO Muzaffarpur EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/muzaffarpur-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Muzaffarpur EPF & ESIC Compliance | Textile & Agro-Industrial Hub | EPFDesk",
    description:
      "PF & ESIC specialists for Muzaffarpur apparel exporters, Bela textile units, Motipur Food Park vendors and leather processors.",
    url: "https://epfdesk.com/muzaffarpur-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Muzaffarpur EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muzaffarpur EPF & ESIC Compliance | Textile & Food Park | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Muzaffarpur apparel exporters, food-park vendors and leather units.",
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
      <Script id="muzaffarpur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-BR">
            <meta name="geo.placename" content="Muzaffarpur, Bihar, India">
            <meta name="geo.position" content="26.1209;85.3647">
            <meta name="ICBM" content="26.1209, 85.3647">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/muzaffarpur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/muzaffarpur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-muzaffarpur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/muzaffarpur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Muzaffarpur District",

          alternateName:
            "Muzaffarpur EPF & ESIC Compliance for Apparel Park, Food Park & MSMEs",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/muzaffarpur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Club Road",
            addressRegion: "Bihar",
            postalCode: "842001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.1209,
            longitude: 85.3647,
          },

          areaServed: [
            { "@type": "City", name: "Muzaffarpur" },
            { "@type": "Place", name: "Bela Industrial Area" },
            { "@type": "Place", name: "Motipur Food Park" },
            {
              "@type": "AdministrativeArea",
              name: "North Bihar",
            },
          ],

          description:
            "EPF & ESIC compliance services for Muzaffarpur Apparel Park exporters, Bela Industrial Area textile and leather units, Motipur Food Park vendors and North Bihar MSMEs. Expertise includes contractor PF audits, Principal Employer liability under CLRA and RO Muzaffarpur enforcement.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "69",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMuzaffarpur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMuzaffarpur} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMuzaffarpur} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-muzaffarpur" strategy="afterInteractive">
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
