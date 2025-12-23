
import React, { useState } from 'react';
import { PortfolioItem, Category } from '../types';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Branding', 'Video', 'Web Design', 'Marketing'];

  const projects: PortfolioItem[] = [
    { id: '1', title: 'Eco-Fusion Rebrand', category: 'Branding', client: 'Eco-Fusion', imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800' },
    { id: '2', title: 'Noir Fashion Film', category: 'Video', client: 'L’Avenue', imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800' },
    { id: '3', title: 'TechNova Platform', category: 'Web Design', client: 'TechNova', imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800' },
    { id: '4', title: 'Global Outreach Campaign', category: 'Marketing', client: 'World Health Org', imageUrl: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800' },
    { id: '5', title: 'Luxe Watches Commercial', category: 'Video', client: 'Chrono Lux', imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
    { id: '6', title: 'Origins Skincare Pack', category: 'Branding', client: 'Origins', imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800' },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">Showcasing <br /><span className="text-blue-500">Excellence.</span></h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-800"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  Client: {project.client}
                </p>
                <div className="mt-6">
                  <button className="text-white text-xs font-bold uppercase tracking-widest border-b-2 border-blue-600 pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-transparent border-2 border-slate-800 hover:border-blue-600 text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:bg-blue-600/5">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
