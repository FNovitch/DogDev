type NullableElement = HTMLElement | null;

const menuToggle = document.querySelector(".menu-toggle") as NullableElement;
const nav = document.querySelector(".site-nav") as NullableElement;
const navLinks = document.querySelectorAll(".site-nav a");

const closeMenu = () => {
  if (!menuToggle || !nav) {
    return;
  }

  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  nav.classList.remove("is-open");
};

const openMenu = () => {
  if (!menuToggle || !nav) {
    return;
  }

  menuToggle.classList.add("is-open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Fechar menu");
  nav.classList.add("is-open");
};

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 960) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 960) {
      closeMenu();
    }
  });
}
