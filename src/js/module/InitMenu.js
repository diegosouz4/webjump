import Api from "./Api.js";

export default function InitMenu() {
  let urlAPI = "http://localhost:8888/api/V1/categories";
  puxaMenu(urlAPI);
}

function puxaMenu(api) {
  const APiMenu = api + "/list";
  Api(APiMenu, montaMenu);
}

function montaMenu(json) {
  let dadosApi = json;
  dadosApi.items.forEach((el) => {
    console.log(el.name);
    criaLi(el);
  });
}

function criaLi(item) {
  const uls = document.querySelectorAll("[data-menu='lista']");

  uls.forEach((ul) => {
    const ultimaLi = Array.from(ul.querySelectorAll("li")).pop();
    const li = document.createElement("li");
    li.innerHTML = `<a data-pageid="${item.id}" href="./${item.path}.html" title="${item.name}">${item.name}</a>`;
    ul.append(li);
    ul.append(ultimaLi);
  });
}
