import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJharsugudaDistrict,
  sectionsJharsugudaDistrict,
  faqJharsugudaDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Jharsuguda EPF & ESIC Compliance: Vedanta–MCL Contractor Audits & Expert Consultants | EPFDesk",

  description:
    "Expert EPF & ESIC compliance defence for Jharsuguda aluminium smelters, power plants and mining contractors. Coverage includes RO Sambalpur enforcement, Principal Employer liability, contractor audits and hazardous-process ESIC compliance.",

  keywords: [
    "Jharsuguda PF consultant",
    "Jharsuguda ESIC compliance",
    "Vedanta Jharsuguda EPF audit",
    "MCL contractor PF ESIC",
    "RO Sambalpur EPFO jurisdiction",
    "Hazardous process ESIC Odisha",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jharsuguda-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="jharsuguda-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-OD">
            <meta name="geo.placename" content="Jharsuguda, Odisha">
            <meta name="geo.position" content="21.8554;84.0062">
            <meta name="ICBM" content="21.8554, 84.0062">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/jharsuguda-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/jharsuguda-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-jharsuguda"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/jharsuguda-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Jharsuguda Energy & Mining Hub",

          alternateName:
            "Jharsuguda EPF & ESIC Compliance for Vedanta, MCL & Power Contractors",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jharsuguda-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Power House Road",
            addressLocality: "Jharsuguda",
            addressRegion: "Odisha",
            postalCode: "768201",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.8554,
            longitude: 84.0062,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Jharsuguda District" },
            { "@type": "Place", name: "Vedanta Aluminium Jharsuguda" },
            { "@type": "Place", name: "Brajrajnagar" },
            { "@type": "Place", name: "MCL Coal Handling Areas" },
            { "@type": "Place", name: "Jharsuguda Power Corridor" },
          ],

          description:
            "EPF & ESIC compliance services for Jharsuguda aluminium smelters, thermal power plants, coal-handling contractors and MSMEs. Expertise includes Principal Employer liability, hazardous-process ESIC compliance, contractor audits and RO Sambalpur enforcement defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "74",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJharsugudaDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJharsugudaDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJharsugudaDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-jharsuguda" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              gtag('event', 'phone_click', {
                event_category: 'conversion',
                event_label: el.getAttribute('href'),
                value: 5
              });
            });
          });

          document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
            el.addEventListener('click', () => {
              gtag('event', 'whatsapp_click', {
                event_category: 'conversion',
                event_label: window.location.pathname,
                value: 5
              });
            });
          });

          document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
              gtag('event', 'form_submission', {
                event_category: 'lead',
                event_label: window.location.pathname,
                value: 10
              });
            });
          });
        `}
      </Script>
    </>
  );
}
