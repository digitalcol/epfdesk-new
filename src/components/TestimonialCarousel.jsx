"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

export default function QuoteSwiper() {
  const quotes = [
    {
      quote:
        "I feel like Lattice knows our business, what’s important, and what’s working for us. Also, the seamless integration of data is impressive. It allows us to look at our organization and understand its shape. We don’t have to guess, we can go in and pinpoint why employees leave, identify trends, and help managers take proactive steps to improve retention and engagement.",
      name: "J.D. Slaughter",
      title:
        "Group VP for Organizational Development and Effectiveness @ Huge",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/68ac2808f90ddb5d77f67343_sops-26-jd-slaughter.webp",
    },
    {
      quote:
        "Lattice gives us a central hub where performance, development, engagement, and planning come together. It lets us operate strategically and speak the same language as our finance partners.",
      name: "Karishma Barua",
      title: "VP of People @ Fairmarkit",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/68a8d92d1c2f96f34879bdf8_sops-26-karishma-barua.webp",
    },
    {
      quote:
        "Lattice has made a significant impact on our business. We’ve adopted multiple products and gone deep with each one. Having Lattice integrated into our day-to-day experience has been instrumental in embedding the culture and values we strive for as a company.",
      name: "Sudarshan Dhati",
      title: "Global Head of People Operations and Total Rewards @ Tide",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/68ac280870155b49597a3685_sops-26-sudarshan-dati.webp",
    },
    {
      quote:
        "Lattice has really helped us foster a strong culture of collaboration, continuous feedback, and celebrating our core values.",
      name: "Gary Chow",
      title: "Head of People Operations and Systems @ Lyra Health",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/68ac2808bbe4f81f551db42a_sops-26-gary-chow.webp",
    },
  ];

  useEffect(() => {
    // Prevent Swiper misalignment during SSR hydration
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <section className="bg-[#fcfde8] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-bullet",
            bulletActiveClass: "is-active",
          }}
          spaceBetween={20}
          centeredSlides
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 18 },
            992: { slidesPerView: 2, spaceBetween: 20 },
          }}
          className="is-quotes"
        >
          {quotes.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className={`relative bg-[#ecdcfa] p-8 text-[#652ea3] min-h-[360px] flex flex-col justify-between`}
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[#652ea3] w-[38px] h-[38px] p-[10px] bg-[#d9adff] absolute top-0 left-0 text-2xl mb-4" />

                {/* Quote Text */}
                <blockquote className="text-[#652ea3] text-[1.05rem] leading-relaxed ml-4 mb-6">
                  “{item.quote}”
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-[#001f1f]">
                      {item.name}
                    </div>
                    <div className="text-sm text-[#6a7878]">{item.title}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination (dots) */}
        <div className="flex justify-center mt-8 gap-2">
          <style jsx global>{`
            .swiper-pagination {
              position: relative !important;
              padding-top: 1rem;
            }
            .swiper-bullet {
              width: 10px;
              height: 10px;
              background-color: #e5e5e5;
              border-radius: 50%;
              transition: all 0.3s ease;
            }
            .swiper-bullet.is-active {
              background-color: #8b5cf6;
              width: 20px;
              border-radius: 999px;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
