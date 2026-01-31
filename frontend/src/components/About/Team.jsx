import React from "react";

const teamData = [
  {
    name: "Isabelle Hart",
    role: "Founder & Principal Interior Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Marco Elridge",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    name: "Clara Nguyen",
    role: "Architectural Design Lead",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
  },
  {
    name: "Julien Deveraux",
    role: "Senior Spatial Planner & Stylist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
];

const Team = () => {
  return (
    <div>
      <section className="bg-white px-6 md:px-16 lg:px-24 py-10 font-[font1]">
        <div className="max-w-[1400px] mx-auto">
          {/* HEADER */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 md:mb-20">
          <div className="flex items-center gap-3 text-[24px] md:text-[20px]">
              <span className="w-2 h-2 rounded-full bg-[#9C937A]" />
              <span>Our Team</span>
            </div>

            {/* TITLE */}
            <h2 className="text-[22px] md:text-3xl md:mt-10  font-[font1] leading-tight tracking-tighter">
              Collaborative Spirit.
              <br />
              Collective Vision.
            </h2>

            {/* DESCRIPTION */}
           <p className="text-black/70 max-w-sm  md:mt-10 md:justify-self-end font-[font1] leading-tight tracking-tighter">
              Meet the passionate designers, strategists, and visionaries behind
              every project.
            </p>
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamData.map((member, index) => (
              <div key={index}>
                {/* IMAGE */}
                <div className="rounded-3xl overflow-hidden mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[360px] object-cover"
                  />
                </div>

                {/* NAME */}
                <h3 className="text-lg font-medium">{member.name}</h3>

                {/* ROLE */}
                <p className="text-black/60 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
