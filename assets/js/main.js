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

  // ===== FORMULÁRIO (envia para o e-mail do cliente) =====
  // Web3Forms (https://web3forms.com) — chave gerada com o e-mail do cliente
  // (pf732masonry@gmail.com). Cada envio do formulário cai direto na caixa
  // de entrada dele (até 250 envios/mês no plano grátis).
  web3formsKey: "411350d5-8267-4e7a-b962-b068267a7eed",
  // Alternativa: Formspree — criar conta em https://formspree.io e colar a URL do form:
  formEndpoint: ""
};

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const T = (k, fb) => (window.PF_I18N ? window.PF_I18N.t(k) : (fb || k));
  const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SCROLL_BEHAVIOR = RM ? "auto" : "smooth";

  /* ---------- 1. Links do WhatsApp (mensagem acompanha o idioma) ---------- */
  function waUrl(text) {
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  }
  function wireWhatsApp() {
    const msg = (window.PF_I18N && window.PF_I18N.t("wa.msg")) || CONFIG.whatsappMessage;
    document.querySelectorAll(".js-whatsapp").forEach((el) => {
      el.setAttribute("href", waUrl(msg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }
  wireWhatsApp();
  document.addEventListener("i18n:applied", wireWhatsApp);

  /* ---------- 1b. Links de e-mail (mailto com os dados do formulário) ---------- */
  const EMAIL_TO = "pf732masonry@gmail.com";
  function composeMailto() {
    const f = document.querySelector("[data-form]");
    const v = (n) => (f && f.elements[n] ? f.elements[n].value.trim() : "");
    const body =
      `${T("form.name", "Name")}: ${v("name")}\n` +
      `${T("form.email", "Email")}: ${v("email")}\n` +
      `${T("form.phone", "Phone")}: ${v("phone") || "-"}\n` +
      `${T("form.service", "Service")}: ${v("service") || "-"}\n\n` +
      `${v("message")}`;
    return `mailto:${EMAIL_TO}?subject=${encodeURIComponent(T("email.subject", "Masonry estimate request — PF Masonry"))}&body=${encodeURIComponent(body)}`;
  }
  // Botão "Send email": ao clicar, prenche o mailto com o que já estiver no formulário
  document.querySelectorAll(".js-email").forEach((el) => {
    el.addEventListener("click", () => { el.setAttribute("href", composeMailto()); });
  });

  /* ---------- 2. Cabeçalho ganha sombra ao rolar ---------- */
  const header = document.querySelector("[data-header]");
  const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 3. Menu mobile ---------- */
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.getElementById("menu");
  if (toggle && nav) {
    const closeNav = () => { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); };
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });
  }

  /* ---------- 4. Animações de entrada (reveal) ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  // Depois da entrada, remove as classes do reveal para devolver ao elemento
  // seus próprios transforms/transições (hover lift, card em destaque etc.)
  const revealEl = (el) => {
    el.classList.add("is-visible");
    setTimeout(() => { el.classList.remove("reveal", "is-visible"); }, 1600);
  };
  if ("IntersectionObserver" in window && !RM) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { revealEl(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => revealEl(el));
  }

  // Failsafe: se nada foi revelado após o carregamento, mostra tudo.
  window.addEventListener("load", () => setTimeout(() => {
    if (document.querySelector(".reveal") && !document.querySelector(".reveal.is-visible")) {
      document.querySelectorAll(".reveal").forEach((el) => revealEl(el));
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
    if (RM) { el.textContent = target.toLocaleString("en-US"); return; }
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

  /* ---------- 7. Trilho de reels (Instagram): setas rolam o trilho ---------- */
  const rail = document.querySelector("[data-rail]");
  if (rail) {
    const step = () => {
      const card = rail.querySelector(".reel-card");
      return card ? card.getBoundingClientRect().width + 18 : 260;
    };
    document.querySelector("[data-rail-prev]")?.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: SCROLL_BEHAVIOR }));
    document.querySelector("[data-rail-next]")?.addEventListener("click", () => rail.scrollBy({ left: step(), behavior: SCROLL_BEHAVIOR }));

    // Reel do cliente: toca (sem som) só enquanto o card está visível.
    // Com "reduzir movimento" ativo, fica no poster.
    const reelVideos = rail.querySelectorAll("[data-reel-video]");
    if (reelVideos.length && !RM && "IntersectionObserver" in window) {
      const vo = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          const v = en.target;
          if (en.isIntersecting) {
            const p = v.play();
            if (p && p.catch) p.catch(() => {});
          } else {
            v.pause();
          }
        });
      }, { threshold: 0.4 });
      reelVideos.forEach((v) => vo.observe(v));
    }
  }

  /* ---------- 8. Filtro da galeria ---------- */
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

  /* ---------- 9. Lightbox da galeria (teclado + swipe) ---------- */
  const lb = document.querySelector("[data-lightbox]");
  if (lb) {
    const lbImg = lb.querySelector("[data-lb-img]");
    const lbCap = lb.querySelector("[data-lb-cap]");
    let visibleWorks = [], current = 0, lastFocus = null, swipeX = null, squelchClick = false;

    const showLightbox = () => {
      const w = visibleWorks[current];
      lbImg.src = w.dataset.full;
      lbImg.alt = (w.querySelector("img") || {}).alt || "";
      lbCap.textContent = w.dataset.caption || "";
    };
    const openLightbox = (index) => {
      visibleWorks = [...works].filter((w) => !w.classList.contains("is-hidden"));
      current = index;
      showLightbox();
      lastFocus = document.activeElement;
      lb.classList.add("is-open");
      lb.setAttribute("aria-hidden", "false");
      document.body.classList.add("lb-open");
      document.body.style.overflow = "hidden";
      lb.querySelector("[data-lb-close]").focus();
    };
    const closeLightbox = () => {
      lb.classList.remove("is-open");
      lb.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lb-open");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    };
    const move = (dir) => { current = (current + dir + visibleWorks.length) % visibleWorks.length; showLightbox(); };

    works.forEach((w) => w.addEventListener("click", () => {
      const list = [...works].filter((el) => !el.classList.contains("is-hidden"));
      openLightbox(list.indexOf(w));
    }));
    lb.querySelector("[data-lb-close]").addEventListener("click", closeLightbox);
    lb.querySelector("[data-lb-prev]").addEventListener("click", () => move(-1));
    lb.querySelector("[data-lb-next]").addEventListener("click", () => move(1));
    // o clique sintético pós-arrasto não pode fechar o lightbox
    lb.addEventListener("pointerdown", (e) => { swipeX = e.clientX; squelchClick = false; });
    lb.addEventListener("pointerup", (e) => {
      if (swipeX === null) return;
      const dx = e.clientX - swipeX;
      if (Math.abs(dx) > 10) squelchClick = true;
      if (Math.abs(dx) > 60) move(dx > 0 ? -1 : 1);
      swipeX = null;
    });
    lb.addEventListener("click", (e) => { if (e.target === lb && !squelchClick) closeLightbox(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
      // aria-modal: prende o Tab nos controles do lightbox
      if (e.key === "Tab") {
        const foci = [...lb.querySelectorAll("button")];
        const i = foci.indexOf(document.activeElement);
        e.preventDefault();
        const next = e.shiftKey ? (i - 1 + foci.length) % foci.length : (i + 1) % foci.length;
        foci[next < 0 ? foci.length - 1 : next].focus();
      }
    });
  }

  /* ---------- 10. Voltar ao topo ---------- */
  const toTop = document.querySelector("[data-to-top]");
  if (toTop) {
    const toggleTop = () => toTop.classList.toggle("is-visible", window.scrollY > 600);
    toggleTop();
    window.addEventListener("scroll", toggleTop, { passive: true });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: SCROLL_BEHAVIOR }));
  }

  /* ---------- 11. Formulário: validação inline + envio ---------- */
  const form = document.querySelector("[data-form]");
  const status = document.querySelector("[data-form-status]");
  const submitBtn = document.querySelector("[data-submit]");

  if (form && status && submitBtn) {
    const W3_URL = "https://api.web3forms.com/submit";
    const useW3 = !!CONFIG.web3formsKey;
    const useFS = !useW3 && !!CONFIG.formEndpoint;

    if (useW3) {
      form.setAttribute("action", W3_URL);
      const k = document.createElement("input");
      k.type = "hidden"; k.name = "access_key"; k.value = CONFIG.web3formsKey;
      form.appendChild(k);
    } else if (useFS) {
      form.setAttribute("action", CONFIG.formEndpoint);
    }

    const setErr = (input, msg) => {
      const field = input.closest(".field");
      if (!field) return;
      field.classList.toggle("has-err", !!msg);
      const err = field.querySelector("[data-err]");
      if (err) err.textContent = msg || "";
    };
    form.querySelectorAll("input, textarea").forEach((inp) => {
      inp.addEventListener("input", () => setErr(inp, ""));
    });

    function validate() {
      let ok = true, first = null;
      [form.elements.name, form.elements.email, form.elements.message].forEach((inp) => {
        if (inp && !inp.value.trim()) {
          setErr(inp, T("form.errReq", "Required field"));
          ok = false; first = first || inp;
        }
      });
      const email = form.elements.email;
      if (email && email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        setErr(email, T("form.errEmail", "Enter a valid email"));
        ok = false; first = first || email;
      }
      if (first) first.focus();
      return ok;
    }

    let sending = false; // evita envio duplo (Enter repetido durante o fetch)
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (sending) return;
      status.textContent = "";
      status.className = "form-status";
      if (form.elements._gotcha && form.elements._gotcha.value) return; // honeypot
      if (!validate()) return;

      // Sem serviço de e-mail server-side configurado: abre o app de e-mail do visitante
      // já endereçado ao cliente, com os dados do formulário no corpo.
      if (!useW3 && !useFS) {
        window.location.href = composeMailto();
        status.textContent = T("form.statusEmail", "Opening your email app…");
        status.classList.add("is-ok");
        return;
      }

      sending = true;
      submitBtn.classList.add("is-loading");
      submitBtn.disabled = true;
      const label = submitBtn.querySelector("span");
      const original = label ? label.textContent : "";
      if (label) label.textContent = T("form.sending", "Sending...");

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
        sending = false;
        submitBtn.classList.remove("is-loading");
        submitBtn.disabled = false;
        if (label) label.textContent = original;
      }
    });
  }

  /* ---------- 12. Ano atual no rodapé ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
