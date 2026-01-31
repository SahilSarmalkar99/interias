const projects = [
  {
    title: "Nordic Light Loft",
    img: "https://framerusercontent.com/images/QtoxpdAK6UyWQPiXfmyT6x3s.jpg?width=1200&height=800",
    tags: ["Scandinavian", "Functional Elegance"],
  },
  {
    title: "Redwood Horizon",
    img: "https://framerusercontent.com/images/t8wfsgBHFfqnnWtQRlpy7V3Pmg.png?width=1200&height=673",
    tags: ["Timber Architecture", "Nature Immersion"],
  },
  {
    title: "Atelier Noir",
    img: "https://framerusercontent.com/images/TcSbZmiUKIbBNljE5KfNXY0mDY.png?width=1200&height=1200",
    tags: ["Monochrome", "Industrial Chic"],
  },
  {
    title: "Noir Cultura Studio",
    img: "https://framerusercontent.com/images/v1HC8e2kQhWRTgB4S8J2rmCa5a8.png?scale-down-to=1024&width=1200&height=1200",
    tags: ["Monochrome", "Industrial Chic"],
  },
  {
    title: "Maison Éclat Studio",
    img: "https://framerusercontent.com/images/BSvAZaTsGCd7wGRbgeAlmOIOXtk.png?scale-down-to=1024&width=1200&height=673",
    tags: ["Monochrome", "Industrial Chic"],
  },
];

const FeaturedProjects = ({
  isdisplayed = [false, false, false, false, false, false],
}) => {
  return (
    <section className="w-full px-2 p-10 text-black md:px-35 md:py-32 font-[font1]">
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
        <div className="flex items-center gap-3 text-xl font-[font4] md:text-[18px]">
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

          <div className="mt-4 flex items-center gap-2  text-black">
            <span>View Projects</span>
            <span className="text-lg">↗</span>
          </div>
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
