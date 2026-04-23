import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg">
              KSB
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">KSB</span>
              <span className="block text-xs text-gray-500 -mt-1">Pumps & Valves</span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full" />
              </a>
            ))}
            <a href="#contact" className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all transform hover:-translate-y-0.5">
              Get Quote
            </a>
          </div>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-4">
              Get Quote
            </a>
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <a href="tel:+27176341949" className="flex items-center gap-2 text-sm text-gray-600"><Phone size={16} /> +27 17 634 1949</a>
              <a href="mailto:ksb_secunda@ksb.com" className="flex items-center gap-2 text-sm text-gray-600"><Mail size={16} /> ksb_secunda@ksb.com</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
