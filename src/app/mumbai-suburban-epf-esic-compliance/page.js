import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataMumbaiSuburbanDistrict,
  sectionsMumbaiSuburbanDistrict,
  faqMumbaiSuburbanDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Mumbai Suburban EPF & ESIC Compliance for IT, BPO & Film Industry | EPFDesk",

  description:
    "Critical EPF & ESIC defence for Mumbai Suburban IT/BPO hubs, Film & Entertainment contract labour, allowance suppression audits and RO Bandra liaison.",

  keywords: [
    "Mumbai Suburban EPF consultant",
    "RO Bandra EPFO audit",
    "IT BPO PF compliance Mumbai",
    "Film industry PF ESIC liability",
    "Allowance suppression PF audit",
    "NWC 2025 payroll restructuring IT",
  ],

  alternates: {
    canonical: "https://epfdesk.com/mumbai-suburban-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Mumbai Suburban EPF & ESIC Compliance | IT, BPO & Film Industry | EPFDesk",
    description:
      "High-risk EPF & ESIC compliance for Mumbai Suburban IT/BPO companies, film production houses and service-sector employers.",
    url: "https://epfdesk.com/mumbai-suburban-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mumbai Suburban EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title:
      "Mumbai Suburban EPF & ESIC Compliance | IT, BPO & Film Industry | EPFDesk",
    description:
      "PF & ESIC compliance for Mumbai Suburban IT/BPO companies and film industry contractors. Allowance audits and PE liability handled.",
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
      <Script id="mumbai-suburban-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Mumbai Suburban, Maharashtra, India">
            <meta name="geo.position" content="19.1176;72.9060">
            <meta name="ICBM" content="19.1176, 72.9060">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/mumbai-suburban-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/mumbai-suburban-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-mumbai-suburban"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/mumbai-suburban-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Mumbai Suburban District",

          alternateName:
            "Mumbai Suburban EPF & ESIC Compliance for IT, BPO & Film Industry",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/mumbai-suburban-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "FC Road",
            addressRegion: "Maharashtra",
            postalCode: "411004",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.1176,
            longitude: 72.906,
          },

          areaServed: [
            {
              "@type": "AdministrativeArea",
              name: "Mumbai Suburban District",
            },
            { "@type": "Place", name: "Andheri" },
            { "@type": "Place", name: "Malad" },
            { "@type": "Place", name: "Goregaon" },
            { "@type": "Place", name: "Bandra Kurla Complex (BKC)" },
          ],

          description:
            "EPF & ESIC compliance services for Mumbai Suburban IT & BPO companies, film production houses, studios and service-sector establishments. Expertise includes allowance suppression audits, contract labour PE liability, ESIC coverage for entertainment workers and RO Bandra enforcement.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "67",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMumbaiSuburbanDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMumbaiSuburbanDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMumbaiSuburbanDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script
        id="conversion-tracking-mumbai-suburban"
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
