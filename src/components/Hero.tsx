import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)`}} />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <motion.div animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[15%] w-24 h-24 border-2 border-orange-500/30 rounded-xl hidden lg:block" />
      <motion.div animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-32 right-[25%] w-16 h-16 bg-orange-500/10 rounded-full hidden lg:block" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-400 text-sm font-medium">B-BBEE Level 1 Certified</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              World-Class{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Pumps & Valves</span>{' '}
              Solutions
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              KSB is one of the world's leading suppliers of pumps, valves, and related services. Serving South Africa since 1959 with excellence in manufacturing, sales, and after-sales support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all transform hover:-translate-y-1">
                Request a Quote <ArrowRight size={20} />
              </a>
              <a href="#products" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                Explore Products
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {[{ value: '65+', label: 'Years in SA' }, { value: '9+', label: 'Branches' }, { value: 'L1', label: 'B-BBEE' }].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full blur-3xl" />
              <div className="absolute inset-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full border border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/30">
                    <span className="text-5xl font-bold text-white">KSB</span>
                  </div>
                  <p className="text-gray-300 font-medium text-lg">Pumps and Valves</p>
                  <p className="text-gray-500 text-sm mt-1">Secunda Branch</p>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute inset-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-14 h-14 bg-blue-500/80 rounded-xl flex items-center justify-center shadow-lg"><span className="text-white text-xs font-bold">H2O</span></div>
                  </motion.div>
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="absolute inset-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-14 h-14 bg-green-500/80 rounded-xl flex items-center justify-center shadow-lg"><span className="text-white text-xs font-bold">ECO</span></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown size={28} className="text-white/50" />
      </motion.div>
    </section>
  );
}
