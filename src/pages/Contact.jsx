import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "../constants/config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto dismiss success screen after 6 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    }, 1500);
  };

  const contactCards = [
    {
      icon: <Phone className="text-brand-orange" size={22} />,
      title: "Call Us",
      desc: "For general brand inquiries or direct corporate catering orders.",
      detail: PHONE_NUMBER,
      link: `tel:${PHONE_NUMBER}`
    },
    {
      icon: <MessageSquare className="text-brand-orange" size={22} />,
      title: "WhatsApp Chat",
      desc: "Immediate chat assistance for corporate orders or feedback.",
      detail: PHONE_NUMBER,
      link: `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`
    },
    {
      icon: <Mail className="text-brand-orange" size={22} />,
      title: "Email Support",
      desc: "Write to us for partnerships, media, or direct feedbacks.",
      detail: "hello@arukritikitchen.com",
      link: "mailto:hello@arukritikitchen.com"
    },
    {
      icon: <Clock className="text-brand-orange" size={22} />,
      title: "Kitchen Hours",
      desc: "Operational dispatch schedules for Zomato delivery routes.",
      detail: "11:00 AM - 11:00 PM (Daily)",
      link: null
    }
  ];

  return (
    <div className="flex-grow pt-32 pb-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase font-sans mb-3 block">
            Contact Arukriti
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
            Get In Touch
          </h1>
          <div className="h-[2px] w-20 bg-brand-orange mx-auto mb-6" />
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
            Have questions about catering orders, feedback, or collaborations? Contact our culinary headquarters.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, idx) => {
            const Wrapper = card.link ? "a" : "div";
            const props = card.link
              ? {
                  href: card.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "glass-card p-6 rounded-2xl text-left flex flex-col justify-between h-full group"
                }
              : { className: "glass-card p-6 rounded-2xl text-left flex flex-col justify-between h-full cursor-default" };

            return (
              <Wrapper key={idx} {...props}>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h2 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                    {card.title}
                  </h2>
                  <p className="text-gray-400 font-sans text-xs leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>
                <span className="text-sm font-semibold text-brand-orange font-sans break-all select-all">
                  {card.detail}
                </span>
              </Wrapper>
            );
          })}
        </div>

        {/* Legal & FSSAI Details Banner */}
        <div className="glass-card p-6 md:p-8 rounded-3xl text-left border border-white/5 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="text-brand-orange" size={20} />
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1 font-sans">Kitchen Address</h2>
              <p className="text-white font-sans text-sm leading-relaxed">
                99 B, Hathibarkala Rajpur Road, Near Axis Bank, Hathibarkala Salwala, Dehradun
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 border-t border-white/5 md:border-t-0 md:border-l md:border-white/5 md:pl-6 pt-6 md:pt-0">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-brand-orange font-serif font-bold text-lg">T</span>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1 font-sans">Legal Entity</h2>
              <p className="text-white font-serif font-bold text-base leading-relaxed">
                The Gateway Trust
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 border-t border-white/5 md:border-t-0 md:border-l md:border-white/5 md:pl-6 pt-6 md:pt-0">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-brand-orange font-serif font-bold text-xs">FSSAI</span>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1 font-sans">FSSAI License</h2>
              <p className="text-white font-mono font-bold text-sm tracking-wider leading-relaxed">
                2261030000739
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Form */}
          <div className="lg:col-span-6 glass-card p-8 md:p-10 rounded-3xl text-left flex flex-col justify-between relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h2 className="text-xl md:text-2xl font-bold font-serif text-white mb-6">
                    Send Us A Message
                  </h2>
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2 font-sans">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-black/40 border ${
                        errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-brand-orange"
                      } rounded-xl px-5 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600 text-white`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1.5 font-sans">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2 font-sans">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-black/40 border ${
                        errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-brand-orange"
                      } rounded-xl px-5 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600 text-white`}
                      placeholder="johndoe@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1.5 font-sans">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2 font-sans">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full bg-black/40 border ${
                        errors.subject ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-brand-orange"
                      } rounded-xl px-5 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600 text-white`}
                      placeholder="Partnership inquiry, Feedback..."
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1.5 font-sans">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2 font-sans">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className={`w-full bg-black/40 border ${
                        errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-brand-orange"
                      } rounded-xl px-5 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all placeholder:text-gray-600 text-white resize-none`}
                      placeholder="How can we assist you?"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1.5 font-sans">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-orange hover:bg-white text-black font-semibold uppercase tracking-widest text-xs px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                // Success State View
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="text-brand-orange mb-6 animate-bounce" size={56} />
                  <h2 className="text-2xl font-serif font-bold text-white mb-3">
                    Message Sent Successfully
                  </h2>
                  <p className="text-gray-400 font-sans text-sm max-w-sm leading-relaxed mb-6">
                    Thank you for reaching out to Arukriti. Our culinary support team has received your message and will respond via email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-xs font-semibold uppercase tracking-widest font-sans text-brand-orange border border-brand-orange/30 px-5 py-2.5 rounded-xl hover:bg-brand-orange hover:text-black transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-6 glass-card rounded-3xl overflow-hidden min-h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.842797686522!2d78.051939!3d30.344445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929be85a9bc83%3A0xe54e6ffb18cd462f!2sAxis+Bank+ATM%2C+Hathibarkala%2C+Dehradun!5e0!3m2!1sen!2sin!4v1717228800000!5m2!1sen!2sin"
              className="w-full h-full border-none opacity-60 grayscale invert"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arukriti Cloud Kitchen Google Map Location"
            ></iframe>
            
            {/* Embedded Location Label Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#050505]/95 border border-white/10 p-5 rounded-2xl flex items-start gap-4 backdrop-blur-md">
              <MapPin className="text-brand-orange shrink-0 mt-0.5" size={18} />
              <div className="text-left">
                <h2 className="text-white font-serif font-bold text-sm">Headquarters Location</h2>
                <p className="text-gray-400 font-sans text-xs mt-1 leading-relaxed">
                  99 B, Hathibarkala Rajpur Road, Near Axis Bank, Hathibarkala Salwala, Dehradun
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
