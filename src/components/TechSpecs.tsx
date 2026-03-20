import { motion } from "framer-motion";
import { Gauge, Fuel, Ruler, Shield, Settings, Zap, MessageCircle } from "lucide-react";

const specGroups = [
  {
    icon: Gauge,
    title: "Motor",
    specs: [
      { label: "Tipo", value: "1.5L / 1.6L 16V Gasolina" },
      { label: "Potência", value: "115 cv" },
      { label: "Torque", value: "15,3 kgf.m" },
      { label: "Transmissão", value: "Manual 5 marchas" },
    ],
  },
  {
    icon: Ruler,
    title: "Dimensões",
    specs: [
      { label: "Carroceria", value: "2.940 x 1.600 x 375 mm" },
      { label: "PBT", value: "2.490 kg" },
      { label: "Carga útil", value: "1.500 kg" },
      { label: "Entre-eixos", value: "2.700 mm" },
    ],
  },
  {
    icon: Fuel,
    title: "Consumo",
    specs: [
      { label: "Cidade", value: "12,6 km/L" },
      { label: "Estrada", value: "14,7 km/L" },
      { label: "Tanque", value: "55 litros" },
    ],
  },
  {
    icon: Shield,
    title: "Segurança",
    specs: [
      { label: "Airbag", value: "Duplo (motorista + passageiro)" },
      { label: "Freios", value: "ABS + EBD" },
      { label: "Cintos", value: "3 pontos com pré-tensionador" },
    ],
  },
  {
    icon: Settings,
    title: "Conforto",
    specs: [
      { label: "Direção", value: "Elétrica" },
      { label: "Ar-condicionado", value: "De série" },
      { label: "Vidros", value: "Elétricos" },
    ],
  },
  {
    icon: Zap,
    title: "Equipamentos",
    specs: [
      { label: "Multimídia", value: "Rádio Bluetooth / USB" },
      { label: "Faróis", value: "Com faróis de neblina" },
      { label: "Retrovisores", value: "Regulagem elétrica" },
    ],
  },
];

const TechSpecs = () => {
  return (
    <section id="ficha-tecnica" className="py-12 sm:py-16 relative section-divider">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-medium text-primary/70 tracking-[0.2em] uppercase mb-4">
            Especificações
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ficha <span className="text-gradient-gold text-glow-gold">Técnica</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base sm:text-lg">
            Todos os detalhes do Shineray T30 / TLux T30 em um só lugar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {specGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card-gold rounded-xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors"
                >
                  <group.icon size={18} className="text-primary" />
                </motion.div>
                <h3 className="font-display text-lg font-bold">{group.title}</h3>
              </div>

              <div className="space-y-3">
                {group.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-baseline gap-2 group/row"
                  >
                    <span className="text-sm text-muted-foreground">{spec.label}</span>
                    <span className="text-xs text-muted-foreground/30 flex-1 border-b border-dotted border-border/30 mx-2 mb-1" />
                    <span className="text-sm font-medium text-foreground group-hover/row:text-primary transition-colors text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
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
            href="https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vi%20a%20ficha%20t%C3%A9cnica%20do%20T30%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.&utm_source=site&utm_medium=ficha_tecnica&utm_content=cta_specs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-2 bg-blue-gradient text-primary-foreground font-bold text-base px-8 py-4 rounded-lg shadow-blue-lg"
          >
            <MessageCircle size={20} />
            Solicitar Proposta Personalizada
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSpecs;
