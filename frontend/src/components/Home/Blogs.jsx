const blogs = [
  {
    title: "Designing Calm Spaces",
    img: "https://framerusercontent.com/images/1pFT9WcJSOqsbOqvQPdhg5vN6E.png?width=1200&height=686",
    dark: true,
  },
  {
    title: "The Minimalist Mindset",
    img: "https://framerusercontent.com/images/RF3WfFBVSXvwnnhgkFrOmFEPc.png?width=1200&height=673",
    dark: false,
  },
];

const Blogs = () => {
  return (
    <section className="w-full text-black px-35 py-32 font-[font1]">
      {/* HEADER */}
      <div className="grid grid-cols-[140px_1fr_480px] mb-24 items-start">
        <div className="flex items-center gap-3 text-[18px]">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Blogs</span>
        </div>

        <h2 className="text-[30px]  ml-10 leading-tight tracking-tight max-w-[520px]">
          Ideas, Interiors, Insight, <br />& Innovation.
        </h2>

        <div className="text-sm mt-2 text-black/70 max-w-[320px] justify-self-end">
          A closer look into our design world featuring tips, trends, and
          transformations.
          <div className="mt-4 flex items-center gap-2 text-black">
            <span>View All</span>
            <span>↗</span>
          </div>
        </div>
      </div>

      {/* BLOG CARDS */}
      <div className="grid grid-cols-[1.3fr_1fr] gap-12 items-stretch">
        {/* LEFT CARD */}
        <div className="group rounded-3xl overflow-hidden bg-black text-white h-[420px]">
          <div className="relative h-full">
            <img
              src={blogs[0].img}
              alt={blogs[0].title}
              className="absolute inset-0 w-full h-full object-cover
                 transition-transform duration-[900ms] ease-out
                 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30" />

            {/* INNER CONTENT PADDING */}
            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <h3 className="text-[22px]">{blogs[0].title}</h3>

              <div className="flex items-center gap-2 text-sm">
                <span>Read Article</span>
                <span>↗</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="group rounded-3xl bg-[#F4F2EE] h-[420px] overflow-hidden">
          <div className="h-full flex flex-col p-10">
            {/* TITLE */}
            <h3 className="text-[22px] mb-6">{blogs[1].title}</h3>

            {/* IMAGE */}
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img
                src={blogs[1].img}
                alt={blogs[1].title}
                className="w-full h-full object-cover
                   transition-transform duration-[900ms] ease-out
                   group-hover:scale-110"
              />
            </div>

            {/* FOOTER */}
            <div className="mt-6 flex items-center gap-2 text-sm">
              <span>Read Article</span>
              <span>↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
