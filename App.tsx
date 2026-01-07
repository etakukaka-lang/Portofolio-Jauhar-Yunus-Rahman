import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NFTCarousel from './components/NFTCarousel';
import Gallery from './components/Gallery';
import About from './components/About';
import Features from './components/Features';
import Process from './components/Process';
import Contact from './components/Contact';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-primary text-white min-h-screen selection:bg-purple-500 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Global Gradient Overlay */}
      <div className="fixed inset-0 bg-hero-glow pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />        {/* Beranda */}
          <Features />    {/* Keahlian */}
          <NFTCarousel /> {/* Portofolio */}
          <Gallery />     {/* Galeri */}
          <About />       {/* Tentang Saya */}
          <Process />     {/* Pendekatan */}
          <Contact />     {/* Kontak */}
        </main>
        
        <footer className="py-8 border-t border-white/5 bg-black text-center text-gray-500 text-sm">
          <p>© 2024 Jauhar Yunus Rahman. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;