"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ContentSlider({ slides }) {
  const [active, setActive] = useState(0);

  return (
    <>
      <h1 className="text-center text-5xl mb-8 font-extrabold">
        Inside the Regulatory Engine
      </h1>
      <p className="text-center max-w-3xl mx-auto mb-10 text-gray-700 text-lg">
        The Workforce platform translates complex Acts and filings into four
        unified execution layers — Map, Workflow, Tracking, and Renewals — each
        purpose-built to eliminate manual follow-ups and compliance risk.
      </p>

      <div className="w-full bg-[#fff8f0] py-12">
        <div className="max-w-6xl relative mx-auto px-4">
          <div className="absolute top-[-65px] left-[45%] z-50">
            {/* Decorative Triangles */}
            <div
              className="absolute 
              border-t-[40px] border-t-transparent 
              border-b-[40px] border-b-blue-500 
              border-l-[40px] border-l-transparent"
            ></div>
            <div
              className="absolute translate-x-[60%] 
              border-t-[40px] border-t-transparent 
              border-b-[40px] border-b-yellow-400 
              border-l-[40px] border-l-transparent"
            ></div>
          </div>

          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden relative">
            {/* IMAGE */}
            <div className="w-full md:w-1/2 relative overflow-hidden h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="relative h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <img
                    src={slides[active].image}
                    alt={slides[active].title}
                    className="h-full w-full object-cover"
                  />

                  {/* BLUE SHUTTER */}
                  <div className="absolute inset-0 z-30 flex flex-col">
                    <motion.div
                      className="flex-1 bg-blue-500"
                      initial={{ y: 0 }}
                      animate={{ y: "-100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="flex-1 bg-blue-500"
                      initial={{ y: 0 }}
                      animate={{ y: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </div>

                  {/* ORANGE SHUTTER */}
                  <div className="absolute inset-0 z-20 flex flex-col">
                    <motion.div
                      className="flex-1 bg-orange-400"
                      initial={{ y: 0 }}
                      animate={{ y: "-100%" }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.6,
                      }}
                    />
                    <motion.div
                      className="flex-1 bg-orange-400"
                      initial={{ y: 0 }}
                      animate={{ y: "100%" }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.6,
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: [0, -20, 0],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-yellow-400 rotate-45 rounded-[2px] align-top"></span>
                    {slides[active].title}
                  </h2>
                  <p className="text-xl text-gray-600">{slides[active].text}</p>
                </motion.div>
              </AnimatePresence>

              {/* Pagination Buttons */}
              <div className="flex mt-6">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`group cursor-pointer relative w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium overflow-hidden`}
                  >
                    {/* Default gray */}
                    {active !== i && (
                      <span className="absolute inset-0 bg-gray-200 z-0"></span>
                    )}
                    {/* Hover blue */}
                    {active !== i && (
                      <span className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
                    )}
                    {/* Active yellow */}
                    {active === i && (
                      <span className="absolute inset-0 bg-yellow-400 z-0"></span>
                    )}
                    <span
                      className={`relative text-[16px] font-semibold z-10 ${
                        active === i ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
