import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from './Logo';

const Footer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <footer ref={ref} className="py-24 px-8 md:px-16 min-h-screen flex flex-col justify-between relative overflow-hidden bg-[#080808]">
      {/* Decorative huge text in background */}
      <div className="absolute bottom-0 left-0 w-full select-none pointer-events-none opacity-[0.03]">
        <motion.h1
          style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
          className="text-[25vw] leading-none font-display font-bold whitespace-nowrap text-white"
        >
          LET'S CONNECT
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 z-10">
        <div>
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-12 leading-[0.9]">
            LET'S BUILD<br />TOGETHER
          </h2>
          <motion.div
            className="inline-block relative group"
            whileHover="hover"
          >
            <a href="mailto:info.vistaratech@gmail.com" className="text-3xl md:text-5xl font-light relative z-10 block py-2">
              info.vistaratech@gmail.com
            </a>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent origin-left"
              initial={{ scaleX: 0 }}
              variants={{ hover: { scaleX: 1 } }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 md:items-end justify-end">
          <div className="grid grid-cols-2 gap-24 text-base text-gray-400">
            <ul className="space-y-4">
              <li className="text-white font-mono text-xs tracking-widest mb-4 opacity-50">SOCIALS</li>
              <li>
                <a href="https://www.linkedin.com/company/vistaratech" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.instagram.com/info.vistara_tech/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Instagram</a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61577979906927" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">Facebook</a>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="text-white font-mono text-xs tracking-widest mb-4 opacity-50">SITEMAP</li>
              {['Work', 'Services', 'Team', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end md:items-center border-t border-white/10 pt-12 mt-auto z-10">
        <div className="flex items-center gap-3">
          <Logo size={24} showText={false} variant="interlock" />
          <p className="text-sm text-gray-400 font-mono">© {new Date().getFullYear()} Vistara Tech. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-4 md:mt-0">
          <span>Global Services</span>
          <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></span>
          <span>60+ Team Members</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;