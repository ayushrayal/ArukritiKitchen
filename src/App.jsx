import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import "./App.css";

// Lazy-loaded pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Menu = lazy(() => import("./pages/Menu"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

// Scroll Restoration & Canonical SEO Utility: Resets scroll and updates canonical URL
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    
    // Dynamic Canonical link update for SEO optimization
    const canonicalLink = document.getElementById("canonical-link");
    if (canonicalLink) {
      const baseUrl = "https://arukritikitchen.com";
      const cleanPath = pathname === "/" ? "" : pathname;
      canonicalLink.setAttribute("href", `${baseUrl}${cleanPath}`);
    }
  }, [pathname]);

  return null;
};

// Route wrapper for page fade transitions
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
};

// Animated routes controller
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/menu"
          element={
            <PageWrapper>
              <Menu />
            </PageWrapper>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageWrapper>
              <Gallery />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        {/* Fallback Redirect */}
        <Route
          path="*"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Navbar stays sticky across pages */}
      <Navbar />
      
      {/* Dynamic page routes lazy-loaded inside Suspense fallback wrapper */}
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatedRoutes />
      </Suspense>
      
      {/* Footer stays at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;
