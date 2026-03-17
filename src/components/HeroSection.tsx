import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/556133638060?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Shineray%20T30.&utm_source=site&utm_medium=hero&utm_content=cta_hero";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Decorative gold line */}
      <div className="absolute top-16 left-0 right-0 h-[1px] bg-gold-gradient opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              Concessionária Autorizada Shineray em Brasília
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            O único mini caminhão de{" "}
            <span className="text-gradient-gold">R$115 mil</span>{" "}
            que você dirige com{" "}
            <span className="text-gradient-gold">CNH B</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Shineray T30 — 1.500kg de carga, 12,6 km/L na cidade, caçamba inclusa.
            O utilitário que cabe no seu bolso e na sua habilitação.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-gradient text-primary-foreground font-bold text-base px-8 py-4 rounded-md hover:opacity-90 transition-opacity shadow-gold flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              Falar com Consultor
            </a>
            <a
              href="#ficha-tecnica"
              className="border border-primary/40 text-foreground font-semibold text-base px-8 py-4 rounded-md hover:bg-primary/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <ArrowDown size={20} />
              Ver Ficha Técnica
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto"
          >
            {[
              { value: "1.500kg", label: "Carga Útil" },
              { value: "12,6", label: "km/L cidade" },
              { value: "CNH B", label: "Habilitação" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
