cat > src/components/whatsApp.jsx << 'ENDOFFILE'
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
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) || /@gmail\.com$/i.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required.";
    if (!formData.employees || formData.employees === "Number of employees") newErrors.employees = "Please select company size.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => formPayload.append(key, value));
    formPayload.append("access_key", "a9718221-b638-4ee6-bdc2-138fbe895a91");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formPayload });
      const data = await response.json();
      if (data.success) {
        toast.success("Form Submitted Successfully!");
        setFormData({ fullName: "", email: "", company: "", employees: "", message: "", findUs: "" });
        setErrors({});
        setIsOpen(false);
      } else { toast.error(data.message); }
    } catch (error) { toast.error("Network error. Please try again later."); }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) setIsOpen(false);
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) { document.body.classList.add("overflow-hidden"); }
    else { document.body.classList.remove("overflow-hidden"); }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      <div className="my-5 flex flex-row items-center justify-center gap-2">
        
          href="https://wa.me/919945933333?text=Hello%20EPFDesk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[50px] w-[180px] items-center justify-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-4 text-black shadow-lg"
        >
          <IoLogoWhatsapp className="size-6" />
          <span>WhatsApp</span>
        </a>
        
          href="tel:+919945933333"
          className="flex h-[50px] w-[180px] items-center justify-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-4 text-black shadow-lg"
        >
          <FaPhone size={22} />
          <span>Call</span>
        </a>
      </div>
    </>
  );
};

export default LinkButtons;
ENDOFFILE