import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PackageImageGalleryProps {
    images: string[];
    title: string;
}

export function PackageImageGallery({ images, title }: PackageImageGalleryProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            {/* Image Gallery */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`${title} - Photo ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Image Navigation */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6 text-[var(--color-graphite)]" />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6 text-[var(--color-graphite)]" />
                    </button>

                    {/* Image Dots */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentImageIndex
                                        ? 'bg-white w-8'
                                        : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </>
    );
}
