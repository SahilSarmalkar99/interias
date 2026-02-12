import React from "react";
import ContentButton1 from "../Home/ContentButton1";
import img1 from "../../assets/room/room1.jpeg";
import img2 from "../../assets/room/room7.jpeg";
import img3 from "../../assets/bedroom/bedroom5.jpeg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AboutInfo = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".info",
      { y: 50, opacity: 0, filter: "blur(2px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.8,
        stagger: 0.2,
        delay: 0.3,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section className="info bg-[#F5F1EA] px-4 md:px-20 py-16 font-[font4]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT CONTENT */}
        <div className="mt-2 flex flex-col  gap-5 ">
          <h2 className="text-2xl md:text-4xl font-[font4] leading-tight tracking-tighter max-w-xl">
            Designing Spaces That Elevate Everyday Living
          </h2>

          <p className="text-black/70 max-w-xl leading-tight font-[font4]">
            <span className="font-bold text-black text-2xl mr-1">
              Interior Concepts
            </span>
            is a leading interior design studio in Mira Road, focused on
            creating spaces that are visually refined, deeply personal, and
            highly functional. We believe thoughtful design enhances everyday
            living, and every project we undertake reflects the unique style,
            needs, and aspirations of the people who inhabit it.
          </p>

          <p className="text-black/70 max-w-xl leading-tight font-[font4]">
            From modern minimalism to timeless elegance, we offer curated design
            ideas and innovative solutions that balance creativity with
            practicality. More than just designing interiors, we guide
            homeowners and professionals through every decision—transforming
            spaces into inspiring environments that feel intentional,
            comfortable, and truly their own.
          </p>

          {/* STATS */}
          <div>
            <ContentButton1 isdisplayed={[true, false, true]} />
          </div>
        </div>

        {/* IMAGE */}
        {/* IMAGE GRID */}
        <div
          className="
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-4
    lg:gap-6
  "
        >
          {/* Top Left */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[16/9]">
            <img
              src={img1}
              alt="Interior design"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Tall Image */}
          <div className="relative overflow-hidden rounded-2xl aspect-[3/4] sm:row-span-2 lg:aspect-[3/4]">
            <img
              src={img2}
              alt="Interior design"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Left */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[16/9]">
            <img
              src={img3}
              alt="Interior design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
