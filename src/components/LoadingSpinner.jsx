import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-[50vh] bg-[#050505]">
      <div className="relative w-16 h-16 mb-4">
        {/* Outer Ring with brand orange color */}
        <div className="absolute inset-0 rounded-full border-2 border-brand-orange/20"></div>
        {/* Spinning arc */}
        <div className="absolute inset-0 rounded-full border-2 border-t-brand-orange border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        {/* Glowing effect background */}
        <div className="absolute inset-2 rounded-full bg-brand-orange/5 blur-sm"></div>
      </div>
      <div className="flex flex-col items-center select-none animate-pulse-slow">
        <span className="text-sm font-bold font-serif tracking-[0.2em] text-white">
          ARUKRITI
        </span>
        <span className="text-[7px] tracking-[0.3em] font-medium text-brand-orange uppercase -mt-0.5">
          Cloud Kitchen
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
