import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const criteria = [
  { label: "Preço (0km)", t30: "~R$115.000", hr: "~R$180.000", strada: "~R$130.000", highlight: true },
  { label: "Carga útil", t30: "1.500 kg", hr: "1.470 kg", strada: "720 kg", highlight: true },
  { label: "Caçamba inclusa", t30: true, hr: false, strada: true },
  { label: "CNH necessária", t30: "B", hr: "C", strada: "B", highlight: true },
  { label: "Consumo cidade", t30: "12,6 km/L", hr: "~8 km/L", strada: "~10 km/L", highlight: true },
  { label: "Airbag duplo", t30: true, hr: true, strada: true },
  { label: "Direção elétrica", t30: true, hr: true, strada: true },
  { label: "Ar-condicionado", t30: true, hr: true, strada: true },
];

const BoolCell = ({ value }: { value: boolean }) =>
  value ? (
    <Check size={18} className="text-primary mx-auto" />
  ) : (
    <X size={18} className="text-destructive mx-auto" />
  );

const ComparisonTable = () => {
  return (
    <section id="comparativo" className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Compare e <span className="text-gradient-gold">Comprove</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Veja como o T30 se posiciona contra os principais concorrentes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Critério</th>
                <th className="py-4 px-4 text-center">
                  <div className="bg-primary/10 border border-primary/30 rounded-lg py-3 px-4">
                    <span className="font-display text-lg font-bold text-gradient-gold">Shineray T30</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center">
                  <span className="font-display text-lg font-semibold text-muted-foreground">Hyundai HR</span>
                </th>
                <th className="py-4 px-4 text-center">
                  <span className="font-display text-lg font-semibold text-muted-foreground">Fiat Strada</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-border/50 ${i % 2 === 0 ? "bg-card/50" : ""}`}
                >
                  <td className="py-4 px-4 text-sm font-medium">{row.label}</td>
                  <td className="py-4 px-4 text-center font-semibold text-primary">
                    {typeof row.t30 === "boolean" ? <BoolCell value={row.t30} /> : row.t30}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-muted-foreground">
                    {typeof row.hr === "boolean" ? <BoolCell value={row.hr} /> : row.hr}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-muted-foreground">
                    {typeof row.strada === "boolean" ? <BoolCell value={row.strada} /> : row.strada}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
