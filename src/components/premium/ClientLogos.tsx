import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'QUANTUM FLOW',
  'NEBULA SYSTEMS',
  'STARK TECH',
  'HORIZON AI',
  'CYBER CORE',
  'LUMINA',
];

const ClientLogos: React.FC = () => {
  return (
    <div style={{ padding: '4rem 0', opacity: 0.5, overflow: 'hidden' }}>
      <div className="container">
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.6rem',
            fontWeight: 800,
            letterSpacing: '0.4em',
            color: 'var(--text-muted)',
            marginBottom: '3rem',
          }}
        >
          STRATEGIC TECHNICAL PARTNERSHIPS
        </p>

        <div style={{ display: 'flex', width: '200%', gap: '4rem' }}>
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: '8rem', alignItems: 'center' }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.1em',
                }}
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
