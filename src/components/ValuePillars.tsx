import { motion } from "framer-motion";
import { IdCard, Package, TrendingDown, MessageCircle, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: IdCard,
    title: "CNH B",
    description: "Dirija sem precisar de habilitação C. O T30 é classificado como veículo leve.",
    highlight: "Sem CNH C",
    color: "bg-blue-accent",
  },
  {
    icon: Package,
    title: "Caçamba Inclusa",
    description: "Carroceria de 2.940mm já incluída. Sem custo adicional. Pronto para trabalhar.",
    highlight: "2.940mm",
    color: "bg-primary",
  },
  {
    icon: TrendingDown,
    title: "Menor TCO",
    description: "12,6 km/L na cidade + manutenção acessível = menor custo da categoria.",
    highlight: "12,6 km/L",
    color: "bg-navy-light",
  },
];

const ValuePillars = () => {
  return (
    <section id="pilares" className="py-14 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold text-blue-accent tracking-[0.15em] uppercase mb-3">
            Diferenciais
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
            Por que escolher o <span className="text-blue-accent">T30</span>?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Três razões que fazem do Shineray T30 o utilitário mais inteligente do mercado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated p-6 group"
            >
              <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center mb-5`}>
                <pillar.icon size={22} className="text-white" />
              </div>

              <span className="inline-block text-[10px] font-bold text-primary bg-primary/8 rounded-full px-3 py-1 mb-3 tracking-wider uppercase">
                {pillar.highlight}
              </span>

              <h3 className="text-lg font-extrabold mb-2 text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://wa.me/5561993972226?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20diferenciais%20do%20T30.&utm_source=site&utm_medium=pilares&utm_content=cta_pilares"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-4"
          >
            <MessageCircle size={18} />
            Tire suas Dúvidas no WhatsApp
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePillars;
