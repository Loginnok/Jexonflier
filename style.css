:root {
    --bg: #050505;
    --surface: #0b0c0c;
    --surface-2: #101111;

    --white: #f5f5f2;
    --gray: #858784;
    --gray-light: #b9bbb7;
    --warm: #b8afa0;
    --dark-text: #676864;

    --green: #c8ff3d;
    --green-dark: #a9df25;

    --border: rgba(255,255,255,.09);
    --border-hover: rgba(255,255,255,.2);

    --radius: 24px;
    --container: 1240px;

    --ease: cubic-bezier(.16,1,.3,1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    background: var(--bg);
}

body {
    min-height: 100vh;
    overflow-x: hidden;

    background:
        radial-gradient(
            circle at 50% -15%,
            rgba(200,255,61,.07),
            transparent 35%
        ),
        var(--bg);

    color: var(--white);
    font-family: Inter, sans-serif;
    -webkit-font-smoothing: antialiased;
}

::selection {
    background: var(--green);
    color: #000;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    max-width: 100%;
}

.container {
    width: min(var(--container), calc(100% - 48px));
    margin: 0 auto;
}


/* HEADER */

.header {
    position: fixed;
    inset: 0 0 auto;
    z-index: 1000;

    padding: 20px 0;

    background: rgba(5,5,5,.65);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    border-bottom: 1px solid transparent;
    transition: .4s var(--ease);
}

.header.scrolled {
    background: rgba(5,5,5,.92);
    border-color: var(--border);
}

.nav {
    width: min(var(--container), calc(100% - 48px));
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-family: "Space Grotesk", sans-serif;
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -.07em;

    transition: .3s ease;
}

.logo:hover {
    color: var(--green);
}

.logo span,
.footer-logo span {
    color: var(--green);
}

.nav-links {
    display: flex;
    gap: 32px;

    color: var(--gray);
    font-size: 12px;
}

.nav-links a {
    position: relative;
    padding: 8px 0;
    transition: color .3s ease;
}

.nav-links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 1px;

    background: var(--green);

    transform: scaleX(0);
    transform-origin: right;

    transition: transform .4s var(--ease);
}

.nav-links a:hover {
    color: var(--white);
}

.nav-links a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}

.nav-contact {
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 10px 16px;

    border: 1px solid var(--border-hover);
    border-radius: 100px;

    font-size: 11px;
    font-weight: 600;

    background: rgba(255,255,255,.025);

    transition: .35s var(--ease);
}

.nav-contact span {
    transition: transform .35s var(--ease);
}

.nav-contact:hover {
    color: #050505;
    background: var(--green);
    border-color: var(--green);
    transform: translateY(-2px);
}

.nav-contact:hover span {
    transform: translate(3px,-3px);
}


/* HERO */

.hero {
    position: relative;
    min-height: 100vh;

    display: flex;
    align-items: center;

    padding: 150px 0 100px;
    overflow: hidden;
}

.hero::before {
    content: "";
    position: absolute;

    width: 600px;
    height: 600px;

    right: -300px;
    top: 0;

    background: var(--green);
    filter: blur(190px);
    opacity: .055;
}

.hero-grid {
    position: absolute;
    inset: 0;
    opacity: .035;

    background-image:
        linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px);

    background-size: 90px 90px;

    mask-image: linear-gradient(to bottom, black, transparent 80%);
}

.hero-content {
    position: relative;
    z-index: 2;
}

.eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;

    margin-bottom: 30px;

    color: var(--gray);
    font-size: 10px;
    font-weight: 600;

    letter-spacing: .18em;
}

.eyebrow::before {
    content: "";
    width: 32px;
    height: 1px;
    background: var(--green);
}

.hero h1 {
    max-width: 1100px;

    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(60px, 9.5vw, 135px);
    line-height: .86;
    letter-spacing: -.085em;
    font-weight: 600;
}

.hero h1 span {
    color: var(--green);
}

.hero-description {
    max-width: 540px;
    margin-top: 38px;

    color: var(--gray-light);
    font-size: 16px;
    line-height: 1.7;
}

.hero-actions {
    display: flex;
    gap: 12px;
    margin-top: 38px;
}


/* BUTTONS */

.btn {
    position: relative;

    min-height: 52px;
    padding: 0 22px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    border-radius: 100px;

    font-size: 12px;
    font-weight: 600;

    overflow: hidden;

    cursor: pointer;

    transition:
        transform .4s var(--ease),
        background .3s ease,
        border-color .3s ease,
        color .3s ease,
        box-shadow .3s ease;
}

.btn:hover {
    transform: translateY(-4px);
}

.btn-primary {
    color: #050505;
    background: var(--green);
    box-shadow: 0 0 0 rgba(200,255,61,0);
}

