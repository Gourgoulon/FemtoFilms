document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  const navbarFile =
    path === "/" || path.endsWith("/index.html")
      ? "/navbar.html"
      : "/navbar_alt.html";

  fetch(navbarFile)
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById("navbar-container");
      container.innerHTML = html;

      // 🔧 Astuce : forcer recalcul du sticky
      requestAnimationFrame(() => {
        const nav = container.querySelector('.navbar');
        nav?.classList.remove('sticky-top'); // retirer puis remettre
        void nav?.offsetWidth; // force reflow
        nav?.classList.add('sticky-top');
      });
    });
});
