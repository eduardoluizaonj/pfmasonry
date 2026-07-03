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
  web3formsKey: ""               // ⚠️ TROCAR: chave do Web3Forms (ver passo 3)
};
```

### 3. Formulário de contato (envia pro e-mail do cliente — grátis) ⚠️ PENDENTE
**A) Web3Forms — não precisa criar conta (recomendado):**
1. Acesse **https://web3forms.com**.
2. Digite o e-mail do cliente (**pf732masonry@gmail.com**) e clique em "Create Access Key".
3. Copie a chave que chega nesse e-mail e cole em `CONFIG.web3formsKey`.
4. Pronto — cada mensagem do site cai direto no e-mail do cliente (até 250/mês).

**B) Formspree — precisa criar conta:** crie em https://formspree.io, copie a
URL do formulário e cole em `CONFIG.formEndpoint`.

Enquanto nenhum dos dois estiver configurado, o "Enviar pedido" **abre o
WhatsApp do cliente com a mensagem do formulário já preenchida** — nenhum
lead se perde.

### 4. Instagram — ⚠️ TROCAR
O usuário do Instagram está como placeholder **@pfmasonry**. Confirme o real e troque:
- em `index.html` (links `instagram.com/...` na seção "06 — On site"),
- em `assets/js/i18n.js` (chave `reels.handle`, nos 3 idiomas).

A seção mostra um trilho horizontal de cards 9:16. Os dois primeiros estão como
"Reels em breve"; quando os vídeos do cliente chegarem, os cards viram
miniaturas/links dos reels (ver `assets/videos/LEIA-ME.txt`).

### 5. Números, cidades e depoimentos — ⚠️ TROCAR
- Números da seção "01 — Record" (`data-count` no `index.html`) — confirmar.
- As **cidades** nas legendas da galeria ("05 — Work") são exemplos — troque
  pelas cidades reais de cada projeto (no `index.html` e nas chaves `workN.name`).
- Os 3 depoimentos são fictícios — troque por avaliações reais.
- Horário de atendimento (chave `contact.hoursV`) — confirmar.

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

### 8. Fotos — `assets/img/`
Substitua mantendo os **mesmos nomes**:

| Arquivo         | Onde aparece                                        |
|-----------------|-----------------------------------------------------|
| `hero.jpg`      | Foto grande do topo                                 |
| `about-team.jpg`/`about-work.jpg` | Seção "03 — About" (+ prévias de serviços) |
| `obra-1..6.jpg` | Galeria "05 — Work", prévias e cards do Instagram   |
| `cta.jpg`       | Textura da faixa escura de orçamento                |

> As fotos atuais são do Unsplash (uso livre) como demonstração. **Troque pelas
> fotos reais dos projetos da PF Masonry.** Use imagens com ≥1280px de largura
> (otimize em https://squoosh.app).

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
