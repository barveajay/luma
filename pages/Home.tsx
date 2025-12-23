
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Short About Teaser */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Our Mission</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Built on Vision and <span className="gradient-text">Precision.</span></h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We bridge the gap between imagination and execution. Our cross-functional team specializes in creating digital experiences that don't just occupy space—they command it.
              </p>
              <Link to="/about" className="inline-block px-8 py-3 bg-slate-900 border border-slate-800 hover:border-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all">
                Learn Our Story
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" alt="Culture" className="rounded-2xl h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Design" className="rounded-2xl h-48 w-full object-cover translate-y-8" />
            </div>
          </div>
        </div>
      </section>

      <Services />
      
      {/* Featured Portfolio Teaser */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Creative Showcase</h2>
          <h3 className="text-4xl font-black text-white mb-12">Latest <span className="text-blue-500">Masterpieces</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group relative overflow-hidden rounded-3xl aspect-video">
              <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-slate-950/60 flex flex-col justify-end p-8 text-left opacity-0 group-hover:opacity-100 transition-opacity">
                <h4 className="text-2xl font-bold">L’Avenue Fashion Film</h4>
                <p className="text-blue-400">Videography</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl aspect-video">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-slate-950/60 flex flex-col justify-end p-8 text-left opacity-0 group-hover:opacity-100 transition-opacity">
                <h4 className="text-2xl font-bold">Eco-Fusion Identity</h4>
                <p className="text-blue-400">Branding</p>
              </div>
            </div>
          </div>
          <Link to="/portfolio" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105">
            Explore All Work
          </Link>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Home;