.btn-primary:hover {
    background: var(--green-dark);
    box-shadow: 0 15px 50px rgba(200,255,61,.15);
}

.btn-secondary {
    color: var(--white);
    border: 1px solid var(--border-hover);
    background: rgba(255,255,255,.025);
}

.btn-secondary:hover {
    color: #fff;
    background: rgba(255,255,255,.08);
    border-color: rgba(255,255,255,.4);
}

.btn-arrow {
    transition: transform .4s var(--ease);
}

.btn:hover .btn-arrow {
    transform: translate(5px,-3px);
}


/* SCROLL */

.scroll-indicator {
    position: absolute;
    left: max(24px, calc((100% - var(--container)) / 2));
    bottom: 35px;

    display: flex;
    align-items: center;
    gap: 12px;

    color: var(--gray);
    font-size: 9px;
    letter-spacing: .15em;
}

.scroll-line {
    width: 45px;
    height: 1px;
    background: rgba(255,255,255,.15);
    overflow: hidden;
}

.scroll-line::after {
    content: "";
    display: block;

    width: 35%;
    height: 100%;

    background: var(--green);

    animation: scrollLine 2s infinite ease-in-out;
}

@keyframes scrollLine {
    0% { transform: translateX(-150%); }
    50% { transform: translateX(300%); }
    100% { transform: translateX(300%); }
}


/* SECTIONS */

.section {
    padding: 130px 0;
}

.section-label {
    color: var(--green);
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .17em;
}

.section-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 40px;

    margin-bottom: 55px;
}

.section-title {
    margin-top: 12px;

    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(44px, 6vw, 78px);
    line-height: .92;
    letter-spacing: -.07em;
}

.section-title span {
    color: var(--warm);
}

.section-description {
    max-width: 340px;
    color: var(--gray);
    font-size: 13px;
    line-height: 1.7;
}

.about-description {
    margin-top: 35px;
    max-width: 580px;
}

.about-stats {
    display: flex;
    gap: 70px;
    margin-top: 55px;
}

