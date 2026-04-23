function decodeElementorPopupIdFromHref(href) {
  if (!href || href[0] !== "#") return null;
  const decoded = decodeURIComponent(href.slice(1));
  if (!decoded.startsWith("elementor-action:")) return null;

  const qs = decoded.slice("elementor-action:".length);
  const params = new URLSearchParams(qs);
  if (params.get("action") !== "popup:open") return null;

  const settingsB64 = params.get("settings");
  if (!settingsB64) return null;

  try {
    const json = atob(settingsB64);
    const settings = JSON.parse(json);
    return settings?.id ? String(settings.id) : null;
  } catch {
    return null;
  }
}

function ensureLazyAssetsEager() {
  document.querySelectorAll("img[data-lazy-src]").forEach((img) => {
    const src = img.getAttribute("data-lazy-src");
    if (src) img.setAttribute("src", src);

    const srcset = img.getAttribute("data-lazy-srcset");
    if (srcset) img.setAttribute("srcset", srcset);

    const sizes = img.getAttribute("data-lazy-sizes");
    if (sizes) img.setAttribute("sizes", sizes);
  });

  document.querySelectorAll("iframe[data-lazy-src]").forEach((iframe) => {
    const src = iframe.getAttribute("data-lazy-src");
    if (src) iframe.setAttribute("src", src);
  });

  document
    .querySelectorAll(".e-con.e-parent:not(.e-lazyloaded)")
    .forEach((el) => el.classList.add("e-lazyloaded"));
}

function setTextContent(target, text) {
  if (target) target.textContent = text;
}

function setHTMLContent(target, html) {
  if (target) target.innerHTML = html;
}

function applyMobileHeroImage() {
  if (window.innerWidth > 767) return;

  const mobileHeroImage = "assets/media/Frame_6_1.png";
  const selectors = [
    ".elementor-1953 .elementor-element.elementor-element-2a2dfad",
    ".elementor-1953 .elementor-element.elementor-element-2a2dfad > .elementor-motion-effects-container > .elementor-motion-effects-layer",
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.style.setProperty(
        "background-image",
        `url("${mobileHeroImage}")`,
        "important"
      );
      node.style.setProperty("background-position", "center top", "important");
      node.style.setProperty("background-size", "cover", "important");
      node.style.setProperty("background-repeat", "no-repeat", "important");
    });
  });
}

function normalizePopupCopy(popup) {
  if (!popup) return;

  const popupId = String(popup.getAttribute("data-elementor-id") || "");
  const popupTextById = {
    "2793":
      "A chave que abre diagn\u00f3sticos que outros exames n\u00e3o alcan\u00e7am. Permite investigar, tratar e preparar o corpo com precis\u00e3o que nenhum exame externo entrega.",
    "2868":
      "Cirurgia minimamente invasiva com recupera\u00e7\u00e3o mais r\u00e1pida, menos dor e maior precis\u00e3o diagn\u00f3stica e terap\u00eautica.",
    "2879":
      "Investiga\u00e7\u00e3o e tratamento cir\u00fargico de uma das condi\u00e7\u00f5es mais subdiagnosticadas da medicina feminina.",
    "2872":
      "Avalia\u00e7\u00e3o aprofundada e conduta cir\u00fargica ou cl\u00ednica baseada em evid\u00eancias cient\u00edficas.",
    "2874":
      "Diagn\u00f3stico e remo\u00e7\u00e3o atrav\u00e9s de histeroscopia \u2014 procedimento preciso, r\u00e1pido e com recupera\u00e7\u00e3o imediata.",
  };

  setTextContent(
    popup.querySelector(".elementor-element-2a40983 .elementor-image-box-title"),
    "CRM-BA 17101 \u00b7 RQE 22832 \u00b7 RQE 13316"
  );
  setTextContent(
    popup.querySelector(".elementor-element-2a40983 .elementor-image-box-description"),
    "Cirurgia Ginecol\u00f3gica \u00b7 Reprodu\u00e7\u00e3o Humana"
  );

  if (popupId === "2876") {
    setHTMLContent(
      popup.querySelector(".elementor-element-c77bfc7 p"),
      "<strong>Investiga\u00e7\u00e3o de Infertilidade</strong><br>Para mulheres que est\u00e3o tentando engravidar sem sucesso. Protocolo investigativo completo, sem suposi\u00e7\u00f5es.<br><br><strong>Reprodu\u00e7\u00e3o Assistida</strong><br>Acompanhamento completo e encaminhamento estrat\u00e9gico para os melhores protocolos dispon\u00edveis.<br><br><strong>Reserva Ovariana</strong><br>Avalia\u00e7\u00e3o da sua janela de fertilidade com clareza e honestidade \u2014 para tomar decis\u00f5es informadas.<br><br><strong>Capta\u00e7\u00e3o de \u00d3vulos</strong><br>Procedimento especializado para coleta de \u00f3vulos, parte essencial do processo de reprodu\u00e7\u00e3o assistida."
    );
    return;
  }

  setTextContent(
    popup.querySelector(".elementor-element-c77bfc7 p"),
    popupTextById[popupId] || ""
  );
}

