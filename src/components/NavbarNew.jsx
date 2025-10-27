// components/Navbar.jsx
"use client";

import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const NavbarNew = () => {
  const navLinks = [
    { href: "/genai-bootcamp", label: "GenAI Bootcamp" },
    { href: "/data-bootcamp", label: "Data Bootcamp" },
    { href: "/b2b-courses", label: "B2B Courses" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-black">EPFdesk</span>
            </Link>
          </div>

          {/* Menu links */}
          {/* <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-black font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div> */}

          {/* CTA Button */}
          <div className="hidden md:flex gap-4">
            <button
                     onClick={() => {
                       const phone = "919980511980";
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
                     className="group relative flex h-[50px] w-[180px] cursor-pointer items-center justify-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-4 text-black shadow-lg transition"
                   >
                     <IoLogoWhatsapp className="size-6 transition-transform group-hover:scale-0" />
                     <span className="transition-opacity group-hover:opacity-0">
                       WhatsApp
                     </span>
                     <span className="absolute opacity-0 transition-opacity group-hover:opacity-100">
                       +91 99805 11980
                     </span>
                   </button>
           
                   {/* Call Button */}
                   <button
                     onClick={() => (window.location.href = "tel:+919980511980")}
                     className="group relative flex h-[50px] w-[180px] cursor-pointer items-center justify-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-4 text-black shadow-lg transition"
                   >
                     <FaPhone
                       size={22}
                       className="transition-transform group-hover:scale-0"
                     />
                     <span className="transition-opacity group-hover:opacity-0">
                       Call Us
                     </span>
                     <span className="absolute opacity-0 transition-opacity group-hover:opacity-100">
                       +91 99805 11980
                     </span>
                   </button>
          </div>

          {/* Mobile menu placeholder (optional) */}
          <div className="md:hidden">
            {/* You can add a hamburger menu here for mobile */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;
