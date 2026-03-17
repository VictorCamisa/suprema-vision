import { motion } from "framer-motion";
import { Gauge, Fuel, Ruler, Shield, Settings, Zap } from "lucide-react";

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
    <section id="ficha-tecnica" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Ficha <span className="text-gradient-gold">Técnica</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Todos os detalhes do Shineray T30 / TLux T30 em um só lugar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {specGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <group.icon size={20} className="text-primary" />
                <h3 className="font-display text-lg font-bold">{group.title}</h3>
              </div>
              <div className="space-y-3">
                {group.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-baseline gap-2">
                    <span className="text-sm text-muted-foreground">{spec.label}</span>
                    <span className="text-sm font-medium text-foreground text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
