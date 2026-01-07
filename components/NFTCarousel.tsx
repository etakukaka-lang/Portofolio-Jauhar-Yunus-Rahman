import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

interface CardData {
  id: number;
  title: string;
  author: string;
  price: string;
  likes: string;
  image: string;
  accentColor: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: 'GTM Makan',
    author: 'Workshop',
    price: '2024',
    likes: 'Feed',
    image: 'https://res.cloudinary.com/dv4utwvtn/image/upload/v1767759104/RUNDOWN_GTM_MAKAN_MANDIRI_WORKSHOP_1_4_Tahun_-min_oiqq4t.png',
    accentColor: 'from-purple-600 to-indigo-600'
  },
  {
    id: 2,
    title: 'Smart Nutrition',
    author: 'Event',
    price: '2024',
    likes: 'Poster',
    image: 'https://res.cloudinary.com/dv4utwvtn/image/upload/v1767759104/RUNDOWN_SMART_NUTRITION_DAY_0_6_TAHUN_-min_lmrxoj.png',
    accentColor: 'from-pink-500 to-rose-500'
  },
  {
    id: 3,
    title: 'Toddler Growth',
    author: 'Education',
    price: '2023',
    likes: 'Social',
    image: 'https://res.cloudinary.com/dv4utwvtn/image/upload/v1767759105/RUNDOWN_TODDLER_GROWTH_1_3_TAHUN-min_ba8car.png',
    accentColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 4,
    title: 'Golden Start',
    author: 'Campaign',
    price: '2023',
    likes: 'Flyer',
    image: 'https://res.cloudinary.com/dv4utwvtn/image/upload/v1767759109/RUNDOWN_GOLDEN_START_0_12_BULAN-min_irgvsd.png',
    accentColor: 'from-fuchsia-500 to-purple-600'
  },
  {
    id: 5,
    title: 'Makan Mandiri',
    author: 'Workshop',
    price: '2024',
    likes: 'Feed',
    image: 'https://res.cloudinary.com/dv4utwvtn/image/upload/v1767759106/WORKSHOP_GTM_MAKAN_MANDIRI_1_4_Tahun_-min_rwq9hi.png',
    accentColor: 'from-violet-500 to-indigo-500'
  },
];

const NFTCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper to determine styles based on distance from active index
  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);
    
    return {
      x: offset * 280, // Increased spacing for wider spread like Photo 2
      scale: offset === 0 ? 1.1 : 1 - absOffset * 0.1, 
      zIndex: 100 - absOffset,
      opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.1,
      rotateY: offset * -12, // Reduced rotation for cleaner look
    };
  };

  // Mobile spacing adjustments - Adjusted to be more spread out
  const getMobileCardStyle = (index: number) => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);
    
    return {
      x: offset * 110, // Increased from 70 to 110 to avoid single-stack look
      scale: offset === 0 ? 1.05 : 0.9 - absOffset * 0.15,
      zIndex: 100 - absOffset,
      opacity: absOffset > 1.5 ? 0 : 1, // Keep neighbors visible
      rotateY: offset * -8,
    };
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#09001a] to-[#12052a]">
       {/* Background Glow */}
       <motion.div 
         animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
         transition={{ duration: 5, repeat: Infinity }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" 
       />

       <div className="container mx-auto px-4">
          {/* Header Entrance Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 relative z-10"
          >
            <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">Portofolio</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Karya Terbaru</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
                Beberapa proyek yang pernah saya kerjakan mencakup desain antarmuka, materi promosi digital, dan eksplorasi visual branding.
            </p>
          </motion.div>

          {/* Carousel Entrance Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[450px] md:h-[550px] flex items-center justify-center relative perspective-1000"
          >
             {cards.map((card, index) => {
                const offset = index - activeIndex;
                const isActive = offset === 0;

                return (
                  <motion.div
                    key={card.id}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute w-[260px] md:w-[320px] aspect-[3/4] rounded-[2rem] cursor-pointer transition-shadow duration-300 ${isActive ? 'shadow-[0_0_50px_rgba(139,92,246,0.3)]' : ''}`}
                    initial={false}
                    animate={isMobile ? getMobileCardStyle(index) : getCardStyle(index)}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                     {/* Inner Card - Handles Floating/Levitation Animation */}
                     <motion.div 
                        className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gray-900 border border-white/10"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 4 + (index * 0.5), // Staggered duration for natural feel
                          ease: "easeInOut",
                          delay: index * 0.2 // Staggered start
                        }}
                     >
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                        {/* Info Panel */}
                        <motion.div 
                          className={`absolute bottom-0 left-0 right-0 p-1`}
                          animate={{ opacity: Math.abs(offset) > 1 ? 0 : 1 }}
                        >
                           <div className={`relative overflow-hidden rounded-[1.8rem] p-5 backdrop-blur-xl border-t border-white/20 ${isActive ? `bg-gradient-to-r ${card.accentColor}` : 'bg-black/40'}`}>
                              {/* Background sheen for active */}
                              {isActive && (
                                <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
                              )}

                              <div className="relative z-10 flex justify-between items-end">
                                 <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                                    <p className="text-xs text-white/80 font-medium">by {card.author}</p>
                                 </div>
                                 
                                 <div className="text-right space-y-2">
                                    <div className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                       <span className="text-xs font-bold text-white">{card.price}</span>
                                    </div>
                                    <div className="flex items-center justify-end gap-1.5 text-white/90">
                                       <Eye className="w-3.5 h-3.5 fill-current" />
                                       <span className="text-xs font-bold">{card.likes}</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     </motion.div>
                  </motion.div>
                );
             })}
          </motion.div>
          
          {/* Navigation Dots */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mt-8"
          >
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-purple-500' : 'bg-gray-600 hover:bg-gray-500'}`}
              />
            ))}
          </motion.div>
       </div>

       <style>{`
         .perspective-1000 {
           perspective: 1000px;
         }
       `}</style>
    </section>
  );
};

export default NFTCarousel;