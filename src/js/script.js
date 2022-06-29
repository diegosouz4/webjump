import InitCategoria from "./module/InitCategoria.js";
import InitControleCategoria from "./module/InitControleCategoria.js";
import InitMenu from "./module/InitMenu.js";
import InitMenuMobile from "./module/initMobileMenu.js";

window.addEventListener("load", () => {
  InitMenu();
  InitMenuMobile();
  InitControleCategoria();
  InitCategoria();
});
