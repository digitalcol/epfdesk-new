import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataBharuchDist, sectionsBharuchDist } from "@/utils/data";

/* ===========================
   METADATA (DISTRICT PAGE)
=========================== */
export const metadata = {
  title:
    "Bharuch PF & ESI Expert: NWC 2025 Ready Compliance for Ankleshwar GIDC, Dahej SIR & PCPIR Corridor | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance in Bharuch with NWC 2025–ready payrolls for MNCs in Ankleshwar GIDC, Dahej SIR and the PCPIR corridor. Expertise in PF audits, ESIC inspections, contractor compliance and chemical industry statutory adherence.",
  keywords: [
    "Bharuch PF consultant",
    "ESIC consultant Bharuch",
    "Ankleshwar GIDC PF compliance",
    "Dahej SIR ESIC compliance",
    "PCPIR chemical hub PF ESIC",
    "NWC 2025 payroll compliance Gujarat",
    "EPFDesk Bharuch",
  ],
  alternates: {
    canonical: "https://epfdesk.com/bharuch-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Bharuch PF & ESI Expert | Ankleshwar GIDC & Dahej SIR Compliance | EPFDesk",
    description:
      "Specialised PF & ESIC compliance for Bharuch’s PCPIR chemical corridor, Ankleshwar GIDC and Dahej SIR with NWC-2025 payroll restructuring.",
    url: "https://epfdesk.com/bharuch-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bharuch PF ESIC Compliance",
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
      <Script id="bharuch-geo-meta" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-GJ">
            <meta name="geo.placename" content="Bharuch">
            <meta name="geo.position" content="21.7051;72.9959">
            <meta name="ICBM" content="21.7051, 72.9959">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/bharuch-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/bharuch-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= LOCAL BUSINESS SCHEMA ========= */}
      <Script
        id="schema-bharuch-localbusiness"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/bharuch-epf-esic-compliance#organization",

          name: "EPFDesk – PF & ESIC Consultants Bharuch",
          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/bharuch-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Station Road",
            addressLocality: "Bharuch",
            addressRegion: "Gujarat",
            postalCode: "392001",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.7051,
            longitude: 72.9959,
          },

          areaServed: {
            "@type": "AdministrativeArea",
            name: "Bharuch District",
            containedIn: {
              "@type": "State",
              name: "Gujarat",
            },
          },

          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Chemical & PCPIR Compliance Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "PCPIR & Chemical Industry PF ESIC Compliance",
                  description:
                    "PF, ESIC and hazardous industry compliance for chemical and petrochemical units in the PCPIR corridor",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Ankleshwar GIDC & Dahej SIR Contractor Audits",
                  description:
                    "Principal Employer liability management, CLRA audits and ESIC inspections for GIDC & SIR units",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "NWC 2025 Payroll Restructuring",
                  description:
                    "50% basic wage compliance, allowance restructuring and future-ready payroll design for MNCs",
                },
              },
            ],
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="schema-bharuch-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for units in Ankleshwar GIDC and Dahej SIR?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPF and ESIC are mandatory for eligible establishments operating in Ankleshwar GIDC, Dahej SIR and the PCPIR corridor. Chemical, petrochemical and engineering units are under strict scrutiny for PF coverage, ESIC registration and contractor compliance.",
              },
            },
            {
              "@type": "Question",
              name: "What are the common PF and ESIC audit risks in Bharuch’s chemical industries?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include misclassification of allowances under the New Wage Code 2025, non-inclusion of contract labour wages, ESIC hazard exposure issues and Principal Employer liability under CLRA for contractors operating in GIDC and PCPIR zones.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk handle contractor compliance and CLRA audits in Bharuch?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk provides end-to-end PF, ESIC and CLRA compliance support for Principal Employers in Bharuch, including contractor audits, ESIC inspections, payroll restructuring and statutory risk mitigation.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= GOOGLE ANALYTICS ========= */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        strategy="afterInteractive"
      />
      <Script id="ga-bharuch" strategy="afterInteractive">
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
            district: 'Bharuch',
            state: 'Gujarat',
            page_type: 'district_landing'
          });
        `}
      </Script>

      {/* ========= CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataBharuchDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsBharuchDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-bharuch" strategy="afterInteractive">
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
