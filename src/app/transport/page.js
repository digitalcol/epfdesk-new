import { dataTableTransport, faqsTransport, slidesTransport, uspDataTransport, videoHighlightDataTransport } from "@/utils/data";
import React from "react";
import VideoHighlight from "@/components/reusableComponents/VideoHighlight"
import ComplianceTable from "@/components/reusableComponents/ComplianceTable";
import Footer from "@/components/reusableComponents/Footer";
import Questioning from "@/components/reusableComponents/Questioning";
import Bubbles from "@/components/reusableComponents/Bubbles";
import ContentSlider from "@/components/reusableComponents/Slider";
import Upskills from "@/components/reusableComponents/Upskills";
import FAQ from "@/components/reusableComponents/FAQ";
import Bootcamps from "@/components/reusableComponents/Hero";

export const metadata = {
  title: `Transport & Warehousing Compliance: Mastering MTWA, GST RCM & Mobile Workforce Risk`,
  description:
    "Workforce Limited offers expert compliance for Transport & Logistics companies. Master MTWA, GST RCM (GTA), EPF/ESIC for drivers, and multi-state labor laws. Mitigate risk, ensure zero disruption.",
  alternates: { canonical: "https://epfdesk.com/transport" },
  openGraph: {
    title: `Transport & Warehousing Compliance: Mastering MTWA, GST RCM & Mobile Workforce Risk`,
    url: "https://epfdesk.com/transport",
  },
};

function Hero() {
  return (
    // <section
    //   className="relative h-[90vh] flex items-center justify-center text-white"
    //   style={{
    //     backgroundImage:
    //       'url("https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg")',
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
    //   <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    //     <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
    //       Transport & Warehousing Compliance: Mastering MTWA, GST RCM & Mobile Workforce Risk
    //     </h1>
    //     <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
    //       Workforce Limited offers expert compliance for Transport & Logistics
    //       companies. Master MTWA, GST RCM (GTA), EPF/ESIC for drivers, and
    //       multi-state labor laws. Mitigate risk, ensure zero disruption.
    //     </p>
    //   </div>
    // </section>
    <Bootcamps title={"Transport & Warehousing Compliance"} description={`Workforce Limited offers expert compliance for Transport & Logistics
          companies. Master MTWA, GST RCM (GTA), EPF/ESIC for drivers, and
          multi-state labor laws. Mitigate risk, ensure zero disruption.`}/>
  );
}

const Transport = () => {
  return (
    <>
      <Hero />
      <VideoHighlight data={videoHighlightDataTransport} />
      <ComplianceTable data={dataTableTransport} />
      <Questioning uspData={uspDataTransport} />
      <Bubbles />
      <ContentSlider slides={slidesTransport} />
   
      <Upskills
        title="Protection for Your Contracts"
        paragraphs={[
          "Our expertise is built on deep legal knowledge and dedicated processes specific to the transport and contract-based service industry.",
          "We go beyond compliance, providing holistic management that safeguards your business and enhances operational efficiency.",
          "Our meticulous processes significantly reduce the risk of client contract termination due to third-party or sub-contractor non-compliance.",
          "Ready to master the complexities of Transport & Warehousing compliance, eliminate contractual risks, and secure your client relationships with legal certainty?"
        ]}
      />
      <FAQ faqs={faqsTransport} />
      <Footer />
    </>
  );
};

export default Transport;
