import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Memory photos
import memory1 from '@assets/MEMORIES_1761649654850.jpg';
import memory2 from '@assets/MEMORIES1_1761649654850.jpg';
import memory3 from '@assets/MEMORIES2_1761649654851.jpg';
import memory4 from '@assets/MEMORIES3_1761649654851.jpg';
import memory5 from '@assets/MEMORIES4_1761649654851.jpg';
import memory6 from '@assets/MEMORIES5_1761649654852.jpg';
import memory7 from '@assets/MEMORIES6_1761649654852.jpg';
import memory8 from '@assets/MEMORIES7_1761649654852.jpg';
import memory9 from '@assets/hero section_1761659643174.JPG';
import memory10 from '@assets/MEMORIES9_1761649654853.jpg';
import memory11 from '@assets/MEMORIES10_1761649654853.jpg';
import memory12 from '@assets/memories11_1761649654854.JPG';
import memory13 from '@assets/memories12_1761649654854.jpg';
import memory14 from '@assets/memories13_1761649654855.jpg';
import memory15 from '@assets/memories14_1761649654855.jpg';
import memory16 from '@assets/memories15_1761649654855.jpg';

const MemorableMomentsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: memory1, alt: "Memory - Beach sunset" },
    { src: memory2, alt: "Memory - Resort fun" },
    { src: memory3, alt: "Memory - Cozy selfie" },
    { src: memory4, alt: "Memory - Dinner date" },
    { src: memory5, alt: "Memory - Sweet moments" },
    { src: memory6, alt: "Memory - Night out" },
    { src: memory7, alt: "Memory - Bucay Abra" },
    { src: memory8, alt: "Memory - Together" },
    { src: memory9, alt: "Memory - Batanes adventure" },
    { src: memory10, alt: "Memory - Beach stroll" },
    { src: memory11, alt: "Memory - Holding hands" },
    { src: memory12, alt: "Memory - Fun times" },
    { src: memory13, alt: "Memory - Batanes hills" },
    { src: memory14, alt: "Memory - Mt. Fuji" },
    { src: memory15, alt: "Memory - Japan trip" },
    { src: memory16, alt: "Memory - Winter wonderland" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <h2 className="text-5xl font-script italic font-black text-gold-bright" data-testid="text-prenup-photos-title">Our Memories</h2>
        </motion.div>

        {/* Slideshow Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black/10 rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-contain"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                data-testid={`img-prenup-${currentIndex}`}
              />
            </AnimatePresence>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrevious}
              className="bg-gold hover:bg-gold-bright text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              data-testid="button-prev-slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-gold hover:bg-gold-bright text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              data-testid="button-next-slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MemorableMomentsSection;
