import { motion } from 'motion/react';
import { Sparkle, Palette, Utensils, Calendar } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Estaciones Temáticas Interactivas',
    description: 'Entretenimiento para tus eventos: Estación de Arte y Pintura, Decoración de Macetas, Bisutería, Tote Bags y Pastelería.',
  },
  {
    icon: Utensils,
    title: 'Table Styling',
    description: 'Decoración de mesas de lujo para restaurantes o cenas en casa.',
  },
  {
    icon: Calendar,
    title: 'Event Planner',
    description: 'Organización integral de Bodas, Cumpleaños, Baby Showers y Aniversarios.',
  },
];

export function DetailsSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 md:px-6 lg:px-12">
        {/* Mixed Composition - Arch Shape & Text */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left: Image with Arch Shape */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative">
              {/* Main arch image */}
              <div className="relative rounded-[3rem_3rem_3rem_10rem] overflow-hidden shadow-luxury aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1647235639994-00373cf008a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hvJTIwcGljbmljJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NDk1ODQxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Luxury picnic setup detail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Overlapping smaller image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-8 md:-bottom-12 -right-8 md:-right-12 w-48 h-48 md:w-64 md:h-64 rounded-[2rem_5rem_2rem_2rem] overflow-hidden shadow-luxury border-4 md:border-8 border-[var(--color-pearl)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1758315526786-3ef1e3b07f7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtcGFnbmUlMjBjZWxlYnJhdGlvbiUyMG91dGRvb3J8ZW58MXx8fHwxNzY0OTU4NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Champagne celebration detail"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating decorative sparkles */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 hidden md:block"
              >
                <Sparkle className="w-8 h-8 text-[var(--color-dusty-rose)] fill-[var(--color-dusty-rose)] opacity-60" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/3 -right-8 hidden md:block"
              >
                <Sparkle className="w-6 h-6 text-[var(--color-dusty-rose)] fill-[var(--color-dusty-rose)] opacity-50" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-24 h-24 bg-[var(--color-dusty-rose)] rounded-full blur-3xl opacity-20 pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:pl-8 order-2 lg:order-2 mt-12 lg:mt-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-gradient-rose" />
              <span className="text-sm tracking-[0.2em] uppercase text-[var(--color-dusty-rose)]">
                Por qué elegirnos
              </span>
            </div>

            <h2 className="text-display mb-8">
              Más que un Picnic
            </h2>

            <p className="text-lg text-[var(--color-graphite)]/80 mb-12 leading-relaxed">
              En Picnic Eventos Mgta, creemos que las celebraciones más memorables nacen de la atención a los pequeños detalles. Cada elemento, desde la selección de flores hasta la disposición de los cojines, se elige cuidadosamente para crear una atmósfera mágica.
            </p>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-[1rem_0.5rem_1rem_0.5rem] bg-gradient-to-br from-[var(--color-dusty-rose)]/10 to-[var(--color-dusty-rose)]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-[var(--color-dusty-rose)]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2">{feature.title}</h4>
                    <p className="text-[var(--color-graphite)]/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <button className="group relative px-10 py-5 bg-gradient-rose text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl">
                <span className="relative z-10 text-lg tracking-wide">
                  Reserva Tu Experiencia
                </span>
                <motion.div
                  className="absolute inset-0 bg-[var(--color-graphite)]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-[var(--color-dusty-rose)]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--color-dusty-rose)]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}