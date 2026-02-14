import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <section style={{ padding: '180px 0 100px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label">Transparency</span>
            <h1 className="section-title">
              Cookie <span className="accent-text">Policy</span>
            </h1>
            <p className="text-muted" style={{ marginBottom: '4rem' }}>
              Last Updated: February 10, 2026
            </p>

            <div
              className="glass-card"
              style={{ padding: '4rem', gap: '3rem' }}
            >
              <section>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  1. WHAT ARE COOKIES
                </h3>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                >
                  Cookies are small text files stored on your device that help
                  us provide a smoother browsing experience. They allow us to
                  remember your preferences and understand how you interact with
                  our engineering showcase.
                </p>
              </section>

              <section>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  2. TYPES OF COOKIES WE USE
                </h3>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                >
                  <strong>Essential Cookies:</strong> Necessary for the website
                  to function, such as remembering your theme choice
                  (Dark/Light).
                  <br />
                  <strong>Analytics Cookies:</strong> Help us understand user
                  flow to optimize our site navigation and content engagement.
                </p>
              </section>

              <section>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  3. MANAGING PREFERENCES
                </h3>
                <p
                  style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
                >
                  You can control cookie settings through your browser. Please
                  note that disabling essential cookies may impact the cinematic
                  performance of our website.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
