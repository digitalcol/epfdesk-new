import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKeralaBalance,
  sectionsKeralaBalance,
  faqKeralaBalance,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kerala EPF & ESIC Compliance: IT Parks, Cashew Units, Gold Trade & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Kerala’s balance districts — Kozhikode Cyberpark IT units, Kollam cashew processing factories, Thrissur gold trade, retail and service establishments. Experts in RO enforcement, Kerala welfare-board reconciliation, Principal Employer liability and New Wage Code restructuring.",

  keywords: [
    "Kerala PF consultant",
    "Kerala ESIC consultant",
    "Kozhikode Cyberpark PF ESIC",
    "Kollam cashew factory labour compliance",
    "Thrissur gold jewellery PF ESIC",
    "Kerala welfare board PF ESIC reconciliation",
    "Retail establishment ESIC Kerala",
    "Principal Employer liability Kerala",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kerala-balance-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="kerala-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KL">
            <meta name="geo.placename" content="Kerala">
            <meta name="geo.position" content="10.8505;76.2711">
            <meta name="ICBM" content="10.8505, 76.2711">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kerala-balance-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kerala-balance-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kerala-balance"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/kerala-balance-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Kerala Balance Districts",

          alternateName:
            "Kerala EPF & ESIC Compliance for IT Parks, Cashew Units & Gold Trade",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kerala-balance-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ STATE-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "MG Road",
            addressLocality: "Thiruvananthapuram",
            addressRegion: "Kerala",
            postalCode: "695001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 10.8505,
            longitude: 76.2711,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Kozhikode District" },
            { "@type": "AdministrativeArea", name: "Malappuram District" },
            { "@type": "AdministrativeArea", name: "Kollam District" },
            { "@type": "AdministrativeArea", name: "Alappuzha District" },
            { "@type": "AdministrativeArea", name: "Thrissur District" },
          ],

          description:
            "EPF & ESIC compliance services for Kerala’s IT parks, cashew processing factories, gold jewellery trade, retail establishments and service-sector employers. Expertise includes welfare-board reconciliation, Principal Employer liability under CLRA, ESIC applicability for retail and service sectors, and New Wage Code payroll restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "88",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKeralaBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKeralaBalance} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqKeralaBalance} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script
        id="conversion-tracking-kerala-balance"
        strategy="afterInteractive"
      >
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
