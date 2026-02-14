import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import img1 from "../../assets/logos/logo1.png"
import img2 from "../../assets/logos/logo2.png"
import img3 from "../../assets/logos/logo3.png"
import img4 from "../../assets/logos/logo4.png"
import img5 from "../../assets/logos/logo5.png"
import img6 from "../../assets/logos/logo6.png"
import img7 from "../../assets/logos/logo7.png"
import img8 from "../../assets/logos/logo8.png"
import img9 from "../../assets/logos/logo9.png"
import img10 from "../../assets/logos/logo10.png"
import img11 from "../../assets/logos/logo11.png"
import img12 from "../../assets/logos/logo12.png"
import img13 from "../../assets/logos/logo13.png"
import img14 from "../../assets/logos/logo14.png"
import img15 from "../../assets/logos/logo15.png"
import img16 from "../../assets/logos/logo16.png"
import img17 from "../../assets/logos/logo17.png"
import img18 from "../../assets/logos/logo18.png"
import img19 from "../../assets/logos/logo19.png"
import useRevealAnimation from "../../hooks/useRevealAnimation";

const logos = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19
];

const Clients = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  useRevealAnimation(sectionRef)

  useGSAP(() => {
    const track = trackRef.current;
    const width = track.scrollWidth / 2;

    gsap.to(track, {
      x: -width,
      duration: 30,          // slower = smoother
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % width}px`,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-1 py-10 md:py-32 md:px-24 overflow-hidden" >
      
      <h2 className="text-[28px] mb-10 md:mb-16">Our Clients</h2>

      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-24 w-max items-center"
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Client Logo"
              className="h-15 md:h-20 shrink-0"
              draggable={false}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Clients;