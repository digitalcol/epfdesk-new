// import FadeInWhenVisible from "@/components/fadeInWhenVisible";
// import HeroSection from "@/components/linksHeroSection";
// import LatticeTabs from "@/components/LatticeTabs";
// import EPFServicesSection from "@/components/epfServicesSection";
// import FaqAccordion from "@/components/faqAccordian";
// import { heroSlides, epfoCards, epfManagementFaq } from "@/utils/data";

// // 🗺️ City-based data
// const cityData = {
//   bangalore: {
//     pf: {
//       title: "PF Consultants in Bangalore",
//       description:
//         "Expert PF compliance consultants in Bangalore providing end-to-end EPF registration and management.",
//       contact: "bangalore@pfconsultants.in",
//     },
//     esic: {
//       title: "ESIC Consultants in Bangalore",
//       description:
//         "Trusted ESIC consultants in Bangalore offering complete ESIC registration and compliance services.",
//       contact: "bangalore@esicconsultants.in",
//     },
//   },
//   hyderabad: {
//     pf: {
//       title: "PF Consultants in Hyderabad",
//       description:
//         "Professional PF consultants in Hyderabad specializing in payroll compliance and PF management.",
//       contact: "hyderabad@pfconsultants.in",
//     },
//     esic: {
//       title: "ESIC Consultants in Hyderabad",
//       description:
//         "Reliable ESIC registration and compliance support in Hyderabad.",
//       contact: "hyderabad@esicconsultants.in",
//     },
//   },
//   // add remaining cities (goa, delhi, etc.) here...
// };

// // 🧾 Standalone EPF content pages
// const standalonePages = {
//   "umang-app": {
//     title: "UMANG App – Unified Mobile App for New Governance",
//     description:
//       "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
//   },
//   "epfo-login": {
//     title: "EPFO Login Guide for Members",
//     description:
//       "Step-by-step instructions for EPFO member login, UAN activation, and password reset.",
//   },
//   "epf-withdrawal": {
//     title: "EPF Withdrawal Process Explained",
//     description:
//       "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
//   },
// };

// export default async function EPFPage({ params }) {
//   const { segments = [] } = await params;

//   // CASE 1: /epf → main overview
//   if (segments.length === 0) {
//     return (
//       <>
//         <FadeInWhenVisible>
//           <HeroSection slide={heroSlides[4]} />
//         </FadeInWhenVisible>

//         <FadeInWhenVisible>
//           <div>
//             <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">
//               Complete EPF Services We Provide
//             </h2>
//             <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
//               Our end-to-end EPF management solution eliminates administrative
//               burdens while ensuring 100% regulatory compliance and audit
//               readiness.
//             </p>
//             <LatticeTabs cards={epfoCards} />
//           </div>
//         </FadeInWhenVisible>

//         <FadeInWhenVisible>
//           <EPFServicesSection />
//         </FadeInWhenVisible>

//         <FadeInWhenVisible>
//           <FaqAccordion faqs={epfManagementFaq} />
//         </FadeInWhenVisible>
//       </>
//     );
//   }

//   // CASE 2: /epf/:slug → standalone subpage like /epf/umang-app
//   if (segments.length === 1) {
//     const [slug] = segments;
//     const data = standalonePages[slug];

//     if (!data) {
//       return (
//         <div className="p-10 text-center text-red-500">
//           No page found for “{slug}”
//         </div>
//       );
//     }

//     return (
//       <>
//         <FadeInWhenVisible>
//           <HeroSection slide={heroSlides[4]} slug={slug} data={data} />
//         </FadeInWhenVisible>

//         <FadeInWhenVisible>
//           <div>
//             <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">
//               {data.title}
//             </h2>
//             <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
//               {data.description}
//             </p>
//             <LatticeTabs cards={epfoCards} />
//           </div>
//         </FadeInWhenVisible>

//         <FadeInWhenVisible>
//           <EPFServicesSection />
//         </FadeInWhenVisible>

//         <FadeInWhenVisible>
//           <FaqAccordion faqs={epfManagementFaq} />
//         </FadeInWhenVisible>
//       </>
//     );
//   }

//   // CASE 3: /epf/:city/:slug → city-specific route
//   if (segments.length === 2) {
//     const [city, slug] = segments;
//     const data = cityData[city]?.pf;

//     if (!data) {
//       return (
//         <div className="p-10 text-center text-red-500">
//           No data found for city “{city}”
//         </div>
//       );
//     }

//     return (
//       <>
//         <FadeInWhenVisible>
//           <HeroSection slide={heroSlides[4]} city={city} slug={slug} data={data} />
//         </FadeInWhenVisible>

//         <FadeInWhenVisible>
//           <div>
//             <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">
//               {data.title}
//             </h2>
//             <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
//               {data.description}
//             </p>
//             <LatticeTabs cards={epfoCards} />
//           </div>
//         </FadeInWhenVisible>

//         <FadeInWhenVisible>
//           <EPFServicesSection />
//         </FadeInWhenVisible>

