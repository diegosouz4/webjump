import Api from "./Api.js";

export default function InitMenu() {
  let urlAPI = "/api/V1/categories/list";
  Api(urlAPI, montaMenu);
}

export function AtualizaMenuAside() {
  let urlAPI = "/api/V1/categories/list";
  Api(urlAPI, montaMenuAside);
}

function montaMenu(json) {
  let dadosApi = json;
  dadosApi.items.forEach((el) => {
    criaLi(el);
  });
}

function montaMenuAside(json) {
  let dadosApi = json;
  dadosApi.items.forEach((el) => {
    criaLi(el, "aside");
  });
}

function criaLi(item, posicao = "principal") {
  const posicaoMenu = `[data-menu=${posicao}]`;
  const uls = document.querySelectorAll(posicaoMenu);

  if (!uls) return;

  uls.forEach((ul) => {
    const ultimaLi = Array.from(ul.querySelectorAll("li")).pop();
    const li = document.createElement("li");
    li.innerHTML = `<a data-link data-pageid="${item.id}" href="./${item.path}.html" title="${item.name}">${item.name}</a>`;
    ul.append(li);
    if (ultimaLi) ul.append(ultimaLi);
  });
}
