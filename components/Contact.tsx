
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our strategist will contact you within 24 hours.');
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">Let's Build Something <br /><span className="text-blue-500">Legendary.</span></h3>
            
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Ready to take your brand to the next level? Fill out the form or reach out directly to schedule a strategy session.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-blue-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Studio</h4>
                  <p className="text-slate-400">123 Media Ave, Creative District<br />Los Angeles, CA 90012</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-blue-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Direct Contact</h4>
                  <p className="text-slate-400">hello@luminacreative.com<br />+1 (213) 555-0198</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-white font-bold mb-6">Follow the Journey</h4>
              <div className="flex gap-4">
                {['Instagram', 'LinkedIn', 'Vimeo', 'Twitter'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-current" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-800 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Service of Interest</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors appearance-none">
                  <option>Select a service...</option>
                  <option>Videography & Photography</option>
                  <option>Branding & Design</option>
                  <option>Web Design & Dev</option>
                  <option>Digital Marketing</option>
                  <option>Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  placeholder="Tell us about your project goals..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-xl uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
