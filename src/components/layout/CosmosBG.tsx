'use client' // IMPORTANTE: Los componentes 3D deben ser Client Components

import { Canvas } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'

function Scene() {
    return (
        <>
            {/* 
        Stars: Genera miles de partículas que simulan estrellas.
        radius: Tamaño de la esfera de estrellas.
        depth: Profundidad de la animación.
        count: Cantidad de estrellas.
        factor: Brillo de las estrellas.
      */}
            <Stars
                radius={100}       // Radio grande para envolver la cámara
                depth={50}         // Profundidad
                count={5000}       // 5000 estrellas
                factor={4}         // Tamaño
                saturation={0}     // 0 = Blanco puro, 1 = Colorido
                fade               // Las estrellas lejanas se desvanecen
                speed={1}          // Velocidad de rotación
            />

            {/* 
        Float: Hace flotar suavemente lo que tenga dentro.
        Útil para un planeta o una forma geométrica abstracta si quieres.
      */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh>
                    {/* Un pequeño planeta o sol abstracto de color púrpura */}
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial
                        color="#4c1d95" // Purple-800 de Tailwind
                        emissive="#4c1d95"
                        emissiveIntensity={0.8}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
            </Float>
        </>
    )
}

interface CosmosBGProps {
    children?: React.ReactNode;
}

export default function CosmosBG({ children }: CosmosBGProps) {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden isolate">
            <div className="absolute inset-0 z-[-1] pointer-events-none">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <color attach="background" args={['#000000']} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Scene />
                </Canvas>
            </div>

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    )
}