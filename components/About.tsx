
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/20 blur-3xl rounded-full" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Creative Team" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl leading-snug">
                  "We don't just build brands; we tell stories that resonate across generations."
                </p>
              </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-8 bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 hidden md:block">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-black text-blue-500">10+</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-blue-500">250+</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Global Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div className="inline-block">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-2">Our Identity</h2>
              <div className="h-1 w-12 bg-blue-600" />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Crafting Unique <span className="text-blue-500">Brand Identities</span> Through Storytelling.
            </h3>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              At Lumina Creative, we believe every brand has a soul. Our mission is to uncover that essence and amplify it through data-driven strategies and immersive multimedia content. 
            </p>

            <div className="space-y-6">
              {[
                { title: 'Data-Driven Strategies', desc: 'We combine creative intuition with raw market data to ensure every campaign hits its mark.' },
                { title: 'Immersive Storytelling', desc: 'From cinematic commercials to social content, we focus on the narrative first.' },
                { title: 'Unique Visual Identity', desc: 'Your brand shouldn\'t just look good; it should be unforgettable.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm hover:text-blue-300 transition-colors group"
              >
                Learn more about our methods
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
