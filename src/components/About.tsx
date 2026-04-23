import { motion } from 'framer-motion';
import { Award, Users, Globe, Wrench, Building2, ShieldCheck } from 'lucide-react';

const features = [
  { icon: <Globe size={28} />, title: 'Global Leader', description: "One of the world's leading suppliers of pumps, valves, and related services." },
  { icon: <Building2 size={28} />, title: 'Since 1959', description: 'KSB South Africa established over 65 years ago, headquartered in Johannesburg.' },
  { icon: <Award size={28} />, title: 'B-BBEE Level 1', description: 'Proudly achieved the highest level of B-BBEE certification.' },
  { icon: <Users size={28} />, title: 'National Presence', description: 'Nine sales branches across SA, five companies in Sub-Saharan Africa.' },
  { icon: <Wrench size={28} />, title: 'Expert Service', description: 'Dedicated service division with workshop, regional centres, and field teams.' },
  { icon: <ShieldCheck size={28} />, title: 'Quality Assured', description: 'Modern manufacturing facilities meeting international standards.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">About KSB</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">Your Trusted Partner in Fluid Systems</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">KSB Pumps and Valves (Pty) Ltd delivers innovative pumping solutions with unmatched expertise and support across Southern Africa.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
          </div>
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Secunda Sales Office & Service Center</h3>
              <p className="text-gray-300 leading-relaxed">Our Secunda branch provides full sales support and service capabilities for the Mpumalanga region. Visit us or contact our team for expert assistance.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <a href="tel:+27176341949" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">Call Us Now</a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-colors">Send Enquiry</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
