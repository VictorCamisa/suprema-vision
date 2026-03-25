import { motion } from "framer-motion";
import { CreditCard, Building, Calculator, MessageCircle, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const whatsappFinance =
  "https://wa.me/556133638060?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20sobre%20financiamento%20do%20Shineray%20T30.&utm_source=site&utm_medium=financiamento&utm_content=cta_financiamento";

const options = [
  { icon: CreditCard, title: "Financiamento", description: "Parcelas fixas com as melhores taxas.", badge: "Mais popular" },
  { icon: Building, title: "CNPJ / PJ", description: "Condições especiais para empresas.", badge: "Para empresas" },
  { icon: Calculator, title: "Consórcio", description: "Parcelas mais baixas, sem juros.", badge: "Sem juros" },
];

function AnimatedPrice() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-extrabold text-primary mb-1"
      >
        R$ 99.970
      </motion.p>
    </div>
  );
}

const Financing = () => {
  return (
    <section id="financiamento" className="py-16 sm:py-24 section-light-diagonal section-rich">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold text-blue-accent tracking-[0.15em] uppercase mb-3">
            Condições
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
            <span className="text-blue-accent">Financiamento</span> Facilitado
          </h2>
        </motion.div>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto text-center mb-12 card-elevated p-10 rounded-2xl"
        >
          <p className="text-sm text-muted-foreground mb-2 uppercase tracking-widest font-bold">A partir de</p>
          <AnimatedPrice />
          <p className="text-sm text-muted-foreground italic">Consulte parcelas*</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
          {options.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-elevated p-6 text-center rounded-2xl"
            >
              <span className="inline-block text-[10px] font-bold text-blue-accent bg-accent/10 rounded-full px-3 py-1 mb-4 tracking-wider uppercase">
                {opt.badge}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
                <opt.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-base font-extrabold mb-1">{opt.title}</h3>
              <p className="text-sm text-muted-foreground">{opt.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={whatsappFinance}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            <MessageCircle size={18} />
            Simular Financiamento
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Financing;
