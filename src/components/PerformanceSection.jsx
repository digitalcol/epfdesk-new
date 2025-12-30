"use client";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";
export const PerformanceSection = ({ data, image }) => {
  return (
    <>
      <section className="flex mt-8 flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="flex items-center gap-2 mb-3">
          <div className=" text-[#001f1f] flex items-center gap-3 font-semibold px-3 py-1 rounded-full text-[17px]">
            <img
              src="/images/EPFdesk (1).svg"
              alt="logo"
              className="w-[200px] h-auto"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-[3.2rem] mb-2 font-bold text-[#001f1f] max-w-5xl tracking-tight">
          {data?.title}
        </h2>
        <h3 className="text-4xl md:text-[2.3rem] font-bold text-[#001f1f] max-w-5xl tracking-tight">
          {data?.subTitle}
        </h3>

        {/* Subtitle */}
        <p className="text-[#001f1f] font-normal mt-4 mb-6 max-w-xl text-[1.2rem]">
          {data?.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => (window.location.href = "mailto:hello@epfdesk.com")}
            className="bg-[#003d3d] w-[250px] cursor-pointer text-[1rem] font-normal text-[#cdface] px-6 py-3 shadow-sm transition rounded-[13px]"
            style={{
              backgroundImage: "linear-gradient(180deg, #066, #003d3d)",
              boxShadow:
                "inset 0 10px 16px -10px #ffffff0f, 0 8px 8px #001f1f0f, 0 4px 4px #001f1f0f, 0 2px 2px #001f1f0f, 0 0 1px #001f1f52, inset 0 -2px 1px #001f1f3d, inset 0 1px 1px #cdface14",
            }}
          >
            Get a Free PF Audit
          </button>

          <button
            onClick={() => (window.location.href = "tel:+919945933333")}
            className="bg-[#c4f5db] cursor-pointer text-[16px] text-[#066] font-[500] px-6 py-3 rounded-[13px] transition"
            style={{
              backgroundImage: "linear-gradient(180deg, #eafce9, #cdface)",
              boxShadow:
                "0 4px 4px #001f1f0f,0 2px 2px #001f1f0f,0 0 1px #001f1f52,inset 0 1px 1px #cdface14",
            }}
          >
            Get Started in 24 hours
          </button>
          <button
            onClick={() => {
              const phone = "919945933333";
              const text = encodeURIComponent(
                "Hello EPFDesk,\n\n" +
                  "I’d like to know more about your compliance services.\n\n" +
                  "Company Name:\n" +
                  "No. of Employees:\n" +
                  "My Role:\n" +
                  "Areas of Interest:"
              );
              window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
            }}
            className="relative group bg-[#c4f5db] cursor-pointer text-[16px] flex items-center justify-center gap-2 text-[#066] font-[500] px-6 py-3 rounded-[13px] transition"
            style={{
              backgroundImage: "linear-gradient(180deg, #eafce9, #cdface)",
              boxShadow:
                "0 4px 4px #001f1f0f,0 2px 2px #001f1f0f,0 0 1px #001f1f52,inset 0 1px 1px #cdface14",
            }}
          >
            <IoLogoWhatsapp className="size-5 sm:size-6 transition-transform group-hover:scale-0" />

            {/* Default text */}
            <span className="transition-opacity group-hover:opacity-0">
              WhatsApp
            </span>

            {/* Hidden number, shows on hover */}
            <span className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
              +919945933333
            </span>
          </button>
        </div>

        {/* Card */}
      </section>
      <div className=" relative p-1 rounded-3xl w-full max-w-5xl mx-auto">
        <div className="transition  rounded-[20px] ">
          <div className="grid grid-rows-1 text-left ">
            <img
              src={image}
              alt="City Snap"
              className="w-full h-auto rounded-2xl block"
            />
          </div>
        </div>
      </div>
    </>
  );
};
