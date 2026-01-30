import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    text:
      "Fantastic service! They turned my space into a stunning oasis that truly reflects my style. I'm so happy",
    name: "Kira Revonda",
    location: "Seoul",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text:
      "An exceptional experience from start to finish. The attention to detail was incredible.",
    name: "Daniel Moore",
    location: "New York",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text:
      "They understood our vision perfectly and delivered beyond expectations.",
    name: "Ariana Wells",
    location: "London",
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
          { opacity: 1, x: 0, duration: 0.45, ease: "power3.out" }
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
    <section className="w-full px-35 py-5 font-[font1] text-black tracking-tight leading-tight">

      {/* HEADER */}
      <div className="grid grid-cols-[1fr_2fr_1fr] mb-20">
        <div className="flex items-center gap-3 text-[18px]">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Testimonials</span>
        </div>

        <h2 className="text-[40px] leading-tight tracking-tight max-w-[520px]">
          Praise, Partnerships, & <br />
          Real Results.
        </h2>

        <p className="text-sm text-black/70 max-w-[320px] justify-self-end">
          Shaping visions into reality, we create experiences that resonate.
        </p>
      </div>

      {/* CARD */}
      <div className="bg-[#F4F2EE] rounded-3xl p-3 h-80">
        <div
          ref={cardRef}
          className="grid grid-cols-[320px_1fr] gap-5 items-center"
        >

          {/* IMAGE */}
          <div className="w-[250px] h-[270px] rounded-2xl overflow-hidden">
            <img
              src={t.img}
              alt={t.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="text-[22px] leading-relaxed mb-10 max-w-[720px]">
              {t.text}
            </p>

            <div className="font-medium">{t.name}</div>
            <div className="text-sm text-black/60 mb-10">{t.location}</div>

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
