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
];

const FeaturedProjects = () => {
  return (
    <section className="w-full text-black px-35 py-32 font-[font1]">

      {/* HEADER */}
      <div className="grid grid-cols-[1fr_2fr_1fr] items-start mb-20">
        <div className="flex items-center gap-3 text-[18px]">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Featured Projects</span>
        </div>

        <h2 className="text-[40px] leading-tight tracking-tight max-w-[520px]">
          Spaces That Inspire. <br />
          Projects That Last.
        </h2>

        <div className="max-w-[320px] text-sm text-black/70">
          <p>
            Discover our range of interior designs that turn ideas
            into stunning spaces!
          </p>

          <div className="mt-4 flex items-center gap-2 text-black">
            <span>View Projects</span>
            <span className="text-lg">↗</span>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-12">

        {projects.map((p, i) => (
          <div
            key={i}
            className="group cursor-pointer"
          >

            {/* IMAGE CARD */}
            <div className="rounded-2xl">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="
                    h-[360px] w-full object-cover
                    transition-transform duration-[800ms] ease-out
                    group-hover:scale-110
                  "
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="mt-5 flex justify-between items-start">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <span
                className="
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                "
              >
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
        ))}

      </div>
    </section>
  );
};

export default FeaturedProjects;
