import { motion } from "framer-motion";
import { IdCard, Package, TrendingDown } from "lucide-react";

const pillars = [
  {
    icon: IdCard,
    title: "CNH B",
    description:
      "Dirija sem precisar de habilitação C. O T30 é classificado como veículo leve — qualquer motorista pode operar.",
    highlight: "Sem CNH C",
  },
  {
    icon: Package,
    title: "Caçamba Inclusa",
    description:
      "Carroceria de 2.940mm já incluída no preço. Sem custo adicional de implementação. Pronto para trabalhar.",
    highlight: "2.940mm",
  },
  {
    icon: TrendingDown,
    title: "Menor TCO",
    description:
      "12,6 km/L na cidade + manutenção acessível = menor custo total de operação da categoria.",
    highlight: "12,6 km/L",
  },
];

const ValuePillars = () => {
  return (
    <section id="pilares" className="py-24 sm:py-32 relative section-divider">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-medium text-primary/70 tracking-[0.2em] uppercase mb-4"
          >
            Diferenciais
          </motion.span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Por que escolher o <span className="text-gradient-gold text-glow-gold">T30</span>?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base sm:text-lg">
            Três razões que fazem do Shineray T30 o utilitário mais inteligente do mercado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card-gold rounded-xl p-8 group cursor-default relative overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[radial-gradient(circle,hsl(210_70%_50%/0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300"
                >
                  <pillar.icon size={26} className="text-primary" />
                </motion.div>

                {/* Highlight badge */}
                <span className="inline-block text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4 tracking-wider uppercase">
                  {pillar.highlight}
                </span>

                <h3 className="font-display text-xl font-bold mb-3 text-gradient-gold">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5561993972226?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20diferenciais%20do%20T30.&utm_source=site&utm_medium=pilares&utm_content=cta_pilares"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-base px-8 py-4 rounded-lg shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle size={20} />
            Tire suas Dúvidas no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePillars;
