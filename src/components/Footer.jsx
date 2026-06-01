import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER, ZOMATO_URL } from "../constants/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Summary */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex flex-col items-start">
            <span className="text-2xl font-bold font-serif tracking-widest text-white">
              ARUKRITI
            </span>
            <span className="text-[10px] tracking-[0.3em] font-medium text-brand-orange uppercase -mt-0.5">
              Cloud Kitchen
            </span>
          </Link>
          <p className="text-gray-400 font-sans text-sm leading-relaxed mt-2">
            Gourmet comfort food prepared with absolute freshness and zero compromises on hygiene. Relish the comfort of North Indian and Chinese delicacies in Dehradun.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-orange hover:border-brand-orange transition-all duration-300"
              aria-label="Instagram"
            >
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-orange hover:border-brand-orange transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold font-sans uppercase tracking-widest text-white mb-6 border-l-2 border-brand-orange pl-3">
            Quick Navigation
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Brand" },
              { path: "/menu", label: "Gourmet Menu" },
              { path: "/gallery", label: "Food Gallery" },
              { path: "/contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-gray-400 font-sans text-sm hover:text-brand-orange transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Operating Hours */}
        <div>
          <h3 className="text-sm font-semibold font-sans uppercase tracking-widest text-white mb-6 border-l-2 border-brand-orange pl-3">
            Kitchen Hours
          </h3>
          <ul className="flex flex-col gap-4 text-gray-400 font-sans text-sm">
            <li className="flex items-center gap-3">
              <Clock size={16} className="text-brand-orange shrink-0" />
              <div>
                <p className="font-semibold text-white">Daily Operations</p>
                <p className="text-xs text-gray-500">11:00 AM - 11:00 PM</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Serving Area</p>
                <p className="text-xs text-gray-500">Dehradun City & Suburbs</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold font-sans uppercase tracking-widest text-white mb-6 border-l-2 border-brand-orange pl-3">
            Get In Touch
          </h3>
          <ul className="flex flex-col gap-4 text-gray-400 font-sans text-sm">
            <li>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 hover:text-brand-orange transition-colors"
              >
                <Phone size={16} className="text-brand-orange shrink-0" />
                <span>{PHONE_NUMBER}</span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-orange shrink-0" />
              <span className="break-all">hello@arukritikitchen.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
              <span className="leading-relaxed text-xs">
                99 B, Hathibarkala Rajpur Road, Near Axis Bank, Hathibarkala Salwala, Dehradun
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 font-sans text-xs text-center md:text-left space-y-1">
          <p>&copy; {currentYear} Arukriti Cloud Kitchen. All rights reserved.</p>
          <p>Legal Entity: <span className="text-gray-400 font-serif font-semibold">The Gateway Trust</span> | FSSAI Lic No: <span className="text-gray-400 font-mono tracking-wider font-semibold">2261030000739</span></p>
        </div>
        <p className="text-gray-500 font-sans text-xs text-center md:text-right">
          Designed for Luxury Comfort Dining. Redirects to{" "}
          <a
            href={ZOMATO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            Zomato
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
