import Bubbles from "@/components/reusableComponents/Bubbles";
import ComplianceTable from "@/components/reusableComponents/ComplianceTable";
import FAQ from "@/components/reusableComponents/FAQ";
import Footer from "@/components/reusableComponents/Footer";
import Bootcamps from "@/components/reusableComponents/Hero";
import Questioning from "@/components/reusableComponents/Questioning";
import ContentSlider from "@/components/reusableComponents/Slider";

import Upskills from "@/components/reusableComponents/Upskills";
import VideoHighlight from "@/components/reusableComponents/VideoHighlight";
import {
  dataTableManufacturing,
  faqsManufacturing,
  slidesManufacturing,
  uspDataManufacturing,
  videoHighlightDataManufacturing,
} from "@/utils/data";
import Script from "next/script";
import React from "react";

export const metadata = {
  title:
    "Manufacturing Compliance: Master the Factories Act, Fuel Sustainable Growth",
  description:
    "Workforce Limited offers expert compliance for manufacturing companies in India. Master the Factories Act, CLRA, EPF, ESIC, & Labour Laws. We mitigate risk, from SME 20+ to MNC 10,000+.",
  alternates: { canonical: "https://epfdesk.com/pf-esic-consultant-manufacturing-bangalore" },
  openGraph: {
    title:
      "Manufacturing Compliance: Master the Factories Act, Fuel Sustainable Growth",
    description:
      "Workforce Limited offers expert compliance for manufacturing companies in India. We help you master Factories Act, CLRA, EPF, ESIC, and labor law compliance seamlessly.",
    url: "https://epfdesk.com/pf-esic-consultant-manufacturing-bangalore",
    siteName: "EPFDesk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Manufacturing Compliance: Master the Factories Act, Fuel Sustainable Growth",
    description:
      "Expert compliance for India's manufacturing sector — Factories Act, CLRA, EPF, ESIC & multi-state labor laws.",
  },
};

function Hero() {
  return (
    <Bootcamps
      title={"Manufacturing Compliance"}
      description={`Workforce Limited offers expert compliance for manufacturing companies
          in India. Master the Factories Act, CLRA, EPF, ESIC, & Labour Laws. We
          mitigate risk, from SME 20+ to MNC 10,000+.`}
    />
  );
}

const Manufacturing = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Workforce Limited",
        url: "https://epfdesk.com",
        logo: "https://epfdesk.com/logo.png",
        sameAs: [
          "https://www.linkedin.com/company/workforcelimited/",
          "https://x.com/epfdesk",
          "https://www.facebook.com/epfdesk",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9945933333",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://epfdesk.com/pf-esic-consultant-manufacturing-bangalore",
        url: "https://epfdesk.com/pf-esic-consultant-manufacturing-bangalore",
        name: "Manufacturing Compliance: Master the Factories Act, Fuel Sustainable Growth",
        description:
          "Workforce Limited offers expert compliance for manufacturing companies in India. Master the Factories Act, CLRA, EPF, ESIC, and Labour Laws.",
        isPartOf: { "@id": "https://epfdesk.com/#website" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://epfdesk.com/images/manufacturing-cover.jpg",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://epfdesk.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item: "https://epfdesk.com/industries",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Manufacturing Compliance",
            item: "https://epfdesk.com/manufacturing",
          },
        ],
      },
    ],
  };
  return (
    <>
      <Script
        id="manufacturing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Hero />
      <VideoHighlight data={videoHighlightDataManufacturing} />
      <ComplianceTable data={dataTableManufacturing} />
      <Questioning uspData={uspDataManufacturing} />
      <Bubbles />
      <ContentSlider slides={slidesManufacturing} />
      <Upskills
        title="Secure Your Spot: Limited Onboarding"
        paragraphs={[
          "Our commitment to flawless labor compliance is built on profound legal knowledge and meticulous, state-specific processes.",
          "Our dedication to quality means we can only partner with a select number of new manufacturing businesses each month. Secure your position for a seamless transition now.",
          "Our teams comprise labor law attorneys, compliance experts, and HR consultants with deep, hands-on experience in the unique challenges of the manufacturing sector, from factory regulations to contract labor complexities.",
        ]}
      />
      <FAQ faqs={faqsManufacturing} />
      <Footer />
    </>
  );
};

export default Manufacturing;
