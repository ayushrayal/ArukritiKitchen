import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  DollarSign,
  Truck,
  Heart,
  Star,
  MapPin,
  Phone,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { foods } from "../data/foods";
import { reviews } from "../data/reviews";
import { galleryItems } from "../data/gallery";
import { ZOMATO_URL, PHONE_NUMBER } from "../constants/config";
import FoodCard from "../components/FoodCard";

const Home = () => {
  // Get featured foods
  const featuredDishes = foods.filter((food) => food.featured).slice(0, 3);
  
  // Get first 4 gallery items for preview
  const galleryPreview = galleryItems.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const features = [
    {
      icon: <Leaf className="text-brand-orange" size={28} />,
      title: "Fresh Ingredients",
      desc: "Vegetables and spices handpicked daily to ensure rich, authentic homemade flavors."
    },
    {
      icon: <ShieldCheck className="text-brand-orange" size={28} />,
      title: "Hygienic Preparation",
      desc: "Prepared in a state-of-the-art kitchen under sanitization controls and strict safety guidelines."
    },
    {
      icon: <DollarSign className="text-brand-orange" size={28} />,
      title: "Affordable Pricing",
      desc: "Restaurant-quality gourmet experiences delivered to your doorstep without breaking the bank."
    },
    {
      icon: <Truck className="text-brand-orange" size={28} />,
      title: "Fast Delivery",
      desc: "Seamless ordering routes dispatch your meals piping hot via our delivery partners."
    },
    {
      icon: <Heart className="text-brand-orange" size={28} />,
      title: "Customer Satisfaction",
      desc: "Our priority is to create culinary moments that bring comfort and warmth to your table."
    }
  ];

  return (
    <div className="flex-grow pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-[#050505] overflow-hidden px-6 md:px-12">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=70&fm=webp"
            alt="Premium North Indian Feast"
            width={1600}
            height={900}
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-left flex flex-col items-start"
          >
            {/* Tagline */}
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-brand-orange uppercase bg-brand-orange/10 px-4 py-1.5 rounded-full mb-6 font-sans">
              Dehradun's Premium Cloud Kitchen
            </span>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-[1.1] mb-6">
              Fresh Flavours. <br />
              <span className="text-brand-orange text-glow">Homemade Comfort.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-gray-300 text-base md:text-xl font-sans leading-relaxed mb-8 max-w-xl">
              Serving premium North Indian curries, Indo-Chinese street food, and authentic homemade comfort meals across Dehradun.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={ZOMATO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-brand-orange text-black px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest font-sans hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,138,0,0.4)] group"
              >
                <span>Order on Zomato</span>
                <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                to="/menu"
                className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest font-sans transition-all duration-300 hover:border-brand-orange"
              >
                <span>View Menu</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Large Hero Side Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative p-3 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm box-glow">
              <img
                src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=75&fm=webp"
                alt="Signature Dish Showcase"
                width={800}
                height={450}
                fetchPriority="high"
                loading="eager"
                className="rounded-xl w-full h-[450px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#0a0a0a] border border-white/10 px-6 py-4 rounded-xl flex items-center gap-3">
                <span className="text-3xl">🍲</span>
                <div className="text-left">
                  <p className="text-white font-serif font-semibold text-sm">Gourmet Hygiene</p>
                  <p className="text-xs text-brand-orange font-sans">100% Fresh Daily</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT BRAND SECTION */}
      <section className="py-24 px-6 md:px-12 bg-[#090909]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <img
                src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=75&fm=webp"
                alt="Chef Prepping Dal"
                width={600}
                height={280}
                loading="lazy"
                className="rounded-2xl object-cover h-[280px] w-full border border-white/5"
              />
              <div className="glass-card p-6 rounded-2xl text-center flex flex-col items-center justify-center">
                <span className="text-3xl font-serif font-bold text-brand-orange">100%</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 font-sans mt-1">Freshly Made</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4 pt-8"
            >
              <div className="bg-brand-orange/5 border border-brand-orange/10 p-6 rounded-2xl text-center flex flex-col items-center justify-center">
                <span className="text-3xl font-serif font-bold text-brand-orange">5★</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 font-sans mt-1">Zomato Rating</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=600&q=75&fm=webp"
                alt="Crispy Appetizers"
                width={600}
                height={280}
                loading="lazy"
                className="rounded-2xl object-cover h-[280px] w-full border border-white/5"
              />
            </motion.div>
          </div>

          {/* Right Side: Text */}
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase font-sans mb-3 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight">
              Crafting Delicacies <br />
              With Love And Care
            </h2>
            <div className="h-[2px] w-16 bg-brand-orange mb-6" />
            <p className="text-gray-300 font-sans leading-relaxed mb-6">
              Arukriti Cloud Kitchen started in Dehradun with a simple mission: to serve real, comforting, and high-quality food prepared with the exact same sanitization and care as a home kitchen. 
            </p>
            <p className="text-gray-400 font-sans leading-relaxed mb-8">
              We specialize in North Indian favorites like buttery curries and combos, fresh Chinese street bites, and everyday comfort breads. By operating exclusively as a cloud kitchen, we prioritize pure ingredient quality, culinary hygiene, and lightning-fast dispatch to your home.
            </p>
            
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-brand-orange hover:text-white font-sans text-sm font-semibold tracking-wider uppercase group"
            >
              <span>Explore Our Kitchen Ethics</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED DISHES SECTION */}
      <section className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 text-left">
            <div>
              <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase font-sans mb-3 block">
                Signature Selection
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-white">
                Our Signature Dishes
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-brand-orange text-white px-6 py-3 rounded-xl text-sm font-semibold font-sans uppercase tracking-widest transition-all duration-300"
            >
              <span>Explore Full Menu</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Grid mapping FoodCards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-24 px-6 md:px-12 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase font-sans mb-3 block">
              The Arukriti Standard
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
              Why Choose Us?
            </h2>
            <div className="h-[2px] w-16 bg-brand-orange mx-auto mb-6" />
            <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
              We stand apart by prioritizing hygiene, pricing transparency, and authentic flavors above everything else.
            </p>
          </div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-8 rounded-2xl text-left flex flex-col items-start h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-3">
                  {feat.title}
                </h3>
                <p className="text-gray-400 font-sans text-xs leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. REVIEWS SECTION */}
      <section className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase font-sans mb-3 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
              What Our Customers Say
            </h2>
            <div className="h-[2px] w-16 bg-brand-orange mx-auto" />
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: rev.id * 0.1 }}
                className="glass-card p-8 rounded-2xl text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-brand-orange mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 font-sans italic text-sm leading-relaxed mb-6">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-serif font-bold text-sm">
                      {rev.name}
                    </h3>
                    <p className="text-gray-500 font-sans text-xs">
                      {rev.role}
                    </p>
                  </div>
                  <span className="text-[10px] text-gray-600 font-sans">
                    {rev.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GALLERY PREVIEW SECTION */}
      <section className="py-24 px-6 md:px-12 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 text-left">
            <div>
              <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase font-sans mb-3 block">
                Visual Showcase
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-white">
                Food Gallery Preview
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-brand-orange hover:text-white font-sans text-sm font-semibold tracking-wider uppercase group"
            >
              <span>View Full Gallery</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Grid Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPreview.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl aspect-square border border-white/5 group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="text-[10px] uppercase tracking-widest text-brand-orange font-semibold mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-white font-serif font-bold text-base leading-snug">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LOCATION SECTION */}
      <section className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-white/5">
            {/* Info Card */}
            <div className="lg:col-span-5 p-8 md:p-12 text-left flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase font-sans mb-3 block">
                  Find Us
                </span>
                <h2 className="text-2xl md:text-4xl font-bold font-serif text-white mb-6">
                  Based in Dehradun
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-brand-orange shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-white font-semibold font-sans text-sm">Kitchen Location</p>
                      <p className="text-gray-400 font-sans text-xs mt-1 leading-relaxed">
                        99 B, Hathibarkala Rajpur Road, Near Axis Bank, Hathibarkala Salwala, Dehradun
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-brand-orange shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-white font-semibold font-sans text-sm">Direct Phone Inquiry</p>
                      <p className="text-gray-400 font-sans text-xs mt-1">
                        {PHONE_NUMBER}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call CTA Button */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-sans font-semibold uppercase tracking-widest text-xs px-6 py-4 rounded-xl transition-all duration-300"
                >
                  <Phone size={14} />
                  <span>Call Kitchen Directly</span>
                </a>
              </div>
            </div>

            {/* Map Container */}
            <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[300px] relative">
              {/* Premium Dark Theme Embedded Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.842797686522!2d78.051939!3d30.344445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929be85a9bc83%3A0xe54e6ffb18cd462f!2sAxis+Bank+ATM%2C+Hathibarkala%2C+Dehradun!5e0!3m2!1sen!2sin!4v1717228800000!5m2!1sen!2sin"
                className="w-full h-full border-none opacity-60 grayscale invert"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arukriti Cloud Kitchen Location Map"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#090909]">
        {/* Subtle orange accent lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-bold font-serif text-white mb-6 leading-tight">
            Hungry? Let Arukriti Take Care Of It.
          </h2>
          <p className="text-gray-400 font-sans text-base md:text-lg mb-8 max-w-xl mx-auto">
            Order fresh, clean, and aromatic gourmet home comfort meals. Delivered hot to your location via Zomato.
          </p>
          
          <a
            href={ZOMATO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-orange text-black px-10 py-4.5 rounded-xl text-sm font-semibold uppercase tracking-widest font-sans hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(255,138,0,0.5)] group"
          >
            <span>Order on Zomato</span>
            <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
