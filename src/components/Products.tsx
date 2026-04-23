import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Factory, Building, Zap, Waves, Cog, ArrowRight, Loader2 } from 'lucide-react';

interface Product { id: number; name: string; description: string; category: string; }

const categoryIcons: Record<string, React.ReactNode> = {
  'Waste Water': <Droplets size={32} />,
  'Water Technology': <Waves size={32} />,
  'Industry': <Factory size={32} />,
  'Building Services': <Building size={32} />,
  'Energy': <Zap size={32} />,
};

const categories = ['All', 'Waste Water', 'Water Technology', 'Industry', 'Building Services', 'Energy'];

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => { fetchProducts(); }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">Product Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive range of pumps, valves, and systems for every application.</p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full font-medium transition-all ${activeCategory === cat ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}>
              {cat}
            </button>
          ))}
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20"><Loader2 size={40} className="animate-spin text-orange-500" /></div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10"><div className="absolute top-4 right-4 w-32 h-32 bg-orange-500 rounded-full blur-3xl" /></div>
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    {(categoryIcons[product.category]) || <Cog size={32} />}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">{product.category}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors group/link">Enquire Now <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" /></a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-16">
          <p className="text-gray-600 mb-6">Can't find what you're looking for?</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all transform hover:-translate-y-1">Request Custom Solution <ArrowRight size={20} /></a>
        </motion.div>
      </div>
    </section>
  );
}
