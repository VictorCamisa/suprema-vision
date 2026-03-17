import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const placeholderImages = [
  { src: "/placeholder.svg", alt: "Shineray T30 — Vista frontal" },
  { src: "/placeholder.svg", alt: "Shineray T30 — Vista lateral" },
  { src: "/placeholder.svg", alt: "Shineray T30 — Caçamba" },
  { src: "/placeholder.svg", alt: "Shineray T30 — Interior / Painel" },
  { src: "/placeholder.svg", alt: "Shineray T30 — Em operação" },
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const prev = () => setCurrent((c) => (c === 0 ? placeholderImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === placeholderImages.length - 1 ? 0 : c + 1));

  return (
    <section id="galeria" className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-gradient-gold">Galeria</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Conheça o T30 por dentro e por fora.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Image carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative bg-card border border-border rounded-lg overflow-hidden aspect-video flex items-center justify-center"
          >
            <img
              src={placeholderImages[current].src}
              alt={placeholderImages[current].alt}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />

            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 transition-colors"
              aria-label="Próxima"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {placeholderImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-muted-foreground/40"
                  }`}
                  aria-label={`Imagem ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {placeholderImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-colors ${
                  i === current ? "border-primary" : "border-border"
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
            className="relative aspect-video rounded-lg overflow-hidden border border-border bg-card"
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
                className="w-full h-full flex flex-col items-center justify-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform shadow-gold">
                  <Play size={28} className="text-primary-foreground ml-1" />
                </div>
                <span className="text-muted-foreground text-sm">Assistir vídeo do T30</span>
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