function normalizeLucianoCopy() {
  document
    .querySelector(".lg-header__nav")
    ?.setAttribute("aria-label", "Navega\u00e7\u00e3o principal");

  setHTMLContent(
    document.querySelector(".elementor-element-6845b24 .elementor-image-box-title"),
    "N\u00e3o trato sintoma.<br>Investigo a causa."
  );
  setTextContent(
    document.querySelector(".elementor-element-6845b24 .elementor-image-box-description"),
    "Há 20 anos, ofereço à mulher o que é raro na medicina: precisão técnica com humanidade real. Um diagnóstico que vai a fundo. Uma resposta que você finalmente entende."
  );
  setTextContent(
    document.querySelector(".lg-hero-secondary"),
    "Conhe\u00e7a o Dr. Luciano"
  );
  setTextContent(
    document.querySelector(".elementor-element-c53063a .elementor-image-box-title"),
    "CRM-BA 17101 \u00b7 RQE 22832 \u00b7 RQE 13316"
  );
  setTextContent(
    document.querySelector(".elementor-element-c53063a .elementor-image-box-description"),
    "Cirurgia Ginecol\u00f3gica \u00b7 Reprodu\u00e7\u00e3o Humana"
  );

  setTextContent(
    document.querySelector(".elementor-element-844b7a0 .elementor-image-box-title"),
    "Um olhar que vai al\u00e9m do diagn\u00f3stico convencional."
  );
  setHTMLContent(
    document.querySelector(".elementor-element-844b7a0 .elementor-image-box-description"),
    "Sua especialidade \u00e9 encontrar o que outros exames n\u00e3o alcan\u00e7am.<br>Cada tratamento parte de uma investiga\u00e7\u00e3o honesta \u2014 n\u00e3o de suposi\u00e7\u00f5es."
  );
  setTextContent(
    document.querySelector(".elementor-element-c9a0e0c a"),
    "P\u00f3lipos Uterinos"
  );
  setTextContent(
    document.querySelector(".elementor-element-771b746 a"),
    "Investiga\u00e7\u00e3o de Infertilidade"
  );

  const doresSection = document.querySelector("#dores");
  doresSection?.setAttribute("aria-label", "Indica\u00e7\u00f5es");
  setTextContent(
    document.querySelector(".lg-dores-eyebrow"),
    "Para quem \u00e9 o Dr. Luciano"
  );
  setTextContent(
    document.querySelector(".lg-dores-title"),
    "O acompanhamento certo para quem ainda n\u00e3o encontrou respostas."
  );

  const doresTexts = [
    'Sentem dores que os exames "n\u00e3o explicam".',
    "Tiveram tentativas de gravidez sem resultado.",
    "Ciclos irregulares sem diagn\u00f3stico definitivo.",
    "Receberam condutas vagas e diagn\u00f3sticos gen\u00e9ricos.",
    "T\u00eam medo de procedimentos desnecess\u00e1rios.",
    "Sentem que nunca foram realmente ouvidas.",
  ];

  document
    .querySelectorAll(".lg-dores-card__text")
    .forEach((item, index) => setTextContent(item, doresTexts[index] || ""));

  setHTMLContent(
    document.querySelector(".lg-footer-kicker"),
    "Pronta para dar o pr\u00f3ximo passo?<br>Agende sua consulta com quem realmente investiga."
  );
  setTextContent(
    document.querySelector(".lg-footer-crm"),
    "CRM-BA 17101 \u00b7 RQE 22832 \u00b7 RQE 13316"
  );
  setTextContent(
    document.querySelector(".lg-footer-disclaimer"),
    "As informa\u00e7\u00f5es deste site t\u00eam car\u00e1ter educacional e n\u00e3o substituem avalia\u00e7\u00e3o m\u00e9dica."
  );

  document
    .querySelectorAll(".elementor-location-popup[data-elementor-id]")
    .forEach((popup) => normalizePopupCopy(popup));
}

