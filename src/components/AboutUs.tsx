import { motion } from "framer-motion";
import { MapPin, Building, Calendar } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-12 sm:py-16 relative section-divider">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-medium text-primary/70 tracking-[0.2em] uppercase mb-4">
              Institucional
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Quem é a{" "}
              <span className="text-gradient-gold text-glow-gold">Suprema</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              Fundada em 1994, a Suprema Veículos é parte do Grupo Suprema — um conglomerado de 4 empresas com mais de 30 anos de atuação no mercado automotivo de Brasília. Somos concessionária autorizada Shineray no Distrito Federal.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Nossa missão é oferecer os melhores utilitários do mercado com atendimento consultivo, condições reais de financiamento e suporte completo de pós-venda.
            </p>

            {/* Info badges */}
            <div className="flex flex-wrap gap-3">
              <div className="glass-card-gold rounded-lg px-4 py-3 flex items-center gap-3">
                <Calendar size={16} className="text-primary" />
                <div>
                  <span className="text-xs text-muted-foreground block">Desde</span>
                  <span className="font-display font-bold text-gradient-gold">1994</span>
                </div>
              </div>
              <div className="glass-card-gold rounded-lg px-4 py-3 flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <div>
                  <span className="text-xs text-muted-foreground block">Localização</span>
                  <span className="text-sm font-medium">SIA, Brasília/DF</span>
                </div>
              </div>
              <div className="glass-card-gold rounded-lg px-4 py-3 flex items-center gap-3">
                <Building size={16} className="text-primary" />
                <div>
                  <span className="text-xs text-muted-foreground block">Grupo</span>
                  <span className="text-sm font-medium">4 empresas</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Real Dealership Image */}
            <div className="glass-card-gold rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden group">
              <img 
                src="https://supremautilitarios.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-02-at-13.17.39.jpeg" 
                alt="Concessionária Suprema Utilitários Brasília"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-black/40" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass-card-gold rounded-xl px-5 py-3 shadow-gold"
            >
              <span className="font-display text-lg font-bold text-gradient-gold">30+</span>
              <span className="text-xs text-muted-foreground block">Anos de mercado</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
