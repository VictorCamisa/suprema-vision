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
    <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center mx-auto">
      <Check size={14} className="text-primary" />
    </div>
  ) : (
    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
      <X size={14} className="text-destructive/70" />
    </div>
  );

const ComparisonTable = () => {
  return (
    <section id="comparativo" className="py-12 sm:py-16 section-divider">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium text-primary/70 tracking-[0.2em] uppercase mb-4">
            Comparativo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Compare e <span className="text-gradient-gold text-glow-gold">Comprove</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base sm:text-lg">
            Veja como o T30 se posiciona contra os principais concorrentes.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto hidden md:block"
        >
          <div className="glass-card rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-5 px-6 text-sm font-medium text-muted-foreground">
                    Critério
                  </th>
                  <th className="py-5 px-6 text-center relative">
                    <div className="glass-card-gold rounded-xl py-3 px-5 inline-flex items-center gap-2">
                      <Crown size={16} className="text-primary" />
                      <span className="font-display text-lg font-bold text-gradient-gold">
                        Shineray T30
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-center">
                    <span className="font-display text-base font-semibold text-muted-foreground">
                      Concorrente A
                    </span>
                  </th>
                  <th className="py-5 px-6 text-center">
                    <span className="font-display text-base font-semibold text-muted-foreground">
                      Concorrente B
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((row, i) => (
                  <motion.tr
                    key={row.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`border-b border-border/30 transition-colors hover:bg-primary/[0.02] ${
                      i % 2 === 0 ? "bg-card/30" : ""
                    }`}
                  >
                    <td className="py-4 px-6 text-sm font-medium">{row.label}</td>
                    <td className="py-4 px-6 text-center">
                      <div className={`font-semibold ${row.t30Winner ? "text-primary" : "text-foreground"}`}>
                        {typeof row.t30 === "boolean" ? (
                          <BoolCell value={row.t30} />
                        ) : (
                          <span className={row.t30Winner ? "text-gradient-gold font-bold" : ""}>
                            {row.t30}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center text-sm text-muted-foreground">
                      {typeof row.hr === "boolean" ? <BoolCell value={row.hr} /> : row.hr}
                    </td>
                    <td className="py-4 px-6 text-center text-sm text-muted-foreground">
                      {typeof row.strada === "boolean" ? <BoolCell value={row.strada} /> : row.strada}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4 max-w-md mx-auto">
          {criteria.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-4"
            >
              <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                {row.label}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "T30", value: row.t30, winner: row.t30Winner },
                  { name: "Conc. A", value: row.hr, winner: false },
                  { name: "Conc. B", value: row.strada, winner: false },
                ].map((col) => (
                  <div
                    key={col.name}
                    className={`text-center p-2 rounded-lg ${
                      col.winner ? "glass-card-gold" : "bg-card/30"
                    }`}
                  >
                    <div className="text-[10px] font-medium text-muted-foreground mb-1">
                      {col.name}
                    </div>
                    <div className={`text-sm font-semibold ${col.winner ? "text-primary" : "text-foreground"}`}>
                      {typeof col.value === "boolean" ? (
                        <BoolCell value={col.value} />
                      ) : (
                        col.value
                      )}
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
