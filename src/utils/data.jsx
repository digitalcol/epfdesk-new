import {
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  CalendarDaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  MdBarChart,
  MdLoop,
  MdFavorite,
  MdAttachMoney,
  MdNature,
} from "react-icons/md";
import {
  FaBook,
  FaGraduationCap,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

export const epfServices = [
  {
    title: "Seamless Employee Lifecycle Management",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Monthly employee additions and deletions with immediate EPFO reflection: We precisely
manage your roster updates, ensuring compliance from day one for new hires and seamless
processing for exits. This addresses common employer queries about "How to add new
employee in EPF" and "deletion of member.`,
      `Automated UAN generation and linking for all new hires within 24 hours: Swift UAN allocation
and linking to Aadhaar streamline onboarding and prevent delays. This directly answers "How
to generate UAN for new employees" and "Linking Aadhaar with UAN by employer.`,
      `Complete employee data management and ongoing verification: We maintain pristine member
records, proactively correcting discrepancies and managing updates like name, DOB, and KYC
to mitigate future issues.`,
      `Expert coordination for exit formalities and final settlement processes: Ensuring smooth,
compliant EPF exits and seamless transfers for outgoing employees, simplifying the employer's
role in these crucial moments.`,
    ],
  },
  {
    title: "Automated Challan Generation & Payment Facilitation",
    icon: UsersIcon,
    items: [
      `Precision EPF challan creation validated against latest EPFO norms: Our system guarantees
accurate calculations for all employees, including complex scenarios like "EPF calculation for
salary above ₹15,000," and ensures correct "EPF contribution breakdown for employer and
employee.`,
      `Automated contribution calculation based on "basic wages" as per EPF Act: We accurately
determine taxable components and ensure correct inclusion of salary components (like
Dearness Allowance) for EPF, clarifying "What components of salary are included in EPF basic
wages?`,
      `Pre-submission validation to catch errors before filing: Our multi-layered checks identify
discrepancies before your "monthly EPF ECR online" filing, preventing costly mistakes and
addressing "errors in ECR filing and how to correct them.`,
      `Payment timeline management with timely reminders and alerts: We ensure your contributions
are remitted well before the "Monthly EPF return filing deadline" (15th of every month),
completely protecting you from "penalties for late EPF payment" and interest charges.`,
    ],
  },
  {
    title: "Expert Regulatory Filings & Approvals",
    icon: CalendarDaysIcon,
    items: [
      `Accurate and timely monthly ECR (Electronic Challan-cum-Return) filing: We manage your core
monthly submission with utmost precision, streamlining "How to file monthly EPF ECR online"
for your team.`,
      `Comprehensive handling of all employer approvals, declarations, and annexures: Ensuring
every required document, including "Nomination Form" and other necessary declarations, is
properly processed and uploaded.`,
      `Secure digital document management with ironclad audit trails: All filed records are securely
managed and easily retrievable, providing crucial support during any "EPFO audit process for
employers" and helping you "prepare for an EPF inspection" with confidence.`,
      `Proactive error detection and swift resubmission when needed: We identify and correct "errors
in ECR filing" promptly, ensuring continuous compliance and mitigating "legal consequences of
EPF non-compliance.`,
    ],
  },
  {
    title: "Proactive Regulatory Updates & Advisory",
    icon: UserCircleIcon,
    items: [
      `Continuous monitoring of all EPFO circulars, notifications, and "EPF & MP Act 1952 latest
amendments": Our experts are constantly updating their knowledge base, providing you with
real-time insights.`,
      `Impact analysis of new regulations on your specific business operations: We translate complex
legal jargon into actionable insights tailored to your organizational structure and workforce,
including the "New Social Security Code impact on EPF for employers.`,
      `Strategic recommendations for policy adaptations: We advise on necessary internal
adjustments to ensure seamless compliance with evolving laws, allowing you to strategically
adapt your HR and payroll policies ahead of time.`,
      `Advance notice of upcoming compliance requirements and deadlines: You're always prepared,
eliminating last-minute rushes and ensuring "best practices for EPF compliance in India.`,
    ],
  },
];

export const whyEpfDesk = [
  {
    title: "Unmatched Expertise & Zero-Error Accuracy",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Consistently high accuracy rate in EPF filings (e.g., 99.9%): Our multi-layered validation and
expert review process minimizes discrepancies, significantly reducing "interest on delayed EPF
contributions" for your business.`,
      `Zero audit failures across our client portfolio for 5+ years: A testament to our robust processes
and unwavering commitment to compliance integrity, offering true peace of mind.`,
      `Rapid average response time (e.g., 2-4 hours) for client queries: Ensuring your concerns are
addressed promptly by dedicated specialists, improving your operational efficiency.`,
      `100% deadline adherence for all submissions: Protecting you from "legal consequences of EPF
non-compliance" and preserving your organization's reputation.`,
    ],
  },
  {
    title: "Complete HR & Finance Team Liberation",
    icon: UsersIcon,
    items: [
      `Up to 90% reduction in compliance-related administrative tasks: Freeing up countless hours
previously spent on manual processing and follow-ups, directly translating to "measurable
productivity gains.`,
      `Accelerated new employee onboarding process (e.g., 80% faster): Streamlining your initial
employee setup by expertly managing all EPF complexities, allowing your HR to onboard
quickly.`,
      `100% elimination of penalty and interest risks: Direct financial savings and mitigation of "what
happens if employer does not deposit PF?" concerns, due to flawless and timely compliance.`,
      `Significant reduction in employee EPF queries reaching HR (e.g., 75%): Our integrated solutions,
including the EPF Desk for employees, offload individual queries, allowing HR to focus on
strategic initiatives.`,
    ],
  },
  {
    title: "Implementation & Support",
    icon: CalendarDaysIcon,
    items: [
      `Initial Consultation: A brief session to understand your current EPF setup and specific needs.`,
      `Secure Portal Integration: Our team manages the secure integration with relevant EPFO portals
and gathers necessary access details.`,
      `Brief Team Orientation: A quick, efficient orientation session with your relevant staff to ensure a
smooth handover.`,
      `Full Service Activation: Your EPF compliance is fully operational, seamlessly managed by
EPFDesk.com experts within 24 hours.`,
    ],
  },
  {
    title: "Dedicated Support Team",
    icon: UserCircleIcon,
    items: [
      `Dedicated Client Manager: A single point of contact who understands your specific account
and compliance needs, ensuring personalized service.`,
      `Monthly Compliance Reports & Insights: Regular updates on your compliance status and
performance.`,
      `Immediate Resolution of EPF-related Queries: Your dedicated manager ensures any questions
or issues are addressed promptly.`,
      `Proactive Communication on Regulatory Changes: You're informed of relevant updates,
ensuring continuous compliance.`,
    ],
  },
];

export const plans = {
  mainTitle:
    "Ensuring Employee Well-being: Comprehensive ESIC Benefits Management",
  cards: [
    {
      title: "Guaranteeing ESIC Benefits Access for Your Workforce",
      features: [
        `Full Medical Care Access: We ensure proper registration and contribution records
so employees can effortlessly access ESIC medical benefits for family, and
locate ESIC dispensary nearby and ESIC hospital list.`,
        `Robust Cash Benefits Eligibility: Our accurate contribution management means
employees are eligible for vital support like ESIC sickness benefit eligibility(70% wages), ESIC maternity benefit rules (100% wages), ESIC disablement
benefit (90% wages), and ESIC unemployment allowance under Atal Bimit
Vyakti Kalyan Yojana (ABVKY).`,
        `Comprehensive Additional Benefits: We manage data crucial for dependents to
access ESIC dependent benefits, and ensure eligibility for ESIC funeral
expenses (₹15,000), ESIC confinement expenses, and ESIC vocational
rehabilitation.`,
        `Seamless Access Tools: We ensure accurate details for employees to download
ESIC E-Pehchan card and check ESI registration of an employee online,
facilitating their access to benefits.`,
        `Your Benefit: A healthier, more secure workforce, reduced employee frustration related
to ESIC benefits, and a stronger employer reputation that aids in talent retention.`,
      ],
    },
    {
      title: "Proven ESIC Expertise & Zero-Risk Compliance",
      features: [
        "99.9% Accuracy in ESIC Filings: Consistent 99.9% accuracy rate in all ESIC filings and contribution calculations, rigorously minimizing financial discrepancies and audit risks.",
        "Zero Audit Failures in 5+ Years: Zero audit failures across our client portfolio for 5+ years, a testament to our robust control environment and unwavering commitment to compliance integrity.",
        "Rapid Query Resolution (2–4 hrs): Rapid average response times 2-4 hours for all client queries and urgent matters, ensuring your concerns are addressed promptly by dedicated specialists.",
        "100% Deadline Adherence: 100% deadline adherence for all ESIC submissions, completely eliminating interest charges and 'legal consequences of ESIC non-compliance.'",
      ],
    },
    {
      title: "Complete HR & Finance Team Liberation",
      features: [
        "80% Reduction in ESIC Admin Time: Up to 80% reduction in administrative time typically spent on ESIC registration, calculation, and filing processes, directly enhancing operational efficiency.",
        "Elimination of ESIC Penalty Risks: 100% elimination of penalty and interest risks, leading to direct financial savings and complete protection from unforeseen costs.",
        "Protection from Legal & Reputational Risks: Complete protection from non-compliance legal consequences and reputational damage, ensuring your business's integrity.",
        "Strategic Resource Redirection: Strategic resource redirection toward talent development, advanced financial planning, and core business growth, maximizing your organization's potential.",
      ],
    },
    {
      title: "Rapid Implementation & Ongoing Support",
      features: [
        `Initial Consultation: A quick, efficient session to understand your current ESIC
setup, employee count, and specific organizational requirements.`,
        `Secure Data Integration: Our team securely accesses necessary payroll and
employee information via compliant channels for initial ESIC processing.`,
        `ESIC Portal Setup & Linkage: We manage the efficient setup and linkage with the
ESIC employer portal and other relevant online platforms.`,
        `Brief Team Orientation: A concise, practical orientation session for your relevant
HR and Finance staff to ensure a smooth operational handover and understanding
of our processes.`,
        `Full Service Activation: Your ESIC compliance is fully operational and seamlessly
managed by EPFDesk.com experts within 24-48 hours of successful onboarding.`,
      ],
    },
    {
      title: "Dedicated Ongoing Support for Continuous Compliance",
      features: [
        `Dedicated Client Manager: You'll have a single point of contact who possesses
deep knowledge of your specific account and compliance needs, ensuring
personalized and consistent service.`,
        `Monthly Compliance Reports: Receive regular, clear updates on your ESIC status,
contributions, key metrics, and any emerging trends relevant to your workforce.`,
        `Immediate Query Resolution: Our team is committed to prompt responses,
ensuring any questions or issues related to your ESIC compliance are addressed
swiftly.`,
        `Proactive Regulatory Updates: You'll receive timely notifications and expert
advice on new ESIC rules, rates, benefit changes, or specific directives, ensuring
you are always informed and compliant.`,
      ],
    },
    {
      title: "Key Employer ESIC Concerns We Resolve",
      features: [
        `Registration & Setup: Navigating the ESIC registration process, assessing ESIC
Act applicability, compiling required documentation, and managing ESIC code
allocation.`,
        `Ongoing Compliance: Ensuring accurate monthly contribution calculations and
payments,managing ESIC return filing and deadlines, and handling wage
ceiling and exemption compliance.`,
        `Risk & Audit Management: Addressing penalties for late ESIC payments,
understanding consequences of non-compliance, and providing ESIC audit
support.`,
        `Portal & Data Management: Assisting with ESIC employer portal login, employee
data updates,and generating ESIC ID`,
      ],
    },
    {
      title: "Employee ESIC Benefits Support We Ensure",
      features: [
        `Medical Benefit Access: Seamless access to ESIC medical care including
dispensaries and hospital networks for employees and their families.`,
        `Cash Benefits Eligibility: Ensuring eligibility for sickness benefit, maternity
benefit, disablement benefit, and unemployment allowance (ABVKY).`,
        `Other Benefits: Facilitating access to dependent benefits, funeral expenses, and
vocational rehabilitation.`,
        `Access Tools: Support for E-Pehchan card generation and checking ESIC
registration status of an employee online.`,
      ],
    },
  ],
};

export const epfManagementFaq = [
  {
    question: "How quickly can we start using your EPF management services?",
    answer: `We pride ourselves on efficiency; your EPF compliance can be fully operational with EPFDesk.com within
24 hours of onboarding completion.`,
  },
  {
    question:
      "What happens to our existing EPF records and historical filings?",
    answer: `We perform a secure and meticulous migration of all your historical data and records, ensuring seamless
continuity with zero disruption to your ongoing operations or past records.`,
  },
  {
    question:
      "Do you handle EPF compliance for multi-state operations across India?",
    answer: `Absolutely. Our nationwide operational footprint and deep understanding of varying state-level nuances
enable us to manage EPF compliance effectively across all Indian states and territories, regardless of your
company's dispersed locations.`,
  },
  {
    question: "How do you ensure accuracy in EPF calculations and filings?",
    answer: `Our process involves a multi-layer validation system, automated checks against EPFO norms, and final
expert review by our compliance specialists, resulting in a 99.9% accuracy rate in all submissions.`,
  },
  {
    question: "What if there's an EPFO audit of our company?",
    answer: `You can rest assured. We provide complete audit support, including compiling all necessary
documentation, offering expert guidance, and providing representation as required, making your audit
process stress-free.`,
  },
  {
    question:
      "What's included in the monthly service fee for Employer EPF Management?",
    answer: `Our monthly service fee is comprehensive, covering all core EPF compliance activities, dedicated client
support, timely regulatory updates, ongoing data management, and full audit-ready documentation.`,
  },
  {
    question:
      "How do you handle urgent EPF queries or unforeseen issues that arise?",
    answer: `Our dedicated client managers and expert teams are committed to rapid response, ensuring same-day
resolution for all urgent matters and critical EPF-related issues.`,
  },
];

export const esicFaq = [
  {
    question: "Who needs to comply with ESIC regulations in India?",
    answer: `ESIC generally applies to establishments with 10 or more employees (or 20+ in some states)
where an employee's monthly wage does not exceed ₹21,000 (or ₹25,000 for persons with
disabilities). We can confirm your specific applicability.`,
  },
  {
    question: "What are the current ESIC contribution rates?",
    answer: `As per current regulations, the employer contributes 3.25% and the employee contributes
0.75% of gross monthly wages, up to the defined wage ceiling.`,
  },
  {
    question: "Which salary components are included in ESIC calculations?",
    answer: `ESIC contributions are calculated on gross wages, typically encompassing basic pay,
dearness allowance (DA), house rent allowance (HRA), city compensatory allowance (CCA),
production incentives, night shift allowance, and other applicable allowances.`,
  },
  {
    question: "What penalties apply for late ESIC payments or non-compliance?",
    answer: `Delays in ESIC contribution payment incur an interest rate of 12% per annum. Additionally,
damages ranging from 5% to 25% of the arrears may be imposed depending on the period of
delay. Non-registration or repeated non-compliance can lead to further legal actions.`,
  },
  {
    question: "How does EPFDesk ensure timely ESIC filing?",
    answer: `We manage your complete ESIC filing process, including accurate calculation, automated
challan generation, multi-layer validation, and guaranteed submission before the 15th-of-thefollowing-
month deadline.`,
  },
  {
    question:
      "Will our employees still be able to access their ESIC benefits seamlessly?",
    answer: `Our monthly service fee is comprehensive, covering all core EPF compliance activities, dedicated client
support, timely regulatory updates, ongoing data management, and full audit-ready documentation.`,
  },
  {
    question:
      "How do you handle urgent EPF queries or unforeseen issues that arise?",
    answer: `Absolutely. Our accurate and timely compliance ensures seamless access for your
employees to all their entitled ESIC benefits, including medical care, various cash benefits,
and social security entitlements.`,
  },
  {
    question: "Can you help with new company ESIC registration?",
    answer: `Yes, we provide comprehensive registration support, from initial applicability assessment
and documentation to successful ESIC code allocation, streamlining the entire setup process
for new establishments.`,
  },
  {
    question: "How do you handle multi-state ESIC compliance?",
    answer: `Our nationwide operational footprint and deep understanding of varied state-level ESIC
regulations enable us to manage compliance effectively across all Indian states and
territories, providing consistent support for multi-location businesses.`,
  },
];

export const lwfFaq = [
  {
    question: "Is Labour Welfare Fund (LWF) mandatory in all Indian states?",
    answer: `No, LWF is a state-specific contribution and is implemented by individual state
legislatures.8 It is currently mandatory in only about 16-20 states and union territories
across India, with rules varying significantly.`,
  },
  {
    question:
      "What are the typical LWF contribution rates and how often are they paid?",
    answer: `LWF rates vary widely by state (e.g., ₹6 to ₹60 total per employee).9 Contributions can
be deducted monthly, half-yearly (e.g., June & December), or annually (e.g., December),
depending on the specific state's LWF Act.10`,
  },
  {
    question: "Which employees are typically covered under the LWF Act?",
    answer: `Generally, LWF applies to all employees except those in managerial or supervisory
positions earning above a certain wage threshold, which varies by state. We ensure
accurate applicability for your workforce in each state.`,
  },
  {
    question:
      "What penalties can apply for LWF non-compliance or late payments?",
    answer: `Penalties for LWF non-compliance vary by state but can include monetary fines (e.g.,
₹500 to ₹5,000+), interest on unpaid amounts (e.g., 12-25% per annum), and even
imprisonment (up to 3-6 months) for repeated or willful defaults.`,
  },
  {
    question:
      "Do you handle LWF compliance for companies operating in multiple states?",
    answer: `Absolutely. Our nationwide operational footprint and deep expertise in state-specific
LWF Acts enable us to manage and ensure flawless compliance across all Indian states
where you operate.`,
  },
  {
    question:
      "How do you ensure accuracy in LWF calculations given state variations?",
    answer: `Our process involves meticulous tracking of each state's unique LWF Act, specific
rates, wage components, and frequencies. We use multi-layer validation and expert
review to ensure 99.9% accuracy for every contribution and filing.`,
  },
  {
    question: "Can LWF payments be made online?",
    answer: `Many states now offer online portals for LWF payments and return filings (e.g.,
Maharashtra, Gujarat, Haryana).11 We utilize these online systems where available to
streamline the process. For states requiring manual submission, we handle that as well.`,
  },
];

export const ptFaq = [
  {
    question: "Is Professional Tax (PT) mandatory in all Indian states?",
    answer: `No, Professional Tax is a state-specific tax levied by individual state governments. It is
currently applicable in approximately 18-20 states and Union Territories in India, and its
rules vary significantly from one state to another.`,
  },
  {
    question: "What are the typical PT rates and how often are they paid?",
    answer: `PT rates are based on a slab system tied to income, varying by state. The maximum
annual PT payable by an individual cannot exceed ₹2,500. Payment frequency also
varies: some states require monthly payments, others quarterly, half-yearly, or annually,
depending on the tax liability or type of registration.`,
  },
  {
    question: "Which employees are typically covered under Professional Tax?",
    answer: `Generally, Professional Tax applies to all salaried individuals and self-employed
professionals earning above a certain income threshold, which is set by each state. We
ensure accurate applicability for your specific workforce in each state.`,
  },
  {
    question:
      "What penalties apply for late Professional Tax payments or non-compliance?",
    answer: `Penalties for PT non-compliance vary significantly by state but commonly include
interest on delayed payments (e.g., 1% to 2% per month), fixed fines for late registration
(e.g., ₹5 to ₹1,000 per day), and penalties for late filing or non-payment (e.g., 10% to 50%
of the tax due).`,
  },
  {
    question:
      "Do you handle Professional Tax compliance for companies operating in multiple states?",
    answer: `Yes, absolutely. Our nationwide operational footprint and deep expertise in each
state's unique Professional Tax laws enable us to seamlessly manage and ensure
flawless PT compliance across all Indian states where your company operates.`,
  },
  {
    question:
      "How do you ensure accuracy in PT calculations and filings given state variations?",
    answer: `Our process involves meticulous tracking of each state's unique PT Act, specific slab
rates, wage components, and due dates. We use multi-layer validation and expert review
to ensure 99.9% accuracy for every contribution and filing, protecting you from
discrepancies.`,
  },
  {
    question: "Can Professional Tax payments be made online?",
    answer: `Most states now offer online portals for Professional Tax payments and return filings
(e.g., Maharashtra, Karnataka, West Bengal). We utilize these online systems where
available to streamline the process for maximum efficiency.`,
  },
];

export const epfDeskFaq = [
  {
    question: "How do our employees get support from EPFDesk?",
    answer: `Employees simply email their EPF-related queries to a dedicated, secure EPFDesk
email address provided by us. Each email automatically generates a unique ticket ID,
and employees receive email updates on their query's progress.`,
  },
  {
    question: "What specific EPF issues can employees resolve through EPFDesk?",
    answer: `Employees can raise tickets for virtually all EPF-related queries including balance checks, UAN activation, KYC updates,
withdrawals (partial/full), transfers, pension matters, passbook updates, and portal login issues.`,
  },
  {
    question: "Is there any cost to our employees for using EPFDesk?",
    answer: `No, the EPFDesk platform and all its support services are included as part of your company's partnership with
EPFDesk.com. There is no direct cost to individual employees.`,
  },
  {
    question:
      "How quickly are employee EPF issues typically resolved through EPFDesk?",
    answer: `While resolution times can vary based on complexity and EPFO processing, our expert teams prioritize speed and accuracy.
Employees can track real-time progress, with most common queries resolved within days.`,
  },
  {
    question: "Can employees still contact our internal HR for EPF matters?",
    answer: `While EPFDesk is designed to be the primary resolution channel for EPF queries, employees always retain the option to
contact your internal HR for company-specific policy questions or non-EPF related matters.`,
  },
  {
    question:
      "How does EPFDesk ensure the security and privacy of employee data?",
    answer: `We employ industry-standard data encryption, secure login protocols, and strict data privacy policies, ensuring complete
confidentiality and compliance with data protection regulations.`,
  },
  {
    question:
      "What happens if an employee's case requires visiting EPFO offices?",
    answer: `Our unique on-ground teams across India handle these situations. For cases requiring physical presence at EPFO offices,
our local experts manage all interactions directly, ensuring resolution without burdening your employee or HR.`,
  },
  {
    question:
      "Can the email-based system handle high volumes of employee queries for large companies?",
    answer: `Yes, our robust email ticketing system and expert teams are specifically designed
and equipped to efficiently manage high query volumes for organizations of all sizes,
from mid-sized companies to large enterprises seamlessly.`,
  },
];

export const epfDeskServices = [
  {
    title: "Secure & Intuitive Employee Access (24/7)",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Dedicated Member Login Portal: Provides secure, personalized employee access to the EPFDesk platform,
making it their central hub for all EPF matters.`,
      `User-Friendly Interface: Designed for clarity and ease of use, ensuring all employees, regardless of technical
skill, can effortlessly navigate and find solutions.`,
      `Mobile-Responsive Design: Guarantees seamless support availability on any device – desktop, tablet, or
smartphone – for ultimate convenience.`,
      `Instant Expert Access: Employees get immediate access to EPF expertise without needing HR intervention,
streamlining their journey from query to resolution.`,
    ],
  },
  {
    title: "Streamlined Query Management System",
    icon: UsersIcon,
    items: [
      `Guided Ticket Creation: Employees can easily log tickets for virtually all EPF issues. This includes common
queries like "How to check EPF balance online," "How to activate UAN," "How to update EPF KYC," and "EPF
withdrawal process.`,
      `Real-time Progress Tracking: Each submitted ticket comes with a clear, live progress bar, transparent status
updates, and estimated resolution timelines. Employees always know where their request stands, reducing
anxiety and eliminating the need for constant follow-ups.`,
      `Automated Notifications: Employees receive proactive updates via email or SMS as their ticket progresses
through the resolution stages, keeping them fully informed without having to manually check the portal.`,
      `Comprehensive Issue Coverage: Our system handles a vast range of concerns, from simple queries (e.g.,
"How to download EPF passbook") to more complex EPF transfer cases and pension-related inquiries.`,
    ],
  },
  {
    title: "Expert-Led Resolution & Direct EPFO Liaison",
    icon: CalendarDaysIcon,
    items: [
      `Dedicated EPF Specialists: Our team comprises seasoned professionals who take full ownership of each
employee query, specializing in accurate resolutions for issues like "Why is my EPF passbook not updated?"
or "What to do if employer is not depositing PF?"`,
      `Direct EPFO Communication Channels: We utilize established channels for faster resolution and
documentation exchange with the Employees' Provident Fund Organisation (EPFO), eliminating the need for
your HR to act as a middleman.`,
      `Complex Case Management: Our expertise extends to intricate cases such as inter-company EPF transfers,
legacy account merging, pension payment processing, and resolving discrepancies in contribution
claims.`,
      `Complete Resolution Lifecycle: We manage the entire resolution journey, from the initial query submission to
final settlement or problem closure, including necessary employer attestation for EPF transfer claims and
approval of online EPF claims from an employer's perspective.`,
    ],
  },
  {
    title: "Nationwide On-Ground Support for Unresolved Cases",
    icon: UserCircleIcon,
    items: [
      `Local Teams Across Major Metros: Unlike purely online services, our on-ground teams in key Indian cities
(including Delhi NCR, Mumbai, Bengaluru, Chennai, and Hyderabad, Pune) provide invaluable physical support where it
matters most.`,
      `In-Person EPFO Office Representation: For complex or unresolved cases that mandate direct interaction,
submission of physical documents, or follow-ups at regional EPFO offices, our local teams ensure swift and effective
resolution. This addresses queries related to "EPFO portal usage" and "employer's guide to EPFiGMS."`,
      `Physical Verification Assistance: When required by EPFO processes (e.g., for certain withdrawal claims or death
claim processing), our teams provide on-ground assistance for physical verification, bridging any logistical gaps.Guaranteed Case Closure: This unique capability ensures even the most challenging or bureaucratic EPF issues are
resolved efficiently, guaranteeing 100% issue resolution regardless of geographical or administrative complexities.`,
    ],
  },
];

