import Api from "./Api.js";
import CriaFiltro from "./CriaFIltro.js";
import CriaProduto from "./CriaProduto.js";

export default function InitCategoria() {
  const listaProdutos = document.querySelector("#listaProdutos");
  if (!listaProdutos) return;

  pegaId();
}

function pegaId() {
  const urlAtual = window.location.search.includes("id=")
    ? window.location.search.split("?")[1].split("&")[0].split("=")[1]
    : window.location.pathname.replace(".html", "").split("/").pop();

  if (!!+urlAtual) {
    pegaIdCategoria(urlAtual);
    return;
  }

  Api("http://localhost:8888/api/V1/categories/list", puxaDados);
}

function puxaDados(json) {
  const pathAtual = window.location.pathname
    .replace(".html", "")
    .split("/")
    .pop();
  const id = json.items.find((el) => el.path === pathAtual).id;
  pegaIdCategoria(id);
}

function pegaIdCategoria(id) {
  let urlFinal = "http://localhost:8888/api/V1/categories/" + `${id}`;
  Api(urlFinal, carregaProdutos);
  alteraTextos();
}

const alteraTextos = () => {
  const pathAtual = window.location.pathname
    .replace(".html", "")
    .split("/")
    .pop();

  let breadcrumb = document.querySelector(".breadcrumb");
  const h1 = document.querySelector("h1");
  breadcrumb.innerHTML = breadcrumb.innerHTML + `<p>${pathAtual}</p>`;
  h1.innerText = pathAtual;
};

const carregaProdutos = (json) => {
  sessionStorage.teste = JSON.stringify(json);
  const listaFiltros = json.filters;
  let listaProdutos = json.items;

  if (window.location.search.includes("color=")) {
    const cor = window.location.search.split("color=")[1];

    listaProdutos = listaProdutos.filter(
      (produto) => produto.filter[0]["color"] === cor
    );
  }

  listaProdutos.forEach((produto) => {
    CriaProduto(produto);
  });

  listaFiltros.forEach((filtro) => {
    CriaFiltro(filtro, json.items);
  });
};
