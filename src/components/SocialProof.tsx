import { motion } from "framer-motion";
import { Award, Truck, Clock, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Clock, target: 30, suffix: "+", label: "Anos no mercado" },
  { icon: Truck, target: 1000, suffix: "+", label: "Veículos entregues" },
  { icon: Award, target: 4, suffix: "", label: "Empresas no Grupo" },
  { icon: Star, target: 4.5, suffix: "★", label: "Google Maps", isDecimal: true },
];

function CounterStat({ target, suffix, isDecimal }: { target: number; suffix: string; isDecimal?: boolean }) {
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
            setValue(isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString("pt-BR"));
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
    <div ref={ref} className="text-3xl sm:text-4xl font-extrabold text-white">
      {value}{suffix}
    </div>
  );
}

const SocialProof = () => {
  return (
    <section className="py-14 sm:py-20 section-navy-spotlight section-rich">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold text-blue-accent tracking-[0.15em] uppercase mb-3">
            Credibilidade
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-white">
            Tradição e Confiança
          </h2>
          <p className="text-white/60 max-w-md mx-auto">
            A Suprema Veículos é referência no mercado automotivo de Brasília desde 1994.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/8 rounded-xl p-5 text-center border border-white/10"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-accent flex items-center justify-center mx-auto mb-3">
                <stat.icon size={18} className="text-white" />
              </div>
              <CounterStat target={stat.target} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              <p className="text-xs text-white/50 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
