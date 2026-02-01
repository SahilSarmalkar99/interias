import React from "react";

const Map = () => {
  return (
    <section className="bg-white">
      {/* MAP SECTION */}
      <div className="max-w-[1400px] mx-auto mt-5 px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-[26px] md:text-[30px] font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#9C937A]" />
            <span>Our Location</span>
          </div>
        </div>

        {/* RESPONSIVE MAP */}
        <div className="w-full h-[300px] md:h-[450px] mb-10 rounded-3xl overflow-hidden">
          <iframe
            title="Interior Concepts Location"
            src="https://www.google.com/maps?q=Interior%20Concepts%2C%20Office%20no%204%2C%20first%20floor%2C%20Ramdev%20Ritu%20Heights%2C%20Vinay%20Nagar%20Rd%2C%20Kashimira%2C%20Mira%20Road%20East%2C%20Thane%2C%20Maharashtra%20401107&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
