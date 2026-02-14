import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';
import { useWave } from '../context/WaveContext';

const GlobalWave: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const { waveParams } = useWave();
  const count = 100;

  // Track color for smooth interpolation
  const colorObj = useMemo(() => new THREE.Color(), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * waveParams.speed;
    if (meshRef.current) {
      const pos = meshRef.current.geometry.attributes.position;

      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);

        // Liquid wave math with context-aware frequency and amplitude
        let z =
          Math.sin(x * waveParams.frequency + time) *
          Math.cos(y * waveParams.frequency + time) *
          waveParams.amplitude;
        z +=
          Math.sin((x + y) * (waveParams.frequency * 0.5) + time * 0.5) *
          (waveParams.amplitude * 1.25);

        // Scroll influence
        z += Math.sin(x * 0.5 + progress * 10) * (progress * 5);

        pos.setZ(i, z);
      }
      pos.needsUpdate = true;

      // Dynamic orientation
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        (state.mouse.x * Math.PI) / 20,
        0.1
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -Math.PI / 3 + state.mouse.y * 0.2,
        0.1
      );

      // Smooth color transition
      if (meshRef.current.material instanceof THREE.MeshStandardMaterial) {
        colorObj.set(waveParams.color);
        meshRef.current.material.color.lerp(colorObj, 0.1);
        meshRef.current.material.emissive.lerp(colorObj, 0.1);
      }
    }
  });

  return (
    <group position={[0, -5, 0]}>
      <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]}>
        <planeGeometry args={[100, 100, count, count]} />
        <meshStandardMaterial
          color={waveParams.color}
          wireframe
          transparent
          opacity={theme === 'dark' ? 0.2 : 0.12}
          blending={
            theme === 'dark' ? THREE.AdditiveBlending : THREE.NormalBlending
          }
          emissive={waveParams.color}
          emissiveIntensity={theme === 'dark' ? 0.8 : 0.4}
        />
      </mesh>

      {/* Lights for the surface */}
      <spotLight
        position={[20, 20, 20]}
        intensity={1.5}
        color={waveParams.color}
      />
      <pointLight position={[-20, -10, 10]} intensity={1} color="#0070f3" />
    </group>
  );
};

export default GlobalWave;
