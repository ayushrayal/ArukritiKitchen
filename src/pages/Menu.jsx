import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { foods } from "../data/foods";
import FoodCard from "../components/FoodCard";

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories list dynamically
  const categories = ["All", ...new Set(foods.map((food) => food.category))];

  // Filter food items based on category selection and search query
  const filteredFoods = foods.filter((food) => {
    const matchesCategory = selectedCategory === "All" || food.category === selectedCategory;
    const matchesSearch =
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-grow pt-32 pb-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase font-sans mb-3 block">
            Arukriti Menu
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
            Gourmet Comfort Food
          </h1>
          <div className="h-[2px] w-20 bg-brand-orange mx-auto mb-6" />
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
            Browse our list of high-quality Indian, Chinese, and comfort combos. Fresh ingredients, cooked daily, delivered instantly.
          </p>
        </div>

        {/* Filters and Search Container */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 w-full">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-3 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider font-sans transition-all duration-350 shrink-0 ${
                  selectedCategory === cat
                    ? "bg-brand-orange text-black shadow-[0_0_15px_rgba(255,138,0,0.35)]"
                    : "bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-[350px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Paneer, Momos)..."
              className="w-full bg-[#0a0a0a] text-white border border-white/10 rounded-xl px-5 py-3 pl-12 text-sm font-sans focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Foods Grid */}
        <AnimatePresence mode="popLayout">
          {filteredFoods.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {filteredFoods.map((food) => (
                <motion.div
                  key={food.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <FoodCard food={food} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Empty State
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-24 border border-dashed border-white/10 rounded-3xl bg-white/2 max-w-xl mx-auto"
            >
              <span className="text-4xl mb-4 block">🔍</span>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">
                No Dishes Found
              </h3>
              <p className="text-gray-500 font-sans text-sm px-6 leading-relaxed">
                We couldn't find any dishes matching "{searchQuery}" in our {selectedCategory !== "All" ? `${selectedCategory} category` : "menu"}. Try refining your search parameters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-6 text-xs font-semibold uppercase tracking-widest font-sans text-brand-orange border border-brand-orange/30 px-5 py-2.5 rounded-xl hover:bg-brand-orange hover:text-black transition-all duration-300"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Menu;
