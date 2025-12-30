import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataTextile, sectionsTextile } from "@/utils/data";
export const metadata = {
  title:
    "Textile & Garments EPF & ESIC Compliance India | Factories, Export Units & Contractors | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for textile and garment manufacturing units across India. Specialized support for spinning, weaving, dyeing, garmenting, and export units including PF/ESI registration, piece-rate wage compliance, contractor labour audits, NWC 2025 payroll structuring, and monthly ECR filings.",

  keywords: [
    "textile EPF compliance India",
    "garment factory PF ESIC",
    "textile labour compliance",
    "piece rate wage EPF compliance",
    "export garment unit PF ESIC",
    "contract labour compliance textile",
    "NWC 2025 textile payroll",
    "PF audit textile industry",
    "ESIC compliance garment workers",
    "EPFDesk India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/textile-and-garments-compliance",
  },

  openGraph: {
    title: "Textile & Garments EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for textile mills, garment factories, and export units across India. Piece-rate wage compliance, contractor labour audits, NWC 2025 payroll restructuring, and end-to-end statutory compliance.",

    url: "https://epfdesk.com/textile-and-garments-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Textile and Garments EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Textile & Garments EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for textile mills, garment factories, and export units across India. Contractor compliance, piece-rate wage audits, and monthly statutory filings handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Textile & Garments EPF & ESIC Compliance India | Factories, Export
          Units & Contractors | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for textile and garment manufacturing units across India. Support includes PF/ESI registration, piece-rate wage compliance, contractor labour audits, NWC 2025 payroll structuring, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="textile EPF compliance India, garment factory PF ESIC, textile labour compliance, piece rate wage EPF, export garment PF ESIC, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/textile-and-garments-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Textile & Garments EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for textile mills, garment factories, and export units across India. Contractor audits, piece-rate wage compliance, and end-to-end statutory advisory."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/textile-and-garments-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Textile & Garments EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for textile and garment units across India. Export factories, piece-rate wages, and contractor compliance handled end-to-end."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-sme-msme"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "EPFdesk - Textile and Garments Compliance",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/textile-and-garments-compliance",
            telephone: "+91-9945933333",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Church Street",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 12.9716,
              longitude: 77.5946,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            priceRange: "₹₹",
            areaServed: [
              { "@type": "City", name: "Bangalore" },
              { "@type": "Place", name: "Peenya" },
              { "@type": "Place", name: "Whitefield" },
              { "@type": "Place", name: "Electronic City" },
              { "@type": "Place", name: "Koramangala" },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "47",
            },
          }),
        }}
      />
      {/* ================== FAQ SCHEMA ================== */}
      <Script
        id="faq-textile-garments-india"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for textile and garment factories in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPF and ESIC are mandatory for textile mills and garment factories once statutory employee thresholds are met. Coverage applies to permanent workers, piece-rate workers, contract labour, and eligible apprentices depending on wages and employment conditions.",
              },
            },
            {
              "@type": "Question",
              name: "How does EPF apply to piece-rate and production-based workers in textiles?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPF applies to piece-rate and production-based textile workers based on earned wages. Employers must ensure correct wage computation, minimum wage alignment, and accurate EPF contributions even when workers are paid per piece or output.",
              },
            },
            {
              "@type": "Question",
              name: "Are contract labour and job workers covered under EPF and ESIC in garment units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Contract labour engaged through contractors or manpower agencies is covered under EPF and ESIC. The principal employer, including garment factories and export units, remains legally responsible for compliance failures by contractors.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 impact textile and garment payroll?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The New Wage Code 2025 impacts textile and garment units by redefining wage components used for EPF and ESIC calculations. Allowance-heavy and incentive-based payroll structures may require restructuring to avoid future compliance risks and retrospective liabilities.",
              },
            },
            {
              "@type": "Question",
              name: "Is EPF and ESIC compliance mandatory for export-oriented garment units?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Export-oriented garment units are fully subject to EPF and ESIC laws. Non-compliance can lead to inspections, penalties, and serious risks during buyer audits, SEDEX reviews, and international compliance assessments.",
              },
            },
            {
              "@type": "Question",
              name: "How does EPFDesk support textile and garment manufacturers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPFDesk provides end-to-end EPF and ESIC compliance for textile mills and garment factories including registration, piece-rate wage audits, contractor compliance checks, payroll restructuring under NWC 2025, inspection handling, and monthly statutory filings across India.",
              },
            },
          ],
        })}
      </Script>

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataTextile} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsTextile} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsAutomotive} />
      </FadeInWhenVisible> */}
      {/* <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
