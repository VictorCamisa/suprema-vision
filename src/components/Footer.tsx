import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Youtube, Facebook, MessageCircle, ArrowUp, ArrowUpRight } from "lucide-react";
import logoSuprema from "@/assets/logo-suprema.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border">
      {/* CTA */}
      <div className="section-navy py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-white">
            Pronto para conhecer o T30?
          </h2>
          <p className="text-white/60 mb-6 max-w-md mx-auto">
            Agende seu test drive ou fale com um consultor agora mesmo.
          </p>
          <a
            href="https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20test%20drive%20do%20T30.&utm_source=site&utm_medium=footer&utm_content=cta_footer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-10 py-4"
          >
            <MessageCircle size={18} />
            Agendar Test Drive
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src={logoSuprema} alt="Suprema Utilitários" className="h-10 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Concessionária autorizada Shineray em Brasília. Parte do Grupo Suprema — desde 1994.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider mb-4">Contato</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2.5">
                  <Phone size={14} className="text-primary" />
                  <a href="tel:+556133638060" className="hover:text-foreground transition-colors">(61) 3363-8060</a>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-primary mt-0.5" />
                  <span>SIA, Trecho 02, Lote 370<br />Guará, Brasília/DF</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock size={14} className="text-primary" />
                  <span>Seg-Sex 08:00 - 18:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider mb-4">Navegação</h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: "Vantagens", href: "#pilares" },
                  { label: "Comparativo", href: "#comparativo" },
                  { label: "Ficha Técnica", href: "#ficha-tecnica" },
                  { label: "Financiamento", href: "#financiamento" },
                  { label: "Contato", href: "#contato" },
                ].map((link) => (
                  <a key={link.href} href={link.href} className="block text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider mb-4">Redes Sociais</h3>
              <div className="flex gap-2">
                {[
                  { icon: Instagram, href: "https://instagram.com/suprema_utilitarios", label: "Instagram" },
                  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl overflow-hidden border border-border h-40">
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

      {/* Bottom */}
      <div className="border-t border-border py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Suprema Veículos — Todos os direitos reservados.</span>
          <div className="flex items-center gap-4">
            <span>
              Desenvolvido por{" "}
              <a href="https://vssolucoes.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                VS Soluções
              </a>
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all text-muted-foreground"
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
