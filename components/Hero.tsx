import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 120, opacity: 0, rotate: 3 },
  show: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const // Custom ease resembling expo.out
    },
  },
};

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl z-10"
      >
        {/* Large Typography with mask reveal */}
        <div className="overflow-hidden -mb-2 md:-mb-8">
          <motion.h1 variants={item} className="text-[14vw] md:text-[11rem] font-display font-bold leading-[0.8] tracking-tighter text-white mix-blend-difference origin-left">
            INNOVATION
          </motion.h1>
        </div>
        <div className="overflow-hidden -mb-2 md:-mb-8">
          <motion.h1 variants={item} className="text-[14vw] md:text-[11rem] font-display font-bold leading-[0.8] tracking-tighter text-white mix-blend-difference origin-left pl-12 md:pl-32">
            MEETS
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 variants={item} className="text-[14vw] md:text-[11rem] font-display font-bold leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-700 origin-left">
            EXCELLENCE
          </motion.h1>
        </div>

        <motion.div
          variants={item}
          className="mt-16 md:ml-auto max-w-md md:mr-32"
        >
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light border-l border-white/20 pl-6">
            Transforming businesses through cutting-edge technology solutions. We deliver excellence in web, mobile, AI, and cloud services across 10+ countries.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-8 md:left-16 flex items-center gap-6 z-10"
      >
        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center animate-pulse bg-white/5 backdrop-blur-sm">
          <ArrowDown className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-1">Scroll to explore</span>
          <div className="w-full h-[1px] bg-gray-800 overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;