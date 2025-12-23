
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Videography & Photography',
      description: 'Cinematic commercials, music videos, and high-end product shoots that capture your audience\'s attention.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Branding & Design',
      description: 'Strategic logo design, innovative packaging, and cohesive stationery that defines your market presence.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: 'Web Design & Dev',
      description: 'Ultra-responsive, high-performance websites built with modern UI/UX principles to convert visitors into loyal customers.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Social Media Management',
      description: 'End-to-end strategy and viral-ready content creation that builds thriving online communities.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      )
    },
    {
      title: 'Digital Marketing',
      description: 'Advanced SEO, targeted PPC, and high-impact influencer marketing campaigns that deliver measurable ROI.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    },
    {
      title: 'Strategic Consultation',
      description: 'Bespoke brand audits and long-term scaling roadmaps for businesses ready to dominate their niche.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6">Mastery Across <span className="gradient-text">Every Medium.</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We offer a comprehensive suite of digital services designed to seamlessly integrate and amplify your brand’s reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/10"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/10 text-blue-500 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-blue-400">
                {service.title}
              </h4>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="w-10 h-1 bg-slate-700 rounded-full transition-all duration-300 group-hover:w-full group-hover:bg-blue-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
