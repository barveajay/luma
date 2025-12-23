
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070" 
          alt="Digital Agency Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">Next-Gen Digital Solutions</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
          Everything You Need to <br />
          <span className="gradient-text">Build Your Legacy.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Expert Digital Marketing, Branding, and Videography Solutions 
          tailored to elevate your brand in the digital age.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/30"
          >
            View Our Work
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/5 text-white font-bold rounded-full border-2 border-white/20 uppercase tracking-widest transition-all hover:border-white/40"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-[10px] uppercase tracking-widest font-medium opacity-60">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
