import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Smooth Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-accent to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        // Fixed easing: ensure control points are valid
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="fixed top-0 left-0 w-full flex justify-between items-center px-8 md:px-16 py-8 z-40 mix-blend-difference text-white pointer-events-none"
      >
        <div className="pointer-events-auto">
          <a href="#">
            <Logo size={42} variant="interlock" />
          </a>
        </div>

        <ul className="hidden md:flex gap-10 font-medium text-sm tracking-wide pointer-events-auto">
          {NAV_ITEMS.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
            >
              <a href={item.href} className="hover:text-gray-300 transition-colors duration-300 relative group py-2">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        <button className="md:hidden text-white pointer-events-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
      </motion.nav>
    </>
  );
};

export default Navbar;