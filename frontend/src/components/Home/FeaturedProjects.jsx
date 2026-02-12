import img1 from "../../assets/room/room6.jpeg";
import img2 from "../../assets/room/room9.jpeg";
import img3 from "../../assets/washroom/washroom.jpeg";
import img4 from "../../assets/room/room3.jpeg";
import img5 from "../../assets/bedroom/bedroom6.jpeg";
import img6 from "../../assets/features/img1.png"
import img7 from "../../assets/features/img2.png"
import img8 from "../../assets/features/img3.png"
import img9 from "../../assets/features/img4.png"
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Modern Home Interior Design",
    img: img1,
    tags: ["Living Room Design", "Minimalist Design"],
  },
  {
    title: "Sophisticated Modern Home Interiors",
    img: img2,
    tags: ["Luxury Interior", "Modern Interior"],
  },
  {
    title: "Minimalist Bathroom Design",
    img: img3,
    tags: ["Marble Flooring", "Bathroom Design"],
  },
  {
    title: "Serene Luxury Living Room with Spiritual Accent",
    img: img4,
    tags: ["Luxury Living Room", "Spiritual Design"],
  },
  {
    title: "Modern Bedroom Interior with Organic Wall Design",
    img: img5,
    tags: ["Minimal Bedroom", "Interior Styling"],
  },
  {
  title: "Space-Themed Kids Bedroom Design",
  img: img6,
  tags: ["Kids Bedroom", "Space Theme"],
},
{
  title: "Modern Wardrobe with Vanity Unit",
  img: img7,
  tags: ["Wardrobe Design", "Vanity Area"],
},
{
  title: "Pastel Pink Kids Bedroom Interior",
  img: img8,
  tags: ["Kids Room", "Pastel Interior"],
},
{
  title: "Modern Dining Area with Wall Art",
  img: img9,
  tags: ["Dining Room", "Modern Interior"],
},
];

const FeaturedProjects = ({
  isdisplayed = [false, false, false, false, false, false ,false ,false ,false , false],
}) => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay:0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      },
    );
  });

  return (
    <section
      ref={sectionRef}
      className="w-full px-2 p-10 text-black md:px-35 md:py-32 font-[font1]  "
    >
      {/* HEADER */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-[1fr_2fr_1fr]
          gap-6 md:gap-0
          items-start
          mb-10
        "
      >
        <div className="flex items-center gap-3 text-[20px] md:text-[18px]">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Featured Projects</span>
        </div>

        <h2 className="text-[24px] md:text-[40px] leading-tight tracking-tight font-[font2] md:max-w-[520px]">
          Spaces That Inspire. <br />
          Projects That Last.
        </h2>

        <div className="max-w-[320px] text-sm text-black/70">
          <p>
            Discover our range of interior designs that turn ideas into stunning
            spaces!
          </p>
          <Link to="/projects">
            <div className="mt-4 flex items-center gap-2  text-black">
              <span>View Projects</span>
              <span className="text-lg">↗</span>
            </div>
          </Link>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {projects.map((p, i) => {
          if (isdisplayed.length && !isdisplayed[i]) return null;

          return (
            <div key={i} className="group cursor-pointer">
              {/* IMAGE */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="
              w-full md:h-[360px] object-cover
              transition-transform duration-[800ms] ease-out
              group-hover:scale-110
            "
                />
              </div>

              {/* TEXT */}
              <div className="mt-5 flex justify-between items-start">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>

              {/* TAGS */}
              <div className="mt-3 flex gap-2 flex-wrap">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs border rounded-full text-black/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;
