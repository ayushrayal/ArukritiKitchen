import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { ZOMATO_URL } from "../constants/config";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for visual border/opacity updates
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/menu", label: "Menu" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/85 border-b border-white/10 shadow-lg py-4"
          : "bg-transparent border-b border-transparent py-6"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Elegant Logo */}
        <Link to="/" className="flex flex-col items-start select-none">
          <span className="text-xl md:text-2xl font-bold font-serif tracking-widest text-white hover:text-brand-orange transition-colors duration-300">
            ARUKRITI
          </span>
          <span className="text-[8px] md:text-[9px] tracking-[0.3em] font-medium text-brand-orange uppercase -mt-0.5">
            Cloud Kitchen
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium font-sans uppercase tracking-wider hover:text-brand-orange transition-colors duration-300 relative py-1 ${
                  isActive ? "text-brand-orange" : "text-gray-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Zomato CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={ZOMATO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-orange text-black px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest font-sans transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,138,0,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            <span>Order Now</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-brand-orange p-1 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-[#050505]/95 border-b border-white/10 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold font-serif tracking-wider uppercase ${
                      isActive ? "text-brand-orange" : "text-white"
                    } hover:text-brand-orange transition-colors py-2 border-b border-white/5`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <a
                href={ZOMATO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-3 bg-brand-orange text-black py-4 rounded-xl text-sm font-semibold uppercase tracking-widest transition-all hover:bg-white"
              >
                <span>Order on Zomato</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
