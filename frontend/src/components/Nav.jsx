import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const navRight = ["About", "Projects", "Services", "Blogs", "Contact"];

const Nav = () => {
  const navRef = useRef(null);
  const indicatorRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  const moveIndicator = (e) => {
    const item = e.currentTarget;
    const { offsetLeft, offsetWidth } = item;

    gsap.to(indicatorRef.current, {
      x: offsetLeft,
      width: offsetWidth,
      opacity: 1,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const hideIndicator = () => {
    gsap.to(indicatorRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50
                 flex items-center justify-between
                 px-6 py-4 font-[font1]
                 bg-transparent text-white"
    >
      {/* LOGO */}
      <div className="ml-5">
        <img
          src="https://framerusercontent.com/images/vcNmC26PGrasLFIzBNqdfWZpzQ.svg?scale-down-to=512"
          alt="logo"
          width={120}
          height={32}
        />
      </div>

      {/* NAV LINKS */}
      <div
        className="relative flex gap-6"
        onMouseLeave={hideIndicator}
      >
        {/* HOVER INDICATOR */}
        <span
          ref={indicatorRef}
          className="absolute top-1/2 -translate-y-1/2
                     h-9 rounded-full bg-white/15
                     backdrop-blur-md
                     opacity-0"
        />

        {navRight.map((item) => (
          <div
            key={item}
            onMouseEnter={moveIndicator}
            className="relative z-10 px-4 py-2 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
