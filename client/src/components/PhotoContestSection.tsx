
import { Camera, Award, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import photoUploadQR from '@assets/photo_upload_qr.png';

const PhotoContestSection = () => {
  return (
    <motion.section 
      className="bg-primary py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 10.0 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 border border-white/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.3 }}
        >
          {/* Camera Icon */}
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold/40">
            <Camera className="w-8 h-8 text-gold" data-testid="icon-photo-contest" />
          </div>

          {/* Section Title */}
          <h2 className="text-5xl font-display italic text-gold mb-6" data-testid="text-photo-contest-title">
            Capture & Share
          </h2>

          {/* Introduction Text */}
          <div className="bg-white/20 border border-gold/30 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <p className="text-lg font-body text-gold-light leading-relaxed mb-4">
              Help us preserve the beautiful moments of our special day!
            </p>
            <p className="text-base font-body text-gold-light leading-relaxed">
              Scan the QR code below to upload your best photos from the celebration.
            </p>
          </div>
        </motion.div>

        {/* Photo Upload QR Code */}
        <motion.div 
          className="max-w-md mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.6 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-soft">
            <div className="text-center">
              <img 
                src={photoUploadQR}
                alt="Photo Upload QR Code"
                className="w-full max-w-xs mx-auto object-contain mb-4"
                data-testid="img-photo-upload-qr"
              />
              <div className="flex items-center justify-center gap-2 mb-4">
                <Upload className="w-5 h-5 text-gold" />
                <p className="text-base font-semibold text-foreground">
                  Scan to Upload Your Photos
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Photo Contest Details */}
        <motion.div 
          className="bg-white/20 border-2 border-gold/40 rounded-xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.9 }}
        >
          {/* Award Icon */}
          <div className="w-12 h-12 bg-gold/30 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold/50">
            <Award className="w-6 h-6 text-gold" />
          </div>

          <h3 className="text-2xl font-display italic text-gold mb-4" data-testid="text-photo-contest-subtitle">
            Photo Contest
          </h3>

          <div className="space-y-3 text-gold-light">
            <p className="text-base leading-relaxed">
              <strong className="text-gold">🎁 Win a Prize!</strong>
            </p>
            <p className="text-sm leading-relaxed">
              The guest who submits the highest quality and most memorable photos will receive a special prize as our token of appreciation.
            </p>
            <p className="text-sm leading-relaxed italic mt-4">
              We can't wait to see the celebration through your eyes! Share your favorite candid moments, creative angles, and joyful captures.
            </p>
          </div>

          {/* Guidelines */}
          <div className="mt-6 pt-6 border-t border-gold/30">
            <p className="text-xs text-gold-light/80">
              📸 Tips: Focus on good lighting, clear composition, and genuine moments. High-resolution photos are preferred.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PhotoContestSection;
