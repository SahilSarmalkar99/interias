import kitchen from "../../assets/kitchen/kitchen.jpeg";
import wardrobes from "../../assets/kitchen/kitchen4.jpeg";
import light from "../../assets/room/room3.jpeg";
import flooring from "../../assets/room/room8.jpeg";
import electrical from "../../assets/bedroom/bedroom3.jpeg";
import wall from "../../assets/door/door.jpeg";
import ceiling from "../../assets/ceiling/ceiling.jpeg";
import civil from "../../assets/shop/shop1.jpeg";

const services = [
  {
    id: "001",
    title: "Modular Kitchens",
    desc: "Precision-designed kitchens that maximise space, improve workflow, and blend style with everyday practicality.",
    stat: "90+ Transformed Spaces",
    img: kitchen,
  },
  {
    id: "002",
    title: "Modular Wardrobes",
    desc: "Custom storage solutions crafted for elegance, organisation, and seamless integration into your interiors.",
    stat: "45+ Transformed Spaces",
    img: wardrobes,
  },
  {
    id: "003",
    title: "Lighting Design",
    desc: "Layered lighting solutions that enhance mood, highlight architecture, and elevate the overall ambience.",
    stat: "30+ Transformed Spaces",
    img: light,
  },
  {
    id: "004",
    title: "Flooring Solutions",
    desc: "Durable, refined flooring choices selected to complement your design while standing up to daily life.",
    stat: "20+ Transformed Spaces",
    img: flooring,
  },
  {
    id: "005",
    title: "Electrical Work",
    desc: "Safe, efficient electrical planning and execution—designed to support modern living and smart systems.",
    stat: "35+ Transformed Spaces",
    img: electrical,
  },
  {
    id: "006",
    title: "Civil Work",
    desc: "Structural modifications and build work executed with precision to support lasting, high-quality interiors.",
    stat: "75+ Transformed Spaces",
    img: civil,
  },
  {
    id: "007",
    title: "False Ceiling Design",
    desc: "Architectural ceiling solutions that improve acoustics, conceal services, and add visual depth.",
    stat: "70+ Transformed Spaces",
    img: ceiling,
  },
  {
    id: "008",
    title: "Wall Design & Painting",
    desc: "Textures, finishes, and colours thoughtfully curated to bring character, warmth, and cohesion to spaces.",
    stat: "45+ Transformed Spaces",
    img: wall,
  },
];

const Services = () => {
  return (
    <section className="w-full text-black px-3 py-10 md:px-35 md:py-32 font-[font1]">
      {/* HEADER */}
      <div className="grid grid-cols-1 gap-10  md:grid-cols-[140px_1fr_480px] mb-10 md:mb-32 items-start">
        {/* LEFT */}
        <div className="flex items-center gap-3 text-2xl md:text-[18px] mt-2">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Services</span>
        </div>

        {/* CENTER */}
        <h2 className="text-[28px] md:text-[40px] leading-tight tracking-tight md:max-w-[520px] font-[font4]">
          Personalized Care. <br />
          Inspired Spaces.
        </h2>

        {/* RIGHT */}
        <div className="text-[18px] leading-tight tracking-tighter md:text-sm text-black/70 md:max-w-[320px] md:justify-self-end">
          Creative solutions tailored for every style and every space.
          <div className="mt-4 flex items-center gap-2 text-black">
            <span>View Services</span>
            <span>↗</span>
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="border-t border-black/10  ">
        {services.map((s) => (
          <div
            key={s.id}
            className="group grid grid-cols-1 md:grid-cols-[140px_1fr_480px]
                   items-center  md:py-10 md:border-b border-black/10"
          >
            {/* NUMBER */}
            <div className="text-black/60 text-sm mt-5">( {s.id} )</div>

            {/* TEXT */}
            <div className="md:max-w-[520px]">
              <h3 className="text-[28px] mb-4 ">{s.title}</h3>

              <p className="text-black/70 leading-relaxed md:max-w-[420px]">
                {s.desc}
              </p>

              <div className="mt-10">
                <span className="text-[20px] font-medium">
                  {s.stat.split("+")[0]}+
                </span>
                <div className="text-[16px] text-black/60">Transformed Spaces</div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="py-10 md:justify-self-end">
              <div className="md:w-[380px] md:h-[240px] rounded-2xl overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover
                         transition-transform duration-[900ms] ease-out
                         group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
