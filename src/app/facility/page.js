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
  dataTableFacility,
  faqsFacility,
  slidesFacility,
  uspDataFacility,
  videoHighlightDataFacility,
} from "@/utils/data";
import React from "react";

export const metadata = {
  title: `Facility Management Compliance: Master CLRA, RCM & Multi-Site Risk`,
  description:
    "Workforce Limited offers expert compliance for Facility Management (FM) companies. We master CLRA, RCM in GST, EPF/ESIC for contract staff, and multi-state labor laws. Mitigate risk, ensure seamless operations.",
  alternates: { canonical: "https://epfdesk.com/facility" },
  openGraph: {
    title: `Facility Management Compliance: Master CLRA, RCM & Multi-Site Risk`,
    url: "https://epfdesk.com/facility",
  },
};

function Hero() {
  return (
    // <section
    //   className="relative h-[90vh] flex items-center justify-center text-white"
    //   style={{
    //     backgroundImage:
    //       'url("https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg")',
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
    //   <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    //     <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
    //       Facility Management Compliance: Master CLRA, RCM & Multi-Site Risk
    //     </h1>
    //     <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
    //       Workforce Limited offers expert compliance for Facility Management
    //       (FM) companies. We master CLRA, RCM in GST, EPF/ESIC for contract
    //       staff, and multi-state labor laws. Mitigate risk, ensure seamless
    //       operations.
    //     </p>
    //   </div>
    // </section>
    <Bootcamps
      title={"Facility Management Compliance"}
      description={
        " Workforce Limited offers expert compliance for Facility Management (FM) companies. We master CLRA, RCM in GST, EPF/ESIC for contract staff, and multi-state labor laws. Mitigate risk, ensure seamless operations."
      }
    />
  );
}

const Facility = () => {
  return (
    <>
      <Hero />
      <VideoHighlight data={videoHighlightDataFacility} />
      <ComplianceTable data={dataTableFacility} />
      <Questioning uspData={uspDataFacility} />
      <Bubbles />
      <ContentSlider slides={slidesFacility} />
      {/* <Testimonials/> */}
      <Upskills
        title="Transform Your Contracts & Compliance Today"
        paragraphs={[
          "Ready to master the complexities of Facility Management compliance, eliminate contractual risks, and secure your client relationships with legal certainty?",
        ]}
      />
      <FAQ faqs={faqsFacility} />
      <Footer />
    </>
  );
};

export default Facility;
