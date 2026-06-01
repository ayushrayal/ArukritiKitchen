import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ZOMATO_URL } from "../constants/config";

const FoodCard = ({ food }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass-card overflow-hidden rounded-2xl flex flex-col h-full group"
    >
      {/* Food Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-65" />
        
        {/* Floating tags */}
        {food.tags && food.tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {food.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-brand-orange text-black font-sans shadow-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2 mb-3">
          <h3 className="text-xl font-semibold font-serif text-white group-hover:text-brand-orange transition-colors duration-300">
            {food.name}
          </h3>
          <span className="text-lg font-bold text-brand-orange shrink-0">
            ₹{food.price}
          </span>
        </div>

        <p className="text-gray-400 text-sm font-sans mb-6 line-clamp-3 flex-grow leading-relaxed">
          {food.description}
        </p>

        {/* Action Button */}
        <a
          href={ZOMATO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-brand-orange bg-transparent text-white font-sans text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-brand-orange hover:text-black group/btn active:scale-95"
        >
          <span>Order on Zomato</span>
          <ExternalLink size={15} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          
          {/* Subtle sheen animation */}
          <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </a>
      </div>
    </motion.div>
  );
};

export default FoodCard;
