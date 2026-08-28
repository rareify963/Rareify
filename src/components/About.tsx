import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 border-t border-black/5 bg-black/[0.02]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-purple-accent mb-6 font-medium">About Rareonix</h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-relaxed md:leading-snug mb-8">
            We are a premium creative growth partner. We believe that exceptional design and cinematic content are the most powerful tools to build trust, capture attention, and drive business growth in the modern digital landscape.
          </p>
          <div className="w-12 h-[1px] bg-black/10 mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
}
