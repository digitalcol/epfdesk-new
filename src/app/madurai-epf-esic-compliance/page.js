import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";

import { heroDataMaduraiDist, sectionsMaduraiDist } from "@/utils/data";

/* ===========================
   METADATA (APP ROUTER)
=========================== */
export const metadata = {
  title:
    "Madurai Labour Compliance Analysis: Risk in Granite, Textiles & MSME EPF/ESIC Adherence | EPFDesk",

  description:
    "EPFDesk provides expert EPF, ESIC and NWC 2025 compliance analysis for Madurai’s granite processing units, textile mills, powerloom clusters and MSME manufacturing. Identify statutory risks, contractor liability gaps and workforce documentation issues.",

  keywords: [
    "Madurai PF consultant",
    "Madurai ESIC consultant",
    "granite industry labour compliance",
    "textile EPF ESIC Madurai",
    "powerloom PF ESIC Tamil Nadu",
    "MSME statutory compliance Madurai",
    "NWC 2025 Madurai payroll",
    "contractor compliance Tamil Nadu",
    "EPF inspection risk analysis Madurai",
  ],

  alternates: {
    canonical: "https://epfdesk.com/madurai-epf-esic-compliance",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Madurai EPF & ESIC Compliance | Granite, Textile & MSME Labour Risk Analysis",
    description:
      "EPF & ESIC risk-focused compliance insights for Madurai’s granite, textile and MSME sectors. Contractor liability, statutory gaps and NWC 2025 readiness.",
    url: "https://epfdesk.com/madurai-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Madurai EPF & ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Madurai Labour Compliance | Granite, Textile & MSME EPF/ESIC Risks",
    description:
      "Risk-based EPF/ESIC compliance strategies for Madurai’s granite, textile, powerloom and MSME sectors.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ===========================
   PAGE
=========================== */
export default function Page() {
  return (
    <>
      {/* ========= GEO META ========= */}
      <Script id="madurai-geo" strategy="beforeInteractive">
        {`
          document.head.insertAdjacentHTML('beforeend', \`
            <meta name="geo.region" content="IN-TN">
            <meta name="geo.placename" content="Madurai, Tamil Nadu, India">
            <meta name="geo.position" content="9.9252;78.1198">
            <meta name="ICBM" content="9.9252, 78.1198">
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
            <meta name="googlebot" content="index, follow">
            <meta name="author" content="EPFDesk">
            <meta name="language" content="English">
            <meta http-equiv="content-language" content="en-IN">
            <meta property="og:site_name" content="EPFDesk">
            <link rel="alternate" hreflang="en-IN" href="https://epfdesk.com/madurai-epf-esic-compliance">
            <link rel="alternate" hreflang="x-default" href="https://epfdesk.com/madurai-epf-esic-compliance">
          \`);
        `}
      </Script>

      {/* ========= JSON-LD SCHEMA ========= */}
      <Script
        id="schema-madurai"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://epfdesk.com/madurai-epf-esic-compliance#organization",

          name: "EPFDesk – EPF & ESIC Compliance Consultants for Madurai District",

          alternateName:
            "Madurai Granite, Textile & MSME EPF/ESIC Compliance Analysis",

          image: "https://epfdesk.com/images/logo.jpg",
          url: "https://epfdesk.com/madurai-epf-esic-compliance",
          telephone: "+91-9945933333",
          priceRange: "₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Anna Nagar Main Road",
            addressLocality: "Madurai",
            addressRegion: "Tamil Nadu",
            postalCode: "625020",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 9.9252,
            longitude: 78.1198,
          },

          areaServed: [
            { "@type": "AdministrativeArea", name: "Madurai District" },
            { "@type": "Place", name: "Granite Processing Units" },
            { "@type": "Place", name: "Textile Mills" },
            { "@type": "Place", name: "Powerloom Clusters" },
            { "@type": "Place", name: "MSME Manufacturing Units" },
          ],

          description:
            "EPF & ESIC compliance risk analysis for Madurai’s granite, textile, powerloom and MSME sectors. Services include contractor liability mapping, workforce documentation audits and New Wage Code 2025 readiness strategies.",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
          },
        })}
      </Script>
      <Script
        id="faq-schema-madurai"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF registration mandatory for granite and textile units in Madurai?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Granite processing units, textile mills and powerloom clusters in Madurai are mandatorily covered under EPF if they employ 20 or more workers, including contract and migrant labour.",
              },
            },
            {
              "@type": "Question",
              name: "Are powerloom and MSME units in Madurai covered under ESIC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Powerloom units, MSMEs and processing units employing 10 or more workers are covered under ESIC if wages are within the notified limit, including contract labour.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF and ESIC compliance risks in Madurai industries?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include non-coverage of contract workers, incorrect wage bifurcation, under-reporting of granite processing manpower, missing ECR filings and non-compliance with NWC 2025 wage rules.",
              },
            },
            {
              "@type": "Question",
              name: "Does the New Wage Code 2025 affect Madurai textile and granite units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The New Wage Code 2025 impacts basic wage calculations, PF contribution levels and allowance structuring for Madurai’s textile mills, powerloom units and granite industries.",
              },
            },
          ],
        })}
      </Script>

      {/* ========= PAGE CONTENT ========= */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMaduraiDist} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMaduraiDist} />
      </FadeInWhenVisible>

      {/* ========= CONVERSION TRACKING ========= */}
      <Script id="conversion-tracking-madurai" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            el.addEventListener('click', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'phone_click', {
                  event_category: 'conversion',
                  event_label: el.getAttribute('href'),
                  value: 5
                });
              }
            });
          });

          document
            .querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]')
            .forEach(el => {
              el.addEventListener('click', () => {
                if (typeof gtag === 'function') {
                  gtag('event', 'whatsapp_click', {
                    event_category: 'conversion',
                    event_label: window.location.pathname,
                    value: 5
                  });
                }
              });
            });

          document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'form_submission', {
                  event_category: 'lead',
                  event_label: window.location.pathname,
                  value: 10
                });
              }
            });
          });
        `}
      </Script>
    </>
  );
}
