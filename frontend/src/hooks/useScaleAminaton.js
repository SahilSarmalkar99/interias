import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScaleAnimation = (ref, delay = 0) => {
  useGSAP(
    () => {
      gsap.from(ref.current, {
        scale: 0.8,      
        opacity: 0,
        duration: 1.2,
        delay: delay,
        ease: "power3.out",
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref }
  );
};

export default useScaleAnimation;
