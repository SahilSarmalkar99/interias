import React from "react";
import ContentButton1 from "../Home/ContentButton1";
import Exclusive from "./Exclusive";
import FeaturedProjects from "../Home/FeaturedProjects";

const ProjectInfo = () => {
  return (
    <section className="bg-[#F5F1EA] px-4 md:px-20 py-16 font-[font4]">
      <Exclusive />
      <FeaturedProjects isdisplayed ={[true ,true,true ,true,true,true ,true ,true ,true ,true]}/>
    </section>
  );
};

export default ProjectInfo;
