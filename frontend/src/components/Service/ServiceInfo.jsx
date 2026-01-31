import React from "react";
import ContentButton1 from "../Home/ContentButton1";

const servicesData = [
  {
    step: "001",
    title: "Residential Design",
    description:
      "Complete home interiors that reflect your style — functional, beautiful, and deeply personal.",
    stat: "90+",
    statLabel: "Transformed Spaces",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    step: "002",
    title: "Commercial Interiors",
    description:
      "Designing inspiring workspaces that balance productivity, brand identity, and comfort.",
    stat: "40+",
    statLabel: "Workspaces Designed",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  },
  {
    step: "003",
    title: "Hospitality Design",
    description:
      "Immersive hospitality spaces crafted to elevate guest experience and storytelling.",
    stat: "25+",
    statLabel: "Hospitality Projects",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    step: "004",
    title: "Furniture & Styling",
    description:
      "Custom furniture and curated styling that completes each space with intention.",
    stat: "120+",
    statLabel: "Custom Pieces",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
  },
  {
    step: "005",
    title: "Renovation & Remodeling",
    description:
      "Thoughtful renovations that breathe new life into existing spaces.",
    stat: "60+",
    statLabel: "Renovations",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11",
  },
];

const ServiceInfo = () => {
  return (
    <section className="bg-white px-4 md:px-20 py-10 font-[font4]">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 md:mb-20">
          <div className="flex items-center gap-3 text-[24px] md:text-[20px]">
            <span className="w-2 h-2 rounded-full bg-[#9C937A]" />
            <span>Services</span>
          </div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl font-[font4] leading-tight">
            Personalized Care.
            <br />
            Inspired Spaces.
          </h2>

          {/* DESCRIPTION */}
          <p className="text-black/70 max-w-sm md:justify-self-end">
            Discover our range of interior designs that turn ideas into stunning
            spaces!
          </p>
        </div>

        {/* SERVICES */}
        <div className="space-y-32">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start"
            >
              {/* STEP */}
              <div className="text-black/60 text-[22px] pt-2">({service.step})</div>

              {/* IMAGE */}
              <div className="md:col-span-2">
                <div className="rounded-3xl overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                  w-full h-[360px] object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
                  />
                </div>

                {/* TEXT BELOW IMAGE */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mt-5 gap-3">
                  <div>
                    <h3 className="text-2xl font-medium mb-2">
                      {service.title}
                    </h3>
                    <p className="text-black/70 max-w-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* STATS */}
                  <div className="md:text-right">
                    <div className="text-2xl font-medium">{service.stat}</div>
                    <div className="text-black/60 text-sm">
                      {service.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
