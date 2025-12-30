import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  heroDataAutomotive,
  pastelCardsAutomotive,
  sectionsAutomotive,
} from "@/utils/data";
export const metadata = {
  title:
    "Bangalore E-Commerce, Gig Economy & Cloud Kitchen EPF & ESIC Compliance | NWC 2025 Ready | EPFDesk",

  description:
    "EPFDesk delivers specialized EPF & ESIC compliance for e-commerce companies, gig economy employers, and cloud kitchens in Bangalore. Expertise in NWC 2025 wage structuring, delivery partner compliance, contractor audits, PF/ESI registration, and monthly ECR filings.",

  keywords: [
    "Bangalore EPF consultant",
    "Bangalore ESIC consultant",
    "e commerce PF ESIC compliance",
    "gig economy EPF ESIC India",
    "cloud kitchen PF ESIC",
    "delivery partner ESIC compliance",
    "platform worker PF compliance",
    "NWC 2025 payroll structuring",
    "contractor compliance Bangalore",
    "EPFDesk Bangalore",
  ],

  alternates: {
    canonical:
      "https://epfdesk.com/ecommerce-gig-economy-cloud-kitchens-compliance",
  },

  openGraph: {
    title:
      "E-Commerce, Gig Economy & Cloud Kitchen EPF & ESIC Compliance | Bangalore | EPFDesk",

    description:
      "PF & ESIC compliance for Bangalore-based e-commerce platforms, gig economy operators, and cloud kitchens. NWC 2025 payroll restructuring, delivery workforce audits, contractor verification, and end-to-end statutory compliance.",

    url: "https://epfdesk.com/ecommerce-gig-economy-cloud-kitchens-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk E-Commerce Gig Economy Cloud Kitchen EPF ESIC Compliance",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Gig Economy & Cloud Kitchen EPF ESIC Compliance | Bangalore | EPFDesk",

    description:
      "EPF & ESIC compliance for e-commerce firms, gig platforms, and cloud kitchens in Bangalore. NWC 2025 payroll audits, delivery partner compliance, and monthly PF/ESI operations handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Bangalore E-Commerce, Gig Economy & Cloud Kitchen EPF & ESIC
          Compliance | NWC 2025 Ready | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance for e-commerce platforms, gig economy employers, and cloud kitchens in Bangalore. Expertise in NWC 2025 wage structuring, delivery partner compliance, contractor audits, PF & ESI registration, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="Bangalore EPF consultant, Bangalore ESIC consultant, e-commerce EPF compliance, gig economy ESIC compliance, cloud kitchen PF ESIC, delivery partner ESIC, NWC 2025 payroll compliance, platform worker compliance India, contractor audit EPF, EPFDesk Bangalore"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/ecommerce-gig-economy-cloud-kitchens-compliance"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="E-Commerce, Gig Economy & Cloud Kitchen EPF & ESIC Compliance | Bangalore | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for e-commerce companies, gig platforms, and cloud kitchens in Bangalore. NWC 2025 wage restructuring, delivery workforce audits, and statutory compliance handled end-to-end."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/ecommerce-gig-economy-cloud-kitchens-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gig Economy & Cloud Kitchen EPF ESIC Compliance | Bangalore | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for gig workers, delivery partners, and cloud kitchens in Bangalore. NWC 2025 payroll structuring and PF audit defense experts."
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
            name: "EPFdesk - E-Commerce,Gig Economy and Cloud Kitchens Compliance",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/automotive-and-auto-ancillary",
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
        id="faq-ecommerce-gig-cloudkitchen"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is EPF and ESIC mandatory for e-commerce companies in Bangalore?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. E-commerce companies employing eligible workers are required to comply with EPF and ESIC laws. Applicability depends on employee count, wage thresholds, and nature of employment, including contractual and delivery workforce.",
              },
            },
            {
              "@type": "Question",
              name: "Are gig workers and delivery partners covered under EPF or ESIC?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Gig workers and delivery partners may fall under EPF or ESIC coverage depending on the level of control, payment structure, and contractual relationship. Misclassification is a key focus area during inspections and audits.",
              },
            },
            {
              "@type": "Question",
              name: "Do cloud kitchens need EPF and ESIC registration?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Cloud kitchens are required to obtain EPF and ESIC registration once statutory thresholds are met. Coverage typically includes kitchen staff, delivery personnel, helpers, and contract workers.",
              },
            },
            {
              "@type": "Question",
              name: "What are common EPF and ESIC compliance risks for gig economy employers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common risks include incorrect worker classification, exclusion of incentives from PF wages, non-registration of contractors, delayed remittances, and incomplete records during inspections.",
              },
            },
            {
              "@type": "Question",
              name: "How does EPFDesk help e-commerce and cloud kitchen businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPFDesk provides end-to-end EPF and ESIC compliance including registration, wage structuring aligned with NWC 2025, contractor compliance audits, monthly filings, inspection handling, and statutory advisory.",
              },
            },
          ],
        })}
      </Script>

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataAutomotive} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsAutomotive} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsAutomotive} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible> */}
    </>
  );
};

export default page;
