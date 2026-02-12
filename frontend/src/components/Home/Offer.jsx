import React, { useRef } from "react";
import useRevealAnimation from "../../hooks/useRevealAnimation";

const Offer = () => {

  const sectionRef = useRef(null);

  useRevealAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="w-full px-2 md:px-35 py-20 mt-5 text-black font-[font1] overflow-hidden bg-[#EAE7E1] ">
      <div className="max-w-[1200px] mx-auto">
        {/*  TOP  */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[200px_1fr_480px] mb-20">
          {/* LEFT LABEL */}
          <div className="flex items-center gap-3 text-[20px] md:text-[18px]">
            <span className="w-2 h-2 rounded-full bg-[#8A867B]" />
            <span className="text-black">Technology & Warranty</span>
          </div>

          {/* CENTER TITLE */}
          <h2 className="text-2xl md:text-3xl leading-tight tracking-tighter">
            Engineered with care &<br />
            backed by trust.
          </h2>

          {/* RIGHT TEXT */}
          <p className="text-black/70 max-w-sm md:justify-self-end tracking-tighter">
            Advanced construction technologies combined with strong warranties
            for lasting peace of mind.
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
              Built using advanced engineering and design science to deliver
              durable, seamless, and ergonomic modular interiors.
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
              Every interior is supported by comprehensive warranties and
              dedicated after-sales service.
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
            <h3 className="text-xl font-medium mt-4 mb-3">Built to Last</h3>
            <p className="text-black/70 text-sm leading-relaxed">
              From material selection to execution, every detail is designed for
              longevity, safety, and everyday comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
