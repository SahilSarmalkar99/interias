import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import img1 from "../../assets/logos/arrow.png";
import img2 from "../../assets/logos/AxisSecurities.jpg";
import img3 from "../../assets/logos/collection.png";
import img4 from "../../assets/logos/Guess.png";
import img5 from "../../assets/logos/HDBFinancialServices.png";
import img6 from "../../assets/logos/HDFClife.jpg";
import img7 from "../../assets/logos/Hindalco.webp";
import img8 from "../../assets/logos/KanungoGroup.webp";
import img9 from "../../assets/logos/Kipling.png";
import img10 from "../../assets/logos/Lee.png";
import img11 from "../../assets/logos/Levis.jpg";
import img12 from "../../assets/logos/LodhaGroup.png";
import img13 from "../../assets/logos/MotilalOswal.png";
import img14 from "../../assets/logos/Nautica.png";
import img15 from "../../assets/logos/PeterEngland.png";
import img16 from "../../assets/logos/puma.png";
import img17 from "../../assets/logos/sephora.jpg";
import img18 from "../../assets/logos/TommyHilfiger.png";
import img19 from "../../assets/logos/US_PoloAssn.png";
import img20 from "../../assets/logos/VanHeusen.png";

const logos = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
];

const Clients = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const width = track.scrollWidth / 2;

    gsap.to(track, {
      x: -width,
      duration: 30,          // slower = smoother
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % width}px`,
      },
    });
  }, []);

  return (
    <section className="w-full px-1 py-10 md:py-32 md:px-24 overflow-hidden">
      
      <h2 className="text-[28px] mb-10 md:mb-16">Our Clients</h2>

      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-24 w-max items-center"
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Client Logo"
              className="h-20 shrink-0"
              draggable={false}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Clients;