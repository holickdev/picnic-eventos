import { useRef } from "react";
import { motion } from "motion/react";
import { ExperienceCard } from "./ExperienceCard";
import { Sparkles, ArrowRight } from "lucide-react";
import { packages } from "../data/packages";

export function ExperiencesCatalog() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 520;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="paquetes"
      className="relative py-12 md:py-20 lg:py-32 overflow-hidden"
    >
      {/* Section Header - Asymmetric Layout */}
      <div className="max-w-[1600px] mx-auto px-5 md:px-6 lg:px-12 mb-12 md:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-dusty-rose)]" />
              <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-[var(--color-dusty-rose)]">
                Nuestras Experiencias
              </span>
            </div>
            <h2 className="text-display max-w-6xl">
              Catálogo de Momentos Únicos
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 hidden md:flex"
          >
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border-2 border-[var(--color-graphite)] flex items-center justify-center hover:bg-[var(--color-graphite)] hover:text-white transition-all duration-300 group"
              aria-label="Scroll left"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border-2 border-[var(--color-graphite)] flex items-center justify-center hover:bg-[var(--color-graphite)] hover:text-white transition-all duration-300 group"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 md:mt-6 max-w-2xl text-base md:text-lg text-[var(--color-graphite)]/70"
        >
          Cada paquete incluye múltiples opciones de decoración
          y setup. Desliza las fotos de cada experiencia para
          ver más detalles.
        </motion.p>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex flex-col md:flex-row gap-6 md:gap-8 px-5 md:px-6 lg:px-12 md:overflow-x-auto md:overflow-y-hidden scroll-smooth pb-8 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {packages.map((pkg) => (
            <ExperienceCard
              key={pkg.id}
              id={pkg.id}
              title={pkg.title}
              price={`$${pkg.price}`}
              images={pkg.images}
              description={pkg.description}
              bestSeller={pkg.bestSeller}

            />
          ))}
        </div>

        {/* Gradient Fade Edges - Only on desktop */}
        <div className="absolute top-0 left-0 bottom-8 w-32 bg-gradient-to-r from-[var(--color-pearl)] to-transparent pointer-events-none hidden md:block" />
        <div className="absolute top-0 right-0 bottom-8 w-32 bg-gradient-to-l from-[var(--color-pearl)] to-transparent pointer-events-none hidden md:block" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-rose opacity-10 rounded-full blur-3xl pointer-events-none hidden lg:block"
      />
    </section>
  );
}