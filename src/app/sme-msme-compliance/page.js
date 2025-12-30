import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  heroDataSmeMsme,
  pastelCardsSmeMsme,
  sectionsSmeMsme,
  smeMsmeFAQ,
} from "@/utils/data";
export const metadata = {
  title:
    "SME & MSME EPF & ESIC Compliance India | Payroll, PF, ESIC & Labour Law | EPFDesk",

  description:
    "EPFDesk provides EPF & ESIC compliance services for SMEs and MSMEs across India. End-to-end support for PF/ESI registration, statutory audits, contractor labour compliance, payroll structuring under NWC 2025, and monthly ECR filings.",

  keywords: [
    "SME EPF compliance India",
    "MSME PF ESIC compliance",
    "small business labour compliance",
    "PF ESIC registration MSME",
    "contract labour compliance SME",
    "NWC 2025 payroll MSME",
    "PF audit SME sector",
    "ESIC compliance small enterprises",
    "payroll compliance MSME",
    "EPFDesk India",
  ],

  alternates: {
    canonical: "https://epfdesk.com/sme-msme-compliance",
  },

  openGraph: {
    title: "SME & MSME EPF & ESIC Compliance | PAN India | EPFDesk",

    description:
      "PF & ESIC compliance for SMEs and MSMEs across India. Registration, audits, contractor labour management, NWC 2025 payroll structuring, and end-to-end statutory compliance.",

    url: "https://epfdesk.com/sme-msme-compliance",
    siteName: "EPFDesk",

    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk SME MSME EPF ESIC Compliance India",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "SME & MSME EPF ESIC Compliance | India | EPFDesk",

    description:
      "EPF & ESIC compliance for SMEs and MSMEs across India. PF/ESI registration, audits, contractor compliance, and monthly statutory filings handled by experts.",

    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          SME & MSME EPF & ESIC Compliance India | Payroll, PF, ESIC & Labour
          Law | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides EPF & ESIC compliance services for SMEs and MSMEs across India. Support includes PF/ESI registration, statutory audits, contractor labour compliance, NWC 2025 payroll structuring, and monthly ECR filings."
        />

        <meta
          name="keywords"
          content="SME EPF compliance India, MSME PF ESIC, small business labour compliance, PF ESIC registration MSME, EPFDesk India"
        />

        <link rel="canonical" href="https://epfdesk.com/sme-msme-compliance" />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="SME & MSME EPF & ESIC Compliance | PAN India | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC compliance for SMEs and MSMEs across India. End-to-end statutory compliance and advisory."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/sme-msme-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SME & MSME EPF ESIC Compliance | India | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="EPF & ESIC compliance for SMEs and MSMEs across India. Payroll structuring, contractor compliance, and statutory advisory handled end-to-end."
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
            name: "EPFdesk - SME/MSME Compliance ",
            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/sme-msme-compliance",
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
        <PerformanceSectionIndustry data={heroDataSmeMsme} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsSmeMsme} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ThreeStepSection cardsData={pastelCardsSmeMsme} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={smeMsmeFAQ} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
