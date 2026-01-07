import React from 'react';
import { Layers, Monitor, Layout, Type } from 'lucide-react';
import { FeatureItem } from '../types';
import { motion, Variants } from 'framer-motion';

const features: FeatureItem[] = [
  {
    id: '01',
    title: 'Graphic Design',
    description: 'Membuat visual yang kuat untuk berbagai kebutuhan brand dan marketing.',
    icon: Layers,
    color: 'text-purple-400',
  },
  {
    id: '02',
    title: 'UI Design',
    description: 'Merancang antarmuka pengguna yang bersih, fungsional, dan user-friendly.',
    icon: Monitor,
    color: 'text-pink-400',
  },
  {
    id: '03',
    title: 'Visual Branding',
    description: 'Membangun identitas visual yang konsisten agar brand mudah dikenali.',
    icon: Layout,
    color: 'text-blue-400',
  },
  {
    id: '04',
    title: 'Layout & Typography',
    description: 'Menata informasi dengan struktur hierarki yang jelas dan mudah dibaca.',
    icon: Type,
    color: 'text-cyan-400',
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 space-y-4"
        >
           <span className="text-purple-400 uppercase tracking-widest text-xs font-bold">Skill Set</span>
           <h2 className="text-3xl md:text-5xl font-bold">Keahlian &<br /> Tools</h2>
           <p className="text-gray-400 max-w-2xl mx-auto">
             Tools utama saya adalah Figma, yang saya gunakan untuk menciptakan desain yang presisi dan sistematis.
           </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={item}
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                boxShadow: "0 20px 40px -15px rgba(124, 58, 237, 0.2)"
              }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/5 transition-all group overflow-hidden"
            >
               {/* Hover Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

               {/* Icon */}
               <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ${feature.color}`}>
                  <feature.icon className="w-7 h-7" />
               </div>

               <h3 className="text-xl font-bold mb-3 relative z-10">{feature.title}</h3>
               <p className="text-sm text-gray-400 leading-relaxed mb-10 relative z-10 group-hover:text-gray-300 transition-colors">
                 {feature.description}
               </p>

               {/* Large Background Number */}
               <span className="absolute bottom-4 right-6 text-6xl font-bold text-white/5 select-none font-serif group-hover:text-white/10 group-hover:scale-110 transition-all duration-500">
                 {feature.id}
               </span>
               
               {/* Active Border Effect */}
               <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/20 rounded-3xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;