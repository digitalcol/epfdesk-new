// components/Testimonials.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Guy Novik",
    text: `I underestimated just how valuable our investment in Lattice would prove to be…as a small business we’ve set a gold standard for what individual and collective people success looks like.`,
    bg: "bg-[#ffeaea]",
  },
  {
    id: 2,
    name: "Alan Cairns",
    text: `Lattice is better than its competitors. It feels like it was made for us. Everything is rooted in building a high-performance culture and raising the bar year-on-year.`,
    bg: "bg-[#f3ffe7]",
  },
  {
    id: 3,
    name: "Weave Team",
    text: `Lattice is better than its competitors. It feels like it was made for us. Everything is rooted in building a high-performance culture and raising the bar year-on-year.`,
    bg: "bg-[#eaeaff]",
  },
  {
    id: 4,
    name: "Guy Novik",
    text: `I underestimated just how valuable our investment in Lattice would prove to be…as a small business we’ve set a gold standard for what individual and collective people success looks like.`,
    bg: "bg-[#ffeaea]",
  },
  {
    id: 5,
    name: "Alan Cairns",
    text: `Lattice is better than its competitors. It feels like it was made for us. Everything is rooted in building a high-performance culture and raising the bar year-on-year.`,
    bg: "bg-[#f3ffe7]",
  },
  {
    id: 6,
    name: "Weave Team",
    text: `Lattice is better than its competitors. It feels like it was made for us. Everything is rooted in building a high-performance culture and raising the bar year-on-year.`,
    bg: "bg-[#eaeaff]",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  const isProgrammatic = useRef(false);
  const programmaticTimeout = useRef(null);

  // Helper: compute active index by comparing centers
  const computeActiveIndex = () => {
    const el = scrollRef.current;
    if (!el) return 0;
    const children = Array.from(el.children);
    const scrollCenter = el.scrollLeft + el.clientWidth / 2;

    let bestIndex = 0;
    let bestDist = Infinity;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(childCenter - scrollCenter);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = idx;
      }
    });

    return bestIndex;
  };

  // Scroll to a card and center it
  const scrollToCard = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[index];
    if (!child) return;

    // compute left so the child is centered
    let left = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;

    // clamp left to valid scroll range
    const maxLeft = Math.max(0, el.scrollWidth - el.clientWidth);
    left = Math.max(0, Math.min(left, maxLeft));

    // set programmatic flag to avoid onScroll mismatch
    isProgrammatic.current = true;
    clearTimeout(programmaticTimeout.current);

    el.scrollTo({
      left,
      behavior: "smooth",
    });

    // optimistic set so dot updates immediately
    setCurrent(index);

    // clear programmatic flag after animation ends (heuristic)
    // note: increased to 700ms to be safer for slower devices
    programmaticTimeout.current = setTimeout(() => {
      // If scroll is clamped to bounds, set to exact edge index
      const currentScroll = Math.round(el.scrollLeft);
      if (currentScroll === 0) {
        setCurrent(0);
        isProgrammatic.current = false;
        return;
      }
      if (currentScroll >= Math.round(maxLeft)) {
        setCurrent(el.children.length - 1);
        isProgrammatic.current = false;
        return;
      }

      // Otherwise compute by centers (fallback)
      const finalIndex = computeActiveIndex();
      setCurrent(finalIndex);
      isProgrammatic.current = false;
    }, 700);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      // if we initiated the scroll programmatically, skip rapid updates
      if (isProgrammatic.current) return;
      const index = computeActiveIndex();
      setCurrent(index);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    // also update on resize (cards may move/resize)
    window.addEventListener("resize", onScroll);

    // initial active item
    setCurrent(computeActiveIndex());

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(programmaticTimeout.current);
    };
  }, []);

  return (
    // <section className="flex flex-col items-center w-full py-10">
    //   <div
    //     ref={scrollRef}
    //     className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full px-4 md:px-12 scroll-smooth"
    //     style={{ scrollBehavior: "smooth" }}
    //   >
    //     {testimonials.map((t) => (
    //       <div
    //         key={t.id}
    //         className={`${t.bg} snap-center flex-shrink-0 w-[90%] md:w-[420px] rounded-3xl p-8 flex flex-col justify-between transition-transform duration-300`}
    //       >
    //         <div className="flex items-center gap-4 mb-4">
    //           <div>
    //             <h3 className="font-semibold">{t.name}</h3>
    //           </div>
    //         </div>

    //         <p className="text-gray-800 text-[0.95rem] leading-relaxed mb-6">
    //           {t.text}
    //         </p>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="flex gap-2 mt-6">
    //     {testimonials.map((_, index) => (
    //       <button
    //         key={index}
    //         aria-label={`Go to slide ${index + 1}`}
    //         onClick={() => scrollToCard(index)}
    //         className={`h-2 rounded-full cursor-pointer transition-all ${
    //           current === index ? "w-8 h-4" : "w-4 h-4"
    //         }`}
    //         style={{
    //            backgroundColor: current === index ? "#d4cec4" : "#ebe7e1", //#d4cec4 set same color for all dots (change as you like)
    //         }}
    //       />
    //     ))}
    //   </div>
    // </section>
    <div className="w-full rounded-[3.2rem] mt-36 md:max-w-7xl lg:max-w-[100rem] xl:max-w-[150rem] mx-auto border border-[color-mix(in_srgb,_#001f1f_8%,_transparent)] bg-white py-12">
      <h1 className="text-center text-[2.6rem] font-semibold tracking-[-.024em] text-[#001f1f]">
        Trusted by top performers
      </h1>
      {/* Parent with white background */}
      <section className="flex flex-col items-center w-full py-10">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full px-4 md:px-12 scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`${t.bg} snap-center flex-shrink-0 w-[90%] md:w-[420px] h-[350px] rounded-3xl p-8 flex flex-col justify-between transition-transform duration-300`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h3 className="text-[2rem] font-semibold">{t.name}</h3>
                </div>
              </div>

              <p className="text-gray-800 text-[20px] mb-6">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollToCard(index)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                current === index ? "w-8 h-4" : "w-4 h-4"
              }`}
              style={{
                backgroundColor: current === index ? "#d4cec4" : "#ebe7e1",
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
