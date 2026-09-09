import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import WorkGallery from './components/WorkGallery';
import Team from './components/Team';
import Services from './components/Services';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
// @ts-ignore
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling with optimized settings for scroll-jacking
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    // REMOVED 'overflow-x-hidden' from here. It breaks position: sticky.
    // We rely on the body style in index.html for horizontal overflow handling.
    <div className="relative bg-brand-black text-white min-h-screen cursor-none selection:bg-brand-accent selection:text-white">
      <CustomCursor />
      <Navbar />

      {/* Persistent 3D Background */}
      <Suspense fallback={null}>
        <Experience />
      </Suspense>

      <main className="relative z-10">
        <Hero />

        {/* Horizontal Scrolling Section - ID used for anchor navigation */}
        <div id="work">
          <WorkGallery />
        </div>

        {/* Team Section */}
        <div id="team" className="relative z-20 bg-brand-black">
          <Team />
        </div>

        {/* Services section acts as the "ground" that the gallery scrolls into */}
        <div className="relative z-20 bg-brand-black">
          <Services />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;