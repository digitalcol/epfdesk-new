import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataBalasoreDistrict,
  sectionsBalasoreDistrict,
  faqBalasoreDistrict,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Balasore EPF & ESIC Compliance for MSMEs, Seafood Exporters & Plastic Units | EPFDesk",
  description:
    "Expert EPF & ESIC compliance for Balasore MSMEs, seafood exporters, plastic and rubber units. RO Bhubaneswar audits, EEC-2025 and hazardous process compliance handled.",
  alternates: {
    canonical: "https://epfdesk.com/balasore-epf-esic-compliance",
  },
  keywords: [
    "Balasore PF consultant",
    "EPF ESIC compliance Balasore",
    "Plastic industry PF audit Odisha",
    "Seafood exporter ESIC registration",
    "Balasore MSME labour compliance",
    "RO Bhubaneswar EPF 7A defense",
  ],
  openGraph: {
    title: "Balasore EPF & ESIC Compliance | MSME & Export Hub | EPFDesk",
    description:
      "PF & ESIC specialists for Balasore plastic, seafood export and MSME clusters governed by RO Bhubaneswar.",
    url: "https://epfdesk.com/balasore-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Balasore EPF ESIC Compliance",
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
      <Script id="balasore-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-OD">
            <meta name="geo.placename" content="Balasore">
            <meta name="geo.position" content="21.4942;86.9336">
            <meta name="ICBM" content="21.4942, 86.9336">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/balasore-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/balasore-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-balasore-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/balasore-epf-esic-compliance#organization",
          name: "EPFDesk - EPF & ESIC Consultants Balasore",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/balasore-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Motiganj",
            addressLocality: "Balasore",
            addressRegion: "Odisha",
            postalCode: "756001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.4942,
            longitude: 86.9336,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Balasore District",
            containedIn: {
              "@type": "State",
              name: "Odisha",
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
                  name: "EPF Compliance Balasore",
                  description:
                    "EPF registration, audits and MSME PF compliance including defence-support vendors",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "ESIC Compliance Balasore",
                  description:
                    "ESIC registration and inspections for plastic, rubber and seafood processing units",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Principal Employer Liability & MSME Audits",
                  description:
                    "PE liability, contractor audits and RO Bhubaneswar enforcement defence",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "78",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS (DISTRICT) ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-balasore" strategy="afterInteractive">
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
            district: 'Balasore',
            state: 'Odisha',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBalasoreDistrict} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBalasoreDistrict} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBalasoreDistrict} />

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
