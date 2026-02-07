import React from "react";
import img from "../../assets/display/cafe.png";

const Image1 = () => {
  return (
    <div className="mt-16 w-full overflow-hidden rounded-2xl">
      <img
        src={img}
        alt="Interior"
        loading="lazy"
        className="
          w-full
          h-[220px]
          sm:h-[300px]
          md:h-[420px]
          lg:h-[520px]
          object-cover
          object-center
          image-rendering-auto
          contrast-105
          brightness-105
        "
      />
    </div>
  );
};

export default Image1;
