import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-t from-black to-[#09001a]">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
             <div>
               <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">Kontak</span>
               <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
                 Siap untuk <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Kolaborasi?</span>
               </h2>
               <p className="text-gray-400 mt-4 text-lg max-w-md">
                 Jangan ragu untuk menghubungi saya. Mari diskusikan bagaimana kita bisa meningkatkan visual brand Anda ke level selanjutnya.
               </p>
             </div>

             <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                   <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-purple-400" />
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-white">Email</h3>
                      <p className="text-gray-400">jauhar.yunus@example.com</p>
                   </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                   <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-white">WhatsApp</h3>
                      <p className="text-gray-400">+62 812 3456 7890</p>
                   </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                   <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-blue-400" />
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-white">Lokasi</h3>
                      <p className="text-gray-400">Indonesia, Remote Available</p>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl"
          >
             <form className="space-y-6">
                <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-300">Nama Lengkap</label>
                   <input type="text" placeholder="Masukkan nama Anda" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" />
                </div>
                
                <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-300">Email Address</label>
                   <input type="email" placeholder="nama@email.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-300">Pesan</label>
                   <textarea rows={4} placeholder="Ceritakan tentang proyek Anda..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"></textarea>
                </div>

                <button type="button" className="w-full py-4 rounded-xl bg-btn-gradient text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                   <Send className="w-5 h-5" />
                   Kirim Pesan
                </button>
             </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;