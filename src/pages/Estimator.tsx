import React from 'react';
import { motion } from 'framer-motion';
import ProjectEstimator from '../components/premium/ProjectEstimator';

const EstimatorPage: React.FC = () => {
  return (
    <div className="estimator-page">
      <section
        className="hero-section-padding"
        style={{ padding: 'var(--section-padding) 0' }}
      >
        <div className="container" style={{ maxWidth: '1000px' }}>
          <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <span className="text-label">Strategic Investment</span>
            <h1 className="section-title">
              Project <span className="accent-text">Audit & Estimation</span>
            </h1>
            <p
              className="text-text-secondary"
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                marginTop: '2rem',
              }}
            >
              Transparency is at the core of our engineering process. Use our
              interactive audit tool to receive a preliminary investment range
              for your next deployment.
            </p>
          </header>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <ProjectEstimator />
          </motion.div>

          <div style={{ marginTop: '8rem', textAlign: 'center' }}>
            <div className="grid grid-3" style={{ gap: '3rem' }}>
              {[
                {
                  title: 'Fixed Price',
                  desc: 'Ideal for clearly defined MVPs and scoped projects.',
                },
                {
                  title: 'Dedicated Team',
                  desc: 'Long-term partnership with elite engineering bandwidth.',
                },
                {
                  title: 'Time & Materials',
                  desc: 'Flexible scaling for evolving enterprise products.',
                },
              ].map((model, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{ padding: '2.5rem' }}
                >
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                    {model.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                    }}
                  >
                    {model.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstimatorPage;
