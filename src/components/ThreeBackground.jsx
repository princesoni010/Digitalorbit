import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, rotation, scale, color, speed = 1, geometry = 'icosahedron' }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * speed;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case 'torus':
        return new THREE.TorusGeometry(0.6, 0.25, 16, 32);
      case 'octahedron':
        return new THREE.OctahedronGeometry(0.6);
      case 'dodecahedron':
        return new THREE.DodecahedronGeometry(0.5);
      case 'torusKnot':
        return new THREE.TorusKnotGeometry(0.4, 0.15, 64, 8);
      default:
        return new THREE.IcosahedronGeometry(0.5, 0);
    }
  }, [geometry]);

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <primitive object={geo} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.25}
          wireframe={false}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 50 }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#6C63FF'),
      new THREE.Color('#8B5CF6'),
      new THREE.Color('#EC4899'),
      new THREE.Color('#06B6D4'),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, [count]);

  const pointsRef = useRef();

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.01) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={points.positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={points.colors}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  const shapes = [
    { position: [-4, 2, -3], rotation: [0.5, 0.3, 0], scale: 1.2, color: '#6C63FF', speed: 0.8, geometry: 'icosahedron' },
    { position: [4, -1, -4], rotation: [0.2, 0.8, 0], scale: 0.9, color: '#8B5CF6', speed: 1.2, geometry: 'torus' },
    { position: [-2, -3, -2], rotation: [0.7, 0.2, 0.5], scale: 0.7, color: '#EC4899', speed: 0.6, geometry: 'octahedron' },
    { position: [3, 3, -5], rotation: [0.3, 0.6, 0.1], scale: 1.0, color: '#06B6D4', speed: 1.0, geometry: 'dodecahedron' },
    { position: [0, -2, -6], rotation: [0.1, 0.4, 0.3], scale: 0.6, color: '#8B85FF', speed: 0.9, geometry: 'torusKnot' },
    { position: [-5, 0, -5], rotation: [0.4, 0.1, 0.6], scale: 0.8, color: '#a78bfa', speed: 0.7, geometry: 'dodecahedron' },
    { position: [5, 1, -3], rotation: [0.6, 0.3, 0.2], scale: 0.5, color: '#f472b6', speed: 1.1, geometry: 'octahedron' },
  ];

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#f8f4ff" />
      <directionalLight position={[-5, 3, 3]} intensity={0.3} color="#e0d4ff" />

      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}

      <Particles count={60} />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
      {/* Soft gradient overlay to blend with content */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/80 pointer-events-none" />
    </div>
  );
}
