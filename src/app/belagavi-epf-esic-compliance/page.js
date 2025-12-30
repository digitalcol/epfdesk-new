import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBelagaviDist,
  sectionsBelagaviDist,
  faqBelagavi,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Belagavi EPF & ESIC Compliance for Foundries, Auto Components & Heavy Engineering | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Belagavi foundries, auto component factories and heavy engineering units. Hazardous industry ESIC coverage, contractor PF liability, OHS documentation and 7A audit defence.",
  alternates: {
    canonical: "https://epfdesk.com/belagavi-epf-esic-compliance",
  },
  keywords: [
    "Belagavi PF consultant",
    "Belagavi ESIC consultant",
    "foundry PF ESIC compliance",
    "auto component factory PF ESIC",
    "hazardous industry ESIC Belagavi",
    "OHS statutory compliance Belagavi",
    "NWC 2025 Belagavi PF wages",
    "contract labour PF liability Belagavi",
    "EPFDesk Belagavi",
  ],
  openGraph: {
    title:
      "Belagavi EPF & ESIC Compliance | Foundries & Heavy Engineering | EPFDesk",
    description:
      "PF & ESIC specialists for Belagavi’s foundry, auto component and heavy engineering clusters.",
    url: "https://epfdesk.com/belagavi-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Belagavi EPF ESIC Compliance",
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
      <Script id="belagavi-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Belagavi">
            <meta name="geo.position" content="15.8497;74.4977">
            <meta name="ICBM" content="15.8497, 74.4977">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/belagavi-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/belagavi-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-belagavi-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/belagavi-epf-esic-compliance#organization",
          name: "EPFDesk - EPF & ESIC Consultants Belagavi",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/belagavi-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "College Road",
            addressLocality: "Belagavi",
            addressRegion: "Karnataka",
            postalCode: "590001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 15.8497,
            longitude: 74.4977,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Belagavi District",
            containedIn: {
              "@type": "State",
              name: "Karnataka",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Foundry & Manufacturing Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Foundry EPF & ESIC Compliance",
                  description:
                    "Hazardous industry ESIC coverage, PF contractor audits and accident liability management for foundries",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Auto Component Factory PF & ESIC Defence",
                  description:
                    "PF wage audits, CLRA compliance and PE liability for auto component manufacturers",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Heavy Engineering & OHS Compliance",
                  description:
                    "OHS statutory registers, ESIC accident handling and EPFO 7A defence for engineering units",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "44",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS (DISTRICT) ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-belagavi" strategy="afterInteractive">
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
            district: 'Belagavi',
            state: 'Karnataka',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBelagaviDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBelagaviDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBelagavi} />

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
