"use client";
import { useEffect, useRef } from "react";

import LinkButtons from "./whatsApp";
import RawMazeGame from "./mazeHero";
import { IoLogoWhatsapp } from "react-icons/io";

function ZendeskHeroStack() {
  return (
    <div className="relative mb-[20px] w-full">
      <div className="relative mx-auto h-[250px] w-full sm:h-[350px] md:h-[450px] lg:h-[500px]">
        <img
          src="/images/hero_maze_optimized.webp"
          alt="App UI"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default function Hero({ setShowFloating }) {
  const heroRef = useRef(null);

  useEffect(() => {
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
    <div className="relative pt-32 md:pt-36 lg:pt-36">
      <section className="bg-white pb-12 md:pb-10 lg:pb-10 px-6 md:px-12">
        <div className="flex flex-col md:flex-col lg:flex-col justify-center items-center max-w-7xl mx-auto gap-4">
          <div className="w-full md:w-2/3 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">
              Streamline EPFO, ESIC & PT Compliance Unlock HR potential
            </h1>
            <h2 className="text-lg sm:text-[1.5rem] text-gray-600 mb-2 md:mb-2 lg:mb-2">
              We Handle 90% of Your EPFO, ESIC, PT & LWF Compliance – Free HR &
              Finance Teams for Growth
            </h2>
            <div className="flex flex-col gap-4 mb-2">
              <LinkButtons />
            </div>
            <p className="text-lg sm:text-[1.5rem] mb-5 text-gray-600">
              Go Live in 24 Hours – We Handle Complete EPFO, ESIC & PT Setup
            </p>
          </div>

          <div className="w-full md:w-3/4">
            {/* Show on desktop only */}
            <div className="hidden md:block">
              <RawMazeGame />
            </div>

            {/* Show on mobile/tablet only */}
            <div className="block md:hidden">
              <img
                src="/images/hero_maze_optimized.webp"
                alt="EPFO Compliance Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl mt-5 sm:mt-16 font-bold text-gray-900 text-center">
            Stuck in the Maze, We’ll guide you out.
          </h2>
          <p className="text-gray-600 text-[1.5rem] text-center mt-4 max-w-4xl mx-auto">
            Every HR department faces these compliance nightmares. You're not
            alone.
          </p>
        </div>
      </section>
    </div>
  );
}
