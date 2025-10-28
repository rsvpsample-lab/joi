import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="bg-primary py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-display italic text-gold mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          data-testid="heading-entourage"
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          {/* Parents Section - 2 COLUMNS always */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-parents-groom">
              <h3 className="font-display italic text-sm text-gold mb-2">Parents of the Groom</h3>
              <p className="text-gold-light font-normal italic text-xs">Mr. Felipe M. Bides</p>
              <p className="text-gold-light font-normal italic text-xs">Mrs. Corazon B. Bides</p>
            </div>
            <div data-testid="section-parents-bride">
              <h3 className="font-display italic text-sm text-gold mb-2">Parents of the Bride</h3>
              <p className="text-gold-light font-normal italic text-xs">Mr. Josefino R. Perez</p>
              <p className="text-gold-light font-normal italic text-xs">Mrs. Paulita O. Perez</p>
            </div>
          </div>

          {/* Principal Sponsors - 2 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-gold mb-4" data-testid="heading-principal-sponsors">Principal Sponsors</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
              <p className="text-gold-light font-normal italic text-xs">Mr. Nestor Abadilla</p>
              <p className="text-gold-light font-normal italic text-xs">Mrs. Editha S. Abadilla</p>
              <p className="text-gold-light font-normal italic text-xs">Mr. Liel A. Aguilar</p>
              <p className="text-gold-light font-normal italic text-xs">Mrs. Dolores L. Aguilar</p>
              <p className="text-gold-light font-normal italic text-xs">Col. Graciano Diocampo Jr.</p>
              <p className="text-gold-light font-normal italic text-xs">Mrs. Lolita Diocampo</p>
              <p className="text-gold-light font-normal italic text-xs">Atty. Severino Alforte</p>
              <p className="text-gold-light font-normal italic text-xs">Atty. Eloisa Alforte</p>
              <p className="text-gold-light font-normal italic text-xs">Atty. Julius C. Mila</p>
              <p className="text-gold-light font-normal italic text-xs">Mrs. Krista I. Mila</p>
              <p className="text-gold-light font-normal italic text-xs">Mr. Ernilo C. Salonga</p>
              <p className="text-gold-light font-normal italic text-xs">Mrs. Geraldine T. Penuliar</p>
            </div>
          </div>

          {/* Secondary Sponsors - 3 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-gold mb-4" data-testid="heading-secondary-sponsors">Secondary Sponsors</h3>
            <div className="grid grid-cols-3 gap-6">
              <div data-testid="section-candle">
                <h4 className="font-normal italic text-xs text-gold mb-1">Candle</h4>
                <p className="text-gold-light font-normal italic text-xs">Mr. Alexis Lopez</p>
                <p className="text-gold-light font-normal italic text-xs">Ms. Rhea Lou Lopez</p>
              </div>
              <div data-testid="section-veil">
                <h4 className="font-normal italic text-xs text-gold mb-1">Veil</h4>
                <p className="text-gold-light font-normal italic text-xs">Mr. Emerson Mecaydor</p>
                <p className="text-gold-light font-normal italic text-xs">Ms. Catherine Mecaydor</p>
              </div>
              <div data-testid="section-cord">
                <h4 className="font-normal italic text-xs text-gold mb-1">Cord</h4>
                <p className="text-gold-light font-normal italic text-xs">Mr. Erwin Dela Pena</p>
                <p className="text-gold-light font-normal italic text-xs">Ms. Bernadette Dela Pena</p>
              </div>
            </div>
          </div>

          {/* Wedding Party - 2 COLUMNS */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-best-man">
              <h4 className="font-display italic text-sm text-gold mb-2">Best Man</h4>
              <p className="text-gold-light font-normal italic text-xs">Ezekiel & Ephraim Bides</p>
            </div>
            <div data-testid="section-maid-honor">
              <h4 className="font-display italic text-sm text-gold mb-2">Maid of Honor</h4>
              <p className="text-gold-light font-normal italic text-xs">Ms. Sherlyn P. Genato</p>
            </div>
          </div>

          {/* Bridesmaids and Groomsmen */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-groomsmen">
              <h4 className="font-display italic text-sm text-gold mb-2">Groomsmen</h4>
              <p className="text-gold-light font-normal italic text-xs">Mr. Alexis Lopez</p>
              <p className="text-gold-light font-normal italic text-xs">Mr. Willie Cabacungan</p>
              <p className="text-gold-light font-normal italic text-xs">Mr. Harold Andaya</p>
              <p className="text-gold-light font-normal italic text-xs">Mr. Emerson Mecaydor</p>
              <p className="text-gold-light font-normal italic text-xs">Mr. Erwin Dela Pena</p>
            </div>
            <div data-testid="section-bridesmaids">
              <h4 className="font-display italic text-sm text-gold mb-2">Bridesmaids</h4>
              <p className="text-gold-light font-normal italic text-xs">Ms. Rhea Lou Lopez</p>
              <p className="text-gold-light font-normal italic text-xs">Ms. Wendy Cabacungan</p>
              <p className="text-gold-light font-normal italic text-xs">Ms. Sheryl Corpuz</p>
              <p className="text-gold-light font-normal italic text-xs">Ms. Donabel P. Cabrera</p>
              <p className="text-gold-light font-normal italic text-xs">Ms. Leslie Dawn Morin</p>
              <p className="text-gold-light font-normal italic text-xs">Ms. Catherine Mecaydor</p>
              <p className="text-gold-light font-normal italic text-xs">Ms. Bernadette Dela Pena</p>
            </div>
          </div>

          {/* Ring, Coin, and Bible Bearers */}
          <div className="grid grid-cols-3 gap-6">
            <div data-testid="section-coin-bearer">
              <h4 className="font-display italic text-sm text-gold mb-2">Coin Bearer</h4>
              <p className="text-gold-light font-normal italic text-xs">Iver Marquez</p>
            </div>
            <div data-testid="section-ring-bearer">
              <h4 className="font-display italic text-sm text-gold mb-2">Ring Bearer</h4>
              <p className="text-gold-light font-normal italic text-xs">Ethan Angelo B. Dela Pena</p>
            </div>
            <div data-testid="section-bible-bearer">
              <h4 className="font-display italic text-sm text-gold mb-2">Bible Bearer</h4>
              <p className="text-gold-light font-normal italic text-xs">Grizzly Marquez</p>
            </div>
          </div>

          {/* Flower Girls */}
          <div>
            <h4 className="font-display italic text-sm text-gold mb-2 text-center">Flower Girls</h4>
            <div className="flex flex-col items-center gap-1">
              <p className="text-gold-light font-normal italic text-xs">Felicia Claire B. Mecaydor</p>
              <p className="text-gold-light font-normal italic text-xs">Aurora Blair P. Genato</p>
              <p className="text-gold-light font-normal italic text-xs">Amari Yvonne Mecaydor</p>
            </div>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
