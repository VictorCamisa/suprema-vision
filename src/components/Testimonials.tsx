import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Empresário — Brasília/DF",
    text: "Comprei o T30 para minha empresa de entregas e foi a melhor decisão. A capacidade de carga é impressionante e o consumo é muito econômico. A equipe da Suprema foi nota 10 no atendimento!",
    rating: 5,
  },
  {
    name: "Roberto S.",
    role: "Fretista autônomo",
    text: "Já tive vários utilitários e o Shineray T30 é o melhor custo-benefício que encontrei. Roda muito bem na cidade, consumo excelente e a manutenção é barata. Recomendo a Suprema pelo pós-venda impecável.",
    rating: 5,
  },
  {
    name: "Marcos A.",
    role: "Distribuidor — Taguatinga/DF",
    text: "O atendimento da Suprema Utilitários é diferenciado. Me ajudaram a encontrar o financiamento ideal e a entrega foi rápida. O T30 atende todas as necessidades do meu negócio.",
    rating: 5,
  },
  {
    name: "Pedro L.",
    role: "Produtor rural — Planaltina/DF",
    text: "Uso o T30 na fazenda e na cidade. Muito resistente, aguenta estrada de terra sem problema. A caçamba é grande e cabe tudo que preciso. A equipe da Suprema é sempre muito prestativa.",
    rating: 5,
  },
  {
    name: "Anderson R.",
    role: "Microempreendedor",
    text: "Meu primeiro utilitário e não poderia estar mais satisfeito. O T30 é fácil de dirigir, confortável e com a CNH B já resolve. A Suprema fez todo o processo de financiamento rápido e sem burocracia.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const navigate = useCallback((dir: number) => {
    setCurrent((c) => {
      if (dir > 0) return c === testimonials.length - 1 ? 0 : c + 1;
      return c === 0 ? testimonials.length - 1 : c - 1;
    });
    setIsAutoPlaying(false);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const t = testimonials[current];

  return (
    <section className="py-12 sm:py-16 section-light-grid section-rich">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block text-xs font-bold text-blue-accent tracking-[0.15em] uppercase mb-3">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
            O que nossos <span className="text-blue-accent">clientes</span> dizem
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="card-elevated rounded-2xl p-8 text-center"
          >
            <Quote size={32} className="text-blue-accent/20 mx-auto mb-4" />

            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 text-base italic">
              "{t.text}"
            </p>

            <div>
              <p className="font-extrabold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>

          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-card border border-border rounded-full p-2 shadow-sm hover:shadow-md transition-all text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-card border border-border rounded-full p-2 shadow-sm hover:shadow-md transition-all text-muted-foreground hover:text-foreground"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-foreground/15"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
