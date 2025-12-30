import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBallariDist,
  sectionsBallariDist,
  faqBallari,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Ballari EPF & ESIC Compliance for Mining, Steel Plants & Thermal Power Contractors | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Ballari & Vijayanagara mining contractors, steel plants and thermal power projects. PF for CLRA workers, hazardous industry ESIC and BOCW compliance handled.",
  alternates: {
    canonical: "https://epfdesk.com/ballari-epf-esic-compliance",
  },
  keywords: [
    "Ballari PF consultant",
    "Vijayanagara PF ESIC consultant",
    "mining contractor PF Ballari",
    "steel plant ESIC compliance",
    "JSW PF audit defence",
    "thermal power PF ESIC",
    "BOCW Cess Ballari",
    "EPFDesk Ballari",
  ],
  openGraph: {
    title:
      "Ballari EPF & ESIC Compliance | Mining, Steel & Power Hub | EPFDesk",
    description:
      "PF & ESIC specialists for Ballari’s mining-to-steel ecosystem including JSW Steel, power plants and CLRA contractors.",
    url: "https://epfdesk.com/ballari-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ballari EPF ESIC Compliance",
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
      <Script id="ballari-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-KA">
            <meta name="geo.placename" content="Ballari">
            <meta name="geo.position" content="15.1394;76.9214">
            <meta name="ICBM" content="15.1394, 76.9214">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/ballari-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/ballari-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-ballari-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/ballari-epf-esic-compliance#organization",
          name: "EPFDesk - EPF & ESIC Consultants Ballari",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/ballari-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Cantonment Area",
            addressLocality: "Ballari",
            addressRegion: "Karnataka",
            postalCode: "583101",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 15.1394,
            longitude: 76.9214,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Ballari District",
            containedIn: {
              "@type": "State",
              name: "Karnataka",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Mining, Steel & Power Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Mining Contractor PF Compliance",
                  description:
                    "PF liability management for CLRA mining workers and subcontractors",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Steel Plant ESIC & PF Compliance",
                  description:
                    "ESIC hazardous industry compliance and PF audits for steel plants",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "BOCW & Thermal Power Compliance",
                  description:
                    "BOCW cess, thermal power project labour compliance and 7A defence",
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

      {/* ========= GOOGLE ANALYTICS (DISTRICT) ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-ballari" strategy="afterInteractive">
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
            district: 'Ballari',
            state: 'Karnataka',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBallariDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBallariDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBallari} />

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
