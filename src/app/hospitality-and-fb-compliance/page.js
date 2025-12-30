import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataHospitality, sectionsHospitality } from "@/utils/data";
export const metadata = {
  title:
    "Hospitality & F&B EPF & ESIC Compliance India | Hotels, Restaurants & QSRs | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for the hospitality and food & beverage sector across India. Specialized support for hotels, resorts, restaurants, QSR chains, catering units, and hospitality groups including PF/ESI registration, contractor labour compliance, statutory audits, and monthly ECR filings.",

  keywords: [
    "hospitality EPF compliance India",
    "hotel PF ESIC compliance",
    "restaurant EPF ESIC India",
    "F&B labour compliance India",
    "QSR PF ESIC compliance",
    "catering staff PF ESIC",
    "contract labour compliance hospitality",
    "PF audit hotels restaurants",
    "ESIC compliance hospitality sector",
    "EPFDesk India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/hospitality-and-fb-compliance",
  },

  openGraph: {
    title: "Hospitality & F&B EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for hotels, resorts, restaurants, QSRs, and catering businesses across India. End-to-end statutory compliance including registrations, audits, contractor labour management, and ongoing EPF/ESIC operations.",

    url: "https://epfdesk.com/hospitality-and-fb-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Hospitality and F&B EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Hospitality & F&B EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for hotels, restaurants, QSRs, and hospitality businesses across India. Registration, audits, contractor compliance, and monthly statutory filings handled end-to-end.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Hospitality & F&B EPF & ESIC Compliance India | Hotels, Restaurants &
          QSRs | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for the hospitality and food & beverage sector across India. Support for hotels, resorts, restaurants, QSRs, and catering units including PF/ESI registration, audits, contractor labour compliance, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="hospitality EPF compliance India, hotel PF ESIC, restaurant EPF ESIC, F&B labour compliance, QSR PF ESIC, catering staff PF ESIC, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/hospitality-and-fb-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Hospitality & F&B EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for hotels, resorts, restaurants, QSRs, and catering businesses across India. End-to-end statutory compliance and advisory."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/hospitality-and-fb-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hospitality & F&B EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for hotels, restaurants, QSRs, and hospitality businesses across India. End-to-end statutory compliance handled by experts."
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
            name: "EPFdesk - Hospitality and F&B Compliance ",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/hospitality-and-fb-compliance",
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
        id="faq-hospitality-fb-india"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for hotels and hospitality businesses in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Hotels, resorts, and hospitality businesses are required to comply with EPF and ESIC laws once statutory thresholds are met. Coverage generally includes front office staff, housekeeping, kitchen staff, service teams, and eligible contract workers.",
              },
            },
            {
              "@type": "Question",
              name: "Do restaurants and QSR chains need EPF and ESIC registration?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Restaurants and QSR chains must register under EPF and ESIC when employee and wage thresholds are crossed. Coverage may include chefs, helpers, service staff, cashiers, cleaners, and contractual labour.",
              },
            },
            {
              "@type": "Question",
              name: "Are contract workers and outsourced staff covered under EPF and ESIC in hospitality?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Contract and outsourced workers may be covered under EPF and ESIC depending on wage limits and engagement terms. Principal employers are responsible for compliance if contractors fail to fulfil statutory obligations.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF and ESIC compliance risks in the hospitality sector?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include non-enrolment of eligible staff, high employee turnover without proper exits, exclusion of allowances from PF wages, contractor non-compliance, and documentation gaps during inspections.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 affect hospitality and F&B businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The New Wage Code 2025 impacts EPF and ESIC calculations by redefining wage components. Hospitality businesses with high allowances, service charges, or incentive-based pay may face increased statutory contributions if payroll structures are not aligned.",
              },
            },
            {
              "@type": "Question",
              name: "How does EPFDesk support hospitality and F&B businesses across India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPFDesk provides end-to-end EPF and ESIC compliance services including registration, payroll restructuring under NWC 2025, contractor audits, inspection handling, monthly filings, and statutory advisory for hospitality and F&B businesses across India.",
              },
            },
          ],
        })}
      </Script>

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataHospitality} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsHospitality} />
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
