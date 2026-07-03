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

      "nav.services": "Services", "nav.about": "About", "nav.process": "How it works",
      "nav.works": "Projects", "nav.testimonials": "Reviews", "nav.contact": "Contact",
      "nav.cta": "Free estimate",

      "hero.eyebrow": "Masonry • Pavers • Concrete",
      "hero.title": "Masonry built to <span class=\"hl\">last</span> for generations.",
      "hero.subtitle": "Pavers, brick, concrete, stone, tile, sidewalks, curbs and foundations — solid craftsmanship serving Long Branch and all of Monmouth County, NJ.",
      "hero.btnWhats": "Chat on WhatsApp", "hero.btnWorks": "See our work",
      "hero.trust1": "Serving all of Monmouth County",
      "hero.trust2": "Free estimates",
      "hero.trust3": "Quality craftsmanship",
      "hero.cardT": "Trusted across Monmouth County",

      "stat1": "Years of experience", "stat2": "Projects completed",
      "stat3": "sq ft built", "stat4": "Happy clients",

      "services.eyebrow": "What we do", "services.title": "Complete masonry solutions",
      "services.lead": "From the foundation to the finishing touches, we handle every step of your masonry project.",
      "svc1.t": "Pavers", "svc1.d": "Paver driveways, patios and walkways installed with precision — beautiful, durable and built to drain right.",
      "svc2.t": "Brick", "svc2.d": "Brick walls, veneer, steps and repairs — classic brickwork with clean, even joints that last.",
      "svc3.t": "Concrete", "svc3.d": "Driveways, slabs, steps and flatwork — properly graded, reinforced and finished concrete.",
      "svc4.t": "Stone", "svc4.d": "Natural stone walls, veneer and accents that bring timeless character to your home.",
      "svc5.t": "Tile", "svc5.d": "Tile installation done right — level, aligned and sealed, indoors and out.",
      "svc6.t": "Sidewalk & Curb", "svc6.d": "Sidewalks and curbs built or replaced to code — smooth, safe and up to township standards.",
      "svc7.t": "Foundation", "svc7.d": "Footings, foundations and structural repairs — the solid base every project depends on.",
      "svc8.t": "Something else in mind?", "svc8.d": "Tell us about your project — the estimate is free.",

      "reels.eyebrow": "Instagram",
      "reels.title": "See our work in action",
      "reels.lead": "Behind-the-scenes, before & after and finished projects — follow us on Instagram.",
      "reels.soon": "Video coming soon",
      "reels.handle": "pfmasonry", "reels.follow": "Follow",
      "reels.btn": "View on Instagram",
      "reels.prev": "Previous", "reels.next": "Next",

      "about.eyebrow": "About us", "about.title": "Masonry specialists who take pride in every wall",
      "about.p1": "PF Construction Masonry is based in Long Branch, NJ, serving homes and businesses across Monmouth County. From pavers and brick to concrete, stone, tile and foundations, we build it solid — and we build it right.",
      "about.p2": "From the first estimate to the final cleanup, you deal directly with us — clear pricing, quality materials and craftsmanship that stands the test of time.",
      "about.c1": "Skilled, experienced crew", "about.c2": "Quality materials",
      "about.c3": "On-time, clean job sites", "about.c4": "Clear estimates, no surprises",
      "about.btn": "Talk to our team", "about.badge": "years building strong",

      "process.eyebrow": "How it works", "process.title": "From estimate to finished project in 4 steps",
      "process.lead": "A simple, transparent process at every stage.",
      "step1.t": "Visit & Assessment", "step1.d": "We come to you, look at the site and measure everything precisely.",
      "step2.t": "Estimate & Materials", "step2.d": "We present material options and a clear, no-surprise estimate.",
      "step3.t": "Construction", "step3.d": "We prep the base and build with an experienced, meticulous crew.",
      "step4.t": "Delivery & Clean-up", "step4.d": "We finish on time and leave the site clean and ready to enjoy.",

      "gallery.eyebrow": "Projects", "gallery.title": "Work that speaks for itself",
      "gallery.lead": "A few of the projects we've built.",
      "filter.all": "All", "filter.paver": "Pavers", "filter.brick": "Brick",
      "filter.stone": "Stone", "filter.concrete": "Concrete",
      "work1.tag": "Pavers", "work1.name": "Paver patio",
      "work2.tag": "Brick", "work2.name": "Brick wall",
      "work3.tag": "Stone", "work3.name": "Garden stone wall",
      "work4.tag": "Concrete", "work4.name": "Concrete driveway",
      "work5.tag": "Pavers", "work5.name": "Outdoor patio",
      "work6.tag": "Stone", "work6.name": "Stone patio",

      "cta.title": "Ready to start your masonry project?",
      "cta.text": "Pavers, brick, concrete, stone and more — built solid, delivered on time.",
      "cta.btn": "Get a free estimate",

      "test.eyebrow": "Reviews", "test.title": "What our clients say",
      "t1.q": "“They rebuilt our paver driveway and it looks amazing. Straight lines, perfect pitch — true professionals.”",
      "t1.n": "Michael R.", "t1.r": "Homeowner, Long Branch",
      "t2.q": "“Professional from start to finish. The estimate was exactly as agreed, no surprises.”",
      "t2.n": "Sandra M.", "t2.r": "Homeowner, Ocean Township",
      "t3.q": "“They replaced our sidewalk and steps quickly and left everything spotless. Highly recommend.”",
      "t3.n": "James T.", "t3.r": "Business owner, West Long Branch",

      "contact.eyebrow": "Contact", "contact.title": "Let's build your project",
      "contact.lead": "Tell us what you need. The estimate is free with no obligation.",
      "contact.addrL": "Service area", "contact.addrV": "Long Branch, NJ — serving all of Monmouth County",
      "contact.phoneL": "Phone / WhatsApp", "contact.emailL": "Email",

      "form.name": "Full name", "form.namePh": "Your name",
      "form.email": "Email", "form.emailPh": "you@email.com",
      "form.phone": "Phone / WhatsApp",
      "form.service": "Service type", "form.opt0": "Select an option",
      "form.opt1": "Pavers", "form.opt2": "Brick", "form.opt3": "Concrete",
      "form.opt4": "Stone", "form.opt5": "Tile", "form.opt6": "Sidewalk / Curb",
      "form.opt7": "Foundation", "form.opt8": "Other",
      "form.message": "Message", "form.messagePh": "Tell us a bit about your project...",
      "form.submit": "Send message",
      "form.note": "Free estimate — we reply within one business day.",
      "form.statusOk": "✅ Message sent! We'll be in touch soon.",
      "form.statusErr": "❌ Couldn't send right now. Please try again or reach us on WhatsApp.",
      "form.statusWa": "Opening WhatsApp with your message…",
      "form.sending": "Sending...",
      "form.errReq": "Required field", "form.errEmail": "Enter a valid email",

      "footer.desc": "Masonry with quality, on-time delivery and transparency. From the foundation to the final detail.",
      "footer.nav": "Navigation", "footer.services": "Services", "footer.contact": "Contact",
      "footer.rights": "All rights reserved.",
      "footer.credit": "Built with care to grow your business.",

      "aria.lang": "Select language", "aria.menu": "Open menu",
      "aria.whats": "Chat on WhatsApp", "aria.toTop": "Back to top",
      "aria.lbClose": "Close", "aria.lbPrev": "Previous", "aria.lbNext": "Next",

      "wa.msg": "Hi! I came from your website and would like a masonry estimate.",
      "wa.formIntro": "Hi! I'd like an estimate."
    },

    /* =========================== PORTUGUÊS =========================== */
    pt: {
      "meta.title": "PF Construction Masonry — Masonry, Pavers & Concreto em Monmouth County, NJ",
      "meta.desc": "Especialistas em masonry em Long Branch, NJ: pavers, tijolo, concreto, pedra, azulejo, calçadas, meio-fio e fundações. Atendemos todo o Monmouth County.",

      "nav.services": "Serviços", "nav.about": "Sobre", "nav.process": "Como funciona",
      "nav.works": "Projetos", "nav.testimonials": "Depoimentos", "nav.contact": "Contato",
      "nav.cta": "Orçamento grátis",

      "hero.eyebrow": "Masonry • Pavers • Concreto",
      "hero.title": "Masonry feito para <span class=\"hl\">durar</span> gerações.",
      "hero.subtitle": "Pavers, tijolo, concreto, pedra, azulejo, calçadas, meio-fio e fundações — mão de obra sólida atendendo Long Branch e todo o Monmouth County, NJ.",
      "hero.btnWhats": "Falar no WhatsApp", "hero.btnWorks": "Ver nossos projetos",
      "hero.trust1": "Atendemos todo o Monmouth County",
      "hero.trust2": "Orçamento grátis",
      "hero.trust3": "Acabamento de qualidade",
      "hero.cardT": "Confiança em todo o Monmouth County",

      "stat1": "Anos de experiência", "stat2": "Projetos concluídos",
      "stat3": "sq ft construídos", "stat4": "Clientes satisfeitos",

      "services.eyebrow": "O que fazemos", "services.title": "Soluções completas em masonry",
      "services.lead": "Da fundação aos acabamentos finais, cuidamos de cada etapa do seu projeto.",
      "svc1.t": "Pavers", "svc1.d": "Entradas de carro, pátios e caminhos em pavers instalados com precisão — bonitos, duráveis e com drenagem correta.",
      "svc2.t": "Tijolo", "svc2.d": "Muros, revestimentos, degraus e reparos em tijolo — alvenaria clássica com juntas limpas e uniformes.",
      "svc3.t": "Concreto", "svc3.d": "Entradas, lajes, degraus e pisos de concreto — nivelados, reforçados e com acabamento correto.",
      "svc4.t": "Pedra", "svc4.d": "Muros, revestimentos e detalhes em pedra natural que trazem caráter atemporal à sua casa.",
      "svc5.t": "Azulejo", "svc5.d": "Instalação de azulejos e porcelanato bem feita — nivelada, alinhada e vedada, dentro e fora de casa.",
      "svc6.t": "Calçada & Meio-fio", "svc6.d": "Calçadas e meios-fios construídos ou substituídos dentro das normas — lisos, seguros e no padrão da prefeitura.",
      "svc7.t": "Fundação", "svc7.d": "Sapatas, fundações e reparos estruturais — a base sólida da qual todo projeto depende.",
      "svc8.t": "Tem outra ideia em mente?", "svc8.d": "Conte sobre o seu projeto — o orçamento é grátis.",

      "reels.eyebrow": "Instagram",
      "reels.title": "Veja nosso trabalho em ação",
      "reels.lead": "Bastidores, antes e depois e projetos entregues — acompanhe no nosso Instagram.",
      "reels.soon": "Vídeo em breve",
      "reels.handle": "pfmasonry", "reels.follow": "Seguir",
      "reels.btn": "Ver no Instagram",
      "reels.prev": "Anterior", "reels.next": "Próximo",

      "about.eyebrow": "Quem somos", "about.title": "Especialistas em masonry, com orgulho de cada parede",
      "about.p1": "A PF Construction Masonry fica em Long Branch, NJ, e atende casas e comércios em todo o Monmouth County. De pavers e tijolo a concreto, pedra, azulejo e fundações, construímos sólido — e construímos certo.",
      "about.p2": "Do primeiro orçamento à limpeza final, você trata direto com a gente — preço claro, materiais de qualidade e um acabamento que resiste ao tempo.",
      "about.c1": "Equipe experiente e qualificada", "about.c2": "Materiais de qualidade",
      "about.c3": "Prazo cumprido e obra limpa", "about.c4": "Orçamento claro, sem surpresas",
      "about.btn": "Fale com a nossa equipe", "about.badge": "anos construindo sólido",

      "process.eyebrow": "Como funciona", "process.title": "Do orçamento ao projeto pronto em 4 passos",
      "process.lead": "Um processo simples e transparente em cada etapa.",
      "step1.t": "Visita & Avaliação", "step1.d": "Vamos até você, avaliamos o local e medimos tudo com precisão.",
      "step2.t": "Orçamento & Materiais", "step2.d": "Apresentamos as opções de material e um orçamento claro, sem surpresas.",
      "step3.t": "Construção", "step3.d": "Preparamos a base e construímos com equipe experiente e caprichosa.",
      "step4.t": "Entrega & Limpeza", "step4.d": "Entregamos no prazo, com o local limpo e pronto para usar.",

      "gallery.eyebrow": "Projetos", "gallery.title": "Trabalho que fala por si",
      "gallery.lead": "Alguns dos projetos que construímos.",
      "filter.all": "Todos", "filter.paver": "Pavers", "filter.brick": "Tijolo",
      "filter.stone": "Pedra", "filter.concrete": "Concreto",
      "work1.tag": "Pavers", "work1.name": "Pátio em pavers",
      "work2.tag": "Tijolo", "work2.name": "Muro de tijolo",
      "work3.tag": "Pedra", "work3.name": "Muro de pedra",
      "work4.tag": "Concreto", "work4.name": "Entrada em concreto",
      "work5.tag": "Pavers", "work5.name": "Pátio externo",
      "work6.tag": "Pedra", "work6.name": "Pátio em pedra",

      "cta.title": "Pronto para começar o seu projeto?",
      "cta.text": "Pavers, tijolo, concreto, pedra e mais — construído sólido e entregue no prazo.",
      "cta.btn": "Quero um orçamento grátis",

      "test.eyebrow": "Depoimentos", "test.title": "O que dizem nossos clientes",
      "t1.q": "“Refizeram a entrada de pavers e ficou incrível. Linhas retas, caimento perfeito — profissionais de verdade.”",
      "t1.n": "Michael R.", "t1.r": "Cliente residencial, Long Branch",
      "t2.q": "“Profissionais do começo ao fim. O orçamento foi exatamente o combinado, sem surpresas.”",
      "t2.n": "Sandra M.", "t2.r": "Cliente residencial, Ocean Township",
      "t3.q": "“Trocaram a calçada e os degraus rapidinho e deixaram tudo limpo. Recomendo muito.”",
      "t3.n": "James T.", "t3.r": "Empresário, West Long Branch",

      "contact.eyebrow": "Contato", "contact.title": "Vamos construir o seu projeto?",
      "contact.lead": "Conte o que você precisa. O orçamento é gratuito e sem compromisso.",
      "contact.addrL": "Área de atendimento", "contact.addrV": "Long Branch, NJ — atendemos todo o Monmouth County",
      "contact.phoneL": "Telefone / WhatsApp", "contact.emailL": "E-mail",

      "form.name": "Nome completo", "form.namePh": "Seu nome",
      "form.email": "E-mail", "form.emailPh": "voce@email.com",
      "form.phone": "Telefone / WhatsApp",
      "form.service": "Tipo de serviço", "form.opt0": "Selecione uma opção",
      "form.opt1": "Pavers", "form.opt2": "Tijolo", "form.opt3": "Concreto",
      "form.opt4": "Pedra", "form.opt5": "Azulejo", "form.opt6": "Calçada / Meio-fio",
      "form.opt7": "Fundação", "form.opt8": "Outro",
      "form.message": "Mensagem", "form.messagePh": "Conte um pouco sobre o seu projeto...",
      "form.submit": "Enviar mensagem",
      "form.note": "Orçamento grátis — respondemos em até 1 dia útil.",
      "form.statusOk": "✅ Mensagem enviada! Em breve entraremos em contato.",
      "form.statusErr": "❌ Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.",
      "form.statusWa": "Abrindo o WhatsApp com a sua mensagem…",
      "form.sending": "Enviando...",
      "form.errReq": "Campo obrigatório", "form.errEmail": "Digite um e-mail válido",

      "footer.desc": "Masonry com qualidade, prazo e transparência. Da fundação ao detalhe final.",
      "footer.nav": "Navegação", "footer.services": "Serviços", "footer.contact": "Contato",
      "footer.rights": "Todos os direitos reservados.",
      "footer.credit": "Feito com cuidado para crescer com o seu negócio.",

      "aria.lang": "Selecionar idioma", "aria.menu": "Abrir menu",
      "aria.whats": "Falar no WhatsApp", "aria.toTop": "Voltar ao topo",
      "aria.lbClose": "Fechar", "aria.lbPrev": "Anterior", "aria.lbNext": "Próxima",

      "wa.msg": "Olá! Vim pelo site e gostaria de um orçamento de masonry.",
      "wa.formIntro": "Olá! Gostaria de um orçamento."
    },

    /* ============================ ESPAÑOL ============================ */
    es: {
      "meta.title": "PF Construction Masonry — Masonry, Pavers y Concreto en Monmouth County, NJ",
      "meta.desc": "Especialistas en masonry en Long Branch, NJ: pavers, ladrillo, concreto, piedra, azulejo, aceras, bordillos y cimientos. Servimos todo Monmouth County.",

      "nav.services": "Servicios", "nav.about": "Nosotros", "nav.process": "Cómo funciona",
      "nav.works": "Proyectos", "nav.testimonials": "Opiniones", "nav.contact": "Contacto",
      "nav.cta": "Presupuesto gratis",

      "hero.eyebrow": "Masonry • Pavers • Concreto",
      "hero.title": "Masonry hecho para <span class=\"hl\">durar</span> generaciones.",
      "hero.subtitle": "Pavers, ladrillo, concreto, piedra, azulejo, aceras, bordillos y cimientos — mano de obra sólida sirviendo a Long Branch y todo Monmouth County, NJ.",
      "hero.btnWhats": "Hablar por WhatsApp", "hero.btnWorks": "Ver proyectos",
      "hero.trust1": "Servimos todo Monmouth County",
      "hero.trust2": "Presupuesto gratis",
      "hero.trust3": "Acabado de calidad",
      "hero.cardT": "Confianza en todo Monmouth County",

      "stat1": "Años de experiencia", "stat2": "Proyectos completados",
      "stat3": "sq ft construidos", "stat4": "Clientes satisfechos",

      "services.eyebrow": "Lo que hacemos", "services.title": "Soluciones completas en masonry",
      "services.lead": "Desde los cimientos hasta los acabados finales, cuidamos cada etapa de su proyecto.",
      "svc1.t": "Pavers", "svc1.d": "Entradas, patios y caminos de pavers instalados con precisión — hermosos, duraderos y con buen drenaje.",
      "svc2.t": "Ladrillo", "svc2.d": "Muros, revestimientos, escalones y reparaciones en ladrillo — albañilería clásica con juntas limpias y uniformes.",
      "svc3.t": "Concreto", "svc3.d": "Entradas, losas, escalones y pisos de concreto — nivelados, reforzados y bien terminados.",
      "svc4.t": "Piedra", "svc4.d": "Muros, revestimientos y detalles en piedra natural que dan un carácter atemporal a su casa.",
      "svc5.t": "Azulejo", "svc5.d": "Instalación de azulejos bien hecha — nivelada, alineada y sellada, dentro y fuera de casa.",
      "svc6.t": "Acera & Bordillo", "svc6.d": "Aceras y bordillos construidos o reemplazados según las normas — lisos, seguros y al estándar del municipio.",
      "svc7.t": "Cimientos", "svc7.d": "Zapatas, cimientos y reparaciones estructurales — la base sólida de la que depende todo proyecto.",
      "svc8.t": "¿Tiene otra idea en mente?", "svc8.d": "Cuéntenos sobre su proyecto — el presupuesto es gratis.",

      "reels.eyebrow": "Instagram",
      "reels.title": "Vea nuestro trabajo en acción",
      "reels.lead": "Detrás de escena, antes y después y proyectos terminados — síganos en Instagram.",
      "reels.soon": "Video próximamente",
      "reels.handle": "pfmasonry", "reels.follow": "Seguir",
      "reels.btn": "Ver en Instagram",
      "reels.prev": "Anterior", "reels.next": "Siguiente",

      "about.eyebrow": "Quiénes somos", "about.title": "Especialistas en masonry, orgullosos de cada pared",
      "about.p1": "PF Construction Masonry está en Long Branch, NJ, y sirve a casas y negocios en todo Monmouth County. De pavers y ladrillo a concreto, piedra, azulejo y cimientos, construimos sólido — y construimos bien.",
      "about.p2": "Del primer presupuesto a la limpieza final, usted trata directamente con nosotros — precios claros, materiales de calidad y un acabado que resiste el paso del tiempo.",
      "about.c1": "Equipo experimentado y calificado", "about.c2": "Materiales de calidad",
      "about.c3": "Plazos cumplidos y obra limpia", "about.c4": "Presupuesto claro, sin sorpresas",
      "about.btn": "Hable con nuestro equipo", "about.badge": "años construyendo sólido",

      "process.eyebrow": "Cómo funciona", "process.title": "Del presupuesto al proyecto listo en 4 pasos",
      "process.lead": "Un proceso simple y transparente en cada etapa.",
      "step1.t": "Visita y Evaluación", "step1.d": "Vamos a su propiedad, evaluamos el sitio y medimos todo con precisión.",
      "step2.t": "Presupuesto y Materiales", "step2.d": "Presentamos las opciones de material y un presupuesto claro, sin sorpresas.",
      "step3.t": "Construcción", "step3.d": "Preparamos la base y construimos con un equipo experimentado y esmerado.",
      "step4.t": "Entrega y Limpieza", "step4.d": "Terminamos a tiempo y dejamos el sitio limpio y listo para disfrutar.",

      "gallery.eyebrow": "Proyectos", "gallery.title": "Trabajo que habla por sí solo",
      "gallery.lead": "Algunos de los proyectos que construimos.",
      "filter.all": "Todos", "filter.paver": "Pavers", "filter.brick": "Ladrillo",
      "filter.stone": "Piedra", "filter.concrete": "Concreto",
      "work1.tag": "Pavers", "work1.name": "Patio de pavers",
      "work2.tag": "Ladrillo", "work2.name": "Muro de ladrillo",
      "work3.tag": "Piedra", "work3.name": "Muro de piedra",
      "work4.tag": "Concreto", "work4.name": "Entrada de concreto",
      "work5.tag": "Pavers", "work5.name": "Patio exterior",
      "work6.tag": "Piedra", "work6.name": "Patio de piedra",

      "cta.title": "¿Listo para empezar su proyecto?",
      "cta.text": "Pavers, ladrillo, concreto, piedra y más — construido sólido y entregado a tiempo.",
      "cta.btn": "Quiero un presupuesto gratis",

      "test.eyebrow": "Opiniones", "test.title": "Lo que dicen nuestros clientes",
      "t1.q": "“Rehicieron nuestra entrada de pavers y quedó increíble. Líneas rectas, pendiente perfecta — verdaderos profesionales.”",
      "t1.n": "Michael R.", "t1.r": "Cliente residencial, Long Branch",
      "t2.q": "“Profesionales de principio a fin. El presupuesto fue exactamente lo acordado, sin sorpresas.”",
      "t2.n": "Sandra M.", "t2.r": "Cliente residencial, Ocean Township",
      "t3.q": "“Reemplazaron la acera y los escalones rápido y dejaron todo impecable. Muy recomendados.”",
      "t3.n": "James T.", "t3.r": "Empresario, West Long Branch",

      "contact.eyebrow": "Contacto", "contact.title": "Construyamos su proyecto",
      "contact.lead": "Cuéntenos qué necesita. El presupuesto es gratis y sin compromiso.",
      "contact.addrL": "Área de servicio", "contact.addrV": "Long Branch, NJ — servimos todo Monmouth County",
      "contact.phoneL": "Teléfono / WhatsApp", "contact.emailL": "Correo",

      "form.name": "Nombre completo", "form.namePh": "Su nombre",
      "form.email": "Correo electrónico", "form.emailPh": "usted@email.com",
      "form.phone": "Teléfono / WhatsApp",
      "form.service": "Tipo de servicio", "form.opt0": "Seleccione una opción",
      "form.opt1": "Pavers", "form.opt2": "Ladrillo", "form.opt3": "Concreto",
      "form.opt4": "Piedra", "form.opt5": "Azulejo", "form.opt6": "Acera / Bordillo",
      "form.opt7": "Cimientos", "form.opt8": "Otro",
      "form.message": "Mensaje", "form.messagePh": "Cuéntenos un poco sobre su proyecto...",
      "form.submit": "Enviar mensaje",
      "form.note": "Presupuesto gratis — respondemos en 1 día hábil.",
      "form.statusOk": "✅ ¡Mensaje enviado! Nos pondremos en contacto pronto.",
      "form.statusErr": "❌ No se pudo enviar ahora. Intente de nuevo o escríbanos por WhatsApp.",
      "form.statusWa": "Abriendo WhatsApp con su mensaje…",
      "form.sending": "Enviando...",
      "form.errReq": "Campo obligatorio", "form.errEmail": "Ingrese un correo válido",

      "footer.desc": "Masonry con calidad, plazos cumplidos y transparencia. De los cimientos al detalle final.",
      "footer.nav": "Navegación", "footer.services": "Servicios", "footer.contact": "Contacto",
      "footer.rights": "Todos los derechos reservados.",
      "footer.credit": "Hecho con cuidado para crecer con su negocio.",

      "aria.lang": "Seleccionar idioma", "aria.menu": "Abrir menú",
      "aria.whats": "Hablar por WhatsApp", "aria.toTop": "Volver arriba",
      "aria.lbClose": "Cerrar", "aria.lbPrev": "Anterior", "aria.lbNext": "Siguiente",

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
