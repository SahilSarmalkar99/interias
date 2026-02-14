import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "../../data/projectsData2";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-2 py-16 md:px-24 md:py-28 font-[font1]"
    >
      {/* HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 mb-12">
        <div className="flex items-center gap-3 text-[18px]">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Featured Projects</span>
        </div>

        <h2 className="text-[26px] md:text-[40px] leading-tight font-[font2]">
          Spaces That Inspire. <br />
          Projects That Last.
        </h2>

        <div className="max-w-[300px] text-sm text-black/70">
          <p>
            Discover our range of interior designs that turn ideas into stunning
            spaces!
          </p>
          <Link to="/projects">
            <div className="mt-4 flex items-center gap-2 cursor-pointer">
              <span>View Projects</span>
              <span className="text-lg">↗</span>
            </div>
          </Link>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(`/project2/${project.id}`)}
            className="bg-[#F3F2EF] rounded-3xl p-4 cursor-pointer hover:scale-105 transition duration-300"
          >
            <div className="rounded-2xl overflow-hidden mb-5 uppercase">
              <img
                src={project.image}
                alt={project.clientName}
                className="w-full h-auto md:h-[400px] object-cover hover:scale-105 transition duration-500 "
              />
            </div>

            <h3 className="text-lg font-medium mb-1 uppercase">
              {project.clientName}
            </h3>

            <p className="text-black/60 text-sm uppercase">
              {project.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
