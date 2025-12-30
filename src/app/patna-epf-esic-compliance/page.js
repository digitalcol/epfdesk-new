import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataPatna, sectionsPatna, faqPatna } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Patna EPF & ESIC Compliance: IT Firms, Logistics Parks & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Patna — IT & service companies, Bihta logistics parks, Fatuha industrial units, hospitals and retail chains. Experts in RO Patna enforcement, New Wage Code compliance, contractor audits and Principal Employer liability.",

  alternates: {
    canonical: "https://epfdesk.com/patna-epf-esic-compliance",
  },

  openGraph: {
    title: "Patna EPF & ESIC Compliance | IT, Logistics & Service Hub",
    description:
      "PF & ESIC specialists for Patna IT firms, logistics parks, hospitals, retail chains and service-sector employers.",
    url: "https://epfdesk.com/patna-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Patna PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Patna EPF & ESIC Compliance | IT & Logistics Hub | EPFDesk",
    description:
      "Expert PF & ESIC compliance for Patna IT firms, logistics parks, hospitals and service-sector employers.",
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
      <Script id="patna-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-BR">
            <meta name="geo.placename" content="Patna">
            <meta name="geo.position" content="25.5941;85.1376">
            <meta name="ICBM" content="25.5941, 85.1376">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/patna-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/patna-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-patna"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/patna-epf-esic-compliance#organization",

          name: "EPFDesk – Patna EPF & ESIC Compliance for IT, Logistics & Services",

          alternateName:
            "PF & ESIC Consultant for Patna IT Firms, Logistics Parks & Hospitals",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/patna-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Fraser Road",
            addressRegion: "Bihar",
            postalCode: "800001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.5941,
            longitude: 85.1376,
          },

          areaServed: [
            { "@type": "City", name: "Patna" },
            { "@type": "Place", name: "Bihta Industrial Area" },
            { "@type": "Place", name: "Fatuha Industrial Area" },
            { "@type": "Place", name: "Kankarbagh" },
            { "@type": "Place", name: "Rajendra Nagar" },
            { "@type": "Place", name: "Boring Road" },
          ],

          description:
            "EPF & ESIC compliance specialists for Patna IT and service companies, Bihta logistics parks, Fatuha industrial units, hospitals and retail chains, with expertise in RO Patna audits, New Wage Code restructuring, contractor PF liability and Principal Employer compliance.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "64",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPatna} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPatna} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqPatna} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-patna" strategy="afterInteractive">
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
