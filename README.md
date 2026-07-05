# PF Construction Masonry — Site institucional

Site **estático** (HTML + CSS + JavaScript puro), **trilíngue (EN / PT / ES)**,
sem banco de dados e sem servidor. Custo de manutenção ≈ **R$ 0** (só o domínio).
Hospedável de graça na Cloudflare Pages, Netlify, Vercel ou GitHub Pages.

Cliente: **PF Construction Masonry** — Long Branch, NJ (atende Monmouth County)
- Telefones: **(732) 484-6643** (principal/WhatsApp) e **(732) 430-5030**
- E-mail: **pf732masonry@gmail.com**

## 🎨 O design
Linguagem visual da família AMP Floors (claro, cards arredondados, sombras
suaves, Inter + Sora, botões pílula), com a paleta vermelho/preto da logo e o
**layout remixado** para não ficar igual ao site da AMP:
- Hero dividido: texto à esquerda, foto arredondada à direita com card
  flutuante de avaliação (em vez de foto full-screen)
- Números em card escuro arredondado "flutuando" sobre o hero
- Serviços em cards horizontais (ícone à esquerda) em 2 colunas, com um
  card vermelho de CTA fechando a grade
- Instagram como trilho horizontal de cards 9:16 com botão de play e card
  final de "Seguir" (sem o mockup de celular)
- Sobre com texto à esquerda e fotos à direita (lados invertidos)
- Processo como linha do tempo conectada por linha tracejada (sem cards)
- Galeria em mosaico (primeira foto grande 2×2) com filtros de pílula
- Faixa CTA em container arredondado (não full-bleed) com telefone grande
- Depoimento central em destaque; contato com formulário à esquerda
Animações: reveals suaves ao rolar, contadores e hover lift — a mesma família
do site da AMP. Tudo respeita `prefers-reduced-motion` e funciona sem JS.

```
PF Masonry/
├── index.html              ← a página inteira (estrutura)
├── assets/
│   ├── css/styles.css      ← visual e cores (variáveis no topo) + animações
│   ├── js/
│   │   ├── i18n.js         ← TODOS os textos, nos 3 idiomas (EN/PT/ES)
│   │   └── main.js         ← interações + CONFIG (WhatsApp / Web3Forms)
│   ├── img/                ← fotos + logos (troque pelos arquivos reais)
│   └── videos/             ← reels do cliente (ver LEIA-ME.txt da pasta)
├── Logos em PNG/           ← logos originais do cliente (alta resolução)
└── README.md               ← este arquivo
```

> Os pontos que precisam ser trocados estão marcados no código com **`⚠️ TROCAR`**.

---

## ✅ Checklist de personalização

### 1. Textos (EN / PT / ES) — `assets/js/i18n.js`
Todos os textos do site ficam num **único dicionário**, com as três versões
lado a lado (`en`, `pt`, `es`). Para alterar uma frase, edite as três.
O site escolhe o idioma automaticamente pelo navegador (padrão **EN**) e
lembra a escolha do visitante (botões **EN / PT / ES** no topo e no rodapé).

### 2. WhatsApp e formulário — `assets/js/main.js` (bloco `CONFIG` no topo)
```js
const CONFIG = {
  whatsapp: "17324846643",       // (732) 484-6643 — código do país + número
  whatsappMessage: "Hi! ...",    // mensagem pré-preenchida (fallback)
  web3formsKey: "4113...7eed"    // ✅ configurada — envia pro e-mail do cliente
};
```

### 3. Formulário de contato — ✅ conectado (Web3Forms)
O "Send form" envia cada pedido **direto pro e-mail do cliente**
(pf732masonry@gmail.com) via Web3Forms — até 250 envios/mês no plano grátis.
Abaixo do botão também existem os atalhos "Chat on WhatsApp" e "Send email".
Se um dia precisar trocar a chave, gere outra em https://web3forms.com com o
e-mail do cliente e cole em `CONFIG.web3formsKey`. (Se a chave ficar vazia,
o formulário cai no plano B: compõe um e-mail no app do visitante.)

### 4. Instagram — ✅ conectado
Perfil real do cliente: **@pfconstructionmasonry**. O trilho da seção
Instagram usa o conteúdo real: o 1º card toca o reel do cliente (sem som,
`assets/videos/reel-1.mp4`) e os demais linkam para os posts reais.
Para trocar/adicionar cards depois, edite os `.reel-card` no `index.html`
(cada um é um link para o post) e as chaves `reels.tagN` no `i18n.js`.

### 5. Números e depoimentos — ⚠️ TROCAR
- Números da faixa escura (`data-count` no `index.html`) — confirmar.
- Os 3 depoimentos são fictícios — troque por avaliações reais.

### 6. Cores — `assets/css/styles.css`
No topo, em `:root`. A paleta segue a **logo da PF Masonry**
(vermelho `--primary: #d32027` + preto grafite `--ink: #15171b`) sobre fundo
branco/cinza neutro. Fontes: Inter (corpo) + Sora (títulos), via Google Fonts.

### 7. Logos
| Arquivo                   | Onde aparece                                   |
|---------------------------|------------------------------------------------|
| `header-logo.png`         | Cabeçalho (PF vermelho/preto sobre branco)     |
| `header-logo-white.png`   | (reserva para fundos escuros)                  |
| `logo-white.png`          | Rodapé (lockup completo em branco)             |
| `favicon.png`             | Ícone da aba do navegador (512×512)            |

### 8. Fotos — `assets/img/` — ✅ fotos reais do cliente
As fotos vieram do Instagram do cliente (@pfconstructionmasonry), em 1080px.
Para trocar alguma, substitua o arquivo mantendo o **mesmo nome**:

| Arquivo         | Conteúdo atual                                       |
|-----------------|------------------------------------------------------|
| `hero.jpg`      | Pátio de pavers atrás de casa (topo)                 |
| `obra-1..6.jpg` | Galeria: pavers hexagonais, lareira de tijolo, chaminé de pedra, bluestone, porcelanato, muro de arrimo |
| `about-team.jpg`/`about-work.jpg` | Sobre: equipe na obra + chaminé com andaime |
| `ig-1.jpg`/`ig-2.jpg`/`reel-poster.jpg` | Cards do trilho do Instagram      |
| `cta.jpg`       | Textura da faixa escura (Unsplash — única não-real)  |

---

## 🚀 Como publicar de graça

### Cloudflare Pages ou Netlify (recomendado)
1. Acesse https://pages.cloudflare.com ou https://app.netlify.com.
2. Arraste a pasta do projeto na área de deploy (ou conecte um repositório).
3. O site sobe em segundos, com HTTPS automático.
4. Aponte o domínio do cliente em "Domínios".

> Ao definir o domínio final, atualize também o `og:image` e o `canonical`
> no `<head>` do `index.html` (hoje apontam para www.pfmasonry.com).

### GitHub Pages
1. Suba os arquivos para um repositório.
2. Settings → Pages → Branch `main` / pasta `/root` → Save.

> Por ser estático, **não há nada para "manter" rodando** — sem custo mensal.
> Só renove o domínio uma vez por ano. (A pasta `Logos em PNG/` e o `.claude/`
> podem ficar de fora do deploy.)

---

## 🧪 Testar localmente
Abra o `index.html` no navegador (clique duplo). Sem a chave do Web3Forms
(passo 3), o formulário abre o WhatsApp com a mensagem preenchida.
