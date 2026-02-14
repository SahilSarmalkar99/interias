import img1 from "../../assets/room/room1.jpeg";
import img2 from "../../assets/bedroom/bedroom2.jpeg";
import img3 from "../../assets/kitchen/kitchen5.jpeg";
import img4 from "../../assets/room/room5.jpeg";
import img5 from "../../assets/ceiling/ceiling2.jpeg";
import img6 from "../../assets/kitchen/kitchen6.jpeg";
import img7 from "../../assets/washroom/washroom2.jpeg";
import img8 from "../../assets/room/room8.jpeg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const processData = [
  {
    step: "001",
    title: "Discovery & Insight",
    description:
      "We begin by listening understanding your lifestyle, needs, and the essence of your space.",
    images: [img1, img2],
  },
  {
    step: "002",
    title: "Concept & Design",
    description:
      "We translate ideas into thoughtful concepts that balance aesthetics and functionality.",
    images: [img3, img4],
  },
  {
    step: "003",
    title: "Refinement & Planning",
    description:
      "Every detail is refined with precision, ensuring clarity before execution.",
    images: [img5, img6],
  },
  {
    step: "004",
    title: "Execution & Delivery",
    description:
      "We bring the vision to life with craftsmanship, care, and attention to detail.",
    images: [img7, img8],
  },
];

const Process = () => {
  const sectionRef = useRef(null);

  useGSAP(
    (context) => {
      const steps = context.selector(".process-step");

      steps.forEach((step) => {
        gsap.from(step, {
          y: 80,
          opacity: 0,
          duration: 1,
          delay:0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className=" px-3 md:px-16 lg:px-24 py-20 font-[font1] "
    >
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER (ONLY ONCE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 md:mb-20">
          <div className="flex items-center gap-3 text-[24px] md:text-[20px]">
            <span className="w-2 h-2 rounded-full bg-[#9C937A]" />
            <span>Process</span>
          </div>

          <h2 className="text-[22px] md:text-3xl md:mt-10  font-[font1] leading-tight tracking-tighter">
            A Clear, Thoughtful
            <br />
            Design Journey
          </h2>

          <p className="text-black/70 max-w-sm  md:mt-10 md:justify-self-end font-[font1] leading-tight tracking-tighter">
            Our process, from the meeting to the unveiling, teamwork, and
            innovation.
          </p>
        </div>

        {/* STEPS */}
        {processData.map((item, index) => (
          <div key={index} className="process-step mb-5 md:mb-10">
            {/* STEP TEXT */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 items-start">
              {/* STEP NUMBER */}
              <div className="text-black/60 text-[20px] font-[font1] pt-2">
                ({item.step})
              </div>

              {/* TITLE + PARA */}
              <div className="pt-2">
                <h3 className="text-[26px] font-[font4] mb-5 leading-tight">
                  {item.title}
                </h3>
                <p className="text-black/70 leading-relaxed md:min-w-[550px]">
                  {item.description}
                </p>
              </div>

              <div />
            </div>

            {/* IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:ml-[33.333%]">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-[28px] w-full md:h-[340px] object-cover"
                  alt=""
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
