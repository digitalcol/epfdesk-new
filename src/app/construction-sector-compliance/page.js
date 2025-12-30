import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataConstruction, sectionsConstruction } from "@/utils/data";
export const metadata = {
  title:
    "Bangalore Construction Sector EPF & ESIC Compliance | NWC 2025 Labour & Contractor Risk Management | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance for construction companies and real estate developers in Bangalore. Specialized support for contractor labour management, NWC 2025 wage structuring, PF/ESI registration, site audits, and monthly statutory filings.",

  keywords: [
    "Bangalore construction PF consultant",
    "construction ESIC compliance Bangalore",
    "contract labour PF ESIC construction",
    "real estate EPF compliance Bangalore",
    "NWC 2025 construction payroll",
    "site labour PF audit",
    "contractor compliance construction sector",
    "PF ESIC audit construction projects",
    "EPFDesk construction compliance",
  ],

  alternates: {
    canonical: "https://epfdesk.com/construction-sector-compliance",
  },

  openGraph: {
    title: "Construction Sector EPF & ESIC Compliance | Bangalore | EPFDesk",

    description:
      "PF & ESIC compliance for construction and real estate projects in Bangalore. Contractor labour audits, NWC 2025 payroll restructuring, PF/ESI registration, and end-to-end statutory compliance for active sites.",

    url: "https://epfdesk.com/construction-sector-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Construction Sector PF ESIC Compliance Bangalore",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Construction Sector EPF & ESIC Compliance | Bangalore | EPFDesk",

    description:
      "EPF & ESIC compliance for construction companies and real estate developers in Bangalore. Contractor labour audits, NWC 2025 payroll structuring, and PF/ESI monthly operations handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Bangalore Construction Sector EPF & ESIC Compliance | NWC 2025 Labour
          & Contractor Risk Management | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance for construction companies and real estate developers in Bangalore. Contractor labour management, NWC 2025 wage structuring, PF/ESI registration, site audits, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="Bangalore construction PF consultant, construction ESIC compliance Bangalore, contractor labour PF ESIC, real estate PF compliance Bangalore, NWC 2025 construction payroll, site labour audit PF ESIC, EPFDesk construction compliance"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/construction-sector-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Construction Sector EPF & ESIC Compliance | Bangalore | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for construction and real estate projects in Bangalore. Contractor audits, NWC 2025 payroll restructuring, and end-to-end statutory compliance."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/construction-sector-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Construction Sector EPF & ESIC Compliance | Bangalore | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for construction projects in Bangalore. Contractor labour audits, NWC 2025 payroll compliance, and PF/ESI statutory support."
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
            name: "EPFdesk - Construction Sector Compliance",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/construction-sector-compliance",
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
        id="faq-construction-sector"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for construction companies in Bangalore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Construction companies and real estate developers are required to comply with EPF and ESIC laws once statutory thresholds are met. Coverage typically includes permanent staff, site labour, and eligible contract workers.",
              },
            },
            {
              "@type": "Question",
              name: "Are contract labour and site workers covered under EPF and ESIC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Contract labour engaged at construction sites may be covered under EPF and ESIC. Principal employers are responsible for ensuring compliance when contractors fail to register or remit contributions.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF and ESIC risks in the construction sector?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include non-registration of contractors, exclusion of allowances from PF wages, delayed remittances, incomplete muster rolls, and non-compliance during inspections at active construction sites.",
              },
            },
            {
              "@type": "Question",
              name: "How does NWC 2025 impact construction sector payroll and compliance?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The New Wage Code 2025 impacts construction payroll by redefining wage components for EPF and ESIC calculations. Improper wage structuring can lead to retrospective liabilities and penalties during audits.",
              },
            },
            {
              "@type": "Question",
              name: "How does EPFDesk support construction and real estate companies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPFDesk supports construction companies with EPF and ESIC registration, contractor compliance audits, site inspection handling, NWC 2025 wage structuring, monthly filings, and statutory advisory for ongoing projects.",
              },
            },
          ],
        })}
      </Script>

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataConstruction} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsConstruction} />
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
