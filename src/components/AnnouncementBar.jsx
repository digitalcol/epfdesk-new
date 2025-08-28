"use client";
import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="w-full bg-green-900 text-white py-2 px-4 flex justify-center items-center gap-2 text-sm sm:text-base">
      {/* Mobile text */}
      <span className="block sm:hidden text-[16px]">PF Issues? FREE Expert Help →</span>

      {/* Desktop text */}
      <span className="hidden sm:block text-[18px]">
        FREE EPF Help for Every Employee | PF Withdrawal Stuck? UAN Issues? Expert Support on WhatsApp →
      </span>

      <button
        onClick={() => {
          const phone = "919980511980";
          const text = encodeURIComponent(
            "Hello EPFDesk,\n\n" +
              "I need help with my PF.\n\n" +
              "My issue:\n" +
              "My UAN number:\n\n" +
              "Please guide me."
          );
          window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
        }}
        className="h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] flex items-center justify-center rounded-lg shadow-md hover:opacity-90 transition"
      >
        <IoLogoWhatsapp className="size-6 fill-green-500 cursor-pointer" />
      </button>
    </div>
  );
}
