import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AxiosInstance from "../api/AxiosInstance";
import arcadedynasty from "../assets/logo/arcadedynasty.png";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setIsLoggedIn(true);
      const storedUsername = localStorage.getItem("Username");
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        AxiosInstance.get("user/")
          .then((response) => {
            setUsername(response.data.username);
            localStorage.setItem("Username", response.data.username);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Username");
    setIsLoggedIn(false);
    setUsername(null);
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Designers", path: "/designers" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={arcadedynasty} 
              alt="Arcade Dynasty" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 relative py-1 ${
                  isActive(link.path)
                    ? "text-gold-700 font-semibold"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-700 rounded-full animate-fade-in" />
                )}
              </Link>
            ))}

            {/* Designer Application CTA */}
            <Link
              to="/apply-designer"
              className="text-xs uppercase tracking-[0.15em] px-4 py-2 rounded-full border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300"
            >
              Apply as Designer
            </Link>

            {/* Auth Buttons */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-4 pl-4 border-l border-zinc-200">
                <span className="text-xs tracking-wider px-3 py-1 rounded-full bg-gold-700/10 text-gold-700 border border-gold-700/20 font-medium">
                  {username}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-xs uppercase tracking-wider text-zinc-500 hover:text-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-5 pl-4 border-l border-zinc-200">
                <Link
                  to="/login"
                  className="text-xs uppercase tracking-[0.15em] text-zinc-600 hover:text-zinc-950 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-xs uppercase tracking-[0.15em] bg-zinc-900 text-white px-4 py-2 rounded-full font-medium hover:bg-zinc-800 transition duration-300 shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-800 hover:text-zinc-950 focus:outline-none p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-zinc-200/80 px-4 pt-4 pb-6 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm uppercase tracking-widest py-2 px-3 rounded-lg transition ${
                isActive(link.path)
                  ? "bg-zinc-100 text-gold-700 font-semibold"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/apply-designer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center text-xs uppercase tracking-widest py-2.5 px-4 rounded-lg border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white transition"
          >
            Apply as Designer
          </Link>
          {isLoggedIn ? (
            <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
              <span className="text-xs text-gold-700 font-semibold">{username}</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLogout();
                }}
                className="text-xs uppercase tracking-wider text-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="pt-4 border-t border-zinc-200 grid grid-cols-2 gap-3">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-xs uppercase tracking-wider py-2 rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-xs uppercase tracking-wider py-2 rounded-lg bg-zinc-900 text-white font-semibold hover:bg-zinc-800"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;

