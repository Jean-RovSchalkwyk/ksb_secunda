import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  { question: 'What is MyKSB Business?', answer: "MyKSB Business is KSB's online customer portal that allows you to access product information, place orders, track shipments, and manage your account all in one place." },
  { question: 'Which KSB products can I purchase online?', answer: 'A wide range of KSB products are available for purchase through our online platform, including centrifugal pumps, submersible pumps, valves, and related accessories.' },
  { question: 'How do I request a quotation for a KSB product?', answer: 'You can request a quotation by filling out our contact form, calling our Secunda office at +27 17 634 1949, or emailing ksb_secunda@ksb.com.' },
  { question: 'Where can I find technical specifications for KSB products?', answer: 'Technical specifications, characteristic curves, and detailed product documentation are available through our product catalogue or by contacting our technical team.' },
  { question: 'What after-sales support does KSB offer?', answer: 'KSB offers comprehensive after-sales support including preventive maintenance programs, emergency repair services, genuine spare parts supply, and performance optimization.' },
  { question: "What is KSB's B-BBEE status?", answer: 'KSB South Africa has achieved B-BBEE Level 1 status, the highest possible rating demonstrating commitment to economic transformation.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6"><HelpCircle size={32} className="text-orange-600" /></div>
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about KSB products and services.</p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 transition-colors">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown size={20} className={`shrink-0 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-orange-600' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="px-6 text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
