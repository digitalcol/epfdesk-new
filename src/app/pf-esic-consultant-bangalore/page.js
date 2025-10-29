
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import PerformanceCard from "@/components/PerformanceCard";
import { PerformanceSection } from "@/components/PerformanceSection";
import React from "react";
import { largeCardsPFEsicBangalore, pastelCardsPFEsicBangalore, PFEsicBangaloreCardData, pfEsicManagementFaqBangalore } from "@/utils/data";
import LargeCardSlider from "@/components/largeCards";
import PastelCardSlider from "@/components/pastelCardSlider";
import FaqAccordion from "@/components/faqAccordian";
import Script from "next/script";
export const metadata = {
  title: "PF & ESIC Consultant Bangalore | Integrated Compliance by EPFdesk",
  description:
    "EPFdesk offers end-to-end PF & ESIC management in Bangalore — one team handles both compliances, from registration to inspection response. 100% accuracy, zero penalties.",
  keywords: [
    "PF consultant Bangalore",
    "ESIC consultant Bangalore",
    "EPF ESIC management Bangalore",
    "PF registration Bangalore",
    "ESIC registration Bangalore",
    "EPFdesk Bangalore",
  ],
  alternates: {
    canonical: "https://epfdesk.com/pf-esic-consultant-bangalore/",
  },
  openGraph: {
    title: "PF & ESIC Consultant Bangalore | EPFdesk",
    description:
      "One team for both PF and ESIC compliance. Save time, eliminate penalties, and get unified reporting with EPFdesk Bangalore.",
    url: "https://epfdesk.com/pf-esic-consultant-bangalore/",
    siteName: "EPFdesk",
    type: "website",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "EPFdesk Bangalore PF ESIC Consultant",
      },
    ],
  },
};

const PFEsicConsultant = () => {
const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "EPFdesk - PF & ESIC Consultant Bangalore",
    image: "https://epfdesk.com/images/logo.jpg",
    url: "https://epfdesk.com/pf-esic-consultant-bangalore/",
    telephone: "+91-9876543210",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Church street",
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
  };
    const data = {
        title: "PF ESIC Consultant Bangalore: One Team, Both Compliances, Zero Headaches",
        description:"Stop Managing Two Consultants. We Handle EPF + ESIC Together."
    }
  return (
    <>
     <Script
        id="schema-pf-esic-bangalore"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <FadeInWhenVisible>
        <PerformanceSection data={data} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <PerformanceCard slug={"pf-esic-consultant-bangalore"} data={PFEsicBangaloreCardData} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FadeInWhenVisible>
          <LargeCardSlider cardsData={largeCardsPFEsicBangalore} />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <PastelCardSlider cardsData={pastelCardsPFEsicBangalore} />
        </FadeInWhenVisible>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={pfEsicManagementFaqBangalore} />
      </FadeInWhenVisible>
    </>
  );
};

export default PFEsicConsultant;
