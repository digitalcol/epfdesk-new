import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import { heroDataStartup, sectionsStartup } from "@/utils/data";
export const metadata = {
  title:
    "Startup Labour & HR EPF & ESIC Compliance India | Payroll, HR & NWC 2025 | EPFDesk",

  description:
    "EPFDesk provides labour law, HR, EPF & ESIC compliance services for startups across India. Expert support for early-stage and scaling startups covering PF/ESI registration, payroll structuring under NWC 2025, contractor compliance, statutory audits, and monthly ECR filings.",

  keywords: [
    "startup EPF compliance India",
    "startup ESIC registration",
    "startup labour law compliance",
    "HR compliance for startups India",
    "payroll compliance startup",
    "NWC 2025 startup payroll",
    "contractor compliance startups",
    "PF audit startup India",
    "ESIC compliance new companies",
    "EPFDesk India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/startup-labour-and-hr-compliance",
  },

  openGraph: {
    title: "Startup Labour & HR EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for startups across India. Labour law advisory, HR compliance setup, NWC 2025 payroll structuring, contractor management, and end-to-end statutory compliance for growing companies.",

    url: "https://epfdesk.com/startup-labour-and-hr-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Startup Labour and HR Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Startup Labour & HR EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for startups across India. HR setup, labour law advisory, payroll structuring, and monthly statutory filings handled end-to-end.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Startup Labour & HR EPF & ESIC Compliance India | Payroll, HR & NWC
          2025 | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides labour law, HR, EPF & ESIC compliance services for startups across India. Support includes PF/ESI registration, HR compliance setup, payroll structuring under NWC 2025, contractor compliance, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="startup EPF compliance India, startup ESIC registration, startup labour law compliance, HR compliance startups, payroll compliance startup, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/startup-labour-and-hr-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Startup Labour & HR EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for startups across India. HR compliance setup, labour law advisory, and end-to-end statutory compliance for growing companies."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/startup-labour-and-hr-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Startup Labour & HR EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for startups across India. HR setup, payroll structuring, contractor compliance, and statutory advisory handled by experts."
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
            name: "EPFdesk - Startup labour and HR compliance ",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/startup-labour-and-hr-compliance",
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
        id="faq-startup-labour-hr-india"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for startups in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPF and ESIC become mandatory for startups once the applicable employee thresholds are crossed. Coverage applies to full-time employees, eligible contractual staff, and certain categories of interns depending on wage and employment conditions.",
              },
            },
            {
              "@type": "Question",
              name: "When should a startup register for EPF and ESIC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A startup must register for EPF and ESIC immediately after crossing statutory employee limits. Delayed registration can attract penalties, interest, and retrospective compliance liabilities during inspections or funding due diligence.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPF and ESIC apply to startup founders, directors, and co-founders?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPF applicability for founders and directors depends on employment structure, remuneration, and control. ESIC coverage applies if the individual is classified as an employee and meets wage eligibility criteria.",
              },
            },
            {
              "@type": "Question",
              name: "How does the New Wage Code 2025 impact startup payroll structures?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The New Wage Code 2025 impacts startups by redefining wage components used for EPF and ESIC calculations. Startups using allowance-heavy or variable pay structures may face increased statutory contributions if payroll is not restructured.",
              },
            },
            {
              "@type": "Question",
              name: "Are contractors, consultants, and gig workers covered under EPF and ESIC in startups?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Contractors and consultants may fall under EPF and ESIC coverage if the engagement reflects an employer-employee relationship. Startups remain principal employers and are liable for compliance failures by vendors or manpower agencies.",
              },
            },
            {
              "@type": "Question",
              name: "How does EPFDesk help startups with labour law and HR compliance?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPFDesk supports startups with EPF and ESIC registration, HR compliance setup, payroll structuring, contractor audits, inspection handling, investor due diligence readiness, and ongoing monthly statutory filings across India.",
              },
            },
          ],
        })}
      </Script>

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataStartup} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsStartup} />
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
