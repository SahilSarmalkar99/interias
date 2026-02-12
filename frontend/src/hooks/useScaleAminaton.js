import { useEffect } from "react";
import gsap from "gsap";

const useScaleAnimation = (ref, delay = 0) => {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    gsap.set(el, { scale: 0.8, opacity: 0, transformOrigin: "center center" });

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              delay: delay,
              ease: "power3.out",
              transformOrigin: "center center",
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, delay]);
};

export default useScaleAnimation;
