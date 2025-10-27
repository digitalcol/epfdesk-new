// components/Footer.tsx
"use client"
import { FiArrowRight } from "react-icons/fi";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="relative px-8 py-12 md:px-16 md:py-20 overflow-hidden z-[1]">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-[10px] bg-[#3a2f2c]" />

      <div className="grid md:grid-cols-2 items-center gap-10 relative">
        {/* Left content */}
        <div>
          <h2 className="text-3xl sm:text-6xl font-bold text-[#3a2f2c] mb-4">
            Questions?
          </h2>
          <p className="text-xl sm:text-3xl font-semibold text-[#3a2f2c] max-w-md">
            Passionate about keeping industries safe and compliant? Join us in
            transforming how businesses manage regulations.
          </p>
        </div>

        {/* Right content */}
        <div className="flex flex-col justify-center items-center relative">
          {/* CTA */}
          <a
            href="mailto:hello@epfdesk.com"
            className="text-3xl sm:text-6xl font-bold text-[#3a2f2c] flex items-center gap-2 relative z-10"
          >
            Get in touch <FiArrowRight className="text-3xl sm:text-6xl" />
          </a>
          <span className="text-[20px] mt-2 font-semibold">hello@epfdesk.com</span>
        </div>
      </div>
      <div className="s__cta__shape"></div>
      {/* Bottom section */}
      <div className="border-t border-[#3a2f2c] mt-12 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-[#3a2f2c] gap-4">
        {/* Left Links */}
        <div className="flex items-center gap-4">
          {/* <a href="#" className="hover:opacity-70">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="#" className="hover:opacity-70">
            <FaYoutube className="text-xl" />
          </a> */}
          <a
            href="https://www.instagram.com/epfdesk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-600 transition"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/epfdesk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-sky-500 transition"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/108133988/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 transition"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@epfdesk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-700 transition"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href={`mailto:hello@epfdesk.com?subject=${encodeURIComponent(
              "Inquiry about Compliance Services"
            )}&body=${encodeURIComponent(
              "Hello EPFDesk,\n\n" +
                "I’d like to know more about your compliance services.\n\n" +
                "Company Name:\n" +
                "No. of Employees:\n" +
                "My Role:\n" +
                "Areas of interest:"
            )}`}
            className="text-gray-500 hover:text-blue-700 transition"
          >
            <IoMail className="w-6 h-6" />
          </a>
          <a
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
            className="text-gray-500 hover:text-green-700 transition cursor-pointer"
          >
            <IoLogoWhatsapp className="w-6 h-6" />
          </a>
        </div>

        {/* Right Text */}
        <div className="flex items-center gap-2">
          <span>2025 © Workforce Limited</span>
        </div>
      </div>
    </footer>
  );
}
