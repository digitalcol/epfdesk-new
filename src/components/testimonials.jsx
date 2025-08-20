"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";

const testimonials = [
  {
    title: "Human Handled.",
    img: "/images/flat_office_team_collab-2.jpg",
    quote: [
      `Your employees don’t get automated replies or confusing menus.
They talk to real PF experts — people who understand how EPFO works. We answer,
guide, fix, and follow up. Every case is human handled, not machine deflected. That
means better outcomes and calmer people`,
    ],
  },
  {
    title: "Working Abroad, get EPF done in India.",
    img: "/images/hr_onboarding_illustration.webp",
    quote: [
      `Employees outside India struggle the most
with PF claims and withdrawals. We act as your local liaison - visiting EPFOs, filing
grievances, and fixing issues even for NRIs. No VPN, no travel, no agent chasing.
Just real resolution, across borders.`,
    ],
  },
  {
    title: "EPF Withdrawal Issues.",
    img: "/images/solving_tickets_illustration.webp",
    quote: [
      `You don’t need to
deploy a tool, train
your HR, or change
your workflows.
We work via a secure
link your team and
employees can access
anytime.
Raise a ticket. Get
updates. Track
progress.
Everything handled by
our backend
operations — no tech
lift for you.
Go live in less than a
day.`,
    ],
  },
  {
    title: "Your EPF India Network.",
    img: "/images/man_abroad_illustration.webp",
    quote: [
      `Most PF issues can only be resolved by visiting local EPFO
offices — but your employees are remote or overseas. Our network covers EPFO
offices across India. We physically represent your case when required. No more
asking employees to take time off to fix their PF. We go where your people can’t.`,
    ],
  },

  {
    title: "Go live just now.",
    img: "/images/flat_support_agent_illustration.webp",
    quote: [
      `You don’t need to deploy a tool, train your HR, or change your
workflows. We work via a secure link your team and employees can access anytime.
Raise a ticket. Get updates. Track progress. Everything handled by our backend
operations — no tech lift for you. Go live in less than a day.`,
    ],
  },
  {
    title: "One Team on your side.",
    img: "/images/live_chat_support_illustration_3_500x400.webp",
    quote: [
      `PF grievance redressal is often delayed by blame games
between employers, employees, and EPFO. We eliminate that. Your employee raises
a ticket - we investigate, escalate, and resolve it directly with EPFO. No bouncing
back to HR. No confusion about who’s responsible. Just one team, accountable
until it’s done`,
    ],
  },
  {
    title: "EPFdesk Platform works for you.",
    img: "/images/cafeteria_scene_illustration.webp",
    quote: [
      `Each PF case comes with its own live tracker -
like a delivery status for your problem. From “ticket received” to “resolved,” the
employee and HR team always know what’s happening. No more follow-up calls or
confusion. Transparency builds trust.`,
    ],
  },
];

const testimonialsV2 = [
  {
    title: "Payroll Sheet to EPF Contribution.",
    img: "/images/bj7.png",
    quote: [
      `We handle accurate preparation and timely
upload of your Electronic Challan-cum-Return (ECR). No portal errors. No late
penalties. You share payroll — we take care of the rest, month after month`,
    ],
  },
  {
    title: "All things UAN.",
    img: "/images/n18.png",
    quote: [
      `Every employee needs a valid UAN and proper exit for future claims.
We manage UAN generation, Aadhaar validation, and ensure exits are filed
correctly. No more escalations from ex-employees or transfer issues.`,
    ],
  },
  {
    title: "Employee Concerns - No More.",
    img: "/images/n25b.png",
    quote: [
      `Your employees raise PF concerns - we handle
them end-to-end. From passbook issues to withdrawal delays, we fix it at the EPFO
office level. No more HR follow-ups. Just resolution and reporting.`,
    ],
  },
  {
    title: "Payroll Sheet to ESIC Contribution.",
    img: "/images/n21.png",
    quote: [
      `We ensure ESIC contributions are correctly
calculated, uploaded, and paid on time. Whether salaried, part-time, or casual every
employee is accounted for. No portal surprises.`,
    ],
  },
  {
    title: "All things IP.",
    img: "/images/nh6.png",
    quote: [
      `We onboard your new hires on the ESIC portal, generate their
Insurance Numbers (IPs), and ensure Aadhaar-based mapping. Your team doesn’t
need to learn the process - we handle it all accurately.`,
    ],
  },
  {
    title: "Employee Benefits when they need.",
    img: "/images/epf1.png",
    quote: [
      `Employees struggling to access medical
benefits or maternity entitlements? We guide them, file required forms, and even
liaise with ESIC branch offices if needed. You stay focused on work, while we
protect your workforce`,
    ],
  },
];

