import { motion } from "framer-motion";
import { IdCard, Package, TrendingDown, ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import tluxCacamba from "@/assets/tlux-cacamba.webp";

const pillars = [
  {
    icon: IdCard,
    title: "CNH B",
    description: "Dirija com habilitação comum. Sem precisar de CNH C.",
    highlight: "Sem CNH C",
    color: "bg-blue-accent",
  },
  {
    icon: Package,
    title: "Caçamba Inclusa",
    description: "Carroceria de 2.940mm já inclusa. Pronto para trabalhar.",
    highlight: "2.940mm",
    color: "bg-primary",
  },
  {
    icon: TrendingDown,
    title: "Menor TCO",
    description: "12,6 km/L na cidade + manutenção acessível.",
    highlight: "12,6 km/L",
    color: "bg-navy-light",
  },
];

const ValuePillars = () => {
  return (
    <section id="pilares" className="py-16 sm:py-24 section-light-grid section-rich">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Lifestyle image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lifestyle-image hidden lg:block"
          >
            <img
              src={tluxCacamba}
              alt="Shineray TLUX T30 — Caçamba oficial"
              className="w-full h-full object-cover aspect-[4/5]"
              loading="lazy"
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="inline-block text-xs font-bold text-blue-accent tracking-[0.15em] uppercase mb-3">
                Diferenciais
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
                Por que o <span className="text-blue-accent">T30</span>?
              </h2>
            </motion.div>

            <div className="space-y-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-elevated p-5 flex gap-5 items-start"
                >
                  <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center flex-shrink-0`}>
                    <pillar.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-lg font-extrabold text-foreground">{pillar.title}</h3>
                      <span className="text-[10px] font-bold text-primary bg-primary/8 rounded-full px-3 py-0.5 tracking-wider uppercase">
                        {pillar.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="https://wa.me/556133638060?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20diferenciais%20do%20T30.&utm_source=site&utm_medium=pilares&utm_content=cta_pilares"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <MessageCircle size={18} />
                Tire suas Dúvidas
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
