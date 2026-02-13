import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../../data/projectsData";

const Exclusive = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.fromTo(
      ".about",
      { y: 50, opacity: 0, filter: "blur(2px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div>
      <section className="about bg-[#F5F1EA] px-2 md:px-16 lg:px-24 py-10 font-[font1]">
        <div className="max-w-[1400px] mx-auto">

          {/* HEADER */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 md:mb-20">
            <div className="flex items-center gap-3 text-[24px] md:text-[20px]">
              <span className="w-2 h-2 rounded-full bg-[#9C937A]" />
              <span>Exclusive Projects</span>
            </div>

            <h2 className="text-xl md:text-3xl font-[font5] leading-tight">
              Boldly Rooted in Vision.
              <br />
              Exclusive In Execution.
            </h2>

            <p className="text-black/70 max-w-sm md:justify-self-end">
              A visual library of interiors brought to life from blueprint to
              beauty.
            </p>
          </div>

          {/* PROJECT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projectsData.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                className="bg-[#F3F2EF] rounded-3xl p-4 cursor-pointer hover:scale-105 transition"
              >
                <div className="rounded-2xl overflow-hidden mb-5">
                  <img
                    src={project.image}
                    alt={project.clientName}
                    className="w-full h-[260px] object-cover"
                  />
                </div>

                <h3 className="text-lg font-medium mb-1">
                  {project.clientName}
                </h3>

                <p className="text-black/60 text-sm">
                  {project.location}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Exclusive;
