
import React from 'react';
import Portfolio from '../components/Portfolio';

const PortfolioPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            Our <span className="gradient-text">Work.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A curated collection of branding, digital experiences, and cinematic storytelling crafted for the bold.
          </p>
        </div>
      </section>
      <Portfolio />
    </div>
  );
};

export default PortfolioPage;