function TestimonialCard({
  name,
  title,
  img,
  children,
  bounds,
  scrollX,
  ...props
}) {
  const ref = useRef(null);

  const computeOpacity = useCallback(() => {
    const element = ref.current;
    if (!element || bounds.width === 0) return 1;

    const rect = element.getBoundingClientRect();

    if (rect.left < bounds.left) {
      const diff = bounds.left - rect.left;
      const percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    } else if (rect.right > bounds.right) {
      const diff = rect.right - bounds.right;
      const percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    } else {
      return 1;
    }
  }, [ref, bounds]);

  const opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  });

  useLayoutEffect(() => {
    opacity.set(computeOpacity());
  }, [computeOpacity, opacity]);

  useMotionValueEvent(scrollX, "change", () => {
    opacity.set(computeOpacity());
  });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="flex w-72 shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_0px_6px_#0000003b] transition sm:w-100 md:w-100 lg:w-100"
    >
      <div className="relative aspect-square w-full">
        <img
          src={img}
          alt={title}
          fill
          quality={90}
          className="rounded-2xl object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-lg leading-snug text-gray-700">
          <strong className="font-semibold text-black">{title}</strong>{" "}
          {Array.isArray(children) ? children.join(". ") + "." : children}
        </p>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef(null);
  const { scrollX } = useScroll({ container: scrollRef });
  const [setReferenceWindowRef, bounds] = useMeasure();
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollX, "change", (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth));
  });

  function scrollTo(index) {
    let gap = 32;
    let width = scrollRef.current.children[0].offsetWidth;
    scrollRef.current.scrollTo({
      left: (width + gap) * index,
      behavior: "smooth",
    });
  }

  function scrollPrev() {
    scrollTo(Math.max(activeIndex - 1, 0));
  }

  function scrollNext() {
    scrollTo(Math.min(activeIndex + 1, testimonials.length - 1));
  }

  return (
    <div className="relative overflow-hidden py-16">
      <div className="mx-4 md:mx-10 lg:mx-10">
        <div className="ml-3">
          <div className="">
            <p className="mb-3 text-lg font-medium text-gray-800">
              Employee Benefits
            </p>

            <h1 className="mb-6 text-[40px] leading-tight font-bold text-black sm:text-[54px] sm:leading-[1.1]">
              Tailored to help employees
              <br className="hidden sm:block" />
              step in their comfort zone
            </h1>

            <p className="text-lg text-gray-500 sm:text-xl">
              These are some of the services that we believe will help your
              employees
            </p>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={clsx(
          "px-2 py-16 flex gap-8 mx-4 md:mx-12 lg:mx-12",
          "snap-x snap-mandatory scroll-smooth overflow-x-auto scroll-px-6",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        {testimonials.map(({ img, name, title, quote }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            name={name}
            title={title}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
          >
            {quote}
          </TestimonialCard>
        ))}
        {/* <div className="w-2xl shrink-0 sm:w-216" /> */}
      </div>

      <div className="absolute right-4 bottom-4 flex gap-2">
        <button
          onClick={scrollPrev}
          className="cursor-pointer rounded-full bg-[#0000005c] px-4 py-2 text-white hover:bg-gray-700"
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        <button
          onClick={scrollNext}
          className="cursor-pointer rounded-full bg-[#0000005c] px-4 py-2 text-white hover:bg-gray-700"
        >
          <ChevronRightIcon className="size-6" />
        </button>
      </div>
    </div>
  );
}

export function TestimonialsV2() {
  const scrollRef = useRef(null);
  const { scrollX } = useScroll({ container: scrollRef });
  const [setReferenceWindowRef, bounds] = useMeasure();
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollX, "change", (x) => {
    const cardWidth = scrollRef.current?.children[0]?.clientWidth || 1;
    setActiveIndex(Math.floor(x / cardWidth));
  });

  function scrollTo(index) {
    const gap = 32;
    const width = scrollRef.current?.children[0]?.offsetWidth || 1;
    scrollRef.current.scrollTo({
      left: (width + gap) * index,
      behavior: "smooth",
    });
  }

  function scrollPrev() {
    scrollTo(Math.max(activeIndex - 1, 0));
  }

  function scrollNext() {
    scrollTo(Math.min(activeIndex + 1, testimonialsV2.length - 1));
  }

  return (
    <div className="relative overflow-hidden py-16 my-12 md:my-[80px] lg:my-[80px]">
      <div className="mx-4 md:mx-10 lg:mx-10">
        <div className="ml-3">
          <div className="">
            <p className="mb-3 text-lg font-medium text-gray-800">
              Employer Benefits
            </p>

            <h1 className="mb-6 w-full text-[40px] leading-tight font-bold text-black sm:text-[54px] sm:leading-[1.1] md:w-[60%] lg:w-[60%]">
              You are the focus
              <br className="hidden sm:block" />
              We want to give you all the support that you need
            </h1>

            <p className="text-lg text-gray-500 sm:text-xl">
              These are some of the services that we believe will help your
              employer
            </p>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={clsx(
          "px-2 py-16 flex gap-8 mx-4 md:mx-12 lg:mx-12",
          "snap-x snap-mandatory scroll-smooth overflow-x-auto scroll-px-6",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        {testimonialsV2.map(({ img, name, title, quote }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            name={name}
            img={img}
            title={title}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(testimonialIndex)}
          >
            {quote}
          </TestimonialCard>
        ))}
      </div>

      {/* Bottom-right scroll buttons */}
      <div className="absolute right-4 bottom-4 flex gap-2">
        <button
          onClick={scrollPrev}
          className="cursor-pointer rounded-full bg-[#0000005c] px-4 py-2 text-white hover:bg-gray-700"
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        <button
          onClick={scrollNext}
          className="cursor-pointer rounded-full bg-[#0000005c] px-4 py-2 text-white hover:bg-gray-700"
        >
          <ChevronRightIcon className="size-6" />
        </button>
      </div>
    </div>
  );
}
