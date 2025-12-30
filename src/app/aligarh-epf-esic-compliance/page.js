import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  faqAligarh,
  heroDataAligarhDist,
  sectionsAligarhDist,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Aligarh EPF & ESIC Compliance: Lock, Brass & Hardware MSME Risk | EPFDesk",
  description:
    "Expert EPF & ESIC compliance services in Aligarh for lock manufacturers, brass foundries and hardware MSMEs. Piece-rate wage audits, job-work PE liability, ESIC hazard exposure and RO Aligarh proceedings handled.",
  alternates: {
    canonical: "https://epfdesk.com/aligarh-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Aligarh EPF & ESIC Compliance | Lock, Brass & Hardware MSMEs | EPFDesk",
    description:
      "PF & ESIC specialists for Aligarh lock manufacturers, brass foundries and hardware exporters.",
    url: "https://epfdesk.com/aligarh-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aligarh EPF ESIC Compliance",
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
      {/* ========= GEO + ADDITIONAL META TAGS ========= */}
      <Script id="aligarh-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Aligarh">
            <meta name="geo.position" content="27.8974;78.0880">
            <meta name="ICBM" content="27.8974, 78.0880">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/aligarh-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/aligarh-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-aligarh-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/aligarh-epf-esic-compliance#organization",
          name: "EPFDesk - EPF & ESIC Consultants Aligarh",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/aligarh-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Aligarh",
            addressRegion: "Uttar Pradesh",
            postalCode: "202001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 27.8974,
            longitude: 78.088,
          },

          areaServed: {
            "@type": "City",
            name: "Aligarh",
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
                  name: "EPF Registration Aligarh",
                  description:
                    "Complete EPF registration and provident fund compliance services for establishments in Aligarh",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "ESIC Registration Aligarh",
                  description:
                    "ESIC registration and compliance services for Aligarh establishments",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "PF Compliance Aligarh",
                  description:
                    "Monthly PF return filing and compliance management in Aligarh",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "74",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS (DISTRICT) ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-aligarh" strategy="afterInteractive">
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
            district: 'Aligarh',
            state: 'Uttar Pradesh',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAligarhDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAligarhDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAligarh} />

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
