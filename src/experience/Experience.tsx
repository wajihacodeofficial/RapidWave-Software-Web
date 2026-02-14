import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import GlobalWave from './GlobalWave';
import Lenis from 'lenis';
import { useTheme } from '../context/ThemeContext';

const Experience: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const bgColor = theme === 'dark' ? '#050505' : '#ffffff';
  const fogColor = theme === 'dark' ? '#050505' : '#f8fafc';
  const accentColor = theme === 'dark' ? '#00d2ff' : '#0070f3';

  return (
    <div
      id="bg-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        transition: 'background-color 0.8s ease',
      }}
    >
      <Canvas camera={{ position: [0, 8, 20], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={[bgColor]} />
        <fog attach="fog" args={[fogColor, 10, 45]} />
        <ambientLight intensity={theme === 'dark' ? 0.4 : 0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} color={accentColor} />
        <pointLight position={[-10, -5, 5]} intensity={1} color="#0070f3" />
        <GlobalWave />
      </Canvas>
    </div>
  );
};

export default Experience;
