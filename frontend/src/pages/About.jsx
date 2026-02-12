import React from "react";
import Nav from "../components/Nav";
import AboutHero from "../components/About/AboutHero";
import AboutInfo from "../components/About/AboutInfo";
import Clients from "../components/Home/Clients";
import GoalsSection from "../components/About/GoalsSection";
import Process from "../components/About/Process";
import Awards from "../components/About/Awards";
import Team from "../components/About/Team";
import ContactSection from "../components/Home/ContactSection";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="overflow-hidden bg-[#F5F1EA]">
      <Nav />
      <AboutHero />
      <AboutInfo />
      <Clients />
      <GoalsSection />
      <Process />
      {/* <Awards /> */}
      {/* <Team /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;
