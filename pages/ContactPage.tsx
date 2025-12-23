
import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            Contact <span className="gradient-text">Us.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to start your next project? We're currently accepting new clients for late 2024 and 2025.
          </p>
        </div>
      </section>
      <Contact />
      
      {/* FAQ Teaser */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-12 text-center uppercase tracking-widest">Quick Questions</h3>
          <div className="space-y-8">
            {[
              { q: 'How long does a typical project take?', a: 'Branding projects usually take 4-6 weeks, while full web and video campaigns can range from 8-12 weeks.' },
              { q: 'Do you work with international clients?', a: 'Yes, we are a global agency with clients spanning from London to Tokyo.' },
              { q: 'What is your typical project budget?', a: 'Our engagements typically begin at $10k to ensure we can deliver the high-end quality Lumina is known for.' }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <h4 className="text-white font-bold mb-2">{faq.q}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
