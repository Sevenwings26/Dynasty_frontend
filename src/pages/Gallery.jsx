import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bridal100 from "../assets/images/gallery/bridal100.jpg";
import arcade44 from "../assets/images/gallery/arcade44.jpg";
import urban1 from "../assets/images/gallery/urban1.jpg";
import elAlmor from "../assets/images/gallery/elAlmor.jpg";
import { Link } from "react-router-dom";

const events = [
  {
    title: 'Arcade Fashion Weekend',
    tag: 'FLAGSHIP SHOW',
    image: arcade44,
    link: "/gallery/arcade-fashion-weekend",
    desc: "Highlights from our premier annual fashion week featuring seasoned supermodels and emerging runway talent."
  },
  {
    title: 'Bridal Fashion Show',
    tag: 'BRIDAL COUTURE',
    image: bridal100,
    link: "/gallery/bridal-fashion-week",
    desc: "Exquisite bridal gowns, traditional attire fusion, and luxury bridal accessories."
  },
  {
    title: 'Urban Style Fashion Show',
    tag: 'STREETWEAR & FUSION',
    image: urban1,
    link: "/gallery/urban-style-fashion",
    desc: "Progressive streetwear, edgy silhouettes, and contemporary culture on the catwalk."
  },
  {
    title: 'El-Amor Fashion Tour',
    tag: 'INTERNATIONAL TOUR',
    image: elAlmor,
    link: "/gallery/el-almor",
    desc: "Global couture expressions, avant-garde design, and high-production runway showcases."
  },
];

const Gallery = () => {
  return (
    <div className="bg-noir-900 min-h-screen text-zinc-100 flex flex-col font-sans selection:bg-gold-400 selection:text-black">
      <Header />

      {/* Header Banner */}
      <section className="py-16 px-4 bg-zinc-950/80 border-b border-zinc-800/80 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block mb-2">
          Runway Archives
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-white font-bold tracking-tight max-w-4xl mx-auto">
          Past Arcade Fashion Week Seasons & Events
        </h1>
        <p className="max-w-xl mx-auto text-zinc-400 text-sm font-light mt-3">
          Explore iconic moments, designer collections, and backstage stories from our flagship events.
        </p>

        <div className="mt-6">
          <Link
            to="/apply-designer"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-full bg-gold-400 text-black font-semibold hover:bg-white transition duration-300"
          >
            <span>Apply as a Designer</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* Event Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="group block relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl h-[420px] transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-noir-900/40 to-transparent group-hover:from-noir-900/90 transition-all duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.25em] px-3 py-1 rounded-full bg-black/60 text-gold-400 border border-gold-400/30 font-medium w-fit">
                  {item.tag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold mt-3 group-hover:text-gold-300 transition">
                  {item.title}
                </h2>
                <p className="text-xs text-zinc-300 font-light mt-2 line-clamp-2 max-w-lg">
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center text-xs text-gold-400 font-medium space-x-2">
                  <span>View Event Gallery</span>
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

export default Gallery;

