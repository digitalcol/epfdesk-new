import {
  epfManagementPlans,
  horizontalCardsEpfo,
  largeCardsEpfo,
  pastelCardsEpfo,
  verticalCardsEpfo,
} from "../utils/data";

import FadeInWhenVisible from "./fadeInWhenVisible";
import VerticalAndHorizontalCards from "./verticalAndHorizontalCards";
import LargeCardSlider from "./largeCards";
import PastelCardSlider from "./pastelCardSlider";
import StickyScrollSections from "./scrollSyncComponent";

function EPFAccordion({ epfServices }) {
  return (
    <section className=" mx-auto px-4 py-12">
      <div className="space-y-8">
        {epfServices?.map((section, i) => {
          const Icon = section.icon;

          return (
            <div key={i} className="space-y-6">
              {/* Title Section */}
              <div className="flex items-center space-x-3">
                <Icon className="w-6 h-6 text-indigo-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {section.title}
                </h3>
              </div>

              {/* Cards for each item */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="border p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition"
                  >
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function EPFServicesSection() {
  return (
    <section className="py-8 px-4 md:px-12">
      <div className="space-y-4 mx-auto">
        <FadeInWhenVisible>
          <VerticalAndHorizontalCards
            verticalCards={verticalCardsEpfo}
            horizontalCards={horizontalCardsEpfo}
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <LargeCardSlider cardsData={largeCardsEpfo} />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <PastelCardSlider cardsData={pastelCardsEpfo} />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <h2 className="text-3xl sm:text-5xl text-center font-bold mb-14 text-gray-900">
            Comprehensive Employer EPF Compliance Services
          </h2>
          <p className="max-w-5xl mx-auto mt-6 text-center px-4 text-[1.4rem] mb-6 text-gray-600 font-bold">
            Our end-to-end EPF management solution eliminates administrative
            burdens while ensuring 100% regulatory compliance and audit
            readiness.
          </p>
          <StickyScrollSections items={epfManagementPlans} />
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
