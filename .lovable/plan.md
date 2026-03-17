

# Plano: Landing Page Suprema Utilitários — Shineray T30

## Paleta de Cores
- **Preto** (#0A0A0A) — fundos principais, header, footer
- **Dourado** (#C8A960) — CTAs, acentos, highlights, bordas
- **Branco** (#FFFFFF) — texto sobre fundo escuro, seções alternadas
- **Cinza escuro** (#1A1A1A) — cards, seções alternadas

## Estrutura de Arquivos

Criar os seguintes componentes em `src/components/`:
- `Header.tsx` — logo + nav sticky
- `HeroSection.tsx` — headline CNH B + preço + CTAs
- `ValuePillars.tsx` — 3 cards (CNH B, Caçamba, TCO)
- `ComparisonTable.tsx` — T30 vs HR vs Strada
- `TechSpecs.tsx` — ficha técnica completa
- `Gallery.tsx` — carousel de fotos + embed YouTube (pWkQO284Tow)
- `Financing.tsx` — parcelas + CTA financiamento
- `SocialProof.tsx` — credibilidade institucional (30+ anos, sem depoimentos fake)
- `AboutUs.tsx` — quem somos + foto loja
- `LeadForm.tsx` — formulário nome/telefone/interesse (envia para WhatsApp ou email)
- `Footer.tsx` — CTA final + mapa + contato + redes + "Desenvolvido por VS Soluções"
- `WhatsAppButton.tsx` — botão flutuante WhatsApp com UTM

Atualizar:
- `src/pages/Index.tsx` — composição das 9 seções
- `src/index.css` — design system preto/dourado/branco
- `tailwind.config.ts` — cores custom + fontes
- `index.html` — title, meta description, OG tags, SEO

## Seções (em ordem)

1. **Hero** — fundo escuro com foto do T30, headline "O único mini caminhão de R$115 mil que você dirige com CNH B", badge concessionária autorizada, 2 CTAs (WhatsApp + scroll ficha técnica)
2. **3 Pilares** — cards dourado/preto: CNH B, Caçamba Inclusa, Menor TCO
3. **Comparativo** — tabela estilizada T30 vs Hyundai HR vs Fiat Strada com destaque no T30
4. **Ficha Técnica** — specs completas em layout clean com ícones
5. **Galeria** — carousel de imagens placeholder + embed YouTube
6. **Financiamento** — parcelas, opções, CTA WhatsApp com msg pré-preenchida
7. **Prova Social** — seção institucional: 30+ anos, veículos entregues, avaliação Google
8. **Quem Somos** — texto curto + localização SIA
9. **Footer** — CTA final, mapa embed, contato, redes sociais, crédito VS Soluções

## Funcionalidades
- **Formulário de lead** — campos: nome, telefone, interesse (dropdown: compra/financiamento/test drive). Submissão mostra toast de confirmação + abre WhatsApp com dados pré-preenchidos
- **WhatsApp flutuante** — botão fixo no canto inferior direito com UTM tracking
- **Todos os CTAs** — link para `https://wa.me/556133638060?text=...` com UTMs diferentes por seção
- **Scroll suave** — navegação entre seções
- **Responsivo** — mobile-first, funciona em todos os dispositivos
- **Lazy loading** — imagens abaixo do fold com loading="lazy"

## SEO (index.html)
- Title: "Shineray T30 em Brasília | Suprema Utilitários — Concessionária Autorizada"
- Meta description com preço + CNH B
- OG tags completos

## Notas
- Imagens do T30 usarão placeholders editáveis (o cliente fornecerá fotos profissionais depois)
- Valores de financiamento usarão placeholder "A partir de R$ X" editável
- Design premium/industrial com tipografia bold, contrastes fortes preto/dourado

