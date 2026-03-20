import { motion } from "framer-motion";
import { CreditCard, Building, Calculator, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const whatsappFinance =
  "https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20sobre%20financiamento%20do%20Shineray%20T30.&utm_source=site&utm_medium=financiamento&utm_content=cta_financiamento";

const options = [
  {
    icon: CreditCard,
    title: "Financiamento Bancário",
    description: "Parcelas fixas com as melhores taxas do mercado. Aprovação rápida.",
    badge: "Mais popular",
  },
  {
    icon: Building,
    title: "CNPJ / Pessoa Jurídica",
    description: "Condições especiais para empresas, MEIs e autônomos. Deduza do imposto.",
    badge: "Para empresas",
  },
  {
    icon: Calculator,
    title: "Consórcio",
    description: "Parcelas mais baixas sem juros. Ideal para quem pode planejar a compra.",
    badge: "Sem juros",
  },
];

function AnimatedPrice() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-5xl sm:text-6xl font-bold text-gradient-gold text-glow-gold mb-2"
      >
        R$ 99.970
      </motion.p>
    </div>
  );
}

const Financing = () => {
  return (
    <section id="financiamento" className="py-12 sm:py-16 relative section-divider">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-medium text-primary/70 tracking-[0.2em] uppercase mb-4">
            Condições
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-gold text-glow-gold">Financiamento</span> Facilitado
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base sm:text-lg">
            Entrada facilitada e parcelas que cabem no seu bolso. Fale com nosso consultor financeiro.
          </p>
        </motion.div>

        {/* Price highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center mb-14 glass-card-gold rounded-2xl p-10 relative overflow-hidden"
        >
          {/* Radial glow behind price */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(210_70%_50%/0.08),transparent_70%)]" />

          <div className="relative z-10">
            <p className="text-sm text-muted-foreground mb-3 uppercase tracking-widest font-medium">
              A partir de
            </p>
            <AnimatedPrice />
            <p className="text-sm text-muted-foreground font-medium italic">Consulte parcelas e carência de até 60 dias*</p>
            <div className="flex items-center justify-center gap-4 mt-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="text-[10px] font-bold tracking-widest uppercase">Parceiros:</span>
               <span className="text-xs font-bold">SANTANDER</span>
               <span className="text-xs font-bold">WEBMOTORS</span>
            </div>
            <p className="text-xs text-muted-foreground/50 mt-5">
              *Condições exclusivas para crédito aprovado via Santander e Webmotors.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-14">
          {options.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card-gold rounded-xl p-6 text-center group"
            >
              <span className="inline-block text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4 tracking-wider uppercase">
                {opt.badge}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-colors">
                <opt.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{opt.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{opt.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href={whatsappFinance}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-magnetic inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-bold text-base px-10 py-4 rounded-lg shadow-gold-lg"
          >
            <MessageCircle size={20} />
            Simular Financiamento
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Financing;
