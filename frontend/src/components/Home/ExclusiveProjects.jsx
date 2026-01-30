import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const projects = [
  {
    title: "Azure Hallway",
    year: "2025",
    img: "https://framerusercontent.com/images/Fn4yH7RStairs.jpg",
  },
  {
    title: "Coastal Serenity",
    year: "2024",
    img: "https://framerusercontent.com/images/mHXkmW0Jfupllqyy8XPFTDe0k.jpg",
  },
  {
    title: "Modern Haven",
    year: "2023",
    img: "https://framerusercontent.com/images/saxCf2i4lxd1XN4NFQTzPi5sA.jpg",
  },
];

// duplicate for infinite illusion
const loopProjects = [...projects, ...projects];

const CARD_WIDTH = 520;

const ExclusiveProjects = () => {
  const trackRef = useRef(null);
  const indexRef = useRef(1); 

  useGSAP(() => {
    gsap.set(trackRef.current, {
      x: -CARD_WIDTH,
    });
  }, []);

  const slide = (dir) => {
    indexRef.current += dir;

    gsap.to(trackRef.current, {
      x: -indexRef.current * CARD_WIDTH,
      duration: 1.1,
      ease: "power3.out",
      onComplete: () => {
        // seamless reset
        if (indexRef.current >= projects.length + 1) {
          indexRef.current = 1;
          gsap.set(trackRef.current, {
            x: -CARD_WIDTH,
          });
        }
        if (indexRef.current <= 0) {
          indexRef.current = projects.length;
          gsap.set(trackRef.current, {
            x: -projects.length * CARD_WIDTH,
          });
        }
      },
    });
  };

  return (
    <section className="w-full text-black px-35 py-32 font-[font1] overflow-hidden">

      {/*  TOP ROW  */}
      <div className="grid grid-cols-[1fr_2fr_1fr] items-start mb-20 mx-4">

        {/* LEFT */}
        <div className="flex items-center gap-3 text-lg">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Exclusive Projects</span>
        </div>

        {/* CENTER */}
        <h2 className="text-[40px] leading-tight tracking-tight max-w-[520px] font-[font4]">
          Boldly Rooted in Vision. <br />
          Exclusive In Execution.
        </h2>

        {/* RIGHT */}
        <div className="flex flex-col items-end">
          <p className="text-sm text-black/70 max-w-[300px] mb-6 text-right">
            A visual library of interiors brought to life from
            blueprint to beauty.
          </p>

          <div className="flex gap-3">
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

      {/*  CAROUSEL  */}
      <div className="relative">

        <div
          ref={trackRef}
          className="flex gap-16 will-change-transform"
        >
          {loopProjects.map((p, i) => {
            const isCenter =
              i === indexRef.current ||
              i === indexRef.current + projects.length;

            return (
              <div
                key={i}
                className={`w-[480px] shrink-0 transition-opacity duration-500 ${
                  isCenter ? "opacity-100" : "opacity-30"
                }`}
              >
                <div className="bg-[#F4F2EE] rounded-2xl p-4">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="rounded-xl h-[360px] w-full object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <p className="text-sm text-black/50">{p.year}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default ExclusiveProjects;
