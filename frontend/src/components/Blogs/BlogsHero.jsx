import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const BlogsHero = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      imgRef.current,
      { scale: 1.1, filter: "grayscale(100%) brightness(0.9)" },
      {
        scale: 1,
        filter: "grayscale(0%) brightness(1)",
        duration: 3,
        ease: "power3.out",
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".about",
      { y: 50, opacity: 0, filter: "blur(12px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.8,
        stagger: 0.2,
        delay: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="relative w-full h-[55vh] font-[font1] overflow-hidden">
      {/* IMAGE */}
      <img
        ref={imgRef}
        src="https://framerusercontent.com/images/fBiZufr3F4JS49s96uG1KELvsQM.png?width=1200&height=800"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end p-5">
        <div className="max-w-[1200px] w-full flex flex-col md:flex-row md:justify-between gap-5 ">

          {/* LEFT */}
          <h1 className="about text-white text-[28px] md:text-[60px] font-semibold leading-none">
            Projects
          </h1>

          {/* RIGHT */}
          <p className="about max-w-md text-white/80 text-base leading-tight font-[font3] ">
            From a small beginning to a bold vision, we design spaces that shape lives.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
