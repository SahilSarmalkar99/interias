import React, { use } from "react";
import "./Hero.css";
import HeroImage from "./HeroImage";
import Card from "./Card";
import LeftText from "./LeftText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Content1 from "./Content1";
import Image1 from "./Image1";
import ContentButton1 from "./ContentButton1";
import Clients from "./Clients";
import ExclusiveProjects from "./ExclusiveProjects";
import FeaturedProjects from "./FeaturedProjects";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs";
import FollowUs from "./FollowUs";
import CTASection from "./ContactSection";
import ContactSection from "./ContactSection";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  useGSAP(() => {
    gsap.to("#top", {
      scrollTrigger: {
        trigger: "#top",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scaleX: 0.9, // 👈 reduces from sides
      transformOrigin: "center center",
      ease: "none",
    });
  }, []);

  return (
    <div>
      <div className="relative h-screen overflow-hidden" id="top">
        <HeroImage />
        <div className="relative z-10 h-full flex justify-between items-end px-16 pb-12 text-white -mb-90">
          <LeftText />

          {/* RIGHT CARD */}
          <Card />
        </div>
      </div>
      {/* Middle part -1 */}
      <div className="w-full min-h-screen px-24 pt-40 font-[font1] text-black">
        {/* TOP CONTENT ROW */}
        <Content1 />

        {/* IMAGE SECTION */}
        <Image1 />

        {/* Bottom Content */}
        <ContentButton1 />

        {/* Clients Section */}
        <Clients /> 
      </div>

      <ExclusiveProjects />

      <FeaturedProjects />

      <Services />
      
      <Testimonials />

      <Blogs />

      <FollowUs />

      <ContactSection />
    </div>
  );
};

export default Hero;
