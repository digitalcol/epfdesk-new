import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";
import { faqAgra, heroDataAgraDist, sectionsAgraDist } from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Agra EPF & ESIC Compliance: Footwear, Leather & Tourism PE Risk | EPFDesk",
  description:
    "Expert EPF & ESIC compliance services in Agra for footwear manufacturers, leather exporters and hotels. RO Agra audits, piece-rate PF issues, ESIC hazard liability and CLRA Principal Employer risk handled.",
  alternates: {
    canonical: "https://epfdesk.com/agra-epf-esic-compliance",
  },
  openGraph: {
    title: "Agra EPF & ESIC Consultants | EPFDesk",
    description:
      "PF & ESIC compliance experts for Agra footwear, leather and tourism industries.",
    url: "https://epfdesk.com/agra-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Agra EPF ESIC Compliance",
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
      <Script id="agra-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-UP">
            <meta name="geo.placename" content="Agra">
            <meta name="geo.position" content="27.1767;78.0081">
            <meta name="ICBM" content="27.1767, 78.0081">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/agra-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/agra-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-agra-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/agra-epf-esic-compliance#organization",
          name: "EPFDesk - EPF & ESIC Consultants Agra",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/agra-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Sanjay Place",
            addressLocality: "Agra",
            addressRegion: "Uttar Pradesh",
            postalCode: "282002",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 27.1767,
            longitude: 78.0081,
          },

          areaServed: {
            "@type": "City",
            name: "Agra",
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
                  name: "EPF Registration Agra",
                  description:
                    "Complete EPF registration and provident fund compliance services for establishments in Agra",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "ESIC Registration Agra",
                  description:
                    "ESIC registration and compliance services for Agra establishments",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "PF Compliance Agra",
                  description:
                    "Monthly PF return filing and compliance management in Agra",
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
      <Script id="ga-agra" strategy="afterInteractive">
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
            district: 'Agra',
            state: 'Uttar Pradesh',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAgraDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAgraDist} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqAgra} />

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
