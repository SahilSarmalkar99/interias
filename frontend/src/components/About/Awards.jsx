import React from 'react'

const awardsData = [
  {
    year: "2022",
    title: "Design Excellence Award",
    description:
      "Recognized for innovation, detail, and design that redefines modern interiors.",
    image:
      "https://framerusercontent.com/images/VqAKJOkaCB2wP3F2216fBraoS8.png?scale-down-to=512",
  },
  {
    year: "2023",
    title: "Creative Excellence Design Award",
    description:
      "Honored for curating elegant, high-end living spaces with timeless appeal.",
    image:
      "https://framerusercontent.com/images/QfPhaTfyOPBfPRa4a3OA1DjeXE.png?width=411&height=411",
  },
  {
    year: "2024",
    title: "Innovation in Design Award",
    description:
      "Celebrated for creating interiors that resonate across global styles and cultures.",
    image:
      "https://framerusercontent.com/images/eggBhA5veaR2FYd4k7gxwdFM.png?width=372&height=372",
  },
];


const Awards = () => {
  return (
    <section className="bg-white px-6 md:px-16 lg:px-24 font-[font1]">
      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 md:mb-20">
          <div className="flex items-center gap-3 text-[24px] md:text-[20px]">
            <span className="w-2 h-2 rounded-full bg-[#9C937A]" />
            <span>Awards</span>
          </div>

          {/* TITLE */}
          <h2 className="text-[22px] md:text-3xl md:mt-10  font-[font1] leading-tight tracking-tighter">
            Recognized Craft,<br />
            Celebrated Creativity.
          </h2>

          {/* DESCRIPTION */}
          <p className="text-black/70 max-w-sm  md:mt-10 md:justify-self-end font-[font1] leading-tight tracking-tighter">
            Over the years, our work has recognition for innovation,
            elegance, and excellence.
          </p>

        </div>

        {/* AWARDS LIST */}
        {awardsData.map((award, index) => (
          <div key={index}>

            {/* ROW */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center py-10">

              {/* YEAR */}
              <div>
                <h4 className="text-xl font-medium">{award.year}</h4>
                <p className="text-black/60 text-sm mt-1">
                  Year Of The Award
                </p>
              </div>

              {/* EMPTY SPACER */}
              <div />

              {/* IMAGE */}
              <div className="flex justify-start">
                <img
                  src={award.image}
                  alt=""
                  className="h-[120px] object-contain"
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-xl font-medium mb-3">
                  {award.title}
                </h3>
                <p className="text-black/70 leading-relaxed max-w-md">
                  {award.description}
                </p>
              </div>

            </div>

            {/* DIVIDER */}
            {index !== awardsData.length - 1 && (
              <div className="w-full h-px bg-black/10" />
            )}

          </div>
        ))}

      </div>
    </section>
  );
};

export default Awards;
