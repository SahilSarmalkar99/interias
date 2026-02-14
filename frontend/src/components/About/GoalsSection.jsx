import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const GoalsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".goal-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className=" px-3 md:px-16 lg:px-24 py-10 font-[font5] md:font-[font1]"
    >
      {/* TOP */}
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* LEFT LABEL */}
          <div className="flex items-center gap-3 text-[22px] md:text-[20px]">
            <span className="w-2 h-2 rounded-full bg-[#C6BFB2]" />
            <span className="text-black font-[font1] md:font-[font4]">Our Goals</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              number: "001",
              title: "Our Goals",
              desc: "To design spaces that reflect individuality and elevate everyday living.",
            },
            {
              number: "002",
              title: "Our Vision",
              desc: "Creating timeless interiors with purpose, precision, and personality.",
            },
            {
              number: "003",
              title: "Our Mission",
              desc: "To redefine interior design through thoughtful, lasting experiences.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="goal-card relative overflow-hidden 
      bg-gradient-to-br from-[#e3ddd4] to-[#c7beb1]
      rounded-2xl md:rounded-3xl
      p-6 md:p-8
      shadow-md md:shadow-lg
      transition-all duration-500
      md:hover:-translate-y-3 md:hover:scale-[1.03]"
            >
              {/* Background Number */}
              <span
                className="
        absolute 
        top-4 right-4 
        text-5xl md:text-7xl 
        font-bold 
        text-black/10 
        pointer-events-none
      "
              >
                {card.number}
              </span>

              {/* Accent Line */}
              <div className="w-8 md:w-10 h-[2px] bg-black/40 mb-4 md:mb-6"></div>

              <h3 className="text-lg md:text-2xl font-medium mb-3 md:mb-4 tracking-tight">
                {card.title}
              </h3>

              <p className="text-black/70 text-sm md:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
