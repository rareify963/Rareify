import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible && !isCollapsed && !isHovered) {
      const timer = setTimeout(() => {
        setIsCollapsed(true);
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isCollapsed, isHovered]);

  const showText = !isCollapsed || isHovered;
  const textContent = isHovered ? "Get Started" : "Chat With Us";

  return (
    <motion.a
      href="https://wa.me/923498545749"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center p-1.5 bg-white/80 backdrop-blur-2xl border border-black/[0.04] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06),_0_0_0_1px_rgba(255,255,255,0.5)_inset] overflow-hidden"
      style={{ minHeight: '60px' }}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center w-[48px] h-[48px] bg-white rounded-full border border-black/5 shadow-sm z-10 text-[#25D366] shrink-0">
        {/* Soft breathing glow behind icon */}
        <motion.div 
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#25D366]/20 rounded-full blur-md"
        />
        <MessageCircle size={24} className="relative z-10" />
      </div>

      <motion.div
        initial={false}
        animate={{ 
          width: showText ? '110px' : '0px',
          opacity: showText ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden whitespace-nowrap flex items-center"
      >
        <div className="w-[110px] pl-3 flex items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={textContent}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="block text-[15px] font-medium text-gray-800 tracking-tight"
            >
              {textContent}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.a>
  );
}
