import { motion } from "framer-motion";
import { MessageCircle, Phone, ChevronDown } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Shineray%20T30.&utm_source=site&utm_medium=hero&utm_content=cta_hero";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-20 pb-12 bg-background overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/50 hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5">
              Concessionária Autorizada Shineray
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-5 text-foreground">
              Shineray T30: Robustez e Eficiência para o Transporte das Suas Cargas!
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
              1.500kg de carga, 12,6 km/L na cidade, caçamba inclusa. A partir de <strong className="text-primary">R$99.970</strong> — dirija com CNH B.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic bg-[#25D366] text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg shadow-[#25D366]/25 flex items-center gap-2 justify-center"
              >
                <MessageCircle size={18} />
                Fale com um consultor
              </a>
              <a
                href="tel:+556133638060"
                className="btn-magnetic bg-primary text-primary-foreground font-bold text-sm px-7 py-3.5 rounded-lg shadow-navy flex items-center gap-2 justify-center"
              >
                <Phone size={18} />
                Ligar Agora
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-6 mt-8 pt-8 border-t border-border">
              {[
                { value: "1.500kg", label: "Carga Útil" },
                { value: "12,6 km/L", label: "Consumo Cidade" },
                { value: "CNH B", label: "Habilitação" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-lg sm:text-xl font-extrabold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://supremautilitarios.com/wp-content/uploads/2024/10/Fotos-TLUX-1-1536x1024-1.png"
              alt="Shineray T30 — Vista frontal"
              className="w-full max-w-lg mx-auto lg:max-w-none"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#pilares"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50 hover:text-primary transition-colors"
      >
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
