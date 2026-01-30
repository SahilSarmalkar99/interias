import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const logos = [
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
  "/logos/logo5.svg",
  "/logos/logo6.svg",
];

const Clients = () => {
  const marqueeRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const totalWidth = marqueeRef.current.scrollWidth / 2;

      gsap.to(".logo-track", {
        x: -totalWidth,
        duration: 10,   
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-32 px-24 font-[font1] overflow-hidden text-black">
      
      {/* TITLE */}
      <h2 className="text-[28px] mb-16">Our Clients</h2>

      {/* MARQUEE */}
      <div ref={marqueeRef} className="relative overflow-hidden">
        <div className="logo-track flex gap-24 w-max">
          
          {/* Duplicate logos */}
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Client Logo"
              className="h-10 opacity-70 grayscale"
              draggable={false}
            />
          ))}

        </div>
      </div>

    </section>
  );
};

export default Clients;
