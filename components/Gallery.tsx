import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Zap } from 'lucide-react';

// Tipe Data
type Category = 'Social Media' | 'Events' | 'Branding';

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  client: string;
  image: string;
  likes: number;
  timeLeft: string; // Mimic the "Time Left" in NFT card
}

// Data Lengkap
const galleryData: GalleryItem[] = [
  // --- Social Media (Dr. Azizah & Others) ---
  {
    id: 1,
    title: "Edukasi MPASI",
    category: "Social Media",
    client: "dr. Azizah",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767762339/1-5-min_kjprv8.png",
    likes: 234,
    timeLeft: "2024"
  },
  {
    id: 2,
    title: "Tips Parenting",
    category: "Social Media",
    client: "dr. Azizah",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767762344/1-6-min_vc7wvd.png",
    likes: 189,
    timeLeft: "2024"
  },
  {
    id: 3,
    title: "Kesehatan Anak",
    category: "Social Media",
    client: "dr. Azizah",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767762355/1-min_amsqbg.png",
    likes: 302,
    timeLeft: "2024"
  },
  {
    id: 4,
    title: "Workshop Info",
    category: "Social Media",
    client: "Personal Brand",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767762356/456250052-min_xrnyfw.png",
    likes: 156,
    timeLeft: "2024"
  },
  {
    id: 5,
    title: "Konsultasi",
    category: "Social Media",
    client: "dr. Azizah",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767762357/456250055-min_e2qtih.png",
    likes: 210,
    timeLeft: "2024"
  },
  {
    id: 6,
    title: "Daily Feed 01",
    category: "Social Media",
    client: "Client A",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767763556/1-min_zezlz6.png",
    likes: 145,
    timeLeft: "2023"
  },
  {
    id: 7,
    title: "Daily Feed 02",
    category: "Social Media",
    client: "Client A",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767763556/1-1-min_g87xqy.png",
    likes: 167,
    timeLeft: "2023"
  },
  {
    id: 8,
    title: "Daily Feed 03",
    category: "Social Media",
    client: "Client B",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767763557/1-2-min_c4dd01.png",
    likes: 198,
    timeLeft: "2023"
  },
  {
    id: 9,
    title: "Daily Feed 04",
    category: "Social Media",
    client: "Client B",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767763557/1-3-min_tg9nco.png",
    likes: 220,
    timeLeft: "2023"
  },
  
  // --- Events (Rundowns & Webinars) ---
  {
    id: 10,
    title: "Toddler Growth",
    category: "Events",
    client: "Workshop",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767759104/TODDLER_GROWTH_1_3_TAHUN-min_a7jjcy.png",
    likes: 340,
    timeLeft: "Event"
  },
  {
    id: 11,
    title: "GTM Workshop",
    category: "Events",
    client: "Seminar",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767759104/RUNDOWN_GTM_MAKAN_MANDIRI_WORKSHOP_1_4_Tahun_-min_oiqq4t.png",
    likes: 280,
    timeLeft: "Event"
  },
  {
    id: 12,
    title: "Smart Nutrition",
    category: "Events",
    client: "Webinar",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767759104/RUNDOWN_SMART_NUTRITION_DAY_0_6_TAHUN_-min_lmrxoj.png",
    likes: 310,
    timeLeft: "Event"
  },
  {
    id: 13,
    title: "Golden Start",
    category: "Events",
    client: "Campaign",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767759109/RUNDOWN_GOLDEN_START_0_12_BULAN-min_irgvsd.png",
    likes: 190,
    timeLeft: "Live"
  },
  {
    id: 14,
    title: "Makan Mandiri",
    category: "Events",
    client: "Workshop",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767759106/WORKSHOP_GTM_MAKAN_MANDIRI_1_4_Tahun_-min_rwq9hi.png",
    likes: 255,
    timeLeft: "Live"
  },

  // --- Branding & Others ---
  {
    id: 15,
    title: "Visual Identity",
    category: "Branding",
    client: "Feed Concept",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767758498/FEED-3-min_lzrjaj.png",
    likes: 400,
    timeLeft: "Brand"
  },
  {
    id: 16,
    title: "Solusi Anak",
    category: "Branding",
    client: "Content",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767758498/3_Solusi_untuk_Masalah_Besar_Anak_yang_Sering_Bikin_Orang_Tua_Cemas-min_mzgcj7.png",
    likes: 320,
    timeLeft: "Brand"
  },
  {
    id: 17,
    title: "Focus Training",
    category: "Branding",
    client: "Education",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767760554/Webinar_Melatih_Fokus_Anak-min_nlcj1w.png",
    likes: 150,
    timeLeft: "Brand"
  },
  {
    id: 18,
    title: "Dokter Konsul",
    category: "Branding",
    client: "Service",
    image: "https://res.cloudinary.com/dv4utwvtn/image/upload/v1767760558/KONSULTASI_INTENSIF_DENGAN_DOKTER-min_wnzmiw.png",
    likes: 210,
    timeLeft: "Brand"
  }
];

