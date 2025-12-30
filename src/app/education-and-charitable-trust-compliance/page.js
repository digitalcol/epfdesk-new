import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataEducation, sectionsEducationCharitable } from "@/utils/data";
export const metadata = {
  title:
    "Education & Charitable Trust EPF & ESIC Compliance India | Schools, Colleges, NGOs | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for educational institutions and charitable trusts across India. Specialized support for schools, colleges, universities, hospitals, and NGOs including PF/ESI registration, statutory audits, contractor compliance, and monthly ECR filings.",

  keywords: [
    "education EPF compliance India",
    "charitable trust PF ESIC",
    "school PF ESIC compliance",
    "college EPF ESIC registration",
    "NGO PF compliance India",
    "hospital trust ESIC compliance",
    "educational institution labour compliance",
    "PF audit for schools",
    "ESIC compliance charitable trust",
    "EPFDesk India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/education-and-charitable-trust-compliance",
  },

  openGraph: {
    title:
      "Education & Charitable Trust EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for schools, colleges, universities, hospitals, and charitable trusts across India. Expert handling of statutory registration, audits, contractor labour compliance, and ongoing EPF/ESIC operations.",

    url: "https://epfdesk.com/education-and-charitable-trust-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Education and Charitable Trust EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Education & Charitable Trust EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for schools, colleges, NGOs, hospitals, and charitable trusts across India. Registration, audits, contractor compliance, and monthly statutory filings handled end-to-end.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Education & Charitable Trust EPF & ESIC Compliance India | Schools,
          Colleges & NGOs | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for educational institutions and charitable trusts across India. Support for schools, colleges, universities, hospitals, and NGOs including PF/ESI registration, audits, contractor compliance, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="education EPF compliance India, charitable trust PF ESIC, school PF ESIC, college EPF ESIC, NGO PF compliance, hospital trust ESIC compliance, educational institution labour compliance, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/education-and-charitable-trust-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Education & Charitable Trust EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for schools, colleges, universities, hospitals, and charitable trusts across India. Registration, audits, contractor labour compliance, and ongoing EPF/ESIC support."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/education-and-charitable-trust-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Education & Charitable Trust EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for schools, colleges, NGOs, hospitals, and charitable trusts across India. End-to-end statutory compliance and advisory."
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
            name: "EPFdesk - Education and charitable trust Compliance ",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/education-and-charitable-trust-compliance",
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
        id="faq-education-charitable-india"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for schools and colleges in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Schools, colleges, universities, and other educational institutions are required to comply with EPF and ESIC laws once statutory employee thresholds are met. Coverage applies to teaching, non-teaching, and eligible contract staff.",
              },
            },
            {
              "@type": "Question",
              name: "Do charitable trusts and NGOs need to register under EPF and ESIC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Charitable trusts and NGOs are not exempt from EPF and ESIC laws solely due to their non-profit status. Applicability depends on employee strength, wage limits, and the nature of activities performed.",
              },
            },
            {
              "@type": "Question",
              name: "Are hospitals and educational trusts covered under ESIC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Hospitals and educational trusts are generally covered under ESIC once eligibility criteria are satisfied. Coverage may include doctors, nursing staff, administrative employees, and support staff, subject to wage thresholds.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF and ESIC compliance risks for educational institutions?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include non-enrolment of eligible staff, incorrect wage structuring, exclusion of allowances from PF wages, delayed remittances, and non-compliance by outsourced service providers.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 affect schools, colleges, and trusts?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The New Wage Code 2025 impacts EPF and ESIC calculations by redefining wage components. Educational institutions and trusts with high allowance structures may face increased contribution liabilities if payroll is not restructured correctly.",
              },
            },
            {
              "@type": "Question",
              name: "How does EPFDesk support educational institutions and charitable trusts?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPFDesk provides end-to-end EPF and ESIC compliance services including registration, payroll restructuring under NWC 2025, contractor audits, inspection handling, monthly filings, and statutory advisory across India.",
              },
            },
          ],
        })}
      </Script>

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataEducation} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsEducationCharitable} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsRetailSector} />
      </FadeInWhenVisible> */}
      {/* <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
