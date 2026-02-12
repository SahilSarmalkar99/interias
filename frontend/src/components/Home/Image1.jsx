import React from "react";
import img from "../../assets/display/cafe.png";
import { useRef } from "react";
import useScaleAminaton from "../../hooks/useScaleAminaton";

const Image1 = () => {
  const sectionRef = useRef(null);
  useScaleAminaton(sectionRef)
  return (
    <div ref={sectionRef} className="mt-16 w-full overflow-hidden rounded-2xl">
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
