import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import img1 from "../../assets/kitchen/kitchen4.jpeg";
import img2 from "../../assets/room/room7.jpeg";
import img3 from "../../assets/room/room3.jpeg";

const projects = [
  {
    title: "Minimalist Modular Kitchen with Neutral Elegance",
    year: "2025",
    img: img1,
  },
  {
    title: "Modern Living Room with Soft Blue Accents",
    year: "2024",
    img: img2,
  },
  {
    title: "Serene Luxury Living Room with Spiritual Accent",
    year: "2023",
    img: img3,
  },
];

// duplicate for infinite loop illusion
const loopProjects = [...projects, ...projects, ...projects];

const ExclusiveProjects = () => {
  const trackRef = useRef(null);
  const cardRef = useRef(null);

  const startIndex = projects.length; // middle copy
  const indexRef = useRef(startIndex);
  const cardWidthRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(startIndex);

  // calculate card width dynamically
  useLayoutEffect(() => {
    if (cardRef.current) {
      cardWidthRef.current =
        cardRef.current.offsetWidth +
        parseInt(getComputedStyle(cardRef.current).marginRight || 0);
    }
  }, []);

  useGSAP(() => {
    gsap.set(trackRef.current, {
      x: -startIndex * cardWidthRef.current,
    });
  }, []);

  const slide = (dir) => {
    indexRef.current += dir;
    setActiveIndex(indexRef.current);

    gsap.to(trackRef.current, {
      x: -indexRef.current * cardWidthRef.current,
      duration: 1,
      ease: "power3.out",
      onComplete: () => {
        const total = projects.length;

        // silent reposition ONLY for GSAP, NOT for state
        if (indexRef.current >= total * 2) {
          indexRef.current -= total;
          gsap.set(trackRef.current, {
            x: -indexRef.current * cardWidthRef.current,
          });
        }

        if (indexRef.current < total) {
          indexRef.current += total;
          gsap.set(trackRef.current, {
            x: -indexRef.current * cardWidthRef.current,
          });
        }
      },
    });
  };

  return (
    <section className="w-full overflow-hidden px-4 md:px-32 py-20 font-[font1]">
      {/* TOP SECTION */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-[1fr_2fr_1fr]
          gap-6 md:gap-0
          items-start
          mb-10
        "
      >
        <div className="flex items-center gap-3 text-[20px] md:text-[18px]">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span className="text-lg">Exclusive Projects</span>
        </div>

        <h2 className="text-[24px] md:text-[40px] leading-tight tracking-tight font-[font2] md:max-w-[520px]">
          Boldly Rooted in Vision. <br />
          Exclusive in Execution.
        </h2>

        <div className="flex flex-col items-start lg:items-end max-w-[320px] text-sm text-black/70">
          <p>
            A visual library of interiors brought to life from blueprint to
            beauty.
          </p>

          <div className="flex mt-5 gap-3">
            <button
              onClick={() => slide(-1)}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={() => slide(1)}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative">
        <div ref={trackRef} className="flex gap-8 will-change-transform">
          {loopProjects.map((p, i) => {
            const project = projects[i % projects.length];
            const isCenter = i === activeIndex;

            return (
              <div
                key={i}
                ref={i === 0 ? cardRef : null}
                className={`shrink-0 transition-opacity duration-500
                 w-[260px] sm:w-[320px] md:w-[420px]
                 aspect-square
                 ${isCenter ? "opacity-100" : "opacity-30"}
                `}
              >
                <div className="bg-[#F4F2EE] rounded-2xl p-4 w-full h-full flex flex-col">
                  <div className="flex-1 overflow-hidden rounded-xl">
                    <img
                      src={project.img}
                      className="w-full h-full object-cover"
                      alt={project.title}
                    />
                  </div>

                  <h3 className="mt-3 text-base font-medium">
                    {project.title}
                  </h3>
                </div>

                {/* <div className="mt-4">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <p className="text-sm opacity-50">{p.year}</p>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveProjects;
