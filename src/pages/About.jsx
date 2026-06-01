import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Heart, Eye } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Sparkles className="text-brand-orange" size={24} />,
      title: "Gourmet Ingredients",
      description: "We source our spices whole and grind them in-house, select premium cottage cheese daily, and use pure ghee and cold-pressed oils."
    },
    {
      icon: <ShieldCheck className="text-brand-orange" size={24} />,
      title: "Sterilized Environment",
      description: "Our kitchen underwent strict sanitization protocols. Temperature logging, UV sanitization, and masking are mandatory for all team members."
    },
    {
      icon: <Eye className="text-brand-orange" size={24} />,
      title: "Full Transparency",
      description: "We don't hide behind closed doors. We buy only certified fresh produce, pack vacuum-sealed, and provide complete batch tracking details."
    },
    {
      icon: <Heart className="text-brand-orange" size={24} />,
      title: "True Homemade Comfort",
      description: "No artificial colors, MSG, or heavy preservatives. Every dish is seasoned carefully to be light, healthy, and digestively comforting."
    }
  ];

  return (
    <div className="flex-grow pt-32 pb-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase font-sans mb-3 block"
          >
            Behind the Taste
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold font-serif text-white mb-6"
          >
            The Soul of Arukriti
          </motion.h1>
          <div className="h-[2px] w-20 bg-brand-orange mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 font-sans text-base md:text-lg leading-relaxed"
          >
            A dedicated cloud kitchen brand delivering purity, warmth, and high-end restaurant quality straight to Dehradun homes.
          </motion.p>
        </div>

        {/* Brand Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <h2 className="text-2xl md:text-4xl font-bold font-serif text-white leading-tight">
              Our Journey: From A Small Kitchen To Dehradun's Favourite Brand
            </h2>
            <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed">
              Arukriti Cloud Kitchen was conceived by a team of food enthusiasts who realized that finding authentic, hygienic, and premium everyday comfort meals in Dehradun was surprisingly difficult. Most delivery options were either excessively greasy or compromised on kitchen hygiene.
            </p>
            <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
              We decided to build a pure delivery-only brand that leverages professional culinary processes. Operating strictly as a cloud kitchen allows us to funnel our resources directly into sourcing higher quality ingredients (like premium paneer, hand-ground masalas, and high-grade basmati rice) and maintaining clinical hygiene levels.
            </p>
            <div className="glass p-6 rounded-2xl border-l-4 border-brand-orange mt-6">
              <p className="text-gray-300 font-sans text-sm italic">
                "Our philosophy is simple: we never cook or serve anything that we wouldn't happily feed our own children. Every dish is a representation of pure homestyle comfort."
              </p>
              <p className="text-brand-orange font-sans font-bold text-xs uppercase tracking-wider mt-3">
                — The Culinary Team, Arukriti
              </p>
            </div>
          </motion.div>

          {/* Image content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative p-2 border border-white/10 rounded-2xl bg-white/5 box-glow">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=75&fm=webp"
                alt="Plated North Indian combo"
                width={800}
                height={400}
                loading="lazy"
                className="rounded-xl w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Pillars / Ethics Grid */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase font-sans mb-3 block">
              Core Ethics
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-serif text-white">
              The Kitchen Standards We Live By
            </h2>
            <div className="h-[2px] w-16 bg-brand-orange mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl text-left flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-gray-400 font-sans text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Safety standards showcase banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-left border border-white/10"
        >
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=75&fm=webp"
              alt="Clean luxury kitchen"
              width={1200}
              height={600}
              loading="lazy"
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-orange font-sans px-3 py-1 bg-brand-orange/10 rounded-full">
              SOP Protocol
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-serif text-white">
              Clinical Sanitation Controls
            </h2>
            <p className="text-gray-300 font-sans text-sm leading-relaxed">
              We employ thorough checklists at every step. Fresh ingredients undergo triple-stage washing. Cooking utensils are high-temperature steam cleaned after every order cycle. Our packaging is sealed in clean air zones to ensure it arrives at your table exactly as it left our pans.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
              <div className="border-l border-brand-orange pl-4">
                <h3 className="text-white font-serif font-bold text-base">Triple-Wash</h3>
                <p className="text-gray-500 font-sans text-xs mt-1">Fresh Greens</p>
              </div>
              <div className="border-l border-brand-orange pl-4">
                <h3 className="text-white font-serif font-bold text-base">Steam Cleaned</h3>
                <p className="text-gray-500 font-sans text-xs mt-1">Gourmet Pans</p>
              </div>
              <div className="border-l border-brand-orange pl-4">
                <h3 className="text-white font-serif font-bold text-base">100% Sealed</h3>
                <p className="text-gray-500 font-sans text-xs mt-1">Delivery Bags</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
