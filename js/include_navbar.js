// include-navbar.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("/navbar.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("navbar-container").innerHTML = html;
      });
  });
  