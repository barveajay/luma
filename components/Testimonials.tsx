
import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Jenkins',
      role: 'Marketing Director',
      company: 'Future Logistics',
      quote: "Lumina Creative transformed our brand identity from static to dynamic. Their attention to storytelling is unparalleled in the agency world.",
      avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
      id: '2',
      name: 'Marcus Thorne',
      role: 'CEO',
      company: 'Volt Energy',
      quote: "The videography they produced for our product launch went viral within 48 hours. They truly know how to capture high-stakes visuals.",
      avatar: 'https://i.pravatar.cc/150?u=marcus'
    },
    {
      id: '3',
      name: 'Elena Rodriguez',
      role: 'Lead Designer',
      company: 'Artisan Goods',
      quote: "Collaborating with Lumina was the best decision we made this year. Our website conversion rate jumped by 40% after the redesign.",
      avatar: 'https://i.pravatar.cc/150?u=elena'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <svg className="w-16 h-16 mx-auto text-blue-600/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171V14H17.0171C15.3603 14 14.0171 12.6569 14.0171 11V7H20.0171V14.4645L18.5526 21H14.0171ZM4.01712 21L4.01712 18C4.01712 16.8954 4.91256 16 6.01712 16H9.01712V14H7.01712C5.36027 14 4.01712 12.6569 4.01712 11V7H10.0171V14.4645L8.55262 21H4.01712Z" />
          </svg>
        </div>

        <div className="relative h-64 md:h-48 overflow-hidden">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={testimonial.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                idx === activeIndex 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <p className="text-xl md:text-3xl font-medium text-white italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(idx)}
                className="relative group"
              >
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    idx === activeIndex ? 'border-blue-600 scale-125 shadow-lg shadow-blue-600/30' : 'border-slate-800 grayscale'
                  }`}
                />
              </button>
            ))}
          </div>
          <h4 className="text-lg font-bold text-white">{testimonials[activeIndex].name}</h4>
          <p className="text-blue-500 text-sm font-bold uppercase tracking-widest">
            {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
          </p>
        </div>

        {/* Brand Logos */}
        <div className="mt-20 pt-20 border-t border-slate-900">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-500 mb-10">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['TechOne', 'AquaBlue', 'NovaCorp', 'Elevate', 'PeakMedia'].map((brand) => (
              <span key={brand} className="text-2xl font-black text-slate-400 select-none cursor-default hover:text-white transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
