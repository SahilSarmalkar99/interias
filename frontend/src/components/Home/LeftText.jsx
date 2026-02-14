import React, { use, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LeftText = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".word",
      {
        y: 60,
        opacity: 0,
        filter: "blur(12px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        stagger: 0.2,
        delay: 0.6,
        ease: "power3.out",
      },
    );
    gsap.fromTo(
      "#para",
      {
        y: 20,
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        delay: 0.6,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <div className="max-w-4xl flex flex-col text-center -mt-25  md:mt-32">
      <h1
        ref={textRef}
        className="text-[40px] md:text-[76px] leading-[1.05] tracking-tight font-[font1]"
      >
        <span className="word block">Designs That</span>
        <span className="word block text-red-500">Speak Your</span>
        <span className="word block">Way of Living</span>
      </h1>

      <div></div>
      <p
        id="para"
        className="mt-8 max-w-xl text-[17px] md:text-[18px] leading-relaxed text-white/80 font-normal hidden"
      >
        From concept to completion, we design interiors that feel personal,
        practical, and timeless — bringing your vision to life with expert
        craftsmanship.
      </p>
    </div>
  );
};

export default LeftText;
