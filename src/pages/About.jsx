import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import group from "../assets/images/aboutpg/group.jpg";
import { Link } from "react-router-dom";

const goals = [
  {
    title: "Enthusiast Interaction",
    desc: "Provide immersive opportunities where fashion lovers, buyers, and consumers interact directly with creators.",
  },
  {
    title: "Brand Engagement",
    desc: "Create a well-managed platform for clients to meet the visionary minds behind emerging & established luxury brands.",
  },
  {
    title: "Global Audience Reach",
    desc: "Expose indigenous African couture products and services to vast local and international fashion markets.",
  },
  {
    title: "Grassroots Empowerment",
    desc: "Unite emerging designers, artisans, and fashion moguls to foster grassroots industry growth.",
  },
  {
    title: "Industry Innovation",
    desc: "Reinforce the synergy between lifestyle, modeling architecture, and modern luxury craftsmanship.",
  },
  {
    title: "Unforgettable Showcases",
    desc: "Deliver high-production runway experiences and world-class event curation for all participants.",
  },
];

const About = () => {
  return (
    <div className="bg-noir-900 min-h-screen text-zinc-100 flex flex-col font-sans selection:bg-gold-400 selection:text-black">
      <Header />

      {/* Hero Header */}
      <section className="relative py-20 px-4 border-b border-zinc-800/80 bg-zinc-950/80 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block mb-2">
          Heritage & Vision
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-white font-bold tracking-tight">
          About Arcade Dynasty
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
          Pioneering the modern architecture of fashion exhibitions, runway storytelling, and designer empowerment across continents.
        </p>
      </section>

      {/* Story & Image Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
              <img
                src={group}
                alt="Arcade Dynasty Team & Models"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Our Identity
            </span>
            <h2 className="text-3xl font-serif text-white font-bold">
              Connecting Creators to the World
            </h2>
            <article className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light space-y-4">
              <p>
                <span className="text-5xl font-serif text-gold-400 font-bold float-left mr-3 leading-none">
                  A
                </span>
                rcade DYNASTY is tasked with the vision to create a lasting solution for fashion entrepreneurs, models, and creatives. Our goal is to showcase different couture, styles, and designs, creating a dependable platform for fashion designers to tell their stories and enhance their creativity on the runway.
              </p>
              <p>
                We orchestrate groundbreaking fashion events including <strong className="text-white font-medium">ARCADE FASHION WEEKEND, IBADAN BRIDAL FASHION SHOW, ESTILO LUZ KIDS AND TEEN FASHION SHOW, URBAN STYLE FASHION SHOW, THE BRIDAL FASHION WEEKEND, LAGOS BRIDAL FASHION EXPERIENCE, AND EL AMOR FASHION TOUR.</strong>
              </p>
            </article>

            <div className="pt-4">
              <Link
                to="/apply-designer"
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-full bg-gold-400 text-black font-semibold hover:bg-white transition duration-300"
              >
                <span>Join Our Network</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full border-t border-zinc-800/60">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Strategic Objectives
          </span>
          <h2 className="text-3xl font-serif text-white font-bold mt-2">
            Our Core Pillars & Goals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 shadow-xl hover:border-gold-400/40 transition-all duration-300 group"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">
                Pillar 0{idx + 1}
              </span>
              <h3 className="text-xl font-serif text-white font-bold mt-2 group-hover:text-gold-300 transition">
                {goal.title}
              </h3>
              <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">
                {goal.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;