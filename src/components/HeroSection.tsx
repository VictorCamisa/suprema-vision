import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const whatsappUrl =
  "https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Shineray%20T30.&utm_source=site&utm_medium=hero&utm_content=cta_hero";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericPart = target.replace(/[^0-9.,]/g, "");
          const isDecimal = numericPart.includes(",");
          const end = parseFloat(numericPart.replace(",", "."));
          const duration = 1500;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * end;

            if (isDecimal) {
              setDisplayed(current.toFixed(1).replace(".", ","));
            } else {
              setDisplayed(Math.floor(current).toLocaleString("pt-BR"));
            }

            if (progress < 1) requestAnimationFrame(tick);
            else setDisplayed(numericPart);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold text-glow-gold">
      {displayed}
      {suffix}
    </div>
  );
}

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]); // Added for background parallax
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-[url('https://supremautilitarios.com/wp-content/uploads/2024/10/Fotos-TLUX-1-1536x1024-1.png')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </div>

      {/* Particle system */}
      <div className="particles-container">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Radial spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,hsl(40_40%_60%/0.08),transparent_70%)] pointer-events-none" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-[1px] opacity-30"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(40 40% 60% / 0.4), transparent)",
            animation: "scan-line 8s linear infinite",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 glass-card-gold rounded-full px-5 py-2 mb-8"
          >
            <span className="relative w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              <span className="relative block w-2 h-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              Concessionária Autorizada Shineray em Brasília
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
          >
            O único mini caminhão a partir de{" "}
            <span className="text-gradient-gold text-glow-gold">R$99.970</span>{" "}
            que você dirige com{" "}
            <span className="text-gradient-gold text-glow-gold">CNH B</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Shineray T30 — 1.500kg de carga, 12,6 km/L na cidade, caçamba inclusa.
            <br className="hidden sm:block" />
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
              className="btn-magnetic bg-gold-gradient text-primary-foreground font-bold text-base px-8 py-4 rounded-lg shadow-gold-lg flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              Falar com Consultor
            </a>
            <a
              href="#ficha-tecnica"
              className="btn-magnetic border border-primary/30 text-foreground font-semibold text-base px-8 py-4 rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center glass-card"
            >
              <ArrowDown size={20} />
              Ver Ficha Técnica
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto"
          >
            {[
              { target: "1.500", suffix: "kg", label: "Carga Útil" },
              { target: "12,6", suffix: "", label: "km/L cidade" },
              { target: "CNH B", suffix: "", label: "Habilitação", isText: true },
            ].map((stat) => (
              <div key={stat.label} className="text-center glass-card-gold rounded-xl p-4">
                {stat.isText ? (
                  <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold text-glow-gold">
                    CNH B
                  </div>
                ) : (
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                )}
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="text-primary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