function hydratePopupContent(popup) {
  if (!popup) return;

  popup.classList.add("lg-popup-content");

  popup.querySelectorAll("img[data-lazy-src], img").forEach((img) => {
    const lazySrc = img.getAttribute("data-lazy-src");
    if (lazySrc) img.setAttribute("src", lazySrc);

    const lazySrcset = img.getAttribute("data-lazy-srcset");
    if (lazySrcset) img.setAttribute("srcset", lazySrcset);

    const lazySizes = img.getAttribute("data-lazy-sizes");
    if (lazySizes) img.setAttribute("sizes", lazySizes);
  });

  popup.querySelectorAll(".elementor-element-1399485 img").forEach((img) => {
    img.setAttribute("src", "assets/media/avatar-320.webp");
    img.setAttribute("data-lazy-src", "assets/media/avatar-320.webp");
    img.removeAttribute("srcset");
    img.removeAttribute("sizes");
    img.setAttribute("alt", "Dr. Luciano Guerra");
  });

  normalizePopupCopy(popup);
}

function createPopupModalShell(id) {
  const modal = document.createElement("div");
  modal.id = `elementor-popup-modal-${id}`;
  modal.className =
    "dialog-widget dialog-lightbox-widget dialog-type-lightbox elementor-popup-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.style.display = "none";

  const content = document.createElement("div");
  content.className = "dialog-widget-content";

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "dialog-close-button";
  closeBtn.setAttribute("aria-label", "Fechar");
  closeBtn.textContent = "\u00d7";

  const message = document.createElement("div");
  message.className = "dialog-message";

  content.appendChild(closeBtn);
  content.appendChild(message);
  modal.appendChild(content);

  document.body.appendChild(modal);
  return { modal, message, closeBtn };
}

function setupPopups() {
  const stash = document.createElement("div");
  stash.id = "lg-popup-stash";
  stash.style.display = "none";
  document.body.appendChild(stash);

  const popupById = new Map();
  document
    .querySelectorAll(".elementor-location-popup[data-elementor-id]")
    .forEach((popup) => {
      hydratePopupContent(popup);
      popupById.set(String(popup.getAttribute("data-elementor-id")), popup);
      stash.appendChild(popup);
    });

  let active = null;

  function closeActive() {
    if (!active) return;
    if (active.cleanup) active.cleanup();
    active.modal.classList.remove("is-open");
    active.modal.classList.add("is-closing");

    window.setTimeout(() => {
      if (!active) return;

      active.modal.style.display = "none";
      active.modal.classList.remove("is-closing");
      active.modal.removeAttribute("aria-hidden");

      if (active.popup) stash.appendChild(active.popup);
      active.message.innerHTML = "";

      if (active.previouslyFocused && active.previouslyFocused.focus) {
        active.previouslyFocused.focus();
      }
      active = null;
    }, 240);
  }

  function openPopup(id) {
    const popup = popupById.get(String(id));
    if (!popup) return;

    const existing = document.getElementById(`elementor-popup-modal-${id}`);
    const shell = existing
      ? {
          modal: existing,
          message: existing.querySelector(".dialog-message"),
          closeBtn: existing.querySelector(".dialog-close-button"),
        }
      : createPopupModalShell(id);

    if (!shell.modal || !shell.message || !shell.closeBtn) return;

    hydratePopupContent(popup);
    shell.message.innerHTML = "";
    shell.message.appendChild(popup);

    const previouslyFocused = document.activeElement;
    shell.modal.style.display = "flex";
    shell.modal.classList.remove("is-closing");
    requestAnimationFrame(() => {
      shell.modal.classList.add("is-open");
    });
    shell.modal.focus?.();

    const onBackdrop = (evt) => {
      if (evt.target === shell.modal) closeActive();
    };
    const onEsc = (evt) => {
      if (evt.key === "Escape") closeActive();
    };

    shell.modal.addEventListener("click", onBackdrop);
    window.addEventListener("keydown", onEsc);

    shell.closeBtn.onclick = closeActive;

    active = {
      id,
      popup,
      modal: shell.modal,
      message: shell.message,
      previouslyFocused,
      cleanup: () => {
        shell.modal.removeEventListener("click", onBackdrop);
        window.removeEventListener("keydown", onEsc);
      },
    };
  }

  document.addEventListener("click", (evt) => {
    const a = evt.target.closest?.("a[href^=\"#elementor-action\"]");
    if (!a) return;
    const id = decodeElementorPopupIdFromHref(a.getAttribute("href"));
    if (!id) return;
    evt.preventDefault();
    openPopup(id);
  });
}

