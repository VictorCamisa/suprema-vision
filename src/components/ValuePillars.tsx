import { motion } from "framer-motion";
import { IdCard, Package, TrendingDown } from "lucide-react";

const pillars = [
  {
    icon: IdCard,
    title: "CNH B",
    description:
      "Dirija sem precisar de habilitação C. O T30 é classificado como veículo leve — qualquer motorista pode operar.",
  },
  {
    icon: Package,
    title: "Caçamba Inclusa",
    description:
      "Carroceria de 2.940mm já incluída no preço. Sem custo adicional de implementação. Pronto para trabalhar.",
  },
  {
    icon: TrendingDown,
    title: "Menor TCO",
    description:
      "12,6 km/L na cidade + manutenção acessível = menor custo total de operação da categoria.",
  },
];

const ValuePillars = () => {
  return (
    <section id="pilares" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Por que escolher o <span className="text-gradient-gold">T30</span>?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Três razões que fazem do Shineray T30 o utilitário mais inteligente do mercado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <pillar.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-gradient-gold">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
