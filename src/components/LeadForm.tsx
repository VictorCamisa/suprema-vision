import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Shield, Clock, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const filledCount = [name, phone, interest].filter(Boolean).length;
  const progress = (filledCount / 3) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !interest) {
      toast({
        title: "Preencha todos os campos",
        description: "Nome, telefone e interesse são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    const interestMap: Record<string, string> = {
      compra: "compra do Shineray T30",
      financiamento: "financiamento do Shineray T30",
      testdrive: "agendar um test drive do Shineray T30",
    };

    const message = `Olá! Meu nome é ${name}, telefone ${phone}. Gostaria de saber sobre ${interestMap[interest] || interest}.`;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/5561993972226?text=${encoded}&utm_source=site&utm_medium=formulario&utm_content=lead_form`;

    toast({
      title: "Redirecionando para o WhatsApp!",
      description: "Você será atendido por um consultor em instantes.",
    });

    setTimeout(() => {
      window.open(url, "_blank");
    }, 1000);

    setName("");
    setPhone("");
    setInterest("");
  };

  return (
    <section id="contato" className="py-24 sm:py-32 relative section-divider">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-xs font-medium text-primary/70 tracking-[0.2em] uppercase mb-4">
              Contato
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Solicite uma <span className="text-gradient-gold text-glow-gold">Proposta</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Preencha o formulário e receba atendimento personalizado.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card-gold rounded-2xl p-8 space-y-6 relative overflow-hidden"
          >
            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-border/30">
              <motion.div
                className="h-full bg-gold-gradient"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="relative">
              <label
                htmlFor="name"
                className={`text-sm font-medium mb-1.5 block transition-colors ${
                  focusedField === "name" ? "text-primary" : "text-foreground"
                }`}
              >
                Nome completo
              </label>
              <Input
                id="name"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className="bg-input/50 border-border/50 focus:border-primary/50 transition-all"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="phone"
                className={`text-sm font-medium mb-1.5 block transition-colors ${
                  focusedField === "phone" ? "text-primary" : "text-foreground"
                }`}
              >
                Telefone / WhatsApp
              </label>
              <Input
                id="phone"
                placeholder="(61) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                className="bg-input/50 border-border/50 focus:border-primary/50 transition-all"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="interest"
                className={`text-sm font-medium mb-1.5 block transition-colors ${
                  focusedField === "interest" ? "text-primary" : "text-foreground"
                }`}
              >
                Interesse
              </label>
              <Select
                value={interest}
                onValueChange={(v) => {
                  setInterest(v);
                  setFocusedField(null);
                }}
              >
                <SelectTrigger
                  className="bg-input/50 border-border/50 focus:border-primary/50 transition-all"
                  onFocus={() => setFocusedField("interest")}
                  onBlur={() => setFocusedField(null)}
                >
                  <SelectValue placeholder="Selecione seu interesse" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compra">Quero comprar</SelectItem>
                  <SelectItem value="financiamento">Simular financiamento</SelectItem>
                  <SelectItem value="testdrive">Agendar test drive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="w-full btn-magnetic bg-gold-gradient text-primary-foreground font-bold py-3 shadow-gold-lg"
              size="lg"
            >
              <Send size={18} />
              Enviar e Falar no WhatsApp
            </Button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                <Shield size={12} className="text-primary/40" />
                Dados seguros
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                <Clock size={12} className="text-primary/40" />
                Resposta rápida
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                <MessageCircle size={12} className="text-primary/40" />
                Via WhatsApp
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