function setupSwipers() {
  if (typeof window.Swiper !== "function") return;

  document.querySelectorAll(".elementor-widget-reviews").forEach((widget) => {
    const swiperEl = widget.querySelector(".elementor-main-swiper.swiper");
    if (!swiperEl) return;

    let settings = {};
    try {
      settings = JSON.parse(widget.getAttribute("data-settings") || "{}");
    } catch {
      settings = {};
    }

    const paginationEl = widget.querySelector(".swiper-pagination");
    const prevEl = widget.querySelector(".elementor-swiper-button-prev");
    const nextEl = widget.querySelector(".elementor-swiper-button-next");

    const spaceBetween = Number(settings?.space_between?.size ?? 0) || 0;
    const spaceBetweenTablet =
      Number(settings?.space_between_tablet?.size ?? 0) || spaceBetween;
    const spaceBetweenMobile =
      Number(settings?.space_between_mobile?.size ?? 0) || spaceBetween;

    new window.Swiper(swiperEl, {
      slidesPerView: Number(settings?.slides_per_view ?? 1) || 1,
      slidesPerGroup: Number(settings?.slides_to_scroll ?? 1) || 1,
      speed: Number(settings?.speed ?? 600) || 600,
      loop: String(settings?.loop) === "yes",
      spaceBetween,
      pagination:
        settings?.pagination && paginationEl
          ? { el: paginationEl, type: settings.pagination, clickable: false }
          : undefined,
      navigation:
        String(settings?.show_arrows) === "yes" && prevEl && nextEl
          ? { prevEl, nextEl }
          : undefined,
      breakpoints: {
        0: { spaceBetween: spaceBetweenMobile },
        768: { spaceBetween: spaceBetweenTablet },
        1025: { spaceBetween },
      },
    });
  });

  document.querySelectorAll(".elementor-widget-image-carousel").forEach((widget) => {
    const container = widget.querySelector(".elementor-image-carousel-wrapper.swiper");
    if (!container) return;

    let settings = {};
    try {
      settings = JSON.parse(widget.getAttribute("data-settings") || "{}");
    } catch {
      settings = {};
    }

    const slidesDesktop = Number(settings?.slides_to_show ?? 3) || 3;
    const slidesMobile = Number(settings?.slides_to_show_mobile ?? 1) || 1;
    const spaceBetween = Number(settings?.image_spacing_custom?.size ?? 0) || 0;
    const speed = Number(settings?.speed ?? 5000) || 5000;
    const autoplayEnabled = String(settings?.autoplay) === "yes";
    const infinite = String(settings?.infinite) === "yes";
    const delay = Number(settings?.autoplay_speed ?? 0) || 0;

    new window.Swiper(container, {
      slidesPerView: slidesDesktop,
      spaceBetween,
      loop: infinite,
      speed,
      allowTouchMove: true,
      autoplay: autoplayEnabled
        ? { delay, disableOnInteraction: false, pauseOnMouseEnter: false }
        : undefined,
      breakpoints: {
        0: { slidesPerView: slidesMobile },
        768: { slidesPerView: slidesDesktop },
      },
    });
  });
}

