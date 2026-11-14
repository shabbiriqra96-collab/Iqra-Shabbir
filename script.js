/* Configure your real professional email here when ready. */
const SITE_CONFIG = { professionalEmail: "" };

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

function closeMenu() {
  if (!menuButton || !nav) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
  nav.classList.remove("open");
}
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    menuButton.setAttribute("aria-label", open ? "Open navigation menu" : "Close navigation menu");
    nav.classList.toggle("open", !open);
  });
  navItems.forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
  document.addEventListener("click", e => {
    if (!nav.contains(e.target) && !menuButton.contains(e.target)) closeMenu();
  });
}

const emailLink = document.getElementById("email-cta");
if (emailLink && SITE_CONFIG.professionalEmail.trim()) {
  emailLink.href = "mailto:" + SITE_CONFIG.professionalEmail.trim();
  emailLink.removeAttribute("target");
  emailLink.textContent = "Send me an email ↗";
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const roles = ["Full-Stack Web Developer", "Mathematics Student", "AI & Automation Enthusiast"];
const typed = document.querySelector(".typed-role");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (typed && !reduced) {
  let r = 0, i = roles[0].length, deleting = true;
  function tick() {
    if (deleting) {
      i--;
      typed.textContent = roles[r].slice(0, Math.max(0, i));
      if (i <= 0) { deleting = false; r = (r + 1) % roles.length; setTimeout(tick, 350); return; }
      setTimeout(tick, 38);
    } else {
      i++;
      typed.textContent = roles[r].slice(0, i);
      if (i >= roles[r].length) { deleting = true; setTimeout(tick, 1700); return; }
      setTimeout(tick, 62);
    }
  }
  setTimeout(tick, 1800);
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reduced) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add("visible"));

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navItems.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach(section => sectionObserver.observe(section));
}