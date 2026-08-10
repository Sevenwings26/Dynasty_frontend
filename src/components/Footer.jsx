import React from "react";
import { Link } from "react-router-dom";
import arcadedynasty from "../assets/logo/arcadedynasty.png";
import { FaXTwitter, FaFacebookF, FaPinterestP, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-noir-900 border-t border-zinc-800/80 text-zinc-400 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-800/60">
          
          {/* Brand Info & Mission */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={arcadedynasty}
                alt="Arcade Dynasty"
                className="h-10 w-auto filter invert brightness-200"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md font-light">
              Elevating African & international fashion architecture. Discover runway showcases, couture narratives, emerging designer spotlights, and luxury culture with Arcade Dynasty.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-gold-400/20 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-gold-400 transition duration-300"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-gold-400/20 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-gold-400 transition duration-300"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-gold-400/20 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-gold-400 transition duration-300"
              >
                <FaPinterestP className="text-sm" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-gold-400/20 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-gold-400 transition duration-300"
              >
                <FaXTwitter className="text-sm" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-gold-400/20 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-gold-400 transition duration-300"
              >
                <FaYoutube className="text-sm" />
              </a>
              <a
                href="https://wa.me/2349025588836"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-gold-400/20 border border-zinc-700/60 flex items-center justify-center text-zinc-300 hover:text-gold-400 transition duration-300"
              >
                <FaWhatsapp className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-200">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="footer-links">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/designers" className="footer-links">
                  Featured Designers
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-links">
                  Event Galleries
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-links">
                  Editorial Blogs
                </Link>
              </li>
              <li>
                <Link to="/must-read" className="footer-links">
                  Must Read
                </Link>
              </li>
            </ul>
          </div>

          {/* Designer & Connect Links */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-200">
              Portals & Inquiries
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/apply-designer" className="footer-links text-gold-400 font-medium">
                  Apply as a Designer
                </Link>
              </li>
              <li>
                <a href="tel:+2349025588836" className="footer-links">
                  Direct Line: +234 902 558 8836
                </a>
              </li>
              <li>
                <a href="mailto:info@arcadedynasty.com" className="footer-links">
                  Email: info@arcadedynasty.com
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                to="/apply-designer"
                className="inline-block text-xs uppercase tracking-widest px-5 py-2.5 rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/30 hover:bg-gold-400 hover:text-black transition duration-300"
              >
                Join Runway Showcase
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-light">
          <p>&copy; {new Date().getFullYear()} Arcade Dynasty. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

