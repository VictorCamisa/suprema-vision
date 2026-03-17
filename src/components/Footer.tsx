import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-card/50">
      {/* CTA Final — Full-width gold section */}
      <div className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        {/* Particle accents */}
        <div className="particles-container">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              Pronto para conhecer o{" "}
              <span className="text-gradient-gold text-glow-gold">T30</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto text-base sm:text-lg">
              Agende seu test drive ou fale com um consultor agora mesmo.
            </p>
            <motion.a
              href="https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20test%20drive%20do%20T30.&utm_source=site&utm_medium=footer&utm_content=cta_footer"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-magnetic inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-bold text-lg px-10 py-5 rounded-xl shadow-gold-lg"
            >
              <MessageCircle size={22} />
              Agendar Test Drive
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Info grid */}
      <div className="py-14 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <a href="#hero" className="inline-block mb-4 group">
                <span className="font-display text-lg font-bold text-gradient-gold group-hover:text-glow-gold transition-all">
                  SUPREMA
                </span>
                <span className="font-display text-xs text-muted-foreground tracking-widest uppercase ml-2">
                  Utilitários
                </span>
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Concessionária autorizada Shineray em Brasília. Parte do Grupo Suprema — desde 1994.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-primary">
                Contato
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-primary" />
                  </div>
                  <a href="tel:+556133638060" className="hover:text-foreground transition-colors">
                    (61) 3363-8060
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-primary" />
                  </div>
                  <span>
                    SIA, Trecho 02, Lote 370
                    <br />
                    Guará, Brasília/DF
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={14} className="text-primary" />
                  </div>
                  <span>Seg-Sex 08:00 - 18:00</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-primary">
                Navegação
              </h3>
              <div className="space-y-2.5 text-sm">
                {[
                  { label: "Vantagens", href: "#pilares" },
                  { label: "Comparativo", href: "#comparativo" },
                  { label: "Ficha Técnica", href: "#ficha-tecnica" },
                  { label: "Financiamento", href: "#financiamento" },
                  { label: "Contato", href: "#contato" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-primary">
                Redes Sociais
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "https://instagram.com/suprema_utilitarios", label: "Instagram" },
                  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass-card-gold flex items-center justify-center hover:glow-gold transition-all text-muted-foreground hover:text-primary"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-xl overflow-hidden border border-border/50 h-48 glass-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.6!2d-47.95!3d-15.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSIA+Trecho+02+Brasilia!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Suprema Utilitários"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30 py-5">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Suprema Veículos — Todos os direitos reservados.</span>
          <div className="flex items-center gap-4">
            <span>
              Desenvolvido por{" "}
              <a
                href="https://vssolucoes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                VS Soluções
              </a>
            </span>
            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg glass-card-gold flex items-center justify-center hover:glow-gold transition-all text-muted-foreground hover:text-primary"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
