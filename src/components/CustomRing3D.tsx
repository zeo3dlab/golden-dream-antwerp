import { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

const CustomRing = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const diamondRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x = Math.sin(Date.now() * 0.0008) * 0.2;
    }
    if (diamondRef.current) {
      diamondRef.current.rotation.y += delta * 0.3;
      diamondRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <>
      <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
        <torusGeometry args={[1.2, 0.35, 64, 128]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={2}
        />
      </mesh>
      
      <mesh ref={diamondRef} position={[0, 0.8, 0]} scale={0.3}>
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
    </>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#ffd700" />
      <directionalLight position={[-3, 2, -3]} intensity={0.8} color="#fff5e6" />
      <pointLight position={[0, 3, 2]} intensity={1.5} color="#d4af37" />
      <pointLight position={[3, -2, 3]} intensity={0.8} color="#ffffff" />
      
      <CustomRing />
      
      <Environment preset="studio" />
    </>
  );
};

const CustomRing3D = () => {
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
        camera={{ position: [0, 0, 5], fov: 45 }}
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

export default CustomRing3D;
