import React from "react";
import { Link } from "react-router-dom";
import designercall3 from "../assets/DesignersReg/designercall3.jpg";
import designercall1 from "../assets/DesignersReg/designercall1.jpg";
import designercall2 from "../assets/DesignersReg/designercall2.jpg";

const CallDesigners = () => {
  const showcases = [
    { image: designercall3, title: "Runway Exhibition", subtitle: "Showcase Couture to Global Buyers" },
    { image: designercall1, title: "Designer Spotlight", subtitle: "Elevate Brand Heritage & Craftsmanship" },
    { image: designercall2, title: "Estilo Experience", subtitle: "Connect with High-Fashion Enthusiasts" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
          Calling All Designers
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-white mt-2">
          Step Onto the Arcade Dynasty Runway
        </h2>
        <p className="text-zinc-400 text-sm mt-3 font-light leading-relaxed">
          Present your latest collection at our flagship fashion shows including Arcade Fashion Weekend, Ibadan Bridal Fashion Show, and El-Amor Fashion Tour.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {showcases.map((item, index) => (
          <Link to="/apply-designer" key={index} className="group block relative rounded-2xl overflow-hidden shadow-2xl h-80 bg-zinc-900 border border-zinc-800">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-noir-900/40 to-transparent group-hover:from-noir-900/90 transition-all duration-500" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-medium">
                0{index + 1} — Showcase
              </span>
              <h3 className="text-xl font-serif text-white font-bold mt-1 group-hover:text-gold-300 transition">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-300 font-light mt-1 opacity-90">
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/apply-designer"
          className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-full bg-gold-400 text-black font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-glow-gold"
        >
          <span>Apply as a Designer</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  );
};

export default CallDesigners;

