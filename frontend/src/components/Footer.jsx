const Footer = () => {
  return (
    <footer className="relative w-full px-24 pt-32 pb-10 text-white font-[font1] overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2A2A2A] via-[#6A5A2A]/60 to-black z-0" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/*  TOP  */}
        <div className="flex justify-between items-start mb-24">

          {/* LEFT BIG LOGO */}
          <h1 className="text-[160px] leading-none font-semibold tracking-tight">
            Intérias
          </h1>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-end gap-10">

            {/* NAV */}
            <div className="flex gap-8 text-sm">
              <span>About</span>
              <span>Projects</span>
              <span>Services</span>
              <span>Blog</span>
              <span>Contact</span>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4">
              {["IG", "FB", "X", "IN"].map((item, i) => (
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
            <div className="flex gap-6 text-sm text-white/80">
              <span>Terms & Condition</span>
              <span>Privacy Policy</span>
            </div>

          </div>
        </div>

        {/*  DIVIDER  */}
        <div className="w-full h-px bg-white/15 mb-6" />

        {/*  BOTTOM  */}
        <div className="flex justify-between items-center text-sm text-white/70">
          <span>©2025 All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
