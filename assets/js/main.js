// Scroll-reveal: fades and lifts sections into view as the user scrolls.
document.addEventListener("DOMContentLoaded", () => {
  const revealTargets = document.querySelectorAll(
    ".about-grid, .project-group-label, .project-card, .post-row, .contact-card, h2.sec-title"
  );

  revealTargets.forEach((el, i) => {
    if (el.tagName === "H2") {
      el.classList.add("reveal");
    } else {
      el.classList.add("reveal");
    }
    el.style.transitionDelay = `${Math.min(i * 0.05, 0.3)}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          if (entry.target.tagName === "H2") {
            entry.target.classList.add("sec-title-visible");
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );

  revealTargets.forEach((el) => observer.observe(el));

  // Hero entrance (runs immediately on load, no scroll needed)
  const heroLeft = document.querySelector(".hero-grid > div:first-child");
  const heroCard = document.querySelector(".status-card");
  [heroLeft, heroCard].forEach((el) => {
    if (el) el.classList.add("hero-enter");
  });

  // Double rAF forces the browser to paint the "hidden" state first,
  // so the transition to "visible" actually animates instead of snapping.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (heroLeft) heroLeft.classList.add("hero-enter-visible");
      setTimeout(() => {
        if (heroCard) heroCard.classList.add("hero-enter-visible");
      }, 150);
    });
  });
});