.about-stats div {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.about-stats strong {
    font-family: "Space Grotesk", sans-serif;
    font-size: 38px;
    letter-spacing: -.06em;
}

.about-stats small {
    color: var(--dark-text);
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: .15em;
}


/* PROJECTS */

.projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.project {
    position: relative;
    min-height: 520px;
    padding: 8px;

    border: 1px solid var(--border);
    border-radius: var(--radius);

    background: var(--surface);
    overflow: hidden;

    cursor: pointer;

    transition:
        transform .7s var(--ease),
        border-color .4s ease,
        background .4s ease;
}

.project:hover {
    transform: translateY(-9px);
    border-color: var(--border-hover);
    background: var(--surface-2);
}

.project:nth-child(3n) {
    grid-column: span 2;
    min-height: 600px;
}

.project-image {
    position: relative;

    width: 100%;
    min-height: 500px;
    height: 100%;

    border-radius: 19px;
    overflow: hidden;

    background:
        radial-gradient(circle at 70% 20%, rgba(200,255,61,.13), transparent 25%),
        #111313;

    transition: transform .15s ease-out;
}

.project-photo {
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    z-index: 1;

    transition:
        transform .8s var(--ease),
        filter .5s ease;
}

.project:hover .project-photo {
    transform: scale(1.045);
}

.image-placeholder {
    position: absolute;
    inset: 0;

    z-index: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;

    color: rgba(255,255,255,.35);

    background:
        linear-gradient(135deg,
            rgba(255,255,255,.035),
            transparent 50%
        );
}

.image-placeholder span {
    font-family: "Space Grotesk", sans-serif;
    font-size: 24px;
    letter-spacing: .08em;
}

.image-placeholder small {
    color: rgba(255,255,255,.2);
    font-size: 9px;
}

.project-overlay {
    position: absolute;
    inset: 0;
    z-index: 2;

    background:
        linear-gradient(
            to top,
            rgba(0,0,0,.82),
            rgba(0,0,0,.05) 55%,
            transparent
        );

    pointer-events: none;
}

.visual-text {
    position: absolute;
    z-index: 3;

    top: 50%;
    left: 50%;

    transform: translate(-50%,-50%);

    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(45px, 8vw, 110px);
    font-weight: 700;
    letter-spacing: -.08em;

    color: rgba(255,255,255,.75);
    white-space: nowrap;

    mix-blend-mode: screen;

    pointer-events: none;
}

.project-info {
    position: absolute;

    left: 32px;
    right: 32px;
    bottom: 28px;

    z-index: 5;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.project-meta {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.project-category {
    color: var(--green);
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .16em;
}

.project-title {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(28px, 3vw, 44px);
    line-height: 1;
    letter-spacing: -.055em;
}

.project-link {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255,255,255,.25);
    border-radius: 50%;

    background: rgba(0,0,0,.4);
    backdrop-filter: blur(12px);

    font-size: 18px;

    transition:
        transform .5s var(--ease),
        background .3s ease,
        color .3s ease;
}

.project:hover .project-link {
    color: #000;
    background: var(--green);
    transform: rotate(45deg) scale(1.08);
}


/* CLIENT */

.client-project {
    display: grid;
    grid-template-columns: 1fr 1fr;

    min-height: 550px;

    border: 1px solid var(--border);
    border-radius: var(--radius);

    overflow: hidden;
    background: var(--surface);
}

.client-content {
    padding: 70px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.client-badge {
    margin-bottom: 25px;
    padding: 8px 12px;

    color: var(--green);

    border: 1px solid rgba(200,255,61,.2);
    border-radius: 100px;

    background: rgba(200,255,61,.05);

    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .13em;
}

.client-content h2 {
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(43px, 5vw, 70px);
    line-height: .92;
    letter-spacing: -.07em;
}

.client-content h2 span {
    color: var(--warm);
}

.client-content p {
    max-width: 470px;
    margin-top: 25px;

    color: var(--gray);
    font-size: 13px;
    line-height: 1.7;
}

.client-content .btn {
    margin-top: 30px;
}

.client-visual {
    position: relative;
    min-height: 550px;
    overflow: hidden;

    background: #101211;
}

.client-photo {
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform .8s var(--ease);
}

.client-visual:hover .client-photo {
    transform: scale(1.04);
}

.client-visual-title {
    position: absolute;
    z-index: 3;

    top: 50%;
    left: 50%;

    transform: translate(-50%,-50%);

    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(25px, 4vw, 55px);
    font-weight: 600;
    letter-spacing: -.06em;

    white-space: nowrap;

    text-shadow: 0 5px 30px rgba(0,0,0,.5);
}

.visual-open {
    position: absolute;
    right: 25px;
    top: 25px;

    z-index: 5;

    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255,255,255,.25);
    border-radius: 50%;

    background: rgba(0,0,0,.35);
    backdrop-filter: blur(10px);

    transition: .4s var(--ease);
}

.client-visual:hover .visual-open {
    color: #000;
    background: var(--green);
    transform: rotate(45deg);
}


/* SERVICES */

.services-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    margin-top: 55px;

    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.service {
    position: relative;
    min-height: 330px;

    padding: 38px 30px;

    border-right: 1px solid var(--border);

    transition:
        background .4s ease,
        transform .4s var(--ease);
}

.service:last-child {
    border-right: none;
}

.service:hover {
    background: rgba(255,255,255,.025);
    transform: translateY(-5px);
}

.service-number {
    color: var(--gray);
    font-size: 10px;
}

.service-icon {
    width: 46px;
    height: 46px;

    margin: 52px 0 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--border-hover);
    border-radius: 50%;

    color: var(--green);

    transition:
        transform .5s var(--ease),
        background .3s ease;
}

.service:hover .service-icon {
    transform: scale(1.1) rotate(8deg);
    background: rgba(200,255,61,.06);
}

.service h3 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 22px;
    letter-spacing: -.04em;
}

.service p {
    max-width: 300px;
    margin-top: 12px;

    color: var(--gray);
    font-size: 12px;
    line-height: 1.7;
}

.service-arrow {
    position: absolute;
    right: 30px;
    top: 38px;

    color: var(--gray);
    font-size: 17px;

    transition:
        color .3s ease,
        transform .4s var(--ease);
}

.service:hover .service-arrow {
    color: var(--green);
    transform: translate(4px,-4px);
}


/* MARQUEE */

.marquee {
    overflow: hidden;

    padding: 28px 0;

    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.marquee-track {
    display: flex;
    width: max-content;

    animation: marquee 25s linear infinite;
}

.marquee-item {
    display: flex;
    align-items: center;
    gap: 32px;

    padding-right: 32px;

    white-space: nowrap;

    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(30px, 4vw, 58px);
    font-weight: 600;
    letter-spacing: -.06em;
}

.marquee-item i {
    color: var(--green);
    font-size: .45em;
    font-style: normal;
}

@keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}


/* CONTACT */

.contact {
    position: relative;
    padding: 170px 0 150px;
    text-align: center;
    overflow: hidden;
}

.contact-glow {
    position: absolute;

    width: 500px;
    height: 500px;

    left: 50%;
    top: 50%;

    transform: translate(-50%,-50%);

    background: var(--green);
    filter: blur(180px);
    opacity: .035;

    pointer-events: none;
}

.contact-content {
    position: relative;
    z-index: 2;
}

