/* ==========================================================================
   PF CONSTRUCTION MASONRY — JavaScript ("Atelier Stone" / animações CUT STONE)
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
  // ⚠️ TROCAR: gerar a chave com o e-mail do cliente.
  // Enquanto vazio, o envio do formulário abre o WhatsApp com a mensagem preenchida.
  web3formsKey: "",
  // B) Formspree — precisa criar conta em https://formspree.io e colar a URL do form:
  formEndpoint: ""
};

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const T = (k, fb) => (window.PF_I18N ? window.PF_I18N.t(k) : (fb || k));

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

  /* ---------- 2. Costura de progresso + barra fixa + WhatsApp flutuante ---------- */
  const seam = document.querySelector("[data-seam]");
  const dockbar = document.querySelector("[data-dockbar]");
  const waFloat = document.querySelector("[data-wa-float]");
  let scrollDirty = true;

  function onScrollFrame() {
    if (scrollDirty) {
      scrollDirty = false;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (seam) seam.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      if (dockbar) dockbar.classList.toggle("on", y > window.innerHeight * 0.9);
      if (waFloat) waFloat.classList.toggle("show", y > window.innerHeight * 0.8);
      driftFrame(y);
    }
    previewFrame();
    requestAnimationFrame(onScrollFrame);
  }
  window.addEventListener("scroll", () => { scrollDirty = true; }, { passive: true });

  /* ---------- 3. DRIFT — parallax sutil (desktop, sem reduced-motion) ---------- */
  const driftEls = [];
  const driftOn = !RM && window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
  if (driftOn) {
    document.querySelectorAll("[data-drift]").forEach((el) => {
      driftEls.push({ el, factor: parseFloat(el.dataset.drift) || 0.06, base: 0, applied: 0 });
    });
    const measure = () => {
      driftEls.forEach((d) => {
        const r = d.el.getBoundingClientRect();
        d.base = r.top + window.scrollY - d.applied;
      });
    };
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    measure();
  }
  function driftFrame(y) {
    driftEls.forEach((d) => {
      const center = d.base + d.el.offsetHeight / 2;
      const delta = (y + window.innerHeight / 2 - center) * d.factor;
      d.applied = Math.max(-32, Math.min(32, delta));
      d.el.style.transform = `translate3d(0, ${d.applied.toFixed(1)}px, 0)`;
    });
  }

  /* ---------- 4. Observer único do sistema CUT STONE ---------- */
  const animEls = document.querySelectorAll("[data-anim], [data-proc]");
  // filhos de grupos ganham stagger
  document.querySelectorAll("[data-anim-group]").forEach((group) => {
    let i = 0;
    group.querySelectorAll("[data-anim]").forEach((child) => {
      if (child.dataset.anim === "rise" || child.dataset.anim === "chisel") {
        child.style.transitionDelay = `${Math.min(i * 70, 560)}ms`;
        i++;
      }
    });
  });

  function enter(el) {
    el.classList.add("in");
    if (el.dataset.anim === "tally") runTally(el);
    // limpa o delay depois da entrada para não atrasar hovers futuros
    if (el.style.transitionDelay) setTimeout(() => { el.style.transitionDelay = ""; }, 1600);
  }

  if ("IntersectionObserver" in window && !RM) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { enter(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
    animEls.forEach((el) => io.observe(el));
  } else {
    animEls.forEach((el) => enter(el));
  }

  // Failsafe: se nada foi revelado após o carregamento, mostra tudo.
  window.addEventListener("load", () => setTimeout(() => {
    if (!document.querySelector("[data-anim].in")) animEls.forEach((el) => el.classList.add("in"));
  }, 1200));

  /* ---------- 5. TALLY — contadores ---------- */
  function runTally(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    if (RM) { el.textContent = String(target); return; }
    const dur = 1400, start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p); // easeOutExpo
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    el.textContent = "0";
    requestAnimationFrame(tick);
  }

  /* ---------- 6. Ticker (marquee) — duplica o conteúdo e pausa fora da tela ---------- */
  const ticker = document.querySelector("[data-ticker]");
  const tickerTrack = document.querySelector("[data-ticker-track]");
  if (ticker && tickerTrack) {
    const clone = document.createElement("span");
    clone.setAttribute("aria-hidden", "true");
    clone.style.display = "contents";
    clone.innerHTML = tickerTrack.innerHTML;
    tickerTrack.appendChild(clone);
    ticker.classList.add("ready");
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((ents) => ents.forEach((en) => {
        ticker.classList.toggle("paused", !en.isIntersecting);
      })).observe(ticker);
    }
  }

  /* ---------- 7. Menu mobile ---------- */
  const menu = document.querySelector("[data-menu]");
  const openBtns = document.querySelectorAll("[data-menu-open]");
  const closeBtn = document.querySelector("[data-menu-close]");
  function setMenu(open) {
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", String(!open));
    openBtns.forEach((b) => b.setAttribute("aria-expanded", String(open)));
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (menu) {
    openBtns.forEach((b) => b.addEventListener("click", () => setMenu(true)));
    if (closeBtn) closeBtn.addEventListener("click", () => setMenu(false));
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.classList.contains("open")) setMenu(false); });
  }

  /* ---------- 8. Navegação ativa conforme a seção visível ---------- */
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
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((s) => so.observe(s));
  }

  /* ---------- 9. Serviços: prévia que segue o cursor + acordeão mobile ---------- */
  const svcList = document.querySelector(".svc-list");
  const preview = document.querySelector("[data-svc-preview]");
  const previewImg = preview ? preview.querySelector("img") : null;
  const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const isMobileMode = () => window.matchMedia("(max-width: 1023px)").matches;
  let pv = { x: 0, y: 0, tx: 0, ty: 0, on: false };

  if (svcList && preview && fineHover && !RM) {
    svcList.addEventListener("mousemove", (e) => { pv.tx = e.clientX + 28; pv.ty = e.clientY - 100; });
    svcList.querySelectorAll(".svc__row").forEach((row) => {
      row.addEventListener("mouseenter", (e) => {
        if (isMobileMode()) return;
        if (previewImg && row.dataset.preview && previewImg.getAttribute("src") !== row.dataset.preview) {
          previewImg.src = row.dataset.preview;
        }
        // no primeiro hover, nasce já na posição do cursor (sem "voar" do canto)
        pv.tx = e.clientX + 28; pv.ty = e.clientY - 100;
        if (!pv.on) { pv.x = pv.tx; pv.y = pv.ty; }
        pv.on = true; preview.classList.add("on");
      });
    });
    svcList.addEventListener("mouseleave", () => { pv.on = false; preview.classList.remove("on"); });
  }
  function previewFrame() {
    if (!preview || !pv.on) return;
    pv.x += (pv.tx - pv.x) * 0.12;
    pv.y += (pv.ty - pv.y) * 0.12;
    preview.style.transform = `translate(${pv.x.toFixed(1)}px, ${pv.y.toFixed(1)}px)`;
  }

  // Pré-seleciona o serviço no formulário + acordeão no mobile
  const serviceSelect = document.getElementById("servico");
  function preselect(service) {
    if (serviceSelect && service) serviceSelect.value = service;
  }
  document.querySelectorAll(".svc__row").forEach((row) => {
    row.addEventListener("click", (e) => {
      // esconde a prévia (a página rola sob o cursor e o mouseleave não dispara)
      if (preview) { pv.on = false; preview.classList.remove("on"); }
      if (isMobileMode()) {
        e.preventDefault();
        const item = row.closest(".svc");
        const wasOpen = item.classList.contains("open");
        document.querySelectorAll(".svc.open").forEach((s) => {
          s.classList.remove("open");
          const p = s.querySelector(".svc__panel");
          if (p) p.style.maxHeight = "";
        });
        if (!wasOpen) {
          item.classList.add("open");
          // altura real do conteúdo (um teto fixo cortava o painel em tablets)
          const p = item.querySelector(".svc__panel");
          if (p) p.style.maxHeight = p.scrollHeight + "px";
        }
      } else {
        preselect(row.dataset.service);
      }
    });
  });
  document.querySelectorAll(".svc__panel a[data-service]").forEach((a) => {
    a.addEventListener("click", () => preselect(a.dataset.service));
  });

  /* ---------- 10. Depoimentos: um por vez ---------- */
  const tstage = document.querySelector("[data-tstage]");
  if (tstage) {
    const quotes = [...tstage.querySelectorAll(".tq")];
    const idxEl = document.querySelector("[data-tindex]");
    let ti = 0, timer = null;
    const show = (i) => {
      ti = (i + quotes.length) % quotes.length;
      quotes.forEach((q, n) => q.classList.toggle("is-active", n === ti));
      if (idxEl) idxEl.textContent = `${ti + 1} / ${quotes.length}`;
    };
    const restart = () => {
      if (RM) return;
      clearInterval(timer);
      timer = setInterval(() => show(ti + 1), 8000);
    };
    document.querySelector("[data-tprev]")?.addEventListener("click", () => { show(ti - 1); restart(); });
    document.querySelector("[data-tnext]")?.addEventListener("click", () => { show(ti + 1); restart(); });
    const band = tstage.closest(".tband");
    band.addEventListener("mouseenter", () => clearInterval(timer));
    band.addEventListener("mouseleave", restart);
    band.addEventListener("focusin", () => clearInterval(timer));
    band.addEventListener("focusout", restart);
    restart();
  }

  /* ---------- 11. Lightbox (claro) com setas, teclado e swipe ---------- */
  const lb = document.querySelector("[data-lightbox]");
  if (lb) {
    const lbImg = lb.querySelector("[data-lb-img]");
    const lbCap = lb.querySelector("[data-lb-cap]");
    const lbCount = lb.querySelector("[data-lb-count]");
    const items = [...document.querySelectorAll(".work__btn")];
    let cur = 0, lastFocus = null, swipeX = null;

    const render = () => {
      const it = items[cur];
      lbImg.src = it.dataset.full;
      lbImg.alt = it.querySelector("img").alt || "";
      lbCap.textContent = it.dataset.caption || "";
      lbCount.textContent = `${cur + 1} / ${items.length}`;
    };
    const open = (i) => {
      cur = i; render(); lastFocus = document.activeElement;
      lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false");
      document.body.classList.add("lb-open");
      document.body.style.overflow = "hidden";
      lb.querySelector("[data-lb-close]").focus();
    };
    const close = () => {
      lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lb-open");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    };
    const move = (dir) => { cur = (cur + dir + items.length) % items.length; render(); };

    items.forEach((btn, i) => btn.addEventListener("click", () => open(i)));
    lb.querySelector("[data-lb-close]").addEventListener("click", close);
    lb.querySelector("[data-lb-prev]").addEventListener("click", () => move(-1));
    lb.querySelector("[data-lb-next]").addEventListener("click", () => move(1));
    lb.addEventListener("click", (e) => { if (e.target === lb && !squelchClick) close(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
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
    // swipe (o clique sintético pós-arrasto não pode fechar o lightbox)
    let squelchClick = false;
    lb.addEventListener("pointerdown", (e) => { swipeX = e.clientX; squelchClick = false; });
    lb.addEventListener("pointerup", (e) => {
      if (swipeX === null) return;
      const dx = e.clientX - swipeX;
      if (Math.abs(dx) > 10) squelchClick = true;
      if (Math.abs(dx) > 60) move(dx > 0 ? -1 : 1);
      swipeX = null;
    });
  }

  /* ---------- 12. Formulário: validação inline + envio ---------- */
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
      const req = [form.elements.name, form.elements.email, form.elements.message];
      req.forEach((inp) => {
        if (!inp.value.trim()) {
          setErr(inp, T("form.errReq", "Required field"));
          ok = false; first = first || inp;
        }
      });
      const email = form.elements.email;
      if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        setErr(email, T("form.errEmail", "Enter a valid email"));
        ok = false; first = first || email;
      }
      if (first) first.focus();
      return ok;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.textContent = "";
      status.className = "form-status mono";
      if (form.elements._gotcha && form.elements._gotcha.value) return; // honeypot
      if (!validate()) return;

      // Sem serviço de e-mail configurado: abre o WhatsApp com a mensagem pronta
      if (!useW3 && !useFS) {
        const v = (n) => (form.elements[n] ? form.elements[n].value.trim() : "");
        const msg = `${T("wa.formIntro", "Hi! I'd like an estimate.")}\n` +
          `• ${T("form.name", "Name")}: ${v("name")}\n` +
          `• ${T("form.phone", "Phone")}: ${v("phone") || "-"}\n` +
          `• ${T("form.email", "Email")}: ${v("email")}\n` +
          `• ${T("form.service", "Service")}: ${v("service") || "-"}\n\n${v("message")}`;
        window.open(waUrl(msg), "_blank", "noopener");
        status.textContent = T("form.statusWa", "Opening WhatsApp with your message…");
        status.classList.add("is-ok");
        return;
      }

      submitBtn.classList.add("is-loading");
      const label = submitBtn.querySelector("span:not(.btn__fill)");
      const original = label.textContent;
      label.textContent = T("form.sending", "Sending...");

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
        status.textContent = T("form.statusOk", "✓ Request sent — we'll reply within one business day.");
        status.classList.add("is-ok");
      } catch (err) {
        status.textContent = T("form.statusErr", "✕ Couldn't send right now. Please try again or reach us on WhatsApp.");
        status.classList.add("is-err");
      } finally {
        submitBtn.classList.remove("is-loading");
        label.textContent = original;
      }
    });
  }

  /* ---------- 13. Ano atual no rodapé ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* inicia o loop de animação (progresso, drift, prévia) */
  requestAnimationFrame(onScrollFrame);
});
