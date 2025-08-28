"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import AnnouncementBar from "./AnnouncementBar";

const links = [
  { href: "/epfdesk", label: "EPFdesk" },
  { href: "/epfManagement", label: "EPFO" },
  { href: "/esic", label: "ESIC" },
  { href: "/posh", label: "POSH" },
  { href: "/lwf", label: "LWF" },
  { href: "/pt", label: "PT" },
  { href: "/aboutUs", label: "About Us" },
];

export default function Navbar({ banner }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
    <AnnouncementBar />
    <header
      className={`fixed z-50 w-full border-b border-gray-300 px-5 backdrop-blur-md ${
        scrolled ? "bg-white/80 shadow" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" title="Home">
          <img
            src="/images/EPFdesk (1).svg"
            alt="Logo"
            width={150}
            height={100}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[18px] font-semibold text-gray-800 hover:bg-gray-200 hover:text-gray-700 p-2 rounded-md"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border rounded-md hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-white p-4 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <img src="/images/EPFdesk (1).svg" alt="Logo" className="h-8" />
                <button onClick={() => setMobileMenuOpen(false)}>
                  <XMarkIcon className="h-6 w-6 text-gray-800" />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-4">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[1rem] text-gray-600 hover:text-blue-600 py-2"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
    </div>
  );
}
