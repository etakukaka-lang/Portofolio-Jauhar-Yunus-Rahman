import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Content - Centered */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto space-y-6 text-center"
        >
          <div className="text-purple-400 font-semibold tracking-wider text-sm">Tentang Saya</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Design bukan hanya estetika, <br /> tapi soal pesan.
          </h2>
          <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            Saya seorang graphic designer yang terbiasa mengerjakan desain digital dengan pendekatan sistematis dan detail-oriented. Saya menggunakan Figma sebagai alat utama untuk merancang UI, visual branding, dan materi digital lain yang membutuhkan konsistensi dan kolaborasi yang efisien.
            <br /><br />
            Bagi saya, desain bukan hanya soal estetika, tapi soal bagaimana pesan tersampaikan dengan cepat dan tepat.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white hover:text-purple-900 transition-all">
                Lihat Portofolio
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;