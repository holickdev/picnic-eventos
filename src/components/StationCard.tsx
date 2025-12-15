import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { addStationToCart } from '@/stores/cartStore';

interface StationCardProps {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export function StationCard({ id, title, description, images }: StationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-full md:flex-shrink-0 md:w-[450px] lg:w-[500px] group cursor-pointer"
    >
      {/* Card Container */}
      <div className="relative bg-white rounded-[2.5rem_1rem_2.5rem_1rem] overflow-hidden shadow-luxury hover:shadow-2xl transition-all duration-700">

        {/* Image Gallery */}
        <div className="relative h-[600px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${title} - Photo ${currentImageIndex + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Image Navigation Arrows */}
          {images.length > 1 && isHovered && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-white/80 transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-[var(--color-graphite)]" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-white/80 transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-[var(--color-graphite)]" />
              </motion.button>
            </>
          )}

          {/* Image Counter Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/75'
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Card Content */}
        <div className="relative px-8 py-6 bg-white">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-display flex-1">{title}</h3>
          </div>

          <p className="text-sm text-[var(--color-graphite)]/70 leading-relaxed mb-4">
            {description}
          </p>

          <p className="text-xs text-[var(--color-dusty-rose)] mb-6">Precio bajo consulta</p>

          {/* View Details Button */}
          <a
            href={`/experiencias/${id}`}
            className="w-full py-3 rounded-full border-2 border-[var(--color-dusty-rose)] text-[var(--color-dusty-rose)] hover:bg-[var(--color-dusty-rose)] hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            Ver Detalles
          </a>

          {/* Add to Cart Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addStationToCart(id)}
            className="mt-3 w-full py-3 rounded-full bg-[var(--color-dusty-rose)] text-white hover:bg-[var(--color-dusty-rose)]/80 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Agregar al Carrito</span>
          </motion.button>
        </div>
      </div>

      {/* Floating decorative element */}
      <motion.div
        animate={{
          y: isHovered ? -10 : 0,
          rotate: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-rose opacity-20 rounded-full blur-2xl pointer-events-none"
      />
    </motion.div>
  );
}