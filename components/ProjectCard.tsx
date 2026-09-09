import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Physics Variables
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the tilt effect
  const mouseX = useSpring(x, { stiffness: 200, damping: 10 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 10 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left;
    const mouseYVal = e.clientY - rect.top;
    x.set(mouseXVal / width - 0.5);
    y.set(mouseYVal / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
        ref={cardRef}
        className="flex-none relative w-[80vw] md:w-[45vw] lg:w-[35vw] aspect-[4/5] md:aspect-[3/4] group perspective-1000 cursor-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
            rotateX, 
            rotateY, 
            transformStyle: "preserve-3d" 
        }}
    >
        <motion.div 
            className="w-full h-full relative overflow-hidden bg-[#111] border border-white/5 rounded-sm"
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Image Layer with Parallax */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover scale-110 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                    style={{
                        x: useTransform(mouseX, [-0.5, 0.5], ["-5%", "5%"]),
                        y: useTransform(mouseY, [-0.5, 0.5], ["-5%", "5%"]),
                    }}
                />
            </div>
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 z-10 pointer-events-none" />
            
            {/* Glassy Shine Effect */}
            <motion.div 
                className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                    background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.1) 40%, transparent 60%)" 
                }}
            />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-30 flex flex-col justify-end h-full pointer-events-none translate-z-20">
                 <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <div className="flex items-center gap-4 mb-4 overflow-hidden">
                         <motion.span className="text-xs font-mono text-brand-accent tracking-widest uppercase">
                             {project.category}
                         </motion.span>
                         <span className="text-white/20">•</span>
                         <span className="text-xs font-mono text-white/60">{project.year}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-none">
                        {project.title}
                    </h3>
                 </div>
            </div>

            {/* Hover Button */}
            <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-black" />
                </div>
            </div>
        </motion.div>
    </motion.div>
  );
};

export default ProjectCard;