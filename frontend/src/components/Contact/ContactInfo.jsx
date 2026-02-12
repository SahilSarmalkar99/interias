import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Plus,
  Minus,
  Facebook,
  Instagram,
} from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const contactInfo = [
  {
    text: "ajay.interiorconcepts@gmail.com",
    icon: Mail,
  },
  {
    text: "Interior concepts , Office no 4, first floor Ramdev Ritu height, opp Aviva JP North, vinay nagar Mira road East Thane",
    icon: MapPin,
  },
  {
    text: "(+91) 093727 70662",
    icon: Phone,
  },
  {
    type: "social",
    text: "Follow Us",
    icons: [Facebook, Instagram],
  },
];

const faqData = [
  {
    question: "How do you work?",
    answer:
      "We follow a clear process—from discovery and concept to execution and reveal ensuring a smooth and collaborative journey.",
  },
  {
    question: "What spaces do you design?",
    answer:
      "We design residential, commercial, hospitality, and bespoke interior spaces tailored to each client.",
  },
  {
    question: "Do you work globally?",
    answer:
      "Yes, we collaborate with clients worldwide through a seamless remote and on-site workflow.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary based on scope, but most projects range from a few weeks to several months.",
  },
  {
    question: "Can I hire you for one room?",
    answer:
      "Absolutely. We offer flexible services ranging from single-room designs to full-scale projects.",
  },
];

const ContactInfo = () => {
  const [openIndex, setOpenIndex] = useState();

      useGSAP(() => {
    gsap.fromTo(
      ".info",
      { y: 50, opacity: 0, filter: "blur(2px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.8,
        stagger: 0.2,
        delay: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="info  px-6 md:px-16 lg:px-24 py-20 font-[font1]">
      {/* CONTACT  */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40">
        {/* LEFT */}
        <div className="space-y-6">
          {contactInfo.map((item, index) => {
            // FOLLOW US
            if (item.type === "social") {
              return (
                <div
                  key={index}
                  className="flex flex-wrap items-center gap-4 bg-[#F3F2EF] rounded-2xl px-6 py-4"
                >
                  <span className="text-black/80 font-medium">{item.text}</span>

                  <div className="flex gap-4">
                    {item.icons.map((SocialIcon, i) => (
                      <div
                        key={i}
                        className="w-11 h-11 rounded-xl bg-[#B8B2A5] flex items-center justify-center
                         hover:scale-110 transition cursor-pointer"
                      >
                        <SocialIcon
                          size={18}
                          className="text-white stroke-[1.8]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // NORMAL CONTACT INFO
            const Icon = item.icon;
            return (
              <div className="flex items-start gap-4 bg-[#F3F2EF] rounded-2xl px-4 py-4">
                <div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[#B8B2A5] 
                  flex items-center justify-center shrink-0"
                >
                  <Icon size={18} className="text-white" />
                </div>

                <span className="text-black/80 text-sm md:text-base break-all min-w-0">
                  {item.text}
                </span>
              </div>
            );
          })}

          {/* IMAGE */}
          <img
            src="https://framerusercontent.com/images/r3XRxCn6TG0opmqpcRDGGHkRfH8.jpg?scale-down-to=1024&width=3458&height=2456"
            alt="Interior"
            className="w-full lg:h-[30vh] rounded-3xl object-cover mt-6"
          />
        </div>

        {/* FORM */}
        <div className="bg-[#F3F2EF] rounded-3xl p-10">
          <h3 className="text-lg text-black/60 mb-8">Contact Information</h3>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input label="First Name" placeholder="Jane" />
              <Input label="Last Name" placeholder="Smith" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input label="Email" placeholder="intereo@framer.com" />
              <Input label="Contact Number" placeholder="+91 8772 62627" />
            </div>

            <div>
              <label className="block text-sm mb-2 text-black/80">Notes</label>
              <textarea
                rows={4}
                placeholder="Let's work together!"
                className="w-full rounded-xl px-4 py-3 bg-white outline-none text-black/70 resize-none"
              />
            </div>

            <button className="w-full py-4 rounded-xl bg-[#8E8A7A] text-white font-medium hover:bg-[#7C7869] transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 text-[24px] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#9C937A]" />
            <span>FAQ</span>
          </div>

          <h2 className="text-4xl font-medium leading-tight mb-6">
            Looking for Clarity?
            <br />
            We're Here to Help
          </h2>

          <p className="text-black/70 max-w-sm">
            Designing a space comes with many questions we've answered.
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="bg-[#F3F2EF] rounded-2xl px-6 py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center"
                >
                  <span className="text-lg font-medium">{item.question}</span>
                  <span className="w-8 h-8 rounded-full bg-[#B8B2A5] flex items-center justify-center">
                    {isOpen ? (
                      <Minus size={16} className="text-white" />
                    ) : (
                      <Plus size={16} className="text-white" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-black/70">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* INPUT HELPER (INLINE, NOT REUSABLE LOGIC) */
const Input = ({ label, placeholder }) => (
  <div>
    <label className="block text-sm mb-2 text-black/80">{label}</label>
    <input
      placeholder={placeholder}
      className="w-full rounded-xl px-4 py-3 bg-white outline-none text-black/70"
    />
  </div>
);

export default ContactInfo;
