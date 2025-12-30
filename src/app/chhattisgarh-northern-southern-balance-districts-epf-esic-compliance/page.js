import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataCGBalanceNSDistricts,
  sectionsCGBalanceNSDistricts,
  faqCGBalanceNSDistricts,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Chhattisgarh EPF & ESIC Consultants: Northern Mining & Central Agro-Processing Compliance | EPFDesk",
  description:
    "Expert EPF & ESIC consultancy for Surguja, Bemetara and Kondagaon. Navigate RO Bilaspur/Raipur audits, EEC-2025 voluntary disclosure and New Labour Code transition in Chhattisgarh’s emerging hubs.",
  keywords: [
    "EPF ESIC consultants Surguja",
    "Mining contractor PF compliance Chhattisgarh",
    "Bemetara agro processing ESIC",
    "Kondagaon labour law consultant",
    "RO Bilaspur EPF notice support",
    "EEC 2025 Chhattisgarh MSMEs",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/chhattisgarh-northern-southern-balance-districts-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Chhattisgarh EPF & ESIC Consultants | Northern Mining & Agro Frontier",
    description:
      "PF & ESIC specialists for mining belts, ethanol plants and agro-processing clusters in Chhattisgarh.",
    url: "https://epfdesk.com/chhattisgarh-northern-southern-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chhattisgarh EPF ESIC Consultants",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chhattisgarh EPF & ESIC Consultants | Mining & Agro Compliance",
    description:
      "High-risk PF & ESIC consultancy for mining, food processing and tribal-area projects.",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
};

/* ============================
   PAGE COMPONENT
============================ */
const page = () => {
  return (
    <>
      {/* ============================
          LEGACY HEAD TAGS
      ============================ */}
      <Head>
        <title>
          Chhattisgarh EPF & ESIC Consultants: Northern Mining & Central
          Agro-Processing Compliance | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC consultancy for Surguja mining contractors, Bemetara agro units and Kondagaon MSMEs under RO Bilaspur and RO Raipur."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chhattisgarh-northern-southern-balance-districts-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Chhattisgarh EPF & ESIC Consultants"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for northern mining belts and central/southern agro-industrial districts."
        />
        <meta
          property="og:image"
          content="https://epfdesk.com/images/logo.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ============================
          JSON-LD SCHEMA
      ============================ */}
      <Script
        id="schema-cg-balance-ns"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name: "Chhattisgarh EPF & ESIC Consultants – Mining & Agro Frontier | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultants for Emerging CG Districts",

            image: "https://epfdesk.com/images/logo.jpg",
            url: "https://epfdesk.com/chhattisgarh-northern-southern-balance-districts-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ SAME ADDRESS */
            address: {
              "@type": "PostalAddress",
              streetAddress: "Pandri",
              addressLocality: "Raipur",
              addressRegion: "Chhattisgarh",
              postalCode: "492001",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 12.9716,
              longitude: 77.5946,
            },

            description:
              "EPF & ESIC compliance consultants for coal mining ancillaries, ethanol plants, food processing units and tribal-area projects governed by RO Bilaspur and RO Raipur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Surguja District" },
              { "@type": "AdministrativeArea", name: "Korea District" },
              { "@type": "AdministrativeArea", name: "Surajpur District" },
              { "@type": "AdministrativeArea", name: "Balrampur District" },
              { "@type": "AdministrativeArea", name: "Jashpur District" },
              { "@type": "AdministrativeArea", name: "Bemetara District" },
              { "@type": "AdministrativeArea", name: "Kabirdham (Kawardha)" },
              { "@type": "AdministrativeArea", name: "Gariaband District" },
              { "@type": "AdministrativeArea", name: "Kondagaon District" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "74",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataCGBalanceNSDistricts} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsCGBalanceNSDistricts} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqCGBalanceNSDistricts} />
    </>
  );
};

export default page;
