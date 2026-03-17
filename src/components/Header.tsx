import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Vantagens", href: "#pilares" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Ficha Técnica", href: "#ficha-tecnica" },
  { label: "Galeria", href: "#galeria" },
  { label: "Financiamento", href: "#financiamento" },
  { label: "Contato", href: "#contato" },
];

const whatsappUrl = "https://wa.me/556133638060?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Shineray%20T30.&utm_source=site&utm_medium=header&utm_content=cta_header";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-wider text-gradient-gold">
            SUPREMA
          </span>
          <span className="font-display text-xs font-medium text-muted-foreground tracking-widest uppercase">
            Utilitários
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient text-primary-foreground font-semibold text-sm px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Falar com Consultor
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-gradient text-primary-foreground font-semibold text-sm px-5 py-3 rounded-md text-center hover:opacity-90 transition-opacity mt-2"
              >
                Falar com Consultor
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
