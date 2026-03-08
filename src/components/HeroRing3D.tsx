import { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

const GoldRing = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.2, 0.35, 64, 128]} />
      <meshStandardMaterial
        color="#d4af37"
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={2}
      />
    </mesh>
  );
};

const DiamondGem = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 1.35, 0]} scale={0.25}>
      <octahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={0.1}
        roughness={0}
        transmission={0.9}
        ior={2.42}
        thickness={0.5}
        envMapIntensity={3}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffd700" />
      <directionalLight position={[-3, 2, -3]} intensity={0.5} color="#fff5e6" />
      <pointLight position={[0, 3, 2]} intensity={1} color="#d4af37" />
      
      <GoldRing />
      <DiamondGem />
      
      <Environment preset="studio" />
    </>
  );
};

const HeroRing3D = () => {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  const handleWebGLContextLost = () => {
    console.error('WebGL context lost');
    setIsWebGLSupported(false);
  };

  const handleWebGLContextRestored = () => {
    setIsWebGLSupported(true);
  };

  if (!isWebGLSupported) {
    return (
      <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">💍</div>
          <h3 className="text-xl font-display gold-gradient-text mb-2">Golden Dream</h3>
          <p className="text-muted-foreground">Exquisite jewellery collection</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          preserveDrawingBuffer: true
        }}
        style={{ background: 'transparent' }}
        onContextLost={handleWebGLContextLost}
        onContextRestored={handleWebGLContextRestored}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroRing3D;
