import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 120,
    suffix: "+",
    title: "Homes transformed",
    desc:
      "From apartments to luxurious villas, each project is a unique story of style.",
  },
  {
    value: 75,
    suffix: "+",
    title: "Commercial spaces",
    desc:
      "Innovative designs that enhance functionality while maintaining aesthetic.",
  },
  {
    value: 2000,
    suffix: "+",
    title: "Satisfied Clients",
    desc:
      "Whether a homeowner or investor, our clients celebrate every transformation.",
  },
];

const ContentButton1 = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".stat-number",
        { innerText: 0 },
        {
          innerText: (i, el) => el.dataset.value,
          duration: 2,
          ease: "power3.out",
          snap: { innerText: 1 },
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full  px-24 py-32 font-[font1]"
    >
      <div className="grid grid-cols-3 gap-24">
        {stats.map((item, i) => (
          <div key={i} className="space-y-4">
            {/* NUMBER */}
            <h3 className="text-[48px] font-semibold text-[#8A867B]">
              <span
                className="stat-number"
                data-value={item.value}
              >
                0
              </span>
              {item.suffix}
            </h3>

            {/* TITLE */}
            <h4 className="text-[20px] font-medium">
              {item.title}
            </h4>

            {/* DESCRIPTION */}
            <p className="text-[15px] leading-relaxed text-black/70 max-w-[320px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentButton1;
