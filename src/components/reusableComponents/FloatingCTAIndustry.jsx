"use client";

import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50">
      {/* Call */}
      <a
        href="tel:+919945933333"
        className="w-11 h-11 flex items-center justify-center rounded-full bg-[#e0f0ff] text-[#0073ff] hover:bg-[#0073ff] hover:text-white shadow-lg transition"
        aria-label="Call"
      >
        <FaPhoneAlt size={18} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919945933333"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 flex items-center justify-center rounded-full bg-[#e9ffe8] text-[#25D366] hover:bg-[#25D366] hover:text-white shadow-lg transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Email */}
      <a
        href="mailto:hello@epfdesk.com"
        className="w-11 h-11 flex items-center justify-center rounded-full bg-[#f2f2f2] text-[#333] hover:bg-[#333] hover:text-white shadow-lg transition"
        aria-label="Email"
      >
        <FaEnvelope size={18} />
      </a>
    </div>
  );
}
