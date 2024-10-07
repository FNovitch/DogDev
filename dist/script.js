"use strict";
let menuOpener = document.querySelector(".menu-opener");
let nav = document.querySelector("header nav");
if (menuOpener) {
    menuOpener.addEventListener("click", () => {
        if (nav === null || nav === void 0 ? void 0 : nav.classList.contains("opened")) {
            nav.classList.remove("opened");
            const closeIcon = menuOpener === null || menuOpener === void 0 ? void 0 : menuOpener.querySelector(".close-icon");
            const hamburguer = menuOpener === null || menuOpener === void 0 ? void 0 : menuOpener.querySelector(".hamburguer");
            if (closeIcon) {
                closeIcon.style.display = "none";
            }
            if (hamburguer) {
                hamburguer.style.display = "flex";
            }
        }
        else {
            nav === null || nav === void 0 ? void 0 : nav.classList.add("opened");
            const closeIcon = menuOpener === null || menuOpener === void 0 ? void 0 : menuOpener.querySelector(".close-icon");
            const hamburguer = menuOpener === null || menuOpener === void 0 ? void 0 : menuOpener.querySelector(".hamburguer");
            if (closeIcon) {
                closeIcon.style.display = "none";
            }
            if (hamburguer) {
                hamburguer.style.display = "flex";
            }
        }
    });
}
