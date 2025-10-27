// components/Navbar.jsx
"use client";

import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function NavbarIndustry() {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        {/* Logo */}
        <Link href="/" title="Home">
          <img
            src="/images/EPFdesk (1).svg"
            alt="Logo"
            width={150}
            height={100}
          />
        </Link>

        {/* Center Navigation Links */}
        {/* <div className="flex gap-10 text-[1rem] font-medium text-gray-800">
          <Link href="/genai-bootcamp" className="hover:text-black transition-colors">
            GenAI Bootcamp
          </Link>
          <Link href="/data-bootcamp" className="hover:text-black transition-colors">
            Data Bootcamp
          </Link>
          <Link href="/b2b-courses" className="hover:text-black transition-colors">
            B2B Courses
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </div> */}

        {/* Apply Now Button */}
        {/* <div className="flex flex-col sm:flex-row items-center gap-3">
         
          <div className="hidden md:flex items-center gap-3">
          
            <a
              href="tel:+919945933333"
              className="group relative px-7 py-2 cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-[#e0f0ff] text-[#0073ff] shadow-lg transition sm:px-4"
              aria-label="Call"
            >
              <FaPhoneAlt className="size-4 sm:size-5 transition-transform sm:group-hover:scale-0" />
              <span className="hidden sm:inline transition-opacity sm:group-hover:opacity-0">
                Call
              </span>
              <span className="absolute hidden w-full sm:inline opacity-0 transition-opacity sm:group-hover:opacity-100">
                +919945933333
              </span>
            </a>

         
            <a
              href="https://wa.me/919945933333"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-7 py-2 cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-[#e9ffe8] text-[#25D366] shadow-lg transition sm:px-4"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="size-4 sm:size-5 transition-transform sm:group-hover:scale-0" />
              <span className="hidden sm:inline transition-opacity sm:group-hover:opacity-0">
                WhatsApp
              </span>
              <span className="absolute hidden w-full sm:inline opacity-0 transition-opacity sm:group-hover:opacity-100">
                +919945933333
              </span>
            </a>

          
            <a
              href="mailto:hello@epfdesk.com"
              className="group relative px-7 py-2 cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-[#f2f2f2] text-[#333] shadow-lg transition sm:px-4"
              aria-label="Email"
            >
              <FaEnvelope className="size-4 sm:size-5 transition-transform sm:group-hover:scale-0" />
              <span className="hidden sm:inline transition-opacity sm:group-hover:opacity-0">
                Email
              </span>
              <span className="absolute hidden w-full sm:inline opacity-0 transition-opacity sm:group-hover:opacity-100">
                hello@epfdesk.com
              </span>
            </a>
          </div>

        
          <div className="flex md:hidden items-center gap-3">
      
            <a
              href="tel:+919945933333"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e0f0ff] text-[#0073ff] hover:bg-[#0073ff] hover:text-white transition"
              aria-label="Call"
            >
              <FaPhoneAlt size={16} />
            </a>

        
            <a
              href="https://wa.me/919945933333"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e9ffe8] text-[#25D366] hover:bg-[#25D366] hover:text-white transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>

            <a
              href="mailto:hello@epfdesk.com"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f2f2f2] text-[#333] hover:bg-[#333] hover:text-white transition"
              aria-label="Email"
            >
              <FaEnvelope size={16} />
            </a>
          </div>
        </div> */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Desktop (animated buttons) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Call */}
            <a
              href="tel:+919945933333"
              className="group relative min-w-[140px] px-5 py-2 cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-[#e0f0ff] text-[#0073ff] shadow-lg transition-all duration-300"
              aria-label="Call"
            >
              <FaPhoneAlt className="size-4 sm:size-5 transition-transform group-hover:scale-0" />
              <span className="transition-opacity group-hover:opacity-0">
                Call Us
              </span>
              <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity">
                +919945933333
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919945933333"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative min-w-[150px] px-5 py-2 cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-[#e9ffe8] text-[#25D366] shadow-lg transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="size-4 sm:size-5 transition-transform group-hover:scale-0" />
              <span className="transition-opacity group-hover:opacity-0">
                WhatsApp Us
              </span>
              <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity">
                +919945933333
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@epfdesk.com"
              className="group relative min-w-[180px] px-5 py-2 cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-[#f2f2f2] text-[#333] shadow-lg transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="size-4 sm:size-5 transition-transform group-hover:scale-0" />
              <span className="transition-opacity group-hover:opacity-0">
                Email Us
              </span>
              <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity">
                hello@epfdesk.com
              </span>
            </a>
          </div>

          {/* Mobile (round icons only) */}
          <div className="flex md:hidden items-center gap-3">
            {/* Call */}
            <a
              href="tel:+919945933333"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e0f0ff] text-[#0073ff] hover:bg-[#0073ff] hover:text-white transition"
              aria-label="Call"
            >
              <FaPhoneAlt size={16} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919945933333"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e9ffe8] text-[#25D366] hover:bg-[#25D366] hover:text-white transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>

            {/* Email */}
            <a
              href="mailto:hello@epfdesk.com"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f2f2f2] text-[#333] hover:bg-[#333] hover:text-white transition"
              aria-label="Email"
            >
              <FaEnvelope size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
