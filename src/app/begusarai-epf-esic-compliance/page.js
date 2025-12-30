import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBegusarai,
  sectionsBegusarai,
  faqBegusarai,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Begusarai EPF & ESIC Compliance for Barauni PSU Vendors, NTPC Contractors & PE Liability | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Begusarai’s Barauni Refinery (IOCL) vendors, NTPC contractors, HURL ancillaries and industrial MSMEs. PSU audits, hazardous process ESIC and Principal Employer liability handled.",
  alternates: {
    canonical: "https://epfdesk.com/begusarai-epf-esic-compliance",
  },
  keywords: [
    "Begusarai PF consultant",
    "Begusarai ESIC registration",
    "Barauni Refinery PF ESIC compliance",
    "IOCL vendor PF Begusarai",
    "NTPC contractor PF ESIC Begusarai",
    "HURL Barauni PF compliance",
    "Principal Employer liability Begusarai",
  ],
  openGraph: {
    title:
      "Begusarai EPF & ESIC Compliance | Barauni PSU & Industrial Hub | EPFDesk",
    description:
      "PF & ESIC specialists for IOCL Barauni Refinery vendors, NTPC contractors, HURL units and Begusarai MSMEs.",
    url: "https://epfdesk.com/begusarai-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Begusarai EPF ESIC Compliance",
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
      <Script id="begusarai-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-BR">
            <meta name="geo.placename" content="Begusarai">
            <meta name="geo.position" content="25.4182;86.1272">
            <meta name="ICBM" content="25.4182, 86.1272">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/begusarai-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/begusarai-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-begusarai-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/begusarai-epf-esic-compliance#organization",
          name: "EPFDesk - EPF & ESIC Consultants Begusarai",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/begusarai-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Kachahari Road",
            addressLocality: "Begusarai",
            addressRegion: "Bihar",
            postalCode: "851101",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.4182,
            longitude: 86.1272,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Begusarai District",
            containedIn: {
              "@type": "State",
              name: "Bihar",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "PSU & Industrial Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Barauni Refinery (IOCL) Vendor PF & ESIC Compliance",
                  description:
                    "PF & ESIC audits, CLRA compliance and PE liability for IOCL Barauni PSU vendors",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "NTPC & HURL Contractor Compliance",
                  description:
                    "PF, ESIC and hazardous process compliance for NTPC and HURL contractors",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Industrial MSME EPF & ESIC Defence",
                  description:
                    "Coverage audits, 7A defence and wage-structure risk management for Begusarai MSMEs",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "69",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS (DISTRICT) ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-begusarai" strategy="afterInteractive">
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
            district: 'Begusarai',
            state: 'Bihar',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBegusarai} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBegusarai} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBegusarai} />

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

            document.querySelectorAll('.cta-button, .contact-button, [data-cta]').forEach(btn => {
              btn.addEventListener('click', () => {
                gtag('event', 'cta_click', {
                  event_category: 'engagement',
                  event_label: btn.textContent.trim(),
                  value: 2
                });
              });
            });

          });
        `}
      </Script>
    </>
  );
}
