import React from "react";

const Offer = () => {
  return (
    <section className="bg-white px-3 md:px-16 lg:px-24 py-20 md:py-30 font-[font5] md:font-[font1]">
      <div className="max-w-[1200px] mx-auto">

        {/*  TOP  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

          {/* LEFT LABEL */}
          <div className="flex items-center gap-3 text-[22px] md:text-[20px]">
            <span className="w-2 h-2 rounded-full bg-[#9C937A]" />
            <span className="text-black">Technology & Warranty</span>
          </div>

          {/* CENTER TITLE */}
          <h2 className="text-xl md:text-3xl leading-tight tracking-tighter">
            Engineered with care &<br />
            backed by trust.
          </h2>

          {/* RIGHT TEXT */}
          <p className="text-black/70 max-w-sm md:justify-self-end tracking-tighter">
            Advanced construction technologies combined with
            strong warranties for lasting peace of mind.
          </p>

        </div>

        {/*  CARDS  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* TECHNOLOGY CARD */}
          <div className="bg-[#F3F2EF] rounded-3xl p-8">
            <span className="text-sm text-black/60">(001)</span>
            <h3 className="text-xl font-medium mt-4 mb-3">
              Technology & Science
            </h3>
            <p className="text-black/70 text-sm leading-relaxed">
              Built using advanced engineering and design science
              to deliver durable, seamless, and ergonomic modular interiors.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li>• AquaBloc® moisture-resistant sealed panels</li>
              <li>• AntiBubble® seamless surface technology</li>
              <li>• DuraBuild™ strong, long-lasting structure</li>
              <li>• Design Science for ergonomic efficiency</li>
            </ul>
          </div>

          {/* WARRANTY CARD */}
          <div className="bg-[#F3F2EF] rounded-3xl p-8">
            <span className="text-sm text-black/60">(002)</span>
            <h3 className="text-xl font-medium mt-4 mb-3">
              Warranty & Assurance
            </h3>
            <p className="text-black/70 text-sm leading-relaxed">
              Every interior is supported by comprehensive warranties
              and dedicated after-sales service.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li>• 1 year free carpentry & plumbing service</li>
              <li>• 10 years wood warranty</li>
              <li>• 2 years hardware warranty</li>
            </ul>
          </div>

          {/* TRUST CARD */}
          <div className="bg-[#F3F2EF] rounded-3xl p-8">
            <span className="text-sm text-black/60">(003)</span>
            <h3 className="text-xl font-medium mt-4 mb-3">
              Built to Last
            </h3>
            <p className="text-black/70 text-sm leading-relaxed">
              From material selection to execution, every detail
              is designed for longevity, safety, and everyday comfort.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Offer;
