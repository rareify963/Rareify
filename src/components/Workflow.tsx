import { motion } from 'motion/react';

export function Workflow() {
  const steps = [
    {
      num: "01",
      title: "Share Your Brief",
      desc: "Tell us about your goals, audience, references, vision, and project requirements."
    },
    {
      num: "02",
      title: "We Create",
      desc: "Rareonix Media works on the project based on the brief with creative planning, editing, design, and execution."
    },
    {
      num: "03",
      title: "Review & Feedback",
      desc: "You review the work. If there is any issue or requested change, we resolve it perfectly."
    },
    {
      num: "04",
      title: "Secure Delivery",
      desc: "The finished project is professionally organized and securely delivered to you, ready to use."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-black/[0.02] relative overflow-hidden">
      {/* Ambient Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] pointer-events-none z-0">
        <motion.div 
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute inset-0 bg-purple-accent/10 rounded-full blur-[120px]"
          style={{ willChange: 'transform, opacity' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">How We Work</h2>
          <p className="text-gray-600 font-light">A simple, transparent, and efficient process.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-black/10 md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Node */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-white border-2 border-purple-accent rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-2 md:mt-0 z-10"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="text-sm font-mono text-purple-accent/70 mb-2">{step.num}</div>
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
