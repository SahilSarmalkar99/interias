const services = [
  {
    id: "001",
    title: "Residential Design",
    desc: "Complete home interiors that reflect your style—functional, beautiful, and deeply personal.",
    stat: "90+ Transformed Spaces",
    img: "https://framerusercontent.com/images/r3XRxCn6TG0opmqpcRDGGHkRfH8.jpg?scale-down-to=2048&width=3458&height=2456",
  },
  {
    id: "002",
    title: "Commercial Interior Design",
    desc: "Smart, branded spaces for offices, cafés, and retail that engage and perform.",
    stat: "45+ Transformed Spaces",
    img: "https://framerusercontent.com/images/sl2Frd7xsooQRr3KaRpwTpIhNf8.jpg?width=1200&height=655",
  },
  {
    id: "003",
    title: "Interior Renovations",
    desc: "We rework layouts, update materials, and give tired spaces a fresh, modern edge.",
    stat: "30+ Transformed Spaces",
    img: "https://framerusercontent.com/images/PbK0xZE22ZHedu1lLtvy7M85V5k.jpg?scale-down-to=2048&width=6000&height=4000",
  },
  {
    id: "004",
    title: "Styling & Decor",
    desc: "Finishing touches—furniture, art, and accents that bring personality and polish.",
    stat: "20+ Transformed Spaces",
    img: "https://framerusercontent.com/images/Si0Fm5NuSd5XWGRZJpsC8JBicBY.png?width=1200&height=673",
  },
  {
    id: "005",
    title: "Virtual E-Design",
    desc: "Layouts and furnishing plans delivered remotely—design your home without leaving it.",
    stat: "35+ Transformed Spaces",
    img: "https://framerusercontent.com/images/S7bbH2evm03Dx9JYIGkSTliiLSI.png?width=1200&height=673",
  },
];

const Services = () => {
  return (
    <section className="w-full text-black px-35 py-32 font-[font1]">
      {/* HEADER */}
      <div className="grid grid-cols-[140px_1fr_480px] mb-32 items-start">
        {/* LEFT */}
        <div className="flex items-center gap-3 text-[18px] mt-2">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Services</span>
        </div>

        {/* CENTER */}
        <h2 className="text-[40px] leading-tight tracking-tight max-w-[520px]">
          Personalized Care. <br />
          Inspired Spaces.
        </h2>

        {/* RIGHT */}
        <div className="text-sm text-black/70 max-w-[320px] justify-self-end">
          Creative solutions tailored for every style and every space.
          <div className="mt-4 flex items-center gap-2 text-black">
            <span>View Services</span>
            <span>↗</span>
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="border-t border-black/10">
        {services.map((s) => (
          <div
            key={s.id}
            className="group grid grid-cols-[140px_1fr_480px]
                   items-center py-10 border-b border-black/10"
          >
            {/* NUMBER */}
            <div className="text-black/60 text-sm">( {s.id} )</div>

            {/* TEXT */}
            <div className="max-w-[520px]">
              <h3 className="text-[28px] mb-4">{s.title}</h3>

              <p className="text-black/70 leading-relaxed max-w-[420px]">
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
            <div className="justify-self-end">
              <div className="w-[380px] h-[240px] rounded-2xl overflow-hidden">
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