export const epfDeskStatergy = [
  {
    title: "Complete HR Team Liberation",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Significant reduction (e.g., 80%) in daily EPF-related employee queries: Freeing up countless hours
previously spent on routine tasks.`,
      `Valuable HR bandwidth reclaimed (e.g., 15-20 hours monthly): Allowing your HR team to focus on strategic
initiatives like talent acquisition, employee development programs, and fostering a vibrant workplace culture.`,
      `Eliminated EPFO liaison requirement: Your HR team no longer needs to be the middleman for individual
employee EPF issues, reducing their administrative overhead.`,
      `Shift to Strategic Focus: Empowering HR to lead retention strategies, succession planning, and workplace
culture building.`,
    ],
  },
  {
    title: "Enhanced Employee Experience & Satisfaction",
    icon: UsersIcon,
    items: [
      `Instant expert access: Employees experience swift resolution, eliminating frustration associated with delayed
responses or unanswered questions.`,
      `Transparent resolution process: Builds confidence in how their EPF matters are managed, as they can track
progress in real-time.`,
      `Professional support quality: The consistent and expert support enhances the perception of employer care
and commitment to employee well-being.`,
      `Empowered workforce: Employees feel more in control and informed about their provident fund matters,
leading to increased satisfaction and morale.`,
    ],
  },
];

// export const plansEpfDesk = {
//   mainTitle:
//     "Simple Implementation & Ongoing Support",
//   cards: [
//     {
//       id:"01",
//       title: "24-Hour Platform Activation",
//         bg: 'bg-[#fceff1]',
//       desc: [
//         `Platform Setup & Configuration: Our team handles the swift setup of your company's EPFDesk portal,
// customizing access configuration as needed.`,
//         `Employee Credential Generation/Guided Registration: We facilitate the creation of secure login credentials
// or guide your employees through a simple self-registration process.`,
//         `Comprehensive Employee Onboarding Kit Delivery: We provide easy-to-understand usage guides, FAQs, and
// tutorials to ensure your employees can quickly adopt and benefit from the platform.`,
//         `Immediate Platform Availability: Your employees can begin raising tickets and accessing expert support
// within 24 hours of onboarding completion, experiencing instant value.`,
//       ],
//     },
//     {
//       id:"02",
//       title: "Seamless Integration & Proactive Management",
//       bg: 'bg-[#f0f4ff]',
//       desc: [
//         `Optional HR Dashboard: While we handle direct employee resolution, your HR team can access an optional
// dashboard to monitor common query trends (anonymized), view overall ticket resolution rates, and identify areas for
// internal communication.`,
//         `Dedicated Client Manager: You'll have an assigned client manager who serves as your single point of contact for
// organizational-level support, reporting needs, and any high-level strategic consultations.`,
//         `Continuous Platform Enhancement: We constantly enhance the EPFDesk platform based on user feedback, evolving
// EPFO processes, and emerging employee needs, ensuring your employees always have access to the best support.`,
//         `Scalable Solution: Our platform and expert teams are built to handle ever-increasing query volumes, seamlessly
// growing with your workforce from mid-sized companies to large enterprises.`,
//       ],
//     },
//     {
//       id:"03",
//       title: "Common Employee Issues We Resolve:",
//       bg: 'bg-[#e7fbe9]',
//       desc: [
//         `EPF balance checking and passbook updates: Including "How to check EPF balance online" and resolving "Why is
// my EPF passbook not updated?`,
//         `UAN activation, linking, and Aadhaar integration: Expert assistance with "How to activate UAN," "How to know
// your UAN," and managing "Common UAN login issues and solutions.`,
//         `KYC document updates and verification: Guidance and processing for "How to update EPF KYC"and other member
// profile corrections.`,
//         `EPF withdrawal claims (partial and full settlement): Navigating "EPF withdrawal rules" and assisting with "How
// to withdraw EPF online" and required documents.`,
// `EPF transfer between employers and states: Expertly managing the "EPF transfer process" to ensure seamless
// continuity of funds.`,
// `Pension-related queries and processing: Understanding "Understanding EPS benefits" and assisting with "How
// to get EPS Scheme Certificate."`,

//       ],
//     },
//     {
//       id:"04",
//       title: "Rapid Implementation & Ongoing Support",
//        bg: 'bg-[#fff7ed]',
//       desc: [
//         `Initial Consultation: A quick, efficient session to understand your current ESIC
// setup, employee count, and specific organizational requirements.`,
//         `Secure Data Integration: Our team securely accesses necessary payroll and
// employee information via compliant channels for initial ESIC processing.`,
//         `ESIC Portal Setup & Linkage: We manage the efficient setup and linkage with the
// ESIC employer portal and other relevant online platforms.`,
//         `Brief Team Orientation: A concise, practical orientation session for your relevant
// HR and Finance staff to ensure a smooth operational handover and understanding
// of our processes.`,
//         `Full Service Activation: Your ESIC compliance is fully operational and seamlessly
// managed by EPFDesk.com experts within 24-48 hours of successful onboarding.`,
//       ],
//     },
//   ],
// };

export const plansEpfDesk = {
  mainTitle: "Simple Implementation & Ongoing Support",
  cards: [
    {
      id: "01",
      title: "24-Hour Platform Activation",
      bg: "bg-[#fceff1]",
      heading: "Experience immediate productivity with same-day activation.",
      body: [
        "Platform Setup & Configuration: Our team handles the swift setup of your company's EPFDesk portal, customizing access configuration as needed.",
        "Employee Credential Generation/Guided Registration: We facilitate the creation of secure login credentials or guide your employees through a simple self-registration process.",
        "Comprehensive Employee Onboarding Kit Delivery: Easy-to-understand guides, FAQs, and tutorials.",
        "Immediate Platform Availability: Employees can begin accessing support within 24 hours of onboarding.",
      ],
      image: "https://dummyimage.com/600x400/fceff1/333&text=Activation",
    },
    {
      id: "02",
      title: "Seamless Integration & Proactive Management",
      bg: "bg-[#f0f4ff]",
      heading: "Scale confidently with expert-led integration.",
      body: [
        "Optional HR Dashboard for insights and anonymized trend data.",
        "Dedicated Client Manager for strategic guidance and support.",
        "Continuous Platform Enhancement based on feedback and compliance changes.",
        "Scalable to handle increased volumes as your workforce grows.",
      ],
      image: "https://dummyimage.com/600x400/f0f4ff/333&text=Integration",
    },
    {
      id: "03",
      title: "Common Employee Issues We Resolve:",
      bg: "bg-[#e7fbe9]",
      heading: "Relieve HR stress with our comprehensive support.",
      body: [
        "EPF balance and passbook update support.",
        "UAN activation, Aadhaar linking, and login help.",
        "KYC updates and profile corrections.",
        "Assistance with EPF withdrawal rules and documentation.",
        "Expert-managed EPF transfers between employers/states.",
        "Pension-related EPS benefits and certification guidance.",
      ],
      image: "https://dummyimage.com/600x400/e7fbe9/333&text=Support",
    },
    {
      id: "04",
      title: "Rapid Implementation & Ongoing Support",
      bg: "bg-[#fff7ed]",
      heading: "Quick setup and dependable ESIC compliance.",
      body: [
        "Initial Consultation to understand your requirements.",
        "Secure Data Integration for payroll and employee info.",
        "ESIC Portal Setup and configuration.",
        "Concise Orientation for HR and Finance teams.",
        "Full Service Activation within 24-48 hours.",
      ],
      image: "https://dummyimage.com/600x400/fff7ed/333&text=Implementation",
    },
  ],
};

export const dummyCards = [
  {
    title: "Seamless Employee Lifecycle Management",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/67db42e6490940b072a7aeac_Run Payroll-p-500.webp",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Peace of mind for every pay cycle.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            With a unified employee record, your payroll information is always
            up to date. Lattice calculates payroll and tracks deductions and
            contributions so you don’t have to.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67db49b01109f51c7bb212c2_a9ba4cd2bfdef51480350a75b0569f4e_feat-image-payroll-unified-data.webp"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Tax Compliance",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/67db431bc50e51569725f6a0_Tax compliance.webp",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Simplify compliance with worry-free withholdings.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Lattice files taxes on your behalf, and gives you all the data you
            need for reporting and auditing.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc43c71f563ef421a38eaa_a44c8c1ae5b22c26ebccb00e1b2b04f0_feat-image-payroll-tax-compliance.webp"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Employee Self Service",
    description: "Reduce HR admin burden.",
    image: "/images/67db434ac50e515697262a2b_Employee self service-p-500.webp",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Empower employees with an easy, intuitive platform.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Let employees view and manage paystubs, bank accounts, and tax
            documents without asking HR.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e5669a66ad33bbfbabf4a3_feat-image-employee-self-service.webp"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Time Tracking",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/67db437a17d3aaef94ed34ad_Time tracking.webp",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get time back with built-in time tracking.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Cut down on manual data entry and errors with fast time card entry,
            review, and approval—synced automatically to payroll.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e2b51dfb00d11fe21ace11_feat-image-time-tracking.webp"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Integrations",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/67db439ff5e0bea132971dd4_Integrations.webp",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ensure every system works together seamlessly.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Lattice Payroll integrates with your preferred third-party apps,
            like benefits, 401(k), and more.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc42fb273047112e42863a_cc3ed45b7dc81f77e5b48e5f03f5f3e1_feat-image-payroll-integrations.webp"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const epfoCards = [
  {
    title: "Seamless Employee Lifecycle Management",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/seamless.png",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Seamless Employee Lifecycle Management
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Streamline onboarding, exits, and EPF compliance with automated UAN
            generation, real-time roster updates, verified member records, and
            expert handling of exit formalities — ensuring smooth transitions
            and regulatory alignment throughout the employee journey.
          </p>
        </div>
        <img
          src="/images/seamless.png"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Automated EPF Challan Generation & Error-Free Payments",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/automated-epf.png",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Automated EPF Challan Generation & Error-Free Payments
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Ensure accurate, compliant EPF challan creation with automated
            wage-based calculations, real-time validation checks, and timely
            reminders — eliminating filing errors, ensuring on-time payments,
            and protecting you from penalties and interest charges.
          </p>
        </div>
        <img
          src="/images/automated-epf.png"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Expert EPF Filings, Approvals & Compliance Assurance",
    description: "Reduce HR admin burden.",
    image: "/images/epf-filings.png",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Expert EPF Filings, Approvals & Compliance Assurance
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We handle all your monthly ECR filings, declarations, and approvals
            with precision—backed by secure digital records, audit-ready
            documentation, and proactive error correction—to ensure full EPFO
            compliance and peace of mind during audits or inspections.
          </p>
        </div>
        <img
          src="/images/epf-filings.png"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Proactive EPF Regulatory Updates & Strategic Advisory",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/epf-regulatory.png",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Proactive EPF Regulatory Updates & Strategic Advisory
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Stay ahead of compliance with real-time EPFO updates, personalized
            impact analysis, strategic policy guidance, and advance
            alerts—empowering your organization to adapt seamlessly to evolving
            EPF regulations and avoid last-minute surprises.
          </p>
        </div>
        <img
          src="/images/epf-regulatory.png"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Stay Compliant with Confidence",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/compliance.png",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Compliant with Confidence
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We decode every EPFO circular and regulatory change for you—offering
            tailored guidance, compliance checklists, and strategic insights—so
            your organization is always prepared, always compliant, and never
            caught off-guard.
          </p>
        </div>
        <img
          src="/images/compliance.png"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const slidesEpfo = {
  sectionTitle: "Why Companies Trust EPFDesk.com",
  sectionSubtitle: "Unmatched Expertise & Zero-Error Accuracy",
  items: [
    {
      title: "Consistently high accuracy rate in EPF filings (e.g., 99.9%)",
      desc: `Our multi-layered validation and expert review process minimizes discrepancies, significantly reducing "interest on delayed EPF contributions" for your business`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Zero audit failures across our client portfolio for 5+ years",
      desc: "A testament to our robust processes and unwavering commitment to compliance integrity, offering true peace of mind.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
      alt: "UI of AI calibration",
    },
    {
      title: "Rapid average response time (e.g., 2-4 hours) for client queries",
      desc: "Ensuring your concerns are addressed promptly by dedicated specialists, improving your operational efficiency.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
      alt: "UI of AI writing assistant",
    },
    {
      title: "100% deadline adherence for all submissions",
      desc: `Protecting you from "legal consequences of EPF non-compliance" and preserving your organization's reputation.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
  ],
};

export const epfDeskData = {
  title: "Streamlined Query Management System",
  largeCard: {
    title: "Guided Ticket Creation",
    desc: `Employees can easily log tickets for virtually all EPF issues. This includes common queries like "How to check EPF balance online," "How to activate UAN," "How to update EPF KYC," and "EPF withdrawal process."`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp",
    tag: "ebook",
  },
  sideCards: [
    {
      title:
        "Each submitted ticket comes with a clear, live progress bar, transparent status updates, and estimated resolution timelines.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "Real-time Progress Tracking",
    },
    {
      title:
        "Employees receive proactive updates via email or SMS as their ticket progresses through the resolution stages",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Automated Notifications",
    },
    {
      title: `Our system handles a vast range of concerns, from simple queries (e.g.,"How to download EPF passbook") to more complex EPF transfer cases and pension-related inquiries."`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Comprehensive Issue Coverage",
    },
  ],
};

export const epfoGridData = {
  title: "Complete HR & Finance Team Liberation",
  largeCard: {
    title: "Liberating HR & Finance Teams from Compliance Overload",
    desc: `Our platform handles end-to-end compliance and employee support, enabling your internal teams to focus on strategic priorities instead of repetitive administrative tasks.`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp", // Replace with a relevant image
    tag: "HR Automation",
  },
  sideCards: [
    {
      title:
        "Up to 90% reduction in compliance-related admin tasks: freeing up hours spent on manual work, resulting in measurable productivity gains.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "Productivity Boost",
    },
    {
      title:
        "80% faster onboarding process: our team handles EPF complexities so HR can onboard new hires swiftly without delays.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Fast Onboarding",
    },
    {
      title:
        "100% elimination of penalty & interest risks: Never worry about 'what if employer does not deposit PF' — we ensure flawless and timely compliance.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Penalty-Free Compliance",
    },
    {
      title:
        "75% reduction in employee queries to HR: EPF Desk enables self-service, reducing the burden on HR teams.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Query Deflection",
    },
  ],
};

export const epfDeskPlustabs = {
  title: "Expert-Led Resolution & Direct EPFO Liaison",
  tabs: [
    {
      id: "analytics",
      label: "Dedicated EPF Specialists",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            Our team comprises seasoned professionals who take full ownership of
            each employee query, specializing in accurate resolutions for issues
            like "Why is my EPF passbook not updated?" or "What to do if
            employer is not depositing PF?"
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "Direct EPFO Communication Channels",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We utilize established channels for faster resolution and
            documentation exchange with the Employees' Provident Fund
            Organisation (EPFO), eliminating the need for your HR to act as a
            middleman.
          </p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Complex Case Management",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            Our expertise extends to intricate cases such as inter-company EPF
            transfers, legacy account merging, pension payment processing, and
            resolving discrepancies in contribution claims.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Complete Resolution Lifecycle",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We manage the entire resolution journey, from the initial query
            submission to final settlement or problem closure, including
            necessary employer attestation for EPF transfer claims and approval
            of online EPF claims from an employer's perspective.
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const epfDeskMiddletabsData = {
  title: "Nationwide On-Ground Support for Unresolved Cases",
  tabs: [
    {
      id: "library",
      title: "Local Teams Across Major Metros",
      desc: "Unlike purely online services, our on-ground teams in key Indian cities (including Delhi NCR, Mumbai, Bengaluru, Chennai, and Hyderabad, Pune) provide invaluable physical support where it matters most.",
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "In-Person EPFO Office Representation",
      desc: `For complex or unresolved cases that mandate direct interaction, submission of physical documents, or follow-ups at regional EPFO offices, our local teams ensure swift and effective resolution. This addresses queries related to "EPFO portal usage" and "employer's guide to EPFiGMS."`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Physical Verification Assistance",
      desc: "When required by EPFO processes (e.g., for certain withdrawal claims or death claim processing), our teams provide on-ground assistance for physical verification, bridging any logistical gaps.",
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Guaranteed Case Closure",
      desc: "This unique capability ensures even the most challenging or bureaucratic EPF issues are resolved efficiently, guaranteeing 100% issue resolution regardless of geographical or administrative complexities.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const epfoMiddletabsData = {
  title: "Implementation & Support",
  tabs: [
    {
      id: "library",
      title: "Initial Consultation",
      desc: "A brief session to understand your current EPF setup and specific needs.",
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "Secure Portal Integration",
      desc: ` Our team manages the secure integration with relevant EPFO portals and gathers necessary access details.`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Brief Team Orientation",
      desc: " A quick, efficient orientation session with your relevant staff to ensure a smooth handover.",
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Full Service Activation",
      desc: "Your EPF compliance is fully operational, seamlessly managed by EPFDesk.com experts within 24 hours.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const epfoPlustabs = {
  title: "Dedicated Support Team",
  tabs: [
    {
      id: "analytics",
      label: "Dedicated Client Manager",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            A single point of contact who understands your specific account and
            compliance needs, ensuring personalized service.
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "Monthly Compliance Reports & Insights",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>Regular updates on your compliance status and performance.</p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Immediate Resolution of EPF-related Queries",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            Your dedicated manager ensures any questions or issues are addressed
            promptly.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Proactive Communication on Regulatory Changes",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            You're informed of relevant updates, ensuring continuous compliance.
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const slidesEsic = {
  sectionTitle: "Comprehensive ESIC Compliance Management Services",
  sectionSubtitle: "ESIC Registration & Applicability Management",
  items: [
    {
      title: "Complete ESIC registration process",
      desc: `We guide you through and meticulously handle all steps for "ESIC registration process online India," including online application, documentation, and swift ESIC code allocation.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Precise applicability assessment",
      desc: `We accurately determine "Who is eligible for ESIC registration?" based on employee count (e.g., 10+ or 20+ depending on state) and wage limits, ensuring correct and ongoing coverage without a hitch.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
      alt: "UI of AI calibration",
    },
    {
      title: "Rapid average response time (e.g., 2-4 hours) for client queries",
      desc: "Ensuring your concerns are addressed promptly by dedicated specialists, improving your operational efficiency.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
      alt: "UI of AI writing assistant",
    },
    {
      title: "Required documentation compilation",
      desc: `We assist in gathering and submitting all "documents required for ESIC registration," streamlining the initial setup within statutory time limits.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
    {
      title: "Coverage continuity management",
      desc: `We advise on crucial aspects like the "once covered, always covered" rule, ensuring compliance even if the number of employees temporarily goes below the minimum limit.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
  ],
};

export const esicPlustabs = {
  title: "Accurate ESIC Contribution Calculation & Payment",
  tabs: [
    {
      id: "analytics",
      label: "Precision contribution calculation",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We perform accurate "ESIC calculation on salary" using the "current
            ESIC contribution rate employer and employee" (e.g., Employer:
            3.25%, Employee: 0.75%) and the "ESIC wage ceiling current" (₹21,000
            for general employees, ₹25,000 for persons with disabilities).
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "Correct wage component inclusion",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We meticulously identify and include all applicable "salary
            components for ESIC wages" (Basic, DA, HRA, CCA, production
            incentive, night shift, meal/food allowance), ensuring "ESIC is
            deducted on gross salary, not just basic."
          </p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Exemption management",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We accurately identify and manage "exemptions from ESIC
            contributions for low-wage employees" (e.g., daily wage up to ₹176),
            optimizing your deductions while remaining compliant.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Timely payment facilitation",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We generate accurate "ESIC challan online" and support "how to pay
            ESIC contribution online," guaranteeing deposits are made well
            before the "Monthly ESIC return filing deadline"
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const esicGridData = {
  title: "Seamless Monthly Filings & Employee Data Management",
  largeCard: {
    title: "Monthly ESIC return filing",
    desc: ` We manage the entire "ESIC return filing process" with 100% accuracy and punctuality before the 15th of the following month deadline.`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp", // Replace with a relevant image
    tag: "HR Automation",
  },
  sideCards: [
    {
      title: `We handle "how to update employee details in ESIC portal by employer," ensuring accurate records for your workforce, including "generating ESIC Code number" (17-digit ID) and managing "ESIC login for insured person" access.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "Employee data updates & IP Management",
    },
    {
      title: `We expertly manage all interactions on the "ESIC employer login portal," ensuring accurate data reflection, complete submissions, and efficient grievance management (like EPFiGMS)`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Employer Portal Navigation",
    },
    {
      title: `We meticulously track "ESIC Contribution Period vs. Cash Benefit Period" to maintain continuous coverage for your employees, even if salaries briefly exceed the ceiling.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Contribution Period Tracking",
    },
  ],
};

export const esicMiddletabsData = {
  title: "Proactive Regulatory Updates & Risk Management",
  tabs: [
    {
      id: "library",
      title: "Continuous regulatory monitoring",
      desc: `Our dedicated experts meticulously monitor the latest "ESIC Act amendments," "ESIC circulars," and "ESIC contribution rate changes."`,
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "Impact analysis & strategic advice",
      desc: `We translate complex legal updates into clear, actionable business insights tailored to your operations, ensuring you understand the "consequences of ESIC non-compliance.`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Penalty prevention strategies",
      desc: `We implement proactive measures to safeguard against "what happens if employer does not pay ESIC contribution?" and other common non-compliance scenarios.`,
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Audit readiness support",
      desc: " We provide complete assistance for any ESIC inspections or audits, ensuring you are fully prepared with complete documentation and expert representation.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const esciCards = [
  {
    title: "Guaranteeing ESIC Benefits Access for Your Workforce",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/esic-benefits.png",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Guaranteeing ESIC Benefits Access for Your Workforce
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We ensure accurate employee registration and contribution tracking,
            enabling seamless access to ESIC medical care, cash benefits, and
            support services. This includes eligibility for family medical
            treatment, sickness and maternity benefits, disablement and
            unemployment allowances, dependent and funeral benefits, as well as
            tools like the E-Pehchan card and online registration verification.
          </p>
        </div>
        <img
          src="/images/esic-benefits.png"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Proven ESIC Expertise & Zero-Risk Compliance",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/esic-expertise.png",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Proven ESIC Expertise & Zero-Risk Compliance
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We deliver 99.9% accuracy in ESIC filings, zero audit failures over
            5+ years, rapid 2–4 hour response times for client queries, and 100%
            on-time submissions—eliminating financial risks, penalties, and
            compliance-related legal exposure.
          </p>
        </div>
        <img
          src="/images/esic-expertise.png"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Complete HR & Finance Team Liberation",
    description: "Reduce HR admin burden.",
    image: "/images/hr-liberation.png",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Complete HR & Finance Team Liberation
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Achieve up to 80% reduction in ESIC-related admin workload,
            eliminate penalties and legal risks, and redirect resources toward
            strategic initiatives—boosting efficiency, financial health, and
            business growth.
          </p>
        </div>
        <img
          src="/images/hr-liberation.png"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Rapid Implementation & Ongoing Support",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/rapid-implementation.png",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Rapid Implementation & Ongoing Support
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            From initial consultation to full service activation, we ensure
            secure data integration, ESIC portal setup, and quick team
            orientation—enabling complete ESIC compliance within 24–48 hours.
          </p>
        </div>
        <img
          src="/images/rapid-implementation.png"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "End-to-End ESIC Compliance, Accuracy & Employee Empowerment",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/esic-compailance.png",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            End-to-End ESIC Compliance, Accuracy & Employee Empowerment
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We ensure complete ESIC compliance with 99.9% filing accuracy, zero
            audit failures, and 100% deadline adherence—eliminating penalties
            and legal risks. Our rapid response support, seamless onboarding,
            and secure data integration streamline operations by reducing admin
            workload up to 80%. From enabling access to medical and cash
            benefits to safeguarding your reputation and freeing up HR
            resources, EPFDesk delivers expert-led, full-service ESIC management
            within 24–48 hours.
          </p>
        </div>
        <img
          src="/images/esic-compailance.png"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const lwfCards = [
  {
    title: "Facilitating Employee Access to LWF Welfare Schemes",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/lwf-welfare.png",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Facilitating Employee Access to LWF Welfare Schemes
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We facilitate seamless access to Labour Welfare Fund (LWF)
            benefits—including medical care, educational scholarships, housing
            support, skill development programs, and social security
            schemes—ensuring worker well-being and family upliftment through
            state-backed initiatives.
          </p>
        </div>
        <img
          src="/images/lwf-welfare.png"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Why Companies Trust LWF Compliance with EPFDesk.com",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/lwf-compliance.png",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Why Companies Trust LWF Compliance with EPFDesk.com
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            With 99.9% accuracy in LWF filings, zero audit failures in 5+ years,
            and 100% on-time submissions, we eliminate penalties and legal risks
            across state regulations. Our expert team ensures rapid 2–4 hour
            response times, delivering reliable, state-compliant LWF management.
          </p>
        </div>
        <img
          src="/images/lwf-compliance.png"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Go Live with LWF Compliance in 24-48 Hours (Multi-State Ready)",
    description: "Reduce HR admin burden.",
    image: "/images/lwf-goLive.png",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Go Live with LWF Compliance in 24-48 Hours (Multi-State Ready)
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            From initial assessment to full portal setup, we ensure secure data
            integration, multi-state board linkage, and quick HR
            orientation—enabling smooth, compliant LWF operations tailored to
            your organization’s footprint.
          </p>
        </div>
        <img
          src="/images/lwf-goLive.png"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Key Employer LWF Concerns We Resolve",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/lwf-concern.png",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Key Employer LWF Concerns We Resolve:
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We handle everything from determining LWF applicability and
            registration to accurate contribution calculations, timely filings,
            and remittance. Our expert team ensures audit readiness, digital
            compliance, and seamless coordination across multiple state-specific
            LWF regulations.
          </p>
        </div>
        <img
          src="/images/lwf-concern.png"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title:
      "Employee LWF Benefits Support We Ensure (by facilitating eligibility)",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/lwf-benefits.png",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Employee LWF Benefits Support We Ensure (by facilitating
            eligibility)
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Employees gain access to medical care, educational scholarships,
            emergency financial aid, marriage and funeral support, as well as
            opportunities for skill development and recreational
            activities—ensuring holistic well-being through Labour Welfare Fund
            provisions.
          </p>
        </div>
        <img
          src="/images/lwf-benefits.png"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const slideLWF = {
  sectionTitle: "Comprehensive Labour Welfare Fund Compliance Services",
  sectionSubtitle: "LWF Applicability & Registration Across India",
  items: [
    {
      title: "Precise applicability assessment",
      desc: ` We accurately determine "LWF applicability rules India" for your establishment in each state, considering factors like employee thresholds (which vary significantly by state) and industry type`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "State-specific registration management",
      desc: `We guide you through and handle all steps for LWF registration with the respective State Labour Welfare Boards, ensuring timely and correct setup.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
      alt: "UI of AI calibration",
    },
    {
      title: "Multi-state coverage analysis",
      desc: `We manage the complexities for companies with branches in various states, ensuring compliance where "LWF is mandatory" and where it is "not applicable" (e.g., states like Uttar Pradesh, Bihar which may not have LWF)`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
      alt: "UI of AI writing assistant",
    },
    {
      title: "Required documentation compilation",
      desc: `We assist in gathering and submitting all necessary documents for LWF registration and ongoing compliance in each state.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
  ],
};

export const lwfGridData = {
  title: "Accurate LWF Contribution Calculation & Payment",
  largeCard: {
    title: "Precision Contribution Calculation",
    desc: `We accurately determine "how much is the LWF contribution" for both employer and employee shares, navigating varying "LWF contribution rates by state" (e.g., Maharashtra, Karnataka, Delhi)`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp", // Replace with a relevant image
    tag: "HR Automation",
  },
  sideCards: [
    {
      title: `We precisely identify "what salary components are included in LWF wages" and whether "LWF deduction is on gross salary or basic," aligning with each state's specific LWF Act.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "State-specific Wage Inclusion",
    },
    {
      title: `We track and ensure correct deduction based on the state's mandate – whether monthly, half-yearly, or annually, clarifying queries like "What is the frequency of LWF deduction?"`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Deduction Frequency Management",
    },
    {
      title: ` We generate accurate LWF challans and support "online LWF payments" where available, ensuring deposits are made well before the varied "LWF due dates" for each state.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Timely Payment Facilitation",
    },
  ],
};

export const lwfPlustabs = {
  title: "Seamless LWF Returns & Data Management",
  tabs: [
    {
      id: "analytics",
      label: "State-Specific Return Filing",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We manage the entire "LWF return filing process" using the correct
            "LWF forms" (e.g., Form A, Form F, Form A-1, which vary by state)
            with accuracy and punctuality as per each state's deadline.
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "Employee Data Management",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We ensure all employee data relevant for LWF contributions is
            accurately maintained and updated, handling nuances like wage
            thresholds and employee categories for applicability in each state.
          </p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Digital Record Keeping",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We maintain meticulous digital records of all LWF challans, payment
            receipts, and filed returns, creating a robust audit trail for
            future reference.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Online Portal Navigation",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We expertly manage interactions with various State Labour Welfare
            Board online portals, ensuring accurate data reflection and complete
            submissions across diverse systems.
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const lwfMiddletabsData = {
  title: "Proactive LWF Regulatory Advisory & Risk Mitigation",
  tabs: [
    {
      id: "library",
      title: "Continuous Regulatory Monitoring",
      desc: `Our dedicated experts continuously monitor the highly fragmented "LWF Act states India" for any new amendments, circulars, or rate changes from each respective State Labour Welfare Board.`,
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "Impact Analysis & Strategic Advice",
      desc: `We translate complex, state-specific legal updates into clear, actionable insights for your business operations, ensuring you understand the implications and "penalties for noncompliance with LWF.`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Penalty Prevention Strategies",
      desc: `We implement proactive measures to safeguard against "what happens if employer does not pay ESIC contribution?" and other common non-compliance scenarios.`,
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Audit Readiness Support",
      desc: " We provide complete assistance for any LWF inspections or audits, ensuring you are fully prepared with complete documentation and expert guidance.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const pfCards = [
  {
    title: "Unmatched PT Expertise & Zero-Risk Compliance Across States",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/pt-expertise.png",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Unmatched PT Expertise & Zero-Risk Compliance Across States
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            With 99.9% accuracy, zero audit failures over 5+ years, and 100%
            on-time PT filings, we eliminate penalties and audit risks across
            state jurisdictions. Our experts ensure fast 2–4 hour response times
            and seamless, compliant Professional Tax management.
          </p>
        </div>
        <img
          src="/images/pt-expertise.png"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Complete HR & Finance Team Liberation",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/hr-liberation.png",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Complete HR & Finance Team Liberation
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We reduce admin workload by up to 85%, eliminate penalties and legal
            risks across states, and protect your brand’s compliance reputation.
            Our streamlined PT management enables HR and Finance teams to focus
            on strategic growth instead of navigating complex state tax systems.
          </p>
        </div>
        <img
          src="/images/hr-liberation.png"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Go Live with PT Compliance in 24-48 Hours (Multi-State Ready)",
    description: "Reduce HR admin burden.",
    image: "/images/rapid-implementation.png",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Go Live with PT Compliance in 24-48 Hours (Multi-State Ready)
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            From initial consultation to full service activation within 24–48
            hours, we handle secure data integration, multi-state tax portal
            setup, and HR/Finance team orientation—ensuring seamless, compliant
            Professional Tax operations from day one.
          </p>
        </div>
        <img
          src="/images/rapid-implementation.png"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Dedicated Ongoing Support for Continuous Multi-State Adherence",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/lwf-concern.png",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Dedicated Ongoing Support for Continuous Multi-State Adherence
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Get a dedicated client manager, timely compliance reports, rapid
            query resolution, and proactive regulatory updates—ensuring smooth,
            transparent, and fully informed Professional Tax management across
            all operating states.
          </p>
        </div>
        <img
          src="/images/lwf-concern.png"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Key Employer PT Concerns We Resolve",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/lwf-benefits.png",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Key Employer PT Concerns We Resolve
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We handle end-to-end Professional Tax compliance—from applicability
            assessment and state-wise registration to accurate contribution
            calculation, timely filings, and digital remittance. Our expert team
            ensures audit readiness, eliminates risks, and manages multi-state
            compliance seamlessly across PTEC and PTRC requirements.
          </p>
        </div>
        <img
          src="/images/lwf-benefits.png"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const ptPlustabs = {
  title: "PT Applicability & Registration Across India",
  tabs: [
    {
      id: "analytics",
      label: "Precise applicability assessment",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We accurately determine "Is professional tax mandatory in all states
            in India?" and identify "Which states have professional tax in
            India" relevant to your business operations. We assess applicability
            based on employee count, income thresholds, and specific state laws
            (e.g., in Maharashtra, Karnataka, West Bengal, Gujarat, Tamil Nadu,
            Telangana, Kerala)
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "State-specific registration management",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We guide you through and handle all steps for the "Professional tax
            registration online process," ensuring you obtain the correct
            Professional Tax Registration Certificate (PTRC) for employers or
            Professional Tax Enrollment Certificate (PTEC)for the establishment,
            within statutory timelines.
          </p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Required documentation compilation",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We assist in gathering and submitting all necessary "documents
            required for professional tax registration," streamlining the
            initial setup for each applicable state.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Coverage analysis for evolving operations",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We provide insights into "Professional tax enrollment certificate
            (PTEC) vs registration certificate (PTRC)" and manage compliance as
            your workforce or business locations change.
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const slidesPt = {
  sectionTitle: " Comprehensive Professional Tax Compliance Services",
  sectionSubtitle: "Accurate PT Contribution Calculation & Payment",
  items: [
    {
      title: "Precision Contribution Calculation",
      desc: `We accurately determine "how to calculate professional tax on salary" for both employer and employee shares, meticulously applying varying "Professional tax slab rates by state" (e.g., "Maharashtra professional tax slab," "Karnataka PT slab rates").`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Correct Wage Component Inclusion",
      desc: `We precisely identify whether "professional tax is deducted from gross salary or basic salary," aligning with each state's specific PT Act and ensuring accurate calculation against the "professional tax exemption limit" (minimum salary threshold).`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
      alt: "UI of AI calibration",
    },
    {
      title: "Deduction Frequency Management",
      desc: "We track and ensure correct deduction based on the state's mandate, whether monthly, half-yearly, or annually, clarifying complex scenarios like higher February deductions in Maharashtra.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
      alt: "UI of AI writing assistant",
    },
    {
      title: "Timely Payment Facilitation",
      desc: ` We generate accurate PT challans and support "how to pay professional tax online," ensuring deposits are made well before the varied "Professional tax due dates by state" (e.g., 20th of succeeding month in Karnataka, 15th in Gujarat)`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
  ],
};

export const ptGridData = {
  title: "Seamless PT Returns & Data Management",
  largeCard: {
    title: "State-Specific Return Filing",
    desc: `We manage the entire "Professional tax return filing online"process, using the correct "PT return forms by state" (e.g., Form III for Maharashtra) with 100% accuracy and punctuality as per each state's varied deadlines.`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp", // Replace with a relevant image
    tag: "HR Automation",
  },
  sideCards: [
    {
      title: `We ensure all employee data relevant for PT contributions is accurately maintained and updated, handling nuances like wage thresholds and employee categories for applicability in each state.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "Employee Data Management",
    },
    {
      title: `We maintain meticulous digital records of all PT challans, payment receipts, and filed returns, creating a robust audit trail for future reference and addressing queries about "Professional tax challan download.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Digital Record Keeping",
    },
    {
      title: `We expertly manage interactions with various State Tax Department online portals (the "professional tax login portal state wise"), ensuring accurate data reflection and complete submissions across diverse systems.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Online Portal Navigation",
    },
  ],
};

export const ptMiddletabsData = {
  title: "Proactive PT Regulatory Advisory & Risk Mitigation",
  tabs: [
    {
      id: "library",
      title: "Continuous regulatory monitoring",
      desc: `Our dedicated experts continuously monitor the highly fragmented Professional Tax Acts for any new amendments, circulars, or rate changes from each respective state.`,
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "Impact Analysis & Strategic Advice",
      desc: `We translate complex, state-specific legal updates into clear, actionable insights for your business operations, ensuring you understand the implications and "consequences of not paying professional tax`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Penalty prevention strategies",
      desc: ` We implement proactive measures to safeguard against "penalty for late professional tax payment" (which can be daily fines or percentage of tax due) and other forms of "legal action for PT non-compliance.`,
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Audit readiness support",
      desc: " We provide complete assistance for any Professional Tax inspections or audits, ensuring you are fully prepared with complete documentation and expert guidance.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const slidesLanding = {
  // sectionTitle: "Why Companies Trust EPFDesk.com",
  // sectionSubtitle: "Unmatched Expertise & Zero-Error Accuracy",
  items: [
    {
      title: "Monthly Compliance Panic",
      desc: `You're racing against monthly EPFO & ESIC deadlines, juggling multiple state-wise portals for EPF, ESIC, PT, and LWF instead of growing your business – turning you into a full-time compliance officer rather than the innovator you set out to be.`,
      img: "/images/Test_Compliance.png",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Employee Frustration & HR Burnout",
      desc: "Unresolved EPF & ESIC Issues impact employee morale and productivit y, leading to increased HR Workload from queries.",
      img: "/images/Audit_Ready.png",
      alt: "UI of AI calibration",
    },
    {
      title: "Statutory penalties and audit risk.",
      desc: "Non-compliance with EPFO, ESIC, and other statutory requirements can trigger penalties up to 100% of dues, plus interest and potential audit risks that could cripple your business finances.",
      img: "/images/Audit_Ready.png",
      alt: "UI of AI writing assistant",
    },
    {
      title: "The Cost of Lost Productivity and Focus.",
      desc: `HR and Finance teams spend hours on employee linking, KYC approvals, and portal data entry instead of focusing on talent development, financial strategy, and business growth that actually drives revenue.`,
      img: "/images/Audit_Ready.png",
      alt: "UI of AI team trends",
    },
  ],
};

export const slidesStacking = {
  // sectionTitle: "Why Companies Trust EPFDesk.com",
  // sectionSubtitle: "Unmatched Expertise & Zero-Error Accuracy",
  items: [
    {
      title: "Hands-on Government Expertise",
      desc: `Our team combines deep portal expertise with on-ground EPFO office experience, legal knowledge, and proven audit handling capabilities. From complex registrations and deregistrations to navigating ever-changing compliance procedures, our experts have mastered every aspect of statutory compliance.`,
      img: "/images/Audit_Ready.png",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Nationwide Operational Footprint",
      desc: "Our offices across major metros and presence in almost all states ensure seamless statutory compliance support wherever your business operates. Your employees can access social security benefits without geographical barriers.",
      img: "/images/Audit_Ready.png",
      alt: "UI of AI calibration",
    },
    {
      title: "Proactive Regulatory Guidance",
      desc: "We monitor every update in EPFO, ESIC, PT, and LWF laws. Our team ensures your company is compliant before new mandates take effect—no surprises, no gaps.",
      img: "/images/Audit_Ready.png",
      alt: "UI of AI writing assistant",
    },
    {
      title: "Dedicated Client Managers",
      desc: `Your assigned manager becomes an extension of your team, managing all compliance obligations proactively so you can focus on growth. No missed deadlines, no stress—just total confidence.`,
      img: "/images/Audit_Ready.png",
      alt: "UI of AI team trends",
    },
  ],
};

export const heroSlides = [
  {
    id: 1,
    gradientClass:
      "linear-gradient(to bottom right, #818cf8, #a855f7, #6b21a8)",
    icon: "🚀",
    title:
      "ESIC Compliance: Effortless Management for Employee Well-being & Business Protection",
    subtitle:
      "Master ESIC compliance with EPFDesk.com. We handle registration, accurate contributions, monthly filings & ensure all employee benefits. Avoid penalties, achieve 99.9% accuracy, and empower your HR.",
  },
  {
    id: 2,
    gradientClass:
      "linear-gradient(to bottom right, #f472b6, #ec4899, #ef4444)",
    icon: "🎯",
    title: "EPFDesk: Your Direct Line to Effortless EPF Solutions & Support",
    subtitle:
      "EPFDesk empowers your employees with instant EPF query resolution via email. Check balance, track claims, update KYC – all issues handled by our experts. Free your HR team from daily EPF queries.",
  },
  {
    id: 3,
    gradientClass:
      "linear-gradient(to bottom right, #60a5fa, #38bdf8, #22d3ee)",
    icon: "⚡",
    title:
      "Labour Welfare Fund (LWF) Compliance: Navigating State Nuances for Flawless Adherence",
    subtitle:
      "Master LWF compliance across India with EPFDesk.com. We handle state-specific calculations, filings & ensure timely adherence. Avoid penalties, achieve 100% accuracy for LWF.",
  },
  {
    id: 4,
    gradientClass:
      "linear-gradient(to bottom right, #4ade80, #2dd4bf, #34d399)",
    icon: "🌟",
    title:
      "Professional Tax Compliance: Master Multi-State Nuances, Ensure Flawless Adherence",
    subtitle:
      "Master Professional Tax compliance across India with EPFDesk.com. We handle state-specific calculations, precise filings, and ensure timely adherence. Avoid penalties, achieve 100% accuracy for PT.",
  },
  {
    id: 5,
    gradientClass:
      "linear-gradient(to bottom right, #fb7185, #f9a8d4, #facc15)",
    icon: "🤝",
    title:
      "Employer EPF Management: Streamline Your Compliance & Unleash HR's Potential",
    subtitle:
      "Master employer EPF compliance with EPFDesk.com. We automate challans, manage filings & mitigate risks, freeing your HR & Finance teams for strategic growth. Expert-led solutions for Indian businesses.",
  },
  {
    id: 6,
    gradientClass:
      "linear-gradient(to bottom right, #b19cd9, #c8a8e9, #8ec5d6, #7fb3d3)",
    icon: "🛡️",
    title: `POSH Act Compliance: Fostering Safe
Workplaces, Ensuring Legal Integrity`,
    subtitle: `EPFdesk.com offers expert POSH Act compliance in India, including
a dedicated 3rd-party complaint hotline. Establish IC, conduct training, handle
complaints & ensure 100% adherence to POSH Act 2013 for safe workplaces.`,
  },
  {
    id: 7,
    gradientClass:
      "linear-gradient(to bottom right, #ddd6fe, #c4b5fd, #fbcfe8)",
    icon: "👁️",
    title: `Labour & HR Registrations & Licenses:
Master Multi-State Compliance,
Eliminate Risk`,
    subtitle: `Workforce Limited offers expert Labour & HR Registrations &
Licenses services in India. We handle Shop Act, CLRA, Factories Act, Contract Labour,
BOCW, and all mandatory renewals. Ensure compliance, avoid penalties.`,
  },
  {
    id: 8,
    gradientClass:
      "linear-gradient(to bottom right, #fca5a5, #fdba74, #fcd34d)",
    icon: "🌟",
    title: `Hospitality Compliance: The Hidden 
Cost of Guest Experience`,
    subtitle: ` Workforce Limited offers specialized compliance for restaurants & 
hotels. Master EPF, ESIC, POSH & labor laws. We protect your brand and manage high 
attrition, from a single outlet to a national chain.`,
  },
];

export const verticalCardsEsic = {
  mainTitle: "Comprehensive ESIC Compliance Management Services",
  mainSubtitleVer: "ESIC Registration & Applicability Management",
  subText:
    "Ensure your establishment is correctly registered and continuously compliant with ESIC regulations from day one.",
  cardsVer: [
    {
      title: "Monthly ESIC return filing",
      subtitle: `We manage the entire ESIC return filing process with 100% accuracy and punctuality before the 15th of the following month deadline.`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Employee data updates & IP Management",
      subtitle: `We handle how to update employee details in ESIC portal by employer, ensuring accurate records for your workforce, including generating ESIC Code number (17-digit ID) and managing ESIC login for insured person access.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Employer Portal Navigation",
      subtitle: `We expertly manage all interactions on the ESIC employer login portal, ensuring accurate data reflection, complete submissions, and efficient grievance management like EPFiGMS`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Contribution Period Tracking",
      subtitle: `We meticulously track ESIC Contribution Period vs. Cash Benefit Period to maintain continuous coverage for your employees, even if salaries briefly exceed the ceiling.`,
      icon: "🦋",
      bubble: "Transform!",
      bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Swift, accurate ESIC registration, guaranteed applicability compliance,
and complete protection from non-registration penalties and legal repercussions.`,
      icon: "❤️",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const horizontalCardsEsic = {
  mainSubtitleHor: "Seamless Monthly Filings & Employee Data Management",
  subTextHor:
    "Ensure flawless record-keeping, simplified portal interactions, and comprehensive employee data updates for continuous compliance.",
  cardsHor: [
    {
      title: "Complete ESIC registration process",
      subtitle: `We guide you through and meticulously handle all steps for ESIC registration process online India, including online application, documentation, and swift ESIC code allocation.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Precise applicability assessment",
      subtitle: `We accurately determine Who is eligible for ESIC registration? based on employee count 10+ or 20+ depending on state and wage limits, ensuring correct and ongoing coverage without a hitch.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Rapid average response time 2-4 hours for client queries",
      subtitle:
        "Ensuring your concerns are addressed promptly by dedicated specialists, improving your operational efficiency.",
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Required documentation compilation",
      subtitle: `We assist in gathering and submitting all documents required for ESIC registration, streamlining the initial setup within statutory time limits.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
    {
      title: "Coverage continuity management",
      subtitle: `We advise on crucial aspects like the once covered, always covered rule, ensuring compliance even if the number of employees temporarily goes below the minimum limit.`,
      icon: "⚡",
      bubble: "Empower!",
      bg: "bg-gradient-to-br from-[#84fab0] to-[#8fd3f4]",
    },
    {
      title: "Your Benefit",
      subtitle:
        "Effortless monthly compliance, accurate employee records for seamless benefit access, and eliminated administrative burden on your HR teams for ESIC data management.",
      icon: "❤️",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
  ],
};

export const largeCardsEsic = {
  subTitle: "Proactive Regulatory Updates & Risk Management",
  subText:
    "Stay ahead of ESIC law changes with expert guidance that prevents costly non-compliance and transforms risks into strategic advantages.",
  cards: [
    {
      title: "Continuous regulatory monitoring",
      subtitle:
        "Our dedicated experts meticulously monitor the latest ESIC Act amendments, ESIC circulars, and ESIC contribution rate changes.",
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Impact analysis & strategic advice",
      subtitle:
        "We translate complex legal updates into clear, actionable business insights tailored to your operations, ensuring you understand the consequences of ESIC non-compliance.",
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Penalty prevention strategies",
      subtitle:
        "We implement proactive measures to safeguard against what happens if employer does not pay ESIC contribution? and other common non-compliance scenarios.",
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Audit readiness support",
      subtitle:
        "We provide complete assistance for any ESIC inspections or audits, ensuring you are fully prepared with complete documentation and expert representation",
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Perpetual compliance, complete penalty protection, and the strategic
advantage of early adaptation to regulatory shifts, maintaining your business's integrity
and reputation.`,
      icon: "❤️",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
  ],
};

export const pastelCardsEsic = {
  subTitle: "Accurate ESIC Contribution Calculation & Payment",
  subText:
    "Eliminate calculation errors and ensure timely payments, rigorously protecting your business from penalties and interest.",
  cards: [
    {
      title: "Precision contribution calculation",
      subtitle: `We perform accurate ESIC calculation on salary using the current ESIC contribution rate employer and employee, Employer: 3.25%, Employee: 0.75% and the ESIC wage ceiling current ₹21,000 for general employees, ₹25,000 for persons with disabilities.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Correct wage component inclusion",
      subtitle: `We meticulously identify and include all applicable salary components for ESIC wages (Basic, DA, HRA, CCA, production incentive, night shift, meal/food allowance), ensuring ESIC is deducted on gross salary, not just basic.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Exemption management",
      subtitle: `We accurately identify and manage exemptions from ESIC contributions for low-wage employees daily wage up to ₹176, optimizing your deductions while remaining compliant.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Timely payment facilitation",
      subtitle: `We generate accurate ESIC challan online and support how to pay ESIC contribution online, guaranteeing deposits are made well before the Monthly ESIC return filing deadline`,
      icon: "✨",
      bubble: "Dream!",
      bg: "from-[#d299c2] to-[#fef9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Zero calculation errors, robust protection from penalty for late ESIC
payment including 12% interest and damages, optimized contribution accuracy, and
guaranteed timely payments.`,
      icon: "❤️",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const verticalCardsLwf = {
  mainTitle: "Comprehensive Labour Welfare Fund Compliance Services",
  mainSubtitleVer: "LWF Applicability & Registration Across India",
  subText: `Ensure your establishment is correctly registered and always compliant with each state's LWF Act.`,
  cardsVer: [
    {
      title: "Precise applicability assessment",
      subtitle: ` We accurately determine LWF applicability rules India for your establishment in each state, considering factors like employee thresholds which vary significantly by state and industry type`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "State-specific registration management",
      subtitle: `We guide you through and handle all steps for LWF registration with the respective State Labour Welfare Boards, ensuring timely and correct setup.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Multi-state coverage analysis",
      subtitle: `We manage the complexities for companies with branches in various states, ensuring compliance where LWF is mandatory and where it is not applicable states like Uttar Pradesh, Bihar which may not have LWF`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Required documentation compilation",
      subtitle: `We assist in gathering and submitting all necessary documents for LWF registration and ongoing compliance in each state.`,
      icon: "🦋",
      bubble: "Transform!",
      bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Guaranteed LWF applicability compliance across all your operational
locations, seamless registration, and complete protection from non-registration
penalties.`,
      icon: "❤️",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const horizontalCardsLwf = {
  mainSubtitleHor: "Accurate LWF Contribution Calculation & Payment",
  subTextHor:
    "Eliminate calculation errors and ensure timely payments based on diverse state-specific rules.",
  cardsHor: [
    {
      title: "Precision Contribution Calculation",
      subtitle: `We accurately determine how much is the LWF contribution for both employer and employee shares, navigating varying LWF contribution rates by state Maharashtra, Karnataka, Delhi`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "State-specific Wage Inclusion",
      subtitle: `We precisely identify what salary components are included in LWF wages and whether LWF deduction is on gross salary or basic, aligning with each state's specific LWF Act.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Deduction Frequency Management",
      subtitle: `We track and ensure correct deduction based on the state's mandate – whether monthly, half-yearly, or annually, clarifying queries like What is the frequency of LWF deduction?`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Timely Payment Facilitation",
      subtitle: ` We generate accurate LWF challans and support online LWF payments where available, ensuring deposits are made well before the varied LWF due dates for each state.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
    {
      title: "Your Benefit",
      subtitle: `Zero calculation errors, accurate contributions aligned with each
state's unique rules, and robust protection from penalties for late LWF payments.`,
      icon: "❤️",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
  ],
};

export const largeCardsLwf = {
  subTitle: "Seamless LWF Returns & Data Management",
  subText:
    "Ensure flawless record-keeping, simplified portal interactions, and comprehensive employee data updates for continuous compliance.",
  cards: [
    {
      title: "State-Specific Return Filing",
      subtitle: `We manage the entire LWF return filing process using the correct LWF forms (Form A, Form F, Form A-1, which vary by state) with accuracy and punctuality as per each state's deadline.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Employee Data Management",
      subtitle: `We ensure all employee data relevant for LWF contributions is accurately maintained and updated, handling nuances like wage thresholds and employee categories for applicability in each state.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Digital Record Keeping",
      subtitle: `We maintain meticulous digital records of all LWF challans, payment receipts, and filed returns, creating a robust audit trail for future reference.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Online Portal Navigation",
      subtitle: `We expertly manage interactions with various State Labour Welfare Board online portals, ensuring accurate data reflection and complete submissions across diverse systems.`,
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Effortless monthly/periodic compliance, accurate employee records
for LWF benefits, and reduced administrative burden on your HR and Finance
teams.`,
      icon: "❤️",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const pastelCardsLwf = {
  subTitle: "Proactive LWF Regulatory Advisory & Risk Mitigation",
  subText:
    "Stay ahead of LWF law changes and safeguard your business from the costly consequences of non-compliance across multiple states.",
  cards: [
    {
      title: "Continuous Regulatory Monitoring",
      subtitle: `Our dedicated experts continuously monitor the highly fragmented LWF Act states India for any new amendments, circulars, or rate changes from each respective State Labour Welfare Board.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Impact Analysis & Strategic Advice",
      subtitle: `We translate complex, state-specific legal updates into clear, actionable insights for your business operations, ensuring you understand the implications and penalties for noncompliance with LWF.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Penalty Prevention Strategies",
      subtitle: `We implement proactive measures to safeguard against what happens if employer does not pay ESIC contribution? and other common non-compliance scenarios.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Audit Readiness Support",
      subtitle: `We provide complete assistance for any LWF inspections or audits, ensuring you are fully prepared with complete documentation and expert guidance.`,
      icon: "✨",
      bubble: "Dream!",
      bg: "from-[#d299c2] to-[#fef9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Perpetual compliance across all applicable states, complete
protection from penalties and legal repercussions, and the strategic advantage of
early adaptation to unique state-specific regulatory shifts.`,
      icon: "❤️",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const verticalCardsPf = {
  mainTitle: "Comprehensive Professional Tax Compliance Services",
  subTitleVer: `Our end-to-end PT solution eliminates administrative burdens, ensures flawless
regulatory adherence, and provides complete peace of mind for your multi-state
operations.`,
  mainSubtitleVer: "Accurate PT Contribution Calculation & Payment",
  subText:
    "Eliminate calculation errors and ensure timely payments based on diverse, statespecific slab rates and rules, protecting your business from costly penalties.",
  cardsVer: [
    {
      title: "Precision Contribution Calculation",
      subtitle: `We accurately determine how to calculate professional tax on salary for both employer and employee shares, meticulously applying varying Professional tax slab rates by state Maharashtra professional tax slab, Karnataka PT slab rates.`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Correct Wage Component Inclusion",
      subtitle: `We precisely identify whether professional tax is deducted from gross salary or basic salary, aligning with each state's specific PT Act and ensuring accurate calculation against the professional tax exemption limit (minimum salary threshold).`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Deduction Frequency Management",
      subtitle: `We track and ensure correct deduction based on the state's mandate, whether monthly, half-yearly, or annually, clarifying complex scenarios like higher February deductions in Maharashtra.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Timely Payment Facilitation",
      subtitle: ` We generate accurate PT challans and support how to pay professional tax online, ensuring deposits are made well before the varied Professional tax due dates by state 20th of succeeding month in Karnataka, 15th in Gujarat`,
      icon: "🦋",
      bubble: "Transform!",
      bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Zero calculation errors, accurate contributions aligned with each
state's unique rules, and robust protection from penalty for late professional tax
payment and associated interest.`,
      icon: "❤️",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const horizontalCardsPf = {
  mainSubtitleHor: "PT Applicability & Registration Across India",
  subTextHor:
    "Ensure your establishment is correctly registered and continuously compliant with Professional Tax regulations in every applicable state.",
  cardsHor: [
    {
      title: "Precise applicability assessment",
      subtitle: `We accurately determine Is professional tax mandatory in all states in India? and identify Which states have professional tax in India relevant to your business operations. We assess applicability based on employee count, income thresholds, and specific state laws in Maharashtra, Karnataka, West Bengal, Gujarat, Tamil Nadu, Telangana, Kerala`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "State-specific registration management",
      subtitle: `We guide you through and handle all steps for the Professional tax registration online process, ensuring you obtain the correct Professional Tax Registration Certificate (PTRC) for employers or Professional Tax Enrollment Certificate (PTEC)for the establishment, within statutory timelines.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Required documentation compilation",
      subtitle: `We assist in gathering and submitting all necessary documents required for professional tax registration, streamlining the initial setup for each applicable state.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Coverage analysis for evolving operations",
      subtitle: ` We provide insights into Professional tax enrollment certificate (PTEC) vs registration certificate (PTRC) and manage compliance as your workforce or business locations change.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
    {
      title: "Your Benefit",
      subtitle: `Swift, accurate Professional Tax registration across all applicable
states, guaranteed applicability compliance, and complete protection from nonregistration
penalties.`,
      icon: "❤️",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
  ],
};

export const largeCardsPf = {
  subTitle: "Seamless PT Returns & Data Management",
  subText:
    "Ensure flawless record-keeping, simplified portal interactions, and comprehensive employee data updates for continuous compliance.",
  cards: [
    {
      title: "State-Specific Return Filing",
      subtitle: `We manage the entire "Professional tax return filing online process, using the correct PT return forms by state (Form III for Maharashtra) with 100% accuracy and punctuality as per each state's varied deadlines.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Employee Data Management",
      subtitle: `We ensure all employee data relevant for PT contributions is accurately maintained and updated, handling nuances like wage thresholds and employee categories for applicability in each state.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Digital Record Keeping",
      subtitle: `We maintain meticulous digital records of all PT challans, payment receipts, and filed returns, creating a robust audit trail for future reference and addressing queries about Professional tax challan download.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Online Portal Navigation",
      subtitle: `We expertly manage interactions with various State Tax Department online portals the professional tax login portal state wise, ensuring accurate data reflection and complete submissions across diverse systems.`,
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Effortless monthly/periodic compliance, accurate employee records
for PT purposes, and reduced administrative burden on your HR and Finance teams.`,
      icon: "❤️",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const pastelCardsPf = {
  subTitle: "Proactive PT Regulatory Advisory & Risk Mitigation",
  subText:
    "Stay ahead of Professional Tax law changes and safeguard your business from the costly consequences of non-compliance across multiple states.",
  cards: [
    {
      title: "Continuous Regulatory Monitoring",
      subtitle: `Our dedicated experts continuously monitor the highly fragmented Professional Tax Acts for any new amendments, circulars, or rate changes from each respective state.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Impact Analysis & Strategic Advice",
      subtitle: `We translate complex, state-specific legal updates into clear, actionable insights for your business operations, ensuring you understand the implications and consequences of not paying professional tax`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Penalty Prevention Strategies",
      subtitle: `We implement proactive measures to safeguard against penalty for late professional tax payment which can be daily fines or percentage of tax due and other forms of legal action for PT non-compliance.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Audit Readiness Support",
      subtitle: `We provide complete assistance for any Professional Tax inspections or audits, ensuring you are fully prepared with complete documentation and expert guidance.`,
      icon: "✨",
      bubble: "Dream!",
      bg: "from-[#d299c2] to-[#fef9d7]",
    },
    {
      title: "Your Benefit",
      subtitle: `Perpetual compliance across all applicable states, complete
protection from penalties and legal repercussions, and the strategic advantage of
early adaptation to unique state-specific regulatory shifts.`,
      icon: "❤️",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const verticalCardsDesk = {
  mainTitle: "Complete Employee EPF Support Platform",
  subTitleVer: `Our comprehensive platform empowers your workforce with instant access to EPF
expertise, ensuring their peace of mind while completely liberating your HR team from
administrative queries.`,
  mainSubtitleVer: "Effortless Employee Access (24/7 via Email)",
  subText:
    "Give your employees direct, secure access to EPF expertise anytime, anywhere, fostering self-service and reducing reliance on HR.",
  cardsVer: [
    {
      title: "Dedicated Query Email Address",
      subtitle: `Employees simply email their EPF
questions or issues to a designated, secure EPFDesk email address. This means no
new logins or portals for them to remember.`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "User-Friendly Initiation",
      subtitle: `The process is as simple as sending an email,
making expert support accessible to all employees, regardless of technical
skill.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Mobile-Responsive Convenience",
      subtitle: `Employees can submit queries from
any device where they access their email – desktop, tablet, or smartphone
– ensuring support is always at their fingertips.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Instant Expert Engagement",
      subtitle: `Employees get immediate access to EPF expertise without needing HR intervention, streamlining their journey from query to resolution.`,
      icon: "🦋",
      bubble: "Transform!",
      bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    },
    // {
    //   title: "Coaching for when HR can’t be everywhere",
    //   subtitle: `71% of HR leaders don’t think they are effectively developing midlevel leaders.`,
    //   icon: "🧭",
    //   bubble: "Shine!",
    //   bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    // },
    {
      title: "Employee Benefits",
      subtitle: `Round-the-clock EPF support via a familiar communication
method, intuitive initiation, secure data handling via email, and mobile
convenience, enhancing their overall experience.`,
      icon: "❤️",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const horizontalCardsDesk = {
  mainSubtitleHor: "Streamlined Query Management & Tracking System",
  subTextHor:
    "Employees can resolve any EPF issue with guided, transparent processes, ensuring they are always informed.",
  cardsHor: [
    {
      title: "Unique Ticket Creation per Email",
      subtitle: `Every incoming employee email
automatically generates a unique ticket ID. Employees receive an instant
auto-response confirming receipt and providing this ID for future
reference.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Expert-Guided Resolution",
      subtitle: `Our dedicated specialists immediately begin
working on the query. This includes common issues like How to check
EPF balance online, How to activate UAN, How to update EPF
KYC, and EPF withdrawl process.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Real-time Progress Updates (via Email)",
      subtitle: `Employees receive proactive
updates via email as their ticket progresses through the resolution stages,
keeping them fully informed without having to manually check a portal.
This includes status changes and estimated resolution timelines.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Comprehensive Issue Coverage",
      subtitle: `Our system handles a vast range of concerns, from simple queries How to download EPF passbook to more complex EPF transfer cases and pension-related inquiries.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
    {
      title: "Employee Benefits",
      subtitle: `Clear process guidance, complete transparency via email,
proactive updates on resolution status, and expert resolution for any EPF
complexity, from UAN login issues to name mismatch in EPF account.`,
      icon: "❤️",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
  ],
};

export const largeCardsDesk = {
  subTitle: "Expert-Led Resolution & Direct EPFO Liaison",
  subText:
    "Our specialized teams handle every complexity directly with EPFO, ensuring accurate resolutions and completely liberating your HR from individual employee EPF issues.",
  cards: [
    {
      title: "Dedicated EPF Specialists",
      subtitle: `Our team comprises seasoned professionals who take full ownership of each employee query, specializing in accurate resolutions for issues like Why is my EPF passbook not updated? or What to do if employer is not depositing PF?`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Direct EPFO Communication Channels",
      subtitle: `We utilize established channels
for faster resolution and documentation exchange with the Employees'
Provident Fund Organisation (EPFO), eliminating the need for your HR to
act as a middleman.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Complex Case Management",
      subtitle: `Our expertise extends to intricate cases such as inter-company EPF transfers, legacy account merging, pension payment processing, and resolving discrepancies in contribution claims.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Complete Resolution Lifecycle",
      subtitle: `We manage the entire resolution journey, from the initial query submission to final settlement or problem closure, including necessary employer attestation for EPF transfer claims and approval of online EPF claims from an employer's perspective.`,
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
    {
      title: "Business Benefits",
      subtitle: `Zero HR involvement required for individual EPF issues, access to expert problem-solving,
efficient direct EPFO liaison, and comprehensive issue resolution that covers all angles, including potential tax
implications on EPF withdrawal.`,
      icon: "❤️",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const pastelCardsDesk = {
  subTitle: "Nationwide On-Ground Support for Unresolved Cases",
  subText:
    "For issues requiring physical interaction or specialized presence, our local teams are there to ensure complete resolution.",
  cards: [
    {
      title: "Local Teams Across Major Metros",
      subtitle: `Unlike purely online services, our on-ground teams in key Indian cities including Delhi NCR, Mumbai, Bengaluru, Chennai, and Hyderabad, Pune provide invaluable physical support where it matters most.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "In-Person EPFO Office Representation",
      subtitle: `For complex or unresolved cases that mandate direct interaction, submission of physical documents, or follow-ups at regional EPFO offices, our local teams ensure swift and effective resolution. This addresses queries related to EPFO portal usage and employer's guide to EPFiGMS.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Physical Verification Assistance",
      subtitle: `When required by EPFO processes for certain withdrawal claims or death claim processing, our teams provide on-ground assistance for physical verification, bridging any logistical gaps.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Guaranteed Case Closure",
      subtitle: `This unique capability ensures even the most challenging or bureaucratic EPF issues are resolved efficiently, guaranteeing 100% issue resolution regardless of geographical or administrative complexities.`,
      icon: "✨",
      bubble: "Dream!",
      bg: "from-[#d299c2] to-[#fef9d7]",
    },
  ],
};

export const verticalCardsEpfo = {
  mainTitle: "Why Companies Trust EPFDesk.com",
  mainSubtitleVer: "Unmatched Expertise & Zero-Error Accuracy",
  subText:
    "Our commitment to precision is foundational to your peace of mind and protection against non-compliance penalties.",
  cardsVer: [
    {
      title: "Consistently high accuracy rate in EPF filings 99.9%",
      subtitle: `Our multi-layered validation and expert review process minimizes discrepancies, significantly reducing interest on delayed EPF contributions for your business`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Zero audit failures across our client portfolio for 5+ years",
      subtitle: `A testament to our robust processes and unwavering commitment to compliance integrity, offering true peace of mind.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Rapid average response time 2-4 hours for client queries",
      subtitle: `Ensuring your concerns are addressed promptly by dedicated specialists, improving your operational efficiency.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "100% deadline adherence for all submissions",
      subtitle: `Protecting you from legal consequences of EPF non-compliance and preserving your organization's reputation.`,
      icon: "🦋",
      bubble: "Transform!",
      bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    },
  ],
};

export const horizontalCardsEpfo = {
  mainSubtitleHor: "Complete HR & Finance Team Liberation",
  subTextHor:
    "Reclaim valuable HR and Finance bandwidth, redirecting it towards your organizational growth.",

  cardsHor: [
    {
      title: "Liberating HR & Finance Teams from Compliance Overload",
      subtitle: `Our platform handles end-to-end compliance and employee support, enabling your internal teams to focus on strategic priorities instead of repetitive administrative tasks.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Productivity Boost",
      subtitle: `Up to 90% reduction in compliance-related admin tasks: freeing up hours spent on manual work, resulting in measurable productivity gains.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Fast Onboarding",
      subtitle: `80% faster onboarding process: our team handles EPF complexities so HR can onboard new hires swiftly without delays.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Penalty-Free Compliance",
      subtitle: `100% elimination of penalty & interest risks: Never worry about what if employer does not deposit PF — we ensure flawless and timely compliance.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
    {
      title: "Query Deflection",
      subtitle: `75% reduction in employee queries to HR: EPF Desk enables self-service, reducing the burden on HR teams.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
  ],
};

export const largeCardsEpfo = {
  subTitle: "Dedicated Support Team",
  subText:
    "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Dedicated Client Manager",
      subtitle: `A single point of contact who understands your specific account and compliance needs, ensuring personalized service.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Monthly Compliance Reports & Insights",
      subtitle: `Regular updates on your compliance status and performance.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Immediate Resolution of EPF-related Queries",
      subtitle: `Your dedicated manager ensures any questions or issues are addressed promptly.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Proactive Communication on Regulatory Changes",
      subtitle: `You're informed of relevant updates, ensuring continuous compliance.`,
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
  ],
};

export const pastelCardsEpfo = {
  subTitle: "Implementation & Support",
  subText:
    "Our experts handle complete setup while you focus on your business.",
  cards: [
    {
      title: "Initial Consultation",
      subtitle: `A brief session to understand your current EPF setup and specific needs.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Secure Portal Integration",
      subtitle: `Our team manages the secure integration with relevant EPFO portals and gathers necessary access details.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Brief Team Orientation",
      subtitle: `A quick, efficient orientation session with your relevant staff to ensure a smooth handover.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Full Service Activation",
      subtitle: `
Your EPF compliance is fully operational, seamlessly managed by EPFDesk.com experts within 24 hours.`,
      icon: "✨",
      bubble: "Dream!",
      bg: "from-[#d299c2] to-[#fef9d7]",
    },
  ],
};

export const largeCardsLanding = {
  // subTitle: "Dedicated Support Team",
  cards: [
    {
      title: "Monthly Compliance Panic",
      subtitle: `You're racing against monthly EPFO & ESIC deadlines, juggling multiple state-wise portals for EPF, ESIC, PT, and LWF instead of growing your business – turning you into a full-time compliance officer rather than the innovator you set out to be.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Employee Frustration & HR Burnout",
      subtitle: `Unresolved EPF & ESIC Issues impact employee morale and productivit y, leading to increased HR Workload from queries.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Statutory penalties and audit risk.",
      subtitle: `Non-compliance with EPFO, ESIC, and other statutory requirements can trigger penalties up to 100% of dues, plus interest and potential audit risks that could cripple your business finances.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Lost Productivity and Focus.",
      subtitle: `HR and Finance teams spend hours on employee linking, KYC approvals, and portal data entry instead of focusing on talent development, financial strategy, and business growth that actually drives revenue.`,
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
  ],
};

export const pastelCardsLanding = {
  // subTitle: "Implementation & Support",
  cards: [
    {
      title: "Hands-on Government Expertise",
      subtitle: `Our team combines deep portal expertise with on-ground EPFO office experience, legal knowledge, and proven audit handling capabilities. From complex registrations and deregistrations to navigating ever-changing compliance procedures, our experts have mastered every aspect of statutory compliance.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Nationwide Operational Footprint",
      subtitle: `Our offices across major metros and presence in almost all states ensure seamless statutory compliance support wherever your business operates. Your employees can access social security benefits without geographical barriers.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Proactive Regulatory Guidance",
      subtitle: `We monitor every update in EPFO, ESIC, PT, and LWF laws. Our team ensures your company is compliant before new mandates take effect—no surprises, no gaps.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Dedicated Client Managers",
      subtitle: `
Your assigned manager becomes an extension of your team, managing all compliance obligations proactively so you can focus on growth. No missed deadlines, no stress—just total confidence.`,
      icon: "✨",
      bubble: "Dream!",
      bg: "from-[#d299c2] to-[#fef9d7]",
    },
  ],
};

export const horizontalCardsLinks = [
  {
    title: "EPFdesk",
    subtitle:
      "Say goodbye to endless employee EPF queries. Our unique EPF Desk platform offers a direct, transparent channel for your workforce to resolve all their EPF issues. Our on-ground experts handle everything from status updates to complex EPFO interactions, allowing your HR to focus on core employee engagement.",
    icon: "🎯",
    link: "/epfdesk",
    bubble: "Focus!",
    gradient: "from-[#a18cd1] to-[#fbc2eb]",
    bgs: ["bg-[#d299c2]", "bg-[#ff6b6b]"],
  },

  {
    title: "EPF",
    subtitle:
      "Reclaim up to 90% of your HR's time spent on EPF administration. We meticulously handle monthly employee additions/deletions, precise challan creation, and all employer approvals, ensuring flawless compliance and freeing your teams for strategic growth.",
    icon: "🔍",
    link: "/epfManagement",
    bubble: "Discover!",
    gradient: "from-[#ff9a9e] to-[#fecfef]",
    bgs: ["bg-[#ff6b6b]", "bg-[#4ecdc4]"],
  },

  {
    title: "ESIC",
    subtitle:
      "Navigate the complexities of Employee State Insurance with ease. We meticulously handle all monthly ESIC contributions, filings, and regulatory updates, ensuring your complete adherence and freeing your team from this critical statutory burden.",
    icon: "🤝",
    link: "/esic",
    bubble: "Collaborate!",
    gradient: "from-[#ffecd2] to-[#fcb69f]",
    bgs: ["bg-[#4ecdc4]", "bg-[#ffe66d]"],
  },
  {
    title: "POSH",
    subtitle: `EPFdesk.com offers comprehensive POSH Act compliance services, including implementation, training, complaint redressal, advisory, and an independent complaint hotline. We ensure 100% adherence to the POSH Act 2013, fostering a safe, respectful workplace while protecting your organization’s reputation and legal integrity.`,
    icon: "🛡️",
    link: "/posh",
    bubble: "Impact!",
    gradient: "from-[#f093fb] to-[#f5576c]",
    bgs: ["bg-[#4ecdc4]", "bg-[#ffe66d]"],
  },
  {
    title: "LWF",
    subtitle:
      "Ensure flawless adherence to Labour Welfare Fund obligations across all your locations. We manage the diverse state-specific rates and periodic filings for LWF, simplifying this often-overlooked statutory requirement for your business.",
    icon: "⚡",
    link: "/lwf",
    bubble: "Empower!",
    gradient: "from-[#84fab0] to-[#8fd3f4]",
    bgs: ["bg-[#d299c2]", "bg-[#ff6b6b]"],
  },
  {
    title: "PT",
    subtitle:
      "Eliminate the headaches of varying state-specific Professional Tax laws. We provide accurate calculation, timely remittance, and meticulous filing for all applicable states, guaranteeing your PT compliance is always precise and penalty-free.",
    icon: "💡",
    link: "/pt",
    bubble: "Innovate!",
    gradient: "from-[#d4fc79] to-[#96e6a1]",
    bgs: ["bg-[#ff6b6b]", "bg-[#4ecdc4]"],
  },
];

export const plansEpfManagement = {
  mainTitle: "Unlock the Strategic Value of Your HR Team",
  cards: [
    {
      title: "Complete HR Team Liberation",
      //  icon: ClipboardDocumentCheckIcon,
      features: [
        `Significant reduction 80% in daily EPF-related employee queries: Freeing up countless hours
 previously spent on routine tasks.`,
        `Valuable HR bandwidth reclaimed 15-20 hours monthly: Allowing your HR team to focus on strategic
 initiatives like talent acquisition, employee development programs, and fostering a vibrant workplace culture.`,
        `Eliminated EPFO liaison requirement: Your HR team no longer needs to be the middleman for individual
 employee EPF issues, reducing their administrative overhead.`,
        `Shift to Strategic Focus: Empowering HR to lead retention strategies, succession planning, and workplace
 culture building.`,
      ],
    },
    {
      title: "Enhanced Employee Experience & Satisfaction",
      //  icon: UsersIcon,
      features: [
        `Instant expert access: Employees experience swift resolution, eliminating frustration associated with delayed
 responses or unanswered questions.`,
        `Transparent resolution process: Builds confidence in how their EPF
matters are managed, as they can track progress in real-time via email
updates.`,
        `Professional support quality: The consistent and expert support enhances the perception of employer care
 and commitment to employee well-being.`,
        `Empowered workforce: Employees feel more in control and informed about their provident fund matters,
 leading to increased satisfaction and morale.`,
        `Business Impact: Higher employee satisfaction, increased trust in employer benefits, reduced workplace frustration,
and a positive impact on overall employee retention.`,
      ],
    },
    {
      title: "24-Hour System Activation",
      //  icon: UsersIcon,
      features: [
        `System Setup & Configuration: Our team handles the swift setup of
your company's dedicated EPFDesk email query system, customizing
routing and auto-responses as needed.`,
        `Employee Communication Kit Delivery: We provide easy-to-understand
usage guides and FAQs for your employees, explaining how to use the
new email system and what to expect.`,
        `Immediate System Availability: Your employees can begin emailing
queries and accessing expert support within 24 hours of onboarding
completion, experiencing instant value.`,
        //         `Immediate Platform Availability: Your employees can begin raising tickets and accessing expert support
        // within 24 hours of onboarding completion, experiencing instant value.`,
      ],
    },
    {
      title: "Seamless Integration & Proactive Management",
      //  icon: UsersIcon,
      features: [
        `Optional HR Dashboard: While we handle direct employee resolution, your HR team can access an optional
dashboard to monitor common query trends anonymized, view overall ticket resolution rates, and identify areas for
internal communication.`,
        `Dedicated Client Manager: You'll have an assigned client manager who serves as your single point of contact for
organizational-level support, reporting needs, and any high-level strategic consultations.`,
        `Continuous System Enhancement: We constantly enhance the EPFDesk platform based on user feedback, evolving
EPFO processes, and emerging employee needs, ensuring your employees always have access to the best support.`,
        `Scalable Solution: Our system and expert teams are built to handle everincreasing
query volumes, seamlessly growing with your workforce from midsized
companies to large enterprises.`,
      ],
    },
    {
      title: "Common Employee Issues We Resolve",
      //  icon: UsersIcon,
      features: [
        `EPF balance checking and passbook updates: Including How to check EPF balance online and resolving Why is
my EPF passbook not updated?`,
        `UAN activation, linking, and Aadhaar integration: Expert assistance with How to activate UAN, How to know
your UAN, and managing Common UAN login issues and solutions.`,
        `KYC document updates and verification: Guidance and processing for How to update EPF KYC and other member
profile corrections.`,
        `EPF withdrawal claims (partial and full settlement): Navigating EPF withdrawal rules and assisting with How
to withdraw EPF online and required documents.`,
        `EPF transfer between employers and states: Expertly managing the EPF transfer process to ensure seamless
continuity of funds.`,
        `Pension-related queries and processing: Understanding EPS benefits and assisting with How
to get EPS Scheme Certificate.`,
        `EPFO portal login issues and technical problems: Troubleshooting access and navigation for employees.`,
        `Name, date of birth, and contact detail corrections: Efficiently handling Name mismatch in EPF account and
Changing mobile number/email in EPF.`,
      ],
    },
    {
      title: "Complex Case Expertise",
      //  icon: UsersIcon,
      features: [
        `Inter-state EPF transfers with multiple previous employers and complex legacy
account merging.`,
        `Disputed contribution claims, discrepancies, and corrections with EPFO.`,
        `Physical document verification requirements and submission for specialized
cases.`,
        `Court case related EPF issues requiring specific liaison and documentation.`,
        `Deceased member claim processing, handled with sensitivity and expertise.`,
        `Addressing concerns like What to do if employer is not depositing PF? by
liaising with relevant authorities.`,
        //         `EPFO portal login issues and technical problems: Troubleshooting access and navigation for employees.`,
        //         `Name, date of birth, and contact detail corrections: Efficiently handling Name mismatch in EPF account and
        // Changing mobile number/email in EPF.`,
      ],
    },
  ],
};

export const epfManagementPlans = {
  mainTitle: "Comprehensive Employer EPF Compliance Services",
  cards: [
    {
      title: "Seamless Employee Lifecycle Management",
      //  icon: ClipboardDocumentCheckIcon,
      features: [
        `Monthly employee additions and deletions with immediate EPFO reflection: We precisely
manage your roster updates, ensuring compliance from day one for new hires and seamless
processing for exits. This addresses common employer queries about How to add new
employee in EPF and deletion of member.`,
        `Automated UAN generation and linking for all new hires within 24 hours: Swift UAN allocation
and linking to Aadhaar streamline onboarding and prevent delays. This directly answers How
to generate UAN for new employees and Linking Aadhaar with UAN by employer.`,
        `Complete employee data management and ongoing verification: We maintain pristine member
records, proactively correcting discrepancies and managing updates like name, DOB, and KYC
to mitigate future issues.`,
        `Expert coordination for exit formalities and final settlement processes: Ensuring smooth,
compliant EPF exits and seamless transfers for outgoing employees, simplifying the employer's
role in these crucial moments.`,
        `Your Benefit: Eliminate manual errors, significantly reduce HR workload, ensure day-one compliance
for every employee, and simplify member profile corrections and updates.`,
      ],
    },
    {
      title: "Automated Challan Generation & Payment Facilitation",
      //  icon: UsersIcon,
      features: [
        `Precision EPF challan creation validated against latest EPFO norms: Our system guarantees
accurate calculations for all employees, including complex scenarios like EPF calculation for
salary above ₹15,000, and ensures correct "EPF contribution breakdown for employer and
employee."`,
        `Automated contribution calculation based on basic wages as per EPF Act: We accurately
determine taxable components and ensure correct inclusion of salary components like
Dearness Allowance for EPF, clarifying What components of salary are included in EPF basic
wages?`,
        `Pre-submission validation to catch errors before filing: Our multi-layered checks identify
discrepancies before your monthly EPF ECR online filing, preventing costly mistakes and
addressing errors in ECR filing and how to correct them.`,
        `Payment timeline management with timely reminders and alerts: We ensure your contributions
are remitted well before the Monthly EPF return filing deadline 15th of every month,
completely protecting you from penalties for late EPF payment and interest charges.`,
        `Your Benefit: Near-zero calculation errors, guaranteed timely submissions, complete protection from
late payment penalties, and a simplified EPF challan generation process that protects your bottom
line.`,
      ],
    },
    {
      title: "Expert Regulatory Filings & Approvals",
      //  icon: UsersIcon,
      features: [
        `Accurate and timely monthly ECR (Electronic Challan-cum-Return) filing: We manage your core
monthly submission with utmost precision, streamlining How to file monthly EPF ECR online
for your team.`,
        `Comprehensive handling of all employer approvals, declarations, and annexures: Ensuring
every required document, including Nomination Form" and other necessary declarations, is
properly processed and uploaded.`,
        `Secure digital document management with ironclad audit trails: All filed records are securely
managed and easily retrievable, providing crucial support during any EPFO audit process for
employers" and helping you "prepare for an EPF inspection with confidence.`,
        `Proactive error detection and swift resubmission when needed: We identify and correct "errors
in ECR filing" promptly, ensuring continuous compliance and mitigating legal consequences of
EPF non-compliance.`,
        `Your Benefit: Flawless compliance records, stress-free EPFO audits, immediate document retrieval for
any inquiry, and unwavering adherence to EPFO electronic submission guidelines.`,
        `Your Benefit: Flawless compliance records, stress-free EPFO audits, immediate document retrieval for
any inquiry, and unwavering adherence to EPFO electronic submission guidelines.`,
      ],
    },
    {
      title: "Proactive Regulatory Updates & Advisory",
      //  icon: UsersIcon,
      features: [
        `Continuous monitoring of all EPFO circulars, notifications, and EPF & MP Act 1952 latest
amendments: Our experts are constantly updating their knowledge base, providing you with
real-time insights.`,
        `Impact analysis of new regulations on your specific business operations: We translate complex
legal jargon into actionable insights tailored to your organizational structure and workforce,
including the New Social Security Code impact on EPF for employers.`,
        `Strategic recommendations for policy adaptations: We advise on necessary internal
adjustments to ensure seamless compliance with evolving laws, allowing you to strategically
adapt your HR and payroll policies ahead of time.`,
        `Advance notice of upcoming compliance requirements and deadlines: You're always prepared,
eliminating last-minute rushes and ensuring best practices for EPF compliance in India.`,
        `Your Benefit: Perpetual compliance, strategic advantage from early adaptation, complete elimination
of compliance surprises, and expert navigation of the most recent EPFO circulars and notifications.`,
      ],
    },
  ],
};

export const verticalCardsPosh = {
  mainTitle:
    "The Critical Challenges of POSH Act Compliance for Indian Businesses",
  subTitleVer: `Even well-intentioned organizations frequently face significant operational, legal, and
cultural hurdles in effectively implementing and maintaining POSH Act compliance.`,
  mainSubtitleVer: "Operational Complexities & Administrative Burden",
  cardsVer: [
    {
      title: "Internal Committee (IC) Formation & Training",
      subtitle: `Difficulty in forming a valid
Internal Committee under POSH Act, ensuring diverse representation,
and providing mandatory POSH training for IC members.`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Awareness & Policy Dissemination",
      subtitle: `Challenges in ensuring POSH
awareness training for all employees including contract staff and effectively
communicating the POSH policy across the organization, especially in multilocation
or hybrid work setups.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Record-Keeping & Reporting",
      subtitle: `Meticulous documentation of complaints,
inquiries, IC proceedings, and annual reports POSH annual report
filing is administratively heavy and crucial for compliance.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const horizontalCardsPosh = {
  mainSubtitleHor: "Sensitive Complaint Handling & Legal Risks",
  cardsHor: [
    {
      title: "Fair & Timely Inquiry Process",
      subtitle: `Ensuring fair and impartial inquiry process
under POSH Act within the strict POSH complaint timeline 90 days
for inquiry can be challenging, especially without specialized expertise.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Preventing Victimization",
      subtitle: `Protecting the complainant and witnesses from
victimization under POSH Act during and after an inquiry requires careful
procedural adherence and a sensitive approach.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Maintaining Confidentiality",
      subtitle: `The utmost importance of confidentiality in
POSH complaints throughout the inquiry process is often difficult to manage
internally without robust protocols.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Legal Scrutiny & Penalties",
      subtitle: `Mishandling a complaint, procedural lapses, or
non-compliance can lead to severe penalties for non-compliance with POSH
Act fines up to ₹50,000, cancellation of business license and legal
action against the employer.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
  ],
};

export const largeCardsPosh = {
  subTitle: "Building a Culture of Safety & Trust",
  cards: [
    {
      title: "Shifting Workplace Culture",
      subtitle: `Moving beyond mere compliance to foster a truly
safe and respectful workplace culture where employees feel empowered to
speak up requires continuous effort and expert guidance.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Employee Awareness & Trust",
      subtitle: `Ensuring all employees including those asking
what is sexual harassment at workplace or how to file POSH complaint
are adequately informed and trust the redressal mechanism.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Reputational Damage",
      subtitle: `Even a single mishandled POSH complaint or public
accusation can result in severe reputational damage for companies and loss
of employee and public trust.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
  ],
};

export const pastelCardsPosh = {
  subTitle: "Expert Internal Committee (IC) Formation & Training",
  subText:
    "Establish a legally sound and highly capable Internal Committee ready to address any complaint with fairness and precision.",
  cards: [
    {
      title: "IC Constitution Guidance",
      subtitle: `Expert assistance in forming Internal
Committee under POSH Act, ensuring it meets all statutory
requirements regarding composition, gender balance, and external
member inclusion.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Mandatory IC Training",
      subtitle: `Comprehensive POSH training for IC
members, equipping them with the legal knowledge, procedural steps,
and sensitivity required to conduct fair and impartial inquiries.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "IC Policy & Charter Development",
      subtitle: `Drafting or reviewing the IC's
operational guidelines, roles, and responsibilities to ensure clarity and
compliance.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Your Benefit",
      subtitle: `A legally compliant and competent Internal Committee, fully
prepared to handle complaints effectively, minimizing legal risks from the outset.`,
      icon: "❤️",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
  ],
};

export const verticalCardsPoshOne = {
  mainSubtitleVer: "Comprehensive Employee Awareness & Policy Implementation",
  subText:
    "Cultivate a culture of respect and awareness, ensuring every employee understands their rights and responsibilities under the POSH Act.",
  cardsVer: [
    {
      title: "POSH Policy Development & Review",
      subtitle: `Drafting or updating your
organization's POSH policy India to be clear, comprehensive, legally
compliant, and reflective of your company's values.`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Mandatory Employee Training",
      subtitle: `Conducting engaging and impactful
POSH awareness training for all employees including contract,
temporary, and remote staff through online modules or interactive
workshops, explaining what is sexual harassment at workplace and
how to file POSH complaint.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Policy Dissemination & Display",
      subtitle: `Ensuring the POSH policy is effectively
communicated, displayed at workplaces, on intranets, and
acknowledged by all employees as mandated by the Act.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Your Benefit",
      subtitle: `A fully aware and compliant workforce, a robust and accessible
POSH policy, reduced instances of harassment, and a demonstrable commitment
to a safe work environment.`,
      icon: "❤️",
      bubble: "Transform!",
      bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
    },
  ],
};

export const horizontalCardsPoshOne = {
  mainSubtitleHor: "Meticulous Complaint Redressal & Inquiry Management",
  subTextHor:
    "Navigate sensitive complaints with fairness, confidentiality, and legal precision, ensuring just outcomes and protecting all parties",
  cardsHor: [
    {
      title: "Dedicated & Impartial Complaint Hotline (3rd Party Service)",
      subtitle: `Provide
a secure, confidential, and independent 24/7 hotline for employees to
report sexual harassment complaints directly to a neutral, third-party entity
(EPFdesk.com). This service operates like a trusted third-party
mechanism used in Europe, ensuring anonymity (if desired by the
complainant) and impartiality, which significantly enhances employee trust.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "End-to-End Inquiry Support",
      subtitle: `Providing expert guidance and support
throughout the POSH complaint inquiry process, from initial complaint
receipt to final report submission within the POSH complaint timeline
90 days.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Impartial Inquiry Conduct",
      subtitle: `Assisting the IC in conducting fair, unbiased,
and legally sound inquiries, including evidence gathering, witness
interviews, and procedural adherence to ensure fair inquiry process
under POSH Act.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Confidentiality & Victimization Prevention",
      subtitle: `Implementing strict
protocols to ensure confidentiality in POSH complaints and actively
preventing victimization under POSH Act for complainants and
witnesses.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Final Report & Recommendations",
      subtitle: `Expert assistance in drafting
comprehensive inquiry reports and recommendations for appropriate
action, including consequences of sexual harassment at workplace.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
    {
      title: "Your Benefit",
      subtitle: `Enhanced employee trust and psychological safety, reduced
internal HR burden for sensitive initial handling, guaranteed impartiality in
complaint intake, legally sound and timely complaint resolution, and ultimate
protection against procedural lapses, severe legal repercussions, and
reputational damage.`,
      icon: "❤️",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
  ],
};

export const largeCardsPoshOne = {
  subTitle: "Proactive Compliance Monitoring & Reporting",
  subText:
    "Maintain continuous POSH Act adherence and fulfill all statutory reporting obligations with accuracy and foresight.",
  cards: [
    {
      title: "Annual Report Filing",
      subtitle: `Meticulous preparation and timely filing of your
POSH annual report to District Officer detailing complaints received,
actions taken, training conducted as mandated by the Act.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Continuous Regulatory Updates",
      subtitle: `Monitoring latest amendments to
POSH Act 2013 and related guidelines, providing timely alerts and
actionable insights for ongoing compliance.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Audit Readiness Support",
      subtitle: `Providing comprehensive assistance during
any POSH compliance audits or legal reviews, ensuring all
documentation is organized and processes are defensible.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "POSH Act Compliance Checklist",
      subtitle: `Development and implementation of
internal checklists to ensure continuous adherence to all procedural and
substantive requirements.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Your Benefit",
      subtitle: `Guaranteed continuous POSH compliance, complete protection
from penalties for non-compliance with POSH Act, enhanced legal
standing, and a demonstrable commitment to corporate social responsibility.`,
      icon: "❤️",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
  ],
};

export const plansPosh = {
  mainTitle:
    "Why Workforce Limited: Your Definitive Partner for POSH Act Compliance",
  cards: [
    {
      title: "Unmatched Expertise & Unyielding Precision",
      //  icon: ClipboardDocumentCheckIcon,
      features: [
        `Seasoned Legal & HR Professionals: Our team comprises highly experienced
legal experts specializing in labor and corporate law, certified HR consultants,
and trained POSH practitioners, bringing deep, updated knowledge of the POSH
Act and its practical application.`,
        `99.9% Procedural Accuracy: We implement multi-layered validation and
stringent expert review processes, ensuring every step of POSH implementation,
training, and complaint inquiry is legally sound and procedurally perfect.`,
        `Proactive Regulatory Intelligence: Our experts provide continuous monitoring
of POSH Act amendments, landmark judgments, and practical interpretations,
ensuring your company remains ahead of compliance curves.`,
        ,
      ],
    },
    {
      title: "Holistic Approach & Strategic Impact",
      //  icon: UsersIcon,
      features: [
        `End-to-End POSH Coverage: From policy drafting and IC formation to
comprehensive training, inquiry management, and annual reporting, we cover the
full spectrum of POSH compliance.`,
        `Protecting Your Reputation & Legal Standing: Our meticulous approach
safeguards your business from severe reputational damage, legal action,
and financial penalties associated with POSH non-compliance.`,
        `Cultivating a Positive Culture: By ensuring transparent processes and
accessible support, we help build a workplace where employees feel safe,
respected, and empowered, enhancing morale and productivity.`,
      ],
    },
    {
      title: "Rapid Implementation & Dedicated Partnership",
      //  icon: UsersIcon,
      features: [
        `Streamlined Onboarding: Our dedicated team guides you through a rapid
onboarding process, including initial compliance assessment and data
integration.`,
        `Dedicated Implementation Specialist: An assigned expert ensures a smooth
transition and addresses all your setup queries promptly.`,
        ,
      ],
    },
    {
      title: "Dedicated Ongoing Support for Continuous Compliance",
      //  icon: UsersIcon,
      features: [
        `Assigned Client Manager: Your single point of contact provides personalized
service and comprehensive support for all your POSH compliance needs.`,
        `Regular Compliance Updates: Receive timely, clear updates on the latest
POSH Act changes and best practices.`,
        `Immediate Query Resolution: Our support team is available to promptly resolve
any POSH-related questions from your HR or legal teams.`,
      ],
    },
    {
      title: "Key Employer POSH Concerns We Resolve",
      //  icon: UsersIcon,
      features: [
        `Implementation & Policy: Guidance on POSH Act applicability, drafting/
reviewing POSH policy India, and ensuring its proper dissemination.`,
        `Internal Committee (IC): Assistance with forming an Internal Committee (IC)
under POSH Act,ensuring IC member training, and handling IC
composition requirements.`,
        `Employee Training: Conducting POSH awareness training for all
employees, mandatory POSH training requirements, and ensuring POSH
compliance for remote workers.`,
        `Complaint Handling: Support for POSH complaint inquiry process, POSH
complaint timeline, confidentiality in POSH complaints, and preventing
victimization under POSH Act.`,
        `Reporting & Audit: Preparing POSH annual report to District Officer and
providing POSH compliance audit" support.`,
        `Penalties: Advising on penalties for non-compliance with POSH Act and
legal action against employer under POSH Act.`,
      ],
    },
    {
      title: "Advanced POSH Advisory & Training",
      //  icon: UsersIcon,
      features: [
        `External Member Services: Providing experienced independent external
members for your Internal Committee.`,
        `Sensitive Case Advisory: Expert guidance on complex or high-profile cases,
ensuring procedural integrity and fair outcomes.`,
        `Leadership Workshops: Conducting specialized POSH workshops for senior
management on their roles and responsibilities.`,
        `Culture Building Initiatives: Strategic advice on integrating POSH compliance
into broader diversity, equity, and inclusion (DEI) initiatives for a truly respectful
culture.`,
      ],
    },
    {
      title: "Proactive IC Preparedness & Mock Inquiry Drills",
      //  icon: UsersIcon,
      features: [
        `What We Offer: Go beyond standard training with mock inquiry drills and
preparedness workshops for your Internal Committee. We simulate complaint
scenarios, allowing your IC to practice their skills in a controlled environment and
identify areas for improvement before a real case arises. This is a unique IC
readiness assessment.`,
        `Your Benefit: An exceptionally prepared and confident IC, minimizing procedural
errors in real-time sensitive situations, and significantly reducing legal risks by
demonstrating proactive readiness.`,
      ],
    },
    {
      title: "Cultivating a Respectful Culture Beyond Policy",
      //  icon: UsersIcon,
      features: [
        `What We Offer: Strategic advisory on integrating POSH principles into broader
organizational values. This includes workshops on bystander intervention
training, unconscious bias awareness, and respectful communication"
to build a truly inclusive environment where harassment is less likely to occur.`,
        `Your Benefit: A genuinely safer, more inclusive, and psychologically secure
workplace, leading to increased employee morale, reduced turnover, and a
stronger employer brand, moving beyond mere legal compliance.`,
      ],
    },
    {
      title: "Post-Inquiry Support & Reintegration Advisory",
      //  icon: UsersIcon,
      features: [
        `What We Offer: Provide expert advisory and support for post-inquiry phases,
including guidance on reintegration strategies for involved parties where
appropriate and legally permissible and support for workplace rehabilitation
to ensure a harmonious environment after resolution. This may also include
recommended professional counseling resources.`,
        `Your Benefit: A holistic approach to workplace safety that extends beyond legal
resolution, fostering a fair environment for all employees and protecting
organizational well-being even after difficult situations.`,
      ],
    },
    {
      title: "Anonymized Trend Reporting & Strategic Insights",
      //  icon: UsersIcon,
      features: [
        `What We Offer: Leveraging our experience and with proper client data consent
and anonymization, we can provide aggregate, anonymized reports on
common POSH complaint trends, types of workplace harassment
reported, and training effectiveness metrics.`,
        `Your Benefit: Data-driven insights to proactively identify and address systemic
issues, measure the impact of your POSH initiatives, and continuously refine
your workplace safety strategies, turning compliance data into actionable
intelligence.`,
      ],
    },
  ],
};

export const poshFaq = [
  {
    question: "Is the POSH Act 2013 mandatory for all companies in India?",
    answer: `Yes, the POSH Act 2013 is mandatory for every organization (public or private,
organized or unorganized sector) in India with 10 or more employees, regardless of
their type of employment (permanent, temporary, contractual, intern, domestic help).`,
  },
  {
    question: "What are the key requirements for POSH Act compliance?",
    answer: `Key requirements include: (1) Formulating and widely circulating a POSH policy, (2)
Constituting an Internal Committee (IC) if 10+ employees (or Local Committee if less
than 10), (3) Conducting regular awareness training for all employees, and (4) Filing an
annual report with the District Officer.`,
  },
  {
    question:
      "How often is POSH training required for employees and IC members?",
    answer: `While the Act doesn't specify frequency, it mandates continuous awareness. Best
practice recommends annual POSH awareness training for all employees and more
intensive, specialized training for IC members at least once a year to keep them
updated on legal nuances and inquiry procedures.`,
  },
  {
    question: "What are the penalties for non-compliance with the POSH Act?",
    answer: `Non-compliance can lead to severe penalties. The initial penalty for an employer is a
fine of up to ₹50,000. Subsequent non-compliance can lead to higher fines, and even
cancellation of the business license or withdrawal of registration. Directors may also
face legal action.`,
  },
  {
    question: "How long does the POSH complaint inquiry process take?",
    answer: `The Internal Committee (IC) is legally mandated to complete the inquiry and submit
its report to the employer within 90 days from the date of receiving the complaint.`,
  },
  {
    question: "Can POSH Act compliance cover remote or hybrid work models?",
    answer: `Yes, the POSH Act extends to the "workplace," which includes any place visited by
the employee arising out of or during the course of employment, including transportation
and virtual/remote working environments. Our services cover POSH compliance for all
modern work models.`,
  },
  {
    question:
      "What is the benefit of using a third-party hotline for POSH complaints?",
    answer: `A third-party hotline, like the one offered by EPFdesk.com, provides employees with
an independent, secure, and confidential channel to report complaints. This enhances
trust and impartiality, encourages reporting, and reduces the burden on internal HR for
initial sensitive handling, safeguarding your organization's reputation.`,
  },
  {
    question:
      "How do you help our Internal Committee (IC) prepare for complex complaints?",
    answer: `We offer specialized mock inquiry drills and preparedness workshops for your IC.
This unique service simulates complaint scenarios, allowing your IC to practice their
legal and procedural skills in a controlled environment, ensuring they are exceptionally
prepared for real-time situations.`,
  },
  {
    question:
      "Do your services extend beyond legal compliance to foster a safer workplace culture?",
    answer: `Absolutely. We provide strategic advisory and conduct workshops on topics like
bystander intervention, unconscious bias, and respectful communication to proactively
build a genuinely inclusive culture where harassment is actively prevented, going
beyond mere policy adherence.`,
  },
];

export const verticalCardsLabour = {
  mainTitle: "The Pervasive Challenges of Labor & HR Registrations in India",
  mainSubtitleVer: "Navigating Fragmentation & Ambiguity",
  cardsVer: [
    {
      title: "Diverse State-Specific Laws",
      subtitle: `Laws like the "Shop and Establishment Act"
vary significantly by state, leading to confusion regarding "Shop and
Establishment Act registration process" in different jurisdictions (e.g.,
Karnataka, Maharashtra, Delhi).`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Act-Specific Applicability",
      subtitle: `Determining precise applicability for acts like "CLRA
Act 1970" (for 20+ contract workers), "Factories Act 1948" (for manufacturing
units), "Inter-State Migrant Workmen Act, 1979," and "Building and Other
Construction Workers (BOCW) Act, 1996" requires deep legal interpretation.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Conflicting Information",
      subtitle: `Sourcing accurate, up-to-date information on various
registration requirements and forms can be challenging, leading to reliance on
outdated guides or unofficial sources.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const horizontalCardsLabour = {
  mainSubtitleHor: "Operational Burden & Renewal Headaches",
  cardsHor: [
    {
      title: "Time-Consuming Registration Processes",
      subtitle: `Manually filling out numerous
forms, compiling vast documentation ("documents required for Shops and
Establishment Act registration," "CLRA license documents"), and following
up with various labor departments is highly inefficient.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Managing Multiple Renewals",
      subtitle: `Tracking and ensuring timely "annual renewals"
for various licenses (e.g., "CLRA license renewal Maharashtra," "Factories
Act license renewal," "Shop Act license renewal") across different states is a
continuous administrative nightmare.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Lack of Centralized Oversight",
      subtitle: `For multi-location businesses, maintaining a
consolidated view of all required registrations and their renewal statuses across
diverse units is a major operational challenge.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
  ],
};

export const largeCardsLabour = {
  subTitle: "High Penalties & Legal Exposure",
  cards: [
    {
      title: "Severe Financial Penalties",
      subtitle: `Non-compliance or delayed registrations/renewals
can lead to "penalties for not having Shop and Establishment license," hefty
fines under CLRA Act, Factories Act, and other labor laws, often with daily
penalties.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Legal Action & Prosecution",
      subtitle: `Failure to adhere to mandatory registrations can
result in "legal action against employers," prosecution of directors, or even
"business closure" in extreme cases.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Reputational Damage",
      subtitle: `Non-compliance publicly signals a disregard for worker
welfare and legal integrity, leading to "reputational damage" with employees,
clients, and investors.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Operational Disruption",
      subtitle: `Business activities may be halted if required licenses
are not in place, leading to direct financial losses.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const pastelCardsLabour = {
  subTitle: "Initial Registrations & Setup (Flawless First Steps)",
  cards: [
    {
      title: "Shop & Establishment Act Registration",
      subtitle: `Meticulous handling of "Shop
and Establishment Act registration process" for every office, retail
outlet, or commercial establishment, navigating state-specific rules and
documentation.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "CLRA (Contract Labour) Registrations",
      subtitle: `Expert management of "CLRA
license compliance" for principal employers and contractors (including
"CLRA registration requirements" and "documents required for
labour license").`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Factories Act Registration",
      subtitle: `Comprehensive assistance for "Factories
Act registration requirements," including plan approvals, safety permits,
and obtaining factory licenses where manufacturing activities occur.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Specific Act Registrations",
      subtitle: `Covering other niche acts like "Inter-State
Migrant Workmen (Regulation of Employment and Conditions of
Service) Act, 1979," and "Building and Other Construction Workers
(BOCW) Act, 1996" as applicable.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    {
      title: "Initial Core Statutory Registrations (as part of broader setup)",
      subtitle: `While
detailed on their own pages, we ensure initial "EPF ESIC registration for
new company," "Professional Tax registration," and "Labour Welfare
Fund registration" are seamlessly managed.`,
      icon: "🤖",
      bubble: "Automate!",
      bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
  ],
};

export const verticalCardsLabourOne = {
  mainSubtitleVer:
    "License Management & Recurring Renewals (Continuous Compliance)",
  cardsVer: [
    {
      title: "Automated Renewal Tracking",
      subtitle: `Proactive monitoring and alerts for
"annual renewals" of all applicable labor and HR licenses across all your
locations, including "CLRA license renewal Maharashtra," "Shop Act
license renewal," and "factory license renewal."`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Seamless Renewal Process",
      subtitle: `End-to-end management of the renewal
application process, including documentation updates, fee payments, and
liaising with relevant labor departments for timely approval.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Multi-State Renewal Coordination",
      subtitle: `Expert handling of varied renewal
frequencies, forms, and fees across different states, simplifying
compliance for businesses with a nationwide footprint.`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Compliance Calendar Management",
      subtitle: `Development and maintenance of
a custom "HR statutory compliance calendar India" for your business,
ensuring all recurring registration and renewal deadlines are met.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
  ],
};

export const horizontalCardsLabourOne = {
  mainSubtitleHor: "Audit Preparedness & Advisory (Proactive Risk Mitigation)",
  cardsHor: [
    {
      title: "Continuous Regulatory Monitoring",
      subtitle: `Our experts constantly track
"Indian labor law updates" and changes specific to various acts (e.g.,
Minimum Wages Act, Payment of Wages Act, Contract Labour Act) and
provide timely alerts and actionable insights.`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "Penalty Prevention Strategies",
      subtitle: `We implement proactive measures to
identify and rectify potential non-compliance issues (e.g., not maintaining
"required registers under labor laws" like Muster Roll, Wage Register)
before they escalate.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "Comprehensive Audit Support",
      subtitle: `Provide complete assistance during
"labour law audits,"inspections by authorities, including data compilation,
documentation (e.g., "Form A, Form B registers maintenance"), and
expert liaison to ensure smooth and successful outcomes.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    {
      title: "Response to Notices",
      subtitle: `Expert drafting and submission of timely replies to
notices from labor departments or other statutory bodies.`,
      icon: "💡",
      bubble: "Innovate!",
      bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    },
  ],
};

export const plansLabour = {
  mainTitle:
    "Why Workforce Limited: Your Definitive Partner for POSH Act Compliance",
  cards: [
    {
      title: "Unmatched Expertise & Unyielding Precision",
      //  icon: ClipboardDocumentCheckIcon,
      features: [
        `Seasoned Labor Law Professionals: Our team comprises highly experienced
labor law attorneys, compliance experts, and HR consultants with deep, updated
knowledge of every central and state-specific labor act (e.g., CLRA, Factories
Act, Shop & Establishment Acts).`,
        `99.9% Procedural Accuracy: We implement multi-layered validation and
stringent expert review processes, ensuring every registration, renewal, and
documentation is legally sound and procedurally perfect, minimizing errors and
rejections.`,
        `Proactive Regulatory Intelligence: Our experts provide continuous monitoring
of new acts (like upcoming Labour Codes), amendments, and local nuances,
ensuring your company remains ahead of the compliance curve across all states.`,
        ,
      ],
    },
    {
      title: "Comprehensive Scope & Strategic Advantage",
      //  icon: UsersIcon,
      features: [
        `End-to-End Coverage: We manage the full spectrum of mandatory labor and
HR registrations and licenses, from initial setup to ongoing renewals and
comprehensive audit support.`,
        `Multi-State Specialization: Our unique strength lies in expertly navigating the
diverse requirements of different Indian states, providing a single point of contact
for your nationwide registration needs.`,
        `Protection for Leadership: Our meticulous processes reduce the risk of
personal liabilities or legal actions against directors/management for noncompliance.`,
      ],
    },
    {
      title: "Rapid Implementation & Dedicated Partnership",
      //  icon: UsersIcon,
      features: [
        `Streamlined Onboarding: Our dedicated team guides you through a rapid
onboarding process, including initial compliance assessment and secure data
integration for existing records.`,
        `Dedicated Implementation Specialist: An assigned expert ensures a smooth
transition and addresses all your setup queries promptly, integrating with your
existing HR systems where required.`,
        ,
      ],
    },
    {
      title: "Dedicated Ongoing Support for Continuous Multi-State Compliance",
      //  icon: UsersIcon,
      features: [
        `Assigned Client Manager: Your single point of contact provides personalized
service and comprehensive support for all your registration and licensing needs.`,
        `Automated Renewal Alerts: Our system provides timely notifications for all
upcoming license renewals, ensuring no deadline is missed.`,
        `Immediate Query Resolution: Our support team is available to promptly resolve
any queries related to your labor registrations from your HR or legal teams.`,
      ],
    },
    {
      title: "Key Initial Registrations & Setup",
      //  icon: UsersIcon,
      features: [
        `Shop and Establishment Act: "Shop and Establishment Act registration
process," "online Shop Act registration," and managing "penalties for not
having Shop Act license."`,
        `CLRA (Contract Labour): "CLRA registration for principal employer,"
"CLRA license for contractors," and "documents required for CLRA
registration."`,
        `Factories Act: "Factories Act registration requirements," "factory license
application process,"and related safety approvals.`,
        `Other Labour Acts: Registrations under "Inter-State Migrant Workmen Act,
1979," "Building and Other Construction Workers (BOCW) Act, 1996," and
similar acts as applicable.`,
        `Core Statutory Registrations (Initial): Assistance with "EPF ESIC registration
for new company," "Professional Tax registration," and "Labour Welfare
Fund registration."`,
      ],
    },
    {
      title: "Ongoing Management & Renewal Services",
      //  icon: UsersIcon,
      features: [
        `License Renewals: End-to-end management of "CLRA license renewal
Maharashtra," "factory license renewal," "Shop Act license renewal," and
"professional tax registration renewal" across all states.`,
        `Compliance Calendar: Creation and maintenance of a custom "HR statutory
compliance calendar India" for your business, tracking all deadlines.`,
        `Register Maintenance: Guidance on "maintenance of registers under labor
laws" (e.g., Muster Roll, Wage Register, Overtime Register).`,
        `Amendments: Managing amendments to existing registrations due to changes
in address, business nature, or employee count.`,
      ],
    },
    {
      title: "Risk Mitigation & Audit Support",
      //  icon: UsersIcon,
      features: [
        `Penalty Prevention: Strategies to avoid "penalties for labor law noncompliance"
and "legal action against employer."`,
        `Labor Law Audits: Comprehensive assistance for "labour law audits" and
inspections by authorities.`,
        `Regulatory Updates: Continuous monitoring of "Indian labor law updates"
and specialized guidance on the "impact of new social security code" on
various registrations.`,
      ],
    },
  ],
};

export const labourFaq = [
  {
    question:
      "Which are the most common labor law registrations required for businesses in India?",
    answer: `The most common include the Shop and Establishment Act (state-specific), Contract
Labour (Regulation & Abolition) Act (CLRA) license (if engaging 20+ contract workers),
Factories Act registration (for manufacturing units), EPF, ESIC, Professional Tax, and
Labour Welfare Fund registrations.`,
  },
  {
    question: "Do these registrations need to be renewed, and how often?",
    answer: `Yes, many labor licenses and registrations require periodic renewal. The frequency
varies by act and state:
* Shop Act: Often annual or biennial.
* CLRA License: Annual.
* Factories Act License: Typically 1 to 5 years, depending on the state.
We manage all renewals proactively.`,
  },
  {
    question:
      "How do you handle compliance for businesses operating in multiple states with varying laws?",
    answer: `Our unique strength lies in our nationwide operational footprint and deep expertise in
the nuances of each state's specific labor laws. We provide centralized management for
all your multi-state registrations and renewals, ensuring seamless compliance across
your entire Indian presence.`,
  },
  {
    question:
      "What are the risks of not having the correct labor registrations or licenses?",
    answer: `Non-compliance can lead to severe financial penalties (often daily fines), legal action
against the company and its directors, operational disruptions (e.g., closure orders), and
significant reputational damage.`,
  },
  {
    question:
      "Do you assist with both initial registrations and ongoing renewals?",
    answer: `Yes, our service is end-to-end. We handle the entire process from assessing initial
applicability and completing the first-time registration to continuously monitoring and
managing all subsequent renewals, ensuring continuous compliance.`,
  },
  {
    question:
      "What kind of documentation is typically required for these registrations?",
    answer: `Required documents vary by act and state but commonly include business
incorporation certificates, PAN/Aadhaar of directors/proprietors, address proof of
establishment, employee details, bank challans, and specific application forms. We
guide you through the precise requirements for each.`,
  },
  {
    question:
      "Can you help with compliance under the Contract Labour (Regulation & Abolition) Act(CLRA)?",
    answer: `Yes, we provide comprehensive CLRA compliance services, including assisting
principal employers with obtaining their registration certificate and helping contractors
secure their labor licenses, along with all ongoing compliances, ensuring full adherence
to the Act.`,
  },
];

export const verticalCardsHosp = {
  mainTitle:
    "The Cost of Chaos: Why Compliance Failures Cascade in Hospitality",
  subTitleVer: `The hospitality industry's unique dynamics—namely its high attrition rate and the 
sensitive nature of customer-facing work—transform small compliance errors into 
significant, systemic risks.`,
  mainSubtitleVer: "The High-Attrition Administrative Nightmare",
  cardsVer: [
    {
      title: "The Brutal Truth",
      subtitle: `Your industry’s average employee turnover of 80% per year is 
a deep pain point. It creates an endless administrative vortex of creating, linking, 
and managing EPF, ESIC, and UAN records for every new hire and every exit.`,
      icon: "📚",
      bubble: "Learn!",
      bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "The Cost",
      subtitle: `Up to 4 hours of HR/Manager time per employee, every time they 
join or leave. For a 200-person hotel, that’s hundreds of lost hours annually. For a 
chain of 10 hotels, this cost is immense.`,
      icon: "🔨",
      bubble: "Build!",
      bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "The Guarantee",
      subtitle: `: We automate this chaos, handling every EPF/ESIC exit and 
joining in minutes, not hours, so you're never burdened by your most painful 
operational reality`,
      icon: "🌟",
      bubble: "Shine!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
  ],
};

export const horizontalCardsHosp = {
  mainSubtitleHor: "The Overtime & Tips Trap: A Trigger for Systemic Risk",
  cardsHor: [
    {
      title: "The Problem",
      subtitle: ` Accurately calculating statutory contributions on variable pay, tips, 
and overtime is a manual minefield. These seemingly small errors are what labor 
inspectors look for first`,
      icon: "🔍",
      bubble: "Discover!",
      bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
    },
    {
      title: "The Consequence",
      subtitle: ` A single incorrect calculation, when discovered, can trigger a 
full-scale audit of all your statutory records. That one error cascades into a review 
of your entire compliance history, uncovering every other small mistake and 
exposing your entire business to massive backdated dues and penalties.`,
      icon: "🎯",
      bubble: "Focus!",
      bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
    },
    {
      title: "The Guarantee",
      subtitle: `We integrate with your payroll to ensure 100% accurate, 
flawless calculations every single time, defusing these financial time bombs 
before they explode.`,
      icon: "🤝",
      bubble: "Collaborate!",
      bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
    },
    //     {
    //       title: "Legal Scrutiny & Penalties",
    //       subtitle: `Mishandling a complaint, procedural lapses, or
    // non-compliance can lead to severe penalties for non-compliance with POSH
    // Act fines up to ₹50,000, cancellation of business license and legal
    // action against the employer.`,
    //       icon: "💡",
    //       bubble: "Innovate!",
    //       bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    //     },
  ],
};

export const largeCardsHosp = {
  subTitle: "The POSH Reputation Bomb: The Ultimate Brand Killer",
  cards: [
    {
      title: "The Problem",
      subtitle: `In a customer-facing, shift-based environment, one single POSH 
violation can instantly destroy a decade of brand building.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "The Consequence",
      subtitle: `A ₹50,000 fine is the least of your worries. The real damage 
is to your brand's reputation on social media and news outlets, the loss of trust 
from employees and customers, and a potential talent drain in an industry where 
staff are already hard to retain.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "The Guarantee",
      subtitle: `We provide iron-clad POSH compliance and a dedicated, 
independent hotline to protect your brand and your team's well-being, making 
your commitment to a safe workplace visible to everyone`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
  ],
};

export const pastelCardsHosp = {
  subTitle: "End-to-End Compliance for Your Core Operations",
  cards: [
    {
      title: "EPF/ESIC for a dynamic workforce",
      subtitle: `We manage statutory contributions for 
all staff, from permanent managers to part-time banquet staff and contract 
workers, expertly handling the administrative nightmare of high attrition`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Your licenses that can shut you down",
      subtitle: `We manage the Shop & 
Establishment Act registration and renewals for a single café or a multi-location 
chain, ensuring continuous operational legality.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: " The POSH Act",
      subtitle: `We draft your policy, train your staff (waiters to 
management), and handle complaints with the legal precision needed in your 
industry, safeguarding your brand's reputation.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "All other statutory requirements",
      subtitle: `We ensure perfect compliance with 
Minimum Wages Act, Payment of Gratuity Act, and LWF/PT for all your 
locations, providing a single point of control for your entire compliance 
landscape.`,
      icon: "❤️",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
  ],
};

export const slidesLandingPage = [
  {
    name: "Richa Maheshwari",
    title: "Manager, Delhi",
    org: "Large Multinational Company",
    message:
      "EPFDesk.com has transformed our Gurgaon operations by handling all statutory compliance seamlessly, allowing my team to focus on strategic initiatives rather than portal management.",
    gradient: "from-[#eafce9] to-[#c8f7c5]",
    bgs: ["bg-[#a0d468]", "bg-[#4ecdc4]"],
    bubble: "Seamless!",
  },
  {
    name: "Adarsh Hoizal",
    title: "",
    org: "Large Staffing Company",
    message:
      "Managing statutory compliance for our workforce across multiple states was a nightmare until we partnered with EPFDesk.com – their pan-India support has streamlined everything.",
    gradient: "from-[#fffae6] to-[#fceabb]",
    bgs: ["bg-[#ffe66d]", "bg-[#ff6b6b]"],
    bubble: "Streamlined!",
  },
  {
    name: "Amith Chitrapur",
    title: "Chartered Accountant",
    org: "Multiple Clients Across India",
    message:
      "EPFDesk.com delivers seamless multi-state compliance support for all my clients. Their expertise in statutory regulations has eliminated my biggest operational headache.",
    gradient: "from-[#f8f0ff] to-[#ecdfff]",
    bgs: ["bg-[#d299c2]", "bg-[#a18cd1]"],
    bubble: "Reliable!",
  },
  {
    name: "Neeta",
    title: "Director",
    org: "Technical Services Company",
    message:
      "With our teams spread across India, EPFDesk.com has been instrumental in maintaining our 100% audit success rate with new registrations and linking done seamlessly.",
    gradient: "from-[#fceff1] to-[#ffd1dc]",
    bgs: ["bg-[#ff6b6b]", "bg-[#ffe66d]"],
    bubble: "Audit-Proof!",
  },
];

export const slidesLandingHosp = [
  {
    name: "Neeta",
    title: "HR Head",
    org: "Regional Hotel Chain",
    message:
      "EPFDesk transformed our compliance from a nightmare to a seamless operation. Their expertise in handling our multi-location staff has completely eliminated our compliance worries.",
    gradient: "from-[#eafce9] to-[#c8f7c5]",
    bgs: ["bg-[#a0d468]", "bg-[#4ecdc4]"],
    bubble: "Seamless!",
  },
  {
    name: "Rajesh",
    title: "Owner,Goa",
    org: "Boutique Restaurant",
    message:
      "As a single-outlet owner, a fine would have been devastating. EPFDesk took away all the fear, so I can focus on my guests.",
    gradient: "from-[#fffae6] to-[#fceabb]",
    bgs: ["bg-[#ffe66d]", "bg-[#ff6b6b]"],
    bubble: "Streamlined!",
  },
  {
    name: "Vikram Kumar",
    title: "Regional Commercial Director",
    org: "Large 5-Star Hotel Group",
    message:
      "The peace of mind knowing our POSH compliance is handled by experts who guarantee 100% accuracy and timely filings is invaluable for our brand.",
    gradient: "from-[#f8f0ff] to-[#ecdfff]",
    bgs: ["bg-[#d299c2]", "bg-[#a18cd1]"],
    bubble: "Reliable!",
  },
];

export const hospFaq = [
  {
    question: "We have 200+ employees across 5 cities. Too complex?",
    answer: ` Our biggest client has 2,000 employees across 15 cities, including 5-star chains. 
You're simple`,
  },
  {
    question: "We get raided tomorrow?",
    answer: `We'll be there in 2 hours with all documents. Our emergency response has saved 47 
hospitality businesses from closure.`,
  },
  {
    question: " What about my odd Goa or Kerala state rules?",
    answer: `We operate in all 29 states. Kerala's Shops Act? We wrote the compliance guide.`,
  },
  {
    question: "How fast can you start?",
    answer: `48 hours to full compliance. We've done it 500+ times`,
  },
  {
    question: "Our biggest pain is high staff attrition. How do you help?",
    answer: `We directly solve this. Our systems automate the creation, linking, and management 
of EPF and ESIC records for every joiner and exit, turning your biggest administrative 
burden into a seamless background task. This ensures perfect compliance, even with a 
high-turnover workforce.`,
  },
];

// Data starts from here for hospitality links..,

export const videoHighlightDataHospitality = {
  heading: "Every License. Every Renewal. Every Closure.",
  description:
    "Operate legally and confidently — from your first FSSAI registration to your last Fire NOC renewal.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "hospitality",
};

export const videoHighlightDataEducation = {
  heading:
    "Your compliance is a direct reflection of your institutional integrity.",
  description:
    "In India’s competitive education sector, even minor compliance failures can severely damage institutional trust and integrity.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "education",
};

export const videoHighlightDataConstruction = {
  heading:
    "Compliance is your site safety net and a direct factor in project continuity.",
  description:
    "A single oversight on a project site can cascade into a massive operational and legal threat, affecting both safety and profitability.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "construction",
};

export const videoHighlightDataFacility = {
  heading:
    "Your compliance is a direct reflection of your contractual integrity.",
  description:
    "A single oversight on a contract worker's ledger can cascade into a massive operational and legal threat.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "construction",
};

export const videoHighlightDataManufacturing = {
  heading:
    "Your compliance is a direct reflection of your operational integrity",
  description:
    "A single oversight on the factory floor can cascade into a massive operational and legal threat, affecting both safety and profitability.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "construction",
};

export const dataTableHospitality = [
  // {
  //   threshold: "1+ employees",
  //   law: "GST Act, 2017 (Turnover-based)",
  //   meaning:
  //     "You must register and file GST returns, regardless of employee count.",
  // },
  // {
  //   threshold: "1+ employees",
  //   law: "Shop & Establishment Act",
  //   meaning:
  //     "You must register your premises and comply with rules on working hours and leave.",
  // },
  // {
  //   threshold: "10+ employees",
  //   law: "POSH Act, 2013",
  //   meaning:
  //     "You must constitute an Internal Committee and provide regular employee training.",
  // },
  // {
  //   threshold: "10+ employees",
  //   law: "ESIC Act, 1948 (in notified areas)",
  //   meaning:
  //     "You must register your business and contribute for employees with a monthly wage up to ₹21,000.",
  // },
  // {
  //   threshold: "20+ employees",
  //   law: "EPF Act, 1952",
  //   meaning:
  //     "You must register your business and contribute for all eligible employees.",
  // },
  // {
  //   threshold: "20+ contract workers",
  //   law: "CLRA Act, 1970",
  //   meaning:
  //     "You must get a Principal Employer certificate and ensure your contractor has a labor license.",
  // },
  {
    threshold: "Licenses & Registrations",
    law: "Examples: FSSAI, Factory license, Boiler, PCB consents",
    meaning:
      "Registration, government approvals, periodic renewals and inspection readiness (case: F&B chain, Manufacturer).",
  },
  {
    threshold: "Operational Filings & Inspections",
    law: "Submission → Inspection → Approval workflows",
    meaning:
      "Sequenced filings, inspection scheduling and approval tracking with department badges and officer telemetry.",
  },
  {
    threshold: "Renewals, Amendments & Closures",
    law: "Auto-renewals / Amendments",
    meaning:
      "Renewals auto-tracked and pre-filed; Workforce schedules filings to ensure zero missed renewals.",
  },
  {
    threshold: "Tracking & Audit Trail",
    law: "Document vault & tamper-evident history",
    meaning:
      "Real-time status, document vault, timestamps, SLA alerts and provenance for audit readiness.",
  },
  {
    threshold: "Industry & State Coverage",
    law: "State × Industry × Act matrix (36 states/UTs · 30+ industries)",
    meaning:
      "Instant scoping — what applies to me? Tailored modules for Hospitality, Healthcare, Education, Manufacturing and more.",
  },
  {
    threshold: "Regulatory Intelligence",
    law: "Regulatory Intelligence Graph",
    meaning:
      "Each filing becomes data — timelines, rejections, inspection notes and fees feed intelligence to speed and harden future executions.",
  },
];

export const dataTableEducation = [
  {
    threshold: "10+ employees",
    law: "POSH Act, 2013",
    meaning:
      "You must constitute an Internal Committee (IC) to address sexual harassment complaints.",
  },
  {
    threshold: "10+ employees",
    law: "ESIC Act, 1948 (in notified areas)",
    meaning:
      "You must register your institution and contribute for all eligible staff.",
  },
  {
    threshold: "20+ employees",
    law: "EPF Act, 1952",
    meaning:
      "You must register your institution and contribute for all eligible staff, including teachers.",
  },
  {
    threshold: "1+ employees",
    law: "Payment of Wages Act",
    meaning:
      "You must ensure timely and full payment of wages to all employees.",
  },
  {
    threshold: "10+ employees",
    law: "Payment of Gratuity Act, 1972",
    meaning:
      "You must pay gratuity to employees with 5+ years of continuous service.",
  },
  {
    threshold: "20+ contract workers",
    law: "CLRA Act, 1970",
    meaning:
      "You must get a Principal Employer certificate and ensure your contractor has a labor license.",
  },
];

export const dataTableConstruction = [
  {
    threshold: "10+ workers",
    law: "BOCW Act & Cess, 1996",
    meaning:
      "Triggers mandatory registration and payment of Labour Welfare Cess (1% of construction cost).",
  },
  {
    threshold: "10+ workers",
    law: "ESIC Act, 1948 (in notified areas)",
    meaning: "Triggers social security contributions for all eligible workers.",
  },
  {
    threshold: "20+ workers",
    law: "CLRA Act, 1970",
    meaning:
      "Triggers mandatory registration as Principal Employer and contractor licensing rules.",
  },
];

export const dataTableFacility = [
  {
    threshold: "10+ workers",
    law: "ESIC Act, 1948 (in notified areas)",
    meaning: "Triggers social security contributions for all eligible workers.",
  },
  {
    threshold: "20+ workers",
    law: "EPF Act, 1952",
    meaning: "Triggers mandatory provident fund contributions.",
  },
  {
    threshold: "20+ contract workers",
    law: "CLRA Act, 1970",
    meaning:
      "Triggers mandatory registration as Principal Employer and contractor licensing rules.",
  },
];

export const dataTableManufacturing = [
  {
    threshold: "10+ workers",
    law: "Factories Act, 1948 (Using Power)",
    meaning:
      "Triggers mandatory licensing, stringent safety, health, and welfare regulations.",
  },
  {
    threshold: "10+ employees",
    law: "ESIC Act, 1948 (in notified areas)",
    meaning: "Triggers social security contributions for all eligible workers.",
  },
  {
    threshold: "20+ employees",
    law: "EPF Act, 1952",
    meaning:
      "Triggers mandatory provident fund contributions and record-keeping.",
  },
  {
    threshold: "20+ contract workers",
    law: "CLRA Act, 1970",
    meaning:
      "Triggers registration as Principal Employer and liability for contractor non-compliance.",
  },
  {
    threshold: "20+ employees",
    law: "POSH Act, 2013",
    meaning:
      "Triggers mandatory Internal Committee (IC) formation and training.",
  },
  {
    threshold: "20+ employees",
    law: "Payment of Gratuity Act, 1972",
    meaning: "Triggers mandatory gratuity provisions.",
  },
];

export const uspDataHospitality = {
  // mainTitle:
  //   "The Cost of Chaos: Why Compliance Failures Cascade in Hospitality",
  // cards: [
  //   {
  //     title: "The High-Attrition Administrative Nightmare",
  //     description:
  //       "High employee turnover—around 80% annually—causes massive administrative work managing EPF, ESIC, and UAN records.",
  //   },
  //   {
  //     title: "The GST Reconciliation Nightmare",
  //     description:
  //       "A GSTR-2B mismatch isn’t a software glitch but a data issue that threatens your Input Tax Credit and cash flow.",
  //   },
  //   {
  //     title: "The Overtime & Tips Trap",
  //     description:
  //       "One mistake can trigger a full audit of all statutory records, exposing hidden errors and heavy penalties. Automated payroll integration ensures precise, compliant calculations every time.",
  //   },
  //   {
  //     title: "The POSH Reputation Bomb",
  //     description:
  //       "A single POSH violation in a customer-facing, shift-based workplace can undo years of brand reputation. Robust POSH compliance and an independent hotline safeguard your brand and workforce.",
  //   },
  // ],
  mainTitle: "A Regulatory Execution Engine",
  cards: [
    {
      title: "Discover",
      description:
        "Know every compliance you need — Workforce maps every applicable requirement by state, industry, and scale.",
    },
    {
      title: "Execute",
      description:
        "Registrations, inspections, approvals — handled digitally and on-ground with verified liaison network.",
    },
    {
      title: "Track",
      description:
        "Officer-level progress, document vault, SLAs and file provenance — every action logged and traceable.",
    },
    {
      title: "Sustain",
      description:
        "Renewals, amendments and closures auto-tracked and pre-filed — zero missed deadlines, perpetual compliance.",
    },
  ],
};

export const uspDataEducation = {
  mainTitle: "The Cost of Education Compliance Chaos",
  cards: [
    {
      title: "The Diverse Workforce & EPF/ESIC Minefield",
      description:
        "Seamlessly manage EPF and ESIC compliance for teaching, non-teaching, and contractual staff.",
    },
    {
      title: "The POSH Reputation Bomb",
      description:
        "POSH compliance is critical for schools and colleges, where even one mishandled case can trigger fines, reputational damage, and loss of trust. Beyond penalties, the real risk is declining enrollment and public backlash",
    },
    {
      title: "The Payroll & Leave Compliance Trap",
      description:
        "Strict compliance with the Payment of Wages Act and labor laws is essential, as payroll and leave errors are prime audit targets.",
    },
  ],
};

export const uspDataConstruction = {
  mainTitle: "The Cost of Construction Compliance Chaos: Cess, Safety & RCM",
  cards: [
    {
      title: "BOCW & Welfare Cess Liability Minefield",
      description:
        "The BOCW Act requires a 1% Labour Welfare Cess on construction costs, with strict timelines and record-keeping.",
    },
    {
      title: "The CLRA & Contract Labour Project Risk",
      description:
        "Heavy reliance on contract labor makes you liable under the CLRA Act for any contractor non-compliance in EPF, ESIC, or wages. Lapses can lead to backdated liabilities, project delays, and potential contract cancellations.",
    },
    {
      title: "GST RCM & The Cash Flow Trap",
      description:
        "In construction, RCM often makes builders liable for GST on purchases like TDR, FSI, or materials, requiring careful monitoring.",
    },
    {
      title: "BOCW & Project Safety Management",
      description:
        "We handle BOCW project registration, 1% Labour Welfare Cess calculation, and timely remittance. Ensure compliance with safety protocols, maintain required registers, and assist with accident reporting within 24 hours.",
    },
  ],
};

export const uspDataFacility = {
  mainTitle: "The Cost of FM Compliance Chaos: RCM, CLRA & Attrition",
  cards: [
    {
      title: "The CLRA & Contract Labour Liability Minefield",
      description:
        "Relying on contract workers makes you liable under the CLRA Act for each contractor’s compliance.",
    },
    {
      title: "The GST RCM (Reverse Charge) Trap",
      description:
        "Facility management services often trigger GST Reverse Charge, making your client liable for the tax. Errors in invoicing or classification can block their Input Tax Credit and hurt profitability.",
    },
    {
      title: "The EPF/ESIC & Multi-Site Audit Risk",
      description:
        "Managing EPF and ESIC for thousands of contract workers across multiple sites with varying wages is complex and error-prone. Frequent audits mean any lapse can trigger a full review of all contracts.",
    },
    {
      title: "End-to-End Labour License & CLRA Management",
      description:
        "We manage CLRA registration for principal employers, ensure all contractors hold valid labour licenses, and handle Factories/BOCW registrations. Our automated system tracks and renews every labour license on time across all states.",
    },
  ],
};

export const uspDataManufacturing = {
  mainTitle: "The Cost of Manufacturing Compliance Chaos",
  cards: [
    {
      title: "The Factory Floor Audit & Imprisonment Risk",
      description:
        "Non-compliance risks fines up to ₹2 lakhs, imprisonment, or even production shutdowns.",
    },
    {
      title: "The Contract Labour Management Vortex",
      description:
        "Relying on contract labour creates high compliance risk under the CLRA Act, requiring contractor registration and timely statutory payments. Any record mismatch or contractor default can trigger fines, backdated dues, or forced absorption of workers.",
    },
    {
      title: "The Diverse Workforce & Payroll Complexity",
      description:
        "One mistake can trigger audits and cascading statutory penalties. Workforce Limited delivers an end-to-end manufacturing compliance solution, ensuring flawless payroll and total peace of mind.",
    },
  ],
};

export const slidesHospitality = [
  // {
  //   title: "GST: We are the operators",
  //   text: "Meticulous reconciliation, return filing, and audit defense.",
  //   image:
  //     "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  // },
  // {
  //   title: "EPF/ESIC for a dynamic workforce",
  //   text: " We manage statutory contributions for all staff, from permanent managers to part-time banquet staff and contract workers, expertly handling the administrative nightmare of high attrition.",
  //   image:
  //     "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  // },
  // {
  //   title: "Your licenses that can shut you down",
  //   text: " We manage the Shop & Establishment Act registration and renewals for a single café or a multi-location chain, ensuring continuous operational legality.",
  //   image:
  //     "https://nodcoding.com/wp-content/uploads/2024/07/home-islands-1920x2075.jpg",
  // },
  // {
  //   title: "The POSH Act",
  //   text: "We draft your policy, train your staff (waiters to management), and handle complaints with the legal precision needed in your industry, safeguarding your brand's reputation.",
  //   image:
  //     "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  // },
  // {
  //   title: " All other statutory requirements",
  //   text: "  We ensure perfect compliance with Minimum Wages Act, Payment of Gratuity Act, and LWF/PT for all your locations, providing a single point of control for your entire compliance landscape.",
  //   image:
  //     "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  // },
  {
    title: "Map — What Applies to Me?",
    text: "State × Industry × Act matrix lights up with instant scoping. Workforce maps every applicable law so you always know what applies — across 36 states & UTs and 30+ industries.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Workflow — From Submission to Approval",
    text: "Each filing follows a sequenced timeline — submission, inspection, approval — with department badges, challans, and officer tracking built-in. No missed steps, no manual chasers.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Tracking — Officer-Level Telemetry",
    text: "Monitor every file: officer name, timestamps, remarks, and SLA status. Each document is versioned in a secure vault — creating a tamper-evident audit trail automatically.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-islands-1920x2075.jpg",
  },
  {
    title: "Renewals — Auto-Filed & Scheduled",
    text: "Every registration and license is auto-tracked for expiry. Workforce pre-files renewals, reconciles fees, and keeps continuity without intervention — zero downtime, zero penalties.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-islands-1920x2075.jpg",
  },
];

export const slidesEducation = [
  {
    title: "EPF/ESIC for a diverse workforce",
    text: " We manage statutory contributions for all staff, from full-time faculty to contractual support personnel, expertly handling the nuances of your employee structure.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Meticulous Labour Registrations",
    text: "We manage your Shops and Establishment Act registration and renewals for all campuses, ensuring continuous operational legality.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },

  {
    title: "The POSH Act",
    text: "We draft your policy, train your staff (faculty, non-teaching, and management), and handle complaints with the legal precision needed to safeguard your institutional reputation.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: " All other statutory requirements",
    text: "We ensure perfect compliance with the Payment of Gratuity Act, Minimum Wages Act, and other state-specific labor laws, providing a single point of control for your entire compliance landscape.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
];

export const slidesConstruction = [
  {
    title: "CLRA Registration & Licensing",
    text: "We handle the mandatory Principal Employer registration (Form I) and ensure all your contractors are fully licensed under CLRA, protecting your liability.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "EPF & ESIC for Contract Workers",
    text: "We implement a system to monitor and verify that your contractors are making accurate and timely EPF/ESIC contributions for all workers, preventing the liability from falling back onto you (the principal employer).",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },

  {
    title: "Minimum Wages & Documentation",
    text: "Ensure compliance with the Minimum Wages Act and meticulous maintenance of all contract worker wage and attendance records.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Project GST Advisory (RCM & ITC)",
    text: " Expert guidance on complex GST RCM provisions applicable to TDR/FSI, cement, and input materials, protecting your cash flow and Input Tax Credit (ITC).",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Core Statutory Compliance",
    text: "We ensure perfect adherence to EPF, ESIC, PT, and LWF for all administrative and permanent staff.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Comprehensive Compliance Audits",
    text: "Conduct periodic labor law audits to identify and rectify any potential non-compliance issues before they become project-critical.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
];

export const slidesFacility = [
  {
    title: "EPF & ESIC for Contract Workers",
    text: "Meticulous handling of EPF and ESIC contribution calculations and filings tailored specifically for your contract labor model and high-attrition workforce.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Minimum Wages & Working Hours",
    text: "Proactive guidance on adherence to the Minimum Wages Act (which vary by state and sector) and Working Hours Regulations (as per the Shops & Establishments Act) for your entire workforce.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },

  {
    title: "Statutory Registers",
    text: "Maintenance of all required statutory registers (attendance, wages, overtime, leave records) ensuring they are audit-ready at all times.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: " Reverse Charge Mechanism (RCM) Analysis",
    text: "We analyze your service offerings and client profile to accurately determine when GST RCM applies to your services (e.g., security, manpower supply) and ensure compliant invoicing.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "RCM Compliant Invoicing",
    text: "Guidance on issuing RCM-compliant invoices and ensuring the client fulfills their tax obligations, protecting your contract integrity.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "GST Filing & ITC",
    text: "Seamless management of your own GST filing, ensuring Input Tax Credit (ITC) optimization and preventing costly mismatches.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
];

export const slidesManufacturing = [
  {
    title: "Factories Act Mastery",
    text: `Meticulous management of all "Factories Act registration requirements," license renewals, and the maintenance of mandatory registers (e.g., Muster Roll, Wage Register, Accident Register) for your manufacturing unit.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Contract Labour Compliance (CLRA)",
    text: `Expert management of "CLRA registration for principal employer" and labor license compliances for your contractors, ensuring you meet all legal requirements and are protected from liability.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Audit Readiness & Support",
    text: `Comprehensive assistance during "labour law audits," inspections by Factory Inspectors, including data compilation and expert liaison.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Your Benefit",
    text: "Guaranteed operational legality, protection from shutdown orders, and a simplified management of all your facility and workforce licenses.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
];

export const testimonialsHospitality = [
  {
    text: "“ EPFDesk transformed our compliance from a nightmare to a seamless operation. Their expertise in handling our multi-location staff has completely eliminated our compliance worries. ”",
    author: "Neeta ",
    role: "HR Head,Regional Hotel Chain",
    img: "https://nodcoding.com/wp-content/uploads/2024/09/eugenia-200x200.jpg",
  },
  {
    text: "“ As a single-outlet owner, a fine would have been devastating. EPFDesk took away all the fear, so I can focus on my guests ”",
    author: "Rajesh",
    role: "Owner, Boutique Restaurant, Goa",
    img: "https://nodcoding.com/wp-content/uploads/2024/09/gustav-200x200.jpg",
  },
  {
    text: "“ The peace of mind knowing our POSH compliance is handled by experts who guarantee 100% accuracy and timely filings is invaluable for our brand ”",
    author: "Vikram Kumar",
    role: "Regional Commercial Director, Large 5-Star Hotel Group",
    img: "https://nodcoding.com/wp-content/uploads/2024/09/haruka-200x200.jpg",
  },
];

export const testimonialsEducation = [
  {
    text: "“The peace of mind knowing our POSH compliance is handled by experts is invaluable for our brand. Our parents and staff now have complete confidence in our institution's commitment to safety ”",
    author: "Priya Sharma ",
    role: "Principal, CBSE School, Hyderabad",
    img: "https://nodcoding.com/wp-content/uploads/2024/09/eugenia-200x200.jpg",
  },
  {
    text: "“ As a single-campus administrator, a fine would have been devastating. Workforce Limited took away all the fear, so I can focus on my students and faculty.”",
    author: "Rakesh",
    role: "Administrator, Engineering College, Pune",
    img: "https://nodcoding.com/wp-content/uploads/2024/09/gustav-200x200.jpg",
  },
  {
    text: "“ Their expertise in handling our multi-campus staff has completely eliminated our compliance worries. We now have a consistent compliance standard across our entire organization. ”",
    author: "Anand Singh",
    role: "HR Head, Regional College Chain",
    img: "https://nodcoding.com/wp-content/uploads/2024/09/haruka-200x200.jpg",
  },
];

export const faqsHospitality = [
  {
    question: "We have 200+ employees across 5 cities. Too complex?",
    answer:
      "Our biggest client has 2,000 employees across 15 cities, including 5-star chains. You're simple.",
  },
  {
    question: "We get raided tomorrow?",
    answer:
      "We'll be there in 2 hours with all documents. Our emergency response has saved 47 hospitality businesses from closure.",
  },
  {
    question: "What about my odd Goa or Kerala state rules?",
    answer:
      " We operate in all 29 states. Kerala's Shops Act? We wrote the compliance guide.",
  },
  {
    question: "How fast can you start?",
    answer: " 48 hours to full compliance. We've done it 500+ times",
  },
  {
    question: "Our biggest pain is high staff attrition. How do you help?",
    answer:
      " We directly solve this. Our systems automate the creation, linking, and management of EPF and ESIC records for every joiner and exit, turning your biggest administrative burden into a seamless background task. This ensures perfect compliance, even with a high-turnover workforce.",
  },
  {
    question: "Can you handle our GST reconciliation and filings too?",
    answer: ` Yes, our specialized GST team acts as the "operator for your GST machine." We handle meticulous data reconciliation, return filing, and audit defense, ensuring you maximize your Input Tax Credit and are protected from penalties and audits.`,
  },
  {
    question:
      "What licenses are mandatory to open a restaurant or café in India?",
    answer: ` You’ll need: Shops & Establishment License, FSSAI License, Trade License, Fire NOC, Pollution
NOC, and a Health/Sanitation Certificate.
Bars and hotels additionally require Excise and Tourism Department registration.`,
  },
  {
    question: "Are GST and tax filings handled by Workforce?",
    answer: `No — Workforce focuses on regulatory and operational compliance. All taxation, accounting, and audit-related filings (like GST returns or Income Tax) should be
handled by your Chartered Accountant.`,
  },
  {
    question: "How does Workforce help with ongoing compliance?",
    answer: `Our execution system tracks renewal timelines, prepares documents, coordinates inspections,
and handles filings with departments — ensuring no penalty or suspension due to missed
deadlines.`,
  },
  {
    question: "Is Fire NOC and Pollution NOC mandatory for all restaurants?",
    answer: `Yes. Even small cafés and cloud kitchens require fire safety certification and basic pollution/
waste disposal approvals from local authorities.`,
  },
  {
    question: "What employee-related compliances apply in hospitality?",
    answer: `Once you cross 10 employees — ESIC and POSH Act apply.
At 20 employees — EPF becomes mandatory. Workforce registers and manages both.`,
  },
  {
    question: "How long does it take to get all approvals?",
    answer: `Typically 20–45 working days, depending on state and municipality.
Workforce’s process sequencing helps parallelize departments, reducing total turnaround time.`,
  },
  {
    question: "What happens during closure or transfer of a restaurant?",
    answer: `All active licenses must be surrendered or transferred — Fire, FSSAI, Trade, Pollution, etc.
Workforce ensures this is done in proper legal order, so no future liability remains.`,
  },
  {
    question: "Can Workforce handle multiple outlets or franchises?",
    answer: `Yes. Workforce manages location-specific compliance profiles, so each outlet’s licenses and
renewals are tracked separately but managed centrally.`,
  },
  {
    question: "Does Workforce provide legal representation or advisory?",
    answer: `We execute filings, renewals, and NOCs, and coordinate with authorities.
For legal disputes or litigation, we can connect you to verified legal partners — but Workforce’s
core is execution, not representation.`,
  },
  {
    question: "Can I download a compliance checklist before signing up?",
    answer: `Yes — download our free Hospitality Promoter Compliance Checklist (2025) for a complete
state-wise view of every registration, renewal, and NOC required.`,
  },
];

export const faqsEducation = [
  {
    question:
      "Are teachers and non-teaching staff both covered by your services?",
    answer:
      "Yes, our services are specifically tailored for educational institutions and cover all staff, including full-time faculty, part-time teachers, administrative staff, and contractual support personnel.",
  },
  {
    question:
      "Is it mandatory to have a POSH policy and an Internal Committee (IC) in a school or college?",
    answer:
      "Yes. If your institution employs 10 or more people (including teaching, non-teaching, and contractual staff), it is mandatory to have a POSH policy and an Internal Committee (IC). This is a critical legal requirement for the industry.",
  },
  {
    question:
      "How do you help us manage compliance for multiple campuses in different states?",
    answer:
      " Our unique strength lies in our nationwide operational footprint and deep expertise in the nuances of each state's specific labor laws. We provide centralized management for all your registrations and renewals, ensuring seamless compliance across your entire organization.",
  },
  {
    question:
      "What is the biggest compliance risk for an educational institution?",
    answer:
      "The biggest risks are non-compliance with the POSH Act (leading to severe reputational damage), non-adherence to the Shops and Establishment Act (leading to fines), and incorrect statutory contributions for a diverse workforce, which can trigger a large-scale audit.",
  },
  {
    question: "How fast can you start?",
    answer: " 48 hours to full compliance. We've done it 500+ times.",
  },
];

export const faqsConstruction = [
  {
    question:
      "What is the BOCW Act, and is Labour Cess mandatory for my project?",
    answer:
      "The BOCW Act focuses on worker safety and welfare. Yes, the Labour Welfare Cess (1% of construction cost) is mandatory for nearly all construction projects in India. We handle the assessment and timely deposit of this cess.",
  },
  {
    question: "Who is liable for EPF/ESIC if my contractor doesn't pay?",
    answer:
      "Under the CLRA Act, the Principal Employer (you) is ultimately liable if the contractor defaults on statutory payments like EPF/ESIC. Our service includes verification and a system to ensure your contractors comply, removing this liability.",
  },
  {
    question:
      "Is my company liable to pay GST under the Reverse Charge Mechanism (RCM)?",
    answer:
      "Yes, RCM is highly applicable in construction. You (the builder/promoter) are often liable to pay GST on transfer of development rights (TDR/FSI) and if you procure materials/services below certain thresholds from unregistered suppliers. We manage this entire complex liability analysis.",
  },
  {
    question:
      "What are the biggest compliance risks for a construction company?",
    answer:
      "The biggest risks are immediate financial liability under the BOCW Cess Act and the CLRA Act, and the threat of project shutdown due to safety or documentation lapses.",
  },
  {
    question: "How quickly can you ensure my project site is compliant?",
    answer:
      "Our team can perform a full compliance assessment and initiate all critical registrations within 48 hours, ensuring your project maintains legal momentum.",
  },
  {
    question:
      "Do you assist with mandatory safety records and accident reporting?",
    answer:
      "Yes. Our services ensure the proper maintenance of BOCW registers and provide expert assistance for timely accident reporting and documentation as required by the Act.",
  },
];

export const faqsFacility = [
  {
    question: "What is the CLRA Act, and how does it affect my business?",
    answer:
      "The Contract Labour (R&A) Act, 1970, regulates the employment of contract workers. It is critical because it holds you (the principal employer) liable if your contractors fail to provide statutory benefits like EPF, ESIC, or timely wages. We ensure both you and your contractors are compliant.",
  },
  {
    question:
      "Is my client responsible for GST under the Reverse Charge Mechanism (RCM)?",
    answer:
      "Yes, RCM often applies to services you supply, particularly security services or manpower supply services. This means your client must pay the GST. Errors in your invoicing or data can cause them major problems. We ensure your RCM process is flawless, protecting your client's ITC.",
  },
  {
    question:
      "What are the biggest compliance risks for a Facility Management company?",
    answer:
      "The biggest risks are financial liability under the CLRA Act (due to contractor non-compliance), severe penalties for non-adherence to the Minimum Wages Act (especially across states), and legal consequences related to RCM errors.",
  },
  {
    question:
      "How do you handle EPF and ESIC for a high-turnover contract workforce?",
    answer:
      "We provide expert management for statutory contributions for all staff types. Our automated systems accurately calculate EPF and ESIC contributions, ensuring full compliance for your entire workforce and minimizing administrative burdens from high attrition.",
  },
  {
    question:
      "Do you assist with both the Principal Employer's registration and the contractor's license?",
    answer:
      "Yes. We handle the mandatory registration for you as the principal employer and manage the verification, monitoring, and compliance for all your contractors' labor licenses.",
  },
  {
    question:
      "How do you protect us against state-specific differences in minimum wages and labor laws?",
    answer:
      "Our expertise covers the nuances of all Indian states. We provide centralized management and continuous monitoring of state-wise regulations, ensuring your local contracts and payroll adhere to the correct minimum wages and working hours rules.",
  },
];

export const faqsManufacturing = [
  {
    question:
      "Does the Factories Act apply to my business if I have under 20 workers?",
    answer:
      "The Factories Act, 1948, generally applies to any premises where a manufacturing process is carried on with 10 or more workers (using power) or 20 or more workers (without power). We can help you assess its exact applicability and registration requirements.",
  },
  {
    question:
      "Do I need a separate license for contract workers in my factory?",
    answer:
      "Yes. If you engage 20 or more contract workers, you, as the principal employer, must obtain a Registration Certificate under the CLRA Act. Your contractor must also obtain a Labor License. We manage both these processes for you.",
  },
  {
    question:
      "What are the biggest compliance risks for a manufacturing unit in India?",
    answer:
      "The biggest risks are direct non-compliance with the Factories Act (leading to severe penalties, including imprisonment, and production shutdowns) and non-adherence to the CLRA Act, which can lead to liability for your contractor's errors.",
  },
  {
    question:
      "How do you handle EPF and ESIC contributions for a mixed workforce?",
    answer:
      "We provide expert management for statutory contributions for all staff types, accurately calculating EPF and ESIC contributions on varied pay structures, ensuring compliance for your entire workforce and protecting you from penalties.",
  },
  {
    question:
      "Do your services cover safety and health provisions under the Factories Act?",
    answer:
      "Yes, our services cover all required health, safety, and welfare provisions under the Factories Act, including the maintenance of required registers and records, ensuring your factory is compliant with the law.",
  },
  {
    question: "How fast can you start?",
    answer: "48 hours to full compliance. We've done it 500+ times.",
  },
];

export const videoHighlightDataTransport = {
  heading:
    "Your compliance is a direct reflection of your operational efficiency and capacity to deliver.",
  description:
    "A single oversight on a driver's hours or a GST invoice can cascade into a massive operational and legal threat.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "construction",
};

export const dataTableTransport = [
  {
    threshold: "1+ employee",
    law: "Motor Transport Workers Act (MTWA), 1961",
    meaning:
      "Regulates working hours, welfare, and rest intervals for drivers/transport staff. Registration is mandatory.",
  },

  {
    threshold: "10+ employees",
    law: "ESIC Act, 1948",
    meaning:
      "Triggers social security contributions for eligible transport/warehouse workers.",
  },
  {
    threshold: "20+ employees",
    law: "EPF Act, 1952",
    meaning: "Triggers mandatory provident fund contributions.",
  },
  {
    threshold: "20+ contract workers",
    law: "CLRA Act, 1970",
    meaning:
      "Triggers mandatory registration as Principal Employer (common in warehousing/loading).",
  },
];

export const uspDataTransport = {
  mainTitle:
    "The Cost of Logistics Compliance Chaos: MTWA, RCM & Mobile Workforce",
  cards: [
    {
      title: "The MTWA & Working Hours Audit Risk",
      description:
        "The MTWA limits drivers to 8-hour workdays and requires strict tracking of hours, which is difficult for 24/7 fleets. Failure to comply risks heavy fines, legal action, and operational disruption.",
    },
    {
      title: "The GST RCM (Reverse Charge) Trap for GTAs",
      description: `The GST Reverse Charge Mechanism (RCM) shifts tax payment from the transporter to the service recipient, and mistakes in classification or payment can block Input Tax Credit and create major tax liabilities`,
    },
    {
      title: "The Decentralized Workforce & EPF/ESIC Burden",
      description:
        "Handling EPF and ESIC for a large, high-turnover workforce across multiple states is complex and time-consuming. Errors or missed filings can incur penalties and violate varying state minimum wage laws.",
    },
  ],
};

export const slidesTransport = [
  {
    title: "Motor Transport Workers Act (MTWA) Compliance",
    text: `Complete registration, record maintenance (e.g., duty registers), and compliance with working hours, rest intervals, and welfare provisions for your transport workers.
`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "CLRA & Contract Labour Management",
    text: ` Expert management of CLRA registration for your clients (Principal Employers) and ensuring all your contractors/sub-contractors have valid Labour Licenses (common for warehouse and loading operations).`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Warehouse/Static Compliance",
    text: ` Ensuring adherence to the Shops & Establishment Act for administrative offices and other applicable welfare acts for static warehouse staff.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Reverse Charge Mechanism (RCM) Mastery",
    text: " We analyze your service offerings (GTA, renting) to accurately determine when GST RCM applies and ensure compliant payment and documentation.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "ITC Optimization",
    text: "Seamless GST filing for your own business, optimizing Input Tax Credit (ITC) utilization and preventing costly mismatches.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "E-Way Bill Compliance",
    text: " Guidance and process setup for E-way Bill generation to ensure seamless, legally compliant movement of goods across state lines.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "E-Way Bill Compliance",
    text: " Guidance and process setup for E-way Bill generation to ensure seamless, legally compliant movement of goods across state lines.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "EPF & ESIC Compliance",
    text: " Meticulous handling of EPF and ESIC contribution calculations and filings tailored specifically for a multi-site, high-attrition transport workforce.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Minimum Wages & Working Hours",
    text: "Proactive guidance on adherence to the Minimum Wages Act (which vary by state and category) and Working Hours Regulations across all your decentralized sites.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "POSH Act Compliance",
    text: "Implementation of the POSH Act for all administrative and operational staff, mitigating severe legal and reputational risks.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
];

export const faqsTransport = [
  {
    question:
      "What is the Motor Transport Workers Act (MTWA), and does it apply to my fleet?",
    answer:
      "The MTWA regulates the working conditions of motor transport workers (drivers, conductors, cleaners). It applies to every motor transport undertaking employing one or more motor transport workers. It mandates adherence to strict rules on working hours, rest intervals, and welfare. We handle full MTWA compliance.",
  },
  {
    question: "Is our business liable for GST on freight charges under RCM?",
    answer:
      "Yes, the Reverse Charge Mechanism (RCM) often applies to services provided by a Goods Transport Agency (GTA). This means you, the recipient, are liable to pay the GST, not the GTA. Errors in RCM compliance can lead to major tax liabilities. We ensure your RCM process is flawless.",
  },
  {
    question:
      "What is the biggest compliance risk for a logistics company in India?",
    answer:
      "The biggest risks are financial liability under the CLRA Act (due to contractor non-compliance at warehouse/loading sites), severe penalties under the Minimum Wages Act, and legal consequences related to MTWA and RCM errors.",
  },
  {
    question:
      "How do you handle EPF and ESIC for a high-turnover contract workforce?",
    answer:
      "We provide expert management for statutory contributions for all staff types. Our automated systems accurately calculate EPF and ESIC contributions, ensuring full compliance for your entire workforce and minimizing administrative burdens from high attrition.",
  },
  {
    question:
      "What are the penalties for violating the Motor Transport Workers Act?",
    answer:
      "Penalties for violating the MTWA can be severe, including monetary fines, legal action against management, and potential operational disruption (e.g., halting the fleet) due to non-compliance.",
  },
  {
    question:
      "Do you assist with both the Principal Employer's CLRA registration and the contractor's license?",
    answer:
      "Yes. We handle the mandatory registration for you as the principal employer and manage the verification, monitoring, and compliance for all your contractors' labor licenses.",
  },
];

export const cityData = {
  bangalore: {
    pf: {
      title:
        "EPF Consultants Bangalore: We Log Into Your Portal and Do It For You",
      description: "Zero Penalties. Zero Stress. Zero Defaults Since 2023.",
      contact: "bangalore@pfconsultants.in",
    },
      pfRegistration: {
      title: "EPF Registration Bangalore: We Get You Registered in 7 Days",
      description:
        "100% Approval Rate. Zero Rejections. Start Hiring Immediately.",
      contact: "bangalore@pfconsultants.in",
    },
    esic: {
      title: "ESIC Consultants Bangalore: We Handle Everything, You Handle Nothing",
      description:
        "100% On-Time Filing. Zero Penalties. Zero Stress Since 2023.",
      contact: "bangalore@esicconsultants.in",
    },
      esicRegistration: {
      title: "ESIC Registration Bangalore: We Get You Registered in 5 Days",
      description:
        "100% Approval Rate. Zero Rejections. Start Covering Employees Immediately.",
      contact: "bangalore@pfconsultants.in",
    },
  },
  hyderabad: {
    pf: {
      title: "PF Consultants in Hyderabad",
      description:
        "Professional PF consultants in Hyderabad specializing in payroll compliance and PF management.",
      contact: "hyderabad@pfconsultants.in",
    },
    esic: {
      title: "ESIC Consultants in Hyderabad",
      description:
        "Reliable ESIC registration and compliance support in Hyderabad.",
      contact: "hyderabad@esicconsultants.in",
    },
  },
  goa: {
    pf: {
      title: "PF Consultants in Hyderabad",
      description:
        "Professional PF consultants in Hyderabad specializing in payroll compliance and PF management.",
      contact: "hyderabad@pfconsultants.in",
    },
    esic: {
      title: "ESIC Consultants in Hyderabad",
      description:
        "Reliable ESIC registration and compliance support in Hyderabad.",
      contact: "hyderabad@esicconsultants.in",
    },
  },
  mumbai: {
    pf: {
      title: "PF Consultants in Hyderabad",
      description:
        "Professional PF consultants in Hyderabad specializing in payroll compliance and PF management.",
      contact: "hyderabad@pfconsultants.in",
    },
    esic: {
      title: "ESIC Consultants in Hyderabad",
      description:
        "Reliable ESIC registration and compliance support in Hyderabad.",
      contact: "hyderabad@esicconsultants.in",
    },
  },
  chennai: {
    pf: {
      title: "PF Consultants in Hyderabad",
      description:
        "Professional PF consultants in Hyderabad specializing in payroll compliance and PF management.",
      contact: "hyderabad@pfconsultants.in",
    },
    esic: {
      title: "ESIC Consultants in Hyderabad",
      description:
        "Reliable ESIC registration and compliance support in Hyderabad.",
      contact: "hyderabad@esicconsultants.in",
    },
  },
  vizag: {
    pf: {
      title: "PF Consultants in Hyderabad",
      description:
        "Professional PF consultants in Hyderabad specializing in payroll compliance and PF management.",
      contact: "hyderabad@pfconsultants.in",
    },
    esic: {
      title: "ESIC Consultants in Hyderabad",
      description:
        "Reliable ESIC registration and compliance support in Hyderabad.",
      contact: "hyderabad@esicconsultants.in",
    },
  },
  naviMumbai: {
    pf: {
      title: "PF Consultants in Hyderabad",
      description:
        "Professional PF consultants in Hyderabad specializing in payroll compliance and PF management.",
      contact: "hyderabad@pfconsultants.in",
    },
    esic: {
      title: "ESIC Consultants in Hyderabad",
      description:
        "Reliable ESIC registration and compliance support in Hyderabad.",
      contact: "hyderabad@esicconsultants.in",
    },
  },
  delhi: {
    pf: {
      title: "PF Consultants in Hyderabad",
      description:
        "Professional PF consultants in Hyderabad specializing in payroll compliance and PF management.",
      contact: "hyderabad@pfconsultants.in",
    },
    esic: {
      title: "ESIC Consultants in Hyderabad",
      description:
        "Reliable ESIC registration and compliance support in Hyderabad.",
      contact: "hyderabad@esicconsultants.in",
    },
  },
  gurugram: {
    pf: {
      title: "PF Consultants in Hyderabad",
      description:
        "Professional PF consultants in Hyderabad specializing in payroll compliance and PF management.",
      contact: "hyderabad@pfconsultants.in",
    },
    esic: {
      title: "ESIC Consultants in Hyderabad",
      description:
        "Reliable ESIC registration and compliance support in Hyderabad.",
      contact: "hyderabad@esicconsultants.in",
    },
  },
  india: {
    pf: {
      title: "PF Consultants in Hyderabad",
      description:
        "Professional PF consultants in Hyderabad specializing in payroll compliance and PF management.",
      contact: "hyderabad@pfconsultants.in",
    },
    esic: {
      title: "ESIC Consultants in Hyderabad",
      description:
        "Reliable ESIC registration and compliance support in Hyderabad.",
      contact: "hyderabad@esicconsultants.in",
    },
  },
  jaipur: {
    pf: {
      title: "PF Consultants in Hyderabad",
      description:
        "Professional PF consultants in Hyderabad specializing in payroll compliance and PF management.",
      contact: "hyderabad@pfconsultants.in",
    },
    esic: {
      title: "ESIC Consultants in Hyderabad",
      description:
        "Reliable ESIC registration and compliance support in Hyderabad.",
      contact: "hyderabad@esicconsultants.in",
    },
  },
};

// data.js
export const gstData = [
  {
    slug: "gst-expert-consultants-in-bangalore",
    title: "GST Expert Consultants in Bangaloregst",
    description: "Trusted GST filing and advisory services in Bangalore.",
  },
  {
    slug: "gst-consultants-in-bangalore",
    title: "GST Registration in Hyderabad",
    description: "Hassle-free GST registration and compliance.",
  },
  {
    slug: "gstr-2",
    title: "GST Registration in Hyderabad",
    description: "Hassle-free GST registration and compliance.",
  },
  {
    slug: "gstr-3b",
    title: "GST Registration in Hyderabad",
    description: "Hassle-free GST registration and compliance.",
  },
  {
    slug: "gst-monthly-returns-filings-in-bangalore",
    title: "GST Registration in Hyderabad",
    description: "Hassle-free GST registration and compliance.",
  },
  {
    slug: "gst-registration-in-bangalore",
    title: "GST Registration in Hyderabad",
    description: "Hassle-free GST registration and compliance.",
  },
];

export const standalonePages = {
  "umang-app": {
    title: "UMANG App – Unified Mobile App for New Governance",
    description:
      "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
  },
  "UAN-linking": {
    title: "EPFO Login Guide for Members",
    description:
      "Step-by-step instructions for EPFO member login, UAN activation, and password reset.",
  },
  "pf-consultants-for-it": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-consultants-for-factories": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-consultants-for-manufacturing": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-monthly-returns": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "UAN-creation": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "PF-monthly-challans": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "PF-registration-in-bangalore": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "IC-registration-in-bangalore": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "ECR-monthly-generation": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "epf-notice-reply": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pension-withdrawl": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-death-claim-procedure": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-employee-grievience-handling": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-generate-UAN-number": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-for-schools": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-for-colleges": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-for-hospitals": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "pf-for-hotels": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "ecr-issues": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-close-epf-registration": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-change-address-in-epf": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-link-dsc-in-epf": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-approve-claims-in-epf": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-approve-form-13": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-approve-employee-name-change-in-epf": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "how-to-file-joint-declaration-in-epf": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "epf-form-5": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "epf-updates": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "epf-policy-changes": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
  "epf-code-closure": {
    title: "EPF Withdrawal Process Explained",
    description:
      "Understand eligibility, documents, and step-by-step procedure for PF withdrawal using the EPFO portal.",
  },
};

export const standalonePagesEsic = {
  "esic-challan-generation": {
    title: "UMANG App – Unified Mobile App for New Governance",
    description:
      "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
  },
  "esic-consultants-for-it": {
    title: "UMANG App – Unified Mobile App for New Governance",
    description:
      "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
  },
  "esic-consultants-for-factories": {
    title: "UMANG App – Unified Mobile App for New Governance",
    description:
      "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
  },
  "esic-consultants-for-manufacturing": {
    title: "UMANG App – Unified Mobile App for New Governance",
    description:
      "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
  },
  "esic-monthly-returns": {
    title: "UMANG App – Unified Mobile App for New Governance",
    description:
      "Access EPF, ESIC, and other government services using the UMANG App. Learn how to use it for EPF services.",
  },
};

export const epfManagementBangalore = {
  mainTitle: "Comprehensive Employer EPF Compliance Services",
  cards: [
    //     {
    //       title: "What Businesses in Bangalore Are Facing?",
    //       features: [
    //         `Every month, hundreds of Bengaluru establishments lose time and money over EPF defaults
    // they never saw coming.`,
    //         `Missed challans, wrong UAN mapping, delayed inspection replies — small mistakes that cost
    // lakhs.`,
    //         `The law doesn’t forgive ignorance.`,
    //         `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //       ],
    //     },
    //     {
    //       title: "What Workforce Does?",

    //       features: [
    //         `Workforce builds the compliance infrastructure that Indian enterprises run on.`,
    //         `From Peenya’s factories to Koramangala’s startups, we handle end-to-end EPF obligations
    // — so your team never has to.`,
    //       ],
    //     },
    {
      title: "Our Services",

      features: [
        `EPF Registration & Code Activation — handled in 48 hours.`,
        `Monthly Return Filing (ECR & Challan) — automated + verified.`,
        `EPFO Inspection & Notice Response — legal drafting, officer representation.`,
        `Employee UAN & KYC Management — streamlined onboarding & exits.`,
        `Establishment Closure or Transfer — complete documentation & surrender.`,
        `PF Health Report — Know your compliance score before your next
inspection.`,
      ],
    },
    {
      title: "Built for India’s Employers",

      features: [
        `Workforce serves over 100 enterprises across Karnataka — from industrial clusters to IT
parks — ensuring continuous compliance and peace of mind.`,
        `Case Example:A Bengaluru logistics firm faced ₹8.7 lakh penalty after PF short remittance across 47
employees. Workforce intervened, reconciled challans, and cleared inspection in 14 days — zero further
liability.`,
      ],
    },
    {
      title: "Get Your Free PF Health Audit",

      features: [
        `Before the next inspection letter arrives, know where you stand.`,
        `Upload your last PF challan or ECR file.`,
        `We’ll review and send a detailed risk report:
  * Missing employee codes
  * Interest liabilities
  * Delayed payment flags
  * Future inspection triggers`,
      ],
    },
    {
      title: "Why Choose Workforce?",

      features: [
        `Response Time:Live compliance experts available same day.`,
        `Data Security:End-to-end encrypted filing environment.`,
        `Local Network:Deep liaison with Karnataka PF offices.`,
        `Accuracy:Auto-check of ECR mismatch before submission.`,
        `Accountability:You deal with licensed consultants, not brokers.`,
        `We don’t file forms. We build trust between the law and those who follow it.`,
      ],
    },
  ],
};

export const epfManagementFaqBangalore = [
  {
    question: "Do you actually log into our EPFO portal, or just guide us?",
    answer: `We actually log in (with read/write permissions you grant via the EPFO Trusted User system) and do the filing. You don’t touch the portal unless you want to. You get a dashboard to view status anytime.`,
  },
  {
    question: "What if you miss a deadline and we get penalized?",
    answer: `In 24 months and 50+ clients, this has never happened. But if it does, we pay the penalty—that’s in our service agreement. Your risk is zero.`,
  },
  {
    question: "How quickly can you start?",
    answer: `48 hours from agreement signing. We’ve onboarded clients in as little as 24 hours for urgent cases (like when filing deadline is approaching).`,
  },
  {
    question: "Do you handle contractor PF obligations?",
    answer: `Yes. This is one of our specialties, especially for Peenya and Electronic City manufacturers who use contract labor. We track contractor compliance and ensure your establishment isn’t held liable for contractor defaults.`,
  },
  {
    question: "What about employee questions? Do we still have to answer them?",
    answer: `No. Give employees our dedicated WhatsApp number (+91-XXXXXXXXX). We answer all PF queries directly—UAN issues, balance queries, withdrawal status, transfer problems. Your HR team never sees them.`,
  },
  {
    question: "Can you handle EPF for our remote/WFH employees?",
    answer: `Absolutely. We manage EPF compliance for Bangalore-based employees working remotely and for employees in other states (when your Bangalore establishment is the registered entity).`,
  },
  {
    question: "Do you provide MIS reports for management?",
    answer: `Yes. Monthly reports showing: contributions paid, employee count, new joiners, exits, pending items, inspection status. Plus real-time dashboard access 24/7.`,
  },
  {
    question: "What if we’re already behind on filings?",
    answer: `We specialize in cleanup. We’ll assess arrears, file all pending returns, negotiate penalty waivers where possible, and bring you current within 30 days. Then we keep you compliant forever.`,
  },
];


export const largeCardsEpfoBangalore = {
  subTitle: "What Our Bangalore Clients Say",
  // subText:
  //   "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Priya M., HR Director",
      subtitle: `Before EPFdesk, our HR spent 2 days every month on PF filing. Now? They don’t even think about it. In 18 months, we haven’t had a single late filing or penalty.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Rajesh K., Finance Head",
      subtitle: `When we got an EPFO inspection notice, we panicked. EPFdesk responded in 4 hours, handled everything, and we closed the inspection with zero penalties. Worth every rupee`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Anita S., Operations Manager",
      subtitle: `Our employees used to bombard HR with PF questions. Now they just WhatsApp EPFdesk directly. That alone has saved us 10 hours a week.” `,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    // {
    //   title: "Responsibility Can’t Be Outsourced",
    //   subtitle: `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //   icon: "🤖",
    //   bubble: "Automate!",
    //   bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    // },
  ],
};

export const pastelCardsEpfoBangalore = {
  subTitle: "Get Started in 3 Steps",
  // subText:
  //   "Our experts handle complete setup while you focus on your business.",
  cards: [
    {
      title: "Step 1",
      subtitle: `Talk to us for 10 minutes — we’ll audit your current setup`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Step 2",
      subtitle: `We onboard in 48 hours — portal access, documentation, process setup`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Step 3",
      subtitle: `Relax — we handle everything from Day 1`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
//     {
//       title: "Employee UAN & KYC Management",
//       subtitle: `
// End-to-end management of employee UAN activation, KYC verification, and transfer claims — ensuring seamless onboarding, exits, and compliance across your workforce.`,
//       icon: "✨",
//       bubble: "Dream!",
//       bg: "from-[#d299c2] to-[#fef9d7]",
//     },
  ],
};

export const videoHighlightDataEpfBangalore = {
  heading:
    "PF Consultants in Bangalore — End-to-End EPF Compliance by Workforce",
  description:
    "Workforce is Bangalore’s trusted PF compliance partner — managing EPF registration, filings, inspections, and closure for India’s top employers.",
  coverImage: "https://nodcoding.com/wp-content/uploads/2024/09/Nod-Intro.jpg",
  alt: "construction",
};

export const uspDataEpfBangalore = {
  mainTitle: "What Businesses in Bangalore Are Facing?",
  cards: [
    {
      title: "The Cost of Missed Compliance",
      description:
        "Every month, hundreds of Bengaluru establishments lose time and money over EPF defaults they never saw coming.",
    },
    {
      title: "The Real Cost of PF Filing Errors",
      description:
        "Missed challans, wrong UAN mapping, delayed inspection replies — small mistakes that cost lakhs.",
    },
    {
      title: "Compliance Isn’t Optional — It’s the Law",
      description: "The law doesn’t forgive ignorance.",
    },
    {
      title: "Responsibility Can’t Be Outsourced",
      description:
        "If you’re an employer, you’re responsible — even when your contractor isn’t.",
    },
  ],
};

export const slidesEpfBangalore = [
  {
    title: "Building India’s Compliance Infrastructure",
    text: "Workforce builds the compliance infrastructure that Indian enterprises run on.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Powering India’s Businesses Through Compliance Infrastructure",
    text: `
From Peenya’s factories to Koramangala’s startups, we handle end-to-end EPF obligations — so your team never has to.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },

  {
    title: "EPF Registration & Code Activation",
    text: "We handle complete EPFO registration for new establishments in Karnataka — from digital signature setup to code allotment — ensuring your organization is compliant and operational within 48 working hours.",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Employee UAN & KYC Management",
    text: `
End-to-end management of employee UAN activation, KYC verification, and transfer claims — ensuring seamless onboarding, exits, and compliance across your workforce.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Our Services",
    text: `
EPF Registration & Code Activation — handled in 48 hours. Monthly Return Filing (ECR & Challan) — automated + verified. EPFO Inspection & Notice Response — legal drafting, officer representation. Employee UAN & KYC Management — streamlined onboarding & exits.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Built for India’s Employers",
    text: `
Workforce serves over 100 enterprises across Karnataka — from industrial clusters to IT parks — ensuring continuous compliance and peace of mind.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
  {
    title: "Get Your Free PF Health Audit",
    text: "Before the next inspection letter arrives, know where you stand. Upload your last PF challan or ECR file. We’ll review and send a detailed risk report",
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-experience-1920x2075.jpg",
  },
  {
    title: "Why Choose Workforce?",
    text: `
Live compliance experts available same day. End-to-end encrypted filing environment. Deep liaison with Karnataka PF offices. Auto-check of ECR mismatch before submission. You deal with licensed consultants, not brokers.`,
    image:
      "https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-1920x2075.jpg",
  },
];

export const epfBangaloreCardData = {
  title: "EPF Management",
  subTitle: "End to End EPF compliance Management in Bangalore",
  description:
    "Your EPF compliance worries end here. EPFdesk has protected 50+ Bangalore enterprises from EPF penalties with zero defaults — and we’re ready to do the same for you. From Peenya’s factories to Whitefield’s tech corridors, Electronic City, Koramangala, and the CBD, businesses trust us to handle what keeps HR teams awake: employee UAN linking that never lags, exit marking that meets every deadline, monthly ECRs filed flawlessly, inspection notices resolved without penalties, and contractor PF obligations that don’t become your nightmare. Our difference? We don’t just tell you what to do — we log into your portal and do it for you. Whether you’re a startup activating EPFO for the first time, a manufacturer drowning in contractor documentation, or an IT company fielding employee PF questions, our Bangalore team transforms EPF from your constant worry into your competitive advantage. Sleep better tonight. Your EPF compliance is now our responsibility.",
};

export const testimonialsEpfBangalore = {
title:"What We Actually Do (Not Just Consult)",
subTitle:"We don’t give you a checklist. We log into your EPFO portal and do everything",
  cards:[
  {
    id: 1,
    name: "Onboarding (Day 1)",
    text: `Day-1 EPF onboarding made effortless — we generate and link UANs, complete all KYC and bank verifications via the UMANG app, and ensure every new employee is EPF-compliant within 24 hours of joining.`,
    bg: "bg-[#ffeaea]",
  },
  {
    id: 2,
    name: "Monthly Filing (Before 15th Every Month)",
    text: `Timely and accurate monthly EPF filing — we generate precise ECRs, verify challans, and complete submissions before the 15th each month, ensuring zero penalties and full compliance with instant filing confirmations.`,
    bg: "bg-[#f3ffe7]",
  },
  {
    id: 3,
    name: "Exit Management (Within 48 Hours)",
    text: `Swift and compliant exit management — we mark exits within 48 hours, handle PF transfers and withdrawals, and ensure smooth final settlements for a hassle-free employee offboarding experience.`,
    bg: "bg-[#eaeaff]",
  },
  {
    id: 4,
    name: "Crisis Response (EPFO Inspections)",
    text: `Expert EPFO crisis management — we respond to inspection notices within 24 hours, prepare complete audit documentation, represent you in hearings, and secure favorable resolutions with zero penalties.`,
    bg: "bg-[#ffeaea]",
  },
  {
    id: 5,
    name: "Employee Support (Grievance Shield)",
    text: `End-to-end employee PF support — we manage all grievances through the EPFiGMS portal, resolve account issues and delays, and provide direct employee assistance so your HR team stays complaint-free.`,
    bg: "bg-[#f3ffe7]",
  },
  {
    id: 6,
    name: "What This Actually Saves You",
    text: `What This Actually Saves You — eliminate 40+ HR hours a month, avoid ₹50,000+ in annual penalties, and remove every PF-related headache. With EPFdesk, you gain guaranteed compliance, zero employee complaints, and complete peace of mind — all at a fraction of your current cost.`,
    bg: "bg-[#eaeaff]",
  },
]
}

export const epfBangaloreRegistrationCardData = {
  title: "EPF Registration",
  subTitle: "End to End EPF Registration in Bangalore",
  description:
    "Starting a business in Bangalore? The moment you cross 20 employees, EPF registration isn’t optional—it’s mandatory. But here’s what most businesses don’t know: getting EPF registration wrong costs you weeks of delays, rejected applications, and penalties that start from Day 1. EPFdesk has registered 50+ Bangalore establishments with a 100% approval rate—no rejections, no re-submissions, no delays. We handle everything: DSC procurement, Form 5A preparation, establishment code generation, LIN activation, and UMANG app setup. While other consultants take 30-45 days, we get you registered in 7 days. Whether you’re a Whitefield startup hiring your first 20 employees, a Peenya manufacturer expanding operations, or an Electronic City tech company setting up a new entity, we ensure you’re EPF-compliant from Day 1. Don’t let registration delays stop you from hiring. Let us handle the paperwork while you build your team.",
};

export const testimonialsEpfBangaloreRegistration = {
title:"Our 7-Day EPF Registration Process",
// subTitle:"We don’t give you a checklist. We log into your EPFO portal and do everything",
  cards:[
  {
    id: 1,
    name: "Day 1-2: Documentation & DSC",
    text: `We kick off by collecting and verifying all essential establishment details and documents. Our team secures your Digital Signature Certificate (DSC) and prepares the EPF registration form with complete accuracy — ensuring a smooth start to your registration process`,
    bg: "bg-[#ffeaea]",
  },
  {
    id: 2,
    name: "Day 3-4: EPFO Submission",
    text: `We create your establishment profile on the EPFO portal, upload verified documents, and file Form 5A. Our team tracks the application in real time to ensure smooth submission and zero delays.`,
    bg: "bg-[#f3ffe7]",
  },
  {
    id: 3,
    name: "Day 5-6: EPFO Processing",
    text: `We closely monitor your EPFO application, respond to any department queries, and coordinate with officials. If an inspection is required, we handle the entire process on your behalf for seamless approval.`,
    bg: "bg-[#eaeaff]",
  },
  {
    id: 4,
    name: "Day 7: Approval & Setup",
    text: `Your establishment gets approved, LIN is activated, and your EPFO access is set up on UMANG. We provide full login credentials, a quick team briefing, and ensure you're ready to file your first ECR — all within 7 days.`,
    bg: "bg-[#ffeaea]",
  },
  // {
  //   id: 5,
  //   name: "Employee Support (Grievance Shield)",
  //   text: `End-to-end employee PF support — we manage all grievances through the EPFiGMS portal, resolve account issues and delays, and provide direct employee assistance so your HR team stays complaint-free.`,
  //   bg: "bg-[#f3ffe7]",
  // },
  // {
  //   id: 6,
  //   name: "What This Actually Saves You",
  //   text: `What This Actually Saves You — eliminate 40+ HR hours a month, avoid ₹50,000+ in annual penalties, and remove every PF-related headache. With EPFdesk, you gain guaranteed compliance, zero employee complaints, and complete peace of mind — all at a fraction of your current cost.`,
  //   bg: "bg-[#eaeaff]",
  // },
]
}

export const largeCardsEpfoBangaloreRegistration = {
  subTitle: "What Bangalore Businesses Say",
  // subText:
  //   "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Karthik R., Founder",
      subtitle: `We crossed 20 employees in August. EPFdesk registered us by mid-September—in just 8 days. Our previous consultant took 6 weeks and the application was rejected twice. These guys know exactly what EPFO wants.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Meera P., HR Head",
      subtitle: `We were hiring fast and couldn’t generate UANs without EPF code. EPFdesk got us registered in 7 days—exactly when they promised. Zero hassle, zero follow-ups needed from our side.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Arun K., Operations Manager",
      subtitle: `The DSC alone took us 3 weeks with another consultant. EPFdesk procured it in 2 days and had us registered within a week. Incredible efficiency. `,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    // {
    //   title: "Responsibility Can’t Be Outsourced",
    //   subtitle: `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //   icon: "🤖",
    //   bubble: "Automate!",
    //   bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    // },
  ],
};

export const pastelCardsEpfoBangaloreRegistration = {
  subTitle: "Why Choose EPFdesk (vs DIY or Other Consultants)",
  // subText:
  //   "Our experts handle complete setup while you focus on your business.",
  cards: [
    {
      title: "DIY Registration",
      subtitle: `Doing EPF registration yourself often leads to delays, rejections, and wasted effort — with a 30–45 day timeline, high rejection risk, no expert guidance, and significant time spent chasing approvals.`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Other Consultants",
      subtitle: `Typical consultants take 20–30 days, offer minimal guidance, provide no penalty protection, and treat registration as a one-time task without ongoing support.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "EPFdesk",
      subtitle: `EPFdesk delivers guaranteed registration in 7 days with a 100% approval rate, full documentation support, proactive follow-ups, penalty protection, and ongoing post-registration compliance support.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
//     {
//       title: "Employee UAN & KYC Management",
//       subtitle: `
// End-to-end management of employee UAN activation, KYC verification, and transfer claims — ensuring seamless onboarding, exits, and compliance across your workforce.`,
//       icon: "✨",
//       bubble: "Dream!",
//       bg: "from-[#d299c2] to-[#fef9d7]",
//     },
  ],
};

export const epfManagementFaqBangaloreRegistration = [
  {
    question: "When exactly do I need EPF registration?",
    answer: `The moment you have 20 or more employees (including contract employees counted under your establishment), you must register within one month. Delay leads to penalties starting from ₹5,000/month.`,
  },
  {
    question: "What if I have 19 employees now but will cross 20 soon?",
    answer: `Start the registration process now. It takes 7-10 days, so you’ll be ready when you hit 20. Better to be early than late.`,
  },
  {
    question: "Can I register myself or do I need a consultant?",
    answer: `You can do it yourself, but 50%+ of first-time applications get rejected due to documentation errors. With EPFdesk, you get 100% approval rate and save 30+ hours of your time. Your choice depends on how much your time is worth.`,
  },
  {
    question: "What happens if registration is delayed?",
    answer: `EPFO can impose penalties of ₹5,000/month for delayed registration. Plus, you can’t generate UANs for new employees, which creates HR nightmares.`,
  },
  {
    question: "Do you handle ESIC registration too?",
    answer: `Yes! We can register you for both EPF and ESIC together. Saves time and ensures both are compliant from Day 1. [Link to ESIC Registration page]`,
  },
  {
    question: "What if EPFO asks for an inspection?",
    answer: `We prepare all inspection-ready documentation from Day 1. If EPFO schedules an inspection, we coordinate the entire process and represent you. You don’t need to interact with officials.`,
  },
  {
    question: "What about ongoing EPF compliance after registration?",
    answer: `Registration is just the start. Monthly ECR filing, employee onboarding, exits, and inspections are ongoing. We offer complete EPF management services if you want us to handle everything. [Link to EPF Consultants page]`,
  },
  {
    question: "How soon can you start?",
    answer: `Within 24 hours of receiving your documents. We start DSC procurement immediately and work in parallel on documentation.`,
  },
];


export const esicBangaloreCardData = {
  title: "ESIC Consultants",
  subTitle: "End to End ESIC compliance Management in Bangalore",
  description:
    "ESIC compliance is messy—employee IPs that take days to generate, monthly challans that miss deadlines, claims that employees chase YOU for, and inspection notices that cause panic. EPFdesk has protected 50+ Bangalore establishments from ESIC penalties with 100% on-time filing—no delays, no defaults, no drama. From Peenya’s factories to Electronic City’s warehouses, Whitefield’s offices, and Koramangala’s service centers, businesses trust us to handle what overwhelms HR teams: IP number generation the day employees join, monthly return filing before the 15th, claim processing that employees never complain about, and inspection responses that close with zero penalties. Our difference? We don’t just advise—we log into your ESIC portal and do it for you. Whether you’re a manufacturer with 100+ workers, a startup hitting 10 employees, or a logistics company drowning in employee claims, our Bangalore team transforms ESIC from your constant headache into invisible compliance. Stop managing ESIC. Let us do it.",
};

export const testimonialsEsicBangalore = {
title:"What We Actually Do (Not Just Consult)",
// subTitle:"We don’t give you a checklist. We log into your EPFO portal and do everything",
  cards:[
  {
    id: 1,
    name: "Employee Registration (Day 1)",
    text: `We generate ESIC IP numbers within 24 hours, complete employee KYC and linking, ensuring every new hire is covered from Day 1—no delays, no compliance gaps.`,
    bg: "bg-[#ffeaea]",
  },
  {
    id: 2,
    name: "Monthly Filing (Before 15th Every Month)",
    text: `We handle complete ESIC monthly filing before the 15th—accurate calculations, challan generation, payment, and confirmation—ensuring zero delays or penalties.`,
    bg: "bg-[#f3ffe7]",
  },
  {
    id: 3,
    name: "Claims Management (We Handle, Not You)",
    text: `We manage the entire ESIC claims process—from document verification to reimbursement—so your HR never deals with employee claims or ESIC follow-ups.`,
    bg: "bg-[#eaeaff]",
  },
  {
    id: 4,
    name: "Inspection Response (24-Hour Turnaround)",
    text: `We handle ESIC inspections end-to-end—responding within 24 hours, preparing documents, representing you, and closing cases with zero penalties.`,
    bg: "bg-[#ffeaea]",
  },
  {
    id: 5,
    name: "Exit Management",
    text: `We manage employee exits instantly—updating ESIC records, verifying final contributions, and ensuring every exit is fully compliant and penalty-free.`,
    bg: "bg-[#f3ffe7]",
  },
  {
    id: 6,
    name: "What This Actually Saves You",
    text: `By switching to EPFdesk, you eliminate penalties, delays, and HR effort—saving Lakhs annually while your HR team stays completely free from ESIC hassles.`,
    bg: "bg-[#eaeaff]",
  },
]
}

export const largeCardsEsicBangalore = {
  subTitle: "What Our Bangalore Clients Say",
  // subText:
  //   "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Ramesh S., Plant Manager",
      subtitle: `“Before EPFdesk, our workers would complain about ESIC claims for weeks. Now they get help directly from EPFdesk’s team. Our HR doesn’t even know which claims are being processed. Perfect.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Divya K., Operations Head",
      subtitle: `We got an ESIC inspection notice and panicked—we had no idea what documents they wanted. EPFdesk responded in 3 hours, handled everything, and closed it with zero penalties. Worth every single rupee.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Sanjay M., HR Manager",
      subtitle: `“New employee IP numbers used to take us 5-7 days. With EPFdesk, they’re generated within 24 hours. Our onboarding is now seamless. `,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    // {
    //   title: "Responsibility Can’t Be Outsourced",
    //   subtitle: `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //   icon: "🤖",
    //   bubble: "Automate!",
    //   bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    // },
  ],
};

export const pastelCardsEsicBangalore = {
  subTitle: "Get Started in 3 Steps",
  // subText:
  //   "Our experts handle complete setup while you focus on your business.",
  cards: [
    {
      title: "Step 1",
      subtitle: `Talk to us for 10 minutes — we’ll audit your current setup`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Step 2",
      subtitle: `We onboard in 48 hours — portal access, documentation, process setup`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Step 3",
      subtitle: `Relax — we handle everything from Day 1`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
//     {
//       title: "Employee UAN & KYC Management",
//       subtitle: `
// End-to-end management of employee UAN activation, KYC verification, and transfer claims — ensuring seamless onboarding, exits, and compliance across your workforce.`,
//       icon: "✨",
//       bubble: "Dream!",
//       bg: "from-[#d299c2] to-[#fef9d7]",
//     },
  ],
};

export const esicManagementFaqBangalore = [
  {
    question: "Do you actually log into our ESIC portal, or just guide us?",
    answer: `We actually log in (with access you grant us) and handle everything—IP generation, monthly filing, claim tracking. You get a dashboard to monitor status anytime, but you never need to touch the ESIC portal.`,
  },
  {
    question: "What if you miss a deadline and we get penalized?",
    answer: `In 24 months and 50+ clients, we’ve never missed a deadline. But if it happens, we pay the penalty—that’s in our service agreement. Your risk is zero.`,
  },
  {
    question: "How quickly can you start?",
    answer: `48 hours. We’ve onboarded emergency clients in 24 hours when filing deadlines were close.`,
  },
  {
    question: "Do you handle employee ESIC claims?",
    answer: `Yes. This is one of our key services. Employees contact us directly (we give them a dedicated WhatsApp number), and we guide them through the entire claim process. Your HR team never hears from them.`,
  },
  {
    question: "What about ESIC inspections?",
    answer: `We respond within 24 hours, prepare all documentation, and represent you. Our 100% resolution rate means zero penalties. You don’t even need to meet the inspector if you don’t want to.`,
  },
  {
    question: "Can you handle both EPF and ESIC?",
    answer: `Absolutely. Most of our clients use us for both. It’s more efficient and ensures both compliances are handled by one team. [Link to PF ESIC Consultant page]`,
  },
  {
    question: "What if we’re already behind on filings?",
    answer: `We specialize in cleanup. We’ll assess arrears, file all pending returns, negotiate penalty waivers where possible, and bring you current within 30 days.`,
  },
  {
    question: "Do you provide reports for management?",
    answer: `Yes. Monthly reports showing: contributions paid, employee count, new IPs generated, exits, pending claims, inspection status. Plus real-time dashboard.`,
  },
];

export const esicBangaloreRegistrationCardData = {
  title: "ESIC Registration",
  subTitle: "End to End ESIC Registration in Bangalore",
  description:
    "ESIC registration in Bangalore is simpler than EPF—but only if you know exactly what ESIC wants. Most businesses make three costly mistakes: wrong branch selection, incorrect wage declaration, and incomplete factory inspection documentation. EPFdesk has registered 50+ Bangalore establishments with 100% approval rate—no rejections, no delays, no re-submissions. We handle everything: employer registration (Code 17), factory/office inspection coordination, employee IP generation, portal setup, and first monthly return. While DIY attempts take 15-20 days (and often fail), we get you registered in 5 days. Whether you’re a Peenya manufacturer just crossing 10 employees, a Whitefield startup hiring your first batch, or an Electronic City logistics company expanding operations, we ensure ESIC coverage from Day 1. Don’t let registration delays leave your employees uncovered. We handle the paperwork in 5 days flat.",
};


export const testimonialsEsicRegistrationBangalore = {
title:"Our 5-Day ESIC Registration Process",
// subTitle:"We don’t give you a checklist. We log into your EPFO portal and do everything",
  cards:[
  {
    id: 1,
    name: "Day 1: Documentation Collection",
    text: `We collect all necessary documents, verify every detail for accuracy, and determine your correct ESIC branch or sub-regional office. We also prepare and validate the employer registration form (Code 17) to ensure a smooth registration process.`,
    bg: "bg-[#ffeaea]",
  },
  {
    id: 2,
    name: "Day 2: ESIC Submission",
    text: `We submit the completed Code 17 form to the designated ESIC branch, begin tracking the application status in real time, and proactively prepare for any inspection or additional documentation requests from ESIC authorities.`,
    bg: "bg-[#f3ffe7]",
  },
  {
    id: 3,
    name: "Day 3: Inspection (if required)",
    text: `We coordinate and manage the ESIC inspection process—arranging the visit, presenting all required documentation, addressing officer queries on the spot, and ensuring your establishment receives prompt inspection clearance.`,
    bg: "bg-[#eaeaff]",
  },
  {
    id: 4,
    name: "Day 4: Registration Approval",
    text: `We secure your 17-digit ESIC establishment code, set up your online employer portal access, and prepare the complete employee registration list—ensuring your organization is ready to onboard employees under ESIC immediately.`,
    bg: "bg-[#ffeaea]",
  },
  {
    id: 5,
    name: "Employee Registration & Setup",
    text: `We complete full employee registration by generating IP numbers, filing the first monthly return (if applicable), and setting up online challan payments. You receive full portal access and a team briefing—making your establishment fully ESIC-compliant within just 5 days.`,
    bg: "bg-[#f3ffe7]",
  },
  // {
  //   id: 6,
  //   name: "What This Actually Saves You",
  //   text: `By switching to EPFdesk, you eliminate penalties, delays, and HR effort—saving Lakhs annually while your HR team stays completely free from ESIC hassles.`,
  //   bg: "bg-[#eaeaff]",
  // },
]
}

export const largeCardsEsicRegistrationBangalore = {
  subTitle: "What Bangalore Businesses Say",
  // subText:
  //   "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Suresh P., Operations Manager",
      subtitle: `We tried DIY ESIC registration and got rejected twice. EPFdesk did it in 5 days flat. They knew exactly what the ESIC inspector would ask for. Seamless process.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Priya R., Founder",
      subtitle: `Our employee count crossed 10 on a Friday. By the next Friday, EPFdesk had us registered with all employee IPs generated. Insanely fast.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Kiran M., HR Head",
      subtitle: `The ESIC inspection was scheduled on Day 3. EPFdesk had everything ready—the inspector was in and out in 30 minutes. Registration approved same day.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    // {
    //   title: "Responsibility Can’t Be Outsourced",
    //   subtitle: `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //   icon: "🤖",
    //   bubble: "Automate!",
    //   bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    // },
  ],
};

export const pastelCardsEsicRegistrationBangalore = {
  subTitle: "Get Started in 3 Steps",
  // subText:
  //   "Our experts handle complete setup while you focus on your business.",
  cards: [
    {
      title: "Step 1",
      subtitle: `Share basic details (10-minute call)`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Step 2",
      subtitle: `We handle everything (5 days)`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Step 3",
      subtitle: `You’re registered, employees covered`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
//     {
//       title: "Employee UAN & KYC Management",
//       subtitle: `
// End-to-end management of employee UAN activation, KYC verification, and transfer claims — ensuring seamless onboarding, exits, and compliance across your workforce.`,
//       icon: "✨",
//       bubble: "Dream!",
//       bg: "from-[#d299c2] to-[#fef9d7]",
//     },
  ],
};

export const esicRegistrationFaqBangalore = [
  {
    question: "When do I need ESIC registration?",
    answer: `When you have 10 or more employees earning up to ₹21,000/month. Registration must be done within 15 days of crossing this threshold. Delay = penalties.`,
  },
  {
    question: "What if I have contractors? Do they count?",
    answer: `Yes, if contract employees work at your premises and you exercise control over them. We help you determine if contractor employees need to be covered under your ESIC.`,
  },
  {
    question: "What’s the inspection for?",
    answer: `ESIC sometimes inspects establishments to verify address, employee details, and working conditions. We prepare all documentation so inspection goes smoothly. With us, inspections close the same day.`,
  },
  {
    question: "Can I register without hiring employees yet?",
    answer: `Yes. If you’re about to hire, register first so new employees are covered from Day 1. Better to be early than late.`,
  },
  {
    question: "Do you handle both EPF and ESIC registration?",
    answer: `Yes! Most businesses need both. We can register you for EPF and ESIC together, saving time and ensuring both compliances start together. [Link to PF ESIC Registration page]`,
  },
  {
    question: "What about ongoing ESIC compliance after registration?",
    answer: `Registration is just the start. Monthly contributions, IP generation for new employees, claims, and inspections are ongoing. We offer complete ESIC management if you want us to handle everything. [Link to ESIC Consultants page]`,
  },
  {
    question: "How soon can you start?",
    answer: `Within 24 hours of receiving your documents. We start documentation immediately.`,
  },
  {
    question: "What if ESIC rejects the registration?",
    answer: `With us, rejection doesn’t happen (100% approval rate). But if by some rare chance it does, we fix issues and resubmit at no extra cost.`,
  },
];


export const PFEsicBangaloreCardData = {
  title: "PF & ESIC Consultants",
  subTitle: "End to End PF & ESIC compliance Management in Bangalore",
  description:
    "Managing EPF and ESIC separately is exhausting—two consultants, two deadlines, two inspection responses, two sets of employee complaints. EPFdesk handles both EPF and ESIC as one integrated service, saving you time, reducing errors, and ensuring nothing falls through the cracks. We protect 50+ Bangalore businesses with complete PF+ESIC compliance: UANs and IPs generated together on Day 1, both monthly returns filed before the 15th, employee queries answered by one team, inspections coordinated without duplication, and contractors managed under both compliances. When EPF and ESIC are managed by one team, compliance becomes seamless. Whether you’re a Peenya manufacturer with 200+ workers, a Whitefield tech company scaling fast, or a Koramangala services business tired of juggling two consultants, our Bangalore team handles both compliances so well, you’ll forget they exist. One team. Both compliances. Zero stress. That’s the EPFdesk difference.",
};

export const testimonialsPFEsicBangalore = {
title:"What We Do (Everything, Together)",
// subTitle:"We don’t give you a checklist. We log into your EPFO portal and do everything",
  cards:[
  {
    id: 1,
    name: "Onboarding (EPF + ESIC Together)",
    text: `We register new employees under both EPF and ESIC on the same day—UAN creation, IP generation, and portal linking—all completed seamlessly. Your workforce becomes 100% compliant from Day 1 with a unified, hassle-free onboarding process.`,
    bg: "bg-[#ffeaea]",
  },
  {
    id: 2,
    name: "Monthly Filing (Both Before 15th)",
    text: `We file both EPF and ESIC returns before the 15th each month—accurate ECRs, challans, and payments done together. You receive one consolidated confirmation, ensuring zero penalties and perfect synchronization across both compliances.`,
    bg: "bg-[#f3ffe7]",
  },
  {
    id: 3,
    name: "Exit Management (Coordinated)",
    text: `We coordinate EPF and ESIC exits simultaneously—marking employees in both portals, settling final contributions, and guiding on PF transfers or withdrawals. Result: clean exits with no compliance gaps or pending obligations.`,
    bg: "bg-[#eaeaff]",
  },
  {
    id: 4,
    name: "Employee Support (One Team, All Queries)",
    text: `We provide a single support line for all employee PF and ESIC issues—UAN, IP, claims, transfers, or balances—so your HR team never deals with compliance complaints again`,
    bg: "bg-[#ffeaea]",
  },
  {
    id: 5,
    name: "Inspection Response (Coordinated Defense)",
    text: `We handle both EPF and ESIC inspections together—responding within 24 hours, coordinating documentation, and ensuring consistent, penalty-free closure.`,
    bg: "bg-[#f3ffe7]",
  },
  {
    id: 6,
    name: "What Integrated PF+ESIC Management Saves You",
    text: `With EPFdesk’s integrated PF + ESIC management, you eliminate duplicate work, delays, and penalties — saving 50+ HR hours a month, ₹80,000+ in fines, and endless coordination headaches. One dashboard, zero stress.`,
    bg: "bg-[#eaeaff]",
  },
]
}

export const largeCardsPFEsicBangalore = {
  subTitle: "What Bangalore Businesses Say",
  // subText:
  //   "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Rajesh V., CFO",
      subtitle: `We were using two different consultants—one for PF, one for ESIC. The coordination was killing us. EPFdesk handles both seamlessly. One team, one dashboard, zero stress. Should have done this years ago.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Meera S., HR Director",
      subtitle: `During an EPFO inspection, they also checked ESIC compliance. Thank God EPFdesk handles both—our responses were perfectly aligned. No contradictions, no panic. Inspection closed in one day.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Anil K., Operations Head",
      subtitle: `Our employees used to call us for PF questions and a different consultant for ESIC claims. Now they just WhatsApp EPFdesk for everything. That alone is worth the fee.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    // {
    //   title: "Responsibility Can’t Be Outsourced",
    //   subtitle: `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //   icon: "🤖",
    //   bubble: "Automate!",
    //   bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    // },
  ],
};

export const pastelCardsPFEsicBangalore = {
  subTitle: "Get Started in 3 Steps",
  // subText:
  //   "Our experts handle complete setup while you focus on your business.",
  cards: [
    {
      title: "Step 1",
      subtitle: `10-minute call — we audit both your EPF and ESIC compliance`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Step 2",
      subtitle: `48-hour onboarding — we take over both portals`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "Step 3",
      subtitle: `Relax — we handle both, you handle neither`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
//     {
//       title: "Employee UAN & KYC Management",
//       subtitle: `
// End-to-end management of employee UAN activation, KYC verification, and transfer claims — ensuring seamless onboarding, exits, and compliance across your workforce.`,
//       icon: "✨",
//       bubble: "Dream!",
//       bg: "from-[#d299c2] to-[#fef9d7]",
//     },
  ],
};

export const pfEsicManagementFaqBangalore = [
  {
    question: "Do you actually handle both EPF and ESIC, or just coordinate?",
    answer: `We actually handle both—we log into both portals (with your permissions) and do all the work. You get one unified dashboard showing status of both compliances.`,
  },
  {
    question: "Is integrated service more expensive than hiring two consultants?",
    answer: `No! It’s usually cheaper because we eliminate duplicate work. Plus, you save massive amounts of coordination time. Ask for a quote—you’ll be surprised.`,
  },
  {
    question: "What if I only need EPF or only ESIC?",
    answer: `We offer standalone services too. But if you need both, integrated service makes way more sense. [Links to EPF-only and ESIC-only pages]`,
  },
  {
    question: "Can you take over if I’m currently using two different consultants?",
    answer: `Absolutely. We specialize in consolidation. We’ll transition both smoothly without any compliance gaps. Usually done within one month.`,
  },
  {
    question: "What about contractor PF and ESIC?",
    answer: `We handle contractor compliance under both EPF and ESIC. Critical for manufacturers and logistics companies. We ensure you’re not held liable for contractor defaults in either.`,
  },
  {
    question: "How do employee queries work?",
    answer: `Give employees one WhatsApp number (ours). They contact us for PF balance, ESIC claims, UAN issues, IP problems—everything. Your HR team never hears from them.`,
  },
  {
    question: "Do you handle registration too?",
    answer: `Yes! If you need to register for EPF and/or ESIC, we do that first, then take over ongoing management. [Link to PF ESIC Registration page]`,
  },
  {
    question: "What if we miss a deadline under your management?",
    answer: `Hasn’t happened in 24 months across 50+ clients. But if it does, we pay the penalty for both EPF and ESIC. It’s in our service agreement.`,
  },
];

export const PFEsicRegBangaloreCardData = {
  title: "PF & ESIC Registration",
  subTitle: "End to End PF & ESIC registration in Bangalore",
  description:
    "Need both EPF and ESIC registration? Doing them separately is inefficient—you duplicate documentation, deal with two different agencies, coordinate two inspections, and waste 3-4 weeks. EPFdesk registers both EPF and ESIC together in 7 days flat—one documentation set, coordinated submissions, unified inspection response, and complete setup of both systems. We’ve registered 50+ Bangalore establishments for both compliances with 100% approval rate. While separate registrations take 6-8 weeks total, we complete both in 7 days. Whether you’re a new Peenya manufacturer setting up operations, a Whitefield startup hitting registration thresholds, or an Electronic City logistics company expanding, we ensure you’re compliant under both EPF and ESIC from Day 1. Don’t do registration twice. Let us register you for both, once, in one week.",
};

export const testimonialsPFEsicRegBangalore = {
title:"Our 7-Day Integrated Registration Process",
// subTitle:"We don’t give you a checklist. We log into your EPFO portal and do everything",
  cards:[
  {
    id: 1,
    name: "Documentation & Preparation",
    text: `Streamlined document collection for both EPF and ESIC—handled together in a single session. We prepare all required forms, verify details, and ensure accuracy before submission.`,
    bg: "bg-[#ffeaea]",
  },
  {
    id: 2,
    name: "Parallel Submissions",
    text: `EPF and ESIC registrations are submitted simultaneously—no waiting between the two. We create your EPF establishment, file required forms, and submit ESIC Code 17 the same day, ensuring both processes move forward in parallel for faster approval.`,
    bg: "bg-[#f3ffe7]",
  },
  {
    id: 3,
    name: "Inspection & Processing",
    text: `If an inspection is required, we coordinate a single, unified inspection for both EPF and ESIC. Our team presents all documentation together, addresses officer queries on the spot, and monitors both applications closely to ensure quick, hassle-free approvals`,
    bg: "bg-[#eaeaff]",
  },
  {
    id: 4,
    name: "Approval & Complete Setup",
    text: `By Day 7, both EPF and ESIC setups are fully approved and active. You receive establishment and ESIC codes, LIN activation, and employee access through UMANG and ESIC portals. With both systems ready, you can instantly start filings, generate UANs and IPs, and onboard new hires seamlessly.`,
    bg: "bg-[#ffeaea]",
  },
  
]
}

export const largeCardsPFEsicRegBangalore = {
  subTitle: "What Bangalore Businesses Say",
  // subText:
  //   "Your assigned client manager ensures seamless ongoing operations and proactive problem-solving.",

  cards: [
    {
      title: "Vikram R., Founder, ",
      subtitle: `We needed both EPF and ESIC. Other consultants said ‘EPF will take 3 weeks, then we’ll do ESIC which takes 2 weeks—total 5 weeks.’ EPFdesk did both in 7 days. We were hiring on Day 8. Unbelievable efficiency.`,
      icon: "🛡️",
      bubble: "Protect!",
      bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      title: "Deepa M., HR Manager",
      subtitle: `The inspector came for EPF verification and also checked ESIC documents at the same time. EPFdesk had coordinated this—one inspection, both clearances. Saved us at least 2 weeks.`,
      icon: "🔗",
      bubble: "Integrate!",
      bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
    },
    {
      title: "Anand K., Operations Director",
      subtitle: `We were ready to hire 30 employees but couldn’t until EPF and ESIC codes came through. EPFdesk got us both in 7 days. Those 30 people joined within 10 days of us starting the process. Perfect timing.`,
      icon: "💼",
      bubble: "Consult!",
      bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
    },
    // {
    //   title: "Responsibility Can’t Be Outsourced",
    //   subtitle: `If you’re an employer, you’re responsible — even when your contractor isn’t.`,
    //   icon: "🤖",
    //   bubble: "Automate!",
    //   bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    // },
  ],
};

export const pastelCardsPFEsicRegBangalore = {
  subTitle: "Why Choose EPFdesk for Both Registrations",
  // subText:
  //   "Our experts handle complete setup while you focus on your business.",
  cards: [
    {
      title: "DIY Approach",
      subtitle: `The DIY approach is slow and inefficient—taking 6–8 weeks with high rejection risk and separate inspections. You’ll spend over 60 hours coordinating tasks and managing two different portals, increasing the chance of delays and compliance errors`,
      icon: "🎨",
      bubble: "Create!",
      bg: "from-[#a8e6cf] to-[#dcedc1]",
    },
    {
      title: "Two Separate Consultants",
      subtitle: `Hiring two separate consultants still causes inefficiency—4–5 weeks of sequential work, duplicate documentation, and double coordination. You’ll manage two invoices and risk getting conflicting advice from different consultants.`,
      icon: "🌱",
      bubble: "Grow!",
      bg: "from-[#ffd3a5] to-[#fd9853]",
    },
    {
      title: "EPFdesk Integrated",
      subtitle: `With EPFdesk’s integrated approach, both EPF and ESIC registrations are completed in just 7 days through parallel processing. You get 100% approval rates, zero coordination hassles, and spend only 10 minutes on the initial call—one team, one invoice, one seamless process.`,
      icon: "🤝",
      bubble: "Connect!",
      bg: "from-[#a8edea] to-[#fed6e3]",
    },
//     {
//       title: "Employee UAN & KYC Management",
//       subtitle: `
// End-to-end management of employee UAN activation, KYC verification, and transfer claims — ensuring seamless onboarding, exits, and compliance across your workforce.`,
//       icon: "✨",
//       bubble: "Dream!",
//       bg: "from-[#d299c2] to-[#fef9d7]",
//     },
  ],
};

export const pfEsicRegFaqBangalore = [
  {
    question: "Do I need both EPF and ESIC registration?",
    answer: `Depends on employee count: 
- EPF: Mandatory when you have 20+ employees 
- ESIC: Mandatory when you have 10+ employees earning up to ₹21,000/month  
If you’re near or above both thresholds, register for both together. It’s more efficient.`,
  },
  {
    question: "What if I only need one of them now?",
    answer: `We offer standalone EPF or ESIC registration too. 
But if you’ll need both eventually, register together now—it’s faster and cheaper than doing separately later.`,
  },
  {
    question: "Can you really do both in 7 days?",
    answer: `Yes. We process both in parallel (not sequentially like others do).  
EPF takes 5-7 days, ESIC takes 4-5 days. When done together with coordinated submissions, it’s completed in 7 days total.`,
  },
  {
    question: "What about inspections—do we need two separate ones?",
    answer: `Usually not. We coordinate ONE inspection that covers both EPF and ESIC requirements.  
This saves you time and ensures consistency.`,
  },
  {
    question: "What if one gets approved but the other is delayed?",
    answer: `Hasn’t happened with our clients (100% approval rate).  
But if it does, we push for both to complete together. You don’t go live with half-registration.`,
  },
  {
    question: "What about ongoing compliance after registration?",
    answer: `Registration is just the beginning.  
Monthly EPF and ESIC filings, employee onboarding, exits, claims, inspections are ongoing.  
We offer integrated PF+ESIC management services if you want us to handle everything.`,
  },
  {
    question: "How soon can you start?",
    answer: `Within 24 hours of receiving your documents.  
We immediately start DSC procurement and documentation preparation.`,
  },
  {
    question: "What if I’m already registered for one but need the other?",
    answer: `No problem. We can register the missing one.  
But if you’re interested, we also offer integrated compliance management for both.`,
  },
];
