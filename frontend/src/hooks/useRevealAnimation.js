import { useEffect } from "react";
import gsap from "gsap";

const useRevealAnimation = (ref, delay = 0) => {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    gsap.set(el, { y: 100, opacity: 0 });

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: delay,
              ease: "power3.out",
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, delay]);
};

export default useRevealAnimation;
