import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Wave: React.FC = () => {
  const meshRef = useRef<THREE.Points>(null);

  const { positions } = useMemo(() => {
    const count = 100;
    const sep = 0.5;
    const positions = new Float32Array(count * count * 3);

    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        positions[i] = (x - count / 2) * sep;
        positions[i + 1] = 0;
        positions[i + 2] = (y - count / 2) * sep;
        i += 3;
      }
    }

    return { positions };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      const pos = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        const y = Math.sin(x * 0.2 + time) * Math.cos(z * 0.2 + time) * 2;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00d2ff"
        size={0.05}
        sizeAttenuation={true}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Wave;
