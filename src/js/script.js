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
    "/camisetas": InitPaginaCategoria,
    "/calcas": InitPaginaCategoria,
    "/calcados": InitPaginaCategoria,
    "/tenis-": InitPaginaProduto,
    "/camiseta-": InitPaginaProduto,
    "/calca-": InitPaginaProduto,
  };

  let path = location.pathname.replace(".html", "");
  if (path.split("-").length > 1) {
    path = path.split("-")[0] + "-";
  }
  const rota = rotas[path] || rotas["/"];
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
