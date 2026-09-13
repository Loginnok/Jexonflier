/* script.js */
(() => {
  "use strict";

  const projects = {
    aurel:{
      number:"01 / PROJECT",
      title:"Aurel",
      category:"WEB / PREMIUM",
      description:"Премиальный landing page с акцентом на продукт, визуальную подачу и ощущение дорогого digital-бренда.",
      image:"images/aurel.jpg",
      type:"Landing page",
      field:"Premium product",
      url:"https://loginnok.github.io/xd/"
    },
    dagestan:{
      number:"02 / PROJECT",
      title:"Dagestan",
      category:"WEB / TRAVEL",
      description:"Сайт о Дагестане с визуальным акцентом на атмосферу места, путешествия и сильную подачу контента.",
      image:"images/dagestan.jpg",
      type:"Website",
      field:"Travel / Destination",
      url:"https://clck.su/cQWrJ"
    },
    leather:{
      number:"03 / PROJECT",
      title:"Leather",
      category:"WEB / FASHION",
      description:"Минималистичный digital-концепт для fashion-проекта с фокусом на фотографии, продукт и премиальную эстетику.",
      image:"images/leather.jpg",
      type:"Landing page",
      field:"Fashion / Product",
      url:"https://clck.su/yJCnE"
    },
    fitness:{
      number:"04 / PROJECT",
      title:"FitnessPro",
      category:"WEB / FITNESS",
      description:"Современный сайт для fitness-направления с акцентом на структуру, динамику и понятный пользовательский путь.",
      image:"images/fitness.jpg",
      type:"Website",
      field:"Fitness / Digital product",
      url:"https://clck.su/VczEP"
    },
    mindflow:{
      number:"05 / PROJECT",
      title:"MindFlow",
      category:"WEB / WELLNESS",
      description:"Спокойный digital-концепт для психологического и wellness-проекта с чистой типографикой и мягкой визуальной системой.",
      image:"images/mindflow.jpg",
      type:"Landing page",
      field:"Psychology / Wellness",
      url:"https://clck.su/lqjLB"
    },
    karelia:{
      number:"06 / PROJECT",
      title:"Karelia",
      category:"WEB / TRAVEL",
      description:"Туристический сайт с атмосферной визуальной подачей Карелии, природой и акцентом на впечатление от первого экрана.",
      image:"images/karelia.jpg",
      type:"Website",
      field:"Travel / Tourism",
      url:"https://clck.su/KOHjF"
    },
    psycholog:{
      number:"07 / CLIENT",
      title:"Психолог для мам",
      category:"CLIENT / PSYCHOLOGY",
      description:"Реальный клиентский проект психолога. Сайт построен вокруг доверия, спокойной визуальной системы и понятного пути пользователя к записи.",
      image:"images/psycholog_mam.jpg",
      type:"Client website",
      field:"Psychology",
      url:"https://психологдлямам.рф/"
    }
  };

  const body=document.body;
  const header=document.getElementById("header");
  const loader=document.getElementById("loader");
  const loaderPercent=document.getElementById("loaderPercent");
  const progress=document.getElementById("scrollProgress");
  const cursor=document.getElementById("cursorGlow");
  const menuToggle=document.getElementById("menuToggle");

  /* LOADER */
  let load=0;
  const loadTimer=setInterval(()=>{
    load+=Math.floor(Math.random()*8)+4;
    if(load>=100){
      load=100;
      clearInterval(loadTimer);
      setTimeout(()=>loader?.classList.add("done"),350);
    }
    if(loaderPercent) loaderPercent.textContent=String(load).padStart(2,"0");
    const line=loader?.querySelector(".loader__line span");
    if(line) line.style.width=load+"%";
  },70);

  /* SCROLL */
  function scrollUI(){
    const y=window.scrollY;
    header?.classList.toggle("scrolled",y>20);

    const max=document.documentElement.scrollHeight-window.innerHeight;
    if(progress) progress.style.width=(max>0 ? y/max*100 : 0)+"%";
  }
  window.addEventListener("scroll",scrollUI,{passive:true});
  scrollUI();

  /* CURSOR */
  let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
  window.addEventListener("pointermove",e=>{
    mx=e.clientX;my=e.clientY;
    if(cursor) cursor.style.opacity="1";
  },{passive:true});

  function cursorLoop(){
    cx+=(mx-cx)*.1;
    cy+=(my-cy)*.1;
    if(cursor) cursor.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`;
    requestAnimationFrame(cursorLoop);
  }
  cursorLoop();

  /* MENU */
  function closeMenu(){
    body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded","false");
  }

  menuToggle?.addEventListener("click",()=>{
    const open=!body.classList.contains("menu-open");
    body.classList.toggle("menu-open",open);
    menuToggle.setAttribute("aria-expanded",String(open));
  });

  /* ROUTER */
  const validPages=["home","works","services","about","contact","project"];

  function route(){
    const hash=location.hash.replace(/^#/,"");
    if(hash.startsWith("project/")){
      return {page:"project",slug:hash.split("/")[1]};
    }
    return {page:validPages.includes(hash)?hash:"home"};
  }

  let routing=false;

  function navigate(hash,replace=false){
    if(!hash) hash="#home";

    if(hash.startsWith("#project/") && !projects[hash.split("/")[1]]){
      hash="#works";
    }

    if(location.hash===hash){
      renderRoute();
      return;
    }

    routing=true;
    if(replace) history.replaceState(null,"",hash);
    else history.pushState(null,"",hash);

    renderRoute();
    requestAnimationFrame(()=>routing=false);
  }

  function renderRoute(){
    const current=route();
    closeMenu();

    document.querySelectorAll(".page").forEach(page=>{
      page.classList.toggle("active",page.dataset.page===current.page);
    });

    body.dataset.page=current.page;

    if(current.page==="project"){
      fillProject(current.slug);
    }

    if(current.page!=="project"){
      document.querySelectorAll(".project-page .reveal").forEach(el=>el.classList.remove("visible"));
    }

    window.scrollTo({top:0,behavior:"auto"});
    setTimeout(initReveals,50);
    setTimeout(initTilt,80);
    setTimeout(initMagnetic,100);
  }

  function fillProject(slug){
    const p=projects[slug] || projects.aurel;

    document.getElementById("projectNumber").textContent=p.number;
    document.getElementById("projectCategory").textContent=p.category;
    document.getElementById("projectTitle").textContent=p.title;
    document.getElementById("projectDescription").textContent=p.description;
    document.getElementById("projectType").textContent=p.type;
    document.getElementById("projectField").textContent=p.field;

    const image=document.getElementById("projectImage");
    image.src=p.image;
    image.alt=p.title;

    const live=document.getElementById("projectLive");
    live.href=p.url;
  }

  window.addEventListener("hashchange",renderRoute);
  window.addEventListener("popstate",renderRoute);

  /* ALL INTERNAL HASH LINKS */
  document.addEventListener("click",e=>{
    const link=e.target.closest("a[href^='#']");
    if(!link) return;

    const hash=link.getAttribute("href");
    if(!hash || hash==="#") return;

    e.preventDefault();
    navigate(hash);
  });

  /* REVEAL */
  let revealObserver;

  function initReveals(){
    if(revealObserver) revealObserver.disconnect();

    revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },{threshold:.12});

    document.querySelectorAll(".page.active .reveal").forEach((el,i)=>{
      el.classList.remove("visible");
      el.style.transitionDelay=Math.min(i*45,350)+"ms";
      revealObserver.observe(el);
    });
  }

  /* TILT */
  function initTilt(){
    if(matchMedia("(hover:none)").matches) return;

    document.querySelectorAll("[data-tilt]").forEach(card=>{
      if(card.dataset.tiltReady) return;
      card.dataset.tiltReady="1";

      card.addEventListener("pointermove",e=>{
        if(!card.closest(".page.active")) return;

        const r=card.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-.5;
        const y=(e.clientY-r.top)/r.height-.5;

        card.style.transform=
          `perspective(1100px) rotateX(${y*-3.5}deg) rotateY(${x*3.5}deg) translateY(-4px)`;
      });

      card.addEventListener("pointerleave",()=>{
        card.style.transform="";
      });
    });
  }

  /* MAGNETIC */
  function initMagnetic(){
    if(matchMedia("(hover:none)").matches) return;

    document.querySelectorAll(".magnetic").forEach(el=>{
      if(el.dataset.magneticReady) return;
      el.dataset.magneticReady="1";

      el.addEventListener("pointermove",e=>{
        const r=el.getBoundingClientRect();
        const x=e.clientX-r.left-r.width/2;
        const y=e.clientY-r.top-r.height/2;
        el.style.transform=`translate(${x*.12}px,${y*.12}px)`;
      });

      el.addEventListener("pointerleave",()=>{
        el.style.transform="";
      });
    });
  }

  /* PARALLAX */
  function parallax(){
    if(matchMedia("(prefers-reduced-motion:reduce)").matches) return;

    document.querySelectorAll("[data-parallax]").forEach(el=>{
      if(!el.closest(".page.active")) return;
      const speed=Number(el.dataset.parallax)||.05;
      const rect=el.getBoundingClientRect();
      const center=innerHeight/2;
      const offset=(rect.top+rect.height/2-center)*speed;
      el.style.translate=`0 ${offset}px`;
    });
  }
  window.addEventListener("scroll",parallax,{passive:true});

  /* IMAGE FALLBACK */
  document.querySelectorAll("img").forEach(img=>{
    img.addEventListener("error",()=>{
      img.style.display="none";
      img.parentElement.classList.add("image-failed");
    });
  });

  /* HOVER DEPTH */
  document.addEventListener("pointermove",e=>{
    const card=e.target.closest(".project-card__image,.client-feature__image");
    if(!card || matchMedia("(hover:none)").matches) return;

    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width*100;
    const y=(e.clientY-r.top)/r.height*100;
    card.style.setProperty("--mx",x+"%");
    card.style.setProperty("--my",y+"%");
  },{passive:true});

  /* ESC */
  document.addEventListener("keydown",e=>{
    if(e.key==="Escape") closeMenu();
  });

  /* INITIAL */
  renderRoute();
  initReveals();
  initTilt();
  initMagnetic();

  window.addEventListener("load",()=>{
    setTimeout(()=>{
      initReveals();
      initTilt();
      initMagnetic();
    },200);
  });
})();