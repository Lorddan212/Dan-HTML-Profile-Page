/** Profile data (easy to edit later) */
const PROFILE = {
  name: "Daniel Odion Jegbefumhen",
  phone: "+2348109368514",
  email: "jegbefumhendaniel@gmail.com",
  whatsappNumberE164NoPlus: "2348109368514",
  whatsappText: "Hi Daniel, I saw your portfolio and I want to discuss a project/service.",
  profileImages: ["assets/img/Dan Web_HD.png","assets/img/Dan Elect_HD.png","assets/img/Dan_HD.png"]
};

/* ===== Helpers ===== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ===== Year ===== */
(function setYear(){
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
})();

/* ===== Theme Toggle ===== */
(function themeToggle(){
  const btn = $("#themeToggle");
  const saved = localStorage.getItem("theme");
  if (saved) document.body.setAttribute("data-theme", saved);

  // FUNCTION-RUN-GENERATED-CODE-START:syncIcon
  (async () => { console.log(await syncIcon(/* OpenAI API key not provided */)); })();
  // FUNCTION-RUN-GENERATED-CODE-END:syncIcon

  function syncIcon(){
    if (!btn) return;
    const t = document.body.getAttribute("data-theme") || "dark";
    btn.innerHTML = t === "light"
      ? `<i class="bi bi-sun"></i>`
      : `<i class="bi bi-moon-stars"></i>`;
  }
  syncIcon();

  if (!btn) return;
  btn.addEventListener("click", () => {
    const cur = document.body.getAttribute("data-theme") || "dark";
    const next = cur === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    syncIcon();
  });
})();

/* ===== Mobile Navbar Auto-Close ===== */
(function mobileNavbarAutoClose(){
  const navCollapse = $("#nav");
  if (!navCollapse) return;

  navCollapse.addEventListener("click", (e) => {
    const target = e.target.closest(".nav-link, #themeToggle");
    if (!target) return;
    if (window.innerWidth >= 992) return;
    if (!navCollapse.classList.contains("show")) return;

    if (window.bootstrap?.Collapse){
      window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
    } else {
      navCollapse.classList.remove("show");
    }
  });
})();

/* ===== Typed Name ===== */
(function typedName(){
  const el = $("#typedName");
  if (!el) return;

  const text = PROFILE.name;
  let i = 0;

  function type(){
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) setTimeout(type, 55);
  }
  type();
})();

/* ===== Hero Core Skill Word Cycler ===== */
(function heroCoreWordCycler(){
  const el = $("#heroSkillWord");
  if (!el) return;

  const words = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "UI",
    "UX",
    "Landing Page",
    "Portfolio",
    "E-commerce",
    "Responsive",
    "SEO",
    "API",
    "Git",
    "CCTV",
    "Installation",
    "Solar",
    "Inverter",
    "Wiring",
    "Panel",
    "Smart Home",
    "Power",
    "Maintenance",
    "Printing",
    "Large Format",
    "Branding",
    "Flyers",
    "Business Cards",
    "Banners",
    "Vinyl",
    "Design"
  ];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let idx = 0;
  let timer = null;

  function applyWordColor(wordIndex, word){
    const hue = Math.round((wordIndex * 137.508 + word.length * 11) % 360);
    const darkColor = `hsl(${hue} 95% 78%)`;
    const darkGlow = `hsla(${hue} 95% 58% / .44)`;
    const lightColor = `hsl(${hue} 72% 34%)`;
    const lightGlow = `hsla(${hue} 85% 46% / .22)`;

    el.style.setProperty("--core-word-color", darkColor);
    el.style.setProperty("--core-word-glow", darkGlow);
    el.style.setProperty("--core-word-color-light", lightColor);
    el.style.setProperty("--core-word-glow-light", lightGlow);
  }

  function fitWord(word){
    el.style.fontSize = "";
    if (word.length >= 13) el.style.fontSize = "0.76rem";
    if (word.length >= 17) el.style.fontSize = "0.66rem";
  }

  function show(nextIndex){
    const word = words[nextIndex];
    fitWord(word);
    applyWordColor(nextIndex, word);

    el.classList.remove("pop-in");
    // Restart animation for each new word
    void el.offsetWidth;
    el.textContent = word;
    el.classList.add("pop-in");
    idx = nextIndex;
  }

  show(0);

  if (reduceMotion.matches) return;

  function nextRandomIndex(){
    if (words.length < 2) return 0;
    let next = idx;
    while (next === idx){
      next = Math.floor(Math.random() * words.length);
    }
    return next;
  }

  function queueNext(){
    const delay = 1050 + Math.floor(Math.random() * 1150);
    timer = setTimeout(() => {
      show(nextRandomIndex());
      queueNext();
    }, delay);
  }

  queueNext();

  reduceMotion.addEventListener?.("change", (e) => {
    if (e.matches && timer){
      clearTimeout(timer);
      timer = null;
    } else if (!e.matches && !timer){
      queueNext();
    }
  });
})();

