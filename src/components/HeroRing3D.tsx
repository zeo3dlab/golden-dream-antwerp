import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

const GoldRing = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusGeometry args={[1.2, 0.35, 128, 256]} />
        <meshPhysicalMaterial
          color="#d4af37"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={3}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={1}
        />
      </mesh>
    </Float>
  );
};

const DiamondGem = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[0, 1.35, 0]} scale={0.3} castShadow receiveShadow>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0}
          roughness={0}
          transmission={1}
          ior={2.42}
          thickness={0.5}
          envMapIntensity={4}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
          specularIntensity={1}
          specularColor="#ffffff"
        />
      </mesh>
    </Float>
  );
};

const SmallDiamond = ({ position }: { position: [number, number, number] }) => {
  return (
    <mesh position={position} scale={0.08} castShadow receiveShadow>
      <octahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={0}
        roughness={0}
        transmission={0.8}
        ior={2.42}
        thickness={0.3}
        envMapIntensity={3}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={2} 
        color="#ffd700" 
        castShadow 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.8} color="#fff5e6" />
      <pointLight position={[0, 5, 3]} intensity={1.5} color="#d4af37" />
      <pointLight position={[3, -2, 3]} intensity={0.5} color="#ffffff" />
      <spotLight 
        position={[0, 8, 0]} 
        angle={0.3} 
        penumbra={1} 
        intensity={1} 
        color="#ffffff" 
        castShadow 
      />
      
      <GoldRing />
      <DiamondGem />
      
      {/* Small decorative diamonds */}
      <SmallDiamond position={[0.8, 0.3, 0.5]} />
      <SmallDiamond position={[-0.8, 0.3, 0.5]} />
      <SmallDiamond position={[0.6, -0.2, 0.3]} />
      <SmallDiamond position={[-0.6, -0.2, 0.3]} />
      
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4} 
      />
      
      <Environment 
        preset="studio" 
        background={false}
        environmentIntensity={1.5}
      />
    </>
  );
};

const HeroRing3D = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          shadowMap: true,
          shadowMapType: THREE.PCFSoftShadowMap
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0.2, 0.5, 0]}
            polar={[-0.1, 0.4]}
            azimuth={[-1, 1]}
            config={{ mass: 2, tension: 400, friction: 40 }}
            snap={{ mass: 4, tension: 400, friction: 40 }}
          >
            <Scene />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroRing3D;
