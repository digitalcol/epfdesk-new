"use client";

import Image from "next/image";
import React from "react";
import SliderCards from "@/components/SliderCards";

const PerformanceCard = () => {
  return (
    <div
      className="p-[70px] bg-transparent rounded-[3.2rem]"
      style={{ backgroundImage: "linear-gradient(180deg,#f7f6f2,#fff0)" }}
    >
      <section className="flex items-center justify-center gap-[40px] ">
        {/* <div className="w-full md:max-w-3xl rounded-[20px] p-4 bg-white shadow-[inset_0_10px_16px_-10px_#ffffff0f,0_8px_8px_#001f1f0f,0_4px_4px_#001f1f0f,0_2px_2px_#001f1f0f,0_0_1px_#001f1f52,inset_0_-2px_1px_#001f1f3d,inset_0_1px_1px_#cdface14]">
       <div className="bg-[#cdface] rounded-[20px] p-8 ">
         <h1 className="text-[2.6rem] text-center font-bold mb-6 text-[#001f1f]">
          EPF Management
        </h1>
      
          <p className="text-[1.2rem] text-[#001f1f] leading-[1.3]">
            Your PF compliance worries end here. EPFdesk has protected 50+
            Bangalore enterprises from EPF penalties and compliance chaos with
            zero defaults — and we're ready to do the same for you. From
            Peenya's factories to Whitefield's tech corridors, Electronic City,
            Koramangala, and the CBD, businesses trust us to handle what keeps
            HR teams awake: employee UAN linking that never lags, exit marking
            that meets every deadline, monthly ECRs filed flawlessly, inspection
            notices resolved without penalties, and contractor PF obligations
            that don't become your nightmare. Our difference? We don't just tell
            you what to do, we log into your portal and do it for you. Whether
            you're a startup activating EPFO for the first time, a manufacturer
            drowning in contractor documentation, or an IT company fielding
            employee PF questions, our Bangalore team transforms EPF from your
            constant worry into your competitive advantage. Sleep better
            tonight. Your EPF compliance is now our responsibility.
          </p>
       </div>
      
      </div> */}
        <div className="max-w-3xl mx-auto bg-white rounded-[20px] shadow-[inset_0_10px_16px_-10px_#ffffff0f,0_8px_8px_#001f1f0f,0_4px_4px_#001f1f0f,0_2px_2px_#001f1f0f,0_0_1px_#001f1f52,inset_0_-2px_1px_#001f1f3d,inset_0_1px_1px_#cdface14] p-6 flex flex-col md:flex-col items-stretch gap-6 transition hover:shadow-lg">
          <div className="rounded-[12px] flex-1 flex items-center justify-center">
            {/* <img
            src="/images/EPF-bangalore.png" 
            alt="Performance Review"
            className="rounded-md object-contain w-full h-auto"
          /> */}
            <div className="bg-[#cdface] rounded-[20px] p-8">
              <p className="text-[1.2rem] text-[#001f1f] leading-[1.3]">
                Your PF compliance worries end here. EPFdesk has protected 50+
                Bangalore enterprises from EPF penalties and compliance chaos
                with zero defaults — and we're ready to do the same for you.
                From Peenya's factories to Whitefield's tech corridors,
                Electronic City, Koramangala, and the CBD, businesses trust us
                to handle what keeps HR teams awake: employee UAN linking that
                never lags, exit marking that meets every deadline, monthly ECRs
                filed flawlessly, inspection notices resolved without penalties,
                and contractor PF obligations that don't become your nightmare.
                Our difference? We don't just tell you what to do, we log into
                your portal and do it for you. Whether you're a startup
                activating EPFO for the first time, a manufacturer drowning in
                contractor documentation, or an IT company fielding employee PF
                questions, our Bangalore team transforms EPF from your constant
                worry into your competitive advantage. Sleep better tonight.
                Your EPF compliance is now our responsibility.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between py-4 relative">
            <div>
              <h2 className="text-[1.6rem] font-bold text-[#001f1f] leading-[1.1]">
                EPF Management
              </h2>
            </div>

            <div className="flex items-center relative">
              <div className="absolute left-[8px] top-1/2 transform -translate-y-1/2 w-[2px] h-[60%] border-l-[2px] border-dashed border-[color-mix(in_srgb,_#001f1f_8%,_transparent)]"></div>

              <div className="ml-6">
                <p className="text-[#6a7878] text-[1rem] leading-[1.3]">
                  End to End EPF compliance Management in Bangalore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SliderCards />
    </div>
  );
};

export default PerformanceCard;
