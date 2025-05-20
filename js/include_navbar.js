document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const isHome = path === "/" || path.endsWith("/index.html");

  fetch("/navbar.html")
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById("navbar-container");
      container.innerHTML = html;

      // Ajout du menu Projets uniquement si ce n’est pas la home
      if (!isHome) {
        const menuProjets = document.createElement("div");
        menuProjets.className = "dropdown";
        menuProjets.innerHTML = `
          <a class="nav-link dropdown-toggle text-white" href="#" id="projetsDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Projets
          </a>
          <ul class="dropdown-menu" aria-labelledby="projetsDropdown">
            <li><a class="dropdown-item" href="/fiction_V2.html">Fictions</a></li>
            <li><a class="dropdown-item" href="/entreprise_V2.html">Commercial</a></li>
          </ul>
        `;
        const desktopMenus = document.getElementById("menuProjetsDesktop");
        if (desktopMenus) {
          desktopMenus.appendChild(menuProjets);
        }
      }
    });
});
