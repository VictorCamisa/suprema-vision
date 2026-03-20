import { motion } from "framer-motion";
import { Check, X, Crown } from "lucide-react";

const criteria = [
  { label: "Preço (0km)", t30: "~R$99.970", hr: "~R$180.000", strada: "~R$130.000", t30Winner: true },
  { label: "Carga útil", t30: "1.500 kg", hr: "1.470 kg", strada: "720 kg", t30Winner: true },
  { label: "Caçamba inclusa", t30: true, hr: false, strada: true },
  { label: "CNH necessária", t30: "B", hr: "C", strada: "B", t30Winner: true },
  { label: "Consumo cidade", t30: "12,6 km/L", hr: "~8 km/L", strada: "~10 km/L", t30Winner: true },
  { label: "Airbag duplo", t30: true, hr: true, strada: true },
  { label: "Direção elétrica", t30: true, hr: true, strada: true },
  { label: "Ar-condicionado", t30: true, hr: true, strada: true },
];

const BoolCell = ({ value }: { value: boolean }) =>
  value ? (
    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto">
      <Check size={14} className="text-green-600" />
    </div>
  ) : (
    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mx-auto">
      <X size={14} className="text-red-400" />
    </div>
  );

const ComparisonTable = () => {
  return (
    <section id="comparativo" className="py-14 sm:py-20 section-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold text-blue-accent tracking-[0.15em] uppercase mb-3">
            Comparativo
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
            Compare e <span className="text-blue-accent">Comprove</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Veja como o T30 se posiciona contra os principais concorrentes.
          </p>
        </motion.div>

        {/* Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto hidden md:block"
        >
          <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-5 text-sm font-medium text-muted-foreground">Critério</th>
                  <th className="py-4 px-5 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary text-white rounded-lg py-2 px-4">
                      <Crown size={14} />
                      <span className="font-extrabold text-sm">Shineray T30</span>
                    </div>
                  </th>
                  <th className="py-4 px-5 text-center text-sm font-semibold text-muted-foreground">Concorrente A</th>
                  <th className="py-4 px-5 text-center text-sm font-semibold text-muted-foreground">Concorrente B</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((row, i) => (
                  <tr key={row.label} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-secondary/30" : ""}`}>
                    <td className="py-3.5 px-5 text-sm font-medium">{row.label}</td>
                    <td className="py-3.5 px-5 text-center">
                      {typeof row.t30 === "boolean" ? (
                        <BoolCell value={row.t30} />
                      ) : (
                        <span className={`text-sm font-bold ${row.t30Winner ? "text-blue-accent" : ""}`}>{row.t30}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-5 text-center text-sm text-muted-foreground">
                      {typeof row.hr === "boolean" ? <BoolCell value={row.hr} /> : row.hr}
                    </td>
                    <td className="py-3.5 px-5 text-center text-sm text-muted-foreground">
                      {typeof row.strada === "boolean" ? <BoolCell value={row.strada} /> : row.strada}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile */}
        <div className="md:hidden space-y-3 max-w-md mx-auto">
          {criteria.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="bg-white rounded-xl border border-border p-4"
            >
              <div className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">{row.label}</div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "T30", value: row.t30, winner: row.t30Winner },
                  { name: "Conc. A", value: row.hr, winner: false },
                  { name: "Conc. B", value: row.strada, winner: false },
                ].map((col) => (
                  <div
                    key={col.name}
                    className={`text-center p-2 rounded-lg ${col.winner ? "bg-primary/5 border border-primary/20" : "bg-secondary"}`}
                  >
                    <div className="text-[10px] font-bold text-muted-foreground mb-1">{col.name}</div>
                    <div className={`text-sm font-bold ${col.winner ? "text-blue-accent" : "text-foreground"}`}>
                      {typeof col.value === "boolean" ? <BoolCell value={col.value} /> : col.value}
                    </div>
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

export default ComparisonTable;