//         <FadeInWhenVisible>
//           <FaqAccordion faqs={epfManagementFaq} />
//         </FadeInWhenVisible>
//       </>
//     );
//   }

//   // Invalid path fallback
//   return (
//     <div className="p-10 text-center text-red-500">
//       Invalid route: /epf/{segments.join("/")}
//     </div>
//   );
// }

import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import HeroSection from "@/components/linksHeroSection";
import LatticeTabs from "@/components/latticeTabs";
import EPFServicesSection from "@/components/epfServicesSection";
import FaqAccordion from "@/components/faqAccordian";
import StickyScrollSections from "../../../components/scrollSyncComponent";
import {
  heroSlides,
  epfoCards,
  epfManagementFaq,
  cityData,
  standalonePages,
  epfManagementBangalore,
  epfManagementFaqBangalore,
  largeCardsEpfoBangalore,
  pastelCardsEpfoBangalore,
} from "@/utils/data";
import LargeCardSlider from "@/components/largeCards";
import PastelCardSlider from "@/components/pastelCardSlider";

import { PerformanceSection } from "@/components/PerformanceSection";
import PerformanceCard from "@/components/PerformanceCard";
import SliderCards from "@/components/SliderCards";

export const metadata = {
  title: `PF Consultant in Bangalore | EPF Registration, Returns & Inspections | Workforce`,
  description:
    "Leading PF consultants in Bangalore for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.",
  alternates: {
    canonical: "https://epfdesk.com/epf/bangalore/pf-consultants-in-bangalore",
  },
  openGraph: {
    title: `Leading PF consultants in Bangalore for EPF registration, monthly compliance, inspection handling & closure. Trusted by 100+ employers. Get a free PF audit.`,
    url: "https://epfdesk.com/epf/bangalore/pf-consultants-in-bangalore",
  },
};

export default async function EPFPage({ params }) {
  const { segments = [] } = await params;

  // CASE 1: /epf
  if (segments.length === 0) {
    return (
      <>
        <FadeInWhenVisible>
          <HeroSection slide={heroSlides[4]} />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div>
            <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">
              Complete EPF Services We Provide
            </h2>
            <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
              Our end-to-end EPF management solution eliminates administrative
              burdens while ensuring 100% regulatory compliance and audit
              readiness.
            </p>
            <LatticeTabs cards={epfoCards} />
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <EPFServicesSection />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <FaqAccordion faqs={epfManagementFaq} />
        </FadeInWhenVisible>
      </>
    );
  }

  // CASE 2: /epf/:slug
  if (segments.length === 1) {
    const [slug] = segments;
    const data = standalonePages[slug];

    if (!data)
      return (
        <div className="p-10 text-center text-red-500">
          No page found for “{slug}”
        </div>
      );

    return (
      <>
        <FadeInWhenVisible>
          <HeroSection slide={heroSlides[4]} slug={slug} data={data} />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div>
            <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">
              {data.title}
            </h2>
            <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
              {data.description}
            </p>
            <LatticeTabs cards={epfoCards} />
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <EPFServicesSection />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <FaqAccordion faqs={epfManagementFaq} />
        </FadeInWhenVisible>
      </>
    );
  }

  // CASE 3: /epf/:city/:slug
  if (segments.length === 2) {
    const [city, slug] = segments;
    const data = cityData[city]?.pf;

    if (!data)
      return (
        <div className="p-10 text-center text-red-500">
          No data found for city “{city}”
        </div>
      );

    return (
      <>
        <FadeInWhenVisible>
          {/* <HeroSection
            slide={heroSlides[4]}
            city={city}
            slug={slug}
            data={data}
          /> */}
          <PerformanceSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <PerformanceCard />
        </FadeInWhenVisible>
        {/* <SliderCards /> */}
        {/* <FadeInWhenVisible>
          <div>
            <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">{data.title}</h2>
            <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
              {data.description}
            </p>
            <LatticeTabs cards={epfoCards} />
          </div>
        </FadeInWhenVisible> */}

        {/* <FadeInWhenVisible>
          <EPFServicesSection />
        </FadeInWhenVisible> */}
        <FadeInWhenVisible>
          <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            PF Consultants in Bangalore — End-to-End EPF Compliance by Workforce
          </h2>

          <FadeInWhenVisible>
            <LargeCardSlider cardsData={largeCardsEpfoBangalore} />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <PastelCardSlider cardsData={pastelCardsEpfoBangalore} />
          </FadeInWhenVisible>
          <h2 className="text-3xl max-w-7xl m-auto sm:text-5xl text-center font-bold my-14 text-gray-900">
            Workforce: End-to-End EPF Management for Modern Businesses
          </h2>
          <StickyScrollSections items={epfManagementBangalore} />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <FaqAccordion faqs={epfManagementFaqBangalore} />
        </FadeInWhenVisible>
      </>
    );
  }

  // Invalid path fallback
  return (
    <div className="p-10 text-center text-red-500">
      Invalid route: /epf/{segments.join("/")}
    </div>
  );
}