.contact h2 {
    max-width: 900px;
    margin: 25px auto 0;

    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(52px, 8vw, 105px);
    line-height: .88;
    letter-spacing: -.08em;
}

.contact h2 span {
    color: var(--warm);
}

.contact p {
    max-width: 430px;
    margin: 30px auto 0;

    color: var(--gray);
    font-size: 13px;
    line-height: 1.7;
}

.telegram-button {
    width: min(430px, 100%);
    margin: 35px auto 0;
    padding: 17px 20px;

    display: flex;
    align-items: center;
    gap: 15px;

    text-align: left;

    border: 1px solid var(--border-hover);
    border-radius: 18px;

    background: rgba(255,255,255,.025);

    transition:
        transform .4s var(--ease),
        border-color .3s ease,
        background .3s ease;
}

.telegram-button:hover {
    transform: translateY(-6px);
    border-color: rgba(200,255,61,.4);
    background: rgba(200,255,61,.045);
}

.tg-icon {
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: #050505;
    background: var(--green);
}

.telegram-button div {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.telegram-button small {
    color: var(--gray);
    font-size: 8px;
    letter-spacing: .15em;
}

.telegram-button strong {
    font-size: 14px;
}

.tg-arrow {
    margin-left: auto;
    font-size: 20px;
    transition: transform .4s var(--ease);
}

.telegram-button:hover .tg-arrow {
    transform: translate(4px,-4px);
}


/* FOOTER */

footer {
    padding: 28px 0;
    border-top: 1px solid var(--border);

    color: var(--gray);
    font-size: 10px;
}

.footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer-logo {
    color: var(--white);
    font-family: "Space Grotesk", sans-serif;
    font-weight: 600;
}

footer a {
    transition: color .3s ease;
}

footer a:hover {
    color: var(--green);
}


/* REVEAL */

.reveal {
    opacity: 0;
    transform: translateY(35px);

    transition:
        opacity .8s var(--ease),
        transform .8s var(--ease);
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}


/* CURSOR */

.cursor-glow {
    position: fixed;

    width: 280px;
    height: 280px;

    border-radius: 50%;

    background: var(--green);
    filter: blur(130px);
    opacity: .035;

    pointer-events: none;
    z-index: 0;

    transform: translate(-50%,-50%);
}


/* SCROLLBAR */

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: var(--bg);
}

::-webkit-scrollbar-thumb {
    background: #292b2b;
    border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
    background: #414444;
}


/* TABLET */

@media (max-width: 900px) {

    .nav-links {
        display: none;
    }

    .projects {
        grid-template-columns: 1fr;
    }

    .project:nth-child(3n) {
        grid-column: auto;
        min-height: 520px;
    }

    .client-project {
        grid-template-columns: 1fr;
    }

    .client-visual {
        min-height: 400px;
    }

    .services-list {
        grid-template-columns: 1fr;
    }

    .service {
        border-right: none;
        border-bottom: 1px solid var(--border);
    }

    .service:last-child {
        border-bottom: none;
    }
}


/* MOBILE */

@media (max-width: 600px) {

    .container,
    .nav {
        width: calc(100% - 30px);
    }

    .header {
        padding: 16px 0;
    }

    .nav-contact {
        padding: 8px 12px;
    }

    .hero {
        padding: 125px 0 80px;
    }

    .hero h1 {
        font-size: 15vw;
        line-height: .9;
    }

    .hero-description {
        margin-top: 28px;
        font-size: 14px;
    }

    .hero-actions {
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }

    .scroll-indicator {
        display: none;
    }

    .section {
        padding: 90px 0;
    }

    .section-head {
        display: block;
        margin-bottom: 35px;
    }

    .section-head .section-description {
        margin-top: 20px;
    }

    .about-stats {
        gap: 35px;
    }

    .projects {
        gap: 12px;
    }

    .project,
    .project:nth-child(3n) {
        min-height: 400px;
        padding: 7px;
    }

    .project-image {
        min-height: 385px;
        border-radius: 18px;
    }

    .project-info {
        left: 21px;
        right: 21px;
        bottom: 20px;
    }

    .project-title {
        font-size: 29px;
    }

    .project-link {
        width: 42px;
        height: 42px;
    }

    .client-content {
        padding: 40px 24px;
    }

    .client-content h2 {
        font-size: 44px;
    }

    .client-visual {
        min-height: 280px;
    }

    .service {
        padding: 30px 20px;
    }

    .service-icon {
        margin-top: 35px;
    }

    .contact {
        padding: 110px 0 100px;
    }

    .contact h2 {
        font-size: 14vw;
    }

    .footer-inner {
        align-items: flex-start;
        flex-direction: column;
        gap: 18px;
    }

    .cursor-glow {
        display: none;
    }
}


@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: .01ms !important;
    }
}