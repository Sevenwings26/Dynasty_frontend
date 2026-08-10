import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { ServiceData } from "./slidesconstants";
import { Link } from "react-router-dom";

const HeroSliderSmall = () => {
  return (
    <div className="w-full bg-noir-900 py-4 border-b border-zinc-800">
      <div className="px-4 mb-3 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.2em] text-gold-400 font-semibold">
          Trending Showcases
        </span>
        <Link to="/designers" className="text-[11px] uppercase tracking-wider text-zinc-400">
          View All &rarr;
        </Link>
      </div>
      
      <div className="px-2">
        <Carousel fade indicators={true} controls={false} className="rounded-xl overflow-hidden shadow-xl">
          {ServiceData.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="relative h-[380px] w-full">
                <img
                  className="w-full h-full object-cover"
                  src={item.backgroundImage}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-noir-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[9px] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full bg-gold-400/20 text-gold-400 border border-gold-400/30">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-serif text-white font-bold mt-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-light mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSliderSmall;

