import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealSection from './RevealSection';

const images = [
  {
    id: 1,
    src: '/images/gallery-1.jpg',
    alt: 'Elegant silver ring with diamond',
    category: 'rings'
  },
  {
    id: 2,
    src: '/images/gallery-2.jpg',
    alt: 'Person with earrings and ring',
    category: 'fashion'
  },
  {
    id: 3,
    src: '/images/gallery-3.jpg',
    alt: 'Luxury jewelry collection',
    category: 'collection'
  }
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <RevealSection>
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl gold-gradient-text mb-3">
              Our Gallery
            </h2>
            <p className="text-muted-foreground font-body text-sm">
              Discover our exclusive jewelry collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="aspect-square bg-muted relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-body">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images.find(img => img.id === selectedImage)?.src}
                alt={images.find(img => img.id === selectedImage)?.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </RevealSection>
  );
};

export default ImageGallery;
