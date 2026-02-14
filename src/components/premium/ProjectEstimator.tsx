import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectEstimator: React.FC = () => {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<any>({});

  const steps = [
    {
      id: 'type',
      question: 'What type of deployment are we building?',
      options: [
        { label: 'Web Platform', value: 'web', icon: '🕸️' },
        { label: 'Mobile Application', value: 'mobile', icon: '📱' },
        { label: 'Custom Enterprise', value: 'enterprise', icon: '🏢' },
        { label: 'Cloud Infrastructure', value: 'cloud', icon: '☁️' },
      ],
    },
    {
      id: 'scale',
      question: 'What is the intended scale of the project?',
      options: [
        { label: 'Startup MVP', value: 'mvp', icon: '🚀' },
        { label: 'Scale-up / Growth', value: 'growth', icon: '📈' },
        { label: 'Enterprise Grade', value: 'enterprise', icon: '🌎' },
      ],
    },
    {
      id: 'timeline',
      question: 'Requested Deployment Window?',
      options: [
        { label: 'Rapid (4-8 Weeks)', value: 'rapid', icon: '⚡' },
        { label: 'Standard (3-6 Months)', value: 'standard', icon: '🗓️' },
        { label: 'Long-term Partnership', value: 'long', icon: '🤝' },
      ],
    },
  ];

  const handleSelection = (id: string, value: string) => {
    setSelections({ ...selections, [id]: value });
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setStep(steps.length);
    }
  };

  const calculateEstimate = () => {
    let base = 5000;
    if (selections.type === 'enterprise') base += 10000;
    if (selections.scale === 'enterprise') base += 15000;
    if (selections.timeline === 'rapid') base += 5000;

    return {
      min: base,
      max: base * 1.5,
    };
  };

  const restart = () => {
    setStep(0);
    setSelections({});
  };

  return (
    <div
      className="glass-card"
      style={{
        padding: '4rem',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AnimatePresence mode="wait">
        {step < steps.length ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-label">
              STEP {step + 1} OF {steps.length}
            </span>
            <h3 style={{ fontSize: '2rem', marginBottom: '3rem' }}>
              {steps[step].question}
            </h3>
            <div className="grid grid-2" style={{ gap: '1.5rem' }}>
              {steps[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelection(steps[step].id, opt.value)}
                  className="btn btn-outline"
                  style={{
                    padding: '2rem',
                    borderRadius: '1.5rem',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    gap: '1.5rem',
                    background:
                      selections[steps[step].id] === opt.value
                        ? 'var(--accent-glow)'
                        : 'transparent',
                    borderColor:
                      selections[steps[step].id] === opt.value
                        ? 'var(--accent-primary)'
                        : 'var(--card-border)',
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>{opt.icon}</span>
                  <span style={{ fontSize: '1rem', fontWeight: 700 }}>
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: 'center', padding: '2rem 0' }}
          >
            <span className="text-label">TECHNICAL AUDIT COMPLETE</span>
            <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
              REVENUE <span className="accent-text">IMPACT</span> ESTIMATE
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '3rem',
                fontSize: '1.1rem',
              }}
            >
              Based on your requirements, the strategic technical investment
              range is:
            </p>

            <div
              style={{
                fontSize: '4rem',
                fontWeight: 900,
                fontFamily: 'var(--font-heading)',
                color: 'var(--accent-primary)',
                marginBottom: '4rem',
              }}
            >
              ${calculateEstimate().min.toLocaleString()} - $
              {calculateEstimate().max.toLocaleString()}+
            </div>

            <div
              style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}
            >
              <button onClick={restart} className="btn btn-outline">
                RESTART AUDIT
              </button>
              <a href="/contact" className="btn btn-primary">
                INITIATE PROPOSAL
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ marginTop: 'auto', paddingTop: '4rem' }}>
        <div
          style={{
            width: '100%',
            height: '1px',
            background: 'var(--card-border)',
            marginBottom: '1.5rem',
          }}
        />
        <p
          style={{
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
          }}
        >
          *This is a preliminary technical estimate. Final pricing determined
          after full architectural audit.
        </p>
      </div>
    </div>
  );
};

export default ProjectEstimator;
