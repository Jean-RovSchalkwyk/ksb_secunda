import { motion } from 'framer-motion';
import { HeadphonesIcon, Wrench, FileText, Truck, Settings } from 'lucide-react';

const services = [
  { icon: <HeadphonesIcon size={32} />, title: 'KSB Sales Office', description: 'Expert consultation and product selection for your specific requirements.', features: ['Product recommendations', 'Technical specifications', 'Quotations', 'Order processing'] },
  { icon: <Wrench size={32} />, title: 'KSB Service Center', description: 'Comprehensive after-sales support including maintenance, repairs, and spare parts.', features: ['Preventive maintenance', 'Emergency repairs', 'Spare parts supply', 'Equipment testing'] },
  { icon: <Settings size={32} />, title: 'Technical Services', description: 'Professional engineering support including system design and performance optimization.', features: ['System design', 'Installation support', 'Performance analysis', 'Energy audits'] },
  { icon: <FileText size={32} />, title: 'Spare Parts', description: 'Genuine KSB spare parts available with fast delivery.', features: ['Original parts', 'Fast delivery', 'Parts identification', 'Bulk ordering'] },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">Complete Pump & Valve Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">From sales to service, we provide end-to-end support for all your fluid handling needs.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3">{service.features.map((f) => (<li key={f} className="flex items-center gap-3 text-gray-700"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />{f}</li>))}</ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 grid sm:grid-cols-3 gap-6">
          {[{ value: 'Johannesburg', label: 'Main Workshop', icon: <Truck size={24} /> }, { value: '6', label: 'Regional Service Centres', icon: <Settings size={24} /> }, { value: 'Nationwide', label: 'Field Service Team', icon: <HeadphonesIcon size={24} /> }].map((item) => (
            <div key={item.label} className="bg-slate-900 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 mx-auto mb-4">{item.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-gray-400 text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
