import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataLogistics, sectionsLogistics } from "@/utils/data";
export const metadata = {
  title:
    "Logistics, Warehousing & Road Transport EPF & ESIC Compliance India | Fleet & Contract Labour | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for logistics companies, warehousing operators, fleet owners, and road transport businesses across India. Expertise in driver and loader ESIC coverage, contractor labour compliance, PF/ESI registration, statutory audits, and monthly ECR filings.",

  keywords: [
    "logistics EPF compliance India",
    "warehousing PF ESIC compliance",
    "road transport labour compliance",
    "driver ESIC compliance India",
    "fleet operator PF ESIC",
    "contract labour compliance logistics",
    "warehouse PF audit",
    "transport company ESIC compliance",
    "PF ESIC audit logistics sector",
    "EPFDesk India",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/logistics-warehousing-roadTransport-compliance",
  },

  openGraph: {
    title:
      "Logistics, Warehousing & Road Transport EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for logistics providers, warehouses, fleet operators, and transport companies across India. Contractor labour audits, driver ESIC coverage, and end-to-end EPF/ESIC statutory compliance.",

    url: "https://epfdesk.com/logistics-warehousing-roadTransport-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Logistics Warehousing Road Transport EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Logistics & Transport EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for logistics companies, warehouses, fleet owners, and transport operators across India. Driver ESIC, contractor compliance, and monthly PF/ESI filings handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Logistics, Warehousing & Road Transport EPF & ESIC Compliance India |
          Fleet & Contract Labour | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for logistics companies, warehousing operators, fleet owners, and road transport businesses across India. Support includes driver ESIC coverage, contractor labour compliance, PF/ESI registration, audits, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="logistics EPF compliance India, warehousing PF ESIC, road transport labour compliance, driver ESIC India, fleet operator PF ESIC, contractor compliance logistics, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/logistics-warehousing-roadTransport-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Logistics, Warehousing & Road Transport EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for logistics providers, warehouses, fleet operators, and transport companies across India. Contractor audits, driver ESIC coverage, and end-to-end statutory compliance."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/logistics-warehousing-roadTransport-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Logistics & Road Transport EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for logistics companies, warehouses, and transport operators across India. End-to-end statutory compliance handled by experts."
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
            name: "EPFdesk - Logistics, Warehousing and Road Transport Compliance",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/logistics-warehousing-roadTransport-compliance",
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
        id="faq-logistics-transport-india"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for logistics and transport companies in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Logistics, warehousing, and road transport companies are required to comply with EPF and ESIC laws once statutory thresholds are met. Coverage may include office staff, warehouse workers, drivers, loaders, and eligible contract labour.",
              },
            },
            {
              "@type": "Question",
              name: "Are drivers and loaders covered under ESIC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Drivers, helpers, and loaders may be covered under ESIC depending on wage limits and employment structure. Coverage applies to both direct employees and eligible contractual personnel engaged by transport operators.",
              },
            },
            {
              "@type": "Question",
              name: "Do warehousing units require EPF and ESIC registration?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Warehousing units must register under EPF and ESIC once eligibility conditions are satisfied. Coverage generally includes warehouse staff, inventory handlers, supervisors, security personnel, and contract workers.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF and ESIC compliance risks in the logistics sector?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include non-enrolment of drivers and loaders, contractor non-compliance, improper wage structuring, delayed remittances, high workforce turnover without proper exits, and incomplete statutory records during inspections.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 affect logistics and transport businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The New Wage Code 2025 impacts EPF and ESIC calculations by redefining wage components. Logistics and transport businesses with allowance-heavy or trip-based pay structures may face increased contribution liabilities if payroll is not aligned correctly.",
              },
            },
            {
              "@type": "Question",
              name: "How does EPFDesk support logistics, warehousing, and transport companies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPFDesk provides end-to-end EPF and ESIC compliance services including registration, payroll restructuring under NWC 2025, contractor audits, driver and labour coverage review, inspection handling, monthly filings, and statutory advisory across India.",
              },
            },
          ],
        })}
      </Script>

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataLogistics} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsLogistics} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsHealthcare} />
      </FadeInWhenVisible> */}
      {/* <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
