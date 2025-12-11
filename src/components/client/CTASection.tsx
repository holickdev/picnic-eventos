import { motion } from 'motion/react';
import { ArrowRight, Instagram, Mail, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 md:px-6 lg:px-12">
        {/* Main CTA Card - Immersive with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem_1rem_2rem_1rem] md:rounded-[4rem_2rem_4rem_2rem] overflow-hidden shadow-2xl"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1760551000335-bb2c02b3d1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvdXRkb29yJTIwZXZlbnR8ZW58MXx8fHwxNzY0OTU4NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Luxury outdoor event background"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-16 md:px-8 md:py-20 lg:px-20 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-display text-white mb-6 md:mb-8">
                  Crea Tu Historia
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto"
              >
                Deja que transformemos tus momentos especiales en experiencias extraordinarias que recordarás para siempre
              </motion.p>

              {/* Glassmorphism Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center items-center"
              >
                <button 
                  onClick={() => {
                    const message = 'Hola! Me gustaría cotizar sus servicios';
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/584123588120?text=${encodedMessage}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="group glass-morphism px-8 md:px-12 py-4 md:py-6 min-h-[48px] rounded-full hover:bg-white/60 transition-all duration-500 flex items-center justify-center gap-4"
                >
                  <span className="text-base md:text-lg text-white group-hover:text-[var(--color-graphite)] transition-colors">
                    Solicitar Cotización
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:text-[var(--color-graphite)] group-hover:translate-x-2 transition-all" />
                </button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-start sm:items-center text-white/80 text-sm md:text-base"
              >
                <a
                  href="tel:+584123588120"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center group-hover:bg-white/40 transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+58 412 3588120</span>
                </a>

                <a
                  href="mailto:info@picniceventosmgta.com"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center group-hover:bg-white/40 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@picniceventos.com</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center group-hover:bg-white/40 transition-all">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span>@picniceventosmgta</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Decorative floating elements */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-[var(--color-dusty-rose)] opacity-20 rounded-full blur-3xl pointer-events-none"
          />

          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-[var(--color-dusty-rose)] opacity-20 rounded-full blur-3xl pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}