import React from "react";
import ContentButton1 from "../Home/ContentButton1";

const AboutInfo = () => {
  return (
    <section className="bg-white px-4 md:px-20 py-16 font-[font4]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT CONTENT */}
        <div className="mt-2 flex flex-col  gap-5 ">
          <h2 className="text-2xl md:text-4xl font-[font4] leading-tight tracking-tighter max-w-xl">
            Rooted in Clear Vision. Driven by Detail.
          </h2>

          <p className="text-black/70 max-w-xl leading-tight font-[font4]">
            Since day one, we’ve believed that spaces and people shape each
            other. What started as a small design studio has grown into a
            full-service interior design firm.
          </p>

          <p className="text-black/70 max-w-xl leading-tight font-[font4]">
            Our passion for creativity, functionality, and craftsmanship drives
            every project. Every project we undertake is crafted with precision,
            attention to detail, and a deep understanding of our clients’ needs.
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
