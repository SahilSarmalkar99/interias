const ContactSection = () => {
  return (
    <section className="w-full px-35 py-32 text-black font-[font1]">

      {/*  HEADER  */}
      <div className="grid grid-cols-[140px_1fr_420px] items-start mb-24">

        {/* LEFT */}
        <div className="flex items-center gap-3 text-[18px]">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Contact</span>
        </div>

        {/* CENTER */}
        <h2 className="text-[40px] ml-10 leading-tight tracking-tighter max-w-[520px]">
          Together, We Shape <br />
          the Extraordinary
        </h2>

        {/* RIGHT */}
        <p className="text-[16px] text-black/70 tracking-tighter leading-tight mt-2 max-w-[320px] justify-self-end">
          Interested in working with us? Let’s bring your
          space to life.
        </p>
      </div>

      {/*  IMAGE + CARD  */}
      <div className="relative">

        {/* BACKGROUND IMAGE */}
        <div className="relative h-[520px] rounded-3xl overflow-hidden">
          <img
            src="https://framerusercontent.com/images/yMYHR5Y3im0sawhtRYJWdHcho.jpg?scale-down-to=2048&width=4096&height=4096"
            alt="Dream Space"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OPTIONAL DARK GRADIENT */}
          <div className="absolute inset-0 bg-black/20" />

          {/* BOTTOM LEFT TEXT */}
          <h3 className="absolute bottom-6 left-6 text-white text-[28px] font-medium z-10">
            Step Into Your Dream Space
          </h3>
        </div>

        {/* FLOATING CARD */}
        <div
          className="
            absolute right-16 top-1/2 -translate-y-1/2
            w-[520px] bg-white rounded-3xl
            shadow-[0_30px_80px_rgba(0,0,0,0.18)]
            p-6 z-20
          "
        >
          {/* CARD TITLE */}
          <h4 className="text-[18px] font-medium mb-4">
            Begin Your Design Journey
          </h4>

          {/* CARD IMAGE */}
          <div className="rounded-2xl overflow-hidden mb-5">
            <img
              src="https://framerusercontent.com/images/xcWtxpNUNWFT28hBW0rMM8L4qg.png?scale-down-to=1024&width=1200&height=686"
              alt="Design Journey"
              className="w-full h-[240px] object-cover"
            />
          </div>

          {/* CARD TEXT */}
          <p className="text-sm text-black/70 mb-4">
            Let’s create something truly timeless together.
            Your ideal space begins right here with us.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 font-medium cursor-pointer">
            <span>Contact Us</span>
            <span>↗</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
