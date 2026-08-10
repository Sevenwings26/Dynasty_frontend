import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import designerEllipse from "../assets/images/designerEllipse.jpg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Subscribe = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "Thank you for joining the Arcade Dynasty Gazette.",
      confirmButtonColor: "#D4AF37",
    });
    setFullName("");
    setEmail("");
  };

  return (
    <div className="max-w-7xl mx-auto my-12 px-4">
      <div className="relative rounded-3xl overflow-hidden bg-noir-800 border border-zinc-800 shadow-2xl flex flex-col md:flex-row">
        
        {/* Form Container */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Arcade Gazette
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white mt-2">
            Stay Connected
          </h2>
          <p className="text-zinc-400 text-sm mt-2 font-light leading-relaxed">
            Receive exclusive invitations, runway announcements, and editorial fashion insights delivered directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="full-name" className="block text-xs uppercase tracking-wider text-zinc-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full bg-zinc-900/80 border border-zinc-700/70 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-zinc-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className="w-full bg-zinc-900/80 border border-zinc-700/70 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gold-400 text-black font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center space-x-2 hover:bg-white transition duration-300 shadow-glow-gold"
            >
              <span>Subscribe Now</span>
              <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Visual Media Container */}
        <div className="hidden md:flex w-1/2 bg-zinc-950/60 p-12 flex-col justify-center items-center relative border-l border-zinc-800/80">
          <div className="relative group cursor-pointer">
            <img
              src={designerEllipse}
              alt="Designer Showcase"
              className="rounded-full w-56 h-56 object-cover border-2 border-gold-400/40 shadow-glow-gold transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gold-400/10 opacity-0 group-hover:opacity-100 transition duration-500" />
          </div>

          <div className="mt-8 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 block mb-1">
              Arcade Runway Portal
            </span>
            <Link
              to="/designers"
              className="inline-flex items-center space-x-2 text-sm font-serif text-gold-400 hover:text-white transition duration-300"
            >
              <span>Meet Featured Designers</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Subscribe;

