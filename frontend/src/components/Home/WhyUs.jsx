import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import img1 from "../../assets/whyUs/logo1.png";
import img2 from "../../assets/whyUs/logo2.png";
import img3 from "../../assets/whyUs/logo3.png";
import img4 from "../../assets/whyUs/logo4.png";
import img5 from "../../assets/whyUs/logo5.png";
import img6 from "../../assets/whyUs/logo6.png";
import img7 from "../../assets/whyUs/logo7.png";
import img8 from "../../assets/whyUs/logo8.png";
import useRevealAnimation from "../../hooks/useRevealAnimation";

const logos = [img1, img2, img3, img4, img5, img6, img7 ,img8];

const WhyUs = () => {
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  useRevealAnimation(sectionRef)

  useGSAP(() => {
    const track = trackRef.current;

    // Width of half track (since logos are duplicated)
    const totalWidth = track.scrollWidth / 2;

    gsap.set(track, { x: 0 });

    gsap.to(track, {
      x: -totalWidth,
      duration: 10,          
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-2 md:px-35 py-5 md:py-20 overflow-hidden">
      
      {/* HEADER */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-[200px_1fr_480px] mb-20">
        <div className="flex items-center gap-3 md:text-[18px] text-[24px] font-[font1]">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Why Choose Us</span>
        </div>

        <h2 className="text-[24px] md:text-[30px] ml-2 font-[font4] tracking-tight">
          Design guided by <br /> thought and intention.
        </h2>

        <p className="text-[18px] md:text-sm text-black/70 md:max-w-[320px] md:justify-self-end">
          We blend innovation, personal understanding, and craftsmanship.
        </p>
      </div>

      {/* MARQUEE */}
      <div ref={marqueeRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-24 w-max items-center"
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Client Logo"
              className="h-20 md:h-25  opacity-100 "
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
