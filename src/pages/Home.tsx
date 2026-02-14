import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TechStrip from '../components/home/TechStrip';
import ProcessSection from '../components/home/ProcessSection';
import ValueProps from '../components/home/ValueProps';
import FeaturedWork from '../components/FeaturedWork';
import { AnimatePresence } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <TechStrip />

      {/* Unique Home Content */}
      <ValueProps />

      {/* Live Benchmarks Section */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-secondary)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="bg-secondary"
      >
        <div className="container">
          <header style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="text-label">Performance Audit</span>
            <h2 className="section-title">
              Engineering <span className="accent-text">Benchmarks</span>
            </h2>
            <p
              className="text-text-secondary"
              style={{ maxWidth: '600px', margin: '1.5rem auto 0' }}
            >
              We don't just build software; we engineer high-performance assets
              that outperform the industry standard.
            </p>
          </header>

          <div className="grid grid-2" style={{ gap: '4rem' }}>
            {/* Standard Build */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ padding: '3.5rem', borderLeft: '4px solid #444' }}
            >
              <h4
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '2rem',
                  opacity: 0.6,
                }}
              >
                STANDARD INDUSTRY BUILD
              </h4>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2.5rem',
                }}
              >
                {[
                  {
                    label: 'Time to Interactive',
                    value: '4.8s',
                    color: '#ff4444',
                    width: '80%',
                  },
                  {
                    label: 'Core Web Vitals',
                    value: 'Needs Improvement',
                    color: '#ffaa00',
                    width: '45%',
                  },
                  {
                    label: 'Security Vulnerabilities',
                    value: 'Moderate Risk',
                    color: '#ff4444',
                    width: '90%',
                  },
                ].map((m, i) => (
                  <div key={i}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '0.8rem',
                        fontSize: '0.8rem',
                      }}
                    >
                      <span style={{ color: 'var(--text-secondary)' }}>
                        {m.label}
                      </span>
                      <span style={{ fontWeight: 800 }}>{m.value}</span>
                    </div>
                    <div
                      style={{
                        height: '4px',
                        width: '100%',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '10px',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: m.width }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{
                          height: '100%',
                          background: m.color,
                          borderRadius: '10px',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RapidWave Build */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                rotateY: 2,
                rotateX: -2,
                translateY: -5,
                boxShadow: '0 20px 40px var(--accent-glow)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass-card"
              style={{
                padding: '3.5rem',
                borderLeft: '4px solid var(--accent-primary)',
                background: 'rgba(0, 210, 255, 0.02)',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div style={{ transform: 'translateZ(30px)' }}>
                <h4
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '2rem',
                    color: 'var(--accent-primary)',
                  }}
                >
                  RAPIDWAVE DEPLOYMENT
                </h4>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.5rem',
                  }}
                >
                  {[
                    {
                      label: 'Time to Interactive',
                      value: '0.8s',
                      color: 'var(--accent-primary)',
                      width: '15%',
                    },
                    {
                      label: 'Core Web Vitals',
                      value: 'Optimized (99+)',
                      color: '#00ffcc',
                      width: '99%',
                    },
                    {
                      label: 'Security Vulnerabilities',
                      value: 'Zero Critical',
                      color: '#00ffcc',
                      width: '2%',
                    },
                  ].map((m, i) => (
                    <div key={i}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: '0.8rem',
                          fontSize: '0.8rem',
                        }}
                      >
                        <span style={{ color: 'var(--text-secondary)' }}>
                          {m.label}
                        </span>
                        <span style={{ fontWeight: 800 }}>{m.value}</span>
                      </div>
                      <div
                        style={{
                          height: '4px',
                          width: '100%',
                          background: 'rgba(255,255,255,0.05)',
                          borderRadius: '10px',
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: m.width }}
                          transition={{ duration: 1, delay: 0.2 }}
                          style={{
                            height: '100%',
                            background: m.color,
                            borderRadius: '100px',
                            boxShadow: `0 0 10px ${m.color}`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Deployments */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-primary)',
        }}
      >
        <div className="container">
          <header style={{ marginBottom: '8rem', textAlign: 'center' }}>
            <span className="text-label">Case Studies</span>
            <h2 className="section-title">
              Strategic <span className="accent-text">Technical Wins</span>
            </h2>
          </header>

          <FeaturedWork />
        </div>
      </section>

      {/* Deployment Process */}
      <ProcessSection />

      {/* Testimonial Section */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-secondary)',
        }}
        className="bg-secondary"
      >
        <div className="container">
          <div
            className="grid grid-2"
            style={{ gap: '6rem', alignItems: 'center' }}
          >
            <div>
              <span className="text-label">Expert Testimony</span>
              <h2 className="section-title">
                What Strategic <br />
                <span className="accent-text">Partners Say</span>
              </h2>
            </div>

            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '6rem',
              textAlign: 'center',
              background:
                'linear-gradient(135deg, rgba(0, 210, 255, 0.05) 0%, rgba(0, 112, 243, 0.05) 100%)',
              border: '1px solid rgba(0, 210, 255, 0.2)',
            }}
          >
            <h2 className="hero-title" style={{ fontSize: '4rem' }}>
              RE-ENGINEER YOUR <br />
              <span className="accent-text">FUTURE</span>
            </h2>
            <p
              className="text-text-secondary"
              style={{
                maxWidth: '600px',
                margin: '2rem auto 4rem',
                fontSize: '1.25rem',
              }}
            >
              Join the elite businesses scaling with RapidWave Software's
              high-performance architectures. Start your architectural audit
              today.
            </p>
            <div
              className="cta-buttons"
              style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}
            >
              <button
                onClick={() => {
                  window.location.href = '/contact';
                  window.scrollTo(0, 0);
                }}
                className="btn btn-primary"
              >
                INITIATE PROPOSAL
              </button>
              <button
                onClick={() => {
                  window.location.hash = 'protocol';
                  window.location.href = '/protocol';
                  window.scrollTo(0, 0);
                }}
                className="btn btn-outline"
              >
                TECHNICAL PROTOCOL
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const testimonials = [
  {
    author: 'John Doe',
    role: 'CTO, TECHFLOW SYSTEMS',
    initials: 'JD',
    text: 'RapidWave Software completely transformed our infrastructure. Their approach to deep engineering and modular architecture allowed us to scale 5x within six months without any downtime.',
  },
  {
    author: 'Sarah Jenkins',
    role: 'Product Lead, FINEDGE',
    initials: 'SJ',
    text: 'The sub-second performance metrics we achieved with RapidWave are unparalleled. They didnt just build an app; they engineered a high-frequency trading environment.',
  },
  {
    author: 'Mark Zhao',
    role: 'CEO, LOGISTRACK',
    initials: 'MZ',
    text: 'Moving to a Flutter-based mobile ecosystem with RapidWave reduced our development lifecycle by 40%. Their technical proficiency and maintenance support are top-tier.',
  },
];

const TestimonialSlider: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '380px',
        overflow: 'hidden',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card"
          style={{ padding: '4rem', width: '100%' }}
        >
          <div
            style={{
              fontSize: '4rem',
              position: 'absolute',
              top: '20px',
              left: '20px',
              opacity: 0.1,
              fontFamily: 'serif',
            }}
          >
            "
          </div>
          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
              marginBottom: '3rem',
            }}
          >
            {testimonials[index].text}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--accent-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 900,
              }}
            >
              {testimonials[index].initials}
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', margin: 0 }}>
                {testimonials[index].author}
              </h4>
              <p
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent-primary)',
                  margin: 0,
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                }}
              >
                {testimonials[index].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem',
          justifyContent: 'center',
        }}
      >
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: i === index ? '30px' : '10px',
              height: '4px',
              background:
                i === index ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
