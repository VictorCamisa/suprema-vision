import { motion } from "framer-motion";
import { MessageCircle, Shield, Clock, Zap } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Shineray%20T30.&utm_source=site&utm_medium=contato&utm_content=cta_contato";

const LeadForm = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 relative section-divider">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-medium text-primary/70 tracking-[0.2em] uppercase mb-4">
              Contato
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Fale com um <span className="text-gradient-gold text-glow-gold">Consultor</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-lg mx-auto">
              Tire suas dúvidas, simule financiamento ou agende um test drive diretamente pelo WhatsApp.
            </p>
          </motion.div>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-magnetic inline-flex items-center gap-3 bg-[#25D366] text-white font-bold text-lg px-10 py-5 rounded-xl shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
          >
            <MessageCircle size={24} />
            Falar no WhatsApp
          </motion.a>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-8 mt-10"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
              <Shield size={14} className="text-primary/40" />
              Atendimento seguro
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
              <Clock size={14} className="text-primary/40" />
              Resposta rápida
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
              <Zap size={14} className="text-primary/40" />
              Sem burocracia
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
