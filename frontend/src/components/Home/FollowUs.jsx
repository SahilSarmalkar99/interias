import { useEffect, useRef } from "react";
import gsap from "gsap";

const socials = [
  "https://framerusercontent.com/images/1.jpg",
  "https://framerusercontent.com/images/2.jpg",
  "https://framerusercontent.com/images/3.jpg",
  "https://framerusercontent.com/images/4.jpg",
  "https://framerusercontent.com/images/5.jpg",
  "https://framerusercontent.com/images/6.jpg",
];


const FollowUs = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: 50,
        duration: 30,
        ease: "linear",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full px-35 py-20 text-black font-[font1] overflow-hidden">

      {/* HEADER */}
      <div className="grid grid-cols-[140px_1fr_480px] mb-20">
        <div className="flex items-center gap-3 text-sm">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Follow Us</span>
        </div>

        <h2 className="text-[30px] mt-4.5 ml-10 leading-tight tracking-tight max-w-[520px]">
          Creative Moments <br /> Shared With the World.
        </h2>

        <div className="text-sm mt-4 text-black/70 max-w-[320px] justify-self-end">
          Discover our process, projects and creativity
          on your favorite platforms.
        </div>
      </div>

      {/* MARQUEE */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-8 w-max"
        >
          {/* DUPLICATE CONTENT */}
          {[...socials, ...socials].map((img, i) => (
            <div
              key={i}
              className="w-[260px] h-[260px] shrink-0 rounded-2xl overflow-hidden"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover
                           transition-transform duration-700
                           hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default FollowUs;
