import React from "react";
import "./Hero.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Card = () => {
  useGSAP(() => {
    gsap.from("#card", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.8,
    });
  });

  return (
    <div>
      <div className="ml-auto -mb-16" id="card">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl  p-3 w-70 mb-10 border border-white/20">
          <img
            src="https://framerusercontent.com/images/k0CNoexHMcgDbzHXAkPIOGyk.png?scale-down-to=1024&width=1200&height=904"
            alt="Project"
            className="rounded-xl"
          />
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-[font4]">Azure Hallway</span>
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
