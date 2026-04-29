const PROFILE = {
  email: "jegbefumhendaniel@gmail.com",
  phone: "+2348109368514",
  whatsappNumberE164NoPlus: "2348109368514",
  whatsappText: "Hello Daniel, I saw your portfolio and would like to discuss a project.",
  profileImages: [
    "assets/img/Dan_HD.png",
    "assets/img/Dan Elect_HD.png",
    "assets/img/Dan Web_HD.png"
  ]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

(function setYear() {
  $$("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();

(function themeToggle() {
  const btn = $("#themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
  }

  function syncLabel() {
    if (!btn) return;

    const darkMode = document.body.getAttribute("data-theme") === "dark";
    btn.innerHTML = darkMode
      ? '<i class="bi bi-sun"></i><span>Light</span>'
      : '<i class="bi bi-moon-stars"></i><span>Dark</span>';
  }

  syncLabel();

  if (!btn) return;

  btn.addEventListener("click", () => {
    const darkMode = document.body.getAttribute("data-theme") === "dark";
    if (darkMode) {
      document.body.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    } else {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    syncLabel();
  });
})();

(function mobileNavbarAutoClose() {
  const navCollapse = $("#siteNav");
  if (!navCollapse) return;

  navCollapse.addEventListener("click", (event) => {
    const target = event.target.closest(".nav-link, .btn, .theme-toggle");
    if (!target || window.innerWidth >= 992 || !navCollapse.classList.contains("show")) return;

    if (window.bootstrap?.Collapse) {
      window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
    }
  });
})();

(function revealOnScroll() {
  const revealItems = $$("[data-reveal]");
  if (!revealItems.length) return;

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.14
  });

  revealItems.forEach((item) => observer.observe(item));
})();

(function rotateHeroProfileImage() {
  const image = $("#heroProfileImage");
  if (!image || !PROFILE.profileImages?.length) return;

  PROFILE.profileImages.forEach((src) => {
    const preload = new Image();
    preload.src = src;
  });

  let currentIndex = 0;
  image.style.transition = "opacity 0.45s ease";

  setInterval(() => {
    currentIndex = (currentIndex + 1) % PROFILE.profileImages.length;
    image.style.opacity = "0";

    setTimeout(() => {
      image.src = PROFILE.profileImages[currentIndex];
      image.style.opacity = "1";
    }, 220);
  }, 3200);
})();

(function whatsappLinks() {
  const message = encodeURIComponent(PROFILE.whatsappText);
  const link = `https://wa.me/${PROFILE.whatsappNumberE164NoPlus}?text=${message}`;

  $$("[data-whatsapp-link]").forEach((node) => {
    node.setAttribute("href", link);
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noreferrer");
  });
})();

(function copyEmail() {
  const buttons = $$("[data-copy-email]");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const note = button.closest("form, .form-panel")?.querySelector("[data-form-note]");

      try {
        await navigator.clipboard.writeText(PROFILE.email);
        if (note) note.textContent = "Email copied successfully.";
      } catch {
        if (note) note.textContent = "Copy failed. Please copy the email manually.";
      }
    });
  });
})();

(function contactForms() {
  const forms = $$("[data-contact-form]");
  if (!forms.length) return;

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const note = $("[data-form-note]", form);
      const formData = new FormData(form);
      const name = (formData.get("name") || "").toString().trim();
      const email = (formData.get("email") || "").toString().trim();
      const service = (formData.get("service") || "").toString().trim();
      const message = (formData.get("message") || "").toString().trim();

      if (!name || !email || !service || !message) {
        if (note) note.textContent = "Please fill in all fields before sending.";
        return;
      }

      const subject = encodeURIComponent(`Project Inquiry - ${service}`);
      const body = encodeURIComponent(
        `Hello Daniel,\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Service Needed: ${service}\n\n` +
        `Project Details:\n${message}\n`
      );

      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      if (note) note.textContent = "Your email app should open now.";
      form.reset();
    });
  });
})();

(function galleryFilter() {
  const buttons = $$("[data-filter]");
  const items = $$(".gallery-item");
  if (!buttons.length || !items.length) return;

  function applyFilter(filter) {
    items.forEach((item) => {
      const matches = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("is-hidden", !matches);
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((node) => node.classList.remove("active"));
      button.classList.add("active");
      applyFilter(button.dataset.filter || "all");
    });
  });

  applyFilter("all");
})();

(function galleryModal() {
  const modalElement = $("#galleryModal");
  const modalImage = $("#galleryModalImage");
  const modalCaption = $("#galleryModalCaption");
  if (!modalElement || !modalImage || !window.bootstrap) return;

  const modal = new bootstrap.Modal(modalElement);

  $$(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => {
      const image = card.dataset.image;
      const caption = card.dataset.caption || "";
      if (!image) return;

      modalImage.src = image;
      modalImage.alt = caption;
      if (modalCaption) modalCaption.textContent = caption;
      modal.show();
    });
  });

  modalElement.addEventListener("hidden.bs.modal", () => {
    modalImage.src = "";
    modalImage.alt = "";
    if (modalCaption) modalCaption.textContent = "";
  });
})();
