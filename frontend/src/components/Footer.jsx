const Footer = () => {
  return (
    <footer className="relative w-full px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-10 text-white font-[font1] overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2A2A2A] via-[#6A5A2A]/60 to-black z-0" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20 md:mb-24">

          {/* LEFT BIG LOGO */}
          <h1 className="
            text-[60px] sm:text-[30px] md:text-[40px] lg:text-[70px]
            leading-none font-semibold tracking-tight
          ">
            Interior Concept
          </h1>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-start lg:items-end gap-10 w-full lg:w-auto">

            {/* NAV */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <span>About</span>
              <span>Projects</span>
              <span>Services</span>
              <span>Blog</span>
              <span>Contact</span>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4">
              {["FB",  "IN"].map((item, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/80 text-black
                             flex items-center justify-center text-sm
                             hover:bg-white transition"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* LEGAL */}
            <div className="flex flex-wrap gap-6 text-sm text-white/80">
              <span>Terms & Condition</span>
              <span>Privacy Policy</span>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/15 mb-6" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-white/70">
          <span>©2025 All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
