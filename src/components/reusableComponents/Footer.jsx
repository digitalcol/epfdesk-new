// components/Footer.tsx
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

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
          Passionate about keeping industries safe and compliant? Join us in transforming how businesses manage regulations.
          </p>
        </div>

        {/* Right content */}
        <div className="flex justify-center items-center relative">
         

          {/* CTA */}
          <a
            href="mailto:hello@epfdesk.com"
            className="text-3xl sm:text-6xl font-bold text-[#3a2f2c] flex items-center gap-2 relative z-10"
          >
            Get in touch <FiArrowRight className="text-3xl sm:text-6xl" />
          </a>
        </div>
      
      </div>
  <div className="s__cta__shape"></div>
      {/* Bottom section */}
      <div className="border-t border-[#3a2f2c] mt-12 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-[#3a2f2c] gap-4">
        {/* Left Links */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:opacity-70">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="#" className="hover:opacity-70">
            <FaYoutube className="text-xl" />
          </a>
          <span className="w-1 h-1 bg-gray-400 rounded-full" />
          <a href="#" className="hover:underline">
            COOKIE POLICY
          </a>
          <a href="#" className="hover:underline">
            PRIVACY POLICY
          </a>
        </div>

        {/* Right Text */}
        <div className="flex items-center gap-2">
          <span>2025 © BY KÅD NOD AB</span>
          <span className="font-semibold">wrk.</span>
        </div>
      </div>
    </footer>
  );
}
