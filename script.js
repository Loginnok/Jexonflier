// ===============================
// SCROLL REVEAL
// ===============================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
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


// ===============================
// CURSOR GLOW
// ===============================

const glow = document.querySelector(".cursor-glow");

if (glow && window.innerWidth > 700) {

    document.addEventListener("mousemove", (event) => {

        glow.style.left = event.clientX + "px";
        glow.style.top = event.clientY + "px";

    });

}


// ===============================
// PROJECT HOVER TILT
// ===============================

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

                card.style.transform = `
                    perspective(900px)
                    rotateX(${y / -45}deg)
                    rotateY(${x / 45}deg)
                    scale(1.015)
                `;

            });

            card.addEventListener("mouseleave", () => {

                card.style.transform = `
                    perspective(900px)
                    rotateX(0)
                    rotateY(0)
                    scale(1)
                `;

            });

        });

}


// ===============================
// SMOOTH ANCHOR
// ===============================

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
                behavior: "smooth"
            });

        });

    });