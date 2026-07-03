/* ==========================================================================
   PF CONSTRUCTION MASONRY — Sistema de idiomas (EN / PT / ES)
   --------------------------------------------------------------------------
   Para EDITAR os textos: altere os valores em "dict" abaixo (en, pt, es).
   Cada elemento no HTML usa data-i18n="chave" para receber o texto.
   ========================================================================== */
window.PF_I18N = (function () {
  const dict = {
    /* ============================ ENGLISH ============================ */
    en: {
      "meta.title": "PF Construction Masonry — Masonry, Pavers & Concrete in Monmouth County, NJ",
      "meta.desc": "Masonry specialists in Long Branch, NJ: pavers, brick, concrete, stone, tile, sidewalks, curbs and foundations. Serving all of Monmouth County.",

      "nav.services": "Services", "nav.about": "About", "nav.process": "Process",
      "nav.works": "Work", "nav.contact": "Contact", "nav.testimonials": "Reviews",
      "nav.cta": "Get an estimate",

      "hero.eyebrow": "Masonry contractor — Monmouth County, NJ",
      "hero.line1": "Built by hand.",
      "hero.line2": "Made to last",
      "hero.meta2": "Pavers · Brick · Stone · Concrete",
      "hero.meta3": "Est. 10+ years of craft",
      "hero.sub": "Pavers, brick, concrete, stone, tile, sidewalks and foundations — solid craftsmanship for homes and businesses across Monmouth County.",
      "hero.btnWhats": "WhatsApp us",
      "hero.btnWorks": "View our work ↓",
      "hero.caption": "Paver patio + retaining wall",

      "record.idx": "01 — Record",
      "stat1": "Years of craft", "stat2": "Projects completed",
      "stat3": "Sq ft installed", "stat4": "Happy clients",

      "services.idx": "02 — Services", "services.note": "Seven trades. One standard.",
      "services.title": "What we build",
      "svc1.t": "Pavers", "svc1.d": "Driveways, patios and walkways installed with precision — durable and built to drain right.",
      "svc2.t": "Brick", "svc2.d": "Walls, veneer, steps and repairs — classic brickwork with clean, even joints.",
      "svc3.t": "Concrete", "svc3.d": "Driveways, slabs, steps and flatwork — graded, reinforced and finished right.",
      "svc4.t": "Stone", "svc4.d": "Natural stone walls, veneer and accents with timeless character.",
      "svc5.t": "Tile", "svc5.d": "Tile installation done right — level, aligned and sealed, indoors and out.",
      "svc6.t": "Sidewalk & Curb", "svc6.d": "Built or replaced to code — smooth, safe and up to township standards.",
      "svc7.t": "Foundation", "svc7.d": "Footings, foundations and structural repairs — the base everything depends on.",

      "about.idx": "03 — About",
      "about.title": "A small crew that treats your property like a portfolio piece.",
      "about.p1": "PF Construction Masonry is based in Long Branch, NJ, serving homes and businesses across Monmouth County. From pavers and brick to concrete, stone, tile and foundations — we build it solid, and we build it right.",
      "about.c1": "Skilled, experienced crew", "about.c2": "Quality materials",
      "about.c3": "On-time, clean job sites", "about.c4": "Clear estimates, no surprises",
      "about.cap1": "Crew at work", "about.cap2": "Brick detail",

      "process.idx": "04 — Process", "process.title": "From walkthrough to walk-on",
      "step1.t": "Site visit", "step1.d": "We come to you, look at the site and measure everything precisely.",
      "step2.t": "Estimate", "step2.d": "Material options and a clear, no-surprise estimate.",
      "step3.t": "Construction", "step3.d": "We prep the base and build with an experienced, meticulous crew.",
      "step4.t": "Delivery", "step4.d": "On time, with the site clean and ready to enjoy.",

      "gallery.idx": "05 — Work", "gallery.count": "Six of 300+",
      "gallery.title": "Selected projects",
      "work1.name": "Paver patio", "work2.name": "Brick wall", "work3.name": "Garden stone wall",
      "work4.name": "Concrete driveway", "work5.name": "Outdoor patio", "work6.name": "Stone patio",

      "reels.idx": "06 — On site", "reels.eyebrow": "Instagram",
      "reels.title": "Follow the work", "reels.handle": "pfmasonry",
      "reels.soon": "Client reels — coming soon",
      "reels.tag1": "Stonework", "reels.tag2": "Brickwork", "reels.tag3": "Patios",

      "t1.q": "They rebuilt our paver driveway and it looks amazing. Straight lines, perfect pitch — true professionals.",
      "t1.n": "Michael R.", "t1.r": "Long Branch, NJ",
      "t2.q": "Professional from start to finish. The estimate was exactly as agreed, no surprises.",
      "t2.n": "Sandra M.", "t2.r": "Ocean Township, NJ",
      "t3.q": "They replaced our sidewalk and steps quickly and left everything spotless. Highly recommend.",
      "t3.n": "James T.", "t3.r": "West Long Branch, NJ",
      "test.prev": "Previous quote", "test.next": "Next quote",

      "cta.eyebrow": "Free estimate",
      "cta.title": "Let’s build something that lasts",
      "cta.sub": "Tell us about your project — we’ll walk the site and give you a clear, honest estimate.",
      "cta.btnWhats": "WhatsApp us", "cta.btnForm": "Request an estimate ↓",
      "cta.call": "Or call:",

      "contact.idx": "07 — Contact", "contact.title": "Start with a site visit.",
      "contact.lead": "Free estimate, no obligation. Tell us what you need and we’ll take it from there.",
      "contact.phoneL": "Phone", "contact.phone2L": "Phone 2", "contact.emailL": "Email",
      "contact.areaL": "Area", "contact.areaV": "Long Branch, NJ — all of Monmouth County",
      "contact.hoursL": "Hours", "contact.hoursV": "Mon–Sat, 7am–6pm",

      "form.name": "Full name", "form.namePh": "Your name",
      "form.email": "Email", "form.emailPh": "you@email.com",
      "form.phone": "Phone / WhatsApp",
      "form.service": "Service type", "form.opt0": "Select an option",
      "form.opt1": "Pavers", "form.opt2": "Brick", "form.opt3": "Concrete",
      "form.opt4": "Stone", "form.opt5": "Tile", "form.opt6": "Sidewalk / Curb",
      "form.opt7": "Foundation", "form.opt8": "Other",
      "form.message": "Message", "form.messagePh": "Tell us a bit about your project...",
      "form.submit": "Send request",
      "form.note": "Free estimate — we reply within one business day.",
      "form.statusOk": "✓ Request sent — we'll reply within one business day.",
      "form.statusErr": "✕ Couldn't send right now. Please try again or reach us on WhatsApp.",
      "form.statusWa": "Opening WhatsApp with your message…",
      "form.sending": "Sending...",
      "form.errReq": "Required field", "form.errEmail": "Enter a valid email",

      "footer.nav": "Navigation", "footer.services": "Services", "footer.contact": "Contact",
      "footer.rights": "All rights reserved.", "footer.top": "Back to top ↑",

      "aria.lang": "Select language", "aria.menu": "Open menu", "aria.close": "Close menu",
      "aria.whats": "Chat on WhatsApp", "aria.lbClose": "Close", "aria.lbPrev": "Previous", "aria.lbNext": "Next",

      "wa.tip": "Talk to a mason",
      "wa.msg": "Hi! I came from your website and would like a masonry estimate.",
      "wa.formIntro": "Hi! I'd like an estimate."
    },

    /* =========================== PORTUGUÊS =========================== */
    pt: {
      "meta.title": "PF Construction Masonry — Masonry, Pavers & Concreto em Monmouth County, NJ",
      "meta.desc": "Especialistas em masonry em Long Branch, NJ: pavers, tijolo, concreto, pedra, azulejo, calçadas, meio-fio e fundações. Atendemos todo o Monmouth County.",

      "nav.services": "Serviços", "nav.about": "Sobre", "nav.process": "Processo",
      "nav.works": "Projetos", "nav.contact": "Contato", "nav.testimonials": "Depoimentos",
      "nav.cta": "Orçamento grátis",

      "hero.eyebrow": "Masonry — Monmouth County, NJ",
      "hero.line1": "Feito à mão.",
      "hero.line2": "Feito pra durar",
      "hero.meta2": "Pavers · Tijolo · Pedra · Concreto",
      "hero.meta3": "Há 10+ anos no ofício",
      "hero.sub": "Pavers, tijolo, concreto, pedra, azulejo, calçadas e fundações — mão de obra sólida para casas e comércios em todo o Monmouth County.",
      "hero.btnWhats": "Chamar no WhatsApp",
      "hero.btnWorks": "Ver nossos projetos ↓",
      "hero.caption": "Pátio em pavers + muro de arrimo",

      "record.idx": "01 — Números",
      "stat1": "Anos de ofício", "stat2": "Projetos concluídos",
      "stat3": "Sq ft instalados", "stat4": "Clientes satisfeitos",

      "services.idx": "02 — Serviços", "services.note": "Sete ofícios. Um padrão.",
      "services.title": "O que construímos",
      "svc1.t": "Pavers", "svc1.d": "Entradas, pátios e caminhos instalados com precisão — duráveis e com drenagem correta.",
      "svc2.t": "Tijolo", "svc2.d": "Muros, revestimentos, degraus e reparos — alvenaria clássica com juntas limpas e uniformes.",
      "svc3.t": "Concreto", "svc3.d": "Entradas, lajes, degraus e pisos — nivelados, reforçados e bem acabados.",
      "svc4.t": "Pedra", "svc4.d": "Muros, revestimentos e detalhes em pedra natural com caráter atemporal.",
      "svc5.t": "Azulejo", "svc5.d": "Instalação bem feita — nivelada, alinhada e vedada, dentro e fora de casa.",
      "svc6.t": "Calçada & Meio-fio", "svc6.d": "Construídos ou substituídos dentro das normas — lisos, seguros e no padrão da prefeitura.",
      "svc7.t": "Fundação", "svc7.d": "Sapatas, fundações e reparos estruturais — a base da qual tudo depende.",

      "about.idx": "03 — Sobre",
      "about.title": "Uma equipe pequena que trata seu imóvel como peça de portfólio.",
      "about.p1": "A PF Construction Masonry fica em Long Branch, NJ, e atende casas e comércios em todo o Monmouth County. De pavers e tijolo a concreto, pedra, azulejo e fundações — construímos sólido, e construímos certo.",
      "about.c1": "Equipe experiente e qualificada", "about.c2": "Materiais de qualidade",
      "about.c3": "Prazo cumprido e obra limpa", "about.c4": "Orçamento claro, sem surpresas",
      "about.cap1": "Equipe em obra", "about.cap2": "Detalhe em tijolo",

      "process.idx": "04 — Processo", "process.title": "Da visita à obra entregue",
      "step1.t": "Visita", "step1.d": "Vamos até você, avaliamos o local e medimos tudo com precisão.",
      "step2.t": "Orçamento", "step2.d": "Opções de material e um orçamento claro, sem surpresas.",
      "step3.t": "Construção", "step3.d": "Preparamos a base e construímos com equipe experiente e caprichosa.",
      "step4.t": "Entrega", "step4.d": "No prazo, com o local limpo e pronto para usar.",

      "gallery.idx": "05 — Projetos", "gallery.count": "Seis de 300+",
      "gallery.title": "Projetos selecionados",
      "work1.name": "Pátio em pavers", "work2.name": "Muro de tijolo", "work3.name": "Muro de pedra",
      "work4.name": "Entrada em concreto", "work5.name": "Pátio externo", "work6.name": "Pátio em pedra",

      "reels.idx": "06 — Na obra", "reels.eyebrow": "Instagram",
      "reels.title": "Acompanhe o trabalho", "reels.handle": "pfmasonry",
      "reels.soon": "Reels do cliente — em breve",
      "reels.tag1": "Pedra", "reels.tag2": "Tijolo", "reels.tag3": "Pátios",

      "t1.q": "Refizeram a entrada de pavers e ficou incrível. Linhas retas, caimento perfeito — profissionais de verdade.",
      "t1.n": "Michael R.", "t1.r": "Long Branch, NJ",
      "t2.q": "Profissionais do começo ao fim. O orçamento foi exatamente o combinado, sem surpresas.",
      "t2.n": "Sandra M.", "t2.r": "Ocean Township, NJ",
      "t3.q": "Trocaram a calçada e os degraus rapidinho e deixaram tudo limpo. Recomendo muito.",
      "t3.n": "James T.", "t3.r": "West Long Branch, NJ",
      "test.prev": "Depoimento anterior", "test.next": "Próximo depoimento",

      "cta.eyebrow": "Orçamento grátis",
      "cta.title": "Vamos construir algo que dura",
      "cta.sub": "Conte sobre o seu projeto — visitamos o local e entregamos um orçamento claro e honesto.",
      "cta.btnWhats": "Chamar no WhatsApp", "cta.btnForm": "Pedir orçamento ↓",
      "cta.call": "Ou ligue:",

      "contact.idx": "07 — Contato", "contact.title": "Comece com uma visita.",
      "contact.lead": "Orçamento grátis, sem compromisso. Conte o que você precisa e cuidamos do resto.",
      "contact.phoneL": "Telefone", "contact.phone2L": "Telefone 2", "contact.emailL": "E-mail",
      "contact.areaL": "Área", "contact.areaV": "Long Branch, NJ — todo o Monmouth County",
      "contact.hoursL": "Horário", "contact.hoursV": "Seg–Sáb, 7h às 18h",

      "form.name": "Nome completo", "form.namePh": "Seu nome",
      "form.email": "E-mail", "form.emailPh": "voce@email.com",
      "form.phone": "Telefone / WhatsApp",
      "form.service": "Tipo de serviço", "form.opt0": "Selecione uma opção",
      "form.opt1": "Pavers", "form.opt2": "Tijolo", "form.opt3": "Concreto",
      "form.opt4": "Pedra", "form.opt5": "Azulejo", "form.opt6": "Calçada / Meio-fio",
      "form.opt7": "Fundação", "form.opt8": "Outro",
      "form.message": "Mensagem", "form.messagePh": "Conte um pouco sobre o seu projeto...",
      "form.submit": "Enviar pedido",
      "form.note": "Orçamento grátis — respondemos em até 1 dia útil.",
      "form.statusOk": "✓ Pedido enviado — respondemos em até 1 dia útil.",
      "form.statusErr": "✕ Não foi possível enviar agora. Tente de novo ou chame no WhatsApp.",
      "form.statusWa": "Abrindo o WhatsApp com a sua mensagem…",
      "form.sending": "Enviando...",
      "form.errReq": "Campo obrigatório", "form.errEmail": "Digite um e-mail válido",

      "footer.nav": "Navegação", "footer.services": "Serviços", "footer.contact": "Contato",
      "footer.rights": "Todos os direitos reservados.", "footer.top": "Voltar ao topo ↑",

      "aria.lang": "Selecionar idioma", "aria.menu": "Abrir menu", "aria.close": "Fechar menu",
      "aria.whats": "Falar no WhatsApp", "aria.lbClose": "Fechar", "aria.lbPrev": "Anterior", "aria.lbNext": "Próxima",

      "wa.tip": "Fale com um pedreiro",
      "wa.msg": "Olá! Vim pelo site e gostaria de um orçamento de masonry.",
      "wa.formIntro": "Olá! Gostaria de um orçamento."
    },

    /* ============================ ESPAÑOL ============================ */
    es: {
      "meta.title": "PF Construction Masonry — Masonry, Pavers y Concreto en Monmouth County, NJ",
      "meta.desc": "Especialistas en masonry en Long Branch, NJ: pavers, ladrillo, concreto, piedra, azulejo, aceras, bordillos y cimientos. Servimos todo Monmouth County.",

      "nav.services": "Servicios", "nav.about": "Nosotros", "nav.process": "Proceso",
      "nav.works": "Proyectos", "nav.contact": "Contacto", "nav.testimonials": "Opiniones",
      "nav.cta": "Presupuesto gratis",

      "hero.eyebrow": "Masonry — Monmouth County, NJ",
      "hero.line1": "Hecho a mano.",
      "hero.line2": "Hecho para durar",
      "hero.meta2": "Pavers · Ladrillo · Piedra · Concreto",
      "hero.meta3": "10+ años de oficio",
      "hero.sub": "Pavers, ladrillo, concreto, piedra, azulejo, aceras y cimientos — mano de obra sólida para casas y negocios en todo Monmouth County.",
      "hero.btnWhats": "Escribir por WhatsApp",
      "hero.btnWorks": "Ver nuestros proyectos ↓",
      "hero.caption": "Patio de pavers + muro de contención",

      "record.idx": "01 — Cifras",
      "stat1": "Años de oficio", "stat2": "Proyectos completados",
      "stat3": "Sq ft instalados", "stat4": "Clientes satisfechos",

      "services.idx": "02 — Servicios", "services.note": "Siete oficios. Un estándar.",
      "services.title": "Lo que construimos",
      "svc1.t": "Pavers", "svc1.d": "Entradas, patios y caminos instalados con precisión — duraderos y con buen drenaje.",
      "svc2.t": "Ladrillo", "svc2.d": "Muros, revestimientos, escalones y reparaciones — albañilería clásica con juntas limpias.",
      "svc3.t": "Concreto", "svc3.d": "Entradas, losas, escalones y pisos — nivelados, reforzados y bien terminados.",
      "svc4.t": "Piedra", "svc4.d": "Muros, revestimientos y detalles en piedra natural con carácter atemporal.",
      "svc5.t": "Azulejo", "svc5.d": "Instalación bien hecha — nivelada, alineada y sellada, dentro y fuera de casa.",
      "svc6.t": "Acera & Bordillo", "svc6.d": "Construidos o reemplazados según las normas — lisos, seguros y al estándar del municipio.",
      "svc7.t": "Cimientos", "svc7.d": "Zapatas, cimientos y reparaciones estructurales — la base de la que todo depende.",

      "about.idx": "03 — Nosotros",
      "about.title": "Un equipo pequeño que trata su propiedad como pieza de portafolio.",
      "about.p1": "PF Construction Masonry está en Long Branch, NJ, y sirve a casas y negocios en todo Monmouth County. De pavers y ladrillo a concreto, piedra, azulejo y cimientos — construimos sólido, y construimos bien.",
      "about.c1": "Equipo experimentado y calificado", "about.c2": "Materiales de calidad",
      "about.c3": "Plazos cumplidos y obra limpia", "about.c4": "Presupuesto claro, sin sorpresas",
      "about.cap1": "Equipo en obra", "about.cap2": "Detalle en ladrillo",

      "process.idx": "04 — Proceso", "process.title": "De la visita a la obra entregada",
      "step1.t": "Visita", "step1.d": "Vamos a su propiedad, evaluamos el sitio y medimos todo con precisión.",
      "step2.t": "Presupuesto", "step2.d": "Opciones de material y un presupuesto claro, sin sorpresas.",
      "step3.t": "Construcción", "step3.d": "Preparamos la base y construimos con un equipo experimentado y esmerado.",
      "step4.t": "Entrega", "step4.d": "A tiempo, con el sitio limpio y listo para disfrutar.",

      "gallery.idx": "05 — Proyectos", "gallery.count": "Seis de 300+",
      "gallery.title": "Proyectos seleccionados",
      "work1.name": "Patio de pavers", "work2.name": "Muro de ladrillo", "work3.name": "Muro de piedra",
      "work4.name": "Entrada de concreto", "work5.name": "Patio exterior", "work6.name": "Patio de piedra",

      "reels.idx": "06 — En obra", "reels.eyebrow": "Instagram",
      "reels.title": "Siga el trabajo", "reels.handle": "pfmasonry",
      "reels.soon": "Reels del cliente — próximamente",
      "reels.tag1": "Piedra", "reels.tag2": "Ladrillo", "reels.tag3": "Patios",

      "t1.q": "Rehicieron nuestra entrada de pavers y quedó increíble. Líneas rectas, pendiente perfecta — verdaderos profesionales.",
      "t1.n": "Michael R.", "t1.r": "Long Branch, NJ",
      "t2.q": "Profesionales de principio a fin. El presupuesto fue exactamente lo acordado, sin sorpresas.",
      "t2.n": "Sandra M.", "t2.r": "Ocean Township, NJ",
      "t3.q": "Reemplazaron la acera y los escalones rápido y dejaron todo impecable. Muy recomendados.",
      "t3.n": "James T.", "t3.r": "West Long Branch, NJ",
      "test.prev": "Opinión anterior", "test.next": "Siguiente opinión",

      "cta.eyebrow": "Presupuesto gratis",
      "cta.title": "Construyamos algo que dure",
      "cta.sub": "Cuéntenos sobre su proyecto — visitamos el sitio y entregamos un presupuesto claro y honesto.",
      "cta.btnWhats": "Escribir por WhatsApp", "cta.btnForm": "Pedir presupuesto ↓",
      "cta.call": "O llame:",

      "contact.idx": "07 — Contacto", "contact.title": "Empiece con una visita.",
      "contact.lead": "Presupuesto gratis, sin compromiso. Cuéntenos qué necesita y nos encargamos del resto.",
      "contact.phoneL": "Teléfono", "contact.phone2L": "Teléfono 2", "contact.emailL": "Correo",
      "contact.areaL": "Área", "contact.areaV": "Long Branch, NJ — todo Monmouth County",
      "contact.hoursL": "Horario", "contact.hoursV": "Lun–Sáb, 7am–6pm",

      "form.name": "Nombre completo", "form.namePh": "Su nombre",
      "form.email": "Correo electrónico", "form.emailPh": "usted@email.com",
      "form.phone": "Teléfono / WhatsApp",
      "form.service": "Tipo de servicio", "form.opt0": "Seleccione una opción",
      "form.opt1": "Pavers", "form.opt2": "Ladrillo", "form.opt3": "Concreto",
      "form.opt4": "Piedra", "form.opt5": "Azulejo", "form.opt6": "Acera / Bordillo",
      "form.opt7": "Cimientos", "form.opt8": "Otro",
      "form.message": "Mensaje", "form.messagePh": "Cuéntenos un poco sobre su proyecto...",
      "form.submit": "Enviar solicitud",
      "form.note": "Presupuesto gratis — respondemos en 1 día hábil.",
      "form.statusOk": "✓ Solicitud enviada — respondemos en 1 día hábil.",
      "form.statusErr": "✕ No se pudo enviar ahora. Intente de nuevo o escríbanos por WhatsApp.",
      "form.statusWa": "Abriendo WhatsApp con su mensaje…",
      "form.sending": "Enviando...",
      "form.errReq": "Campo obligatorio", "form.errEmail": "Ingrese un correo válido",

      "footer.nav": "Navegación", "footer.services": "Servicios", "footer.contact": "Contacto",
      "footer.rights": "Todos los derechos reservados.", "footer.top": "Volver arriba ↑",

      "aria.lang": "Seleccionar idioma", "aria.menu": "Abrir menú", "aria.close": "Cerrar menú",
      "aria.whats": "Hablar por WhatsApp", "aria.lbClose": "Cerrar", "aria.lbPrev": "Anterior", "aria.lbNext": "Siguiente",

      "wa.tip": "Hable con un albañil",
      "wa.msg": "¡Hola! Vine desde su sitio web y quisiera un presupuesto de masonry.",
      "wa.formIntro": "¡Hola! Quisiera un presupuesto."
    }
  };

  let lang = "en";

  function t(key) {
    return (dict[lang] && dict[lang][key] != null) ? dict[lang][key]
         : (dict.en[key] != null ? dict.en[key] : key);
  }

  function apply() {
    document.documentElement.lang = (lang === "pt") ? "pt-BR" : lang;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.setAttribute("placeholder", t(el.dataset.i18nPh)); });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    document.title = t("meta.title");
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.desc"));
    document.querySelectorAll("[data-lang]").forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    document.dispatchEvent(new CustomEvent("i18n:applied", { detail: { lang: lang } }));
  }

  function setLang(l) {
    if (!dict[l]) return;
    lang = l;
    try { localStorage.setItem("pf_lang", l); } catch (e) {}
    apply();
  }

  function init() {
    let saved = null;
    try { saved = localStorage.getItem("pf_lang"); } catch (e) {}
    if (saved && dict[saved]) {
      lang = saved;
    } else {
      const n = (navigator.language || "en").slice(0, 2).toLowerCase();
      lang = dict[n] ? n : "en";
    }
    apply();
    document.querySelectorAll("[data-lang]").forEach(b =>
      b.addEventListener("click", () => setLang(b.dataset.lang)));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  return { t: t, setLang: setLang, get lang() { return lang; } };
})();
