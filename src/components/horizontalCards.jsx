import React from "react";

const HorizontalCards = ({ cardsData, link }) => {
  return (
    <div className="space-y-6">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`relative rounded-2xl h-auto md:h-auto lg:h-[440px] shadow-md p-6 flex flex-col lg:flex-row items-center gap-8 bg-gradient-to-br ${card.gradient}`}
        >
          {/* Animated BG bubbles */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute w-5 h-5 rounded-full opacity-20 bg-[#ff6b6b] top-[20%] left-[20%] animate-bounce"></div>
            <div className="absolute w-4 h-4 rounded-full opacity-20 bg-[#4ecdc4] bottom-[20%] right-[20%] animate-bounce delay-200"></div>
            <div className="absolute w-6 h-6 rounded-full opacity-20 bg-[#ffe66d] bottom-[30%] left-[30%] animate-bounce delay-300"></div>
          </div>

          {/* Icon bubble */}
          <div className="relative z-10 w-full lg:w-1/2 p-2 flex justify-center">
            <div className="relative">
              {card.bgs.map((bg, i) => (
                <div
                  key={i}
                  className={`absolute ${bg} rounded-full ${
                    i === 0
                      ? "w-36 h-36 top-0 right-0"
                      : "w-16 h-16 bottom-0 left-0"
                  } opacity-30`}
                />
              ))}
              <div className="z-10 flex h-52 w-52 items-center justify-center rounded-full bg-white text-[9rem] shadow-lg">
                {card.icon}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center z-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              {card.title}
            </h2>
            <p className="text-[1.3rem] font-semibold text-gray-700 mb-5">
              {card.subtitle}
            </p>
            <div className="w-full md:w-[60%]">
              <button
                style={{
                  backgroundColor: "#ccffe4",
                  backgroundImage: "linear-gradient(180deg, #e6f9ee, #c4f5db)",
                  color: "#007a7a",
                }}
                className="px-6 py-3 text-[1.2rem] font-semibold rounded-xl transition w-fit"
                onClick={() => link(card.link)}
              >
                Learn more about {card.title}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;
