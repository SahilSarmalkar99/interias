import React from "react";
import Blogs from "../Blogs";

const BlogsInfo = () => {
  return (
    <div>
      <section className="bg-white px-4 md:px-20 py-10 font-[font4]">
        <Blogs visibleCount={4}/>
      </section>
    </div>
  );
};

export default BlogsInfo;
