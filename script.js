/* =========================================================
   JEXONFLIER — SCRIPT.JS
   ========================================================= */

(() => {
  "use strict";

  /* =======================================================
     PROJECT DATA
     ======================================================= */

 const projects = {
  aurel: {
    number: "01 / PROJECT",
    title: "Aurel",
    category: "WEB / PREMIUM",
    description:
      "Премиальный landing page с акцентом на продукт, визуальную подачу и ощущение дорогого digital-бренда.",
    image: "AUREL.png",
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
    image: "DAGESTAN.jpg",
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
    image: "LEATHER.jpg",
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
    image: "FITNESS.jpg",
    type: "Website",
    field: "Fitness / Digital product",
    url: "https://clck.su/VczEP"
  },

  mindflow: {
    number: "05 / PROJECT",
    title: "MindFlow",
    category: "WEB / WELLNESS",
    description:
      "Спокойный digital-концепт для психологического и wellness-проекта с чистой типографикой и мягкой визуальной системой.",
    image: "MINDFLOW.jpg",
    type: "Landing page",
    field: "Psychology / Wellness",
    url: "https://clck.su/lqjLB"
  },

  karelia: {
    number: "06 / PROJECT",
    title: "Karelia",
    category: "WEB / TRAVEL",
    description:
      "Туристический сайт с атмосферной визуальной подачей Карелии, природой и акцентом на впечатление от первого экрана.",
    image: "KARELIA.png",
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
    image: "PSYCHOLOG_MAM.jpg",
    type: "Client website",
    field: "Psychology",
    url: "https://психологдлямам.рф/"
  }
};

  /* =======================================================
     DOM
     ======================================================= */

  const body = document.body;
  const header = document.getElementById("header");
  const loader = document.getElementById("loader");
  const loaderPercent = document.getElementById("loaderPercent");
  const loaderLine = document.querySelector(".loader__line span");
  const cursorGlow = document.getElementById("cursorGlow");
  const scrollProgress = document.getElementById("scrollProgress");

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  /* =======================================================
     LOADER
     ======================================================= */

  let loaderProgress = 0;

  const loaderInterval = setInterval(() => {
    loaderProgress += Math.floor(Math.random() * 9) + 4;

    if (loaderProgress >= 100) {
      loaderProgress = 100;
      clearInterval(loaderInterval);

      if (loaderPercent) {
        loaderPercent.textContent = "100";
      }

      if (loaderLine) {
        loaderLine.style.width = "100%";
      }

      setTimeout(() => {
        loader?.classList.add("is-hidden");
      }, 350);
    } else {
      if (loaderPercent) {
        loaderPercent.textContent =
          String(loaderProgress).padStart(2, "0");
      }

      if (loaderLine) {
        loaderLine.style.width = `${loaderProgress}%`;
      }
    }
  }, 90);

  window.addEventListener("load", () => {
    setTimeout(() => {
      loaderProgress = 100;

      if (loaderPercent) {
        loaderPercent.textContent = "100";
      }

      if (loaderLine) {
        loaderLine.style.width = "100%";
      }

      setTimeout(() => {
        loader?.classList.add("is-hidden");
      }, 300);
    }, 500);
  });

  /* =======================================================
     HEADER SCROLL
     ======================================================= */

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 35) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });

  updateHeader();

  /* =======================================================
     SCROLL PROGRESS
     ======================================================= */

  function updateScrollProgress() {
    if (!scrollProgress) return;

    const scrollTop = window.scrollY;
    const height =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      height > 0 ? (scrollTop / height) * 100 : 0;

    scrollProgress.style.width = `${progress}%`;
  }

  window.addEventListener("scroll", updateScrollProgress, {
    passive: true
  });

  updateScrollProgress();

  /* =======================================================
     MOBILE MENU
     ======================================================= */

  function closeMenu() {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-open");
  }

  function openMenu() {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.classList.add("active");
    mobileMenu.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    body.classList.add("menu-open");
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = mobileMenu?.classList.contains("open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  /* =======================================================
     REVEAL ANIMATIONS
     ======================================================= */

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  /* =======================================================
     STAGGERED REVEALS
     ======================================================= */

  document.querySelectorAll(
    ".projects-grid, .services-list, .services-detail, .process-grid, .stats"
  ).forEach((group) => {
    const children = group.querySelectorAll(".reveal");

    children.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;
    });
  });

  /* =======================================================
     CURSOR GLOW
     ======================================================= */

  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;

    window.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    function animateGlow() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;

      requestAnimationFrame(animateGlow);
    }

    animateGlow();

    document.querySelectorAll("a, button").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursorGlow.style.opacity = ".65";
      });

      element.addEventListener("mouseleave", () => {
        cursorGlow.style.opacity = ".35";
      });
    });
  }

  /* =======================================================
     MAGNETIC BUTTONS
     ======================================================= */

  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".magnetic").forEach((element) => {
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

        const strength = 0.12;

        element.style.transform =
          `translate(${x * strength}px, ${y * strength}px)`;
      });

      element.addEventListener("mouseleave", () => {
        element.style.transform = "";
      });
    });
  }

  /* =======================================================
     PROJECT 3D TILT
     ======================================================= */

  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
          ((y - centerY) / centerY) * -2.5;

        const rotateY =
          ((x - centerX) / centerX) * 2.5;

        card.style.transform =
          `perspective(1000px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-4px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
      });
    });
  }

  /* =======================================================
     PARALLAX
     ======================================================= */

  const parallaxElements =
    document.querySelectorAll("[data-parallax]");

  if (parallaxElements.length) {
    window.addEventListener(
      "scroll",
      () => {
        const scroll = window.scrollY;

        parallaxElements.forEach((element) => {
          const speed =
            Number(element.dataset.parallax) || 0.05;

          element.style.transform =
            `translate3d(0, ${scroll * speed}px, 0)`;
        });
      },
      { passive: true }
    );
  }

  /* =======================================================
     BUTTON RIPPLE
     ======================================================= */

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const rect = button.getBoundingClientRect();

      const ripple = document.createElement("span");

      ripple.className = "ripple";

      ripple.style.left =
        `${event.clientX - rect.left}px`;

      ripple.style.top =
        `${event.clientY - rect.top}px`;

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 700);
    });
  });

  /* =======================================================
     IMAGE FALLBACK
     ======================================================= */

  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.classList.add("image-fallback");
      image.removeAttribute("src");
    });
  });

  /* =======================================================
     SMOOTH ANCHOR SCROLL
     ======================================================= */

  function smoothScrollTo(target) {
    const element = document.querySelector(target);

    if (!element) return;

    const headerOffset = 75;

    const position =
      element.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (
        !href ||
        href === "#" ||
        href.startsWith("#project/")
      ) {
        return;
      }

      const target = document.querySelector(href);

      if (!target) return;

      event.preventDefault();

      smoothScrollTo(href);
    });
  });

  /* =======================================================
     ROUTER
     ======================================================= */

  const homePage = document.querySelector(
    '.page[data-page="home"]'
  );

  const innerPages = {
    works: document.querySelector(
      '.page[data-page="works"]'
    ),

    services: document.querySelector(
      '.page[data-page="services"]'
    ),

    about: document.querySelector(
      '.page[data-page="about"]'
    ),

    contact: document.querySelector(
      '.page[data-page="contact"]'
    ),

    project: document.querySelector(
      '.page[data-page="project"]'
    )
  };

  const allPages = document.querySelectorAll(".page");

  function hideAllPages() {
    allPages.forEach((page) => {
      page.style.display = "none";
      page.classList.remove("is-active");
    });
  }

  function showHome() {
    hideAllPages();

    if (homePage) {
      homePage.style.display = "block";
      homePage.classList.add("is-active");
    }

    document.body.classList.remove("project-open");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      document
        .querySelectorAll(".home .reveal, .page--home .reveal")
        .forEach((el) => {
          el.classList.add("is-visible");
        });
    }, 50);
  }

  function showInnerPage(name) {
    hideAllPages();

    const page = innerPages[name];

    if (!page) {
      showHome();
      return;
    }

    page.style.display = "block";
    page.classList.add("is-active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      page
        .querySelectorAll(".reveal")
        .forEach((element) => {
          element.classList.add("is-visible");
        });
    }, 80);
  }

  /* =======================================================
     PROJECT PAGE
     ======================================================= */

  function openProject(slug) {
    const project = projects[slug];

    if (!project) {
      showInnerPage("works");
      return;
    }

    const projectPage = innerPages.project;

    if (!projectPage) return;

    hideAllPages();

    projectPage.style.display = "block";
    projectPage.classList.add("is-active");

    const number =
      document.getElementById("projectNumber");

    const category =
      document.getElementById("projectCategory");

    const title =
      document.getElementById("projectTitle");

    const description =
      document.getElementById("projectDescription");

    const image =
      document.getElementById("projectImage");

    const live =
      document.getElementById("projectLive");

    const type =
      document.getElementById("projectType");

    const field =
      document.getElementById("projectField");

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
      description.textContent =
        project.description;
    }

    if (image) {
      image.src = project.image;
      image.alt = project.title;
      image.classList.remove("image-fallback");
    }

    if (live) {
      live.href = project.url;
    }

    if (type) {
      type.textContent = project.type;
    }

    if (field) {
      field.textContent = project.field;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      projectPage
        .querySelectorAll(".reveal")
        .forEach((element) => {
          element.classList.add("is-visible");
        });
    }, 80);
  }

  /* =======================================================
     ROUTE PARSER
     ======================================================= */

  function handleRoute() {
    const hash =
      window.location.hash.replace("#", "");

    if (!hash || hash === "home") {
      showHome();
      return;
    }

    if (hash.startsWith("project/")) {
      const slug =
        hash.split("/")[1];

      openProject(slug);
      return;
    }

    if (
      hash === "works" ||
      hash === "services" ||
      hash === "about" ||
      hash === "contact"
    ) {
      showInnerPage(hash);
      return;
    }

    showHome();
  }

  window.addEventListener("hashchange", handleRoute);

  /* =======================================================
     NAVIGATION FIX
     ======================================================= */

  document.querySelectorAll(
    '.desktop-nav a, .mobile-menu a, .footer a, .text-link, .service-row, .back-link, .next-project'
  ).forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  /* =======================================================
     KEYBOARD
     ======================================================= */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  /* =======================================================
     HERO MOUSE MOVEMENT
     ======================================================= */

  const hero = document.querySelector(".hero");

  if (
    hero &&
    window.matchMedia("(pointer: fine)").matches
  ) {
    const orbit = hero.querySelector(".hero-orbit");
    const grid = hero.querySelector(".hero__grid");

    hero.addEventListener("mousemove", (event) => {
      const rect = hero.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
          rect.width -
        0.5;

      const y =
        (event.clientY - rect.top) /
          rect.height -
        0.5;

      if (orbit) {
        orbit.style.transform =
          `translate(${x * 18}px, calc(-45% + ${y * 18}px))`;
      }

      if (grid) {
        grid.style.transform =
          `translate(${x * -12}px, ${y * -12}px)`;
      }
    });

    hero.addEventListener("mouseleave", () => {
      if (orbit) {
        orbit.style.transform =
          "translate(0, -45%)";
      }

      if (grid) {
        grid.style.transform = "";
      }
    });
  }

  /* =======================================================
     IMAGE HOVER DEPTH
     ======================================================= */

  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".project-card__image").forEach((image) => {
      image.addEventListener("mousemove", (event) => {
        const rect = image.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY - rect.top) /
            rect.height -
          0.5;

        const img =
          image.querySelector("img");

        if (img) {
          img.style.transform =
            `scale(1.07)
             translate(${x * -7}px, ${y * -7}px)`;
        }
      });

      image.addEventListener("mouseleave", () => {
        const img =
          image.querySelector("img");

        if (img) {
          img.style.transform = "";
        }
      });
    });
  }

  /* =======================================================
     MOBILE TOUCH FEEDBACK
     ======================================================= */

  document.querySelectorAll(".project-card, .service-row").forEach((element) => {
    element.addEventListener(
      "touchstart",
      () => {
        element.style.transition =
          "transform .2s ease";

        element.style.transform =
          "scale(.985)";
      },
      { passive: true }
    );

    element.addEventListener(
      "touchend",
      () => {
        element.style.transform = "";
      },
      { passive: true }
    );
  });

  /* =======================================================
     INITIAL ROUTE
     ======================================================= */

  handleRoute();

})();