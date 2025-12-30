import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataGadchiroliDistrict,
  sectionsGadchiroliDistrict,
  faqGadchiroliDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Gadchiroli EPF & ESIC Compliance 2025: Forest Contractors, Mining, CLRA PE Liability & LWE Projects | EPFDesk",

  description:
    "Specialized EPF & ESIC compliance for Gadchiroli forest contractors, tendu leaf operations, mining projects and LWE infrastructure works. Experts in CLRA Principal Employer liability, BOCW cess and RO Nagpur enforcement.",

  keywords: [
    "Gadchiroli PF consultant",
    "Gadchiroli ESIC consultant",
    "Forest contractor PF compliance",
    "Tendu leaf PF ESIC",
    "CLRA Principal Employer liability Gadchiroli",
    "BOCW cess compliance NH projects",
    "Mining labour compliance Gadchiroli",
    "LWE area EPF ESIC compliance",
    "RO Nagpur EPFO jurisdiction",
    "EPFDesk Gadchiroli",
  ],

  alternates: {
    canonical: "https://epfdesk.com/gadchiroli-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Gadchiroli EPF & ESIC Compliance | Forest, Mining & LWE Contractors",
    description:
      "PF & ESIC specialists for Gadchiroli forest contractors, mining projects and LWE infrastructure works.",
    url: "https://epfdesk.com/gadchiroli-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gadchiroli EPF ESIC Compliance",
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
   PAGE COMPONENT
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="gadchiroli-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MH">
            <meta name="geo.placename" content="Gadchiroli">
            <meta name="geo.position" content="20.1850;80.0037">
            <meta name="ICBM" content="20.1850, 80.0037">
              <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/gadchiroli-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/gadchiroli-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-gadchiroli"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/gadchiroli-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Gadchiroli Forest & Mining Contractors",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/gadchiroli-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Complex Area",
            addressLocality: "Gadchiroli",
            addressRegion: "Maharashtra",
            postalCode: "442605",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 20.1850,
            longitude: 80.0037,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Gadchiroli District" },
            { "@type": "Place", name: "Forest Contractor Zones" },
            { "@type": "Place", name: "Tendu Leaf Collection Areas" },
            { "@type": "Place", name: "Mining & Mineral Blocks" },
            { "@type": "Place", name: "LWE Infrastructure Corridors" },
            { "@type": "Place", name: "Aheri" },
            { "@type": "Place", name: "Allapalli" },
            { "@type": "Place", name: "Armori" },
          ],

          description:
            "EPF & ESIC compliance services for Gadchiroli forest contractors, tendu leaf operations, mining projects and LWE infrastructure works. Expertise in CLRA Principal Employer liability, BOCW cess, remote-site ESIC coverage and RO Nagpur inspections.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "41",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGadchiroliDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGadchiroliDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqGadchiroliDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-gadchiroli" strategy="afterInteractive">
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
