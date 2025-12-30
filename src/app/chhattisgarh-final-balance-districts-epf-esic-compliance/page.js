import React from "react";
import Head from "next/head";
import Script from "next/script";

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSectionIndustry } from "@/components/PerformanceSectionIndustry";
import CodeOfConduct from "@/components/CodeOfConduct";
import FaqAccordion from "@/components/faqAccordian";

import {
  heroDataCGFinalBalanceDistricts,
  sectionsCGFinalBalanceDistricts,
  faqCGFinalBalanceDistricts,
} from "@/utils/data";

/* ============================
   METADATA (APP ROUTER)
============================ */
export const metadata = {
  title:
    "Chhattisgarh EPF & ESIC Compliance: Northern Mining Hubs, Bastar Frontier & Expert Consultants | EPFDesk",
  description:
    "Final guide to EPF & ESIC compliance for Chhattisgarh’s balance districts. Expert defense for Bilaspur, Surguja and Bastar industrial zones. Navigate RO Bilaspur audits and EEC-2025.",
  keywords: [
    "Bilaspur mining EPF compliance",
    "Surguja coal belt PF ESIC",
    "Bastar iron ore ESIC registration",
    "RO Bilaspur EPF 7A defense",
    "EEC 2025 mining contractors CG",
    "Labour law consultants Chhattisgarh",
  ],
  alternates: {
    canonical:
      "https://epfdesk.com/chhattisgarh-final-balance-districts-epf-esic-compliance",
  },
  openGraph: {
    title:
      "Chhattisgarh EPF & ESIC Compliance | Northern Mining & Bastar Frontier",
    description:
      "PF & ESIC specialists for coal, iron ore, forest-produce and emerging industrial zones of Chhattisgarh.",
    url:
      "https://epfdesk.com/chhattisgarh-final-balance-districts-epf-esic-compliance",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Chhattisgarh EPF ESIC Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chhattisgarh EPF & ESIC Compliance | Mining & Bastar Belt",
    description:
      "High-risk PF & ESIC compliance for mining, forest-produce and emerging districts.",
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
          Chhattisgarh EPF & ESIC Compliance: Northern Mining Hubs, Bastar Frontier & Expert Consultants | EPFDesk
        </title>

        <meta
          name="description"
          content="Expert EPF & ESIC advisory for Bilaspur, Surguja, Bastar and newly formed districts under RO Bilaspur and RO Raipur."
        />

        <link
          rel="canonical"
          href="https://epfdesk.com/chhattisgarh-final-balance-districts-epf-esic-compliance"
        />

        <meta
          property="og:title"
          content="Chhattisgarh EPF & ESIC Compliance"
        />
        <meta
          property="og:description"
          content="PF & ESIC experts for northern mining belts and southern Bastar frontier districts."
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
        id="schema-cg-final-balance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            name:
              "Chhattisgarh EPF & ESIC Compliance – Mining & Bastar Frontier | EPFDesk",
            alternateName:
              "EPFDesk – PF & ESIC Consultants for Balance Districts of Chhattisgarh",

            image: "https://epfdesk.com/images/logo.jpg",
            url:
              "https://epfdesk.com/chhattisgarh-final-balance-districts-epf-esic-compliance",
            telephone: "+91-9945933333",

            /* ✅ SAME ADDRESS */
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
              "EPF & ESIC compliance specialists for coal mining ancillaries, iron ore logistics, forest-produce processing and emerging districts governed by RO Bilaspur and RO Raipur.",

            priceRange: "₹₹₹",

            areaServed: [
              { "@type": "AdministrativeArea", name: "Bilaspur District" },
              { "@type": "AdministrativeArea", name: "Surguja District" },
              { "@type": "AdministrativeArea", name: "Surajpur District" },
              { "@type": "AdministrativeArea", name: "Korea District" },
              { "@type": "AdministrativeArea", name: "Manendragarh-Chirmiri-Bharatpur" },
              { "@type": "AdministrativeArea", name: "Bastar District" },
              { "@type": "AdministrativeArea", name: "Dantewada District" },
              { "@type": "AdministrativeArea", name: "Sukma District" },
              { "@type": "AdministrativeArea", name: "Sakti District" },
              { "@type": "AdministrativeArea", name: "Gaurela-Pendra-Marwahi" },
              { "@type": "AdministrativeArea", name: "Sarangarh-Bilaigarh" },
            ],

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "81",
            },
          }),
        }}
      />

      {/* ============================
          PAGE SECTIONS
      ============================ */}
      <FadeInWhenVisible>
        <PerformanceSectionIndustry data={heroDataCGFinalBalanceDistricts} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CodeOfConduct sections={sectionsCGFinalBalanceDistricts} />
      </FadeInWhenVisible>

      <FaqAccordion faqs={faqCGFinalBalanceDistricts} />
    </>
  );
};

export default page;
