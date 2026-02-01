import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const logos = [
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
  "/logos/logo5.svg",
  "/logos/logo6.svg",
];
const WhyUs = () => {
  const marqueeRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const totalWidth = marqueeRef.current.scrollWidth / 2;

      gsap.to(".logo-track", {
        x: -totalWidth,
        duration: 10,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full px-2 md:px-35 py-5 md:py-20 text-black font-[font1] overflow-hidden">
      {/* HEADER */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-[200px_1fr_480px] mb-20">
        <div className="flex items-center gap-3 text-[20px] md:text-[18px]">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Why Choose Us</span>
        </div>

        <h2 className="text-[24px] md:text-[30px] md:mt-4.5 ml-2 md:ml-50 leading-tight font-[font4] tracking-tighter md:max-w-[520px]">
          Design guided by <br /> thought and intention.
        </h2>

        <div className="text-[16px] md:text-sm md:mt-4 leading-tight tracking-tight text-black/70 max-w-[320px] justify-self-end">
          We blend innovation, personal understanding, and craftsmanship to
          create spaces that truly resonate.
        </div>
      </div>

      {/* MARQUEE */}
      <div ref={marqueeRef} className="relative overflow-hidden">
        <div className="logo-track flex gap-24 w-max">
          {/* Duplicate logos */}
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Client Logo"
              className="h-10 opacity-70 grayscale"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
