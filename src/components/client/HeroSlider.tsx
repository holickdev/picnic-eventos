import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  '/img/picnic/picnic-romantico.webp',
  '/img/picnic/picnic-arte.webp',
  '/img/picnic/picnic-mariachis.webp',
]
export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slider Container */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroImages[currentSlide]}
              alt={`Luxury picnic event ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 rounded-full glass-morphism flex items-center justify-center hover:bg-white/60 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-graphite)] group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 rounded-full glass-morphism flex items-center justify-center hover:bg-white/60 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-graphite)] group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-[var(--color-dusty-rose)] w-8'
                : 'bg-white/40 w-8 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content - Overlapping Text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-5 md:px-12 pb-20 md:pb-0">
        <div className="max-w-[1600px] w-full mx-auto">
          <div className="relative">
            {/* Main Display Title */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              <h1 className="text-3xl sm:text-4xl md:text-display text-white mix-blend-difference select-none leading-tight" style={{ textShadow: '2px 2px 20px rgba(0,0,0,0.5)' }}>
                MOMENTOS INOLVIDABLES
              </h1>
            </motion.div>

            {/* Subtitle with organic shape background */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative mt-4 md:mt-8 ml-0 md:ml-12 max-w-lg"
            >
              <div className="relative z-10 bg-white/90 backdrop-blur-md px-5 py-4 md:px-8 md:py-6 rounded-3xl shadow-xl">
                <p className="text-[var(--color-graphite)] text-sm md:text-xl leading-relaxed">
                  Experiencias únicas que transforman celebraciones en recuerdos inolvidables
                </p>
              </div>

              {/* Decorative floating element */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--color-dusty-rose)] opacity-40 rounded-full blur-xl"
              />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-6 md:mt-16 ml-0 md:ml-12"
            >
              <a
                href="#experiencias"
                className="inline-flex items-center justify-center glass-morphism px-6 py-3 md:px-10 md:py-5 min-h-[48px] rounded-full hover:bg-white/70 transition-all duration-500 group shadow-lg"
              >
                <span className="text-sm md:text-lg tracking-wide text-[var(--color-graphite)] group-hover:text-[var(--color-dusty-rose)] transition-colors">
                  Descubre Nuestras Experiencias
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}