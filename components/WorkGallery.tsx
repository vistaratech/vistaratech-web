import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame, useMotionValue } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const WorkGallery: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    
    // This tracks the scroll progress OF THE CONTAINER (600vh height).
    // sticky layout pins the viewport while we scroll through this height.
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Physics: Add mass and damping to the scroll value for a heavy, luxurious feel
    const smoothProgress = useSpring(scrollYProgress, { 
        stiffness: 40, 
        damping: 15, 
        mass: 1,
        restDelta: 0.0001 
    });

    // TRANSFORM LOGIC:
    // 0% progress -> 0% x (Start)
    // 100% progress -> -X% x (End)
    // We calculate the end percentage based on estimated width of content vs viewport.
    // Moving to -90% ensures we see the last card + some padding.
    const x = useTransform(smoothProgress, [0, 1], ["0%", "-90%"]);
    
    // VELOCITY EFFECTS:
    // Skew the container based on how fast the user scrolls
    const scrollVelocity = useVelocity(smoothProgress);
    const skewX = useTransform(scrollVelocity, [-1, 1], ["2deg", "-2deg"]);
    const scale = useTransform(scrollVelocity, [-1, 1], [1, 0.99]);
    
    // Parallax background text moves at a different speed (slower)
    const textParallax = useTransform(smoothProgress, [0, 1], ["10%", "50%"]);
    
    // Fade out slightly at the very end to smooth the transition to the next section
    const opacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

    return (
        // The container must be TALL (e.g., 600vh) to allow time for the horizontal scroll.
        // The content inside is "sticky" so it stays on screen while we scroll past the container.
        <section ref={targetRef} className="relative h-[600vh] w-full">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden perspective-1000 bg-brand-black/50 backdrop-blur-sm">
                
                {/* Ambient Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none" />

                {/* Background Parallax Typography */}
                <motion.div 
                    style={{ x: textParallax }}
                    className="absolute top-[15%] left-[-10%] w-[150%] text-[25vw] leading-none font-display font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none z-0"
                >
                    SELECTED WORKS — 2024
                </motion.div>

                {/* THE MOVING TRACK */}
                <motion.div 
                    style={{ x, skewX, scale, opacity }} 
                    className="flex gap-8 md:gap-24 px-8 md:px-24 items-center will-change-transform z-10 h-full origin-center py-20"
                >
                    {/* Intro Title Card */}
                    <div className="flex-none min-w-[90vw] md:min-w-[35vw] flex flex-col justify-center px-4 mix-blend-difference relative z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="w-20 h-1 bg-brand-accent mb-8" />
                            
                            <h2 className="text-[15vw] md:text-[8vw] leading-[0.8] font-display font-bold text-white tracking-tighter mb-8">
                                RECENT<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">PROJECTS</span>
                            </h2>
                            
                            <p className="text-xl text-gray-400 max-w-md font-light leading-relaxed">
                                A curated selection of digital products, websites, and brand identities that push boundaries.
                            </p>
                        </motion.div>
                    </div>

                    {/* Project Cards */}
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                    
                    {/* End Spacer to ensure we can scroll past the last card */}
                    <div className="flex-none min-w-[20vw]" />
                </motion.div>

                {/* Scroll Progress Indicator */}
                <motion.div 
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/10 overflow-hidden z-30"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]) }}
                >
                    <motion.div 
                        className="h-full bg-white" 
                        style={{ scaleX: smoothProgress, transformOrigin: "left" }} 
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default WorkGallery;