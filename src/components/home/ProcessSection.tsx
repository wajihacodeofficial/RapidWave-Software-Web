import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Technical Audit',
      desc: 'We analyze your legacy systems or new requirements to find the most efficient path forward.',
      icon: '🔍',
    },
    {
      id: '02',
      title: 'Architectural Blueprint',
      desc: 'Deep logic mapping and cloud-infrastructure design before a single line of code is written.',
      icon: '📐',
    },
    {
      id: '03',
      title: 'Modular Development',
      desc: 'Rapid execution using high-performance stacks like MERN or Java for robust enterprise cores.',
      icon: '⚡',
    },
    {
      id: '04',
      title: 'Signal Launch',
      desc: 'Global deployment with automated testing, security checks, and performance optimization.',
      icon: '🚀',
    },
  ];

  return (
    <section style={{ padding: 'var(--section-padding) 0' }}>
      <div className="container">
        <header style={{ marginBottom: '6rem' }}>
          <span className="text-label">Our Workflow</span>
          <h2 className="section-title">
            From Blueprint to <br />
            <span className="accent-text">Deployment</span>
          </h2>
        </header>

        <div className="grid grid-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
              style={{
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                height: '100%',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'var(--accent-primary)',
                  opacity: 0.2,
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {step.id}
              </div>
              <div style={{ fontSize: '2rem' }}>{step.icon}</div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                {step.title}
              </h4>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  fontSize: '0.9rem',
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