const categories: Category[] = ["Social Media", "Events", "Branding"];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Social Media");
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(2); // Center initial
  const [isMobile, setIsMobile] = useState(false);

  // Initialize Items based on Category
  useEffect(() => {
    const filtered = galleryData.filter(item => item.category === activeCategory);
    setItems(filtered);
    setActiveIndex(Math.floor(filtered.length / 2)); // Set center index
  }, [activeCategory]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // 3D Card Style Logic
  const getCardStyle = (index: number) => {
    let offset = index - activeIndex;
    
    // Limits visible cards
    const opacity = Math.abs(offset) > 3 ? 0 : offset === 0 ? 1 : Math.max(0.3, 1 - Math.abs(offset) * 0.3);
    const zIndex = 50 - Math.abs(offset);
    
    // Spacing
    const xSpacing = isMobile ? 120 : 260; // Increased spacing for wider cards
    const x = offset * xSpacing;
    
    // Rotation for curved effect
    const rotateY = offset * (isMobile ? -10 : -20);
    const scale = offset === 0 ? 1 : Math.max(0.85, 1 - Math.abs(offset) * 0.1);

    return {
      x,
      scale,
      opacity,
      zIndex,
      rotateY,
      y: Math.abs(offset) * (isMobile ? 15 : 30), // Arc downwards
    };
  };

  return (
    <section id="gallery" className="py-24 relative bg-black/40 overflow-hidden min-h-[900px] flex flex-col justify-center">
       {/* Background decorative blob */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

       <div className="container mx-auto px-4 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
             <span className="text-purple-400 uppercase tracking-widest text-xs font-bold">Showcase</span>
             <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Galeri Karya</h2>
             
             {/* Category Tabs */}
             <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${
                      activeCategory === cat 
                        ? 'bg-purple-600 border-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </motion.div>

          {/* 3D Carousel Container */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true }}
             className="relative h-[550px] md:h-[650px] flex items-center justify-center perspective-1000"
          >
             <AnimatePresence mode='popLayout'>
                {items.map((item, index) => {
                   const style = getCardStyle(index);

                   return (
                      <motion.div
                        key={`${item.category}-${item.id}`}
                        layoutId={`${item.category}-${item.id}`}
                        // ENTRANCE TRANSITION: Cards appear from below with 0 opacity
                        initial={{ opacity: 0, scale: 0.5, y: 100 }}
                        animate={style}
                        // EXIT TRANSITION: Cards shrink and fade out
                        exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}
                        transition={{ 
                           type: "spring", 
                           stiffness: 150, 
                           damping: 20,
                           opacity: { duration: 0.5 }
                        }}
                        onClick={() => setActiveIndex(index)}
                        className={`absolute w-[280px] md:w-[340px] h-[480px] md:h-[580px] rounded-3xl p-3 cursor-pointer group`}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                         {/* Card Content */}
                         <div className={`w-full h-full rounded-2xl bg-[#1a1425] border ${index === activeIndex ? 'border-purple-500/50' : 'border-white/5'} overflow-hidden relative flex flex-col shadow-2xl transition-colors duration-300`}>
                            
                            {/* Image Area - FIXED 4:5 ASPECT RATIO */}
                            <div className="relative w-full aspect-[4/5] bg-gray-900 overflow-hidden rounded-t-xl">
                               {/* 1. Blurred Background (Fills space for non-4:5 images) */}
                               <div className="absolute inset-0">
                                  <img 
                                    src={item.image} 
                                    className="w-full h-full object-cover blur-xl opacity-40 scale-110" 
                                    alt="" 
                                  />
                               </div>
                               
                               {/* 2. Main Image (Contained to prevent cropping) */}
                               <img 
                                 src={item.image} 
                                 alt={item.title} 
                                 className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                               />
                               
                               {/* Category Tag on Image */}
                               <div className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">{item.category}</span>
                               </div>
                            </div>

                            {/* Details Area (Bottom) - Takes remaining space */}
                            <div className="flex-1 p-4 bg-[#130d1e] relative z-10 border-t border-white/5 flex flex-col justify-between">
                               <div>
                                  <h3 className="text-white font-bold text-lg truncate">{item.title}</h3>
                                  <div className="flex items-center gap-2 mt-2">
                                     <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-[8px] text-white font-bold">
                                        JY
                                     </div>
                                     <span className="text-xs text-gray-400 truncate max-w-[150px]">{item.client}</span>
                                  </div>
                               </div>

                               <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-2">
                                  <div className="flex items-center gap-1.5 text-gray-300 group-hover:text-pink-400 transition-colors">
                                     <Heart className="w-4 h-4" />
                                     <span className="text-xs font-bold">{item.likes}</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-purple-400 font-mono text-xs">
                                     <Zap className="w-3 h-3 fill-current" />
                                     <span>{item.timeLeft}</span>
                                  </div>
                                  
                                  <button className="text-[10px] font-bold text-white bg-white/10 hover:bg-purple-600 px-3 py-1.5 rounded-lg transition-colors">
                                     View Detail
                                  </button>
                               </div>
                            </div>
                         </div>
                      </motion.div>
                   );
                })}
             </AnimatePresence>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
             <button 
               onClick={handlePrev}
               className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-purple-600 hover:border-purple-500 transition-all group"
             >
                <ChevronLeft className="w-6 h-6 text-gray-300 group-hover:text-white" />
             </button>
             
             {/* Progress Indicators */}
             <div className="flex gap-2">
               {items.map((_, idx) => (
                 <div 
                   key={idx} 
                   className={`h-1 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-purple-500' : 'w-2 bg-gray-700'}`}
                 />
               ))}
             </div>

             <button 
               onClick={handleNext}
               className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-purple-600 hover:border-purple-500 transition-all group"
             >
                <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-white" />
             </button>
          </div>

       </div>

       <style>{`
         .perspective-1000 {
           perspective: 1000px;
         }
       `}</style>
    </section>
  );
};

export default Gallery;