import React from 'react';
import { motion } from 'framer-motion';

const Careers: React.FC = () => {
  const positions = [
    {
      title: 'Full-Stack Engineer',
      type: 'REMOTE / FULL-TIME',
      desc: 'Seeking a developer with deep expertise in the MERN stack and a passion for clean architecture.',
    },
    {
      title: 'UI/UX Designer',
      type: 'CONTRACT',
      desc: 'Help us define the visual language of high-performance enterprise applications.',
    },
    {
      title: 'Java Developer',
      type: 'REMOTE / PART-TIME',
      desc: 'Focus on Spring Boot services and custom enterprise desktop logic.',
    },
  ];

  return (
    <div className="careers-page">
      <section style={{ padding: '180px 0 100px' }}>
        <div className="container">
          <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <span className="text-label">Join the Wave</span>
            <h1 className="section-title">
              Engineering <span className="accent-text">Future Talent</span>
            </h1>
            <p
              className="text-text-secondary"
              style={{
                maxWidth: '700px',
                margin: '2rem auto 0',
                fontSize: '1.2rem',
              }}
            >
              We are always looking for technical purists who believe software
              should be built with discipline and elegance.
            </p>
          </header>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {positions.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
                style={{
                  padding: '4rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '4rem',
                }}
              >
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 900,
                      color: 'var(--accent-primary)',
                      letterSpacing: '0.2rem',
                    }}
                  >
                    {job.type}
                  </span>
                  <h3 style={{ fontSize: '2rem', margin: '1rem 0 1.5rem' }}>
                    {job.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.7',
                      fontSize: '1.1rem',
                    }}
                  >
                    {job.desc}
                  </p>
                </div>
                <button
                  className="btn btn-outline"
                  style={{ minWidth: '200px', padding: '1.2rem' }}
                >
                  Apply Protocol
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-secondary)',
        }}
        className="bg-secondary"
      >
        <div className="container">
          <div className="grid grid-3" style={{ gap: '4rem' }}>
            {[
              {
                title: 'Pure Engineering',
                desc: 'No bloated meetings. Just high-focused development cycles and architectural excellence.',
              },
              {
                title: 'Global Impact',
                desc: 'Build products that solve real-world complexities for international enterprises.',
              },
              {
                title: 'Zero Debt',
                desc: 'We take the time to do it right. No technical debt, just clean sustainable code.',
              },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1.2rem' }}>
                  {item.title}
                </h4>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
