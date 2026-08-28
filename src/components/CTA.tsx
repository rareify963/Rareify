import { motion } from 'motion/react';

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-accent/10 rounded-[100%] blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-20 rounded-[2.5rem] bg-white border border-black/5 shadow-2xl backdrop-blur-md"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight text-gray-900">
            Ready to Grow Your Brand?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light mb-10 max-w-2xl mx-auto">
            Let's create content and digital experiences people remember.
          </p>
          <a
            href="https://wa.me/923498545749"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-purple-accent text-white font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
