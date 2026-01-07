import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Beranda', href: '#' },
  { label: 'Keahlian', href: '#features' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Tentang Saya', href: '#about' },
  { label: 'Pendekatan', href: '#process' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-primary/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:text-white transition-colors">
            Jauhar
          </span>
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse group-hover:scale-150 transition-transform" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8" onMouseLeave={() => setHoveredIndex(null)}>
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative px-2 py-1"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {item.label}
              {hoveredIndex === index && (
                <motion.span
                  layoutId="hover-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-gray-300 hover:text-white transition-colors hover:scale-110 active:scale-95 duration-200">
            <Search className="w-5 h-5" />
          </button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-6 py-2.5 rounded-full bg-btn-gradient text-white font-medium text-sm shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all"
          >
            Kontak
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-xl font-medium text-gray-300 hover:text-white border-b border-white/5 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 mt-4"
            >
               <button className="flex items-center gap-2 text-gray-300 hover:text-white">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
               </button>
               <button 
                  onClick={scrollToContact}
                  className="w-full py-4 rounded-xl bg-btn-gradient text-white font-bold text-lg shadow-lg"
               >
                 Kontak Saya
               </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;