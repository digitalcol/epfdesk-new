import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBareillyDist,
  sectionsBareillyDist,
  faqBareilly,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Bareilly EPF & ESIC Compliance for Furniture, Sugar Mills & Defence Contractors | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Bareilly furniture manufacturers, sugar mills and defence contractors. Piece-rate PF audits, seasonal workforce PF exposure and RO Bareilly enforcement handled.",
  alternates: {
    canonical: "https://epfdesk.com/bareilly-epf-esic-compliance",
  },
  keywords: [
    "Bareilly PF consultant",
    "Bareilly ESIC registration",
    "Furniture piece rate PF Bareilly",
    "Sugar mill seasonal PF Bareilly",
    "RO Bareilly EPFO consultant",
    "Defence contractor PF ESIC Bareilly",
  ],
  openGraph: {
    title:
      "Bareilly EPF & ESIC Compliance | Furniture, Sugar & Defence Sector | EPFDesk",
    description:
      "PF & ESIC specialists for Bareilly furniture factories, seasonal sugar mills and defence contractors.",
    url: "https://epfdesk.com/bareilly-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bareilly EPF ESIC Compliance",
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
      <Script id="bareilly-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Bareilly">
            <meta name="geo.position" content="28.3670;79.4304">
            <meta name="ICBM" content="28.3670, 79.4304">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/bareilly-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/bareilly-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-bareilly-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/bareilly-epf-esic-compliance#organization",
          name: "EPFDesk - EPF & ESIC Consultants Bareilly",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/bareilly-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Civil Lines",
            addressLocality: "Bareilly",
            addressRegion: "Uttar Pradesh",
            postalCode: "243001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.367,
            longitude: 79.4304,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Bareilly District",
            containedIn: {
              "@type": "State",
              name: "Uttar Pradesh",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Furniture, Sugar & Defence Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Furniture Industry PF Compliance",
                  description:
                    "Piece-rate wage PF audits and compliance for furniture manufacturers",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Sugar Mill Seasonal PF Compliance",
                  description:
                    "PF liability management for seasonal sugar mill workforce",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Defence Contractor EPF & ESIC Compliance",
                  description:
                    "Principal Employer liability and RO Bareilly audit defence for defence contractors",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "76",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS (DISTRICT) ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-bareilly" strategy="afterInteractive">
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
            district: 'Bareilly',
            state: 'Uttar Pradesh',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBareillyDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBareillyDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBareilly} />

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
