import { motion } from "framer-motion";
import { MapPin, Building, Calendar } from "lucide-react";
import logoSuprema from "@/assets/logo-suprema.png";

const AboutUs = () => {
  return (
    <section className="py-14 sm:py-20 section-light-grid section-rich">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold text-blue-accent tracking-[0.15em] uppercase mb-3">
              Institucional
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
              Quem é a <span className="text-blue-accent">Suprema</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fundada em 1994, a Suprema Veículos é parte do Grupo Suprema — um conglomerado com mais de 30 anos no mercado automotivo de Brasília. Somos concessionária autorizada Shineray no DF.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: Calendar, label: "Desde", value: "1994" },
                { icon: MapPin, label: "Local", value: "SIA, Brasília/DF" },
                { icon: Building, label: "Grupo", value: "4 empresas" },
              ].map((item) => (
                <div key={item.label} className="card-elevated px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <item.icon size={14} className="text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground block uppercase tracking-wider font-bold">{item.label}</span>
                    <span className="text-sm font-extrabold">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="rounded-2xl overflow-hidden relative group">
              <img
                src="https://supremautilitarios.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-02-at-13.17.39.jpeg"
                alt="Concessionária Suprema Utilitários Brasília"
                className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg">
                <img src={logoSuprema} alt="Suprema" className="h-8" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
