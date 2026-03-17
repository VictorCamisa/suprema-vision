import { motion } from "framer-motion";
import { Award, Truck, Clock, Star } from "lucide-react";

const stats = [
  { icon: Clock, value: "30+", label: "Anos no mercado automotivo de Brasília" },
  { icon: Truck, value: "1.000+", label: "Veículos entregues" },
  { icon: Award, value: "4", label: "Empresas no Grupo Suprema" },
  { icon: Star, value: "4.5★", label: "Avaliação Google Maps" },
];

const SocialProof = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Tradição e <span className="text-gradient-gold">Confiança</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A Suprema Veículos é referência no mercado automotivo de Brasília desde 1994.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 text-center"
            >
              <stat.icon size={28} className="text-primary mx-auto mb-3" />
              <div className="font-display text-3xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
