import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X as XIcon, MessageCircle, ArrowUpRight } from "lucide-react";
import lifestyleRoad from "@/assets/lifestyle-road.jpg";
import t30Front from "@/assets/t30-front.png";
import t30Side from "@/assets/t30-side.png";
import t30Rear from "@/assets/t30-rear.png";
import t30Interior from "@/assets/t30-interior.png";

const galleryImages = [
  { src: t30Front, alt: "Shineray T30 — Vista frontal" },
  { src: t30Side, alt: "Shineray T30 — Vista lateral" },
  { src: t30Rear, alt: "Shineray T30 — Vista traseira" },
  { src: t30Interior, alt: "Shineray T30 — Interior" },
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [direction, setDirection] = useState(0);

  const navigate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((c) => {
      if (dir > 0) return c === galleryImages.length - 1 ? 0 : c + 1;
      return c === 0 ? galleryImages.length - 1 : c - 1;
    });
  }, []);

  return (
    <>
      {/* Full-width lifestyle break */}
      <div className="section-break-image">
        <img
          src={lifestyleRoad}
          alt="Shineray T30 na estrada"
          loading="lazy"
        />
      </div>

      <section id="galeria" className="py-16 sm:py-24 section-light-grid section-rich">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-bold text-blue-accent tracking-[0.15em] uppercase mb-3">
              Conheça de perto
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
              <span className="text-blue-accent">Galeria</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Carousel */}
            <div
              className="relative bg-card rounded-2xl border border-border overflow-hidden aspect-video flex items-center justify-center group cursor-pointer shadow-sm"
              onClick={() => setLightbox(true)}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={current}
                  custom={direction}
                  initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction < 0 ? 80 : -80, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  src={galleryImages[current].src}
                  alt={galleryImages[current].alt}
                  className="max-h-full max-w-full object-contain absolute inset-0 m-auto"
                  loading="lazy"
                />
              </AnimatePresence>

              <button
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-card rounded-full p-2.5 shadow-md transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-card rounded-full p-2.5 shadow-md transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={18} />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 bg-card/90 rounded-full px-3 py-1.5 shadow-sm">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-5" : "bg-foreground/20"}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-1">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                    i === current ? "ring-2 ring-primary ring-offset-2 scale-105" : "opacity-50 hover:opacity-100 border border-border"
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>

            {/* Video */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-sm">
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
                <button onClick={() => setShowVideo(true)} className="w-full h-full flex flex-col items-center justify-center gap-3 bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Play size={28} className="text-primary-foreground ml-1" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">Assistir vídeo</span>
                </button>
              )}
            </div>

            <div className="text-center pt-2">
              <a
                href="https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vi%20as%20fotos%20do%20T30%20e%20gostaria%20de%20agendar%20um%20test%20drive.&utm_source=site&utm_medium=galeria&utm_content=cta_galeria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <MessageCircle size={18} />
                Agendar Test Drive
                <ArrowUpRight size={16} />
              </a>
            </div>
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
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(false)}
          >
            <button onClick={() => setLightbox(false)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-white">
              <XIcon size={20} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 rounded-full p-3 hover:bg-white/20 text-white">
              <ChevronLeft size={24} />
            </button>
            <motion.img
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 rounded-full p-3 hover:bg-white/20 text-white">
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/50">
              {current + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
