import { motion } from "framer-motion";
import { Award, Truck, Clock, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Clock, target: 30, suffix: "+", label: "Anos no mercado automotivo de Brasília" },
  { icon: Truck, target: 1000, suffix: "+", label: "Veículos entregues" },
  { icon: Award, target: 4, suffix: "", label: "Empresas no Grupo Suprema" },
  { icon: Star, target: 4.5, suffix: "★", label: "Avaliação Google Maps", isDecimal: true },
];

function CounterStat({
  target,
  suffix,
  isDecimal,
}: {
  target: number;
  suffix: string;
  isDecimal?: boolean;
}) {
  const [value, setValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;

            if (isDecimal) {
              setValue(current.toFixed(1));
            } else {
              setValue(Math.floor(current).toLocaleString("pt-BR"));
            }

            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, isDecimal]);

  return (
    <div ref={ref} className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold text-glow-gold">
      {value}
      {suffix}
    </div>
  );
}

const SocialProof = () => {
  return (
    <section className="py-12 sm:py-16 section-divider">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium text-primary/70 tracking-[0.2em] uppercase mb-4">
            Credibilidade
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tradição e <span className="text-gradient-gold text-glow-gold">Confiança</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base sm:text-lg">
            A Suprema Veículos é referência no mercado automotivo de Brasília desde 1994.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card-gold rounded-xl p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-colors">
                <stat.icon size={22} className="text-primary" />
              </div>
              <CounterStat
                target={stat.target}
                suffix={stat.suffix}
                isDecimal={stat.isDecimal}
              />
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
