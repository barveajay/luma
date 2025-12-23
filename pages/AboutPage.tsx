
import React from 'react';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            We are <span className="gradient-text">Lumina.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A collective of digital nomads, creative directors, and data scientists dedicated to the art of modern branding.
          </p>
        </div>
      </section>
      
      <About />

      {/* Our Values */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Radical Transparency', desc: 'We don\'t hide behind buzzwords. You get raw data and honest insights.' },
              { title: 'Human-Centric', desc: 'Algorithms change, but humans don\'t. We design for the person behind the screen.' },
              { title: 'Relentless Innovation', desc: 'If it\'s been done before, we\'re already looking for the next way to break it.' },
            ].map((value, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
                <div className="text-blue-500 text-4xl font-black mb-6">0{idx + 1}</div>
                <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
