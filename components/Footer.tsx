
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Col 1: Bio */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-8">
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                LUMINA<span className="text-blue-500">CREATIVE</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Leading the digital frontier through cinematic storytelling and data-backed branding solutions for modern businesses.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'LI', 'YT'].map(s => (
                <a key={s} href="#" className="text-slate-500 hover:text-white transition-colors font-bold text-xs uppercase tracking-widest">{s}</a>
              ))}
            </div>
          </div>

          {/* Col 2: Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Agency Blog', path: '/blog' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-blue-500 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Legal & FAQ</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Support Center', 'Hiring'].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Insights Hub</h4>
            <p className="text-slate-400 mb-6 text-sm">Get our monthly digest on branding trends and digital strategy.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-600 transition-colors"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl uppercase tracking-widest text-xs transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Lumina Creative Agency. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">System Status: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
