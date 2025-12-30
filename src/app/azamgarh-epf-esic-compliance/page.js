import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  faqAzamgarh,
  heroDataAzamgarhDist,
  sectionsAzamgarhDist,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Azamgarh EPF & ESIC Compliance for Schools, Hospitals & MSMEs | EPFDesk",
  description:
    "Critical EPF & ESIC compliance for Azamgarh educational institutions, hospitals and MSMEs. Retrospective PF audits, service-sector Principal Employer liability and RO Varanasi inspections handled.",
  alternates: {
    canonical: "https://epfdesk.com/azamgarh-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Azamgarh EPF & ESIC Compliance | Education, Hospitals & MSMEs | EPFDesk",
    description:
      "PF & ESIC specialists for Azamgarh schools, hospitals and service-sector establishments.",
    url: "https://epfdesk.com/azamgarh-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Azamgarh EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  keywords: [
    "Azamgarh PF consultant",
    "Azamgarh ESIC registration",
    "Private school PF Azamgarh",
    "Hospital PF ESIC Azamgarh",
    "RO Varanasi EPFO jurisdiction Azamgarh",
    "MSME PF coverage Azamgarh",
  ],
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
      {/* ========= GEO + ADDITIONAL META TAGS ========= */}
      <Script id="azamgarh-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Azamgarh">
            <meta name="geo.position" content="26.0739;83.1859">
            <meta name="ICBM" content="26.0739, 83.1859">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/azamgarh-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/azamgarh-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-azamgarh-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/azamgarh-epf-esic-compliance#organization",
          name: "EPFDesk - EPF & ESIC Consultants Azamgarh",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/azamgarh-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Azamgarh",
            addressRegion: "Uttar Pradesh",
            postalCode: "276001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.0739,
            longitude: 83.1859,
          },

          areaServed: {
            "@type": "City",
            name: "Azamgarh",
            containedIn: {
              "@type": "State",
              name: "Uttar Pradesh",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "EPF & ESIC Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "EPF Compliance Azamgarh",
                  description:
                    "EPF registration, audits and statutory compliance for Azamgarh schools, hospitals and MSMEs",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "ESIC Compliance Azamgarh",
                  description:
                    "ESIC registration, inspections and coverage for educational, healthcare and service establishments",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Principal Employer & CLRA Compliance",
                  description:
                    "PE liability management and CLRA compliance for service-sector and institutional employers",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "71",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS (DISTRICT) ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-azamgarh" strategy="afterInteractive">
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
            district: 'Azamgarh',
            state: 'Uttar Pradesh',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAzamgarhDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAzamgarhDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAzamgarh} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking" strategy="afterInteractive">
        {`
          window.addEventListener('DOMContentLoaded', function() {

            document.querySelectorAll('a[href^="tel:"]').forEach(function(el) {
              el.addEventListener('click', function() {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: this.getAttribute('href'),
                  value: 5
                });
              });
            });

            document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(function(el) {
              el.addEventListener('click', function() {
                gtag('event', 'whatsapp_click', {
                  event_category: 'conversion',
                  event_label: window.location.pathname,
                  value: 5
                });
              });
            });

            document.querySelectorAll('a[href^="mailto:"]').forEach(function(el) {
              el.addEventListener('click', function() {
                gtag('event', 'email_click', {
                  event_category: 'conversion',
                  event_label: this.getAttribute('href'),
                  value: 3
                });
              });
            });

            document.querySelectorAll('form').forEach(function(form) {
              form.addEventListener('submit', function() {
                gtag('event', 'form_submission', {
                  event_category: 'lead',
                  event_label: window.location.pathname,
                  value: 10
                });
              });
            });

            let scrollTracked = false;
            window.addEventListener('scroll', function() {
              if (!scrollTracked && window.scrollY / document.body.scrollHeight > 0.75) {
                scrollTracked = true;
                gtag('event', 'scroll_75percent', {
                  event_category: 'engagement',
                  event_label: window.location.pathname
                });
              }
            });

            document.querySelectorAll('.cta-button, .contact-button, [data-cta]').forEach(function(btn) {
              btn.addEventListener('click', function() {
                gtag('event', 'cta_click', {
                  event_category: 'engagement',
                  event_label: this.textContent.trim(),
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
