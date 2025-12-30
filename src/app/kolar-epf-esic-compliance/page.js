import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataKolarDist, sectionsKolarDist, faqKolar } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kolar EPF & ESIC Compliance for Auto EMC, Honda Contractors & Sericulture Units | EPFDesk",

  description:
    "Expert PF & ESIC compliance for Kolar’s Auto EMC, Honda vendor ecosystem, Silk Sericulture units, and MSME factories. Specialists in New Wage Code rules, PF wage correction, Section 7A defense and Principal Employer liability.",

  keywords: [
    "Kolar PF consultant",
    "Kolar ESIC consultant",
    "Narasapura PF ESIC",
    "Honda vendor PF compliance",
    "Sericulture PF ESIC Karnataka",
    "Principal Employer liability Kolar",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kolar-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="kolar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Kolar, Kolar District, Karnataka">
            <meta name="geo.position" content="13.1369;78.1290">
            <meta name="ICBM" content="13.1369, 78.1290">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kolar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kolar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kolar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/kolar-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Kolar District",

          alternateName:
            "Kolar EPF & ESIC Compliance for Auto EMC, Honda Vendors & Sericulture",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kolar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bangalore Road",
            postalCode: "563101",
            addressLocality: "Kolar",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 13.1369,
            longitude: 78.129,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Kolar District" },
            { "@type": "Place", name: "Kolar" },
            { "@type": "Place", name: "Malur" },
            { "@type": "Place", name: "Narasapura Industrial Area" },
            { "@type": "Place", name: "Bangarpet" },
            { "@type": "Place", name: "Auto EMC Kolar" },
          ],

          description:
            "EPF & ESIC compliance services for Kolar Auto EMC manufacturers, Honda vendor contractors, sericulture and silk units, MSME factories and ancillary suppliers. Expertise includes New Wage Code restructuring, Section 7A defense and Principal Employer liability management.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "41",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKolarDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKolarDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKolar} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-kolar" strategy="afterInteractive">
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
