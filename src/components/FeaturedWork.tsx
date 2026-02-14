import React from 'react';
import { motion } from 'framer-motion';

const FeaturedWork: React.FC = () => {
  return (
    <section
      id="work"
      style={{ borderTop: '1px solid var(--card-border)', paddingTop: '150px' }}
    >
      <div className="container">
        {[
          {
            title: 'BITEDASH',
            subtitle: 'PLATFORM',
            desc: 'A sophisticated restaurant management and food delivery ecosystem that streamlines orders, payments, and kitchen operations with sub-second synchronization.',
            tags: ['MONGODB', 'EXPRESS', 'REACT', 'NODE'],
            img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2832&auto=format&fit=crop',
            result:
              'Processing 4k+ daily orders across 12 strategic locations.',
            link: '/portfolio/1',
          },
          {
            title: 'MEDIFY',
            subtitle: 'SYSTEM',
            desc: 'Intelligent pharmacy management core designed to optimize inventory turnover and automate regulation compliance with predictive analytics.',
            tags: ['REACT', 'EXPRESS', 'MONGODB', 'TAILWIND'],
            img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2944&auto=format&fit=crop',
            result:
              'Reduced medication waste by 40% through automated procurement.',
            link: '/portfolio/2',
          },
          {
            title: 'ON-DEMAND',
            subtitle: 'APP',
            desc: 'A location-based service marketplace connecting providers and users with military-grade precision and speed.',
            tags: ['FLUTTER', 'FIREBASE', 'GOOGLE MAPS'],
            img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop',
            result: 'Sub-second geospatial matching for 50k+ active users.',
            link: '/portfolio/6',
          },
          {
            title: 'HRMS',
            subtitle: 'ENTERPRISE',
            desc: 'Comprehensive human capital management fortress ensuring data sovereignty and payroll precision for large-scale organizations.',
            tags: ['REACT', 'SPRING BOOT', 'POSTGRESQL'],
            img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop',
            result: 'Zero payroll errors and 70% reduction in admin time.',
            link: '/portfolio/10',
          },
        ].map((project, i) => (
          <div
            key={i}
            className="grid grid-2"
            style={{
              alignItems: 'center',
              gap: '8rem',
              marginBottom: '10rem',
              direction: i % 2 === 1 ? 'rtl' : 'ltr',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ direction: 'ltr' }}
            >
              <span className="text-label">Strategic Win 0{i + 1}</span>
              <h2
                className="section-title"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  marginBottom: '2.5rem',
                }}
              >
                {project.title} <br />
                <span className="accent-text">{project.subtitle}</span>
              </h2>
              <p
                className="text-text-secondary"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  marginBottom: '3rem',
                  maxWidth: '500px',
                }}
              >
                {project.desc}
              </p>

              <div
                style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '0.6rem 1.5rem',
                      borderRadius: '100px',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <motion.a
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  href={`https://wa.me/923177760506?text=${encodeURIComponent(`Hello RapidWave Technical Team, I am interested in learning more about the ${project.title} project. Could you please share more details?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{
                    padding: '1.2rem 3rem',
                    fontSize: '0.75rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                  }}
                >
                  GET PROJECT DETAILS
                  <span style={{ fontSize: '1rem' }}>↗</span>
                </motion.a>
                <p
                  style={{
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    opacity: 0.7,
                    fontStyle: 'italic',
                    maxWidth: '300px',
                  }}
                >
                  * This will securely redirect you to WhatsApp. No message will
                  be sent without your explicit consent.
                </p>
              </div>
            </motion.div>

            {/* Premium Card Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{
                rotateY: i % 2 === 0 ? 3 : -3,
                rotateX: -2,
                translateY: -5,
                boxShadow: '0 30px 60px var(--accent-glow)',
              }}
              transition={{
                duration: 1,
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              className="glass-card"
              style={{
                padding: 0,
                aspectRatio: '4/5',
                borderRadius: '3rem',
                direction: 'ltr',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transform: 'translateZ(40px)',
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(100%) brightness(0.6)',
                    transition: 'all 1s var(--transition-premium)',
                  }}
                  className="hover-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 70%)',
                    padding: '4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 900,
                      color: 'var(--accent-primary)',
                      letterSpacing: '0.5em',
                      textTransform: 'uppercase',
                      marginBottom: '1rem',
                    }}
                  >
                    PROJECT RESULTS
                  </span>
                  <p
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#ffffff',
                    }}
                  >
                    {project.result}
                  </p>
                </div>
              </div>

              <style>{`
                .glass-card:hover .hover-img {
                  filter: grayscale(0%) brightness(1);
                  transform: scale(1.05);
                }
              `}</style>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
