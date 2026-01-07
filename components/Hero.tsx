import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, PenTool, Layout, Monitor } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-20 md:pb-10 overflow-hidden">
      
      {/* BACKGROUND VIDEO START */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Video Element */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://res.cloudinary.com/dv4utwvtn/video/upload/v1767764033/samurai-anime-boy-koi-in-sword-moewalls-com_1_mlvlax.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlays for Readability & Style */}
        {/* 1. Darken the video slightly overall */}
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        
        {/* 2. Purple tint to match brand */}
        <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay" />

        {/* 3. Bottom fade to blend with next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-[#09001a]" />
      </div>
      {/* BACKGROUND VIDEO END */}

      {/* Animated Background Glows (Kept subtle over video) */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen z-0" 
      />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Graphic Designer
            </div>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1]">
            Jauhar Yunus <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_auto] animate-gradient">
              Rahman
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl font-light text-white/90 drop-shadow-lg">
             Visual yang fungsional, bukan sekadar cantik.
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-300 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
            Saya membantu brand dan produk tampil jelas, konsisten, dan relevan lewat desain yang terstruktur dan mudah dipahami.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-btn-gradient text-white font-semibold text-lg shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all flex items-center justify-center gap-3 group"
            >
              Hubungi Saya
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Partners / Tools */}
          <motion.div variants={itemVariants} className="pt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6 md:gap-8 opacity-90 md:opacity-70">
             <div className="text-lg md:text-xl font-bold flex items-center gap-1 hover:text-purple-400 transition-colors cursor-default drop-shadow-md"><PenTool className="w-5 h-5 md:w-6 md:h-6" /> Figma</div>
             <div className="text-lg md:text-xl font-bold flex items-center gap-1 hover:text-pink-400 transition-colors cursor-default drop-shadow-md"><Layout className="w-5 h-5 md:w-6 md:h-6" /> UI Design</div>
             <div className="text-lg md:text-xl font-bold flex items-center gap-1 hover:text-blue-400 transition-colors cursor-default drop-shadow-md"><Monitor className="w-5 h-5 md:w-6 md:h-6" /> Branding</div>
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Card Simulation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="relative mt-8 lg:mt-0 hidden lg:block" // Hidden on mobile to let video shine, visible on desktop
        >
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20"
          >
             <div className="w-full max-w-[400px] lg:max-w-[500px] mx-auto aspect-[4/5] bg-gradient-to-b from-white/10 to-white/5 rounded-[2rem] md:rounded-[3rem] border border-white/20 backdrop-blur-2xl p-3 md:p-4 shadow-2xl relative overflow-hidden group">
                
                {/* Simulated 3D Image */}
                <div className="w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                   <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                      src="https://res.cloudinary.com/dv4utwvtn/image/upload/v1767760127/WhatsApp_Image_2026-01-07_at_11.27.45-min_uadp0q.jpg" 
                      alt="Jauhar Yunus Rahman" 
                      className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                   
                   {/* Top Floating Badge */}
                   <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-2xl flex items-center gap-2 cursor-pointer shadow-lg"
                   >
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] md:text-xs font-bold animate-pulse">ON</div>
                      <div>
                        <p className="text-[8px] md:text-[10px] text-gray-300 uppercase">Status</p>
                        <p className="text-xs md:text-sm font-bold">Open for Work</p>
                      </div>
                   </motion.div>

                   {/* Bottom Info */}
                   <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-2xl md:rounded-3xl flex items-center justify-between shadow-lg"
                   >
                      <div className="flex items-center gap-2 md:gap-3">
                         <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-purple-500 flex items-center justify-center font-bold">JY</div>
                         <div>
                            <p className="text-xs md:text-sm font-bold">Jauhar Yunus</p>
                            <p className="text-[10px] md:text-xs text-gray-400">Graphic Designer</p>
                         </div>
                      </div>
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white text-black flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 -rotate-45" />
                      </div>
                   </motion.div>
                </div>
             </div>
          </motion.div>

          {/* Decorative floating spheres */}
          <motion.div 
             animate={{ y: [10, -20, 10], rotate: [0, 5, 0] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="hidden sm:block absolute top-10 -left-4 lg:top-20 lg:-left-12 z-30 bg-gray-900/80 backdrop-blur-xl p-3 md:p-4 rounded-3xl border border-white/10 shadow-xl w-40 md:w-48 hover:border-purple-500/50 transition-colors"
          >
             <div className="flex items-center gap-3">
                <img src="https://res.cloudinary.com/dv4utwvtn/image/upload/v1767758498/FEED-3-min_lzrjaj.png" className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover shadow-sm" alt="Art" />
                <div>
                   <p className="text-[10px] md:text-xs text-gray-400">Latest Work</p>
                   <p className="text-xs md:text-sm font-bold font-mono">Feed Design</p>
                </div>
             </div>
          </motion.div>

        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;