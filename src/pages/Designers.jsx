import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

import DT1 from '../assets/images/designers/DHVEN TOUCH/DT1.jpg';
import OD1 from '../assets/images/designers/ODESBABA COUTURE/OD1.jpg';
import FB2 from '../assets/images/designers/Fabique Beauty/FB2.jpg';
import AT6 from '../assets/images/designers/R.M Atelier/AT6.jpg';
import S1 from '../assets/images/designers/sannah/S1.jpg';
import or3 from '../assets/images/designers/Oryehglobal/or3.jpeg';

const designers = [
  {
    link: '/designers/Oryehglobal',
    name: 'ORYEHGLOBAL CLOTHING',
    category: 'Men\'s Tailored Collection',
    desc: 'Modern menswear blending timeless craftsmanship with versatile luxury tailoring.',
    image: or3,
  },
  {
    link: '/designers/sannah-fashion',
    name: 'SANNAH FASHION HUB',
    category: 'Couture & Runway',
    desc: 'High-end bespoke gowns and experimental silhouettes redefining couture fashion.',
    image: S1,
  },
  {
    link: '/designers/rm-atelier',
    name: 'R.M. ATELIER',
    category: 'Atelier Excellence',
    desc: 'Master embroidery, rich textures, and dramatic event wear.',
    image: AT6,
  },
  {
    link: '/designers/fabrique-beauty',
    name: 'FABRIQUE BEAUTY',
    category: 'African Heritage Fusion',
    desc: 'Unapologetic celebration of African prints, vivid hues, and contemporary form.',
    image: FB2,
  },
  {
    link: '/designers/dhven-touch',
    name: 'DHVEN TOUCH',
    category: 'Modern Elegance',
    desc: 'Subtle sophistication and effortless evening wear designed for distinction.',
    image: DT1,
  },
  {
    link: '/designers/odesbaba-couture',
    name: 'ODESBABA COUTURE',
    category: 'Avant-Garde Architecture',
    desc: 'Bold structural design and progressive fashion concepts.',
    image: OD1,
  },
];

const Designers = () => {
  return (
    <div className="bg-noir-900 min-h-screen text-zinc-100 flex flex-col font-sans selection:bg-gold-400 selection:text-black">
      <Header />

      {/* Page Header */}
      <section className="py-16 px-4 bg-zinc-950/80 border-b border-zinc-800/80 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block mb-2">
          Runway Creators
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-white font-bold tracking-tight">
          Featured Designers & Ateliers
        </h1>
        <p className="max-w-xl mx-auto text-zinc-400 text-sm font-light mt-3">
          Explore the visionary minds, brands, and couture houses crafting the future of fashion at Arcade Dynasty.
        </p>
      </section>

      {/* Designers Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designers.map((designer, index) => (
            <Link
              to={designer.link}
              key={index}
              className="group block rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl hover:border-gold-400/40 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={designer.image}
                  alt={designer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-black/60 text-gold-400 backdrop-blur-md border border-gold-400/30 font-medium">
                  {designer.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h2 className="text-xl font-serif text-white font-bold group-hover:text-gold-300 transition">
                    {designer.name}
                  </h2>
                  <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">
                    {designer.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800 flex items-center text-xs text-gold-400 font-medium space-x-1 group-hover:text-white transition">
                  <span>View Portfolio & Story</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Designers;

