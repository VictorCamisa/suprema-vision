import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
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
  const { toast } = useToast();

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
    const url = `https://wa.me/556133638060?text=${encoded}&utm_source=site&utm_medium=formulario&utm_content=lead_form`;

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
    <section id="contato" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              Solicite uma <span className="text-gradient-gold">Proposta</span>
            </h2>
            <p className="text-muted-foreground">
              Preencha o formulário e receba atendimento personalizado.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                Nome completo
              </label>
              <Input
                id="name"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-input border-border"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">
                Telefone / WhatsApp
              </label>
              <Input
                id="phone"
                placeholder="(61) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-input border-border"
              />
            </div>

            <div>
              <label htmlFor="interest" className="text-sm font-medium text-foreground mb-1.5 block">
                Interesse
              </label>
              <Select value={interest} onValueChange={setInterest}>
                <SelectTrigger className="bg-input border-border">
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
              className="w-full bg-gold-gradient text-primary-foreground font-bold py-3 hover:opacity-90 transition-opacity shadow-gold"
              size="lg"
            >
              <Send size={18} />
              Enviar e Falar no WhatsApp
            </Button>

            <p className="text-xs text-muted-foreground/60 text-center">
              Seus dados são usados apenas para contato comercial.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
