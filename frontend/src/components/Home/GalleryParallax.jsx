import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "../../data/Gallery";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const sectionRef = useRef(null);
  const colsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      // Create a master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=" + section.offsetHeight * 2, // how long it stays pinned
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      colsRef.current.forEach((col, i) => {
  const direction = i % 2 === 0 ? -1 : 1;

  const containerHeight =
    section.querySelector(".frame").offsetHeight;

  const colHeight = col.scrollHeight;
  const moveAmount = colHeight - containerHeight;

  // 🔥 If column moves downward, start from bottom
  if (direction === 1) {
    gsap.set(col, { y: -moveAmount });
  } else {
    gsap.set(col, { y: 0 });
  }

  tl.to(
    col,
    {
      y: direction === 1 ? 0 : -moveAmount,
      ease: "none",
    },
    0
  );
});

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const columns = 4;
  const itemsPerColumn = images.length / columns;

  const splitImages = [];

  for (let i = 0; i < columns; i++) {
    const start = i * itemsPerColumn;
    const end = start + itemsPerColumn;

    let columnImages = images.slice(start, end);

    // Reverse every second column
    if (i % 2 !== 0) {
      columnImages = columnImages.reverse();
    }

    splitImages.push(columnImages);
  }

  return (
    <section ref={sectionRef} className="py-32 bg-[#E8E5D8]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Rounded Frame */}
        <div className="frame relative h-[550px] overflow-hidden rounded-3xl bg-[#0f2f28] p-4 md:p-6 isolate">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-full">
            {splitImages.map((col, i) => (
              <div
                key={i}
                ref={(el) => (colsRef.current[i] = el)}
                className="flex flex-col gap-6"
              >
                {col.map((img, index) => (
                  <div key={index} className="rounded-xl overflow-hidden">
                    <img
                      src={img}
                      alt=""
                      className="w-full h-[220px] md:h-[280px] lg:h-[320px] object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <h2 className="text-white text-4xl md:text-6xl font-semibold text-center">
              Get inspired by our <br /> 1000+ project images
            </h2>

            <button className="group relative mt-8 bg-[#E6A07B] text-white px-8 py-4 rounded-xl flex items-center gap-3 pointer-events-auto transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
              <span className="relative z-10 font-medium tracking-wide">
                Projects
              </span>

              <span className="relative z-10 transition-all duration-300 ease-out group-hover:translate-x-1">
                →
              </span>

              {/* subtle hover glow */}
              <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
