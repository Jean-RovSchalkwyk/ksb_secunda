import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';

const openingHours = [
  { day: 'Monday', hours: '07:30 - 17:00' },
  { day: 'Tuesday', hours: '07:30 - 17:00' },
  { day: 'Wednesday', hours: '07:30 - 17:00' },
  { day: 'Thursday', hours: '07:30 - 17:00' },
  { day: 'Friday', hours: '07:30 - 15:00' },
  { day: 'Saturday', hours: 'Closed', closed: true },
  { day: 'Sunday', hours: 'Closed', closed: true },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (res.ok) { setStatus('success'); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); setTimeout(() => setStatus('idle'), 3000); }
      else { setStatus('error'); setTimeout(() => setStatus('idle'), 3000); }
    } catch { setStatus('error'); setTimeout(() => setStatus('idle'), 3000); }
  };

  const today = new Date().getDay();

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Reach out to our Secunda team for expert advice, quotations, or service requests.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"><CheckCircle size={40} className="text-green-600" /></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all" placeholder="Your name" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all" placeholder="your@email.com" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all" placeholder="+27 XX XXX XXXX" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">Subject</label><input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all" placeholder="How can we help?" /></div>
                </div>
                <div><label className="block text-sm font-medium text-gray-700 mb-2">Message *</label><textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none" placeholder="Tell us about your requirements..." /></div>
                <button type="submit" disabled={status === 'sending'} className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                  {status === 'sending' ? <><Loader2 size={20} className="animate-spin" /> Sending...</> : <><Send size={20} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0"><MapPin size={22} className="text-orange-600" /></div><div><h3 className="font-bold text-gray-900 mb-1">Our Location</h3><p className="text-gray-600 text-sm leading-relaxed">17 Albatross Street<br/>Secunda, 2302<br/>South Africa</p></div></div></div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0"><Phone size={22} className="text-green-600" /></div><div><h3 className="font-bold text-gray-900 mb-1">Phone</h3><a href="tel:+27176341949" className="text-gray-600 text-sm hover:text-orange-600 transition-colors block">+27 17 634 1949</a></div></div></div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0"><Mail size={22} className="text-blue-600" /></div><div><h3 className="font-bold text-gray-900 mb-1">Email</h3><a href="mailto:ksb_secunda@ksb.com" className="text-gray-600 text-sm hover:text-orange-600 transition-colors break-all">ksb_secunda@ksb.com</a></div></div></div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0"><Clock size={22} className="text-purple-600" /></div><h3 className="font-bold text-gray-900">Opening Hours</h3></div>
              <div className="space-y-2">
                {openingHours.map((item) => (
                  <div key={item.day} className={`flex justify-between text-sm py-1.5 px-3 rounded-lg ${item.closed ? 'text-gray-400 bg-gray-50' : today === (item.day === 'Sunday' ? 0 : item.day === 'Monday' ? 1 : item.day === 'Tuesday' ? 2 : item.day === 'Wednesday' ? 3 : item.day === 'Thursday' ? 4 : item.day === 'Friday' ? 5 : 6) ? 'text-orange-600 font-medium bg-orange-50' : 'text-gray-600'}`}>
                    <span>{item.day}</span><span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
