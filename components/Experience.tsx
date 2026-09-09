import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Environment, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Component to handle scroll-based rotation
const ScrollManager = ({ meshRef }: { meshRef: React.RefObject<THREE.Mesh> }) => {
    useFrame(() => {
        if (meshRef.current) {
            // Get scroll percentage from document
            const scrollY = window.scrollY;
            const height = document.body.scrollHeight - window.innerHeight;
            const progress = scrollY / (height || 1);
            
            // Rotate mesh based on total page scroll
            const targetRotation = progress * Math.PI * 2;
            
            // Smoothly interpolate current rotation to target
            meshRef.current.rotation.y = THREE.MathUtils.lerp(
                meshRef.current.rotation.y, 
                targetRotation + (meshRef.current.rotation.y % (Math.PI * 2)), 
                0.05
            );
        }
    });
    return null;
};

const LiquidMetal = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  
  const targetRotation = useRef(new THREE.Vector2(0, 0));

  // Handle mouse movement specifically for the 3D scene logic
  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      // Mouse interaction
      targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, state.mouse.y * 0.3, 0.05);
      targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, state.mouse.x * 0.3, 0.05);

      // Apply mouse rotation tilt on top of scroll rotation
      meshRef.current.rotation.x = targetRotation.current.x;
      // Note: Y rotation is primarily handled by ScrollManager, but we add mouse influence here?
      // Actually, let's let ScrollManager handle Y and just add a small offset here if needed.
      // But for simplicity, let's apply mouse X influence to Z axis for a "rolling" feel
      meshRef.current.rotation.z = targetRotation.current.y;

      // Dynamic distortion breathing
      materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, 0.4 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.15, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Sphere args={[1.4, 128, 128]} ref={meshRef} scale={2.0}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#0a0a0a"
          attach="material"
          distort={0.4}
          speed={2.5}
          roughness={0.15}
          metalness={0.95}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
      <ScrollManager meshRef={meshRef} />
    </Float>
  );
};

const Particles = () => {
    const count = 200;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for(let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return pos;
    }, []);

    const ref = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.01;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color="#6366f1"
                transparent
                opacity={0.4}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
}

const Experience: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 opacity-100 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 35 }} 
        dpr={[1, 2]}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <spotLight position={[-5, -5, -5]} intensity={5} color="#4f46e5" angle={0.5} penumbra={1} distance={20} />
        <pointLight position={[3, 3, 3]} intensity={2} color="#818cf8" />
        
        <LiquidMetal />
        <Particles />
        
        <Environment preset="night" />
        
        <fog attach="fog" args={['#050505', 5, 25]} />
      </Canvas>
    </div>
  );
};

export default Experience;