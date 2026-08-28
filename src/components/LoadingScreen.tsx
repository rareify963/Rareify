import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-accent/5 rounded-full blur-[80px] pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center z-10"
          >
            <div className="relative flex justify-center items-center py-4 px-8 overflow-hidden min-h-[120px]">
              {/* Localized subtle purple glow directly behind the logo */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-accent/15 blur-[20px] rounded-full z-0"
              />
              
              {!imageError ? (
                <img 
                  src="/logo.png" 
                  alt="Rareonix Media Logo" 
                  onError={() => setImageError(true)}
                  className="relative z-10 w-[75px] md:w-[100px] h-auto object-contain"
                />
              ) : (
                <h1 className="relative z-10 text-2xl md:text-3xl font-light tracking-[0.2em] text-gray-900">
                  Rareonix Media
                </h1>
              )}
              
              {/* Soft shimmer/light sweep */}
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '200%' }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-[100px] bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-25deg] z-20 pointer-events-none"
              />
            </div>
            
            {/* Show the text below the logo ONLY if the image loaded successfully (so we don't duplicate the text) */}
            {!imageError && (
              <motion.h1 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mt-2 text-lg md:text-xl font-light tracking-[0.2em] text-gray-900"
              >
                Rareonix Media
              </motion.h1>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
