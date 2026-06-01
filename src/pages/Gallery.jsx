import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryItems } from "../data/gallery";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  // Categories list
  const categories = ["All", "North Indian", "Chinese", "Combos", "Breads"];

  // Filter gallery items
  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="flex-grow pt-32 pb-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase font-sans mb-3 block">
            Visual Gallery
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
            Gourmet Showroom
          </h1>
          <div className="h-[2px] w-20 bg-brand-orange mx-auto mb-6" />
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
            Feast your eyes on our fresh preparations. Authentic ingredients cooked under maximum hygiene controls.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider font-sans transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-brand-orange text-black shadow-[0_0_15px_rgba(255,138,0,0.3)]"
                  : "bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Food Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl border border-white/5 cursor-pointer group break-inside-avoid-column"
                onClick={() => setActiveImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={450}
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Visual Overlay Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={16} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-orange font-semibold mb-1">
                    {item.category}
                  </span>
                  <h2 className="text-white font-serif font-bold text-base">
                    {item.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Full-Screen Lightbox Pop-up Modal */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm"
              onClick={() => setActiveImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2"
                onClick={() => setActiveImage(null)}
                aria-label="Close Lightbox"
              >
                <X size={28} />
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  width={1200}
                  height={900}
                  className="max-h-[70vh] max-w-full rounded-2xl object-contain border border-white/10"
                />
                <div className="text-center">
                  <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
                    {activeImage.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1">
                    {activeImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Gallery;
