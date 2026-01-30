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
      <div className="max-w-3xl">
        <h1
          ref={textRef}
          className="text-[65px] leading-tight font-semibold font-[font1]"
        >
          <span className="word">Where</span>{" "}
          <span className="word">Aesthetics</span>{" "}
          <span className="word">Meet</span>
          <br />
          <span className="word">Purposeful</span>{" "}
          <span className="word">Living</span>
        </h1>

        <p className="mt-6 max-w-xl font-[font5] text-white text-base" id="para">
          We create interiors that blend timeless elegance with modern
          functionality, reflecting your story and lifestyle. Let’s build
          something beautiful together.
        </p>
      </div>
    </div>
  );
};

export default LeftText;
