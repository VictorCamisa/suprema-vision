import { motion } from "framer-motion";
import { Gauge, Fuel, Ruler, Shield, Settings, Zap, MessageCircle, ArrowUpRight } from "lucide-react";

const specGroups = [
  {
    icon: Gauge, title: "Motor",
    specs: [
      { label: "Tipo", value: "1.5L / 1.6L 16V Gasolina" },
      { label: "Potência", value: "115 cv" },
      { label: "Torque", value: "15,3 kgf.m" },
      { label: "Transmissão", value: "Manual 5 marchas" },
    ],
  },
  {
    icon: Ruler, title: "Dimensões",
    specs: [
      { label: "Carroceria", value: "2.940 x 1.600 x 375 mm" },
      { label: "PBT", value: "2.490 kg" },
      { label: "Carga útil", value: "1.500 kg" },
      { label: "Entre-eixos", value: "2.700 mm" },
    ],
  },
  {
    icon: Fuel, title: "Consumo",
    specs: [
      { label: "Cidade", value: "12,6 km/L" },
      { label: "Estrada", value: "14,7 km/L" },
      { label: "Tanque", value: "55 litros" },
    ],
  },
  {
    icon: Shield, title: "Segurança",
    specs: [
      { label: "Airbag", value: "Duplo" },
      { label: "Freios", value: "ABS + EBD" },
      { label: "Cintos", value: "3 pontos" },
    ],
  },
  {
    icon: Settings, title: "Conforto",
    specs: [
      { label: "Direção", value: "Elétrica" },
      { label: "Ar-condicionado", value: "De série" },
      { label: "Vidros", value: "Elétricos" },
    ],
  },
  {
    icon: Zap, title: "Equipamentos",
    specs: [
      { label: "Multimídia", value: "Bluetooth / USB" },
      { label: "Faróis", value: "Com neblina" },
      { label: "Retrovisores", value: "Regulagem elétrica" },
    ],
  },
];

const TechSpecs = () => {
  return (
    <section id="ficha-tecnica" className="py-16 sm:py-24 section-navy-mesh section-rich">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold text-blue-accent tracking-[0.15em] uppercase mb-3">
            Especificações
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-white">
            Ficha Técnica
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Todos os detalhes do Shineray T30 em um só lugar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {specGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-6 border border-white/8 hover:border-white/16 transition-all duration-300 hover:bg-white/[0.08]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-accent/90 flex items-center justify-center">
                  <group.icon size={18} className="text-white" />
                </div>
                <h3 className="text-base font-extrabold text-white">{group.title}</h3>
              </div>

              <div className="space-y-3">
                {group.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-baseline gap-2">
                    <span className="text-xs text-white/45">{spec.label}</span>
                    <span className="text-xs text-white/20 flex-1 border-b border-dotted border-white/8 mx-1 mb-0.5" />
                    <span className="text-sm font-semibold text-white/85 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vi%20a%20ficha%20t%C3%A9cnica%20do%20T30%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.&utm_source=site&utm_medium=ficha_tecnica&utm_content=cta_specs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-4"
          >
            <MessageCircle size={18} />
            Solicitar Proposta
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSpecs;
