/* ==========================================================================
   PF CONSTRUCTION MASONRY — JavaScript
   ==========================================================================*/

/* ┌────────────────────────────────────────────────────────────────────────┐
   │  ⚙️  CONFIGURAÇÃO — EDITE APENAS ESTE BLOCO                              │
   └────────────────────────────────────────────────────────────────────────┘ */
const CONFIG = {
  // WhatsApp do cliente: código do país + número, SÓ DÍGITOS.
  // EUA = 1 + DDD + número. Ex.: (732) 484-6643  ->  "17324846643"
  whatsapp: "17324846643",

  // Mensagem pré-preenchida (fallback). O texto por idioma fica em
  // assets/js/i18n.js na chave "wa.msg" e troca junto com o idioma do site.
  whatsappMessage: "Hi! I'd like a masonry estimate.",

  // ===== FORMULÁRIO (envia para o e-mail do cliente) — use UMA opção, ambas grátis =====
  // A) Web3Forms — NÃO precisa criar conta (recomendado):
  //    1) Acesse https://web3forms.com
  //    2) Digite o E-MAIL DO CLIENTE (pf732masonry@gmail.com) e clique em "Create Access Key"
  //    3) Copie a chave que chega no e-mail e cole entre as aspas abaixo.
  // ⚠️ TROCAR: gerar a chave com o e-mail do cliente (enquanto vazio, o form direciona ao WhatsApp)
  web3formsKey: "",
  // B) Formspree — precisa criar conta em https://formspree.io e colar a URL do form:
  formEndpoint: ""
};

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* ---------- 1. Links do WhatsApp (mensagem acompanha o idioma) ---------- */
  function wireWhatsApp() {
    const msg = (window.PF_I18N && window.PF_I18N.t("wa.msg")) || CONFIG.whatsappMessage;
    const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
    document.querySelectorAll(".js-whatsapp").forEach((el) => {
      el.setAttribute("href", waUrl);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }
  wireWhatsApp();
  document.addEventListener("i18n:applied", wireWhatsApp);

  /* ---------- 2. Cabeçalho muda ao rolar ---------- */
  const header = document.querySelector("[data-header]");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 3. Menu mobile ---------- */
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.getElementById("menu");
  const closeNav = () => { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open menu"); };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });

  /* ---------- 4. Animações de entrada (reveal) ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Failsafe: se, após o carregamento, NADA tiver sido revelado (ambiente sem
  // suporte a observer/render), mostra tudo para a página nunca ficar em branco.
  window.addEventListener("load", () => setTimeout(() => {
    if (document.querySelectorAll(".reveal.is-visible").length === 0) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  }, 1000));

  /* ---------- 4b. Mapa: carrega só quando entra na tela ---------- */
  const mapWrap = document.querySelector("[data-map]");
  if (mapWrap) {
    const iframe = mapWrap.querySelector("iframe");
    const loadMap = () => { if (iframe && iframe.dataset.src && !iframe.src) iframe.src = iframe.dataset.src; };
    if ("IntersectionObserver" in window) {
      const mo = new IntersectionObserver((entries, obs) => {
        entries.forEach((e) => { if (e.isIntersecting) { loadMap(); obs.disconnect(); } });
      }, { rootMargin: "200px" });
      mo.observe(mapWrap);
    } else { loadMap(); }
  }

  /* ---------- 5. Contadores dos números ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const runCounter = (el) => {
    const target = +el.dataset.count;
    const dur = 1600, start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = Math.round(target * eased).toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { runCounter(entry.target); obs.unobserve(entry.target); } });
    }, { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach((c) => (c.textContent = (+c.dataset.count).toLocaleString("en-US")));
  }

  /* ---------- 6. Navegação ativa conforme a seção visível ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav__link");
  if ("IntersectionObserver" in window) {
    const so = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${id}`));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => so.observe(s));
  }

  /* ---------- 7. Filtro da galeria ---------- */
  const filters = document.querySelectorAll(".filter");
  const works = document.querySelectorAll(".work");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const cat = btn.dataset.filter;
      works.forEach((w) => {
        const show = cat === "all" || w.dataset.category === cat;
        w.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------- 8. Lightbox da galeria ---------- */
  const lb = document.querySelector("[data-lightbox]");
  const lbImg = lb.querySelector("[data-lb-img]");
  const lbCap = lb.querySelector("[data-lb-cap]");
  let visibleWorks = [], current = 0;

  const openLightbox = (index) => {
    visibleWorks = [...works].filter((w) => !w.classList.contains("is-hidden"));
    current = index;
    showLightbox();
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const showLightbox = () => {
    const w = visibleWorks[current];
    lbImg.src = w.dataset.full;
    lbImg.alt = w.querySelector("img").alt;
    lbCap.textContent = w.dataset.caption || "";
  };
  const closeLightbox = () => { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; };
  const move = (dir) => { current = (current + dir + visibleWorks.length) % visibleWorks.length; showLightbox(); };

  works.forEach((w) => w.addEventListener("click", () => {
    const list = [...works].filter((el) => !el.classList.contains("is-hidden"));
    openLightbox(list.indexOf(w));
  }));
  lb.querySelector("[data-lb-close]").addEventListener("click", closeLightbox);
  lb.querySelector("[data-lb-prev]").addEventListener("click", () => move(-1));
  lb.querySelector("[data-lb-next]").addEventListener("click", () => move(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") move(-1);
    if (e.key === "ArrowRight") move(1);
  });

  /* ---------- 8b. Simulador de Reels (Instagram) ---------- */
  const reelsRoot = document.querySelector("[data-reels]");
  if (reelsRoot) {
    const phone = reelsRoot.closest(".phone");
    const stage = phone.parentNode;
    const reels = [...reelsRoot.querySelectorAll("[data-reel]")];
    const progressWrap = phone.querySelector("[data-reels-progress]");
    let idx = 0, inView = false;
    const muted = true;   // vídeos sempre sem som

    // ⚠️ TROCAR para true quando os vídeos do cliente chegarem
    // (assets/videos/reel-1.mp4 ... reel-6.mp4)
    const REELS_READY = false;

    reels.forEach(() => progressWrap.appendChild(document.createElement("span")));
    const bars = [...progressWrap.children];
    const videoOf = (reel) => reel.querySelector("video");

    function loadVideo(reel) {
      const v = videoOf(reel);
      if (!REELS_READY) return v;           // ainda sem vídeos: fica no poster
      const src = v.querySelector("source");
      if (src && src.dataset.src && !src.src) { src.src = src.dataset.src; v.load(); }
      return v;
    }
    function updateSoon() {
      const v = videoOf(reels[idx]);
      phone.classList.toggle("has-video", v.readyState >= 2 && !v.error);
    }
    function play(reel) {
      const v = loadVideo(reel);
      v.muted = muted;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
      v.addEventListener("loadeddata", updateSoon, { once: true });
    }
    function show(i) {
      idx = (i + reels.length) % reels.length;
      reels.forEach((r, n) => {
        r.classList.toggle("is-active", n === idx);
        if (n !== idx) videoOf(r).pause();
      });
      bars.forEach((b, n) => b.classList.toggle("is-active", n === idx));
      phone.classList.remove("has-video");
      if (inView) play(reels[idx]); else updateSoon();
    }

    stage.querySelector("[data-reel-prev]")?.addEventListener("click", () => show(idx - 1));
    stage.querySelector("[data-reel-next]")?.addEventListener("click", () => show(idx + 1));

    // Mobile: tap na lateral esquerda = volta, direita = avança.
    // (Sem captura de swipe vertical, pra deslizar pra cima/baixo rolar a página normalmente.)
    reelsRoot.addEventListener("click", (e) => {
      if (!window.matchMedia("(max-width: 600px)").matches) return; // desktop usa as setas
      if (e.target.closest(".ig-actions, .ig-top")) return;         // não navega ao tocar nos ícones/perfil
      const rect = reelsRoot.getBoundingClientRect();
      show((e.clientX - rect.left) / rect.width < 0.5 ? idx - 1 : idx + 1);
    });

    // Toca só quando o celular está visível na tela
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((ents) => ents.forEach((en) => {
        inView = en.isIntersecting;
        if (inView) play(reels[idx]); else videoOf(reels[idx]).pause();
      }), { threshold: 0.4 }).observe(phone);
    } else { inView = true; }

    show(0);
  }

  /* ---------- 9. Voltar ao topo ---------- */
  const toTop = document.querySelector("[data-to-top]");
  const toggleTop = () => toTop.classList.toggle("is-visible", window.scrollY > 600);
  toggleTop();
  window.addEventListener("scroll", toggleTop, { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- 10. Formulário de contato (Web3Forms/Formspree, via AJAX) ---------- */
  const form = document.querySelector("[data-form]");
  const status = document.querySelector("[data-form-status]");
  const submitBtn = document.querySelector("[data-submit]");
  // Texto traduzido (cai no fallback se o i18n não tiver carregado)
  const T = (k, fb) => (window.PF_I18N ? window.PF_I18N.t(k) : fb);

  if (form) {
    const W3_URL = "https://api.web3forms.com/submit";
    const useW3 = !!CONFIG.web3formsKey;
    const useFS = !useW3 && !!CONFIG.formEndpoint;

    // Fallback sem JS + injeta a chave do Web3Forms como campo oculto
    if (useW3) {
      form.setAttribute("action", W3_URL);
      const k = document.createElement("input");
      k.type = "hidden"; k.name = "access_key"; k.value = CONFIG.web3formsKey;
      form.appendChild(k);
    } else if (useFS) {
      form.setAttribute("action", CONFIG.formEndpoint);
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.textContent = "";
      status.className = "form-status";

      if (!form.checkValidity()) { form.reportValidity(); return; }

      // Nenhum serviço de e-mail configurado ainda
      if (!useW3 && !useFS) {
        status.textContent = T("form.statusNoEp", "⚠️ Form not connected yet. Set up Web3Forms in assets/js/main.js.");
        status.classList.add("is-err");
        return;
      }

      submitBtn.classList.add("is-loading");
      const original = submitBtn.textContent;
      submitBtn.textContent = T("form.sending", "Sending...");

      try {
        const data = new FormData(form);
        if (useW3) data.append("subject", "New contact from the website — PF Masonry");
        const res = await fetch(useW3 ? W3_URL : CONFIG.formEndpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" }
        });
        const ok = useW3 ? ((await res.json().catch(() => ({}))).success === true) : res.ok;
        if (!ok) throw new Error("Send failed");
        form.reset();
        status.textContent = T("form.statusOk", "✅ Message sent! We'll be in touch soon.");
        status.classList.add("is-ok");
      } catch (err) {
        status.textContent = T("form.statusErr", "❌ Couldn't send right now. Please try again or reach us on WhatsApp.");
        status.classList.add("is-err");
      } finally {
        submitBtn.classList.remove("is-loading");
        submitBtn.textContent = original;
      }
    });
  }

  /* ---------- 11. Ano atual no rodapé ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
