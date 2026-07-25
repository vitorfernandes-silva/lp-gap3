# PROMPT MESTRE — Landing Page GAP3 Assessoria (Antigravity)

Cole este prompt no início do projeto no Antigravity, antes de enviar os prints/seções da Alpha. Ele funciona como o "briefing fixo" do projeto — o Antigravity deve seguir estas regras em **todas** as seções que forem construídas dali em diante.

---

## 1. CONTEXTO DO PROJETO

Você vai construir, **seção por seção**, uma landing page (página de captura) de alta conversão para a **GAP3 Assessoria**, uma consultoria de crescimento para restaurantes e food services (não é agência de marketing tradicional — é uma assessoria de processos comerciais).

O fluxo de trabalho será:
1. Eu envio um print de uma seção da landing page da **Assessoria Alpha** (concorrente/referência de layout) + trechos de código de referência daquela seção.
2. Você recria a mesma estrutura visual (layout, espaçamento, hierarquia, componentes, comportamento) só que:
   - com o **conteúdo da GAP3** (fornecido na seção 3 deste prompt),
   - com a **identidade visual da GAP3** (seção 2),
   - em **React + Next.js + Tailwind CSS**.
3. Cada seção deve ser um componente isolado e reutilizável, para que no final todas se encaixem em uma única página (`app/page.tsx`).

Nunca copie textos da Alpha — apenas o padrão estrutural (tipo de seção, ordem de elementos, tipo de CTA, tipo de prova social). O texto, os números e a oferta são sempre os da GAP3.

---

## 2. STACK TÉCNICA E REGRAS DE CÓDIGO

- **Framework:** Next.js (App Router), React, TypeScript.
- **Estilização:** Tailwind CSS (utilitário puro, sem CSS-in-JS, sem styled-components).
- **Fonte:** Poppins em todos os textos (importar via `next/font/google`), com pesos 400, 500, 600, 700, 800.
- **Mobile-first obrigatório:** escreva o CSS pensando primeiro no mobile (< 640px) e use os prefixos `sm:` `md:` `lg:` para desktop — nunca o contrário.
- **Textos grandes e legíveis:** este é um público que inclui donos de restaurante de mais idade, muitos usam óculos. Regras mínimas de tamanho:
  - Corpo de texto: nunca menor que `text-base` (16px) no mobile, preferencialmente `text-lg`.
  - Títulos de seção: `text-3xl`/`text-4xl` no mobile, `md:text-5xl`/`md:text-6xl` no desktop.
  - Botões de CTA: texto grande (`text-lg`/`text-xl`), alto contraste, área de toque generosa (mínimo `py-4 px-8`).
  - Contraste mínimo AA em todos os textos (nunca cinza claro sobre fundo escuro sem contraste suficiente).
- **Componentização:** cada seção vira um componente em `components/sections/`, nomeado de forma clara (ex: `Hero.tsx`, `LeadFormSection.tsx`, `Testimonials.tsx`, `AboutUs.tsx`, `MethodSection.tsx`, `Services.tsx`, `PlansSection.tsx`, `FinalCTA.tsx`, `FAQ.tsx`, `Footer.tsx`).
- **Ícones:** usar `lucide-react`.
- **Sem `<form>` nativo problemático:** usar `onSubmit` controlado via `useState`/React Hook Form (pode sugerir `react-hook-form` para o formulário dinâmico).
- **Formulário → Webhook:** o formulário de captura deve enviar os dados via `fetch` (`POST`, JSON) para um endpoint configurável por variável de ambiente (`process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL` ou uma API route interna `app/api/lead/route.ts` que repassa para o webhook). Deixe o endpoint como uma constante fácil de trocar depois, com um comentário `// TODO: configurar URL do webhook`.
- **Responsividade de imagens:** usar `next/image` sempre que houver imagem real (fotos de equipe, depoimentos, etc.) — para esta fase, pode usar placeholders (`/public/placeholders/...`) com proporção correta até eu enviar as imagens reais.
- **Acessibilidade básica:** labels em todos os inputs, `alt` em todas as imagens, contraste adequado, foco visível em elementos interativos.
- **Sem inventar seções que a Alpha não tiver:** siga a ordem e o tipo de seção que eu enviar print por print. Se eu não tiver enviado ainda a seção X, não adiante construí-la.

---

## 3. IDENTIDADE VISUAL DA GAP3

Paleta extraída da apresentação oficial da GAP3 (usar exatamente estes tons, configurados no `tailwind.config`):

| Uso | Cor | Hex |
|---|---|---|
| Fundo principal (dark) | Preto-azulado | `#0C1014` |
| Destaque / gradiente principal (dourado, claro → escuro) | Amarelo-ouro | `#FFC900` |
| | Âmbar | `#F3A200` |
| | Âmbar escuro | `#DD8600` |
| Amarelo sólido alternativo (ícones/badges) | Âmbar | `#FFC000` |
| Texto sobre fundo escuro | Branco | `#FFFFFF` / `#FEFEFE` |
| Texto secundário sobre fundo escuro | Cinza claro | `#E4E4E4` |

