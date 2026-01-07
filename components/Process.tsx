import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layout, Maximize, MessageSquare } from 'lucide-react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  {
    id: 1,
    title: 'Paham Kebutuhan',
    description: 'Memahami kebutuhan mendalam sebelum mulai membuat visual apapun.',
    icon: Brain,
  },
  {
    id: 2,
    title: 'Struktur & Hierarki',
    description: 'Mengutamakan struktur, hierarki informasi, dan keterbacaan yang jelas.',
    icon: Layout,
  },
  {
    id: 3,
    title: 'Desain Scalable',
    description: 'Membuat desain yang scalable dan siap dikembangkan lebih lanjut.',
    icon: Maximize,
  },
  {
    id: 4,
    title: 'Revisi Logis',
    description: 'Melakukan revisi berbasis logika dan kebutuhan, bukan sekadar selera semata.',
    icon: MessageSquare,
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
           <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">Workflow</span>
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Pendekatan Kerja</h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all cursor-pointer group"
              >
                 <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-purple-400" />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                 </div>
              </motion.div>
            ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center pb-8 pt-12 md:pt-16">
           <h3 className="text-lg md:text-xl tracking-[0.3em] md:tracking-[0.5em] text-gray-500 font-light uppercase">Visual & Logic</h3>
        </div>

      </div>
    </section>
  );
};

export default Process;