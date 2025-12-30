import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  heroDataConstruction,
  heroDataFinancial,
  sectionsFinancial,
} from "@/utils/data";
export const metadata = {
  title:
    "Financial Services & Banking Sector EPF & ESIC Compliance India | NBFCs, FinTech & Banks | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for banks, NBFCs, FinTech companies, insurance firms, and financial service providers across India. Expertise in statutory audits, contractor and sales-force compliance, PF/ESI registration, and ongoing monthly filings.",

  keywords: [
    "financial services EPF compliance India",
    "banking sector PF ESIC",
    "NBFC EPF ESIC compliance",
    "FinTech labour compliance India",
    "insurance company PF ESIC",
    "sales staff PF ESIC compliance",
    "contractor compliance financial sector",
    "PF audit financial services",
    "ESIC compliance banking sector",
    "EPFDesk India",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/financial-services-and-banking-sector-compliance",
  },

  openGraph: {
    title:
      "Financial Services & Banking Sector EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for banks, NBFCs, FinTechs, insurance companies, and financial service providers across India. Statutory audits, contractor labour compliance, and end-to-end EPF/ESIC operations handled by experts.",

    url: "https://epfdesk.com/financial-services-and-banking-sector-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Financial Services and Banking Sector EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Financial Services & Banking Sector EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for banks, NBFCs, FinTechs, and financial service providers across India. Registration, audits, contractor compliance, and monthly statutory filings.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Financial Services & Banking Sector EPF & ESIC Compliance India |
          NBFCs, FinTech & Banks | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for banks, NBFCs, FinTech companies, insurance firms, and financial service providers across India. Support includes PF/ESI registration, audits, contractor compliance, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="financial services EPF compliance India, banking sector PF ESIC, NBFC EPF ESIC, FinTech labour compliance, insurance PF ESIC, sales staff PF ESIC, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/financial-services-and-banking-sector-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Financial Services & Banking Sector EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for banks, NBFCs, FinTechs, and financial service providers across India. Statutory audits, contractor labour compliance, and ongoing EPF/ESIC operations."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/financial-services-and-banking-sector-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Financial Services & Banking Sector EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for banks, NBFCs, FinTechs, and financial service providers across India. End-to-end statutory compliance and advisory."
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
            name: "EPFdesk - Financial Services and Banking Sector Compliance",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/financial-services-and-banking-sector-compliance",
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
        id="faq-financial-services-india"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for banks and financial institutions in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Banks, NBFCs, insurance companies, and financial institutions are required to comply with EPF and ESIC laws once statutory thresholds are met. Coverage generally applies to permanent staff, contractual employees, and eligible outsourced personnel.",
              },
            },
            {
              "@type": "Question",
              name: "Are sales staff, field executives, and relationship managers covered under EPF and ESIC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sales staff, field executives, and relationship managers may be covered under EPF and ESIC depending on their employment structure, wage levels, and degree of employer control. Misclassification is a common compliance risk in the financial services sector.",
              },
            },
            {
              "@type": "Question",
              name: "Do NBFCs and FinTech companies require EPF and ESIC registration?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. NBFCs and FinTech companies are required to register under EPF and ESIC once eligibility conditions are met. Coverage may include technology teams, operations staff, sales personnel, and contract workers.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF and ESIC compliance risks in the financial services sector?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include exclusion of variable pay from PF wages, non-enrolment of sales staff, contractor non-compliance, delayed remittances, and documentation gaps during statutory inspections.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 affect banks and financial service providers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The New Wage Code 2025 impacts EPF and ESIC calculations by redefining wage components. Financial service employers with high incentive or allowance-based pay structures may face increased contribution liabilities if payroll is not aligned correctly.",
              },
            },
            {
              "@type": "Question",
              name: "How does EPFDesk support banks, NBFCs, and FinTech companies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPFDesk provides end-to-end EPF and ESIC compliance support including registration, payroll restructuring under NWC 2025, contractor and sales-force audits, inspection handling, monthly filings, and statutory advisory across India.",
              },
            },
          ],
        })}
      </Script>

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataFinancial} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsFinancial} />
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
