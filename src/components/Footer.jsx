import React from "react";
import { Link } from "react-router-dom";
import arcadedynasty from "../assets/logo/arcadedynasty.png";
import { FaXTwitter, FaFacebookF, FaPinterestP, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="common-bg">
      <div className="text-center pt-5 pb-6 px-4 md:px-36">
        {" "}
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
          {" "}
          <div className="w-full md:w-2/5 mb-2 md:mb-0 text-center md:text-left">
            <div className="mb-4">
              <img
                src={arcadedynasty}
                alt="Arcade Media"
                className="mx-auto md:mx-0"
              />{" "}
              <p className="hidden md:block">
                The latest fashion trends, beauty tips, celebrity styles,
                fashion week highlights, cultural critiques, and videos on
                ARCCADE DYNASTY.
              </p>
            </div>

            <div className="social-icons w-full flex flex-wrap justify-center gap-3 md:gap-6 black" >
              <Link
                to="https://facebook.com"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl"
                color="#000000" />
              </Link>
              <Link
                to="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterestP className="text-2xl" 
                color="#000000"
                />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl"
                color="#000000"
                />
              </Link>
              <Link
                to="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-2xl" 
                color="#000000"
                />
              </Link>
              <Link
                to="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-2xl" 
                color="#000000"
                />
              </Link>
              <Link
                to="https://wa.me/2349025588836"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <FaWhatsapp className="text-2xl" 
                color="#000000"
                />
              </Link>
            </div>
            <div className="mx-auto md:mx-0 pt-2">
                <a href="tel:+2349025588836" 
                >
                <p className="text-black">+234-9025588836</p>
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/6 md:mt-0 flex flex-col md:flex-row md:justify-between text-center md:text-left">
            <div className="md:mb-0">
              <Link to="/about" className="footer-links">
                About Us
              </Link>
              <br />
              <Link to="" className="footer-links">
                Contact
              </Link>
              <br />
              <Link to="" className="footer-links">
                Sponsors
              </Link>
              <br />
              <Link to="" className="footer-links">
                Designers
              </Link>
            </div>
            <div>
              <Link to="/apply-designer" className="footer-links">
                Designer Application
              </Link>
              <br />
              <Link to="/gallery" className="footer-links">
                Gallery
              </Link>
              <br />
              <Link to="/blog" className="footer-links">
                Blog
              </Link>
              <br />
              <Link to="" className="footer-links">
                Buy Ticket
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 border-t-2 w-full flex flex-col items-center">
        <p className="text-black text-sm">
          &copy; 2025 Arcade Media. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
