import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 25;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: '#050505',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <div style={{ position: 'relative' }}>
            <motion.img
              src="/logo.png"
              alt="Logo"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ width: '80px', height: '80px', borderRadius: '16px' }}
            />
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                position: 'absolute',
                inset: -20,
                border: '2px solid var(--accent-primary)',
                borderRadius: '24px',
                opacity: 0.3,
              }}
            />
          </div>

          <div style={{ width: '200px', textAlign: 'center' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.8rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.6rem',
                letterSpacing: '0.4em',
                fontWeight: 800,
                color: 'var(--accent-primary)',
              }}
            >
              <span>SYNCING CORE</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div
              style={{
                width: '100%',
                height: '2px',
                background: 'rgba(255,255,255,0.05)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ type: 'spring', damping: 20 }}
                style={{
                  height: '100%',
                  background: 'var(--accent-gradient)',
                  boxShadow: '0 0 10px var(--accent-primary)',
                }}
              />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: 'var(--text-muted)',
              marginTop: '1rem',
            }}
          >
            SECURE SYSTEM BOOT
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
