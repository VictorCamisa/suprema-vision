import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoSuprema from "@/assets/logo-suprema.png";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Vantagens", href: "#pilares" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Ficha Técnica", href: "#ficha-tecnica" },
  { label: "Galeria", href: "#galeria" },
  { label: "Financiamento", href: "#financiamento" },
  { label: "Contato", href: "#contato" },
];

const whatsappUrl =
  "https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Shineray%20T30.&utm_source=site&utm_medium=header&utm_content=cta_header";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="flex-shrink-0">
          <img src={logoSuprema} alt="Suprema Utilitários" className="h-10" />
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-primary"
        >
          <MessageCircle size={16} />
          Falar com Consultor
          <ArrowUpRight size={14} />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium py-2.5 px-3 rounded-lg text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center mt-2"
              >
                <MessageCircle size={16} />
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
