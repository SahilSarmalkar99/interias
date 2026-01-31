import React from "react";

const projectsData = [
  {
    title: "Coastal Serenity",
    year: "2024",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    tags: ["Coastal Calm", "Nature"],
  },
  {
    title: "Azure Hallway",
    year: "2025",
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
    tags: ["Oceanic", "Natural Light"],
  },
  {
    title: "Urban Tranquility",
    year: "2024",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    tags: ["Minimalism", "Natural"],
  },
];

const Exclusive = () => {
  return (
    <div>
      <section className="bg-white px-2 md:px-16 lg:px-24 py-10 font-[font1]">
        <div className="max-w-[1400px] mx-auto">
          {/* HEADER */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 md:mb-20">
            <div className="flex items-center gap-3 text-[24px] md:text-[20px]">
              <span className="w-2 h-2 rounded-full bg-[#9C937A]" />
              <span>Exclusive Projects</span>
            </div>

            {/* TITLE */}
            <h2 className="text-xl md:text-3xl  font-[font5] leading-tight">
              Boldly Rooted in Vision.
              <br />
              Exclusive In Execution.
            </h2>

            {/* DESCRIPTION */}
            <p className="text-black/70 max-w-sm md:justify-self-end">
              A visual library of interiors brought to life from blueprint to
              beauty.
            </p>
          </div>

          {/* PROJECT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projectsData.map((project, index) => (
              <div key={index} className="bg-[#F3F2EF] rounded-3xl p-4">
                {/* IMAGE */}
                <div className="rounded-2xl overflow-hidden mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[260px] object-cover"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-medium mb-1">{project.title}</h3>

                {/* YEAR */}
                <p className="text-black/60 text-sm mb-4">{project.year}</p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full
                           border border-black/20
                           text-black/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exclusive;
