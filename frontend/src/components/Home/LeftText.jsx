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
    }
  );
    gsap.fromTo("#para", {
      y: 20,
      opacity: 0,
        filter: "blur(8px)",
    }, {
      y: 0,
      opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        delay: 0.6,
        ease: "power3.out",
    });
}, []);

  return (
    <div>
      <div className="max-w-3xl flex flex-col mt-20">
        <h1
          ref={textRef}
          className="text-[32px] md:text-[65px] text-shadow-black leading-tight tracking-tighter font-[font1]"
        >
          <span className="word">Designs</span>{" "}
          <span className="word">That 
   </span>{" "}
          <span className="word">Speak</span>
          <br />
          <span className="word">Way</span>{" "}
          <span className="word">of</span>{" "}
          <span className="word">Living</span>
        </h1>

        <p className="mt-6 max-w-xl font-[font1]  text-[18px] font-bold" id="para">
          From concept to completion, we design interiors that feel personal, practical, and timeless—bringing your vision to life with expert craftsmanship.
        </p>
      </div>
    </div>
  );
};

export default LeftText;
