import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X as XIcon, Expand, MessageCircle } from "lucide-react";

const galleryImages = [
  { src: "https://supremautilitarios.com/wp-content/uploads/2024/10/Fotos-TLUX-1-1536x1024-1.png", alt: "Shineray T30 — Vista frontal" },
  { src: "https://supremautilitarios.com/wp-content/uploads/2024/10/Fotos-TLUX-3-1536x1024-1.png", alt: "Shineray T30 — Vista lateral" },
  { src: "https://supremautilitarios.com/wp-content/uploads/2024/10/Fotos-TLUX-5-1536x1024-1.png", alt: "Shineray T30 — Vista traseira/carga" },
  { src: "https://supremautilitarios.com/wp-content/uploads/2024/11/13-1.png", alt: "Shineray T30 — Interior Premium" },
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [direction, setDirection] = useState(0);

  const navigate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((c) => {
        if (dir > 0) return c === galleryImages.length - 1 ? 0 : c + 1;
        return c === 0 ? galleryImages.length - 1 : c - 1;
      });
    },
    []
  );

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <>
      <section id="galeria" className="py-12 sm:py-16 section-divider">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-medium text-primary/70 tracking-[0.2em] uppercase mb-4">
              Conheça
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient-gold text-glow-gold">Galeria</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-base sm:text-lg">
              Conheça o T30 por dentro e por fora.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Image carousel */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative glass-card rounded-xl overflow-hidden aspect-video flex items-center justify-center group"
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  src={galleryImages[current].src}
                  alt={galleryImages[current].alt}
                  className="max-h-full max-w-full object-contain absolute inset-0 m-auto"
                  loading="lazy"
                />
              </AnimatePresence>

              {/* Expand button */}
              <button
                onClick={() => setLightbox(true)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-lg glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/10"
                aria-label="Expandir"
              >
                <Expand size={16} className="text-foreground" />
              </button>

              <button
                onClick={() => navigate(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 glass-card hover:bg-primary/10 rounded-full p-2.5 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 glass-card hover:bg-primary/10 rounded-full p-2.5 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Próxima"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2 glass-card rounded-full px-3 py-1.5">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Imagem ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2 px-1">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                    i === current
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105"
                      : "opacity-60 hover:opacity-100 border border-border"
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>

            {/* YouTube embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden glass-card group"
            >
              {showVideo ? (
                <iframe
                  src="https://www.youtube.com/embed/pWkQO284Tow?autoplay=1"
                  title="Shineray T30 — Vídeo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              ) : (
                <button
                  onClick={() => setShowVideo(true)}
                  className="w-full h-full flex flex-col items-center justify-center gap-4 group/play"
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    {/* Pulse rings */}
                    <div className="absolute inset-0 w-20 h-20 -m-2 rounded-full border-2 border-primary/30 animate-ping" />
                    <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold-lg">
                      <Play size={28} className="text-primary-foreground ml-1" />
                    </div>
                  </motion.div>
                  <span className="text-muted-foreground text-sm font-medium">
                    Assistir vídeo do T30
                  </span>
                </button>
              )}
            </motion.div>

            {/* CTA after gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a
                href="https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vi%20as%20fotos%20do%20T30%20e%20gostaria%20de%20agendar%20um%20test%20drive.&utm_source=site&utm_medium=galeria&utm_content=cta_galeria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-base px-8 py-4 rounded-lg shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle size={20} />
                Agendar Test Drive
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Fechar"
            >
              <XIcon size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 glass-card rounded-full p-3 hover:bg-primary/10 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.img
              key={current}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 glass-card rounded-full p-3 hover:bg-primary/10 transition-colors"
              aria-label="Próxima"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
              {current + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
