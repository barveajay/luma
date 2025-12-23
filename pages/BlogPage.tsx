
import React from 'react';

const BlogPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Cinematic Branding in 2025',
      category: 'Trends',
      date: 'Oct 12, 2024',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
      excerpt: 'How high-end videography is changing the way luxury brands connect with digital-native audiences.'
    },
    {
      id: 2,
      title: 'SEO vs. Viral Content: Finding the Balance',
      category: 'Strategy',
      date: 'Oct 08, 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      excerpt: 'Why your brand needs a two-pronged approach to organic growth in an increasingly crowded marketplace.'
    },
    {
      id: 3,
      title: 'Why Minimalist Web Design is Still King',
      category: 'Design',
      date: 'Sep 29, 2024',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
      excerpt: 'Exploring the psychology of whitespace and how it drives higher conversion rates for e-commerce.'
    },
    {
      id: 4,
      title: 'Building a Brand Identity That Lasts Decades',
      category: 'Branding',
      date: 'Sep 15, 2024',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
      excerpt: 'The core principles of timeless design and how to avoid falling into short-term aesthetic traps.'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Lumina Insights</h2>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
              The <span className="gradient-text">Agency Blog.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Perspectives on marketing, design, and the evolving digital landscape from our lead strategists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-700" />
                  <span>5 Min Read</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm">
                  Read Article
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
