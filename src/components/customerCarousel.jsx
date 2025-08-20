"use client"
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
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

const TestimonialSlider = () => {
  const [isReady, setIsReady] = useState(false);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (paginationRef.current) {
      setIsReady(true);
    }
  }, []);

  return (
    <section className="w-full py-12">
      <h4 className="px-8 text-4xl text-center font-bold mb-4 sm:mb-16">
        Trusted by a growing number of HR departments in India
      </h4>

      <div className="max-w-7xl mx-auto px-4 py-4 overflow-hidden">
        {isReady && (
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor={true}
            touchRatio={1}
            touchStartPreventDefault={false}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1326: { slidesPerView: 3.2 },
              1400: { slidesPerView: 3.5 },
            }}
            className="!overflow-visible"
             onSwiper={(swiper) => (paginationRef.current = swiper)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative h-full min-h-[320px]  p-6 rounded-3xl shadow-xl bg-gradient-to-br ${slide.gradient} flex flex-col justify-between`}
                 onClick={(e) => {
                      const card = e.currentTarget;
                      const clickX = e.clientX;
                      const { left, width } = card.getBoundingClientRect();
                      const relativeX = clickX - left;

                      if (relativeX < width / 2) {
                        paginationRef.current?.slidePrev(); 
                      } else {
                        paginationRef.current?.slideNext(); 
                      }
                    }}>
                
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute w-5 h-5 rounded-full opacity-20 bg-[#ff6b6b] top-[20%] left-[20%] animate-bounce" />
                    <div className="absolute w-4 h-4 rounded-full opacity-20 bg-[#4ecdc4] bottom-[20%] right-[20%] animate-bounce delay-200" />
                    <div className="absolute w-6 h-6 rounded-full opacity-20 bg-[#ffe66d] bottom-[30%] left-[30%] animate-bounce delay-300" />
                  </div>

               
                  <p className="text-gray-800 text-lg leading-relaxed z-10 relative">
                    “{slide.message}”
                  </p>

                  
                  <div className="z-10 relative mt-6">
                    <p className="text-lg font-semibold text-gray-900">
                      {slide.name}
                    </p>
                    {slide.title && (
                      <p className="text-sm text-gray-700">{slide.title}</p>
                    )}
                    <p className="text-sm font-medium text-blue-700">
                      {slide.org}
                    </p>
                  </div>

                 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Pagination */}
        <div
          ref={paginationRef}
          className="custom-swiper-pagination mt-6 flex justify-center gap-2"
        />
      </div>
    </section>
  );
};

export default TestimonialSlider;
