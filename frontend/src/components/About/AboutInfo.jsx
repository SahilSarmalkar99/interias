import React from "react";
import ContentButton1 from "../Home/ContentButton1";

const AboutInfo = () => {
  return (
    <section className="bg-white px-4 md:px-20 py-16 font-[font4]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT CONTENT */}
        <div className="mt-2 flex flex-col  gap-5 ">
          <h2 className="text-2xl md:text-4xl font-[font4] leading-tight tracking-tighter max-w-xl">
            Designing Spaces That Elevate Everyday Living
          </h2>

          <p className="text-black/70 max-w-xl leading-tight font-[font4]">
            <span className="font-bold text-black text-2xl mr-1">
              Interior Concept
            </span>
            is a leading interior design studio in Mira Road, focused on
            creating spaces that are visually refined, deeply personal, and
            highly functional. We believe thoughtful design enhances everyday
            living, and every project we undertake reflects the unique style,
            needs, and aspirations of the people who inhabit it.
          </p>

          <p className="text-black/70 max-w-xl leading-tight font-[font4]">
            From modern minimalism to timeless elegance, we offer curated design ideas and innovative solutions that balance creativity with practicality. More than just designing interiors, we guide homeowners and professionals through every decision—transforming spaces into inspiring environments that feel intentional, comfortable, and truly their own.
          </p>

          {/* STATS */}
          <div>
            <ContentButton1 isdisplayed={[true, false, true]} />
          </div>
        </div>

        {/* IMAGE */}
        <div className="grid grid-cols-2 gap-6">
          {/* Top */}
          <img
            src="https://framerusercontent.com/images/d2lyAqkJISrIytMDWz1e8RZS2s.jpg?scale-down-to=1024&width=1808&height=2400"
            alt="Interior design"
            className="rounded-2xl object-cover md:w-full  md:h-[220px]"
          />

          {/* right */}
          <img
            src="https://framerusercontent.com/images/mdwExRctPW7Z8fsbfsxx6FiHKQ.png?scale-down-to=1024&width=1600&height=2400"
            alt="Interior design"
            className="rounded-2xl object-cover md:w-full h-[370px] md:h-[460px] row-span-2"
          />

          {/* botom */}
          <img
            src="https://framerusercontent.com/images/DLSRiHDySPNCeXrXFjU9xcYh20s.png?scale-down-to=1024&width=1792&height=2400"
            alt="Interior design"
            className="rounded-2xl object-cover md:w-full  md:h-[220px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
