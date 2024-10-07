type HTMLEl = HTMLElement | null;

let menuOpener: HTMLEl = document.querySelector(".menu-opener");
let nav = document.querySelector("header nav");
if (menuOpener) {
  menuOpener.addEventListener("click", () => {
    if (nav?.classList.contains("opened")) {
      nav.classList.remove("opened");
      const closeIcon = menuOpener?.querySelector(".close-icon") as HTMLEl;
      const hamburguer = menuOpener?.querySelector(".hamburguer") as HTMLEl;
      if (closeIcon) {
        closeIcon.style.display = "none";
      }
      if (hamburguer) {
        hamburguer.style.display = "flex";
      }
    } else {
      nav?.classList.add("opened");
      const closeIcon = menuOpener?.querySelector(".close-icon") as HTMLEl;
      const hamburguer = menuOpener?.querySelector(".hamburguer") as HTMLEl;
      if (closeIcon) {
        closeIcon.style.display = "none";
      }
      if (hamburguer) {
        hamburguer.style.display = "flex";
      }
    }
  });
}
