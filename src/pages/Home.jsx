import React from "react";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import CallDesigners from "../components/CallDesigners";
import agbadaModel from "../assets/images/agbadaModel.jpg";
import wedding from "../assets/images/wedding.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import BlogSection from "../components/BlogSection";
import HeroSliderSmall from "../components/HeroSliderSmall";
import DesignersCarousel from "../components/DesignersCarousel";

const Home = () => {
  return (
    <div className="bg-noir-900 min-h-screen text-zinc-100 flex flex-col font-sans selection:bg-gold-400 selection:text-black">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hidden md:block">
        <HeroSlider />
      </section>
      <section className="md:hidden">
        <HeroSliderSmall />
      </section>

      {/* Call for Designers Section */}
      <CallDesigners />

      {/* Feature Showcase Banner */}
      <section className="max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
          <div className="relative h-[480px] w-full">
            <img
              src={agbadaModel}
              alt="Arcade Fashion Showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-noir-900 via-noir-900/70 to-transparent p-8 sm:p-14 flex flex-col justify-center max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-2">
                Featured Event Series
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-white font-bold leading-tight">
                Arcade Fashion Weekend
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base font-light mt-4 leading-relaxed">
                Discover the latest updates on models, runway trends, and couture fashion, featuring seasoned supermodels and emerging global talents.
              </p>
              <div className="mt-8">
                <Link
                  to="/gallery/arcade-fashion-weekend"
                  className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gold-400 hover:text-black transition-all duration-300 shadow-xl"
                >
                  <span>Explore Gallery</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Brand Narrative */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
              <img
                src={wedding}
                alt="Arcade Bridal Heritage"
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-noir-900/20 group-hover:bg-transparent transition" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-noir-800 p-6 rounded-2xl border border-zinc-700 shadow-glow-gold">
              <span className="text-3xl font-serif text-gold-400 font-bold block">10+</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400">Flagship Events</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
              The Dynasty Legacy
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-bold leading-tight">
              Empowering Creative Fashion Visionaries
            </h2>
            <article className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              <span className="text-4xl font-serif text-gold-400 font-bold float-left mr-3 leading-none">
                A
              </span>
              rcade DYNASTY creates a lasting ecosystem for fashion entrepreneurs, models, and creatives. Our vision showcases couture, high fashion, and cultural storytelling on the runway through innovative events such as <strong className="text-white font-medium">ARCADE FASHION WEEKEND, IBADAN BRIDAL FASHION SHOW, ESTILO LUZ KIDS AND TEEN FASHION SHOW, URBAN STYLE FASHION SHOW, THE BRIDAL FASHION WEEKEND, LAGOS BRIDAL FASHION EXPERIENCE, AND EL AMOR FASHION TOUR.</strong>
            </article>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                  Global Platform
                </h4>
                <p className="text-xs text-zinc-400 font-light">
                  Connecting emerging fashion brands directly to local & international buyers.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                  Runway Excellence
                </h4>
                <p className="text-xs text-zinc-400 font-light">
                  Creating unforgettable fashion experiences and high-production showcases.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold hover:text-white transition"
              >
                <span>Read Full Story</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Designers Carousel Section */}
      <DesignersCarousel />

      {/* Blog & Editorial Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Gazette & Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold mt-1">
              Arcade Fashion Blogs
            </h2>
          </div>
          <Link to="/blog" className="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-gold-400 transition">
            View All Blogs &rarr;
          </Link>
        </div>
        <BlogSection />
      </section>

      {/* Newsletter Subscribe */}
      <Subscribe />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

