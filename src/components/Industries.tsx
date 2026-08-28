import { motion } from 'motion/react';

export function Industries() {
  const industries = [
    "Startups",
    "SaaS & Tech",
    "E-commerce",
    "Corporate Businesses",
    "Real Estate",
    "Restaurants & Hospitality",
    "Education & Personal Brands",
    "Creators & Influencers"
  ];

  return (
    <section className="py-24 border-y border-black/5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-light text-gray-900">Industries We Serve</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-6 py-3 rounded-full bg-white border border-black/10 text-gray-700 text-sm font-light hover:bg-black/5 hover:border-black/20 shadow-sm transition-colors"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
