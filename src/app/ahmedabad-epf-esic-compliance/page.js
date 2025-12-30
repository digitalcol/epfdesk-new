import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import {
  gujaratDistFAQ,
  heroDataGujaratDist,
  sectionsGujaratDist,
} from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Ahmedabad EPF & ESIC Consultant: NWC 2025 Compliance for GIDC Naroda, Sanand Auto Hub & DMIC Corridor | EPFDesk",
  description:
    "Expert EPF & ESIC compliance services in Ahmedabad for GIDC Naroda, Sanand auto OEMs, Vatva pharma units and DMIC corridor industries. NWC 2025 payroll restructuring, PF/ESI audits, contractor compliance and monthly filings.",
  alternates: {
    canonical: "https://epfdesk.com/ahmedabad-epf-esic-compliance",
  },
  openGraph: {
    title: "Ahmedabad EPF & ESIC Consultants | EPFDesk",
    description:
      "PF & ESIC compliance specialists for Ahmedabad’s pharma, auto and GIDC industrial clusters.",
    url: "https://epfdesk.com/ahmedabad-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmedabad EPF ESIC Compliance",
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
      <Script id="ahmedabad-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-GJ">
            <meta name="geo.placename" content="Ahmedabad">
            <meta name="geo.position" content="23.0225;72.5714">
            <meta name="ICBM" content="23.0225, 72.5714">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/ahmedabad-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/ahmedabad-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-ahmedabad-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/ahmedabad-epf-esic-compliance#organization",
          name: "EPFDesk - EPF & ESIC Consultants Ahmedabad",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/ahmedabad-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Ashram Road",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "380009",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.0225,
            longitude: 72.5714,
          },

          areaServed: {
            "@type": "City",
            name: "Ahmedabad",
            containedIn: {
              "@type": "State",
              name: "Gujarat",
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
                  name: "EPF Registration Ahmedabad",
                  description:
                    "Complete EPF registration and provident fund compliance services for establishments in Ahmedabad",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "ESIC Registration Ahmedabad",
                  description:
                    "ESIC registration and compliance services for Ahmedabad establishments",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "PF Compliance Ahmedabad",
                  description:
                    "Monthly PF return filing and compliance management in Ahmedabad",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "156",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS (DISTRICT) ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-ahmedabad" strategy="afterInteractive">
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
            district: 'Ahmedabad',
            state: 'Gujarat',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataGujaratDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsGujaratDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={gujaratDistFAQ} />

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
