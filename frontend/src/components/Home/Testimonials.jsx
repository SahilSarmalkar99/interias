import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    text: "I did my 1bhk home interior from him. I am happy with my home interior.They made me part of every selection process and take in consideration my new add-ons.",
    name: "Lata Kalugade",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "Interior Concepts is a complete one stop solution for interior designing – providing end to end planning, designing and execution of all the works as a single window. They gave very good suggestions as per our requirement & budget and completed all the work very smoothly in the committed time. The team headed by Mr. Ajay & Ms. Shruti is excellent and the work done is of excellent quality & finishing.",
    name: "Bhagyashree Minocha",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "Overall satisfied with the quality of material used & the craftsmanship. His suggestions were helpful & well implemented.",
    name: "Prathamesh Mhatre",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "The work was done in a very professional manner. The finishing was good. Promised design and material was delivered. After sales support was also good.",
    name: "Divya Krishna",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "Interior Concepts has done many works at my home. Honest, budget friendly and awesome quality. Thanks for great work.",
    name: "Raj Saxena",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  const animate = (nextIndex) => {
    gsap.to(cardRef.current, {
      opacity: 0,
      x: -40,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setIndex(nextIndex);
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.45, ease: "power3.out" },
        );
      },
    });
  };

  const prev = () => {
    animate((index - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    animate((index + 1) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="w-full px-2 md:px-35 md:py-5 font-[font1] text-black tracking-tight leading-tight">
      {/* HEADER */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_2fr_1fr] mb-20">
        <div className="flex items-center gap-3 text-[22px] md:text-[18px]">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Testimonials</span>
        </div>

        <h2 className="text-[24px]  md:text-[40px] leading-tight tracking-tighter font-[font4] md:max-w-[520px]">
          Praise, Partnerships, & <br />
          Real Results.
        </h2>

        <p className="text-[18px] md:text-sm text-black/70 md:max-w-[320px] md:justify-self-end">
          Shaping visions into reality, we create experiences that resonate.
        </p>
      </div>

      {/* CARD */}
      <div className="bg-[#F4F2EE] rounded-3xl p-4 md:p-8 overflow-hidden">
        <div
          ref={cardRef}
          className="grid grid-cols-1 gap-6 items-start min-w-0"
        >
          {/* TEXT */}
          <div>
            <p className="text-[16px] md:text-[20px] leading-relaxed mb-4 md:mb-10 break-words">
              {t.text}
            </p>

            <div className="font-medium">{t.name}</div>
            <div className="text-sm text-black/60 mb-6 md:mb-10">
              {t.location}
            </div>

            {/* ARROWS */}
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
              >
                ←
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
