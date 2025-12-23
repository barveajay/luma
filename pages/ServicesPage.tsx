
import React from 'react';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            Full Spectrum <br /><span className="gradient-text">Capabilities.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From initial strategy to final render, we provide end-to-end solutions that scale businesses and build lasting legacies.
          </p>
        </div>
      </section>

      <Services />

      {/* Our Process */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">The Workflow</h2>
            <h3 className="text-4xl font-black text-white">How We <span className="text-blue-500">Bring Ideas to Life</span></h3>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: '01', title: 'Discovery', desc: 'Deep dive into your brand, audience, and industry landscape.' },
                { step: '02', title: 'Strategy', desc: 'Creating a data-backed blueprint for your digital presence.' },
                { step: '03', title: 'Execution', desc: 'High-end production and technical development phases.' },
                { step: '04', title: 'Optimization', desc: 'Analyzing results and iterating for maximum impact.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-950 p-8 rounded-3xl border border-slate-800 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
