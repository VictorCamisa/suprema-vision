import { motion } from "framer-motion";
import { CreditCard, Building, Calculator, MessageCircle } from "lucide-react";

const whatsappFinance = "https://wa.me/556133638060?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20sobre%20financiamento%20do%20Shineray%20T30.&utm_source=site&utm_medium=financiamento&utm_content=cta_financiamento";

const options = [
  {
    icon: CreditCard,
    title: "Financiamento Bancário",
    description: "Parcelas fixas com as melhores taxas do mercado. Aprovação rápida.",
  },
  {
    icon: Building,
    title: "CNPJ / Pessoa Jurídica",
    description: "Condições especiais para empresas, MEIs e autônomos. Deduza do imposto.",
  },
  {
    icon: Calculator,
    title: "Consórcio",
    description: "Parcelas mais baixas sem juros. Ideal para quem pode planejar a compra.",
  },
];

const Financing = () => {
  return (
    <section id="financiamento" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-gradient-gold">Financiamento</span> Facilitado
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Entrada facilitada e parcelas que cabem no seu bolso. Fale com nosso consultor financeiro.
          </p>
        </motion.div>

        {/* Price highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center mb-12 bg-card border border-primary/30 rounded-lg p-8"
        >
          <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">A partir de</p>
          <p className="font-display text-5xl font-bold text-gradient-gold mb-2">R$ X</p>
          <p className="text-sm text-muted-foreground">por mês*</p>
          <p className="text-xs text-muted-foreground/60 mt-4">
            *Valor sujeito a análise de crédito. Consulte condições.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {options.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 text-center"
            >
              <opt.icon size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg font-bold mb-2">{opt.title}</h3>
              <p className="text-sm text-muted-foreground">{opt.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={whatsappFinance}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-bold text-base px-8 py-4 rounded-md hover:opacity-90 transition-opacity shadow-gold"
          >
            <MessageCircle size={20} />
            Simular Financiamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Financing;
