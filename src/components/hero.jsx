"use client";
import { useEffect, useRef } from "react";
import LinkButtons from "./whatsApp";
import RawMazeGame from "./mazeHero";
import Image from "next/image";

export default function Hero({ setShowFloating }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!setShowFloating) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloating(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [setShowFloating]);

  return (
    <div className="relative pt-32 md:pt-36 lg:pt-36" ref={heroRef}>
      <section className="bg-white pb-12 md:pb-10 lg:pb-10 px-6 md:px-12">
        <div className="flex flex-col md:flex-col lg:flex-col justify-center items-center max-w-7xl mx-auto gap-4">

          {/* Text + CTA */}
          <div className="w-full md:w-2/3 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">
              Streamline EPFO, ESIC &amp; PT Compliance — Unlock HR Potential
            </h1>
            <p className="text-lg sm:text-[1.5rem] text-gray-600 mb-2">
              We Handle 90% of Your EPFO, ESIC, PT &amp; LWF Compliance – Free HR &amp;
              Finance Teams for Growth
            </p>
            <div className="flex flex-col gap-4 mb-2">
              <LinkButtons />
            </div>
            <p className="text-lg sm:text-[1.5rem] mb-5 text-gray-600">
              Go Live in 24 Hours – We Handle Complete EPFO, ESIC &amp; PT Setup
            </p>
          </div>

          {/* Hero Visual */}
          <div className="w-full md:w-3/4">
            {/* Desktop — interactive maze */}
            <div className="hidden md:block">
              <RawMazeGame />
            </div>

            {/* Mobile — static image, optimized for LCP */}
            <div className="block md:hidden">
              <Image
                src="/images/hero_maze_optimized.webp"
                alt="EPFO ESIC Compliance Illustration — EPFDesk"
                width={800}
                height={500}
                priority
                fetchPriority="high"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Bottom tagline */}
          <h2 className="text-3xl sm:text-5xl mt-5 sm:mt-16 font-bold text-gray-900 text-center">
            Stuck in the Maze? We&apos;ll Guide You Out.
          </h2>
          <p className="text-gray-600 text-[1.5rem] text-center mt-4 max-w-4xl mx-auto">
            Every HR department faces these compliance nightmares. You&apos;re not alone.
          </p>

        </div>
      </section>
    </div>
  );
}
