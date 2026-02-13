import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projectsData.find(
    (p) => p.id === Number(id)
  );

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

        <h1 className="text-3xl md:text-4xl font-[font5] mb-2">
          {project.clientName}
        </h1>

        <p className="text-black/60 mb-10">
          {project.location}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                alt={`project-${index}`}
                className="w-full h-[400px] object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
