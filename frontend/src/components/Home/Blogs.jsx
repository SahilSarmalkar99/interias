const blogs = [
  {
    title: "Designing Calm Spaces",
    img: "https://framerusercontent.com/images/1pFT9WcJSOqsbOqvQPdhg5vN6E.png?width=1200&height=686",
  },
  {
    title: "The Minimalist Mindset",
    img: "https://framerusercontent.com/images/RF3WfFBVSXvwnnhgkFrOmFEPc.png?width=1200&height=673",
  },
  {
    title: "Warm Modern Interiors",
    img: "https://framerusercontent.com/images/QtoxpdAK6UyWQPiXfmyT6x3s.jpg",
  },
  {
    title: "Lighting That Transforms",
    img: "https://framerusercontent.com/images/TcSbZmiUKIbBNljE5KfNXY0mDY.png",
  },
];


const Blogs = ({ visibleCount = blogs.length }) => {
  const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <section className="w-full text-black px-2 py-15 md:px-35 md:py-20 font-[font1]">
      
      {/* HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 md:mb-20">
          <div className="flex items-center gap-3 text-[24px] md:text-[20px]">
          <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
          <span>Blogs</span>
        </div>

        <h2 className="text-[22px] md:text-3xl md:mt-10  font-[font1] leading-tight tracking-tighter">
          Ideas, Interiors, Insight, <br />& Innovation.
        </h2>

        <div className="text-black/70 max-w-sm  md:mt-10 md:justify-self-end font-[font1] leading-tight tracking-tighter">
          A closer look into our design world featuring tips, trends, and transformations.
        </div>
      </div>

      {/* BLOG GRID */}
      <div
        className={`grid gap-12 ${
          visibleBlogs.length === 2
            ? "grid-cols-1 md:grid-cols-[1.3fr_1fr]"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {visibleBlogs.map((blog, i) => (
          <div
            key={i}
            className="group rounded-3xl overflow-hidden bg-black mt-2 text-white md:h-[420px]"
          >
            <div className="relative h-full">
              <img
                src={blog.img}
                alt={blog.title}
                className="
                  absolute inset-0 w-full h-full object-cover
                  transition-transform duration-[900ms] ease-out
                  group-hover:scale-110
                "
              />
              <div className="absolute inset-0 bg-black/30" />

              <div className="relative z-10 h-full flex flex-col justify-between p-10">
                <h3 className="text-[22px]">{blog.title}</h3>

                <div className="flex items-center gap-2 text-sm">
                  <span>Read Article</span>
                  <span>↗</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