/* ===== WhatsApp Links ===== */
(function whatsappLinks(){
  const msg = encodeURIComponent(PROFILE.whatsappText);
  const waLink = `https://wa.me/${PROFILE.whatsappNumberE164NoPlus}?text=${msg}`;

  const floatBtn = $("#whatsappFloat");
  if (floatBtn) floatBtn.href = waLink;

  const contactBtn = $("#whatsappContact");
  if (contactBtn) contactBtn.href = waLink;
})();

/* ===== DP Rotator (SVG shield crossfade like earlier) ===== */
(function rotateProfilePics(){
  const aImg = $("#profileImgA");
  const bImg = $("#profileImgB");
  const shield = $(".dp-shield");
  const layers = $$(".shield-layer", shield || document);

  if (!aImg || !bImg || !shield || layers.length < 2) return;

  let idx = 0;
  let activeLayerIndex = 0; // 0 => first layer, 1 => second layer

  // Preload for smooth switching
  PROFILE.profileImages.forEach((src) => {
    const i = new Image();
    i.src = src;
  });

  function setInitial(){
    aImg.setAttribute("href", PROFILE.profileImages[0]);
    layers[0].classList.add("is-active");
    layers[1].classList.remove("is-active");
  }

  function swapTo(nextIndex){
    const activeLayer = layers[activeLayerIndex];
    const nextLayerIndex = activeLayerIndex === 0 ? 1 : 0;
    const nextLayer = layers[nextLayerIndex];
    const nextImgEl = nextLayerIndex === 0 ? aImg : bImg;

    // Set next image first
    nextImgEl.setAttribute("href", PROFILE.profileImages[nextIndex]);

    // Animate out active, animate in next (no blank gap)
    activeLayer.classList.remove("enter");
    activeLayer.classList.add("exit");

    nextLayer.classList.remove("exit");
    nextLayer.classList.add("enter");
    nextLayer.classList.add("is-active");

    // Cleanup after animation
    setTimeout(() => {
      activeLayer.classList.remove("is-active");
      activeLayer.classList.remove("exit");
      nextLayer.classList.remove("enter");
    }, 900);

    activeLayerIndex = nextLayerIndex;
    idx = nextIndex;
  }

  setInitial();

  // Keep your original timing (3800ms) so everything else feels the same
  setInterval(() => {
    const next = (idx + 1) % PROFILE.profileImages.length;
    swapTo(next);
  }, 3800);
})();

