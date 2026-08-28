import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Rareonix Media transformed our digital presence. Their cinematic approach to video editing completely elevated our brand perception.",
      author: "[ Client Name ]",
      role: "E-commerce Brand"
    },
    {
      id: 2,
      quote: "The speed and quality of their work is unmatched. They don't just execute; they bring creative strategy that actually drives results.",
      author: "[ Client Name ]",
      role: "SaaS Startup"
    },
    {
      id: 3,
      quote: "Our engagement skyrocketed after partnering with Rareonix. Their understanding of modern content platforms is exceptional.",
      author: "[ Client Name ]",
      role: "Creator Brand"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light mb-4"
          >
            Client Success
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Glass Card */}
          <div className="relative overflow-hidden rounded-[2rem] bg-white border border-black/5 shadow-xl backdrop-blur-md p-8 md:p-16">
            <Quote size={40} className="text-purple-accent/30 mb-8 mx-auto" />
            
            <div className="relative h-[200px] md:h-[150px] flex items-center justify-center">
              {testimonials.map((test, index) => (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 10,
                    pointerEvents: activeIndex === index ? 'auto' : 'none'
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-900 mb-8 italic">
                    "{test.quote}"
                  </p>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{test.author}</div>
                    <div className="text-xs text-gray-500 mt-1">{test.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-8 bg-purple-accent' : 'w-4 bg-black/10'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
