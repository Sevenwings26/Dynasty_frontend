import React from "react";
import MasonryLayoutArcade from "../../components/MasonryLayoutArcade";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Arcade = () => {
  return (
    <div className="bg-noir-900 min-h-screen text-zinc-100 flex flex-col font-sans">
      <Header />
      
      <section className="py-12 px-4 bg-zinc-950/80 border-b border-zinc-800/80 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block mb-2">
          Event Collection
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold">
          Arcade Fashion Weekend
        </h1>
        <p className="text-xs text-zinc-400 font-light mt-2 max-w-md mx-auto">
          Click any image to expand full-screen runway view.
        </p>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-10 w-full flex-1">
        <MasonryLayoutArcade />
      </main>

      <Footer />
    </div>
  );
};

export default Arcade;

