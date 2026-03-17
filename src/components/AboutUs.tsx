import { motion } from "framer-motion";
import { MapPin, Building } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">
              Quem é a{" "}
              <span className="text-gradient-gold">Suprema</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fundada em 1994, a Suprema Veículos é parte do Grupo Suprema — um conglomerado de 4 empresas com mais de 30 anos de atuação no mercado automotivo de Brasília. Somos concessionária autorizada Shineray no Distrito Federal.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nossa missão é oferecer os melhores utilitários do mercado com atendimento consultivo, condições reais de financiamento e suporte completo de pós-venda.
            </p>
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">
                SIA, Trecho 02, Lote 370 — Guará, Brasília/DF
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg aspect-[4/3] flex items-center justify-center"
          >
            <div className="text-center p-8">
              <Building size={48} className="text-primary/30 mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">
                Foto da loja / equipe<br />
                <span className="text-xs text-muted-foreground/60">(substituir por foto real)</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
