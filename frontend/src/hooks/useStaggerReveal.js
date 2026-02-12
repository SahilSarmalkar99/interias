import { useEffect } from "react";
import gsap from "gsap";

const useStaggerReveal = (
  containerRef,
  {
    childClass = ".reveal-item",
    y = 60,
    duration = 1,
    stagger = 0.4,
    start = "top 80%",
  } = {}
) => {
  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const children = container.querySelectorAll(childClass);
    if (!children || children.length === 0) return;

    gsap.set(children, { y: y, opacity: 0 });

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(children, {
              y: 0,
              opacity: 1,
              duration: duration,
              stagger: stagger,
              ease: "power3.out",
            });
            observer.unobserve(container);
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(container);
    return () => obs.disconnect();
  }, [containerRef, childClass, y, duration, stagger]);
};

export default useStaggerReveal;
