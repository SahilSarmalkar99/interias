import React, { useEffect, useRef, useState } from "react";
import { Reviews } from "../../data/Reviews";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
const DURATION = 4500;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const progressRef = useRef(null);
  const containerRef = useRef(null);

  const navigate = useNavigate();

  const reviews = Reviews;

  // 🔥 Review Progress Animation
  useEffect(() => {
    let start = null;
    let frame;

    const animateBar = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / DURATION, 1);

      if (progressRef.current) {
        progressRef.current.style.width = `${percent * 100}%`;
      }

      if (progress < DURATION) {
        frame = requestAnimationFrame(animateBar);
      } else {
        setAnimate(false);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % reviews.length);
          if (progressRef.current) progressRef.current.style.width = "0%";
          setAnimate(true);
          start = null;
          frame = requestAnimationFrame(animateBar);
        }, 400);
      }
    };

    frame = requestAnimationFrame(animateBar);
    return () => cancelAnimationFrame(frame);
  }, [index, reviews.length]);

  // 🔥 FIRST LOAD HERO ANIMATION
  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(".hero-word", {
        y: 80,
        opacity: 0,
        filter: "blur(12px)",
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      })
        .from(
          ".review-block",
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .fromTo(
          ".right-card",
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8",
        );
    },
    { scope: containerRef },
  );

  return (
  <section
  ref={containerRef}
  className="
    relative
    bg-[#E8E5D8]
    overflow-visible
    px-5 sm:px-8 md:px-16
    py-20 sm:py-24 md:py-28
  "
>

<div className="
  max-w-7xl 
  mx-auto 
  flex 
  flex-col 
  lg:flex-row 
  items-start 
  lg:items-end 
  justify-between 
  gap-16 lg:gap-20
">


        {/* LEFT SIDE */}
        <div className="
  flex 
  flex-col 
  justify-between 
  flex-1 
  max-w-xl
">

          {/* Heading */}
         <h1 className="
  font-semibold 
  text-[#18342F] 
  leading-[1] 
  tracking-tight 
  text-[clamp(36px,7vw,110px)]
  md:w-[700px]
">

            <span className="hero-word block">Designs That Speak Your</span>
            <span className="hero-word block italic font-normal">
              Way of Living
            </span>
          </h1>

          {/* Review Section */}
          <div className="
  review-block
  w-full
  max-w-md
  mt-10 md:mt-20
  min-h-[170px]
  flex
  flex-col
  justify-between
">

            {/* Stars */}
            <div
              className={`flex gap-2 text-[#E6A07B] text-base md:text-lg mb-4 transition-all duration-500 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>

            {/* Review Text */}
            <div
              className="
  relative
  min-h-[150px]
  md:min-h-[120px]
  overflow-hidden
"
            >
              <p
                className={`
  absolute w-full
  break-words
  text-sm md:text-base
  leading-relaxed
  transition-all duration-500
  ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
`}
              >
                {reviews[index].text}
                <br />
                <span className="font-medium">- {reviews[index].name}</span>
              </p>
            </div>

            {/* Progress Bars */}
            <div className="flex gap-3 mt-6 md:mt-8">
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className="relative w-8 md:w-10 h-[3px] bg-[#18342F]/25 rounded-full overflow-hidden"
                >
                  {i === index && (
                    <div
                      ref={progressRef}
                      className="absolute left-0 top-0 h-full bg-[#18342F]"
                      style={{ width: "0%" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="
  flex-1 
  flex 
  justify-start 
  lg:justify-end
">

          <div
            className="
              right-card 
  opacity-0 
  translate-y-16
    relative 
    bg-[#F1EFE6]/90 
    backdrop-blur-sm
    p-6 md:p-10 
    rounded-3xl 
    w-full max-w-md lg:max-w-[420px]
    border border-[#18342F]/10
    shadow-[0_20px_50px_rgba(0,0,0,0.08)]
    transition-all duration-500 ease-out
    hover:-translate-y-2
    hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]
  "
          >
            <p className="text-[#18342F]/80 text-base md:text-lg leading-relaxed mb-8">
              From concept to completion, we design interiors that feel
              personal, practical, and timeless — bringing your vision to life
              with expert craftsmanship.
            </p>

            {/* Combined Button Style */}
            <div className="flex items-center w-fit rounded-xl overflow-hidden shadow-md group">
              <button
              onClick={() => navigate("/projects")}
                className="
        bg-[#18342F] 
        text-white 
        px-8 py-4 
        text-base md:text-lg 
        transition-all duration-300
        group-hover:bg-[#142a24]
      "
              >
                Projects
              </button>

              <div
                className="
        bg-[#E6A07B] 
        px-8 py-4.5 
        flex items-center justify-center
        transition-all duration-300
        group-hover:translate-x-1
      "
              >
                <span className="transition-transform duration-300 group-hover:-rotate-12">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
