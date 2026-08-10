import React from "react";
import { Link } from "react-router-dom";
import DT1 from '../assets/images/designers/DHVEN TOUCH/DT1.jpg';
import OD1 from '../assets/images/designers/ODESBABA COUTURE/OD1.jpg';
import FB2 from '../assets/images/designers/Fabique Beauty/FB2.jpg';
import AT6 from '../assets/images/designers/R.M Atelier/AT6.jpg';
import S1 from '../assets/images/designers/sannah/S1.jpg';

const designers = [
  {
    link: '/designers/sannah-fashion',
    name: 'SANNAH FASHION HUB',
    category: 'Couture & Tailoring',
    image: S1,
  },
  {
    link: '/designers/rm-atelier',
    name: 'R.M. ATELIER',
    category: 'High Fashion',
    image: AT6,
  },
  {
    link: '/designers/fabrique-beauty',
    name: 'FABRIQUE BEAUTY',
    category: 'African Heritage',
    image: FB2,
  },
  {
    link: '/designers/dhven-touch',
    name: 'DHVEN TOUCH',
    category: 'Modern Elegance',
    image: DT1,
  },
  {
    link: '/designers/odesbaba-couture',
    name: 'ODESBABA COUTURE',
    category: 'Avante-Garde',
    image: OD1,
  },
];

const DesignersCarousel = () => {
  return (
    <section className="w-full py-12 bg-noir-900 border-y border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8 px-2">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Spotlight
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-white mt-1">
              Featured Designers
            </h2>
          </div>
          <Link
            to="/designers"
            className="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-gold-400 transition"
          >
            All Designers &rarr;
          </Link>
        </div>

        {/* Scroll Container */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-2 pb-4">
          {designers.map((designer, index) => (
            <Link
              to={designer.link}
              key={index}
              className="min-w-[260px] md:min-w-[300px] flex-shrink-0 snap-center group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl transition-all duration-500"
            >
              <div className="h-72 w-full overflow-hidden">
                <img
                  src={designer.image}
                  alt={designer.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-noir-900/30 to-transparent group-hover:from-noir-900/90 transition-all duration-500"></div>
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-medium">
                  {designer.category}
                </span>
                <p className="text-white text-lg font-serif font-bold mt-1 group-hover:text-gold-300 transition">
                  {designer.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignersCarousel;

