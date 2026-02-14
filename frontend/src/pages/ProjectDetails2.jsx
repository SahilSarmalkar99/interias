import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData2";

const ProjectDetails2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="bg-[#F5F1EA] min-h-screen px-6 md:px-20 py-16">
      <div className="max-w-[1300px] mx-auto">
        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-10 inline-flex items-center gap-2 px-5 py-2 
             bg-black text-white rounded-full 
             hover:bg-neutral-800 
             transition-all duration-300"
        >
          <span className="text-lg">←</span>
          <span className="text-sm uppercase tracking-wide">
            Back to Projects
          </span>
        </button>

        <h1 className="text-3xl md:text-4xl font-[font5] font-bold uppercase tracking-wide mb-2">
          {project.clientName}
        </h1>

        <p className="text-black font-semibold uppercase tracking-wider mb-10">
          {project.location}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`project-${index}`}
                className="w-full h-auto md:h-[400px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails2;
