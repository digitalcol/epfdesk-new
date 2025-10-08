"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";


export default function FAQ({faqs}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-3 mb-8">
      <h1 className="text-center mb-8 font-extrabold text-5xl">FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="rounded-xl bg-[#fbf6ef] p-4 transition-all">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left cursor-pointer"
          >
            <span className="font-semibold text-lg text-gray-800">
              {faq.question}
            </span>
            {openIndex === index ? (
              <FiMinus className="text-teal-500 w-5 h-5" />
            ) : (
              <FiPlus className="text-teal-500 w-5 h-5" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
