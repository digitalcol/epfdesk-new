import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { faqHaridwar, heroDataHaridwar, sectionsHaridwar } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Haridwar EPF & ESIC Compliance: SIDCUL Units, FMCG Plants & PE Liability | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Haridwar SIDCUL industrial units, Patanjali Food Park FMCG plants, BHEL vendors and manufacturing MSMEs. Experts in SRO Haridwar enforcement, Principal Employer liability, contractor PF audits and New Wage Code restructuring.",

  keywords: [
    "Haridwar PF consultant",
    "Haridwar ESIC consultant",
    "SIDCUL Haridwar PF ESIC compliance",
    "Patanjali Food Park labour compliance",
    "BHEL vendor PF ESIC Haridwar",
    "FMCG plant PF audits Haridwar",
    "Principal Employer liability Haridwar",
    "SRO Haridwar EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/haridwar-epf-esic-compliance",
  },

  openGraph: {
    title: "Haridwar EPF & ESIC Compliance | SIDCUL & FMCG Industrial Hub",
    description:
      "PF & ESIC specialists for Haridwar SIDCUL units, FMCG plants, PSU vendors and manufacturing clusters.",
    url: "https://epfdesk.com/haridwar-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haridwar PF ESIC Compliance",
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
      <Script id="haridwar-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UK">
            <meta name="geo.placename" content="Haridwar">
            <meta name="geo.position" content="29.9457;78.1642">
            <meta name="ICBM" content="29.9457, 78.1642">
              <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/haridwar-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/haridwar-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-haridwar"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/haridwar-epf-esic-compliance#organization",

          name:
            "EPFDesk – EPF & ESIC Consultants for Haridwar SIDCUL & FMCG Industries",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/haridwar-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          /* ✅ DISTRICT-SPECIFIC ADDRESS */
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jwalapur",
            addressLocality: "Haridwar",
            addressRegion: "Uttarakhand",
            postalCode: "249401",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 29.9457,
            longitude: 78.1642,
          },

          areaServed: [
            { "@type": "Place", name: "SIDCUL Haridwar" },
            { "@type": "Place", name: "Patanjali Food Park" },
            { "@type": "Place", name: "Ranipur Industrial Area" },
            { "@type": "Place", name: "BHEL Haridwar Township" },
            {
              "@type": "AdministrativeArea",
              name: "Haridwar District",
            },
          ],

          description:
            "EPF & ESIC compliance services for Haridwar SIDCUL industrial units, FMCG plants, PSU vendors and manufacturing MSMEs. Expertise in SRO Haridwar inspections, Principal Employer liability, contractor PF audits and New Wage Code payroll restructuring.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "72",
          },
        })}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHaridwar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHaridwar} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={faqHaridwar} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-haridwar" strategy="afterInteractive">
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

          document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(el => {
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
