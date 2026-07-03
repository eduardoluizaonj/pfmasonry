# PF Construction Masonry — Site institucional

Site **estático** (HTML + CSS + JavaScript puro), **trilíngue (EN / PT / ES)**,
sem banco de dados e sem servidor. Custo de manutenção ≈ **R$ 0** (só o domínio).
Hospedável de graça na Cloudflare Pages, Netlify, Vercel ou GitHub Pages.

Cliente: **PF Construction Masonry** — Long Branch, NJ (atende Monmouth County)
- Telefones: **(732) 484-6643** (principal/WhatsApp) e **(732) 430-5030**
- E-mail: **pf732masonry@gmail.com**

```
PF Masonry/
├── index.html              ← a página inteira (estrutura)
├── assets/
│   ├── css/styles.css      ← visual e cores (variáveis no topo)
│   ├── js/
│   │   ├── i18n.js         ← TODOS os textos, nos 3 idiomas (EN/PT/ES)
│   │   └── main.js         ← interações + CONFIG (WhatsApp / Web3Forms)
│   ├── img/                ← fotos + logos (troque pelos arquivos reais)
│   └── videos/             ← reels verticais do cliente (reel-1.mp4 ... reel-6.mp4)
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
lembra a escolha do visitante (botão **EN / PT / ES** no topo).

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

Enquanto nenhum dos dois estiver configurado, o formulário avisa e direciona ao
WhatsApp. As mensagens de status são traduzidas no `i18n.js`.

### 4. Instagram — ⚠️ TROCAR
O usuário do Instagram está como placeholder **@pfmasonry**. Confirme o usuário
real do cliente e troque:
- em `index.html` (2 links `instagram.com/...` na seção Instagram),
- em `assets/js/i18n.js` (chave `reels.handle`, nos 3 idiomas).

Os **vídeos** (reels verticais) vão em `assets/videos/reel-1.mp4` a `reel-6.mp4`.
Quando chegarem, mude `REELS_READY` para `true` em `assets/js/main.js`.
Enquanto isso, a seção mostra as fotos com o selo "Vídeo em breve".

### 5. Números e depoimentos — ⚠️ TROCAR
- Os números da faixa escura (anos de experiência, projetos etc.) estão como
  exemplo em `index.html` (atributo `data-count`) — confirme com o cliente.
- Os 3 depoimentos são fictícios (marcados no `index.html` e `i18n.js`) —
  troque por avaliações reais assim que possível.

### 6. Cores — `assets/css/styles.css`
No topo, em `:root`. A paleta atual segue a **logo da PF Masonry**
(vermelho `--primary: #d32027` + preto grafite `--ink: #15171b`). Para ajustar,
mude principalmente `--primary`, `--primary-600` e `--accent`.

### 7. Logos
As imagens da logo em `assets/img/` foram geradas a partir dos arquivos do
cliente em `Logos em PNG/`:
| Arquivo                   | Onde aparece                                   |
|---------------------------|------------------------------------------------|
| `header-logo.png`         | Cabeçalho (PF vermelho/preto, ao rolar a página) |
| `header-logo-white.png`   | Cabeçalho (PF vermelho/branco, sobre o hero)   |
| `logo-white.png`          | Rodapé (lockup completo em branco)             |
| `favicon.png`             | Ícone da aba do navegador (512×512)            |

Para trocar, basta substituir os arquivos mantendo os mesmos nomes.

### 8. Fotos — `assets/img/`
Substitua mantendo os **mesmos nomes** e o site usa automaticamente:

| Arquivo         | Onde aparece                          |
|-----------------|---------------------------------------|
| `hero.jpg`      | Topo (imagem de destaque)             |
| `about-team.jpg`/`about-work.jpg` | Seção "Quem somos"  |
| `obra-1..6.jpg` | Galeria de projetos (e posters dos reels) |
| `cta.jpg`       | Faixa escura de chamada               |

> As fotos atuais são do Unsplash (uso livre) como demonstração. **O ideal é
> trocar pelas fotos reais dos projetos da PF Masonry** — é o que mais valoriza
> o site. Use imagens com ≥1280px de largura (otimize em https://squoosh.app).

---

## 🚀 Como publicar de graça

### Cloudflare Pages ou Netlify (recomendado)
1. Acesse https://pages.cloudflare.com ou https://app.netlify.com.
2. Arraste a pasta do projeto na área de deploy (ou conecte um repositório).
3. O site sobe em segundos, com HTTPS automático.
4. Aponte o domínio do cliente em "Domínios".

### GitHub Pages
1. Suba os arquivos para um repositório.
2. Settings → Pages → Branch `main` / pasta `/root` → Save.

> Por ser estático, **não há nada para "manter" rodando** — sem custo mensal.
> Só renove o domínio uma vez por ano. (A pasta `Logos em PNG/` e o `.claude/`
> são só para referência/local; podem ficar de fora do deploy.)

---

## 🧪 Testar localmente
Abra o `index.html` no navegador (clique duplo). O formulário só envia de
verdade após configurar o Web3Forms (passo 3).
