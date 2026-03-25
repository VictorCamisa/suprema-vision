import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import lifestyleHero from "@/assets/lifestyle-hero.jpg";
import t30Front from "@/assets/t30-front.png";

const whatsappUrl =
  "https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Shineray%20T30.&utm_source=site&utm_medium=hero&utm_content=cta_hero";

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-16 overflow-hidden">
      {/* Hero with lifestyle background */}
      <div className="relative min-h-[85vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={lifestyleHero}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(224 56% 14% / 0.92) 0%, hsl(224 56% 20% / 0.8) 50%, hsl(224 56% 24% / 0.7) 100%)",
            }}
          />
        </div>

        {/* Subtle animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, hsl(213 94% 47%), transparent 70%)" }}
            animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.05]"
            style={{ background: "radial-gradient(circle, hsl(213 94% 60%), transparent 70%)" }}
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                  Concessionária Autorizada Shineray
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 text-white">
                Shineray T30: Robustez e Eficiência para o Transporte das Suas Cargas!
              </h1>

              <p className="text-white/60 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed">
                O Shineray T30 foi projetado para transportar cargas volumosas e pesadas com total segurança e estabilidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
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
                  className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 rounded-xl border-2 border-white/15 text-white hover:bg-white/10 transition-all duration-300 justify-center backdrop-blur-sm"
                >
                  <Phone size={18} />
                  Ligar Agora
                </a>
              </div>
            </motion.div>

            {/* Vehicle image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div
                className="absolute inset-0 blur-3xl opacity-15 scale-90"
                style={{ background: "radial-gradient(ellipse at center, hsl(213 94% 47%), transparent 70%)" }}
              />
              <img
                src={t30Front}
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
              <div key={stat.label} className="py-6 text-center">
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
