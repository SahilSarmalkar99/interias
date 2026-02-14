import React from "react";
import ContentButton1 from "../Home/ContentButton1";
import Exclusive from "./Exclusive";
import FeaturedProjects from "../Home/FeaturedProjects";
import Feature from "./Feature";

const ProjectInfo = () => {
  return (
    <section className="bg-[#F5F1EA] px-4 md:px-20 py-16 font-[font4]">
      <Exclusive />
      <Feature />
    </section>
  );
};

export default ProjectInfo;
