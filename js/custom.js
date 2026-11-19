document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".category-nav a").forEach(btn => {
    btn.addEventListener("click", e => {
      const href = btn.href;

      e.preventDefault();

      btn.classList.remove("crack");
      void btn.offsetWidth;
      btn.classList.add("crack");

      setTimeout(() => {
        window.location.href = href;
      }, 150);
    });
  });
});