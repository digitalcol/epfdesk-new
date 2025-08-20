"use client";
import React, { useEffect, useRef, useState } from "react";
import Slide from "./slide";
import { plansEpfDesk } from "../../utils/data";

export default function VerticalCarousel() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const slideHeight = window.innerHeight;
      const index = Math.round(scrollTop / slideHeight);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-screen">
      <div className="absolute top-6 left-6 z-10 hidden sm:flex flex-col space-y-2 text-sm font-medium">
        {plansEpfDesk.cards.map((_, idx) => (
          <span
            key={idx}
            className={`transition-colors ${
              activeIndex === idx ? "text-black font-bold" : "text-gray-400"
            }`}
          >
            {String(idx + 1).padStart(2, "0")}
          </span>
        ))}
      </div>

      <div
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {plansEpfDesk.cards.map((slide, idx) => (
          <Slide key={slide.id || idx} {...slide} />
        ))}
      </div>
    </div>
  );
}
