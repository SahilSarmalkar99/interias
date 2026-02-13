import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/919372770662?text=Hello%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={22} />
        <span className="hidden sm:block font-medium">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
