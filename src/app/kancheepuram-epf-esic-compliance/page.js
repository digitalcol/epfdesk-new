import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import React from "react";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";
import FaqAccordion from "@/components/faqAccordian";
import Head from "next/head";
import Script from "next/script";
import {
  heroDataKancheepuramDist,
  sectionsKancheepuramDist,
} from "@/utils/data";
export const metadata = {
  title:
    "Kancheepuram EPF & ESIC Compliance: Auto-Ancillary, Electronics & Silk Hub | Oragadam & Sriperumbudur Industrial Corridor | EPFDesk",
  description:
    "EPFDesk provides PF & ESIC compliance solutions for Kancheepuram’s auto-ancillary, electronics (EMS), and specialized silk manufacturing clusters. We support high-volume factories in Oragadam and Sriperumbudur with NWC 2025 payroll structuring, contractor audits, PF/ESI registration, and OEM-driven compliance protocols.",
  keywords: [
    "Kancheepuram PF consultant",
    "Kancheepuram ESIC consultant",
    "Oragadam auto hub PF ESIC",
    "Sriperumbudur electronics EMS compliance",
    "automotive corridor labour law",
    "silk industry PF ESIC",
    "contractor compliance Sriperumbudur",
    "NWC 2025 payroll Tamil Nadu",
    "auto ancillary PF ESIC compliance",
    "EPFDesk Kancheepuram",
  ],
  alternates: {
    canonical: "https://epfdesk.com/kancheepuram-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Kancheepuram EPF & ESIC Consultant | Oragadam Auto Hub, Sriperumbudur Electronics & Silk Sector | EPFDesk",
    description:
      "PF & ESIC compliance for Kancheepuram’s auto-ancillary, electronics EMS, and silk industries. Expert support for OEM-driven compliance, contractor audits, NWC 2025 payroll, and high-volume industrial operations.",
    url: "https://epfdesk.com/kancheepuram-epf-esic-compliance",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk Kancheepuram PF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kancheepuram EPF & ESIC Compliance | Auto, Electronics & Silk Manufacturing | EPFDesk",
    description:
      "Compliance support for Oragadam's auto hub, Sriperumbudur’s electronics/EMS units, and Kancheepuram silk industries. PF, ESIC, contractor audits & NWC 2025 payroll restructuring.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>
          Kancheepuram EPF & ESIC Compliance: Auto-Ancillary, Electronics & Silk
          Hub | Oragadam & Sriperumbudur Industrial Corridor | EPFDesk
        </title>

        <meta
          name="description"
          content="EPFDesk provides PF & ESIC compliance support for Kancheepuram’s auto-ancillary and electronics (EMS) clusters in Oragadam and Sriperumbudur, as well as the traditional silk and handloom sector. Services include NWC 2025 payroll, contractor audits, monthly filings, and OEM compliance alignment."
        />

        <meta
          name="keywords"
          content="Kancheepuram PF consultant, Oragadam PF ESIC, Sriperumbudur electronics PF ESIC, auto ancillary PF compliance, EMS labour compliance, Kancheepuram silk PF ESIC, NWC 2025 Tamil Nadu payroll, contractor compliance TN, industrial corridor PF ESIC, EPFDesk Kancheepuram"
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/kancheepuram-epf-esic-compliance"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Kancheepuram EPF & ESIC Consultant | Auto, Electronics & Silk Industries | EPFDesk"
        />
        <meta
          property="og:description"
          content="PF & ESIC expert services for Oragadam auto hub, Sriperumbudur EMS electronics, and Kancheepuram silk and handloom industries. NWC 2025 payroll, contractor audits, and statutory compliance."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://epfdesk.com/kancheepuram-epf-esic-compliance"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kancheepuram EPF & ESIC Compliance | Auto, Electronics & Silk Manufacturing | EPFDesk"
        />
        <meta
          name="twitter:description"
          content="PF & ESIC services for automotive, EMS/electronics, and silk industry clusters across Kancheepuram, Oragadam & Sriperumbudur. NWC 2025 and statutory compliance experts."
        />
        <meta
          name="twitter:image"
          content="https://epfdesk.com/images/logo.jpg"
        />
      </Head>
      <Script
        id="schema-kancheepuram"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Kancheepuram EPF & ESIC Compliance: Auto-Ancillary, Electronics & Specialized Silk Hub | Oragadam & Sriperumbudur Industrial Corridor | EPFDesk",
            alternateName:
              "EPFDesk – Kancheepuram Automotive, Electronics & Silk Industry Compliance Experts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/kancheepuram-epf-esic-compliance",
            telephone: "+91-9945933333",

            // Standard reusable address for all schemas
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

            description:
              "Kancheepuram is a major auto-ancillary, electronics, and specialized silk manufacturing hub, forming the southern backbone of the Chennai–Automotive corridor. Key clusters such as Oragadam and Sriperumbudur host global OEMs and extensive networks of automotive and EMS suppliers, requiring robust EPF and ESIC compliance systems to manage high-volume, high-skill industrial operations.",

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
              { "@type": "City", name: "Kancheepuram" },
              { "@type": "Place", name: "Oragadam Automotive Hub" },
              {
                "@type": "Place",
                name: "Sriperumbudur EMS & Electronics Cluster",
              },
              { "@type": "Place", name: "Kancheepuram Silk & Handloom Sector" },
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
        <PerformanceSectionIndustry data={heroDataKancheepuramDist} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsKancheepuramDist} />
      </FadeInWhenVisible>
    </>
  );
};

export default page;
