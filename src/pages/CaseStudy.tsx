import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const CaseStudy: React.FC = () => {
  const { id } = useParams();

  // In a real app, fetch data based on ID.
  // Using static premium content for demonstration.
  const projects: Record<string, any> = {
    '1': {
      title: 'EDUTRACK PORTAL',
      category: 'ENTERPRISE WEB',
      overview:
        'A centralized educational management system designed to coordinate high-concurrency operations for international school networks.',
      problem:
        'Legacy systems were causing data silos, leading to 30% inefficiency in student reporting and critical security vulnerabilities in personal data management.',
      solution:
        'We architected a modular React/Node.js solution with a secure PostgreSQL core. The system features real-time analytics, automated attendance tracking, and military-grade encryption for student records.',
      stack: ['REACT', 'NODE.JS', 'POSTGRES', 'TYPESCRIPT', 'AWS'],
      metrics: [
        { label: 'OP-EFFICIENCY', value: '+85%' },
        { label: 'LOAD SPEED', value: '450ms' },
        { label: 'DATA INTEGRITY', value: '100%' },
      ],
      image:
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2832&auto=format&fit=crop',
    },
    '2': {
      title: 'FITPULSE MOBILE',
      category: 'CROSS-PLATFORM APP',
      overview:
        'A high-performance fitness ecosystem connecting thousands of users through real-time telemetry and social integration.',
      problem:
        'The client needed a scalable mobile solution that could handle massive real-time data input from wearable devices without latency.',
      solution:
        'We utilized Flutter with a Firebase optimized backend for sub-second sync. Implemented custom platform channels for high-accuracy sensor data processing.',
      stack: ['FLUTTER', 'FIREBASE', 'REDUX', 'CI/CD'],
      metrics: [
        { label: 'USER RETENTION', value: '+40%' },
        { label: 'SYNC LATENCY', value: '<50ms' },
        { label: 'CRASH FREE', value: '99.9%' },
      ],
      image:
        'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2832&auto=format&fit=crop',
    },
  };

  const project = projects[id || '1'] || projects['1'];

  return (
    <div className="case-study-page">
      {/* Hero Section */}
      <section
        style={{
          padding: '180px 0 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label">Deployment Archive 0{id}</span>
            <h1
              className="hero-title"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                marginBottom: '2rem',
              }}
            >
              {project.title}
            </h1>
            <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  color: 'var(--accent-primary)',
                  letterSpacing: '0.4em',
                }}
              >
                {project.category}
              </span>
              <div
                style={{
                  height: '1px',
                  flex: 1,
                  background: 'var(--card-border)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview & Image */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <div
            className="grid grid-2"
            style={{ gap: '6rem', alignItems: 'center' }}
          >
            <div>
              <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
                The <span className="accent-text">Vision</span>
              </h2>
              <p
                className="text-text-secondary"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  margin: '2rem 0',
                }}
              >
                {project.overview}
              </p>
              <div
                className="grid grid-3"
                style={{ marginTop: '4rem', gap: '2rem' }}
              >
                {project.metrics.map((m: any, i: number) => (
                  <div
                    key={i}
                    className="glass-card"
                    style={{ padding: '2rem 1rem', textAlign: 'center' }}
                  >
                    <div
                      style={{
                        fontSize: '1.8rem',
                        fontWeight: 900,
                        color: 'var(--accent-primary)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {m.value}
                    </div>
                    <div
                      style={{
                        fontSize: '0.6rem',
                        fontWeight: 800,
                        opacity: 0.6,
                        letterSpacing: '0.1rem',
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ padding: 0, height: '500px', overflow: 'hidden' }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          background: 'var(--bg-secondary)',
        }}
        className="bg-secondary"
      >
        <div className="container">
          <div className="grid grid-2" style={{ gap: '8rem' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
                Project <span className="accent-text">Complexity</span>
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.8',
                  fontSize: '1.1rem',
                }}
              >
                {project.problem}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
                Our <span className="accent-text">Execution</span>
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.8',
                  fontSize: '1.1rem',
                }}
              >
                {project.solution}
              </p>
            </div>
          </div>

          <div
            className="glass-card"
            style={{ marginTop: '8rem', padding: '4rem' }}
          >
            <h4
              style={{
                fontSize: '0.7rem',
                fontWeight: 900,
                color: 'var(--accent-primary)',
                letterSpacing: '0.3rem',
                marginBottom: '3rem',
                textAlign: 'center',
              }}
            >
              ENGINEERED WITH
            </h4>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              {project.stack.map((s: string) => (
                <span
                  key={s}
                  style={{
                    padding: '1rem 3rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects CTA */}
      <section style={{ padding: '100px 0' }}>
        <div className="container text-center">
          <a
            href={`https://wa.me/923177760506?text=${encodeURIComponent(`Hello RapidWave Technical Team, I am interested in learning more about the ${project.title} project. Could you please share more details?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '1.5rem 4rem' }}
          >
            Get Project Details
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
