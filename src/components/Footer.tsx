import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">KSB</div>
              <div><span className="text-xl font-bold">KSB</span><span className="block text-xs text-gray-400">Pumps & Valves</span></div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm mb-6">One of the world's leading suppliers of pumps, valves, and related services. Serving South Africa since 1959.</p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">{['Home', 'About Us', 'Products', 'Services', 'Contact'].map((link) => (<li key={link}><a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">{link}</a></li>))}</ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Product Categories</h4>
            <ul className="space-y-3">{['Waste Water Technology', 'Water Technology', 'Industry Technology', 'Building Services', 'Energy Technology', 'Spare Parts'].map((item) => (<li key={item}><a href="#products" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">{item}</a></li>))}</ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Secunda Branch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400"><MapPin size={18} className="shrink-0 mt-0.5 text-orange-500" />17 Albatross Street<br/>Secunda, 2302</li>
              <li><a href="tel:+27176341949" className="flex items-center gap-3 text-sm text-gray-400 hover:text-orange-400 transition-colors"><Phone size={18} className="shrink-0 text-orange-500" />+27 17 634 1949</a></li>
              <li><a href="mailto:ksb_secunda@ksb.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-orange-400 transition-colors"><Mail size={18} className="shrink-0 text-orange-500" />ksb_secunda@ksb.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; KSB Pumps and Valves (Pty) Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-400 transition-colors">Data Protection</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Company Information</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Compliance (EN)</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
