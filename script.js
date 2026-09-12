// ==========================================
// SCROLL REVEAL
// ==========================================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));


// ==========================================
// HEADER ON SCROLL
// ==========================================

const header = document.querySelector(".header");

function updateHeader() {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateHeader, {
    passive: true
});

updateHeader();


// ==========================================
// CURSOR GLOW
// ==========================================

const glow = document.querySelector(".cursor-glow");

if (glow && window.innerWidth > 700) {

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function animateGlow() {

        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        glow.style.left = `${currentX}px`;
        glow.style.top = `${currentY}px`;

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}


// ==========================================
// PROJECT 3D TILT
// ==========================================

if (window.innerWidth > 900) {

    document
        .querySelectorAll(".project-image")
        .forEach((card) => {

            card.addEventListener("mousemove", (event) => {

                const rect = card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;

                const rotateX = y / -55;
                const rotateY = x / 55;

                card.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.012)
                `;
            });

            card.addEventListener("mouseleave", () => {

                card.style.transform = `
                    perspective(1000px)
                    rotateX(0deg)
                    rotateY(0deg)
                    scale(1)
                `;
            });

        });
}


// ==========================================
// SMOOTH ANCHOR
// ==========================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });

    });


// ==========================================
// IMAGE FALLBACK
// ==========================================

document
    .querySelectorAll(".project-photo, .client-photo")
    .forEach((image) => {

        image.addEventListener("error", () => {
            image.style.display = "none";
        });

    });


// ==========================================
// BUTTON MICRO-INTERACTION
// ==========================================

document
    .querySelectorAll(".btn, .nav-contact, .telegram-button")
    .forEach((button) => {

        button.addEventListener("mouseenter", () => {
            button.style.setProperty(
                "--button-scale",
                "1"
            );
        });

    });