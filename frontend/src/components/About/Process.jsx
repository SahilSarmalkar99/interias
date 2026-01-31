const processData = [
  {
    step: "001",
    title: "Discovery & Insight",
    description:
      "We begin by listening understanding your lifestyle, needs, and the essence of your space.",
    images: [
      "https://framerusercontent.com/images/oJsJpQL7CycQeHDCL8W53Tx2o.jpg?width=524&height=393",
      "https://framerusercontent.com/images/9YSktWjTNCxH7jgsVE4HjEkpEPc.jpg?scale-down-to=1024&width=3000&height=4000",
    ],
  },
  {
    step: "002",
    title: "Concept & Design",
    description:
      "We translate ideas into thoughtful concepts that balance aesthetics and functionality.",
    images: [
      "https://framerusercontent.com/images/4Fy2FPMbYknzxt4DCSoneuSVBKA.png?scale-down-to=1024&width=1200&height=800",
      "https://framerusercontent.com/images/WnWWbABUzliP6FryoFLO8OVyIM.jpg?scale-down-to=512&width=1200&height=673",
    ],
  },
  {
    step: "003",
    title: "Refinement & Planning",
    description:
      "Every detail is refined with precision, ensuring clarity before execution.",
    images: [
      "https://framerusercontent.com/images/aBNdRRfoCs4n1jaQM51t1jvvCNE.png?scale-down-to=1024&width=1200&height=800",
      "https://framerusercontent.com/images/az3WxBiKXR2NqbRJtR5ts2dY5k.png?scale-down-to=512&width=1200&height=960",
    ],
  },
  {
    step: "004",
    title: "Execution & Delivery",
    description:
      "We bring the vision to life with craftsmanship, care, and attention to detail.",
    images: [
      "https://framerusercontent.com/images/aHnw1f72ZC2P8vhJ51WVEEOIj0.jpg?scale-down-to=1024&width=1200&height=1200",
      "https://framerusercontent.com/images/zT0kNqT1QRdBuonoszUzvG8Rfbs.png?scale-down-to=1024&width=800&height=1200",
    ],
  },
];

const Process = () => {
  return (
    <section className="bg-white px-3 md:px-16 lg:px-24 py-20 font-[font1]">
      <div className="max-w-[1400px] mx-auto">

        {/* HEADER (ONLY ONCE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 md:mb-20">
          <div className="flex items-center gap-3 text-[24px] md:text-[20px]">
            <span className="w-2 h-2 rounded-full bg-[#9C937A]" />
            <span>Process</span>
          </div>

          <h2 className="text-[22px] md:text-3xl md:mt-10  font-[font1] leading-tight tracking-tighter">
            A Clear, Thoughtful<br />
            Design Journey
          </h2>

          <p className="text-black/70 max-w-sm  md:mt-10 md:justify-self-end font-[font1] leading-tight tracking-tighter">
            Our process, from the meeting to the unveiling,
            teamwork, and innovation.
          </p>
        </div>

        {/* STEPS */}
{processData.map((item, index) => (
  <div key={index} className="mb-5 md:mb-10">

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
