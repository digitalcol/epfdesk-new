import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataFoodAndBevarage, sectionsFoodAndBevarage } from "@/utils/data";
export const metadata = {
  title:
    "Food & Beverage Sector EPF & ESIC Compliance India | Restaurants, Hotels & Food Processing | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for food and beverage businesses across India. Specialized support for restaurants, hotels, cloud kitchens, breweries, food processing units, and QSR chains including PF/ESI registration, contractor compliance, statutory audits, and monthly ECR filings.",

  keywords: [
    "food and beverage EPF compliance India",
    "restaurant PF ESIC compliance",
    "hotel EPF ESIC India",
    "cloud kitchen PF ESIC",
    "food processing PF ESIC",
    "brewery EPF compliance",
    "QSR labour compliance India",
    "contractor compliance food industry",
    "PF audit food sector",
    "EPFDesk India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/food-and-bevarage-compliance",
  },

  openGraph: {
    title: "Food & Beverage Sector EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for restaurants, hotels, cloud kitchens, breweries, and food processing units across India. End-to-end statutory compliance including registrations, audits, contractor labour management, and ongoing EPF/ESIC operations.",

    url: "https://epfdesk.com/food-and-bevarage-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Food and Beverage Sector EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Food & Beverage EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for restaurants, hotels, cloud kitchens, breweries, and food processing businesses across India. Registration, audits, and monthly statutory filings handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Food & Beverage Sector EPF & ESIC Compliance India | Restaurants,
          Hotels & Food Processing | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for food and beverage businesses across India. Support for restaurants, hotels, cloud kitchens, breweries, and food processing units including PF/ESI registration, audits, contractor compliance, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="food and beverage EPF compliance India, restaurant PF ESIC, hotel EPF ESIC, cloud kitchen PF ESIC, food processing PF ESIC, brewery EPF compliance, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/food-and-bevarage-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Food & Beverage Sector EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for restaurants, hotels, cloud kitchens, breweries, and food processing units across India. End-to-end statutory compliance and advisory."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/food-and-bevarage-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Food & Beverage EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for food and beverage businesses across India. Restaurants, hotels, cloud kitchens, breweries, and food processing units supported end-to-end."
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
            name: "EPFdesk - Food and Bevarage Compliance ",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/food-and-bevarage-compliance",
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
        id="faq-food-beverage-india"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for restaurants and hotels in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Restaurants, hotels, and hospitality businesses are required to comply with EPF and ESIC laws once statutory thresholds are met. Coverage generally includes kitchen staff, service staff, housekeeping, and eligible contract workers.",
              },
            },
            {
              "@type": "Question",
              name: "Do cloud kitchens and food delivery kitchens need EPF and ESIC registration?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Cloud kitchens must register under EPF and ESIC when applicable thresholds are crossed. Coverage typically includes kitchen workers, helpers, cleaners, and eligible delivery or contract personnel.",
              },
            },
            {
              "@type": "Question",
              name: "Are contract workers and seasonal staff covered under EPF and ESIC in the food sector?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Contract workers and seasonal staff may be covered under EPF and ESIC depending on wage levels and employment terms. Principal employers are responsible for compliance when contractors fail to meet statutory obligations.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF and ESIC compliance risks in the food and beverage industry?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include non-enrolment of eligible staff, exclusion of allowances from PF wages, high worker attrition without proper exits, contractor non-compliance, and incomplete records during inspections.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 affect food and beverage businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The New Wage Code 2025 impacts payroll structuring by redefining wage components for EPF and ESIC calculations. Food and beverage businesses with high allowances or incentive-based pay structures may face increased contribution liabilities if not restructured correctly.",
              },
            },
            {
              "@type": "Question",
              name: "How does EPFDesk support food and beverage businesses across India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPFDesk provides end-to-end EPF and ESIC compliance services including registration, payroll restructuring under NWC 2025, contractor audits, inspection handling, monthly filings, and statutory advisory for food and beverage businesses across India.",
              },
            },
          ],
        })}
      </Script>

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataFoodAndBevarage} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsFoodAndBevarage} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsMsmeManufacturing} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
