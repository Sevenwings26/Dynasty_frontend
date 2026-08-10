import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FB1 from '../../assets/images/designers/Fabique Beauty/FB1.jpg';
import FB2 from '../../assets/images/designers/Fabique Beauty/FB2.jpg';
import FB3 from '../../assets/images/designers/Fabique Beauty/FB3.jpg';
import FB4 from '../../assets/images/designers/Fabique Beauty/FB4.jpg';
import FB5 from '../../assets/images/designers/Fabique Beauty/FB5.jpg';
import FB6 from '../../assets/images/designers/Fabique Beauty/FB6.jpg';
import FB7 from '../../assets/images/designers/Fabique Beauty/FB7.jpg';
import FB8 from '../../assets/images/designers/Fabique Beauty/FB8.jpg';
import FB9 from '../../assets/images/designers/Fabique Beauty/FB9.jpg';
import FB10 from '../../assets/images/designers/Fabique Beauty/FB10.jpg';
import FB11 from '../../assets/images/designers/Fabique Beauty/FB11.jpg';

const images = [
  FB1, FB2, FB11, FB4, FB5, FB8, FB9, FB10, FB6, FB7, FB3,
];

const DesignerDetail1 = () => {
  return (
    <div className="bg-noir-900 min-h-screen text-zinc-100 flex flex-col font-sans selection:bg-gold-400 selection:text-black">
      <Header />

      <article className="max-w-4xl mx-auto px-4 py-16 w-full flex-1">
        {/* Article Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20">
            Designer Spotlight &bull; Fabique Beauty
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold leading-tight pt-2">
            Fabique Beauty’s Vibrant Celebration of African Elegance
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-light">
            Published 18th December, 2022 &bull; Editorial Runway Review
          </p>
        </div>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 mb-12 bg-zinc-950">
          <img
            src={images[0]}
            alt="Fabique Beauty Runway Feature"
            className="w-full max-h-[550px] object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-8 text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
          <p>
            <span className="text-5xl font-serif text-gold-400 font-bold float-left mr-3 leading-none">
              F
            </span>
            abique Beauty’s latest showcase was nothing short of a visual feast — a bold, unapologetic celebration of African heritage through color, pattern, and form. Known for its African-inspired aesthetic, Fabique Beauty has once again affirmed its place at the intersection of tradition and modern fashion with a collection that radiates joy, cultural pride, and creative ingenuity.
          </p>

          <p>
            The collection bursts with vibrant prints, rich textures, and intricate details — each piece telling a story of heritage, craftsmanship, and identity. From flowing Ankara gowns to structured two-piece sets adorned with handwoven details, the garments reflect a seamless fusion of contemporary silhouettes and timeless African artistry.
          </p>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl my-8 bg-zinc-950">
            <img
              src={images[1]}
              alt="Fabrique Silhouette"
              className="w-full max-h-[480px] object-cover"
            />
          </div>

          <p>
            What makes Fabique Beauty stand out is its commitment to honoring African roots while embracing global fashion sensibilities. The use of bold, earthy hues — deep oranges, emerald greens, radiant blues — evokes the landscapes, festivals, and spirit of the continent. Yet, the tailoring remains refined, with clean lines and versatile styling that speaks to modern elegance.
          </p>

          {/* Grid Pair */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 h-96">
              <img
                src={images[2]}
                alt="Color palette detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 h-96">
              <img
                src={images[3]}
                alt="Runway expression"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p>
            The show wasn’t just a fashion display; it was an immersive cultural experience. Models walked to the rhythm of Afrobeat music, their presence exuding power and grace. Each look was not just worn — it was owned.
          </p>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl my-8 bg-zinc-950">
            <img
              src={images[4]}
              alt="Model in motion"
              className="w-full max-h-[480px] object-cover"
            />
          </div>

          <p>
            Fabique Beauty’s colorful collection is more than beautiful clothing — it’s a narrative of identity, resilience, and pride woven into fabric. For lovers of fashion with depth, color, and story, this brand continues to be a radiant force to watch.
          </p>

          {/* Triple Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 h-80">
              <img src={images[5]} alt="Showcase look" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 h-80">
              <img src={images[6]} alt="Showcase look" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 h-80">
              <img src={images[7]} alt="Editorial look" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default DesignerDetail1;




