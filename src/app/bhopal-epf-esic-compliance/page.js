import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBhopalDistrict,
  sectionsBhopalDistrict,
  faqBhopalDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Bhopal EPF & ESIC Compliance: New Labour Code 2025, IT Salary Structuring & BHEL Ancillary PE Liability | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Bhopal IT hubs, engineering firms and BHEL ancillaries. Labour Code 2025 wage restructuring, RO Bhopal audits, PE liability and EEC-2025 advisory.",
  keywords: [
    "Bhopal PF consultant",
    "RO Bhopal EPF 7A defence",
    "New Labour Code 2025 salary structure",
    "BHEL ancillary PF ESIC compliance",
    "Mandideep industrial PF audit",
    "EPFDesk Bhopal",
  ],
  alternates: {
    canonical: "https://epfdesk.com/bhopal-epf-esic-compliance",
  },
  openGraph: {
    title: "Bhopal EPF & ESIC Compliance | Labour Code 2025 | EPFDesk",
    description:
      "PF & ESIC specialists for Bhopal’s IT, engineering and government contractor ecosystem under RO Bhopal.",
    url: "https://epfdesk.com/bhopal-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bhopal EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ===========================
   PAGE COMPONENT
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO + EXTRA META ========= */}
      <Script id="bhopal-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-MP">
            <meta name="geo.placename" content="Bhopal">
            <meta name="geo.position" content="23.2599;77.4126">
            <meta name="ICBM" content="23.2599, 77.4126">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/bhopal-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/bhopal-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-bhopal-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/bhopal-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants Bhopal",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/bhopal-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "MP Nagar Zone I",
            addressLocality: "Bhopal",
            addressRegion: "Madhya Pradesh",
            postalCode: "462011",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.2599,
            longitude: 77.4126,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Bhopal District",
            containedIn: {
              "@type": "State",
              name: "Madhya Pradesh",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "IT, Engineering & PSU Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Labour Code 2025 Payroll Restructuring",
                  description:
                    "50% basic wage alignment, allowance rationalisation and future-ready payroll design",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "BHEL & PSU Ancillary PF ESIC Compliance",
                  description:
                    "Principal Employer liability, contractor audits and RO Bhopal inspection defence",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "IT & Engineering Salary Structuring",
                  description:
                    "Variable pay PF exposure control, ESIC applicability review and 7A defence",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "73",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-bhopal" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WMNLTE5RKQ', {
            page_location: window.location.href,
            page_title: document.title,
            custom_map: {
              dimension1: 'district',
              dimension2: 'state'
            }
          });

          gtag('event', 'page_view', {
            district: 'Bhopal',
            state: 'Madhya Pradesh',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBhopalDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBhopalDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBhopalDistrict} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-bhopal" strategy="afterInteractive">
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
