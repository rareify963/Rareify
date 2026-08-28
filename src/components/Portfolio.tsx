import { motion } from 'motion/react';

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-4"
          >
            Featured Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 max-w-2xl font-light"
          >
            Cinematic edits and creative content that captures attention and drives results.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto rounded-2xl md:rounded-[2rem] p-1 bg-gradient-to-b from-black/5 to-transparent shadow-xl"
        >
          {/* Subtle glow behind the video player */}
          <div className="absolute inset-0 bg-purple-accent/10 blur-[80px] -z-10 rounded-full opacity-50" />
          
          <div className="relative aspect-video rounded-xl md:rounded-[1.8rem] overflow-hidden bg-white border border-black/5 backdrop-blur-xl group">
            {/* The actual YouTube embed */}
            <iframe
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              src="https://www.youtube.com/embed/nuewWhuhYTE?rel=0&showinfo=0&modestbranding=1"
              title="Rareonix Media Portfolio Reel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