Diretrizes de uso:
- O fundo padrão das seções é **escuro** (`#0C1014`), com o dourado como cor de destaque (títulos-chave, CTAs, ícones, números, bordas de cards) — é o inverso da Alpha, que usa fundo amarelo/preto. Mantenha a mesma **lógica de contraste** da Alpha (contraste forte entre fundo e destaque), só que com a paleta acima.
- Use gradiente diagonal `#FFC900 → #F3A200 → #DD8600` em botões de CTA, ícones de destaque e elementos gráficos (troque o amarelo chapado da Alpha por esse gradiente dourado da GAP3).
- Botões de CTA: fundo em gradiente dourado, texto em `#0C1014` (preto) para máximo contraste — igual à lógica da Alpha (botão amarelo com texto escuro).
- Cards/seções alternadas podem usar fundo em um tom levemente mais claro que o principal (ex: `#151A20`) para criar profundidade, sem nunca usar branco puro como fundo de seção (a Alpha alterna preto/amarelo/branco; a GAP3 deve alternar tons de escuro + dourado como destaque, com uso pontual de branco só em blocos de prova social/depoimento, se necessário).
- Logo: por enquanto usar o texto "GAP3 Assessoria" estilizado (dourado) como logotipo provisório, até eu enviar o arquivo de logo.

---

## 4. BANCO DE CONTEÚDO DA GAP3 (usar sempre que uma seção pedir texto)

**Nome/Posicionamento:**
- GAP3 Assessoria — Solução de Crescimento para Food Services.
- Frase de posicionamento: "Nós não somos agência de marketing." (a GAP3 se posiciona como uma assessoria de processos comerciais, não uma agência de conteúdo).
- Proposta central: como o restaurante vai **vender mais e melhor** através de processos estruturados e personalizados para a empresa, com um time especializado em restaurantes, estruturando um crescimento sustentável e escalando de forma saudável.

**Números de autoridade (usar em badges/hero, no estilo dos números da Alpha):**
- +100 clientes atendidos
- +2MM (R$ 2 milhões+) de faturamento gerado para os clientes
- +60% de produtividade

**Frase de credibilidade:** "Somos referência em design de cardápios digitais e aumento de faturamento de restaurantes. Centenas de empresas confiam na GAP3 para transmitir segurança e desejo em seu cliente através de um visual moderno e intuitivo."

**Cenário atual / dores do restaurante (usar em uma seção de "problemas que resolvemos", como lista/ícones):**
- Margens de lucro cada vez menores
- Alto custo de mão de obra
- Fluxo de caixa desorganizado
- Dificuldade para precificar corretamente os pratos
- Baixo ticket médio
- Dependência de promoções para vender
- Altas taxas cobradas pelos aplicativos de delivery
- Dependência excessiva de plataformas como iFood
- Baixa margem nos pedidos de delivery
- Pedidos cancelados
- Dificuldade para fidelizar clientes próprios
- Pouco controle sobre a experiência do cliente após a saída do pedido

**Solução (pilares):**
- Implementação de processos de vendas bem definidos
- Métricas em tempo real, análise e decisões baseadas em dados
- Aumentar previsibilidade de vendas
- Aumentar o ROI
- Otimização de ofertas e cardápio digital
- Ativação de base de clientes para vendas constantes
- Objetivo final: fazer o restaurante crescer no mercado, com experiência centralizada no cliente.

**Ciclo/Método GAP3 (usar em uma seção "método", no lugar do triângulo da Alpha):**
1. Aquisição de Clientes
2. Capturar Dados do Cliente
3. Organizar os Dados
4. Converter Online ou na Loja
5. Fidelizar os Clientes

**O que ganha com a GAP3:** "Tempo e Dinheiro."

**Estruturação (entregáveis, pode virar cards/lista):**
- Aquisição de novos clientes
- Posicionamento da marca
- Presença digital otimizada
- Conversão de visitantes em pedidos
- Aumento do ticket médio
- Fidelização de clientes
- CRM e relacionamento
- Automação de marketing
- Gestão de indicadores comerciais
- Campanhas promocionais estratégicas

**Atração de Clientes (pode virar outra seção de serviços/cards, equivalente aos 2 cards "Disparo de mensagens" / "Gestão e atendimento" da Alpha):**
- Perfil da Empresa no Google
- Tráfego Pago
- Conteúdo para Instagram/TikTok
- Remarketing e Fidelização
- Parcerias com Microinfluenciadores
- Landing page exclusiva para campanhas
- Otimização de Cardápio Digital
- Otimização de Processos de Vendas no WhatsApp

