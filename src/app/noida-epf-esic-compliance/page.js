import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { faqNoida, heroDataNoidaDist, sectionsNoidaDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Noida EPF & ESIC Compliance: Allowance Audits, PE Liability for IT/ITeS & Electronics MIDC | EPFDesk",

  description:
    "Critical EPF & ESIC defence for Noida IT/BPO hubs and Greater Noida factories. Experts in RO Noida liaison, high-stakes allowance suppression audits, and minimizing CLRA/Principal Employer liability across the NCR contract workforce.",

  keywords: [
    "Noida PF consultant",
    "Noida ESIC registration",
    "IT allowance PF audit Noida",
    "Principal Employer liability Greater Noida",
    "RO Noida EPFO consultant",
    "Electronics MIDC PF ESIC compliance",
  ],

  alternates: {
    canonical: "https://epfdesk.com/noida-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Noida EPF & ESIC Compliance | IT Allowance Audits & PE Liability | EPFDesk",
    description:
      "PF & ESIC specialists for Noida IT/ITeS, BPOs and Greater Noida manufacturing units. Allowance audits, contractor PE liability and RO Noida enforcement handled.",
    url: "https://epfdesk.com/noida-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Noida PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Noida EPF & ESIC Compliance | IT Allowance & PE Risk | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Noida IT, BPO and Electronics units. RO Noida audits & NWC readiness covered.",
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
      <Script id="noida-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Noida, Uttar Pradesh, India">
            <meta name="geo.position" content="28.5355;77.3910">
            <meta name="ICBM" content="28.5355, 77.3910">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/noida-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/noida-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-noida"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/noida-epf-esic-compliance#organization",

          name: "EPFDesk – Noida EPF & ESIC Compliance for IT, Electronics & NCR Workforce",

          alternateName:
            "Noida EPF & ESIC Consultant for IT/ITeS, BPO & Electronics Manufacturing",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/noida-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Sector 62",
            addressRegion: "Uttar Pradesh",
            postalCode: "201309",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.5355,
            longitude: 77.391,
          },

          areaServed: [
            { "@type": "City", name: "Noida" },
            { "@type": "City", name: "Greater Noida" },
            { "@type": "Place", name: "Sector 62" },
            { "@type": "Place", name: "Sector 63" },
            { "@type": "Place", name: "Electronics Manufacturing Cluster" },
          ],

          description:
            "EPF & ESIC compliance services for Noida IT/ITeS companies, BPOs and Greater Noida electronics and manufacturing units, with specialization in allowance suppression audits, Principal Employer liability under CLRA, ESIC factory compliance and RO Noida proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "96",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataNoidaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsNoidaDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqNoida} />
      </FadeInWhenVisible>
      <Script id="conversion-tracking-noida" strategy="afterInteractive">
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
