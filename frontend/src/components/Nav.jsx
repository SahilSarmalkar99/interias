import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const navRight = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

const Nav = () => {
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const topBar = useRef(null);
  const midBar = useRef(null);
  const botBar = useRef(null);

  const [open, setOpen] = useState(false);

  /* NAV ENTRANCE */
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  /* DESKTOP INDICATOR */
  const moveIndicator = (e) => {
    const item = e.currentTarget;
    gsap.to(indicatorRef.current, {
      x: item.offsetLeft,
      width: item.offsetWidth,
      opacity: 1,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const hideIndicator = () => {
    gsap.to(indicatorRef.current, { opacity: 0, duration: 0.25 });
  };

  /* HAMBURGER ANIMATION */
  const toggleMenu = () => {
    setOpen((prev) => !prev);

    if (!open) {
      gsap.to(topBar.current, { y: 8, rotate: 45, duration: 0.3 });
      gsap.to(midBar.current, { opacity: 0, duration: 0.2 });
      gsap.to(botBar.current, { y: -8, rotate: -45, duration: 0.3 });

      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(topBar.current, { y: 0, rotate: 0, duration: 0.3 });
      gsap.to(midBar.current, { opacity: 1, duration: 0.2 });
      gsap.to(botBar.current, { y: 0, rotate: 0, duration: 0.3 });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50
                   flex items-center justify-between
                   px-6 py-4 font-[font1]
                   text-white"
      >
        {/* LOGO */}
        <NavLink to="/">
          <img
            src="https://framerusercontent.com/images/vcNmC26PGrasLFIzBNqdfWZpzQ.svg"
            alt="logo"
            width={120}
          />
        </NavLink>

        {/* DESKTOP NAV */}
        <div
          className="relative hidden md:flex gap-6"
          onMouseLeave={hideIndicator}
        >
          <span
            ref={indicatorRef}
            className="absolute top-1/2 -translate-y-1/2
                       h-9 rounded-full bg-white/15
                       backdrop-blur-md opacity-0"
          />

          {navRight.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onMouseEnter={moveIndicator}
              className="relative z-10 px-4 py-2 cursor-pointer"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* HAMBURGER */}
        <div
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1 cursor-pointer"
        >
          <span ref={topBar} className="w-6 h-[2px] bg-white" />
          <span ref={midBar} className="w-6 h-[2px] bg-white" />
          <span ref={botBar} className="w-6 h-[2px] bg-white" />
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40
                     bg-black/40 backdrop-blur-xl
                     flex flex-col items-center justify-center
                     gap-8 text-white text-xl font-[font1]"
        >
          {navRight.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={toggleMenu}
              className="hover:opacity-70 transition"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Nav;
