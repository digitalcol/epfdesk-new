import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataPrayagrajDist,
  sectionsPrayagrajDist,
  faqPrayagraj,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Prayagraj EPF & ESIC Compliance: Educational PF Mandate, High Court PE Liability & Coaching Sector Audits | EPFDesk",

  description:
    "Critical EPF & ESIC defense for Prayagraj educational institutions, coaching centers, hospitals and government contractors. Experts in RO Prayagraj liaison, retrospective PF demands on school staff, allowance audits and CLRA/Principal Employer liability management.",

  alternates: {
    canonical: "https://epfdesk.com/prayagraj-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Prayagraj EPF & ESIC Compliance | Education, Coaching & Government Contractors",
    description:
      "PF & ESIC specialists for Prayagraj schools, coaching centers, hospitals and government contractors. RO Prayagraj enforcement, PE liability and allowance audits handled.",
    url: "https://epfdesk.com/prayagraj-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Prayagraj PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Prayagraj EPF & ESIC Compliance | Education & Government Sector | EPFDesk",
    description:
      "Expert PF/ESIC compliance for Prayagraj schools, coaching centers and government contractors.",
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
      <Script id="prayagraj-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Prayagraj">
            <meta name="geo.position" content="25.4358;81.8463">
            <meta name="ICBM" content="25.4358, 81.8463">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/prayagraj-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/prayagraj-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-prayagraj"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/prayagraj-epf-esic-compliance#organization",

          name: "EPFDesk – Prayagraj EPF & ESIC Compliance for Education & Government Sector",

          alternateName:
            "PF & ESIC Consultant for Schools, Coaching Centers & Government Contractors in Prayagraj",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/prayagraj-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressRegion: "Uttar Pradesh",
            postalCode: "211001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.4358,
            longitude: 81.8463,
          },

          areaServed: [
            { "@type": "City", name: "Prayagraj" },
            { "@type": "City", name: "Allahabad" },
            { "@type": "Place", name: "Naini Industrial Area" },
            { "@type": "Place", name: "Civil Lines Prayagraj" },
          ],

          description:
            "EPF & ESIC compliance specialists for Prayagraj covering private schools, colleges, coaching centers, hospitals, High Court and government contractors, with expertise in retrospective PF audits, allowance suppression cases, CLRA Principal Employer liability and RO Prayagraj proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "82",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataPrayagrajDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsPrayagrajDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqPrayagraj} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-prayagraj" strategy="afterInteractive">
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
