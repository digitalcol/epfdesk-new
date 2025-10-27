import React from "react";
import VideoHighlight from "@/components/reusableComponents/VideoHighlight";
import ComplianceTable from "@/components/reusableComponents/ComplianceTable";
import Questioning from "@/components/reusableComponents/Questioning";
import ContentSlider from "@/components/reusableComponents/Slider";
import Testimonials from "@/components/reusableComponents/Testimonial";
import FAQ from "@/components/reusableComponents/FAQ";
import Footer from "@/components/reusableComponents/Footer";
import Upskills from "@/components/reusableComponents/Upskills";
import Bubbles from "@/components/reusableComponents/Bubbles";
import {
  dataTableEducation,
  faqsEducation,
  slidesEducation,
  testimonialsEducation,
  uspDataEducation,
  videoHighlightDataEducation,
} from "@/utils/data";
import Bootcamps from "@/components/reusableComponents/Hero";
import Script from "next/script";

export const metadata = {
  title:
    "Educational Institutions Compliance: Protecting Your Reputation, Empowering Your Staff",
  description:
    "Workforce Limited offers specialized compliance solutions for schools & colleges. We handle EPF, ESIC, POSH & labor laws for faculty and staff, ensuring institutional integrity and protecting your reputation.",
  keywords:
    "Educational compliance, school compliance, college compliance, EPF for teachers, ESIC for staff, POSH compliance, labor law compliance for education, institutional compliance India",
  alternates: {
    canonical: "https://epfdesk.com/pf-esic-consultant-education-sector-bangalore",
  },
  openGraph: {
    title:
      "Educational Institutions Compliance: Protecting Your Reputation, Empowering Your Staff",
    description:
      "Specialized compliance for schools & colleges — EPF, ESIC, POSH & labor law solutions. Protect your reputation and empower your staff.",
    url: "https://epfdesk.com/pf-esic-consultant-education-sector-bangalore",
    type: "website",
    locale: "en_IN",
    siteName: "EPFdesk",
    images: [
      {
        url: "https://epfdesk.com/images/education-compliance-og.jpg",
        width: 1200,
        height: 630,
        alt: "Educational Institutions Compliance Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Educational Institutions Compliance: Protecting Your Reputation, Empowering Your Staff",
    description:
      "Complete compliance management for schools & colleges — EPF, ESIC, POSH & labor laws handled by experts.",
    images: ["https://epfdesk.com/images/education-compliance-twitter.jpg"],
  },
};

function Hero() {
  return (
    <Bootcamps
      title={"Educational Institutions Compliance"}
      description={
        "Workforce Limited offers specialized compliance solutions for schools & colleges. We handle EPF, ESIC, POSH & labor laws for faculty and staff, ensuring institutional integrity and protecting your reputation."
      }
    />
  );
}

const Education = () => {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Educational Institution Compliance Services",
            provider: {
              "@type": "Organization",
              name: "Workforce Limited",
              url: "https://epfdesk.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "India",
                addressCountry: "IN",
              },
              telephone: "+91-9945933333",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Comprehensive Educational Compliance Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "EPF & ESIC Management for Faculty and Staff",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "POSH Compliance & Policy Implementation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Labour Law Compliance Audits",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Institutional Policy Documentation",
                  },
                },
              ],
            },
          }),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why do educational institutions need compliance management?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Schools and colleges must comply with EPF, ESIC, and labor laws for their teaching and non-teaching staff. Non-compliance can lead to penalties and reputational risks.",
                },
              },
              {
                "@type": "Question",
                name: "What does Workforce Limited offer for schools and colleges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We manage EPF, ESIC, POSH compliance, and labor law audits for educational institutions — ensuring full legal and HR compliance for both faculty and administrative staff.",
                },
              },
              {
                "@type": "Question",
                name: "Can you assist with POSH training and certification?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We provide complete POSH compliance — including training, Internal Committee setup, and annual report documentation.",
                },
              },
            ],
          }),
        }}
      />
      <Hero />
      <VideoHighlight data={videoHighlightDataEducation} />
      <ComplianceTable data={dataTableEducation} />
      <Questioning uspData={uspDataEducation} />
      <Bubbles />
      <ContentSlider slides={slidesEducation} />
      <Testimonials testimonials={testimonialsEducation} />
      <Upskills
        title="Secure Your Spot: Limited Onboarding"
        paragraphs={[
          "Our dedication to quality means we can only partner with a select number of new educational institutions each month. Secure your position for a seamless transition now.",
        ]}
      />
      <FAQ faqs={faqsEducation} />
      <Footer />
    </>
  );
};

export default Education;
