import React from 'react';
import { motion } from 'framer-motion';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      title: 'Web & Mobile',
      desc: 'Developing high-performance websites and mobile applications that engage users and drive growth.',
    },
    {
      title: 'Custom Software',
      desc: 'Tailor-made software solutions designed to solve your unique business challenges and automate workflows.',
    },
    {
      title: 'UI/UX Design',
      desc: 'Creating beautiful and intuitive interfaces that provide the best experience for your users.',
    },
  ];

  return (
    <section
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      <div className="container">
        <header style={{ marginBottom: '6rem', textAlign: 'center' }}>
          <span className="text-label">Our Expertise</span>
          <h2 className="section-title">
            Our <span className="accent-text">Services</span>
          </h2>
          <p
            className="text-text-secondary"
            style={{ maxWidth: '600px', margin: '2rem auto 0' }}
          >
            We build the software that helps your business grow and thrive in
            the digital world.
          </p>
        </header>

        <div className="grid grid-3">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass-card"
              style={{ padding: '4.5rem' }}
            >
              <h3
                style={{
                  marginBottom: '2rem',
                  fontSize: '1.8rem',
                  color: 'var(--text-primary)',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.8',
                  marginBottom: '3rem',
                }}
              >
                {s.desc}
              </p>
              <a
                href="/services"
                className="btn btn-outline"
                style={{
                  padding: '0.8rem 2rem',
                  fontSize: '0.65rem',
                  border: 'none',
                  background: 'var(--card-border)',
                  width: 'fit-content',
                }}
              >
                Explore Services →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