function setupScrollReveal() {
  const targets = Array.from(
    new Set(
      Array.from(
        document.querySelectorAll(
          [
            ".scroll-zoom",
            ".scroll-topo",
            ".scroll-esquerda",
            ".scroll-direita",
            ".lg-about-editorial__copy",
            ".lg-about-editorial__identity",
            ".lg-about-editorial__media",
            ".lg-about-editorial__actions",
            "#dores .lg-dores-header",
            "#depoimentos .lg-testimonials-clean__intro",
            "#depoimentos .lg-testimonials-slider",
            "#diferenciais .lg-editorial-head",
            "#diferenciais .lg-premium-card",
            "#jornada .lg-section-head",
            "#jornada .lg-timeline",
            "#jornada .lg-timeline__step",
            "#faq .lg-section-head",
            "#faq .lg-faq li",
            "#agendamento .lg-cta-soft__panel",
            ".lg-footer > *"
          ].join(", ")
        )
      )
    )
  );

  if (!targets.length) return;

  targets.forEach((el) => el.classList.add("lg-reveal"));

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("ativo"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("ativo");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  targets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.88) {
      el.classList.add("ativo");
      return;
    }
    observer.observe(el);
  });
}

function applyLucianoTestimonials() {
  const testimonials = [
    {
      name: "Cl\u00e1udia M.",
      title: "Tratamento de Endometriose",
      text: "\u201cDepois de anos convivendo com dores que todos diziam ser \u2018normais\u2019, o Dr. Luciano foi o primeiro m\u00e9dico que realmente investigou. Fiz a histeroscopia e finalmente entendi o que estava acontecendo no meu corpo.\u201d",
    },
    {
      name: "Marina R.",
      title: "Reprodu\u00e7\u00e3o Assistida",
      text: "\u201cTentei engravidar por 3 anos. O Dr. Luciano foi o \u00fanico que me deu um mapa real do que estava acontecendo. Ele n\u00e3o promete o que n\u00e3o pode entregar \u2014 e isso foi exatamente o que precisei ouvir.\u201d",
    },
    {
      name: "Fernanda T.",
      title: "Cirurgia de Mioma",
      text: "\u201cTive um mioma que outros m\u00e9dicos queriam operar de formas mais invasivas. Com o Dr. Luciano, o procedimento foi minimamente invasivo e me recuperei em dias. Profissional excepcional.\u201d",
    },
  ];

  const items = document.querySelectorAll(
    ".elementor-widget-reviews .elementor-testimonial"
  );

  if (!items.length) return;

  items.forEach((el, index) => {
    const data = testimonials[index % testimonials.length];
    const nameEl = el.querySelector(".elementor-testimonial__name");
    const titleEl = el.querySelector(".elementor-testimonial__title");
    const textEl = el.querySelector(".elementor-testimonial__text");

    if (nameEl) nameEl.textContent = data.name;
    if (titleEl) titleEl.textContent = data.title;
    if (textEl) textEl.textContent = data.text;
  });
}

function setupTestimonialsSlider() {
  document.querySelectorAll("[data-testimonials-slider]").forEach((slider) => {
    const slides = Array.from(
      slider.querySelectorAll("[data-testimonial-slide]")
    );
    const prevBtn = slider.querySelector("[data-testimonial-prev]");
    const nextBtn = slider.querySelector("[data-testimonial-next]");
    const currentEl = slider.querySelector("[data-testimonial-current]");
    const totalEl = slider.querySelector("[data-testimonial-total]");

    if (!slides.length || !prevBtn || !nextBtn || !currentEl || !totalEl) return;

    let currentIndex = 0;
    totalEl.textContent = String(slides.length);

    const render = () => {
      slides.forEach((slide, index) => {
        const isActive = index === currentIndex;
        slide.hidden = !isActive;
        slide.classList.toggle("is-active", isActive);
      });

      currentEl.textContent = String(currentIndex + 1);
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === slides.length - 1;
    };

    prevBtn.addEventListener("click", () => {
      currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      render();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      render();
    });

    render();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  ensureLazyAssetsEager();
  applyMobileHeroImage();
  normalizeLucianoCopy();
  setupPopups();
  setupScrollReveal();
  applyLucianoTestimonials();
  setupTestimonialsSlider();
  setupSwipers();
  normalizeLucianoCopy();
});