**CRM / Fidelização (detalhe do funil de vendas):**
- Estruturação de CRM com pontos e brindes
- Ativar base de clientes
- Mensagens de aniversário
- Recuperação de clientes
- Avaliação e pós-venda
- Campanhas de WhatsApp

**Resultados esperados (com otimização de cardápio):**
- Aumento do faturamento
- Maior ticket médio
- Melhor experiência do cliente

**Diferenciais extras (pode virar uma seção de bônus/cards, equivalente aos "planos personalizados" da Alpha):**
- Construção de Ofertas e Esteira de Produtos (Upsell, Cross-Sell)
- Acompanhamento semanal do negócio com Gestores de Alta Performance
- Grupo de WhatsApp com os Gestores do Projeto
- Relatórios em tempo real de vendas e performance das campanhas

**Time (seção "você contrata um time, não um profissional"):**
- Especialista em Vendas
- Head de Projetos
- Gestor de Tráfego
- Editor de Vídeo
- Copywriter
- Designer
- Web Designer
- TI

**Garantia / objeção de risco (pode virar um bloco de confiança perto do CTA final):**
- Título: "Zero riscos de multas — Cancele quando quiser!"
- Texto: "Se por algum motivo você não quiser mais o nosso serviço de assessoria, você tem total liberdade em cancelar o contrato sem pagar rescisão contratual, desde que respeitando o prazo previsto."
- Bullets: Sem multas / Sem armadilhas / Tempo mínimo de permanência

**Oferta / valor (não usar em uma landing page fria como preço fechado — a Alpha não expõe preço na LP; a GAP3 também não deve expor a tabela de R$18.352 nem o desconto de 70% na landing page pública, isso é conteúdo de reunião/apresentação comercial. Na landing page, o CTA é sempre "fale com um especialista" / "receba uma ligação personalizada", igual ao padrão da Alpha.**

---

## 5. FORMULÁRIO DINÂMICO DE CAPTURA (equivalente ao "Não saia agora!" da Alpha)

Estrutura em 3 passos (mesma lógica da Alpha, adaptada):
1. **Complete o formulário** — nome completo, telefone/WhatsApp, e-mail.
2. **Conte sobre seu restaurante** — nome do restaurante, faturamento médio mensal (select de faixas), segmento (select: Restaurante à la carte, Delivery, Fast food, Hamburgueria, Pizzaria, Cafeteria, Outro), cidade/estado.
3. **Receba uma ligação personalizada** — texto de reforço: "Em até 5 minutos um especialista da GAP3 entra em contato para agendar sua análise gratuita."

Comportamento:
- Formulário multi-step (dinâmico), com barra de progresso ou indicador dos 3 passos.
- Validação client-side (campos obrigatórios, telefone e e-mail com formato válido).
- Botão final grande, com texto tipo "Quero minha análise gratuita" ou "Receber mais informações", em gradiente dourado.
- Ao enviar, faz `POST` para o webhook configurável (ver seção 2) e mostra estado de sucesso/erro.
- Contador de urgência opcional (ex: "Faltam poucos segundos para o seu restaurante mudar"), no mesmo tom da Alpha, mas sem timer falso de countdown regressivo enganoso — pode ser um texto estático de urgência.

---

## 6. TOM DE VOZ

- Direto, confiante, sem jargão técnico de marketing.
- Fala com o **dono do restaurante**, não com um profissional de marketing — evitar termos como "growth", "funil de topo/meio/fundo" no texto visível (pode usar internamente nos comentários do código, mas não na copy).
- Sempre reforçar: GAP3 é uma **assessoria de processos**, não uma agência de conteúdo — isso é um diferencial de posicionamento que deve aparecer pelo menos na seção "quem somos".

---

## 7. COMO EU VOU TE ENVIAR CADA SEÇÃO

Para cada seção, eu vou mandar:
1. Print da seção correspondente da Alpha.
2. Trecho de código de referência (estrutura/JSX/Tailwind) daquela seção.

Sua tarefa em cada rodada:
1. Identificar o padrão estrutural da seção (tipo de layout, grid, ordem dos elementos, tipo de CTA).
2. Recriar esse padrão como um componente novo em `components/sections/`, com o conteúdo da GAP3 (seção 4 deste prompt) e a paleta da GAP3 (seção 3).
3. Aplicar todas as regras técnicas da seção 2 (mobile-first, Poppins, textos grandes, Tailwind, TypeScript).
4. Ao final, me mostrar o componente pronto e me perguntar se posso integrá-lo em `app/page.tsx`, ou já integrar diretamente se eu não pedir revisão prévia.

Não pule etapas, não construa seções que eu ainda não enviei, e não use texto placeholder tipo "lorem ipsum" — sempre usar o conteúdo real da GAP3 do banco de conteúdo acima.
