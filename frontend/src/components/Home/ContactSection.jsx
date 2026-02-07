import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="w-full px-6 md:px-35 py-10 md:py-10 text-black font-[font1]">
      {/*  HEADER  */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[140px_1fr_420px] items-start mb-24">
        {/* LEFT */}
        <div className="flex items-center gap-3 text-[20px] md:text-[18px]">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Contact</span>
        </div>

        {/* CENTER */}
        <h2 className="text-2xl md:text-3xl leading-tight tracking-tighter">
          Together, We Shape <br />
          the Extraordinary
        </h2>

        {/* RIGHT */}
        <p className="text-[18px] md:text-[16px] text-black/70 tracking-tighter leading-tight mt-2 max-w-[320px] md:justify-self-end">
          Interested in working with us? Let’s bring your space to life.
        </p>
      </div>

      {/* IMAGE + CARD */}
      <div className="relative w-full">
        {/* BACKGROUND IMAGE (TALLER) */}
        <div className="relative h-[520px] md:h-[620px] rounded-3xl overflow-hidden">
          <img
            src="https://framerusercontent.com/images/yMYHR5Y3im0sawhtRYJWdHcho.jpg?scale-down-to=2048"
            alt="Dream Space"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/20" />

          {/* TEXT (SMALLER) */}
          <h3
            className="
        absolute top-8 left-6
        text-white
        text-[20px] md:text-[28px]
        font-medium
        max-w-[65%]
      "
          >
            Step Into Your Dream Space
          </h3>
        </div>

        {/* FLOATING CARD */}
        <div
          className="
      relative
      z-20
      mx-4 md:mx-0
      -mt-50 md:mt-0
      md:absolute md:right-16 md:top-1/2 md:-translate-y-1/2
      w-full md:w-[460px]
      bg-white
      rounded-3xl
      shadow-[0_30px_80px_rgba(0,0,0,0.18)]
      p-5
    "
        >
          {/* TITLE (SMALLER) */}
          <h4 className="text-[16px] font-medium mb-3">
            Begin Your Design Journey
          </h4>

          {/* IMAGE (SMALLER HEIGHT) */}
          <div className="rounded-2xl overflow-hidden mb-4">
            <img
              src="https://framerusercontent.com/images/xcWtxpNUNWFT28hBW0rMM8L4qg.png?scale-down-to=1024"
              alt="Design Journey"
              className="w-full h-[160px] md:h-[200px] object-cover"
            />
          </div>

          {/* TEXT (SMALLER) */}
          <p className="text-[13px] text-black/70 mb-3 leading-relaxed">
            Let’s create something truly timeless together. Your ideal space
            begins right here with us.
          </p>

          {/* CTA (SMALLER) */}
          <Link to="/contact">
            <div className="flex items-center gap-2 text-sm font-medium cursor-pointer">
              <span>Contact Us</span>
              <span>↗</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
