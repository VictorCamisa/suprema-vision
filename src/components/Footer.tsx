import { MapPin, Phone, Clock, Instagram, Youtube, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      {/* CTA Final */}
      <div className="py-16 text-center border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Pronto para conhecer o <span className="text-gradient-gold">T30</span>?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Agende seu test drive ou fale com um consultor agora mesmo.
          </p>
          <a
            href="https://wa.me/556133638060?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20test%20drive%20do%20T30.&utm_source=site&utm_medium=footer&utm_content=cta_footer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-bold text-base px-8 py-4 rounded-md hover:opacity-90 transition-opacity shadow-gold"
          >
            Agendar Test Drive
          </a>
        </div>
      </div>

      {/* Info grid */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <span className="font-display text-lg font-bold text-gradient-gold">SUPREMA</span>
              <span className="font-display text-xs text-muted-foreground tracking-widest uppercase ml-2">
                Utilitários
              </span>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Concessionária autorizada Shineray em Brasília. Parte do Grupo Suprema — desde 1994.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-primary">
                Contato
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-primary" />
                  <a href="tel:+556133638060" className="hover:text-foreground transition-colors">
                    (61) 3363-8060
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-primary mt-0.5" />
                  <span>SIA, Trecho 02, Lote 370<br />Guará, Brasília/DF</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-primary" />
                  <span>Seg-Sex 08:00 - 18:00</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-primary">
                Navegação
              </h3>
              <div className="space-y-2 text-sm">
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
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-primary">
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
                    className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors text-muted-foreground"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 rounded-lg overflow-hidden border border-border h-48">
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
      <div className="border-t border-border py-5">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Suprema Veículos — Todos os direitos reservados.</span>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
