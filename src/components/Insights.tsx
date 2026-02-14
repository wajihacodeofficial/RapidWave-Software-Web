import React from 'react';
import { motion } from 'framer-motion';

const Insights: React.FC = () => {
  const posts = [
    {
      title: 'Scaling Microservices in 2026',
      date: 'Feb 05, 2026',
      category: 'Engineering',
      readTime: '8 min read',
    },
    {
      title: 'The Future of AI-Driven UX',
      date: 'Jan 28, 2026',
      category: 'Design',
      readTime: '5 min read',
    },
    {
      title: 'Cloud-Native Architecture Patterns',
      date: 'Jan 15, 2026',
      category: 'Core Tech',
      readTime: '12 min read',
    },
  ];

  return (
    <section id="insights" className="section-padding bg-primary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            Latest <span className="text-accent-primary">Insights</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Deep dives into technical excellence and digital engineering trends.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-2xl border border-border-color hover:bg-white/5 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-[10px] text-text-muted uppercase tracking-widest">
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-accent-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-sm text-text-muted">{post.date}</p>
              <div className="mt-8 pt-6 border-t border-border-color flex items-center gap-2 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Read Article <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
