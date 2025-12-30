import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import { heroDataBBJDT, sectionsBBJDT, faqBBJDT } from "@/utils/data";

/* ===========================
   METADATA (DISTRICT CLUSTER)
=========================== */
export const metadata = {
  title:
    "Rajasthan EPF & ESIC Compliance 2025: Bundi Agro-Hub, Dausa Industrial Link & RO Kota/Jaipur Audits | EPFDesk",

  description:
    "Expert EPF & ESIC defense for Rajasthan’s south-eastern and central hubs. Navigate RO Kota/Jaipur audits, Bundi rice mill PE liability and Dausa stone EEC-2025 amnesty.",

  keywords: [
    "Bundi PF consultant",
    "Baran EPF ESIC compliance",
    "Jhalawar spice park PF audit",
    "Dausa stone mining ESIC",
    "Tonk leather industry PF",
    "RO Kota EPF 7A defense",
    "RO Jaipur ESIC audits",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/bundi-baran-jhalawar-dausa-tonk-epf-esic-compliance",
  },

  openGraph: {
    title:
      "Rajasthan EPF & ESIC Compliance | Agro, Stone & Central Industrial Zones",
    description:
      "PF & ESIC specialists for Bundi rice mills, Jhalawar spice units, Dausa stone mining and Tonk manufacturing clusters.",
    url: "https://epfdesk.com/bundi-baran-jhalawar-dausa-tonk-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Rajasthan EPF ESIC Compliance",
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
      <Script id="bbjdt-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-RJ">
            <meta name="geo.placename" content="Jaipur">
            <meta name="geo.position" content="26.9124;75.7873">
            <meta name="ICBM" content="26.9124, 75.7873">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/bundi-baran-jhalawar-dausa-tonk-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/bundi-baran-jhalawar-dausa-tonk-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-bbjdt-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id":
            "https://epfdesk.com/bundi-baran-jhalawar-dausa-tonk-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Consultants for Bundi, Baran, Jhalawar, Dausa & Tonk",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/bundi-baran-jhalawar-dausa-tonk-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "MI Road",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            postalCode: "302001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.9124,
            longitude: 75.7873,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "South-Eastern & Central Rajasthan",
            containedIn: {
              "@type": "State",
              name: "Rajasthan",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Agro, Stone & MSME Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Rice Mill & Agro-Processing PF Compliance",
                  description:
                    "Seasonal PF audits, PE liability and wage structuring for Bundi & Baran agro units",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Stone Mining & EEC-2025 ESIC Defense",
                  description:
                    "ESIC applicability, accident liability and EEC-2025 amnesty for Dausa stone units",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Spice, Leather & MSME Compliance",
                  description:
                    "PF/ESIC audits for Jhalawar spice parks and Tonk manufacturing clusters",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "80",
          },
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-bbjdt" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WMNLTE5RKQ', {
            page_location: window.location.href,
            page_title: document.title
          });

          gtag('event', 'page_view', {
            cluster: 'Bundi-Baran-Jhalawar-Dausa-Tonk',
            state: 'Rajasthan',
            page_type: 'district_cluster'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBBJDT} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBBJDT} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqBBJDT} />

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-bbjdt" strategy="afterInteractive">
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
