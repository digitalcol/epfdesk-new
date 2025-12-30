import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataKharagpur,
  sectionsKharagpur,
  faqKharagpur,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Kharagpur EPF & ESIC Compliance: Cement Plants, Metal Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Kharagpur’s industrial belt — cement plants, metal and engineering units, and Vidyasagar Industrial Park vendors. Experts in RO Kolkata enforcement, Principal Employer liability, contractor audits and New Wage Code restructuring.",

  keywords: [
    "Kharagpur PF consultant",
    "Kharagpur ESIC consultant",
    "cement plant PF ESIC Kharagpur",
    "metal industry labour compliance Kharagpur",
    "Vidyasagar Industrial Park PF audits",
    "engineering unit PF ESIC Kharagpur",
    "Principal Employer liability Kharagpur",
    "RO Kolkata EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/kharagpur-epf-esic-compliance",
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="kharagpur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-WB">
            <meta name="geo.placename" content="Kharagpur, Paschim Medinipur, West Bengal">
            <meta name="geo.position" content="22.3460;87.2310">
            <meta name="ICBM" content="22.3460, 87.2310">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/kharagpur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/kharagpur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-kharagpur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/kharagpur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Kharagpur Industrial Belt",

          alternateName:
            "Kharagpur EPF & ESIC Compliance for Cement, Metal & Engineering Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/kharagpur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Malanchak Road",
            addressLocality: "Kharagpur",
            addressRegion: "West Bengal",
            postalCode: "721301",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.346,
            longitude: 87.231,
          },

          areaServed: [
            {
              "@type": "AdministrativeArea",
              name: "Paschim Medinipur District",
            },
            { "@type": "Place", name: "Kharagpur Industrial Area" },
            { "@type": "Place", name: "Vidyasagar Industrial Park" },
            { "@type": "Place", name: "Nimpura Industrial Estate" },
            { "@type": "Place", name: "Gokulpur & Salboni Belt" },
          ],

          description:
            "EPF & ESIC compliance services for Kharagpur’s cement plants, metal and engineering units, and Vidyasagar Industrial Park vendors. Expertise includes Principal Employer liability under CLRA, contractor PF/ESI audits, RO Kolkata enforcement defence and New Wage Code restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "58",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataKharagpur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKharagpur} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqKharagpur} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-kharagpur" strategy="afterInteractive">
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
