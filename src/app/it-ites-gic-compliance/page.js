import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import {
  heroDataItCompliance,
  itComplianceFAQ,
  pastelCardsItCompliance,
  sectionsItCompliance,
} from "@/utils/data";
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title:
    "IT, ITES & GIC EPF & ESIC Compliance India | NWC 2025 Payroll & Labour Advisory | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for IT companies, ITES firms, and Global In-House Centres (GICs) across India. Expertise in NWC 2025 wage restructuring, variable pay treatment, contractor and captive workforce compliance, PF/ESI registration, audits, and monthly ECR filings.",

  keywords: [
    "IT EPF compliance India",
    "ITES PF ESIC compliance",
    "GIC labour compliance India",
    "software company PF ESIC",
    "variable pay EPF compliance",
    "NWC 2025 IT payroll",
    "contractor compliance IT sector",
    "PF audit IT companies",
    "ESIC compliance ITES",
    "EPFDesk India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/it-ites-gic-compliance",
  },

  openGraph: {
    title: "IT, ITES & GIC EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for IT companies, ITES operations, and Global In-House Centres across India. NWC 2025 payroll restructuring, contractor audits, captive workforce compliance, and end-to-end statutory support.",

    url: "https://epfdesk.com/it-ites-gic-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk IT ITES GIC EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "IT, ITES & GIC EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for IT companies, ITES firms, and GICs across India. NWC 2025 payroll audits, variable pay compliance, contractor management, and monthly statutory filings handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          IT, ITES & GIC EPF & ESIC Compliance India | NWC 2025 Payroll & Labour
          Advisory | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for IT companies, ITES firms, and Global In-House Centres across India. Support includes NWC 2025 payroll restructuring, variable pay compliance, contractor audits, PF/ESI registration, and monthly statutory filings."
        />

        <meta
          name="keywords"
          content="IT EPF compliance India, ITES PF ESIC, GIC labour compliance, software company PF ESIC, variable pay EPF, NWC 2025 IT payroll, EPFDesk India"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/it-ites-gic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="IT, ITES & GIC EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for IT companies, ITES operations, and Global In-House Centres across India. NWC 2025 payroll restructuring and end-to-end statutory compliance."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/it-ites-gic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IT, ITES & GIC EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for IT, ITES, and GIC organisations across India. Payroll restructuring, contractor compliance, and statutory advisory handled by experts."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-it-ites"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "EPFdesk - IT/ITES and GIC Compliance ",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/it-ites-gic-compliance",
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

      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataItCompliance} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsItCompliance} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsItCompliance} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={itComplianceFAQ} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
