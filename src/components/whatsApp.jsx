"use client";
import { useEffect, useRef, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

import Modal from "./modal";
import { toast } from "react-hot-toast";

const LinkButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    employees: "",
    message: "",
    findUs: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) ||
      /@gmail\.com$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required.";
    }

    if (!formData.employees || formData.employees === "Number of employees") {
      newErrors.employees = "Please select company size.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      formPayload.append(key, value)
    );
    formPayload.append("access_key", "a9718221-b638-4ee6-bdc2-138fbe895a91");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully!");
        setFormData({
          fullName: "",
          email: "",
          company: "",
          employees: "",
          message: "",
          findUs: "",
        });
        setErrors({});
        setIsOpen(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <div className="my-5 flex flex-row lg:items-center justify-center gap-2 md:flex-row">
        {/* <button
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
          className="flex h-[50px] w-[155px] cursor-pointer items-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-4 text-black shadow-lg transition hover:bg-[rgb(209,244,112)]"
        >
          <IoLogoWhatsapp className="size-6" /> WhatsApp
        </button>
        <button
          onClick={() => (window.location.href = "tel:+919980511980")}
          className="flex h-[50px] w-[155px] cursor-pointer items-center justify-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-3 text-black shadow-lg transition hover:bg-[rgb(209,244,112)]"
        >
          <FaPhone size={22} /> Call Us
        </button> */}
        <button
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
          className="group relative flex h-[50px] w-[180px] cursor-pointer items-center justify-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-4 text-black shadow-lg transition"
        >
          <IoLogoWhatsapp className="size-6 transition-transform group-hover:scale-0" />
          <span className="transition-opacity group-hover:opacity-0">
            WhatsApp
          </span>
          <span className="absolute opacity-0 transition-opacity group-hover:opacity-100">
          +919945933333
          </span>
        </button>

        {/* Call Button */}
        <button
          onClick={() => (window.location.href = "tel:+919945933333")}
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
            +919945933333
          </span>
        </button>
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <form className="space-y-6 py-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 text-left block text-sm font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="First and last name"
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label className="mb-1 text-left block text-sm font-medium">
                  Work email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="mb-1 text-left block text-sm font-medium">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                />
                {errors.company && (
                  <p className="text-sm text-red-600 mt-1">{errors.company}</p>
                )}
              </div>
              <div>
                <label className="mb-1 text-left block text-sm font-medium">
                  Company size
                </label>
                <select
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                >
                  <option>Number of employees</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>500+</option>
                </select>
                {errors.employees && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.employees}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="mb-1 text-left block text-sm font-medium">
                Message <span className="text-gray-500">(optional)</span>
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, needs, and timeline."
                className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
              ></textarea>
            </div>

            <div>
              <label className="mb-1 text-left block text-sm font-medium">
                Where did you find us?{" "}
                <span className="text-gray-500">(optional)</span>
              </label>
              <input
                type="text"
                name="findUs"
                value={formData.findUs}
                onChange={handleChange}
                placeholder="How did you hear about us?"
                className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded cursor-pointer bg-black py-2 text-sm font-medium text-white hover:bg-gray-900"
            >
              Contact sales
            </button>

            <p className="mt-2 text-xs text-gray-500">
              By submitting this form, you confirm that you have read and
              understood Workforce&apos;s {""}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              . This site is protected by {""}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </form>
        </Modal>
      )}
    </>
  );
};

export default LinkButtons;
