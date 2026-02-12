import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const GoalsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
  () => {
    const section = sectionRef.current;

    gsap.from(section, {
      y: 80,
      opacity: 0,
      filter: "blur(4px)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 45%",   // 👈 triggers when section enters viewport
        toggleActions: "play none none none",
        once: true,
      },
    });
  },
  { scope: sectionRef }
);

  return (
    <section ref={sectionRef} className=" px-3 md:px-16 lg:px-24 py-10 font-[font5] md:font-[font1]">
      {/* TOP */}
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* LEFT LABEL */}
          <div className="flex items-center gap-3 text-[22px] md:text-[20px]">
            <span className="w-2 h-2 rounded-full bg-[#C6BFB2]" />
            <span className="text-black">Our Goals</span>
          </div>

          {/* CENTER TITLE */}
          <h2 className="text-xl md:text-3xl leading-tight tracking-tighter">
            Driven by purpose &<br />
            principles.
          </h2>

          {/* RIGHT TEXT */}
          <p className="text-black/70 max-w-sm md:justify-self-end tracking-tighter">
            Our mission is to deliver emotionally resonant and functionally
            brilliant spaces.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-[#C6BFB2]  rounded-3xl p-8">
            <span className="text-sm text-black/60">(001)</span>
            <h3 className="text-xl font-medium mt-4 mb-3">Our Goals</h3>
            <p className="text-black/70 text-sm leading-relaxed">
              To design spaces that reflect individuality and elevate everyday
              living.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#C6BFB2] rounded-3xl p-8">
            <span className="text-sm text-black/60">(002)</span>
            <h3 className="text-xl font-medium mt-4 mb-3">Our Vision</h3>
            <p className="text-black/70 text-sm leading-relaxed">
              Creating timeless interiors with purpose, precision, and
              personality.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#C6BFB2]  rounded-3xl p-8">
            <span className="text-sm text-black/60">(003)</span>
            <h3 className="text-xl font-medium mt-4 mb-3">Our mission</h3>
            <p className="text-black/70 text-sm leading-relaxed">
              To redefine interior design through thoughtful, lasting
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
