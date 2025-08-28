"use client"
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";



const TestimonialSlider = ({slides}) => {
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
