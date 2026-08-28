import { motion } from 'motion/react';

export function WhyChooseUs() {
  const points = [
    { title: "Creative Strategy", desc: "We don't just edit; we strategize to maximize impact." },
    { title: "Premium Quality", desc: "Every deliverable meets the highest industry standards." },
    { title: "Fast Delivery", desc: "Optimized workflows to get your content live faster." },
    { title: "AI-Powered", desc: "Leveraging the latest AI tools for efficiency and scale." },
    { title: "Business-Focused", desc: "Our creative choices are driven by your growth metrics." },
    { title: "Transparent", desc: "Clear communication from the first brief to final delivery." },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">Why Choose Rareonix</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We combine creative taste with technical execution to deliver work that not only looks expensive, but actually drives results.
              </p>
            </motion.div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 border-l border-black/10 hover:border-purple-accent/50 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">{point.title}</h3>
                <p className="text-sm text-gray-600 font-light">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
