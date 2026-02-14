import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 2rem',
        background: 'transparent',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-label" style={{ color: '#ff3333' }}>
          404 ERROR
        </span>
        <h1 className="hero-title">
          WAVE <span style={{ color: '#ff3333' }}>COLLAPSE</span>
        </h1>
        <p
          className="text-text-secondary"
          style={{
            maxWidth: '500px',
            margin: '2rem auto 4rem',
            fontSize: '1.2rem',
            lineHeight: '1.8',
          }}
        >
          The coordinate you requested has suffered a catastrophic interference.
          The path no longer exists in this deployment.
        </p>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            RE-STABILIZE PATH
          </Link>
          <Link to="/contact" className="btn btn-outline">
            REPORT ANOMALY
          </Link>
        </div>
      </motion.div>

      {/* Glitch Effect Element */}
      <motion.div
        animate={{
          opacity: [0, 0.1, 0, 0.05, 0],
          x: [-10, 10, -5, 5, 0],
        }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 51, 51, 0.05)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default NotFound;
