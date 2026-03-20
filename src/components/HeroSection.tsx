import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Shineray%20T30.&utm_source=site&utm_medium=hero&utm_content=cta_hero";

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-16 overflow-hidden">
      {/* Navy background with dynamic elements */}
      <div className="section-navy relative">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, hsl(213 94% 47%), transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, hsl(213 94% 60%), transparent 70%)" }}
            animate={{ scale: [1.1, 1, 1.1], x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.04]"
            style={{ background: "radial-gradient(circle, hsl(0 0% 100%), transparent 70%)" }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal light streak */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            background: "linear-gradient(135deg, transparent 30%, hsl(213 94% 47%) 50%, transparent 70%)",
          }}
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                  Concessionária Autorizada Shineray
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-5 text-white">
                Shineray T30: Robustez e Eficiência para o Transporte das Suas Cargas!
              </h1>

              <p className="text-white/65 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
                O Shineray T30 foi projetado para transportar cargas volumosas e pesadas com total segurança e estabilidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-8 py-4 justify-center"
                >
                  <MessageCircle size={18} />
                  Fale com um consultor
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="tel:+556133638060"
                  className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 rounded-lg border-2 border-white/20 text-white hover:bg-white/10 transition-all justify-center backdrop-blur-sm"
                >
                  <Phone size={18} />
                  Ligar Agora
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Glow behind vehicle */}
              <div
                className="absolute inset-0 blur-3xl opacity-20 scale-90"
                style={{ background: "radial-gradient(ellipse at center, hsl(213 94% 47%), transparent 70%)" }}
              />
              <img
                src="https://supremautilitarios.com/wp-content/uploads/2024/10/Fotos-TLUX-1-1536x1024-1.png"
                alt="Shineray T30 — Vista frontal"
                className="w-full max-w-xl mx-auto relative z-10 drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee banner */}
      <div className="bg-blue-accent py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="text-white font-extrabold text-sm tracking-[0.2em] uppercase mx-8">
              SHINERAY T30
              <span className="mx-4 opacity-40">—</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 divide-x divide-border">
            {[
              { value: "1.500kg", label: "Carga Útil" },
              { value: "12,6 km/L", label: "Consumo Cidade" },
              { value: "CNH B", label: "Habilitação" },
            ].map((stat) => (
              <div key={stat.label} className="py-5 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
