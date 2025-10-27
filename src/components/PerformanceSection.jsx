"use client"
import { TiArrowRepeat } from "react-icons/ti";
export const PerformanceSection = () => {
  return (
    <>
    <section className="flex my-8 flex-col items-center justify-center px-6 pt-20 text-center">
      {/* Label */}
      <div className="flex items-center gap-2 mb-3">
        <div className=" text-[#001f1f] flex items-center gap-3 font-semibold px-3 py-1 rounded-full text-[17px]">
          {/* <span className="w-[40px] h-[40px] shadow-performance bg-[#c4f5db] text-[#007a7a] text-[39px] rounded-[10px]">
            <TiArrowRepeat />
          </span>{" "}
          EPFDesk */}
          <img src="/images/EPFdesk (1).svg" alt="logo" className="w-[200px] h-auto"/>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-[3.2rem] font-bold text-[#001f1f] max-w-2xl tracking-tight">
        PF Consultants in Bangalore
      </h2>

      {/* Subtitle */}
      <p className="text-[#001f1f] font-normal mt-4 mb-8 max-w-xl text-[1.2rem]">
        EPFO, Registration, UAN Generation, Monthly Returns, Handling
        Inspections, We take care of everything from start to end.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* <button
          className="bg-[#003d3d] text-[1rem] font-normal text-[#cdface] px-6 py-3 shadow-sm transition rounded-[13px]"
          style={{
            backgroundImage: "linear-gradient(180deg, #066, #003d3d)",
            boxShadow:
              "inset 0 10px 16px -10px #ffffff0f, 0 8px 8px #001f1f0f, 0 4px 4px #001f1f0f, 0 2px 2px #001f1f0f, 0 0 1px #001f1f52, inset 0 -2px 1px #001f1f3d, inset 0 1px 1px #cdface14",
          }}
        >
          Get a Free PF Audit
        </button>
        <button
          className="bg-[#c4f5db] text-[16px] text-[#066] font-[500] px-6 py-3 rounded-[13px] transition"
          style={{
            backgroundImage: "linear-gradient(180deg, #eafce9, #cdface)",
            boxShadow:
              "0 4px 4px #001f1f0f,0 2px 2px #001f1f0f,0 0 1px #001f1f52,inset 0 1px 1px #cdface14",
          }}
        >
          Get Started in 24 hours
        </button>
         <button
          className="bg-[#c4f5db] text-[16px] text-[#066] font-[500] px-6 py-3 rounded-[13px] transition"
          style={{
            backgroundImage: "linear-gradient(180deg, #eafce9, #cdface)",
            boxShadow:
              "0 4px 4px #001f1f0f,0 2px 2px #001f1f0f,0 0 1px #001f1f52,inset 0 1px 1px #cdface14",
          }}
        >
          Whatsapp Us
        </button> */}
        <button
          onClick={() => (window.location.href = "mailto:hello@epfdesk.com")}
          className="bg-[#003d3d] cursor-pointer text-[1rem] font-normal text-[#cdface] px-6 py-3 shadow-sm transition rounded-[13px]"
          style={{
            backgroundImage: "linear-gradient(180deg, #066, #003d3d)",
            boxShadow:
              "inset 0 10px 16px -10px #ffffff0f, 0 8px 8px #001f1f0f, 0 4px 4px #001f1f0f, 0 2px 2px #001f1f0f, 0 0 1px #001f1f52, inset 0 -2px 1px #001f1f3d, inset 0 1px 1px #cdface14",
          }}
        >
          Get a Free PF Audit
        </button>

        <button
          onClick={() => (window.location.href = "tel:+919980511980")}
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
          onClick={() => window.open("https://wa.me/919980511980", "_blank")}
          className="bg-[#c4f5db] cursor-pointer text-[16px] text-[#066] font-[500] px-6 py-3 rounded-[13px] transition"
          style={{
            backgroundImage: "linear-gradient(180deg, #eafce9, #cdface)",
            boxShadow:
              "0 4px 4px #001f1f0f,0 2px 2px #001f1f0f,0 0 1px #001f1f52,inset 0 1px 1px #cdface14",
          }}
        >
          Whatsapp Us
        </button>
      </div>

      {/* Card */}
     
    </section>
     <div className="my-16 relative p-1 rounded-3xl w-full max-w-5xl mx-auto">
        <div className="p-6 m-2 transition hover:shadow-lg rounded-[20px] shadow-[inset_0_10px_16px_-10px_#ffffff0f,0_8px_8px_#001f1f0f,0_4px_4px_#001f1f0f,0_2px_2px_#001f1f0f,0_0_1px_#001f1f52,inset_0_-2px_1px_#001f1f3d,inset_0_1px_1px_#cdface14]">
          <div className="grid grid-rows-1 text-left ">
            <img src="/images/EPF-bangalore.png" />
          </div>
        </div>

        {/* Bottom-left play icon */}
        {/* <div className="absolute bottom-4 left-4 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-emerald-50 transition">
          <Play className="w-5 h-5 text-emerald-600" />
        </div> */}
      </div>
    </>
  );
};