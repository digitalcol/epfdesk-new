import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataMohali, sectionsMohali, faqMohali } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Mohali EPF & ESIC Compliance: IT Parks, QuarkCity & 50% Wage Rule | EPFDesk",

  description:
    "High-risk EPF & ESIC compliance defence for Mohali IT Park companies, QuarkCity startups, electronics and biotech units. Experts in RO Chandigarh enforcement, 50% Wage Rule implementation, Principal Employer liability and ESIC digital filings.",

  keywords: [
    "Mohali PF consultant",
    "Mohali ESIC consultant",
    "Mohali IT Park PF ESIC",
    "QuarkCity startup labour compliance",
    "Electronics unit PF ESIC Mohali",
    "Biotech company labour laws Mohali",
    "50 percent wage rule PF Mohali",
    "RO Chandigarh EPFO jurisdiction",
  ],

  alternates: {
    canonical: "https://epfdesk.com/mohali-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title: "Mohali EPF & ESIC Compliance | IT & Electronics Hub",
    description:
      "PF & ESIC specialists for Mohali IT companies, QuarkCity startups, electronics manufacturers and service-sector employers.",
    url: "https://epfdesk.com/mohali-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mohali EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Mohali EPF & ESIC Compliance | IT & Electronics Hub",
    description:
      "Expert PF & ESIC compliance for Mohali IT companies, electronics units and startups.",
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
      <Script id="mohali-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-PB">
            <meta name="geo.placename" content="Mohali, Punjab, India">
            <meta name="geo.position" content="30.7046;76.7179">
            <meta name="ICBM" content="30.7046, 76.7179">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/mohali-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/mohali-epf-esic-compliance">
            
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-mohali"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/mohali-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Mohali IT & Industrial Hub",

          alternateName:
            "Mohali EPF & ESIC Compliance for IT Parks, Electronics & Startups",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/mohali-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Sector 17",
            addressRegion: "Punjab",
            postalCode: "160017",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 30.7046,
            longitude: 76.7179,
          },

          areaServed: [
            { "@type": "City", name: "Mohali" },
            { "@type": "Place", name: "SAS Nagar" },
            { "@type": "Place", name: "QuarkCity" },
            { "@type": "Place", name: "IT Park Mohali" },
            { "@type": "Place", name: "Sector 67 & Sector 82" },
            { "@type": "Place", name: "Knowledge City" },
          ],

          description:
            "EPF & ESIC compliance services for Mohali IT companies, startups, electronics and biotech units. Specialized handling of 50% Wage Rule (NWC 2025), Principal Employer liability, contractor audits, ESIC digital filings and RO Chandigarh proceedings.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "58",
          },
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMohali} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMohali} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqMohali} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-mohali" strategy="afterInteractive">
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
