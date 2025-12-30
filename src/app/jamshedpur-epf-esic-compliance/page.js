import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataJamshedpur,
  sectionsJamshedpur,
  faqJamshedpur,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Jamshedpur EPF & ESIC Compliance: TATA Steel Vendors, Adityapur Units & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance for Jamshedpur — TATA Steel contractors, Adityapur auto-ancillaries, forging units and Jharkhand MSMEs. Coverage includes RO Jamshedpur audits, Principal Employer liability, PSU vendor inspections and New Wage Code restructuring.",

  keywords: [
    "Jamshedpur PF consultant",
    "Jamshedpur ESIC compliance",
    "TATA Steel contractor PF ESIC",
    "Adityapur auto ancillary labour compliance",
    "Forging unit PF ESIC Jamshedpur",
    "Principal Employer liability Jamshedpur",
    "RO Jamshedpur EPFO jurisdiction",
    "NWC 2025 wage restructuring Jharkhand",
  ],

  alternates: {
    canonical: "https://epfdesk.com/jamshedpur-epf-esic-compliance",
  },

  openGraph: {
    title: "Jamshedpur EPF & ESIC Compliance | Steel & Auto Industrial Hub",
    description:
      "PF & ESIC specialists for TATA Steel vendors, Adityapur auto-ancillaries and manufacturing MSMEs in Jamshedpur.",
    url: "https://epfdesk.com/jamshedpur-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Jamshedpur EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
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
      <Script id="jamshedpur-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-JH">
            <meta name="geo.placename" content="Jamshedpur, Jharkhand">
            <meta name="geo.position" content="22.8046;86.2029">
            <meta name="ICBM" content="22.8046, 86.2029">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/jamshedpur-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/jamshedpur-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-jamshedpur"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/jamshedpur-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Specialists for Jamshedpur Industries",

          alternateName:
            "Jamshedpur EPF & ESIC Compliance for TATA Steel Vendors & Adityapur Units",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/jamshedpur-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-ACCURATE ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bistupur",
            addressLocality: "Jamshedpur",
            addressRegion: "Jharkhand",
            postalCode: "831001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.8046,
            longitude: 86.2029,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "East Singhbhum District" },
            { "@type": "Place", name: "Adityapur Industrial Area" },
            { "@type": "Place", name: "Gamharia" },
            { "@type": "Place", name: "Kandra" },
            { "@type": "Place", name: "Seraikela-Kharsawan" },
          ],

          description:
            "EPF & ESIC compliance services for Jamshedpur TATA Steel contractors, Adityapur auto-ancillaries, forging units and Jharkhand MSMEs. Expertise includes PSU vendor audits, Principal Employer liability management, PF wage restructuring and ESIC inspection defence.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "68",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataJamshedpur} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsJamshedpur} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqJamshedpur} />
      <Script id="conversion-tracking-jamshedpur" strategy="afterInteractive">
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
