import React from 'react';
import { motion } from 'framer-motion';
import CodeSnippet from '../components/premium/CodeSnippet';

const Insights: React.FC = () => {
  const articles = [
    {
      title: 'Modern Web Development in 2026',
      cat: 'Web',
      date: 'FEB 08, 2026',
      readTime: '8 min read',
      desc: 'Exploring the latest trends in web technologies and how frameworks like Next.js are shaping the future of digital experiences.',
    },
    {
      title: 'The Importance of Software Maintenance',
      cat: 'Support',
      date: 'FEB 02, 2026',
      readTime: '6 min read',
      desc: 'Why regular updates and bug fixes are crucial for the long-term success and security of your business applications.',
    },
    {
      title: 'Building Scalable Mobile Apps',
      cat: 'Mobile',
      date: 'JAN 28, 2026',
      readTime: '10 min read',
      desc: 'How to choose between native and cross-platform development for your next mobile project to ensure maximum reach and performance.',
    },
    {
      title: 'Why UI/UX Design Matters',
      cat: 'Design',
      date: 'JAN 20, 2026',
      readTime: '7 min read',
      desc: 'Understanding how intuitive design and user-centered approaches lead to higher engagement and customer satisfaction.',
    },
  ];

  return (
    <div className="insights-page">
      <section style={{ paddingTop: '150px' }}>
        <div className="container">
          <header style={{ marginBottom: '6rem' }}>
            <span className="text-label">Our Blog</span>
            <h1
              className="hero-title"
              style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
            >
              Latest <br />
              <span className="accent-text">Insights</span>
            </h1>
            <p
              className="text-text-secondary"
              style={{
                maxWidth: '650px',
                fontSize: '1.2rem',
                marginTop: '1.5rem',
              }}
            >
              Thoughts and articles from the team at RapidWave Software about
              technology, design, and business.
            </p>
          </header>

          <div style={{ marginBottom: '6rem' }}>
            <CodeSnippet />
          </div>

          <div className="grid grid-2">
            {articles.map((article, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="glass-card"
                style={{ padding: '4rem', textDecoration: 'none' }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '3rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.6rem',
                      fontWeight: 800,
                      color: 'var(--accent-primary)',
                      border: '1px solid var(--accent-primary)',
                      padding: '0.4rem 1.2rem',
                      borderRadius: '100px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                    }}
                  >
                    {article.cat}
                  </span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      fontWeight: 700,
                    }}
                  >
                    {article.date}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '2.2rem',
                    marginBottom: '2rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-text-secondary"
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    marginBottom: '3rem',
                  }}
                >
                  {article.desc}
                </p>

                <div
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                    }}
                  >
                    READ ARTICLE →
                  </span>
                  <span
                    style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}
                  >
                    {article.readTime}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container text-center">
          <div
            className="glass-card"
            style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto' }}
          >
            <span className="text-label">Newsletter</span>
            <h2 className="section-title">
              Stay <br />
              <span className="accent-text">Updated</span>
            </h2>
            <p
              className="text-text-secondary"
              style={{ maxWidth: '500px', margin: '1.5rem auto 3rem' }}
            >
              Get the latest software development tips and company news
              delivered right to your inbox.
            </p>

            <form
              style={{
                display: 'flex',
                gap: '1rem',
                maxWidth: '600px',
                margin: '0 auto',
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="ops@enterprise.io"
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '100px',
                  padding: '1.5rem 2.5rem',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                }}
              />
              <button
                className="btn btn-primary"
                style={{ padding: '1.5rem 3rem' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
