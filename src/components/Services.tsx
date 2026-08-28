import { motion } from 'motion/react';
import { Video, Sparkles, Megaphone, ShieldCheck, Cpu, Code2, Layers, LineChart } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Sparkles size={24} className="text-gray-700" />,
      title: "Content Creation",
      description: "Strategic content tailored for modern platforms to build your brand and audience."
    },
    {
      icon: <LineChart size={24} className="text-gray-700" />,
      title: "Online Presence Building",
      description: "End-to-end management to establish your authority in the digital space."
    },
    {
      icon: <Megaphone size={24} className="text-gray-700" />,
      title: "UGC Ads",
      description: "Authentic, high-converting user-generated content designed for paid social."
    },
    {
      icon: <ShieldCheck size={24} className="text-gray-700" />,
      title: "ORM",
      description: "Online Reputation Management to ensure your brand always looks its best."
    },
    {
      icon: <Cpu size={24} className="text-gray-700" />,
      title: "AI Solutions",
      description: "Smart integrations and workflows to streamline operations and enhance creativity."
    },
    {
      icon: <Code2 size={24} className="text-gray-700" />,
      title: "Web Development",
      description: "Premium, fast, and conversion-focused websites that represent your brand."
    },
    {
      icon: <Layers size={24} className="text-gray-700" />,
      title: "SaaS Development",
      description: "Scalable software solutions crafted with clean code and intuitive UX."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light mb-4"
          >
            Our Expertise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Service: Video Editing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 group relative rounded-[2rem] p-8 md:p-12 overflow-hidden bg-white border border-purple-accent/30 shadow-lg hover:border-purple-accent/60 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-accent/10 blur-[80px] rounded-full group-hover:bg-purple-accent/20 transition-colors" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-accent/10 border border-purple-accent/20 text-purple-700 text-xs font-medium mb-6">
                Core Service
              </div>
              <Video size={32} className="text-gray-900 mb-6" />
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-gray-900">Video Editing</h3>
              <p className="text-gray-600 max-w-md text-lg font-light leading-relaxed">
                Cinematic edits built to keep audiences watching and brands looking premium. We transform raw footage into compelling stories.
              </p>
            </div>
          </motion.div>

          {/* Other Services */}
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              className="group rounded-3xl p-8 bg-white border border-black/5 hover:bg-black/[0.02] shadow-sm transition-colors"
            >
              <div className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <h3 className="text-xl font-light mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
