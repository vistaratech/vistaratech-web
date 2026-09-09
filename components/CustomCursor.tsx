import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorSize = 16;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<'default' | 'pointer' | 'text'>('default');

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      mouse.x.set(e.clientX - cursorSize / 2);
      mouse.y.set(e.clientY - cursorSize / 2);
    };

    const manageMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isPointer = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button');
      const isText = target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3';

      if (isPointer) {
        setIsHovering(true);
        setHoverType('pointer');
      } else if (isText) {
        setIsHovering(true);
        setHoverType('text');
      } else {
        setIsHovering(false);
        setHoverType('default');
      }
    };

    window.addEventListener('mousemove', manageMouseMove);
    window.addEventListener('mouseover', manageMouseOver);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      window.removeEventListener('mouseover', manageMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
        }}
        animate={{
          scale: isHovering ? (hoverType === 'pointer' ? 4 : 0.5) : 1,
          opacity: hoverType === 'text' ? 0.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
          {hoverType === 'pointer' && (
              <div className="w-full h-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-black rounded-full" />
              </div>
          )}
      </motion.div>
    </>
  );
};

export default CustomCursor;