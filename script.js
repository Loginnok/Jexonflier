(() => {
  "use strict";

  const projects = {
    tarifno: {
      number: "10 / DESIGN CASE",
      title: "Тарифно",
      category: "DESIGN / BANKING / TEST ASSIGNMENT",
      description:
        "Банковский landing о сравнении условий обслуживания бизнеса. Дизайн-кейс по тестовому заданию Junior Web Designer: desktop, мобильная версия и повторно используемые компоненты в Figma. Светлая и тёмная зелёная палитра, акцентный CTA и последовательная подача услуги.",
      image: "images/BANK-DESKTOP.png",
      visualTheme: "design",
      type: "Design case / Test assignment",
      field: "Banking / Business services",
      role: "UI design / Responsive design",
      tools: "Figma / Auto Layout / Components",
      url: "https://www.figma.com/design/zcbeuVPFdfLq5jUfQTI15P/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=1-306",
      linkLabel: "Открыть исходный Figma",
      details: [
        {
          title: "Задача",
          text: "Создать понятный лендинг услуги сравнения банковских тарифов для бизнеса. Показать проблему, предложение, этапы работы и действие — получить консультацию."
        },
        {
          title: "Адаптив и система",
          text: "В исходном Figma есть desktop 1440 px и mobile 402 px. Макеты собраны с вертикальным Auto Layout и Hug по высоте. CTA, карточка проблемы и карточка шага вынесены в компоненты."
        },
        {
          title: "Статус проекта",
          text: "Тестовое задание Junior Web Designer, а не сайт реального банковского клиента. Кейс показывает дизайн и структуру макетов. Коммерческий запуск, конверсии и отзывы не заявлены."
        }
      ],
      gallery: [
        { image: "images/BANK-DESKTOP.png", title: "Desktop", caption: "1440 × 2924 · исходный Figma-макет", width: 1440, height: 2924, layout: "wide" },
        { image: "images/BANK-MOBILE.png", title: "Mobile", caption: "402 × 4090 · отдельный адаптивный макет", width: 402, height: 4090 },
        { image: "images/BANK-COMPONENTS.png", title: "Components", caption: "Primary button · Problem card · Step card", width: 460, height: 586, layout: "components" }
      ]
    },

    jexrun: {
      number: "09 / PRODUCT",
      title: "JexRun",
      category: "PRODUCT / N8N / DEVTOOL",
      description:
        "JexRun — n8n pre-production testing tool. Веб-продукт для анализа workflow перед production: потенциальные действия, внешние записи и опасные пути в графе. Собственный Beta-продукт с дизайном интерфейса и разработкой на TypeScript.",
      image: "images/JEXRUN-REPORT.jpg",
      galleryTheme: "product",
      type: "Web product / Public Beta",
      field: "n8n workflow analysis",
      role: "Product design / Web development",
      tools: "TypeScript / n8n workflow analysis / Cloudflare Workers",
      url: "https://jexrun-beta.pyba300961246tyiou39.chatgpt.site",
      linkLabel: "Открыть live Beta",
      details: [
        {
          title: "Задача",
          text: "Помочь n8n-фрилансеру или агентству увидеть потенциальные риски workflow до передачи автоматизации клиенту. Понятный отчёт должен объяснять действия и пути, а не оставаться списком технических статусов."
        },
        {
          title: "Продуктовый путь",
          text: "Попробовать встроенный пример или загрузить JSON → получить отчёт → изучить потенциальные действия, пути риска и checklist → подготовить отчёт к печати. Интерфейс адаптирован для компьютера и телефона."
        },
        {
          title: "Границы Beta",
          text: "Анализ основан на структуре workflow. JexRun не выполняет nodes и не подключает credentials; preview описывает потенциальные действия. Это не полноценный security audit и не гарантия отсутствия ошибок."
        }
      ],
      gallery: [
        { image: "images/JEXRUN-LANDING.jpg", title: "Landing", caption: "Скриншот опубликованной Beta · desktop", width: 1425, height: 891, layout: "wide" },
        { image: "images/JEXRUN-LANDING-MOBILE.jpg", title: "Mobile upload", caption: "Настоящий мобильный интерфейс · 390 px viewport", width: 375, height: 865 },
        { image: "images/JEXRUN-REPORT.jpg", title: "Pre-production report", caption: "Реальный результат анализа встроенного demo workflow", width: 1425, height: 990, layout: "wide" },
        { image: "images/JEXRUN-REPORT-MOBILE.jpg", title: "Mobile report", caption: "Тот же demo-отчёт на мобильном экране", width: 375, height: 865 }
      ]
    },

    vyra: {
      number: "08 / PROJECT",
      title: "VYRA",
      category: "WEB / TRAVEL / MOTION",
      description:
        "Интерактивный концепт сервиса авиабилетов. Кинематографичный первый экран, анимации, подбор демонстрационных рейсов, выбор рейса и сохранение маршрутов. Дизайн и разработка; без продажи реальных билетов.",
      image: "images/VYRA.svg",
      type: "Interactive website / Concept",
      field: "Travel / Airline tickets",
      url: "./vyra/"
    },

    aurel: {
      number: "01 / PROJECT",
      title: "Aurel",
      category: "WEB / PREMIUM",
      description:
        "Премиальный landing page с акцентом на продукт, визуальную подачу и ощущение дорогого digital-бренда.",
      image: "images/AUREL.png",
      type: "Landing page",
      field: "Premium product",
      url: "https://loginnok.github.io/xd/"
    },

    dagestan: {
      number: "02 / PROJECT",
      title: "Dagestan",
      category: "WEB / TRAVEL",
      description:
        "Сайт о Дагестане с визуальным акцентом на атмосферу места, путешествия и сильную подачу контента.",
      image: "images/DAGESTAN.jpg",
      type: "Website",
      field: "Travel / Destination",
      url: "https://clck.su/cQWrJ"
    },

    leather: {
      number: "03 / PROJECT",
      title: "Leather",
      category: "WEB / FASHION",
      description:
        "Минималистичный digital-концепт для fashion-проекта с фокусом на фотографии, продукт и премиальную эстетику.",
      image: "images/LEATHER.jpg",
      type: "Landing page",
      field: "Fashion / Product",
      url: "https://clck.su/yJCnE"
    },

    fitness: {
      number: "04 / PROJECT",
      title: "FitnessPro",
      category: "WEB / FITNESS",
      description:
        "Современный сайт для fitness-направления с акцентом на структуру, динамику и понятный пользовательский путь.",
      image: "images/FITNESS.svg",
      type: "Website",
      field: "Fitness / Digital product",
      url: "https://clck.su/VczEP",
      unavailable: true
    },

    mindflow: {
      number: "05 / PROJECT",
      title: "MindFlow",
      category: "WEB / AI / SAAS",
      description:
        "Концепт сайта AI-ассистента: возможности продукта, демонстрация интерфейса и тарифные планы. Акцент на понятной подаче цифрового сервиса.",
      image: "images/MINDFLOW.jpg",
      type: "Landing page",
      field: "AI / SaaS",
      url: "https://clck.su/lqjLB"
    },

    karelia: {
      number: "06 / PROJECT",
      title: "Karelia",
      category: "WEB / TRAVEL",
      description:
        "Туристический сайт с атмосферной визуальной подачей Карелии, природой и акцентом на впечатление от первого экрана.",
      image: "images/KARELIA.png",
      type: "Website",
      field: "Travel / Tourism",
      url: "https://clck.su/KOHjF"
    },

    psycholog: {
      number: "07 / CLIENT",
      title: "Психолог для мам",
      category: "CLIENT / PSYCHOLOGY",
      description:
        "Реальный клиентский проект психолога. Сайт построен вокруг доверия, спокойной визуальной системы и понятного пути пользователя к записи.",
      image: "images/PSYCHOLOG_MAM.jpg",
      type: "Client website",
      field: "Psychology",
      url: "https://психологдлямам.рф/"
    }
  };

  const body = document.body;
  const loader = document.getElementById("loader");
  const loaderPercent = document.getElementById("loaderPercent");
  const header = document.getElementById("header");
  const progress = document.getElementById("scrollProgress");
  const cursor = document.getElementById("cursorGlow");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const pages = document.querySelectorAll(".page");

  function safe(fn) {
    try {
      fn();
    } catch (error) {
      console.warn("JEXONFLIER:", error);
    }
  }

  function hideLoader() {
    if (!loader) return;

    loader.classList.add("done");

    setTimeout(() => {
      loader.style.display = "none";
      body.classList.remove("loading");
      body.style.overflow = "";
    }, 700);
  }

  let loaderValue = 0;

  const loaderTimer = setInterval(() => {
    loaderValue += Math.floor(Math.random() * 12) + 5;

    if (loaderValue >= 100) {
      loaderValue = 100;
      clearInterval(loaderTimer);
    }

    if (loaderPercent) {
      loaderPercent.textContent = `${loaderValue}%`;

      const bar = document.querySelector(".loader__line span");

      if (bar) {
        bar.style.width = `${loaderValue}%`;
      }
    }

    if (loaderValue >= 100) {
      setTimeout(hideLoader, 250);
    }
  }, 90);

  window.addEventListener("load", () => {
    setTimeout(hideLoader, 300);
  });

  setTimeout(hideLoader, 2500);

  const validPages = new Set([
    "home",
    "works",
    "services",
    "about",
    "contact",
    "project"
  ]);

  function getRoute() {
    let hash = window.location.hash || "#home";

    hash = decodeURIComponent(hash.replace(/^#/, ""));

    if (hash.startsWith("project/")) {
      const slug = hash
        .replace("project/", "")
        .split("/")[0]
        .trim()
        .toLowerCase();

      if (projects[slug]) {
        return {
          page: "project",
          slug
        };
      }

      return {
        page: "works"
      };
    }

    if (validPages.has(hash)) {
      return {
        page: hash
      };
    }

    return {
      page: "home"
    };
  }

  function fillProject(slug) {
    const project = projects[slug];

    if (!project) {
      window.location.hash = "#works";
      return;
    }

    const number = document.getElementById("projectNumber");
    const category = document.getElementById("projectCategory");
    const title = document.getElementById("projectTitle");
    const description = document.getElementById("projectDescription");
    const live = document.getElementById("projectLive");
    const image = document.getElementById("projectImage");
    const imageFrame = document.querySelector(".project-page__image");
    const type = document.getElementById("projectType");
    const field = document.getElementById("projectField");
    const availability = document.getElementById("projectAvailability");
    const role = document.getElementById("projectRole");
    const tools = document.getElementById("projectTools");
    const toolsRow = document.getElementById("projectToolsRow");
    const details = document.getElementById("projectDetails");
    const gallery = document.getElementById("projectGallery");

    if (number) number.textContent = project.number;
    if (category) category.textContent = project.category;
    if (title) title.textContent = project.title;
    if (description) description.textContent = project.description;
    if (type) type.textContent = project.type;
    if (field) field.textContent = project.field;
    if (role) role.textContent = project.role || "Design & Development";
    if (tools) tools.textContent = project.tools || "";
    if (toolsRow) toolsRow.hidden = !project.tools;
    if (details) {
      details.replaceChildren();
      details.hidden = !project.details;
      (project.details || []).forEach((item) => {
        const card = document.createElement("article");
        card.className = "case-detail";
        const heading = document.createElement("h2");
        heading.textContent = item.title;
        const copy = document.createElement("p");
        copy.textContent = item.text;
        card.append(heading, copy);
        details.append(card);
      });
    }
    if (gallery) {
      gallery.replaceChildren();
      gallery.hidden = !project.gallery;
      gallery.classList.toggle("case-gallery--product", project.galleryTheme === "product");
      (project.gallery || []).forEach((item) => {
        const figure = document.createElement("figure");
        figure.className = `case-visual${item.layout ? ` case-visual--${item.layout}` : ""}`;
        const heading = document.createElement("h2");
        heading.textContent = item.title;
        const link = document.createElement("a");
        link.className = "case-visual__frame";
        link.href = item.image;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", `Открыть полный макет: ${item.title}`);
        const preview = document.createElement("img");
        preview.src = item.image;
        preview.alt = `${project.title} — ${item.title}`;
        preview.loading = "lazy";
        preview.width = item.width;
        preview.height = item.height;
        const caption = document.createElement("figcaption");
        caption.textContent = `${item.caption} · открыть целиком `;
        const arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        arrow.setAttribute("class", "portfolio-arrow");
        arrow.setAttribute("viewBox", "0 0 24 24");
        arrow.setAttribute("aria-hidden", "true");
        arrow.setAttribute("focusable", "false");
        const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        arrowPath.setAttribute("d", "M7 17 17 7M7 7h10v10");
        arrow.appendChild(arrowPath);
        caption.appendChild(arrow);
        link.append(preview);
        figure.append(heading, link, caption);
        gallery.append(figure);
      });
    }

    if (availability) {
      availability.hidden = !project.unavailable;
    }

    if (live) {
      live.hidden = !!project.unavailable;
      live.href = project.url;
      live.target = "_blank";
      live.rel = "noopener noreferrer";
      const label = live.querySelector("span");
      if (label) label.textContent = project.linkLabel || "Открыть сайт";
    }

    if (image) {
      if (imageFrame) imageFrame.classList.toggle("project-page__image--design", project.visualTheme === "design");
      image.classList.remove("image-failed");
      image.src = project.image;
      image.alt = project.title;

      image.onerror = () => {
        image.classList.add("image-failed");
      };
    }

    document.title = `${project.title} — JEXONFLIER`;
  }

  function openMobileMenu() {
    if (!mobileMenu) return;

    mobileMenu.classList.add("active");
    body.classList.add("menu-open");

    if (menuToggle) {
      menuToggle.classList.add("active");
      menuToggle.setAttribute("aria-expanded", "true");
    }
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;

    mobileMenu.classList.remove("active");
    body.classList.remove("menu-open");

    if (menuToggle) {
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  }

  function renderRoute() {
    const route = getRoute();

    closeMobileMenu();

    pages.forEach((page) => {
      const isActive = page.dataset.page === route.page;

      page.classList.toggle("active", isActive);
      page.hidden = !isActive;
      page.setAttribute("aria-hidden", isActive ? "false" : "true");
    });

    body.dataset.page = route.page;

    if (route.page === "project") {
      fillProject(route.slug);
    } else {
      document.title = "JEXONFLIER — Digital Design & Websites";
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });

    setTimeout(() => {
      safe(initReveal);
      safe(initTilt);
      safe(initMagnetic);
    }, 50);
  }

  function navigate(hash) {
    if (!hash) {
      hash = "#home";
    }

    if (!hash.startsWith("#")) {
      hash = `#${hash}`;
    }

    if (hash.startsWith("#project/")) {
      const slug = hash
        .replace("#project/", "")
        .split("/")[0]
        .trim()
        .toLowerCase();

      if (!projects[slug]) {
        hash = "#works";
      }
    }

    if (window.location.hash === hash) {
      renderRoute();
      return;
    }

    window.location.hash = hash;
  }

  window.addEventListener("hashchange", renderRoute);
  window.addEventListener("popstate", renderRoute);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!link) return;

    const href = link.getAttribute("href");

    if (!href) return;
    if (!href.startsWith("#")) return;
    if (href === "#") return;

    event.preventDefault();

    navigate(href);
  });

  if (menuToggle) {
    menuToggle.addEventListener("click", (event) => {
      event.preventDefault();

      if (
        mobileMenu &&
        mobileMenu.classList.contains("active")
      ) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  function updateScrollProgress() {
    if (!progress) return;

    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      window.innerHeight;

    if (height <= 0) {
      progress.style.width = "0%";
      return;
    }

    const percent = Math.min(
      100,
      Math.max(0, (scrollTop / height) * 100)
    );

    progress.style.width = `${percent}%`;
  }

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener(
    "scroll",
    () => {
      updateScrollProgress();
      updateHeader();
    },
    { passive: true }
  );

  if (
    cursor &&
    window.matchMedia("(pointer: fine)").matches
  ) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener(
      "mousemove",
      (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
      },
      { passive: true }
    );

    function animateCursor() {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      cursor.style.transform =
        `translate3d(${currentX}px, ${currentY}px, 0)`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();
  }

  let revealObserver = null;

  function initReveal() {
    const elements = document.querySelectorAll(
      ".reveal, .fade-up, [data-reveal]"
    );

    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("visible");
        element.classList.add("revealed");
      });

      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              entry.target.classList.add("revealed");
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px"
        }
      );
    }

    elements.forEach((element) => {
      revealObserver.observe(element);
    });
  }

  function initTilt() {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const cards = document.querySelectorAll(
      ".project-card, .work-card, [data-tilt]"
    );

    cards.forEach((card) => {
      if (card.dataset.tiltReady === "true") {
        return;
      }

      card.dataset.tiltReady = "true";

      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        if (!centerX || !centerY) return;

        const rotateX =
          ((y - centerY) / centerY) * -3;

        const rotateY =
          ((x - centerX) / centerX) * 3;

        card.style.transform =
          `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  function initMagnetic() {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const elements = document.querySelectorAll(
      ".btn, .button, .magnetic, [data-magnetic]"
    );

    elements.forEach((element) => {
      if (element.dataset.magneticReady === "true") {
        return;
      }

      element.dataset.magneticReady = "true";

      element.addEventListener("mousemove", (event) => {
        const rect = element.getBoundingClientRect();

        const x =
          event.clientX -
          rect.left -
          rect.width / 2;

        const y =
          event.clientY -
          rect.top -
          rect.height / 2;

        element.style.transform =
          `translate(${x * 0.12}px, ${y * 0.12}px)`;
      });

      element.addEventListener("mouseleave", () => {
        element.style.transform = "";
      });
    });
  }

  document.addEventListener(
    "error",
    (event) => {
      const element = event.target;

      if (
        element &&
        element.tagName === "IMG"
      ) {
        element.classList.add("image-failed");
      }
    },
    true
  );

  document
    .querySelectorAll("a[target='_blank']")
    .forEach((link) => {
      link.addEventListener("click", () => {
        link.classList.add("clicked");

        setTimeout(() => {
          link.classList.remove("clicked");
        }, 300);
      });
    });

  safe(() => {
    updateScrollProgress();
    updateHeader();
    renderRoute();
    initReveal();
    initTilt();
    initMagnetic();
  });

  window.addEventListener("DOMContentLoaded", () => {
    safe(renderRoute);
    safe(initReveal);
  });
})();
