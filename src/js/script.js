import InitMenu from "./module/InitMenu.js";
import InitMenuMobile from "./module/initMobileMenu.js";
import InitPaginaCategoria from "./view/categorias.js";
import InitPaginaHome from "./view/home.js";
import InitPaginaProduto from "./view/produto.js";

window.addEventListener("load", () => {
  InitMenu();
  InitMenuMobile();

  acharRota();
});

function acharRota() {
  const rotas = {
    "/": InitPaginaHome,
    "/camisetas.html": InitPaginaCategoria,
    "/calcas.html": InitPaginaCategoria,
    "/calcados.html": InitPaginaCategoria,
    "/camiseta/": InitPaginaProduto,
    "/calcas/": InitPaginaProduto,
    "/calcados/": InitPaginaProduto,
  };

  const path = location.pathname;
  const rota = rotas[path] || rotas[404];
  rota();
}

window.addEventListener("popstate", acharRota);

document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navegaPara(e.target.href);
  }
});

function navegaPara(url) {
  history.pushState(null, null, url);
  acharRota();
}