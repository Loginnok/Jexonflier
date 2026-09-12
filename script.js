document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;
    const header = document.querySelector(".header");
    const loader = document.querySelector(".page-loader");
    const progress = document.querySelector(".scroll-progress span");

    /* =========================
       LOADER
    ========================= */

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader?.classList.add("loaded");
        }, 500);
    });


    /* =========================
       SCROLL PROGRESS
    ========================= */

    function updateScroll() {
        const scrollTop = window.scrollY;
        const documentHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const percent =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        if (progress) {
            progress.style.width = `${percent}%`;
        }

        if (header) {
            header.classList.toggle("scrolled", scrollTop > 30);
        }
    }

    window.addEventListener("scroll", updateScroll, {
        passive: true
    });

    updateScroll();


    /* =========================
       REVEAL ANIMATIONS
    ========================= */

    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-line"
    );

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);
            });

        },
        {
            threshold: .12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach((element, index) => {

        if (
            element.classList.contains("reveal") &&
            element.closest(".projects-grid")
        ) {
            element.style.transitionDelay =
                `${Math.min(index * 0.07, .35)}s`;
        }

        revealObserver.observe(element);
    });


    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton = document.querySelector(".menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuButton?.addEventListener("click", () => {

        const isOpen =
            mobileMenu.classList.toggle("open");

        menuButton.classList.toggle(
            "active",
            isOpen
        );

        body.classList.toggle(
            "menu-open",
            isOpen
        );
    });

    document.querySelectorAll(".mobile-menu a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");
                menuButton.classList.remove("active");
                body.classList.remove("menu-open");

            });

        });


    /* =========================
       SMOOTH ANCHORS
    ========================= */

    document.querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", (event) => {

                const targetId =
                    anchor.getAttribute("href");

                if (!targetId || targetId === "#") return;

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                const offset = 70;

                const position =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    offset;

                window.scrollTo({
                    top: position,
                    behavior: "smooth"
                });

            });

        });


    /* =========================
       CUSTOM CURSOR
    ========================= */

    const cursorDot =
        document.querySelector(".cursor-dot");

    const cursorRing =
        document.querySelector(".cursor-ring");

    const cursorLabel =
        document.querySelector(".cursor-label");

    const desktop =
        window.matchMedia("(pointer:fine)").matches;

    if (desktop && cursorDot && cursorRing) {

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let ringX = mouseX;
        let ringY = mouseY;

        window.addEventListener("mousemove", (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;

        });

        function animateCursor() {

            ringX += (mouseX - ringX) * .13;
            ringY += (mouseY - ringY) * .13;

            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;

            if (cursorLabel) {
                cursorLabel.style.left =
                    `${ringX}px`;

                cursorLabel.style.top =
                    `${ringY}px`;
            }

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        document.querySelectorAll(
            "a, button, .magnetic, .project, .service"
        ).forEach(element => {

            element.addEventListener("mouseenter", () => {
                cursorRing.classList.add("active");
            });

            element.addEventListener("mouseleave", () => {
                cursorRing.classList.remove("active");
                cursorLabel?.classList.remove("active");
            });

        });

        document.querySelectorAll(
            "[data-cursor]"
        ).forEach(element => {

            element.addEventListener("mouseenter", () => {

                const text =
                    element.dataset.cursor || "VIEW";

                if (cursorLabel) {
                    cursorLabel.textContent = text;
                    cursorLabel.classList.add("active");
                }

            });

            element.addEventListener("mouseleave", () => {
                cursorLabel?.classList.remove("active");
            });

        });
    }


    /* =========================
       MAGNETIC BUTTONS
    ========================= */

    if (desktop) {

        document.querySelectorAll(".magnetic")
            .forEach(element => {

                element.addEventListener("mousemove", (event) => {

                    const rect =
                        element.getBoundingClientRect();

                    const x =
                        event.clientX -
                        (rect.left + rect.width / 2);

                    const y =
                        event.clientY -
                        (rect.top + rect.height / 2);

                    const strength =
                        element.classList.contains("btn")
                            ? .12
                            : .2;

                    element.style.transform =
                        `translate(${x * strength}px, ${y * strength}px)`;

                });

                element.addEventListener("mouseleave", () => {

                    element.style.transform = "";

                });

            });
    }


    /* =========================
       PROJECT 3D TILT
    ========================= */

    if (desktop) {

        document.querySelectorAll(".tilt")
            .forEach(element => {

                element.addEventListener("mousemove", (event) => {

                    const rect =
                        element.getBoundingClientRect();

                    const x =
                        (event.clientX - rect.left) /
                        rect.width;

                    const y =
                        (event.clientY - rect.top) /
                        rect.height;

                    const rotateY =
                        (x - .5) * 8;

                    const rotateX =
                        (.5 - y) * 8;

                    element.style.transform =
                        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                });

                element.addEventListener("mouseleave", () => {

                    element.style.transform =
                        "rotateX(0deg) rotateY(0deg)";

                });

            });
    }


    /* =========================
       PARALLAX HERO
    ========================= */

    const heroCard =
        document.querySelector(".hero-card");

    if (desktop && heroCard) {

        window.addEventListener("mousemove", (event) => {

            const x =
                event.clientX / window.innerWidth - .5;

            const y =
                event.clientY / window.innerHeight - .5;

            heroCard.style.transform =
                `rotateY(${x * 8}deg) rotateX(${y * -8}deg)`;

        });

    }


    /* =========================
       IMAGE PARALLAX
    ========================= */

    const projectImages =
        document.querySelectorAll(".project-image img");

    if (desktop) {

        window.addEventListener(
            "scroll",
            () => {

                projectImages.forEach(image => {

                    const rect =
                        image.parentElement.getBoundingClientRect();

                    if (
                        rect.bottom < 0 ||
                        rect.top > window.innerHeight
                    ) return;

                    const center =
                        rect.top + rect.height / 2;

                    const distance =
                        center - window.innerHeight / 2;

                    const movement =
                        distance * -.035;

                    image.style.transform =
                        `scale(1.04) translateY(${movement}px)`;

                });

            },
            { passive: true }
        );

    }


    /* =========================
       IMAGE FALLBACK
    ========================= */

    document.querySelectorAll("img")
        .forEach(image => {

            image.addEventListener("error", () => {

                image.style.display = "none";

            });

        });


    /* =========================
       SERVICE CARDS
    ========================= */

    if (desktop) {

        document.querySelectorAll(".magnetic-card")
            .forEach(card => {

                card.addEventListener("mousemove", (event) => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        (event.clientX - rect.left) /
                        rect.width - .5;

                    const y =
                        (event.clientY - rect.top) /
                        rect.height - .5;

                    card.style.transform =
                        `perspective(800px)
                         rotateX(${y * -3}deg)
                         rotateY(${x * 3}deg)
                         translateY(-8px)`;

                });

                card.addEventListener("mouseleave", () => {

                    card.style.transform = "";

                });

            });

    }


    /* =========================
       ACTIVE SECTION NAV
    ========================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav a");

    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${entry.target.id}`
                        ) {
                            link.classList.add("active");
                        }

                    });

                });

            },
            {
                threshold: .35
            }
        );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* =========================
       HERO MOUSE GLOW
    ========================= */

    if (desktop) {

        const hero =
            document.querySelector(".hero");

        hero?.addEventListener("mousemove", (event) => {

            const x =
                event.clientX / window.innerWidth * 100;

            const y =
                event.clientY / window.innerHeight * 100;

            hero.style.background =
                `radial-gradient(
                    circle at ${x}% ${y}%,
                    rgba(200,255,61,.035),
                    transparent 35%
                )`;

        });

        hero?.addEventListener("mouseleave", () => {

            hero.style.background = "";

        });

    }

});