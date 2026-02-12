import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useStaggerReveal from "../../hooks/useStaggerReveal";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 900,
    suffix: "+",
    title: "Homes transformed",
    desc:
      "From apartments to luxurious villas, each project is a unique story of style.",
  },
  {
    value: 1000,
    suffix: "+",
    title: "Unique Ideas",
    desc:
      "We design intelligent commercial environments that optimise workflow, enhance user experience, and reflect your brand’s identity through thoughtful aesthetics.",
  },
  {
    value: 2000,
    suffix: "+",
    title: "Satisfied Clients",
    desc:
      "Whether a homeowner or investor, our clients celebrate every transformation.",
  },
];

const ContentButton1 = ({isdisplayed = [true ,true ,true] , px=24 ,py=32 }) => {
  const sectionRef = useRef(null);
  useStaggerReveal(sectionRef)
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
      className={`w-full px-1 py-3 md:${px} md:${py} md:font-[font1] font-[font2]`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-24">
        
        {stats.map((item, i) => {
          
          if (!isdisplayed[i]) return null;

          return (
            <div key={i} className="md:space-y-4 reveal-item">
              {/* NUMBER */}
              <h3 className="text-[36px] md:text-[48px] font-semibold text-[#8A867B]">
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
              <p className="text-[14px] leading-relaxed text-black/70 max-w-[320px]">
                {item.desc}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
};
export default ContentButton1;

