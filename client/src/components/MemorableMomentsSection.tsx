import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X } from 'lucide-react';

// Memory photos
import memory1 from '@assets/MEMORIES_1761649654850.jpg';
import memory2 from '@assets/MEMORIES1_1761649654850.jpg';
import memory3 from '@assets/MEMORIES2_1761649654851.jpg';
import memory4 from '@assets/MEMORIES3_1761649654851.jpg';
import memory5 from '@assets/MEMORIES4_1761649654851.jpg';
import memory6 from '@assets/MEMORIES5_1761649654852.jpg';
import memory7 from '@assets/MEMORIES6_1761649654852.jpg';
import memory8 from '@assets/MEMORIES7_1761649654852.jpg';
import memory9 from '@assets/MEMORIES8_1761649654853.jpg';
import memory10 from '@assets/MEMORIES9_1761649654853.jpg';
import memory11 from '@assets/MEMORIES10_1761649654853.jpg';
import memory12 from '@assets/memories11_1761649654854.JPG';
import memory13 from '@assets/memories12_1761649654854.jpg';
import memory14 from '@assets/memories13_1761649654855.jpg';
import memory15 from '@assets/memories14_1761649654855.jpg';
import memory16 from '@assets/memories15_1761649654855.jpg';

const MemorableMomentsSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: memory1, alt: "Memory - Beach sunset", height: "h-80" },
    { src: memory2, alt: "Memory - Resort fun", height: "h-96" },
    { src: memory3, alt: "Memory - Cozy selfie", height: "h-72" },
    { src: memory4, alt: "Memory - Dinner date", height: "h-80" },
    { src: memory5, alt: "Memory - Sweet moments", height: "h-72" },
    { src: memory6, alt: "Memory - Night out", height: "h-80" },
    { src: memory7, alt: "Memory - Bucay Abra", height: "h-96" },
    { src: memory8, alt: "Memory - Together", height: "h-72" },
    { src: memory9, alt: "Memory - Batanes adventure", height: "h-80" },
    { src: memory10, alt: "Memory - Beach stroll", height: "h-96" },
    { src: memory11, alt: "Memory - Holding hands", height: "h-80" },
    { src: memory12, alt: "Memory - Fun times", height: "h-72" },
    { src: memory13, alt: "Memory - Batanes hills", height: "h-80" },
    { src: memory14, alt: "Memory - Mt. Fuji", height: "h-96" },
    { src: memory15, alt: "Memory - Japan trip", height: "h-80" },
    { src: memory16, alt: "Memory - Winter wonderland", height: "h-72" }
  ];

  return (
    <motion.section 
      id="prenup-photos" 
      className="section-hard-blue py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <h2 className="text-5xl font-script italic font-black text-gold-bright" data-testid="text-prenup-photos-title">Our Memories</h2>
        </motion.div>

        {/* Pinterest-style Masonry Grid */}
        <motion.div 
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid mb-4 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(index)}
              data-testid={`img-prenup-${index}`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full ${image.height} object-cover group-hover:brightness-90 transition-all duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-script text-lg">View Photo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none">
            <DialogTitle className="sr-only">Anniversary Photo Gallery</DialogTitle>
            <DialogDescription className="sr-only">View anniversary photo in full size</DialogDescription>
            
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200"
                data-testid="button-close-lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Image */}
              {selectedImage !== null && (
                <motion.img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`img-lightbox-${selectedImage}`}
                />
              )}

              {/* Navigation Buttons */}
              {selectedImage !== null && selectedImage > 0 && (
                <button
                  onClick={() => setSelectedImage(selectedImage - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 z-10"
                  data-testid="button-prev-image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {selectedImage !== null && selectedImage < images.length - 1 && (
                <button
                  onClick={() => setSelectedImage(selectedImage + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 z-10"
                  data-testid="button-next-image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Image Counter */}
              {selectedImage !== null && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 text-white px-4 py-2 rounded-full">
                  {selectedImage + 1} / {images.length}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.section>
  );
};

export default MemorableMomentsSection;
