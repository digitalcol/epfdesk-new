import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  faqBlrUrban,
  heroDataBlrUrban,
  sectionsBlrUrban,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Bengaluru Urban EPF & ESIC Compliance for IT, GCC, Biotech & Aerospace | International Worker PF | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Bengaluru Urban’s IT, GCC, Biotech and Aerospace sectors. Specialists in International Worker PF rules, high-salary payroll 7A defence, variable pay structuring and ESIC Principal Employer liability.",
  alternates: {
    canonical: "https://epfdesk.com/bengaluru-urban-epf-esic-compliance",
  },
  keywords: [
    "Bengaluru PF consultant",
    "Bengaluru ESIC consultant",
    "IT PF ESIC compliance",
    "GCC payroll PF Bangalore",
    "International Worker PF Bengaluru",
    "ESIC Principal Employer liability ORR",
    "Aerospace defence EPF compliance Bengaluru",
    "Biotech ESIC audit",
    "NWC 2025 PF IT salaries Bengaluru",
    "EPFDesk Bengaluru",
  ],
  openGraph: {
    title:
      "Bengaluru Urban EPF & ESIC Consultant | IT, GCC, Biotech & Aerospace | EPFDesk",
    description:
      "PF & ESIC compliance for Bengaluru Urban’s IT, GCC, Biotech & Aerospace workforce. International Worker PF, ESIC audits and NWC 2025 payroll alignment.",
    url: "https://epfdesk.com/bengaluru-urban-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bengaluru Urban EPF ESIC Compliance",
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
      <Script id="blr-urban-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Bengaluru Urban">
            <meta name="geo.position" content="12.9716;77.5946">
            <meta name="ICBM" content="12.9716, 77.5946">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/bengaluru-urban-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/bengaluru-urban-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-bengaluru-urban"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/bengaluru-urban-epf-esic-compliance#organization",

          name: "EPFDesk – Bengaluru Urban EPF & ESIC Consultants",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/bengaluru-urban-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Church Street",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            postalCode: "560001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 12.9716,
            longitude: 77.5946,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Bengaluru Urban District",
            containedIn: {
              "@type": "State",
              name: "Karnataka",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "IT, GCC, Biotech & Aerospace Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "International Worker PF Compliance",
                  description:
                    "PF compliance for expatriates and international employees under EPF Act",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "IT & GCC Payroll PF Structuring",
                  description:
                    "High-salary payroll PF structuring, variable pay analysis and 7A defence",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "ESIC Principal Employer Liability Management",
                  description:
                    "ESIC compliance for contract staff, facility management and support services",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Biotech & Aerospace ESIC Compliance",
                  description:
                    "ESIC audits, hazardous process compliance and accident liability handling",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "62",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-bengaluru-urban" strategy="afterInteractive">
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
            district: 'Bengaluru Urban',
            state: 'Karnataka',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBlrUrban} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBlrUrban} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBlrUrban} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking" strategy="afterInteractive">
        {`
          window.addEventListener('DOMContentLoaded', function() {

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

            document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
              el.addEventListener('click', () => {
                gtag('event', 'email_click', {
                  event_category: 'conversion',
                  event_label: el.getAttribute('href'),
                  value: 3
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

            let scrollTracked = false;
            window.addEventListener('scroll', () => {
              if (!scrollTracked && window.scrollY / document.body.scrollHeight > 0.75) {
                scrollTracked = true;
                gtag('event', 'scroll_75percent', {
                  event_category: 'engagement',
                  event_label: window.location.pathname
                });
              }
            });

          });
        `}
      </Script>
    </>
  );
}