/* ===== Reveal on Scroll ===== */
(function revealOnScroll(){
  const els = $$(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
})();

/* ===== Scroll Progress Bar ===== */
(function scrollProgress(){
  const bar = $("#scrollProgress");
  if (!bar) return;

  function update(){
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? (window.scrollY / h) * 100 : 0;
    bar.style.width = `${p}%`;
  }
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
})();

/* ===== Parallax Background ===== */
(function parallax(){
  const grid = $(".fx-grid");
  const orbs = $$(".fx-orbs .orb");
  if (!grid && !orbs.length) return;

  window.addEventListener("scroll", () => {
    const y = window.scrollY || 0;
    if (grid) grid.style.transform = `translate(${y * 0.01}px, ${y * -0.015}px) rotate(-6deg)`;
    orbs.forEach((o, i) => {
      o.style.transform = `translate(${y * (0.01 + i*0.002)}px, ${y * (-0.012 - i*0.002)}px)`;
    });
  }, { passive: true });
})();

/* ===== Tilt Cards ===== */
(function tiltCards(){
  const cards = $$(".tilt-card");
  if (!cards.length) return;

  cards.forEach(card => {
    const rect = () => card.getBoundingClientRect();

    function onMove(e){
      const r = rect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const rx = (y - 0.5) * -10;
      const ry = (x - 0.5) * 10;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    }
    function onLeave(){
      card.style.transform = "";
    }

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
  });
})();

/* ===== Contact Form (mailto) + Copy Email ===== */
(function contactTools(){
  const form = $("#contactForm");
  const toast = $("#formToast");
  const copyBtn = $("#copyEmailBtn");

  function showToast(msg){
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove("d-none");
    setTimeout(() => toast.classList.add("d-none"), 2600);
  }

  if (copyBtn){
    copyBtn.addEventListener("click", async () => {
      try{
        await navigator.clipboard.writeText(PROFILE.email);
        showToast("Email copied ✅");
      }catch{
        showToast("Copy failed — please copy manually.");
      }
    });
  }

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const service = (fd.get("service") || "").toString().trim();
    const message = (fd.get("message") || "").toString().trim();

    if (!name || !email || !message){
      showToast("Please fill in name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry — ${service}`);
    const body = encodeURIComponent(
      `Hello Daniel,\n\n` +
      `My Name: ${name}\n` +
      `My Email: ${email}\n` +
      `Service Needed: ${service}\n\n` +
      `Message:\n${message}\n\n` +
      `Thanks.`
    );

    // Open mail client
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    showToast("Opening your email app…");
    form.reset();
  });
})();

/* ===== Gallery Filter + Sliding Effect ===== */
(function galleryFilter(){
  const grid = $("#galleryGrid");
  if (!grid) return;

  const stage = $("#galleryStage");
  const pill = $("#filterPill");
  const buttons = $$(".filter-btn");
  const items = $$(".gallery-item");

  function positionPill(btn){
    if (!pill || !btn) return;
    const r = btn.getBoundingClientRect();
    const pr = btn.parentElement.getBoundingClientRect();
    pill.style.width = `${r.width}px`;
    pill.style.left = `${r.left - pr.left}px`;
    pill.style.top = `${r.top - pr.top}px`;
  }

  function setActive(btn){
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    positionPill(btn);
  }

  function applyFilter(cat){
    // stage bump (slide feel)
    if (stage){
      stage.style.transform = "translateX(8px)";
      stage.style.transition = "transform .25s ease";
      setTimeout(() => stage.style.transform = "translateX(0)", 220);
    }

    items.forEach((it, idx) => {
      const match = cat === "all" || it.dataset.cat === cat;

      if (!match){
        it.classList.add("hide");
        it.classList.remove("show2");
      } else {
        it.classList.remove("hide");
        setTimeout(() => it.classList.add("show2"), 40 + (idx % 8) * 25);
      }
    });
  }

  // initial pill position
  const initBtn = $(".filter-btn.active") || buttons[0];
  if (initBtn) setTimeout(() => positionPill(initBtn), 20);

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.filter;
      setActive(btn);
      applyFilter(cat);
    });
  });

  window.addEventListener("resize", () => {
    const active = $(".filter-btn.active");
    if (active) positionPill(active);
  });

  // initial show animation
  applyFilter("all");
})();

/* ===== Gallery Modal Viewer ===== */
(function galleryModal(){
  const modalEl = $("#imgModal");
  const modalImg = $("#imgModalSrc");
  const modalCap = $("#imgModalCap");
  if (!modalEl || !modalImg) return;

  const bsModal = new bootstrap.Modal(modalEl);

  document.addEventListener("click", (e) => {
    const img = e.target.closest(".gallery-tile2 img");
    if (!img) return;

    modalImg.src = img.src;
    modalCap.textContent = img.alt || "Preview";
    bsModal.show();
  });
})();

