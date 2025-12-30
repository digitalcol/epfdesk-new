import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  heroDataMsmeManufacturing,
  pastelCardsMsmeManufacturing,
  sectionsMsmeManufacturing,
} from "@/utils/data";
export const metadata = {
  title:
    "MSME Manufacturing & Trading EPF & ESIC Compliance India | PF, ESIC & Labour Law | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for MSME manufacturing and trading businesses across India. Specialized support for small and medium enterprises covering PF/ESI registration, contractor labour compliance, statutory audits, NWC 2025 wage structuring, and monthly ECR filings.",

  keywords: [
    "MSME EPF compliance India",
    "MSME PF ESIC registration",
    "small business PF ESIC",
    "trading company EPF compliance",
    "manufacturing MSME labour compliance",
    "NWC 2025 MSME payroll",
    "contract labour compliance MSME",
    "PF audit MSME sector",
    "ESIC compliance small enterprises",
    "EPFDesk India",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/msme-manufacturing-trading-sector-compliance",
  },

  openGraph: {
    title:
      "MSME Manufacturing & Trading EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for MSME manufacturing and trading businesses across India. Registration, audits, contractor labour management, NWC 2025 payroll structuring, and end-to-end statutory compliance.",

    url: "https://epfdesk.com/msme-manufacturing-trading-sector-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk MSME Manufacturing Trading EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "MSME Manufacturing & Trading EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for MSME manufacturing and trading businesses across India. PF/ESI registration, audits, contractor compliance, and monthly statutory filings handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          MSME Manufacturing & Trading EPF & ESIC Compliance India | PF, ESIC &
          Labour Law | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for MSME manufacturing and trading businesses across India. Support includes PF/ESI registration, contractor labour compliance, statutory audits, NWC 2025 wage structuring, and monthly ECR filings."
        />

        <meta
          name="keywords"
          content="MSME EPF compliance India, MSME PF ESIC, small business labour compliance, trading company EPF, manufacturing MSME PF ESIC, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/msme-manufacturing-trading-sector-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="MSME Manufacturing & Trading EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for MSME manufacturing and trading businesses across India. End-to-end statutory compliance and advisory."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/msme-manufacturing-trading-sector-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MSME Manufacturing & Trading EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for MSME manufacturing and trading businesses across India. End-to-end statutory compliance handled by experts."
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
            name: "EPFdesk - MSME manufacturing trading sector Compliance ",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/msme-manufacturing-trading-sector-compliance",
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
        id="faq-msme-manufacturing-trading-india"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for MSME manufacturing and trading businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. MSME manufacturing and trading businesses must comply with EPF and ESIC laws once statutory employee thresholds are met. Coverage applies to permanent staff, shop-floor workers, helpers, clerical employees, and eligible contract labour.",
              },
            },
            {
              "@type": "Question",
              name: "Do small manufacturing units and traders need EPF registration?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Even small manufacturing units and trading establishments are required to obtain EPF registration if they employ the minimum number of workers prescribed under the EPF Act. Size of business or turnover does not exempt statutory compliance.",
              },
            },
            {
              "@type": "Question",
              name: "Are contract labour and casual workers covered under EPF and ESIC for MSMEs?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Contract labour, casual workers, and daily wage employees engaged by MSMEs must be covered under EPF and ESIC if eligibility conditions are met. Principal employers remain liable if contractors fail to comply.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF and ESIC compliance mistakes made by MSMEs?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common MSME compliance issues include delayed registrations, incorrect wage structuring, exclusion of helpers or contract staff, delayed monthly filings, and mismatch between payroll records and statutory returns.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 affect MSME payroll structures?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The New Wage Code 2025 impacts MSMEs by redefining wage components for EPF and ESIC calculations. Allowance-heavy salary structures may lead to higher statutory liabilities if payroll is not proactively restructured.",
              },
            },
            {
              "@type": "Question",
              name: "How does EPFDesk help MSME manufacturing and trading businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPFDesk provides complete EPF and ESIC compliance support for MSMEs including registrations, contractor audits, payroll restructuring under NWC 2025, inspection handling, monthly filings, and ongoing statutory advisory across India.",
              },
            },
          ],
        })}
      </Script>

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataMsmeManufacturing} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsMsmeManufacturing} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsMsmeManufacturing} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
