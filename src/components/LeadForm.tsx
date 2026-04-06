import { motion } from "framer-motion";
import { Shield, Clock, Zap, ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import tluxAcessorios from "@/assets/tlux-acessorios.webp";

const whatsappUrl =
  "https://wa.me/556133638060?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Shineray%20T30.&utm_source=site&utm_medium=contato&utm_content=cta_contato";

const LeadForm = () => {
  return (
    <section id="contato" className="py-16 sm:py-24 section-light-diagonal section-rich">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Lifestyle image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lifestyle-image hidden md:block"
          >
            <img
              src={tluxAcessorios}
              alt="Shineray TLUX T30 — Interior e acessórios"
              className="w-full h-full object-cover aspect-[4/5]"
              loading="lazy"
            />
          </motion.div>

          {/* CTA content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="inline-block text-xs font-bold text-blue-accent tracking-[0.15em] uppercase mb-3">
              Contato
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
              Fale com um <span className="text-blue-accent">Consultor</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Nossa equipe está pronta para te ajudar a encontrar a melhor solução.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-10 py-5 justify-center md:justify-start"
            >
              <MessageCircle size={22} />
              Falar no WhatsApp
              <ArrowUpRight size={18} />
            </a>

            <div className="flex flex-wrap items-center gap-5 mt-8">
              {[
                { icon: Shield, text: "Atendimento seguro" },
                { icon: Clock, text: "Resposta rápida" },
                { icon: Zap, text: "Sem burocracia" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-7 h-7 rounded-lg bg-primary/5 flex items-center justify-center">
                    <item.icon size={14} className="text-primary" />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
