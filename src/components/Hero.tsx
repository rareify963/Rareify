import { motion } from 'motion/react';
import { ArrowRight, Film, Sparkles, Send } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-accent/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="inline-block border border-black/10 bg-black/5 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs text-gray-600 mb-6 font-medium">
            Premium Creative Agency
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6">
            We Create Content That <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500">Grows Brands.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed font-light">
            We help startups and businesses grow through cinematic video editing, strategic content creation, AI-powered solutions, and modern digital experiences.
          </p>
          <a
            href="https://wa.me/923498545749"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-purple-accent text-white px-8 py-4 rounded-full text-sm font-medium transition-transform hover:scale-105 shadow-lg shadow-purple-accent/20"
          >
            Get Started
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 rounded-full bg-white blur-md opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
          className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center lg:justify-end"
        >
          {/* Abstract Premium Cinematic Timeline in 3D Monitor */}
          <div className="relative w-full max-w-[460px] aspect-video" style={{ perspective: '1200px' }}>
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-accent/10 rounded-full blur-[80px] pointer-events-none z-0" />
            
            <motion.div 
              animate={{ 
                y: [-8, 8, -8],
                rotateX: [12, 16, 12],
                rotateY: [-16, -20, -16]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute inset-0 z-10"
              style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
            >
              <div className="w-full h-full bg-white/90 backdrop-blur-2xl border border-gray-100 rounded-[1.5rem] shadow-[30px_50px_80px_-20px_rgba(0,0,0,0.15),_0_0_40px_rgba(147,51,234,0.15)] flex flex-col p-2 overflow-hidden relative">
                {/* Subtle inner reflection on the bezel */}
                <div className="absolute inset-0 rounded-[1.5rem] border-[1.5px] border-white/60 pointer-events-none z-50" />

                {/* Inner Screen */}
                <div className="relative flex-1 bg-[#f8f9fa] rounded-xl overflow-hidden border border-black/[0.08] flex flex-col justify-end p-3 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                  {/* Screen Glare/Reflection */}
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    className="absolute top-0 -bottom-[100%] w-[150%] -left-[100%] bg-gradient-to-r from-transparent via-white/50 to-transparent -rotate-45 pointer-events-none z-40" 
                  />

                  {/* Time Ruler */}
                  <div className="w-full h-4 border-b border-black/[0.04] mb-3 relative flex items-end justify-between px-1 pb-1">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className={`w-[1px] bg-black/10 ${i % 5 === 0 ? 'h-1.5' : 'h-[3px]'}`} />
                    ))}
                  </div>

                  {/* Tracks Container */}
                  <div className="relative flex flex-col gap-2 w-full mb-1">
                    {/* Playhead (Animated) */}
                    <motion.div 
                      animate={{ left: ["10%", "85%", "35%", "75%", "10%"] }}
                      transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
                      className="absolute top-[-20px] bottom-[-8px] w-[1.5px] bg-purple-accent z-30 flex flex-col items-center"
                    >
                      {/* Playhead Handle */}
                      <div className="absolute -top-1 w-2.5 h-2.5 bg-purple-accent rounded-[2px] shadow-[0_0_10px_rgba(147,51,234,0.5)] flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full opacity-80" />
                      </div>
                      {/* Playhead Glow */}
                      <div className="absolute top-2 bottom-0 w-4 bg-gradient-to-r from-transparent via-purple-accent/20 to-transparent blur-[2px]" />
                    </motion.div>

                    {/* Video Track 2 (Overlay/B-Roll) */}
                    <div className="h-7 w-full bg-white rounded-md border border-black/[0.04] p-1 flex gap-1.5 relative shadow-sm">
                      <div className="h-full w-1/4 bg-gradient-to-r from-purple-accent/10 to-purple-accent/5 border border-purple-accent/20 rounded relative overflow-hidden flex items-center px-1.5">
                        <div className="w-4 h-[2px] bg-white rounded-full opacity-80" />
                      </div>
                      <div className="h-full w-2/5 bg-gray-50 border border-black/5 rounded relative flex items-center px-1.5 justify-between">
                        {/* Keyframes */}
                        <div className="w-1 h-1 rotate-45 bg-purple-accent/40 rounded-[1px]" />
                        <div className="w-1 h-1 rotate-45 bg-purple-accent/40 rounded-[1px]" />
                      </div>
                      <div className="h-full flex-1 bg-gradient-to-r from-purple-accent/5 to-transparent border border-purple-accent/10 rounded" />
                    </div>

                    {/* Video Track 1 (Main) */}
                    <div className="h-7 w-full bg-white rounded-md border border-black/[0.04] p-1 flex gap-1 relative shadow-sm">
                      <div className="h-full w-[35%] bg-gray-50 border border-black/5 rounded flex items-center justify-center overflow-hidden" />
                      <div className="w-2 h-full flex items-center justify-center shrink-0">
                        {/* Transition Marker */}
                        <div className="w-1 h-2 bg-purple-accent/30 rounded-sm" />
                      </div>
                      <div className="h-full flex-1 bg-gray-50 border border-black/5 rounded relative overflow-hidden" />
                    </div>

                    {/* Audio Track */}
                    <div className="h-9 w-full bg-white rounded-md border border-black/[0.04] p-1 flex gap-1.5 relative mt-0.5 shadow-sm">
                      <div className="h-full w-1/2 bg-gray-50/50 border border-black/5 rounded flex items-center px-1.5 justify-between gap-[1px]">
                        {/* Waveforms */}
                        {[...Array(24)].map((_, i) => (
                          <motion.div 
                            key={i}
                            animate={{ scaleY: [0.2, Math.random() * 0.5 + 0.2, 0.2] }}
                            transition={{ repeat: Infinity, duration: Math.random() * 1.5 + 0.8, ease: "easeInOut" }}
                            className="w-[1.5px] bg-gray-300 rounded-full h-full origin-center"
                            style={{ willChange: 'transform' }}
                          />
                        ))}
                      </div>
                      <div className="h-full flex-1 bg-gray-50/50 border border-black/5 rounded flex items-center px-1.5 justify-between gap-[1px]">
                        {[...Array(18)].map((_, i) => (
                          <motion.div 
                            key={i}
                            animate={{ scaleY: [0.2, Math.random() * 0.6 + 0.2, 0.2] }}
                            transition={{ repeat: Infinity, duration: Math.random() * 1.5 + 0.8, ease: "easeInOut" }}
                            className="w-[1.5px] bg-purple-accent/40 rounded-full h-full origin-center"
                            style={{ willChange: 'transform' }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Chips */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-2 md:-right-8 z-20"
              style={{ willChange: 'transform' }}
            >
              <div className="flex items-center gap-2 px-3.5 py-2 bg-white/90 backdrop-blur-md border border-black/5 rounded-full shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] text-xs font-medium text-gray-700">
                <Film size={14} className="text-purple-accent" />
                Video Editing
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-4 md:-left-8 z-20"
              style={{ willChange: 'transform' }}
            >
              <div className="flex items-center gap-2 px-3.5 py-2 bg-white/90 backdrop-blur-md border border-black/5 rounded-full shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] text-xs font-medium text-gray-700">
                <Sparkles size={14} className="text-purple-accent" />
                Motion Graphics
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-6 -right-4 md:-right-10 z-20"
              style={{ willChange: 'transform' }}
            >
              <div className="flex items-center gap-2 px-3.5 py-2 bg-white/90 backdrop-blur-md border border-black/5 rounded-full shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] text-xs font-medium text-gray-700">
                <Send size={14} className="text-purple-accent" />
                Ready to Publish
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
