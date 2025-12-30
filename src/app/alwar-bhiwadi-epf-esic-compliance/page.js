import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataAlwarBhiwadi,
  sectionsAlwarBhiwadi,
  faqAlwarBhiwadi,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Bhiwadi & Alwar EPF & ESIC Compliance: Japanese Zone, EEC-2025 & PE Liability | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Bhiwadi auto MNCs, Neemrana Japanese Zone units and Alwar MSMEs. RO Alwar/Bhiwadi audits, EEC-2025, Principal Employer liability and global supply-chain labour compliance handled.",
  alternates: {
    canonical: "https://epfdesk.com/alwar-bhiwadi-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bhiwadi & Alwar EPF & ESIC Compliance | Global Industrial Hub | EPFDesk",
    description:
      "PF & ESIC specialists for Bhiwadi auto MNCs, Neemrana Japanese Zone and Alwar MSMEs.",
    url: "https://epfdesk.com/alwar-bhiwadi-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bhiwadi Alwar EPF ESIC Compliance",
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
      <Script id="alwar-bhiwadi-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-RJ">
            <meta name="geo.placename" content="Bhiwadi, Alwar">
            <meta name="geo.position" content="28.2102;76.8606">
            <meta name="ICBM" content="28.2102, 76.8606">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/alwar-bhiwadi-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/alwar-bhiwadi-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-alwar-bhiwadi-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/alwar-bhiwadi-epf-esic-compliance#organization",
          name: "EPFDesk – EPF & ESIC Consultants Bhiwadi & Alwar",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/alwar-bhiwadi-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Capital Mall Area",
            addressLocality: "Bhiwadi",
            addressRegion: "Rajasthan",
            postalCode: "301019",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.2102,
            longitude: 76.8606,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Alwar District",
            containedIn: {
              "@type": "State",
              name: "Rajasthan",
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
                  name: "EPF Compliance Bhiwadi & Alwar",
                  description:
                    "EPF registration, audits and statutory compliance for Bhiwadi and Alwar industrial units",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "ESIC Compliance Bhiwadi & Alwar",
                  description:
                    "ESIC registration, inspections and compliance support for Bhiwadi and Alwar MSMEs and MNCs",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Contract Labour PE Liability",
                  description:
                    "Principal Employer liability management under CLRA for auto, Japanese and Korean zone units",
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
      <Script id="ga-alwar-bhiwadi" strategy="afterInteractive">
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
            district: 'Alwar–Bhiwadi',
            state: 'Rajasthan',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAlwarBhiwadi} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAlwarBhiwadi} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAlwarBhiwadi} />

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