/* ===== Canvas FX: circuit traces + moving pulses ===== */
(function fxCanvas(){
  const canvas = $("#fxCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let w = 0, h = 0, dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  let raf = 0;
  let traces = [];
  let dots = [];

  function resize(){
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildScene();
  }
  resize();
  window.addEventListener("resize", resize);

  function rand(min, max){ return Math.random() * (max - min) + min; }

  function nxy(nx, ny){
    return [nx * w, ny * h];
  }

  function makeTrace(points, options = {}){
    const segments = [];
    let totalLength = 0;

    for (let i = 0; i < points.length - 1; i++){
      const [x1, y1] = points[i];
      const [x2, y2] = points[i + 1];
      const len = Math.hypot(x2 - x1, y2 - y1);
      if (!len) continue;
      segments.push({ x1, y1, x2, y2, len, start: totalLength });
      totalLength += len;
    }

    return {
      points,
      segments,
      totalLength: Math.max(totalLength, 1),
      width: options.width ?? 1.2,
      alpha: options.alpha ?? 0.18,
      hue: options.hue ?? (Math.random() > 0.5 ? "blue" : "pink"),
      pulseSpeed: options.pulseSpeed ?? rand(0.035, 0.09),
      phase: rand(0, 1),
      pulseCount: options.pulseCount ?? 2,
      nodeEvery: options.nodeEvery ?? 1
    };
  }

  function buildCornerTraces(sideX, sideY){
    const dirX = sideX < 0.5 ? 1 : -1;
    const dirY = sideY < 0.5 ? 1 : -1;
    const x0 = sideX < 0.5 ? 0.03 : 0.97;
    const y0 = sideY < 0.5 ? 0.06 : 0.94;

    return [
      makeTrace([
        nxy(x0, y0),
        nxy(x0 + dirX * 0.10, y0),
        nxy(x0 + dirX * 0.10, y0 + dirY * 0.08),
        nxy(x0 + dirX * 0.18, y0 + dirY * 0.08),
        nxy(x0 + dirX * 0.18, y0 + dirY * 0.18),
        nxy(x0 + dirX * 0.28, y0 + dirY * 0.18)
      ], { width: 1.35, alpha: 0.22, hue: sideX < 0.5 ? "pink" : "blue", pulseCount: 3 }),
      makeTrace([
        nxy(x0 + dirX * 0.02, y0 + dirY * 0.12),
        nxy(x0 + dirX * 0.08, y0 + dirY * 0.12),
        nxy(x0 + dirX * 0.08, y0 + dirY * 0.05),
        nxy(x0 + dirX * 0.15, y0 + dirY * 0.05),
        nxy(x0 + dirX * 0.15, y0 + dirY * 0.16),
        nxy(x0 + dirX * 0.21, y0 + dirY * 0.16)
      ], { width: 1.0, alpha: 0.16, hue: "cyan", pulseCount: 2 }),
      makeTrace([
        nxy(x0 + dirX * 0.01, y0 + dirY * 0.20),
        nxy(x0 + dirX * 0.06, y0 + dirY * 0.20),
        nxy(x0 + dirX * 0.06, y0 + dirY * 0.14),
        nxy(x0 + dirX * 0.12, y0 + dirY * 0.14),
        nxy(x0 + dirX * 0.12, y0 + dirY * 0.24),
        nxy(x0 + dirX * 0.22, y0 + dirY * 0.24)
      ], { width: 1.0, alpha: 0.14, hue: "purple", pulseCount: 2 }),
      makeTrace([
        nxy(x0 + dirX * 0.06, y0 + dirY * 0.01),
        nxy(x0 + dirX * 0.12, y0 + dirY * 0.01),
        nxy(x0 + dirX * 0.12, y0 + dirY * 0.07),
        nxy(x0 + dirX * 0.20, y0 + dirY * 0.07),
        nxy(x0 + dirX * 0.20, y0 + dirY * 0.13)
      ], { width: 0.95, alpha: 0.13, hue: "blue", pulseCount: 2 })
    ];
  }

  function buildMidLaneTraces(){
    return [
      makeTrace([nxy(0.08, 0.50), nxy(0.16, 0.50), nxy(0.16, 0.40), nxy(0.26, 0.40), nxy(0.26, 0.34)], { hue: "pink", alpha: 0.13, width: 1.1 }),
      makeTrace([nxy(0.92, 0.50), nxy(0.84, 0.50), nxy(0.84, 0.60), nxy(0.74, 0.60), nxy(0.74, 0.66)], { hue: "blue", alpha: 0.13, width: 1.1 }),
      makeTrace([nxy(0.30, 0.14), nxy(0.38, 0.14), nxy(0.38, 0.20), nxy(0.46, 0.20)], { hue: "cyan", alpha: 0.1, width: 0.9, pulseCount: 1 }),
      makeTrace([nxy(0.70, 0.86), nxy(0.62, 0.86), nxy(0.62, 0.80), nxy(0.54, 0.80)], { hue: "purple", alpha: 0.1, width: 0.9, pulseCount: 1 })
    ];
  }

  function buildDots(){
    dots = [];
    const count = Math.max(40, Math.min(96, Math.floor((w * h) / 26000)));
    for (let i = 0; i < count; i++){
      dots.push({
        x: rand(0, w),
        y: rand(0, h),
        vx: rand(-0.08, 0.08),
        vy: rand(-0.08, 0.08),
        r: rand(0.7, 1.6),
        a: rand(0.05, 0.2)
      });
    }
  }

  function buildScene(){
    traces = [
      ...buildCornerTraces(0, 0),
      ...buildCornerTraces(1, 0),
      ...buildCornerTraces(0, 1),
      ...buildCornerTraces(1, 1),
      ...buildMidLaneTraces()
    ];
    buildDots();
  }

  function strokeTrace(trace){
    if (!trace.points.length) return;
    ctx.beginPath();
    ctx.moveTo(trace.points[0][0], trace.points[0][1]);
    for (let i = 1; i < trace.points.length; i++){
      ctx.lineTo(trace.points[i][0], trace.points[i][1]);
    }
    ctx.lineWidth = trace.width;

    const strokeColor = trace.hue === "pink"
      ? `rgba(255,65,176,${trace.alpha})`
      : trace.hue === "purple"
      ? `rgba(177,76,255,${trace.alpha})`
      : trace.hue === "cyan"
      ? `rgba(0,255,240,${trace.alpha})`
      : `rgba(0,163,255,${trace.alpha})`;

    ctx.strokeStyle = strokeColor;
    ctx.stroke();

    ctx.fillStyle = strokeColor.replace(`${trace.alpha})`, `${Math.min(0.35, trace.alpha + 0.08)})`);
    for (let i = 0; i < trace.points.length; i += Math.max(1, trace.nodeEvery)){
      const [x, y] = trace.points[i];
      ctx.beginPath();
      ctx.arc(x, y, Math.max(1, trace.width * 0.9), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function pointOnTrace(trace, t){
    const target = ((t % 1) + 1) % 1 * trace.totalLength;
    const seg = trace.segments.find(s => target >= s.start && target <= s.start + s.len) || trace.segments[trace.segments.length - 1];
    const local = seg ? (target - seg.start) / seg.len : 0;
    return seg
      ? {
          x: seg.x1 + (seg.x2 - seg.x1) * local,
          y: seg.y1 + (seg.y2 - seg.y1) * local
        }
      : { x: trace.points[0]?.[0] || 0, y: trace.points[0]?.[1] || 0 };
  }

  function drawPulse(trace, t, scale = 1){
    const p = pointOnTrace(trace, t);
    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 14 * scale);
    if (trace.hue === "pink"){
      grad.addColorStop(0, "rgba(255,90,190,.95)");
      grad.addColorStop(.55, "rgba(255,65,176,.28)");
    } else if (trace.hue === "purple"){
      grad.addColorStop(0, "rgba(190,130,255,.95)");
      grad.addColorStop(.55, "rgba(177,76,255,.24)");
    } else if (trace.hue === "cyan"){
      grad.addColorStop(0, "rgba(110,255,245,.95)");
      grad.addColorStop(.55, "rgba(0,255,240,.22)");
    } else {
      grad.addColorStop(0, "rgba(95,190,255,.95)");
      grad.addColorStop(.55, "rgba(0,163,255,.22)");
    }
    grad.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 14 * scale, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "rgba(255,255,255,.85)";
    ctx.arc(p.x, p.y, Math.max(1.4, 1.8 * scale), 0, Math.PI * 2);
    ctx.fill();
  }

  function drawDots(){
    dots.forEach((d) => {
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < -4) d.x = w + 4;
      if (d.x > w + 4) d.x = -4;
      if (d.y < -4) d.y = h + 4;
      if (d.y > h + 4) d.y = -4;

      ctx.beginPath();
      ctx.fillStyle = `rgba(130,180,255,${d.a})`;
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function draw(now = 0){
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";

    drawDots();

    traces.forEach((trace) => {
      strokeTrace(trace);

      if (reduceMotion.matches) return;
      for (let i = 0; i < trace.pulseCount; i++){
        const phase = trace.phase + (i / trace.pulseCount);
        drawPulse(trace, phase + now * trace.pulseSpeed * 0.0014, 0.8 + i * 0.15);
      }
    });

    ctx.restore();
    if (!reduceMotion.matches){
      raf = requestAnimationFrame(draw);
    } else {
      raf = 0;
    }
  }

  buildScene();
  draw();

  reduceMotion.addEventListener?.("change", () => {
    cancelAnimationFrame(raf);
    draw();
  });
})();
