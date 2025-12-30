import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataBokaro, sectionsBokaro, faqBokaro } from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Bokaro EPF & ESIC Compliance: SAIL-BSL Vendors, Steel Contractors & PE Liability | EPFDesk",
  description:
    "High-risk EPF & ESIC compliance defense for Bokaro Steel Plant (SAIL-BSL) vendors, Balidih industrial area MSMEs and engineering contractors. Experts in RO Bokaro enforcement, PSU vendor audits and Principal Employer liability.",
  keywords: [
    "Bokaro PF consultant",
    "Bokaro ESIC consultant",
    "SAIL Bokaro PF ESIC compliance",
    "Bokaro Steel Plant contractor PF",
    "Balidih industrial area PF ESIC",
    "Principal Employer liability Bokaro",
    "RO Bokaro EPFO jurisdiction",
    "Steel industry PF ESIC Bokaro",
  ],
  alternates: {
    canonical: "https://epfdesk.com/bokaro-epf-esic-compliance",
  },
  openGraph: {
    title: "Bokaro EPF & ESIC Compliance | SAIL Steel & Engineering Hub",
    description:
      "PF & ESIC specialists for SAIL-BSL vendors, Balidih engineering units and PSU-linked industries in Bokaro.",
    url: "https://epfdesk.com/bokaro-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bokaro PF ESIC Compliance",
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
      <Script id="bokaro-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-JH">
            <meta name="geo.placename" content="Bokaro Steel City">
            <meta name="geo.position" content="23.6693;86.1511">
            <meta name="ICBM" content="23.6693, 86.1511">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/bokaro-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/bokaro-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-bokaro-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/bokaro-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants Bokaro",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/bokaro-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Sector 4",
            addressLocality: "Bokaro Steel City",
            addressRegion: "Jharkhand",
            postalCode: "827004",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 23.6693,
            longitude: 86.1511,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Bokaro District",
            containedIn: {
              "@type": "State",
              name: "Jharkhand",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Steel, PSU & Contractor Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "SAIL-BSL Vendor PF & ESIC Compliance",
                  description:
                    "PSU vendor audits, PF wage scrutiny and PE liability defense for Bokaro Steel Plant contractors",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Balidih Industrial Area Labour Compliance",
                  description:
                    "PF & ESIC compliance for fabrication, engineering and MSME units in Balidih industrial belt",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Principal Employer & CLRA Defense",
                  description:
                    "End-to-end PE liability mitigation, contractor audits and RO Bokaro inspection handling",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "68",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-bokaro" strategy="afterInteractive">
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
            district: 'Bokaro',
            state: 'Jharkhand',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBokaro} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBokaro} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBokaro} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-bokaro" strategy="afterInteractive">
        {`
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

          document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
              gtag('event', 'form_submission', {
                event_category: 'lead',
                event_label: window.location.pathname,
                value: 10
              });
            });
          });
        `}
      </Script>
    </>
  );
}
