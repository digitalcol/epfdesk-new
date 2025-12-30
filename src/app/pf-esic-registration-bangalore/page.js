import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import { PerformanceSection } from "@/components/PerformanceSection";
import React from "react";
import {
  pastelCardsPFEsicRegBangalore,
  pfEsicRegFaqBangalore,
  pfESICRegistration,
} from "@/utils/data";

import FaqAccordion from "@/components/faqAccordian";
import Script from "next/script";
import CodeOfConduct from "@/components/CodeOfConduct";
import ThreeStepSection from "@/components/ThreeStepSection";

export const metadata = {
  title: "PF & ESIC Registration Bangalore | Register Both in 7 Days | EPFdesk",
  description:
    "EPFdesk helps you register for both PF and ESIC in Bangalore — one process, one documentation, one week. Fast, compliant, and 100% approval rate.",
  keywords: [
    "PF registration Bangalore",
    "ESIC registration Bangalore",
    "EPF registration Bangalore",
    "EPF ESIC registration consultant Bangalore",
    "PF and ESIC setup Bangalore",
    "EPFdesk Bangalore",
  ],
  alternates: {
    canonical: "https://epfdesk.com/pf-esic-registration-bangalore/",
  },
  openGraph: {
    title: "PF & ESIC Registration Bangalore | Register Both in 7 Days",
    description:
      "Get PF and ESIC registration together in Bangalore. Save time, avoid duplication, and ensure compliance with EPFdesk.",
    url: "https://epfdesk.com/pf-esic-registration-bangalore/",
    siteName: "EPFdesk",
    type: "website",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "EPFdesk PF & ESIC Registration Bangalore",
      },
    ],
  },
};

const PFEsicRegistration = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "EPFdesk - PF & ESIC Registration Bangalore",
    image: "https://epfdesk.com/images/logo.jpg",
    url: "https://epfdesk.com/pf-esic-registration-bangalore/",
    telephone: "+91-9876543210",
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
  };

  const data = {
    title: "PF ESIC Registration Bangalore",
    subTitle: "Get Both Registrations Done Together in 7 Days",
    description:
      "Stop Wasting Time on Two Separate Registrations. We Do Both. One Process.",
  };
  return (
    <>
      <Script
        id="schema-pf-esic-registration-bangalore"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <FadeInWhenVisible>
        <PerformanceSection data={data} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CodeOfConduct sections={pfESICRegistration} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FadeInWhenVisible>
          <ThreeStepSection cardsData={pastelCardsPFEsicRegBangalore} />
        </FadeInWhenVisible>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FaqAccordion faqs={pfEsicRegFaqBangalore} />
      </FadeInWhenVisible>
    </>
  );
};

export default PFEsicRegistration;
