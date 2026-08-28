import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Total duration 1.8 seconds for a premium, fast loading feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          {/* Subtle ambient lighting behind everything */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-purple-accent/5 rounded-full blur-[80px] pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center z-10"
          >
            {/* Localized subtle purple glow directly behind the text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-purple-accent/10 blur-[30px] rounded-full z-0"
            />
            
            <div className="relative py-6 px-10 overflow-hidden text-center flex flex-col items-center justify-center z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-900 mb-3">
                Rareonix Media
              </h1>
              <p className="text-[10px] md:text-xs text-gray-500 font-light tracking-widest uppercase">
                We Create Content That Grows Brands.
              </p>
              
              {/* Soft shimmer/light sweep */}
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '200%' }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-[120px] bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-25deg] z-20 pointer-events-none"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
