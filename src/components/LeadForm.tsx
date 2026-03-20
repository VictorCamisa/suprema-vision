import { motion } from "framer-motion";
import { MessageCircle, Shield, Clock, Zap, ArrowUpRight } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Shineray%20T30.&utm_source=site&utm_medium=contato&utm_content=cta_contato";

const LeadForm = () => {
  return (
    <section id="contato" className="py-14 sm:py-20 section-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold text-blue-accent tracking-[0.15em] uppercase mb-3">
              Contato
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
              Fale com um <span className="text-blue-accent">Consultor</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Tire suas dúvidas, simule financiamento ou agende um test drive.
            </p>
          </motion.div>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="btn-whatsapp text-lg px-10 py-5 justify-center"
          >
            <MessageCircle size={22} />
            Falar no WhatsApp
            <ArrowUpRight size={18} />
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-6 mt-8"
          >
            {[
              { icon: Shield, text: "Atendimento seguro" },
              { icon: Clock, text: "Resposta rápida" },
              { icon: Zap, text: "Sem burocracia" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <item.icon size={12} className="text-primary/50" />
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
