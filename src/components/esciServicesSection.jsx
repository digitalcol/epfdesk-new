import {
  ClipboardDocumentCheckIcon,
  UsersIcon,
  CalendarDaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import {
  esciCards,
  horizontalCardsEsic,
  verticalCardsEsic,
  largeCardsEsic,
  pastelCardsEsic,
} from "../utils/data";
import FadeInWhenVisible from "./fadeInWhenVisible";
import VerticalAndHorizontalCards from "./verticalAndHorizontalCards";
import PastelCardSlider from "./pastelCardSlider";
import LatticeTabs from "./latticeTabs";
import VerticalCard from "./largeCards";



const epfServices = [
  {
    title: "ESIC Registration & Applicability Management",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Complete ESIC registration process: We guide you through and meticulously
handle all steps for "ESIC registration process online India," including online
application, documentation, and swift ESIC code allocation.`,
      `Precise applicability assessment: We accurately determine "Who is eligible for
ESIC registration?" based on employee count (e.g., 10+ or 20+ depending on state)
and wage limits, ensuring correct and ongoing coverage without a hitch.`,
      `Required documentation compilation: We assist in gathering and submitting all
"documents required for ESIC registration," streamlining the initial setup within
statutory time limits.`,
      `Coverage continuity management: We advise on crucial aspects like the "once
covered, always covered" rule, ensuring compliance even if the number of
employees temporarily goes below the minimum limit.`,
    ],
  },
  {
    title: "Accurate ESIC Contribution Calculation & Payment",
    icon: UsersIcon,
    items: [
      `Precision contribution calculation: We perform accurate "ESIC calculation on
salary" using the "current ESIC contribution rate employer and employee" (e.g.,
Employer: 3.25%, Employee: 0.75%) and the "ESIC wage ceiling current" (₹21,000
for general employees, ₹25,000 for persons with disabilities).`,
      `Correct wage component inclusion: We meticulously identify and include all
applicable "salary components for ESIC wages" (Basic, DA, HRA, CCA, production
incentive, night shift, meal/food allowance), ensuring "ESIC is deducted on gross
salary, not just basic."`,
      `Exemption management: We accurately identify and manage "exemptions from
ESIC contributions for low-wage employees" (e.g., daily wage up to ₹176),
optimizing your deductions while remaining compliant.`,
      `Timely payment facilitation: We generate accurate "ESIC challan online" and
support "how to pay ESIC contribution online," guaranteeing deposits are made
well before the "Monthly ESIC return filing deadline" (15th of the following
month).`,
    ],
  },
  {
    title: "Seamless Monthly Filings & Employee Data Management",
    icon: CalendarDaysIcon,
    items: [
      `Monthly ESIC return filing: We manage the entire "ESIC return filing process"
with 100% accuracy and punctuality before the 15th of the following month
deadline.`,
      `Employee data updates & IP Management: We handle "how to update employee
details in ESIC portal by employer," ensuring accurate records for your workforce,
including "generating ESIC Code number" (17-digit ID) and managing "ESIC login
for insured person" access.`,
      `Employer Portal Navigation: We expertly manage all interactions on the "ESIC
employer login portal," ensuring accurate data reflection, complete submissions,
and efficient grievance management (like EPFiGMS).`,
      `Contribution Period Tracking: We meticulously track "ESIC Contribution Period
vs. Cash Benefit Period" to maintain continuous coverage for your employees,
even if salaries briefly exceed the ceiling.`,
    ],
  },
  {
    title: "Proactive Regulatory Updates & Risk Management",
    icon: UserCircleIcon,
    items: [
      `Continuous regulatory monitoring: Our dedicated experts meticulously monitor
the latest "ESIC Act amendments," "ESIC circulars," and "ESIC contribution rate
changes.`,
      `Impact analysis & strategic advice: We translate complex legal updates into clear,
actionable business insights tailored to your operations, ensuring you understand
the "consequences of ESIC non-compliance.`,
      `Penalty prevention strategies: We implement proactive measures to safeguard
against "what happens if employer does not pay ESIC contribution?" and other
common non-compliance scenarios.`,
      `Audit readiness support: We provide complete assistance for any ESIC
inspections or audits, ensuring you are fully prepared with complete
documentation and expert representation.`,
    ],
  },
];

function EPFAccordion() {
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

export default function ESCIServicesSection({ plans }) {
  return (
    <section className="py-8 px-4 md:px-12">
      <div className="space-y-4 mx-auto">
        <FadeInWhenVisible>
          <h2 className="text-3xl sm:text-5xl max-w-5xl mx-auto font-bold my-8 text-center">
            {plans.mainTitle}
          </h2>
          <p className="max-w-4xl mx-auto mt-8 text-center px-4 text-[1.2rem] text-gray-600 font-bold">
            While your employees can find detailed benefit information on our
            wiki, our ESIC compliance service directly ensures they receive
            their full social security entitlements seamlessly, enhancing
            employee satisfaction.
          </p>
          <LatticeTabs cards={esciCards} />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <VerticalAndHorizontalCards
            horizontalCards={horizontalCardsEsic}
            verticalCards={verticalCardsEsic}
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <VerticalCard cardsData={largeCardsEsic} />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <PastelCardSlider cardsData={pastelCardsEsic} />
        </FadeInWhenVisible>
      </div>

      <h2 className="max-w-5xl mx-auto text-5xl font-bold mt-20 mb-8 text-center">
        {plans.mainTitle}
      </h2>
    </section>
  );
}
