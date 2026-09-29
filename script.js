(() => {
  "use strict";

  const projects = {
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
    const type = document.getElementById("projectType");
    const field = document.getElementById("projectField");

    if (number) {
      number.textContent = project.number;
    }

    if (category) {
      category.textContent = project.category;
    }

    if (title) {
      title.textContent = project.title;
    }

    if (description) {
      description.textContent = project.description;
    }

    if (type) {
      type.textContent = project.type;
    }

    if (field) {
      field.textContent = project.field;
    }

    const availability = document.getElementById("projectAvailability");

    if (availability) {
      availability.hidden = !project.unavailable;
    }

    if (live) {
      live.hidden = !!project.unavailable;
      live.href = project.url;
      live.target = "_blank";
      live.rel = "noopener noreferrer";
    }

    if (image) {
      image.classList.remove("image-failed");
      image.src = project.image;
      image.alt = project.title;

      image.onerror = () => {
        image.classList.add("image-failed");
      };
    }

    document.title = `${project.title} — JEXONFLIER`;
  }

  function renderRoute() {
    const route = getRoute();

    closeMobileMenu();

    pages.forEach((page) => {
      const isActive = page.dataset.page === route.page;

      page.classList.toggle("active", isActive);
      page.hidden = !isActive;
      page.setAttribute(
        "aria-hidden",
        isActive ? "false" : "true"
      );
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

  window.addEventListener("hashchange", () => {
    renderRoute();
  });

  window.addEventListener("popstate", () => {
    renderRoute();
  });

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
    if (
      !window.matchMedia("(pointer: fine)").matches
    ) {
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

        const rotateX =
          ((y - centerY) / centerY) * -3;

        const rotateY =
          ((x - centerX) / centerX) * 3;

        card.style.transform =
          `perspective(900px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-4px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  function initMagnetic() {
    if (
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const elements = document.querySelectorAll(
      ".btn, .button, .magnetic, [data-magnetic]"
    );

    elements.forEach((element) => {
      if (
        element.dataset.magneticReady === "true"
      ) {
        return;
      }

      element.dataset.magneticReady = "true";

      element.addEventListener(
        "mousemove",
        (event) => {
          const rect =
            element.getBoundingClientRect();

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
        }
      );

      element.addEventListener(
        "mouseleave",
        () => {
          element.style.transform = "";
        }
      );
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

  document.querySelectorAll(
    "a[target='_blank']"
  ).forEach((link) => {
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
    initReveal();
    initTilt();
    initMagnetic();
  });

  renderRoute();
})();
