document.addEventListener("DOMContentLoaded", function () {

  const menuButton = document.querySelector(".menu");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav a");

  if (menuButton && nav) {

    menuButton.addEventListener("click", function () {
      nav.classList.toggle("open");

      const isOpen = nav.classList.contains("open");

      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-label", "Abrir menu");
      });
    });

  }

});
